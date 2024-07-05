const express = require('express');
const userController = require('../Controller/userController');
const router = express.Router();

// POST /api/users - Create a new user
router.post('/', userController.createUser);

// POST /api/users/login - User login
router.post('/login', userController.loginUser);

// GET /api/users - Get all users
router.get('/', userController.getAllUsers);

// GET /api/users/:email - Get user by email
router.get('/:email', userController.readUserByEmail);



// PUT /api/users/:id - Update user by ID
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id - Delete user by ID
router.delete('/:id', userController.deleteUserById);

module.exports = router;
