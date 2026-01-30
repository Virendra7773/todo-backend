const express = require("express");
const router = express.Router();

const {
  register,
  login,
} = require("../controllers/authController");

// router.post("/register", register);
router.post("/login", login);

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const user = await User.create({ email, password });

    res.status(201).json({
      message: "Registration successful",
      userId: user._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
