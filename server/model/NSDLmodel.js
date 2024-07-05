const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const NSDLDetails = {
  createNSDLDetails: async (data) => {
    try {
      return await prisma.NSDLPAN.create({
        data: {
          panOption:       data.panOption,
          name:            data.name,
          dateOfBirth:     data.dateOfBirth,
          gender:          data.gender,
          mobileNumber:    data.mobileNumber,
          email:           data.email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAllNsdlDetails: async ()=>{
    try {
      return await prisma.NSDLPAN.findMany();
    } catch (error) {
      console.log(error);
    }
  },
  updateNSDLDetails: async (id, data) => {
    try {
      return await prisma.NSDLPAN.update({
        where: { id: parseInt(id) },
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteNSDLDetailsById: async (id) => {
    try {
      return await prisma.NSDLPAN.delete({
        where: { id: parseInt(id) },
      });
    } catch (error) {
      console.log(error);
    }
  }
};



module.exports = NSDLDetails;