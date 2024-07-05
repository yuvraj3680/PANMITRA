const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const PANApplication = {
  createApplication: async (data) => {
    try {
      return await prisma.pANApplication.create({
        data: {
          title: data.title,
          lastName: data.lastName,
          firstName: data.firstName,
          middleName: data.middleName,
          nameOnCard: data.nameOnCard,
          dateOfBirth: data.dateOfBirth, // Ensure the date is correctly formatted
          gender: data.gender,
          fatherLastName: data.fatherLastName,
          fatherFirstName: data.fatherFirstName,
          fatherMiddleName: data.fatherMiddleName,
          aadhaarNumber: data.aadhaarNumber,
          nameAsPerAadhaar: data.nameAsPerAadhaar,
          mobileNumber: data.mobileNumber,
          emailAddress: data.emailAddress,
          flatRoomDoorBlockNo: data.flatRoomDoorBlockNo,
          buildingVillageName: data.buildingVillageName,
          roadStreetLanePostOffice: data.roadStreetLanePostOffice,
          areaLocalitySubDivision: data.areaLocalitySubDivision,
          stateUnionTerritory: data.stateUnionTerritory,
          townCityDistrict: data.townCityDistrict,
          pinCode: data.pinCode,
          panCardType: data.panCardType,
          proofOfIdentity: data.proofOfIdentity,
          proofOfAddress: data.proofOfAddress,
          proofOfDOB: data.proofOfDOB,
          aadharCardImage: data.aadharCardImage,
          aadharBack: data.aadharBack,
          photo: data.photo,
          signature: data.signature,
          charges: data.charges,
        },
      });
    } catch (error) {
      console.error("Error creating PAN application: ", error);
      throw error;
    }
  },

  getAllApplications: async () => {
    try {
      return await prisma.pANApplication.findMany();
    } catch (error) {
      console.error("Error fetching all PAN applications: ", error);
      throw error;
    }
  },

  getApplicationById: async (id) => {
    try {
      return await prisma.pANApplication.findUnique({
        where: { id: parseInt(id) },
      });
    } catch (error) {
      console.error("Error fetching PAN application by ID: ", error);
      throw error;
    }
  },

  updateApplicationById: async (id, data) => {
    try {
      return await prisma.pANApplication.update({
        where: { id: parseInt(id) },
        data,
      });
    } catch (error) {
      console.error(`Error updating PAN application with id ${id}: `, error);
      throw error;
    }
  },

  deleteApplicationById: async (id) => {
    try {
      return await prisma.pANApplication.delete({
        where: { id: parseInt(id) },
      });
    } catch (error) {
      console.error(`Error deleting PAN application with id ${id}: `, error);
      throw error;
    }
  },
};

module.exports = PANApplication;
