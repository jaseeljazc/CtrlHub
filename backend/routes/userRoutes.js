const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { protect } = require("../middileware/authMiddleware");
const router = express.Router();

//@route POSt /api/users/register
//@desc Register a new user
// @access Public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //register logic
    let user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "User already exists" });

    user = new User({ name, email, password });
    await user.save();

    //create jwt payload
    const payload = { user: { id: user._id, role: user.role } };

    // sign and return the token alomg with the user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;
        //send the user and token in response
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
});

//@route post /api/users/login
//@desc authenticate user
//@ access public

router.post("/login", async (req, res) => {
  console.log("Received body:", req.body);
  const { email, password } = req.body;
  try {
    //find the user by email
    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid Credentials" });
    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    //create jwt payload
    const payload = { user: { id: user._id, role: user.role } };

    // sign and return the token alomg with the user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;
        //send the user and token in response
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

//@route post /api/users/profile
//@get logged in in to the users profile
//@ access private
router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
