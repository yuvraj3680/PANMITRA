const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Admin = {
  createAdmin: async ({ userDetailsId, role, permissions }) => {
    try {
      return await prisma.admin.create({
        data: {
          userDetailsId,
          role,
        },
      });
    } catch (error) {
      console.error("Error creating admin: ", error);
      throw error;
    }
  },

  getAllAdmins: async () => {
    try {
      return await prisma.admin.findMany();
    } catch (error) {
      console.error("Error fetching all admins: ", error);
      throw error;
    }
  },

  readAdminById: async (adminId) => {
    try {
      return await prisma.admin.findUnique({
        where: { id: adminId },
      });
    } catch (error) {
      console.error("Error reading admin by id: ", error);
      throw error;
    }
  },

  updateAdminById: async (adminId, data) => {
    try {
      return await prisma.admin.update({
        where: { id: adminId },
        data,
      });
    } catch (error) {
      console.error(`Error updating admin with id ${adminId}: `, error);
      throw error;
    }
  },

  deleteAdminById: async (adminId) => {
    try {
      return await prisma.admin.delete({
        where: { id: adminId },
      });
    } catch (error) {
      console.error(`Error deleting admin with id ${adminId}: `, error);
      throw error;
    }
  },
};

module.exports = Admin;
