const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const UserModel = {
  createUser: async ({ name, address, mobile, aadhar, amountType, pinCode, email, companyName, pan, charges, state, password, username }) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      return await prisma.userDetails.create({
        data: {
          name,
          address,
          mobile,
          aadhar,
          amountType,
          pinCode,
          email,
          companyName,
          pan,
          charges,
          state,
          password: hashedPassword,
          username,
        },
      });
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  },

  readUserByEmail: async (email) => {
    try {
      return await prisma.userDetails.findFirst({
        where: { email },
      });
    } catch (error) {
      throw new Error(`Error finding user by email: ${error.message}`);
    }
  },

  readUserByUsername: async (username) => {
    try {
      return await prisma.userDetails.findFirst({
        where: { username },
      });
    } catch (error) {
      throw new Error(`Error finding user by username: ${error.message}`);
    }
  },

  readUserById: async (id) => {
    try {
      return await prisma.userDetails.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Error finding user by ID: ${error.message}`);
    }
  },

  updateUserById: async (id, data) => {
    try {
      return await prisma.userDetails.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Error updating user by ID: ${error.message}`);
    }
  },

  deleteUserById: async (id) => {
    try {
      return await prisma.userDetails.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Error deleting user by ID: ${error.message}`);
    }
  },

  getAllUsers: async () => {
    try {
      return await prisma.userDetails.findMany();
    } catch (error) {
      throw new Error(`Error getting all users: ${error.message}`);
    }
  },
};

module.exports = UserModel;
