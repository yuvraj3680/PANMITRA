const UserDetails = require('../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'yourSecretKey';

const userController = {
  createUser: async (req, res) => {
    try {
      const {
        name, address, mobile, aadhar, amountType, username, pinCode, email, companyName, pan, charges, state, password,
      } = req.body;

      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user using the UserModel with hashed password
      const newUser = await UserDetails.createUser({
        name, address, mobile, aadhar, amountType, username, pinCode, email, companyName, pan, charges, state, password: hashedPassword,
      });

      res.status(201).send({ status: '1', data: newUser });
    } catch (error) {
      console.error(error);
      if (error.message === 'Username already exists') {
        res.status(400).send({ status: '0', error: 'Username already exists' });
      } else {
        res.status(500).send({ status: '0', error: error.message });
      }
    }
  },

  readUserByEmail: async (req, res) => {
    try {
      const user_email = req.params.email;
      const userInfo = await UserDetails.readUserByEmail(user_email);
      if (userInfo) {
        return res.status(200).send({ status: '1', data: userInfo });
      }
      res.status(404).send({ status: '0', message: 'User not found' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', message: 'Internal Server Error' });
    }
  },

  getAllUsers: async (req, res) => { // Renamed from getAllUser to getAllUsers for clarity
    try {
      const userList = await UserDetails.getAllUsers();
      if (userList.length > 0) {
        return res.status(200).send({ status: '1', data: userList });
      }
      res.status(404).send({ status: '0', message: 'Users not found' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const user_Id = parseInt(req.params.id);
      const { name, address, mobile, aadhar, amountType, pinCode, email, companyName, pan, charges, state, captcha, username } = req.body;

      // Update user using the UserModel
      const updatedUser = await UserDetails.updateUserById(user_Id, {
        name, address, mobile, aadhar, amountType, pinCode, email, companyName, pan, charges, state, captcha, username,
      });

      res.status(200).send({ status: '1', data: updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', error: error.message });
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const user_Id = parseInt(req.params.id);

      // Delete user using the UserModel
      await UserDetails.deleteUserById(user_Id);

      res.status(200).send({ status: '1', message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', error: error.message });
    }
  },

  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await UserDetails.readUserByUsername(username);
      if (!user) {
        return res.status(404).send({ status: '0', message: 'User not found' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).send({ status: '0', message: 'Incorrect password' });
      }

      const token = jwt.sign(
        { userId: user.id, username: user.username },
        JWT_SECRET_KEY,
        { expiresIn: '30d' }
      );

      res.status(200).send({ status: '1', data: user, token });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', error: 'Internal Server Error' });
    }
  },
};

module.exports = userController;
