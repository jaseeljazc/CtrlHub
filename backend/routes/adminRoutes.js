const express = require("express");
const User = require("../models/User");
const { protect, admin } = require("../middileware/authMiddleware");

const router = express.Router();

// @route GET /api/admin/users
// @desc GET all users (Admin only)
// @access Private/admin

router.get("/", protect, admin, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    req.status(500).json({ message: "Server Error" });
  }
});


// gpt code
// @route POST /api/admin/users
// @desc Create a new user (Admin only)
// @access Private/admin
router.post("/", protect, admin, async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password, role });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});


// @route DELETE /api/admin/users/:id
// @desc Delete a user by ID (Admin only)
// @access Private/admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne(); // removes user
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});



// @route PUT /api/admin/users/:id
// @desc Update user role (Admin only)
// @access Private/admin
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.role = req.body.role || user.role;
    await user.save();

    res.json({ message: "User updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});




module.exports = router;
