// const prisma = require("../prismaClient");
import prisma from "../lib/prisma.js";

export const getBookings = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

export const updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await prisma.booking.update({ where: { id }, data: { status } });
    res.status(200).json({ message: "Booking status updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update booking status" });
  }
};
