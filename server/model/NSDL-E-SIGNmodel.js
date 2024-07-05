const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const NsdlesignDetails = {
    createNsdlesign: async (data) => {
        try {
            
            return await prisma.mSDLESIGN.create({
                data: {
                    panOption:     data.panOption,
                    name:          data.name,
                    dateOfBirth:   data.dateOfBirth,
                    gender:        data.gender,
                    mobileNumber:  data.mobileNumber,
                    email:         data.email,
                }
            });
        } catch (error) {
            console.error('Error creating NSDL record:', error); // Error log
        }
    },

    getAllNsdlesign: async () => {
        try {
            return await prisma.mSDLESIGN.findMany();
        } catch (error) {
            console.log(error);
        }
    },

    getNsdlesignById: async (id) => {
        try {
            return await prisma.mSDLESIGN.findUnique({
                where: {
                    id,
                },
            });
        } catch (error) {
            console.log(error);
        }
    },

    updateNsdlesign: async (id, data) => {
        try {
            return await prisma.mSDLESIGN.update({
                where: {
                    id:number,
                },
                data,
            });
        } catch (error) {
            console.log(error);
        }
    },
    deleteNsdlesign: async (id) => {
        try {
            return await prisma.mSDLESIGN.delete({
                where: {
                    id:number,
                },
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = NsdlesignDetails;
 