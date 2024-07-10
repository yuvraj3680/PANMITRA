const UserModel = require('../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'yourSecretKey';

const userController = {
  createUser: async (req, res) => {
    try {
      const { name, address, mobile, aadhar, amountType, pinCode, email, companyName, pan, charges, state, password, username } = req.body;

      // Check if username already exists
      const existingUser = await UserModel.readUserByUsername(username);
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }

      // Hash password before saving
      const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds: 10

      // Create new user
      const newUser = await UserModel.createUser({
        name, address, mobile, aadhar, amountType, pinCode, email, companyName, pan, charges, state, password: hashedPassword, username,
      });

      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // loginUser: async (req, res) => {
  //   try {
  //     const { username, password } = req.body;

  //     // Find user by username
  //     const user = await UserModel.readUserByUsername(username);
  //     if (!user) {
  //       return res.status(404).json({ error: 'User not found' });
  //     }

  //     // Compare passwords
  //     const passwordMatch = await bcrypt.compare(password, user.password);
  //     if (!passwordMatch) {
  //       return res.status(401).json({ error: 'Incorrect password' });
  //     }

  //     // Generate JWT token
  //     const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET_KEY, { expiresIn: '30d' });

  //     res.status(200).json({ message: 'Login successful', token, userId: user.id, username: user.username });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // },

  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Find user by username
      const user = await UserModel.readUserByUsername(username);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Incorrect password' });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET_KEY, { expiresIn: '30d' });

      res.status(200).json({ message: 'Login successful', token, userId: user.id, username: user.username });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  
  getAllUsers: async (req, res) => {
    try {
      // Retrieve all users
      const users = await UserModel.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, address, mobile, aadhar, amountType, pinCode, email, companyName, pan, charges, state } = req.body;

      // Update user by ID
      const updatedUser = await UserModel.updateUserById(id, {
        name, address, mobile, aadhar, amountType, pinCode, email, companyName, pan, charges, state,
      });

      res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const { id } = req.params;

      // Delete user by ID
      await UserModel.deleteUserById(id);

      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = userController;
