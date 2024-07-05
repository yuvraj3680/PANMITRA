// findPanController.js

const axios = require("axios");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findPanController = {
  findPanByUid: async (req, res) => {
    const apiKey = process.env.API_KEY || "dd3ab4-b047e8-f11e46-bba512-781c51";
    const { uid } = req.params;

    try {
      if (!uid) {
        return res
          .status(400)
          .send({ status: "0", message: "UID is required" });
      }

      const url = `https://pannumberfind.com/api/findpanrequest?api_key=${apiKey}&uid=${uid}`;
      const response = await axios.get(url);
      console.log(response.data);

      if (response.status !== 200) {
        return res
          .status(response.status)
          .send({
            status: "0",
            message: `External API returned status code: ${response.status}`,
          });
      }

      // Log the entire response data for debugging
      console.log("API Response Data:", response.data);

      const { name, dob, pan, status } = response.data;

      // Log the date of birth for debugging
      console.log("Date of Birth from API:", dob);

      // Check if the customer already exists
      const existingCustomer = await prisma.pANCustomer.findUnique({
        where: { uid },
      });

      let createdCustomer;
      if (existingCustomer) {
        // Update the existing customer
        createdCustomer = await prisma.pANCustomer.update({
          where: { uid },
          data: {
            name: name || existingCustomer.name,
            dob: dob || existingCustomer.dob, // Use the existing dob if not provided
            pan,
            status: status === "Accepted" ? "Accepted" : "Pending", // Adjust as per your enum definition
          },
        });
      } else {
        // Create a new customer
        createdCustomer = await prisma.pANCustomer.create({
          data: {
            name: name || "Request Accepted",
            uid,
            dob: dob || "", // Store dob as string
            pan,
            status: status === "Accepted" ? "Accepted" : "Pending", // Adjust as per your enum definition
          },
        });
      }

      res.status(200).send({ status: "1", data: createdCustomer });
    } catch (error) {
      console.error("Error fetching and storing PAN details: ", error.message);

      let errorMessage = "Internal Server Error";
      if (error.response) {
        errorMessage = `External API Error: ${error.response.status} - ${error.response.data.message}`;
      }

      res.status(500).send({
        status: "0",
        message: errorMessage,
        error: error.message,
      });
    } finally {
      await prisma.$disconnect();
    }
  },

  getAllCustomers: async (req, res) => {
    try {
      const customers = await prisma.pANCustomer.findMany();

      res.status(200).send({ status: "1", data: customers });
    } catch (error) {
      console.error("Error fetching all customers: ", error.message);

      res.status(500).send({
        status: "0",
        message: "Internal Server Error",
        error: error.message,
      });
    } finally {
      await prisma.$disconnect();
    }
  },
};

module.exports = findPanController;
