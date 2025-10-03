import jwt from 'jsonwebtoken';
import { User } from "../models/User.model.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
    try {
        const { email ,password } = req.validatedData;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ error: "Email is already registered" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ ...req.validatedData, password: hashedPassword });
    await newUser.save();

    const { fullName, mobileNo, dob, role } = newUser;
    res.status(201).json({
      message: "User registered successfully",
      user: { fullName, email, mobileNo, dob, role }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.validatedData;

    //  Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //  Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //  Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
      );
      res.cookie('token', token, {
          httpOnly: true,       // ❌ JS can't access
          secure: true,         // ✅ Only over HTTPS
          sameSite: 'strict',   // ✅ Prevent CSRF
          maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });


    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      }
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });

  res.status(200).json({ message: "Logout successful" });
};