const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

// POST /api/users/register - Create a new user
router.post("/register", userController.createUser);

// POST /api/users/login - User login
router.post("/login", userController.loginUser);

// GET /api/users - Get all users (protected route)
router.get("/", userController. getAllUsers);

// PUT /api/users/:id - Update user by ID (protected route)
router.put("/:id", userController.updateUserById);

// DELETE /api/users/:id - Delete user by ID (protected route)
router.delete(
  "/:id",
  userController.
  deleteUserById
);

module.exports = router;
