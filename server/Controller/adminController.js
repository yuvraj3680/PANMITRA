const Admin = require('../model/adminModel');
const UserDetails = require('../model/userModel');

const adminController = {
  createAdmin: async (req, res) => {
    try {
      const { userDetailsId, role, permissions } = req.body;
      const adminUser = await Admin.createAdmin({ userDetailsId, role, permissions });
      res.status(201).send({ status: '1', data: adminUser });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', error: error.message });
    }
  },

  getAllAdmins: async (req, res) => {
    try {
      const adminList = await Admin.getAllAdmins();
      if (adminList.length > 0) {
        return res.status(200).send({ status: '1', data: adminList });
      }
      res.status(404).send({ status: '0', message: 'Admins not found' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', error: error.message });
    }
  },

  readAdminById: async (req, res) => {
    try {
      const adminId = parseInt(req.params.id);
      const adminInfo = await Admin.readAdminById(adminId);
      if (adminInfo) {
        return res.status(200).send({ status: '1', data: adminInfo });
      }
      res.status(404).send({ status: '0', message: 'Admin not found' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', message: 'Internal Server Error' });
    }
  },

  updateAdmin: async (req, res) => {
    try {
      const adminId = parseInt(req.params.id);
      const { role, permissions } = req.body;
      const updatedAdmin = await Admin.updateAdminById(adminId, { role, permissions });
      res.status(200).send({ status: '1', data: updatedAdmin });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', error: error.message });
    }
  },

  deleteAdminById: async (req, res) => {
    try {
      const adminId = parseInt(req.params.id);
      await Admin.deleteAdminById(adminId);
      res.status(200).send({ status: '1', message: 'Admin deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', error: error.message });
    }
  },
};

module.exports = adminController;
