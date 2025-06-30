import Users from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: "Missing Details" });
  }
  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);
    const user = new Users({ username, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "6hr",
    });

    res.status(201).json({
      message: "User registered successfully",
      token: token,
      user: username,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({ token, email, user: user.username });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};

export const verifyUser = async (req, res) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).json({ valid: false, message: "No token provided" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    res.json({
      valid: true,
      userId: verified.id,
      username: verified.username,
    });
  } catch (err) {
    res.status(401).json({ valid: false, message: "Invalid token" });
  }
};
