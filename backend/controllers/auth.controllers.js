const User = require("../models/user.models");

module.exports.signUp = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user with same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Create new user
    const newUser = new User({ name, email, password, role });
    await newUser.save();

    res.status(201).json(newUser); // User created successfully
  } catch (error) {
    console.error("Sign-up failed:", error);
    res.status(500).json({ message: "Sign-up failed" });
  }
};
