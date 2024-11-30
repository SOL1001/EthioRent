// const prisma = require("../prismaClient");
import prisma from "../lib/prisma.js";

export const getProperties = async (req, res) => {
  try {
    const properties = await prisma.post.findMany();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch properties" });
  }
};

export const deleteProperty = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.post.delete({ where: { id } });
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete property" });
  }
};
