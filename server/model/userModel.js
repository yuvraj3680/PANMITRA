const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const UserDetails = {
  createUser: async ({ name, address, mobile, aadhar, amountType, userId, pinCode, email, companyName, pan, charges, state, password, username }) => {
    try {
      return await prisma.userDetails.create({
        data: {
          name,
          address,
          mobile,
          aadhar,
          amountType,
          userId,
          pinCode,
          email,
          companyName,
          pan,
          charges,
          state,
          password,
          username,
        },
      });
    } catch (error) {
      console.error("Error creating user: ", error);
      throw error;
    }
  },

  getAllUsers: async () => {
    try {
      return await prisma.userDetails.findMany();
    } catch (error) {
      console.error("Error fetching all users: ", error);
      throw error;
    }
  },

  readUserByEmail: async (email) => {
    try {
      return await prisma.userDetails.findFirst({
        where: { email },
      });
    } catch (error) {
      console.error("Error reading user by email: ", error);
      throw error;
    }
  },

  readUserByUsername: async (username) => {
    try {
      return await prisma.userDetails.findFirst({
        where: { username },
      });
    } catch (error) {
      console.error("Error reading user by username: ", error);
      throw error;
    }
  },

  readUserByUsernameAndPassword: async (username, password) => {
    try {
      return await prisma.userDetails.findFirst({
        where: { username, password },
      });
    } catch (error) {
      console.error("Error reading user by username and password: ", error);
      throw error;
    }
  },

  // Add more functions as needed, such as updateUserById, deleteUserById, etc.
};

module.exports = UserDetails;
