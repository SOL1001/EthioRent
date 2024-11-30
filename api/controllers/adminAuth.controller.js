// import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// const prisma = new PrismaClient();

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });

    // Check if user exists and if the role is 'admin'
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(403).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({ data: { token } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
