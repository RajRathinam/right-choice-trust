import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Generate JWT Token
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (await User.findOne({ email })) return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ name, email, password });
  res.json({ _id: user.id, name, email, token: generateToken(user.id) });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({ _id: user.id, name: user.name, email, token: generateToken(user.id) });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
