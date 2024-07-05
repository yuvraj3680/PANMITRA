const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const MinorPanDetails = {
  createMinorPanDetails: async (data) => {
    try {
      return await prisma.minorPAN.create({
        data: {
          title: data.title,
          lastName: data.lastName,
          firstName: data.firstName,
          middleName: data.middleName,
          nameOnCard: data.nameOnCard,
          dateOfBirth: data.dateOfBirth,   // Ensure date is properly formatted
          gender: data.gender,
          fatherLastName: data.fatherLastName,
          fatherFirstName: data.fatherFirstName,    // corrected field name
          fatherMiddleName: data.fatherMiddleName,
          aadhaarNumber: data.aadhaarNumber,        // corrected field name
          nameAsPerAadhaar: data.nameAsPerAadhaar,  // corrected field name
          mobileNumber: data.mobileNumber,
          emailAddress: data.emailAddress,
          flatRoomDoorBlockNo: data.flatRoomDoorBlockNo,
          buildingVillageName: data.buildingVillageName,
          roadStreetLanePostOffice: data.roadStreetLanePostOffice,
          areaLocalitySubDivision: data.areaLocalitySubDivision,
          state: data.state,
          townCityDistrict: data.townCityDistrict,
          pinCode: data.pinCode,
          panCardType: data.panCardType,

          RAtitle: data.RAtitle,                    // corrected field name
          RAlastName: data.RAlastName,
          RAfirstName: data.RAfirstName,
          RAmiddleName: data.RAmiddleName,
          RAflatRoomDoorBlockNo: data.RAflatRoomDoorBlockNo,
          RAbuildingVillageName: data.RAbuildingVillageName,
          RAroadStreetLanePostOffice: data.RAroadStreetLanePostOffice,
          RAareaLocalitySubDivision: data.RAareaLocalitySubDivision,
          RAtownCityDistrict: data.RAtownCityDistrict,
          RAstate: data.RAstate,
          RApinCode: data.RApinCode,

          proofOfIdentity: data.proofOfIdentity,
          proofOfAddress: data.proofOfAddress,
          proofOfDOB: data.proofOfDOB,
          aadharCardImage: data.aadharCardImage,
          aadharBackImage: data.aadharBackImage,
          guardianKYCfile: data.guardianKYCfile,
          guardianKYCfileBack: data.guardianKYCfileBack,
          photo: data.photo,
          signature: data.signature,
          charges: data.charges,
        },
      });
    } catch (error) {
      console.error("Error creating new PAN details: ", error);
      throw error;
    }
  },


  getAllMinorPanDetails: async () => {
    try {
      return await prisma.minorPAN.findMany();
    } catch (error) {
      console.error("Error fetching all PAN details: ", error);
      throw error;
    }
  },

  updateMinorPanDetails: async (id, data) => {
    try {
      return await prisma.minorPAN.update({
        where: { id: parseInt(id) },
        data: { ...data },
      });
    } catch (error) {
      console.error(`Error updating PAN details with ID ${id}: `, error);
      throw error;
    }
  },
};

module.exports = MinorPanDetails;
