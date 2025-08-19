const Coach = require("../models/Coach");

// Register a new coach
exports.registerCoach = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newCoach = new Coach({ name, email, password });
    await newCoach.save();
    res.status(201).json({ message: "Coach registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error registering coach", error });
  }
};

// Coach Sign-In (No Auth)
exports.signInCoach = async (req, res) => {
  try {
    const { email, password } = req.body;
    const coach = await Coach.findOne({ email, password });
    
    if (!coach) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Sign-in successful", coach });
  } catch (error) {
    res.status(500).json({ message: "Error signing in", error });
  }
};
