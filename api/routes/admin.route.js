import express from "express";
import { getUsers, deleteUser } from "../controllers/user.controller.js";
import {
  getProperties,
  deleteProperty,
} from "../controllers/property.controller.js";
import {
  getBookings,
  updateBookingStatus,
} from "../controllers/booking.controller.js";
import { loginAdmin } from "../controllers/adminAuth.controller.js"; // Adjusted import path
// import { authenticateAdmin } from "../middleware/verifyToken.js"; // Adjusted import path

const router = express.Router();

// Admin login route
router.post("/login", loginAdmin);

// User routes
router.get("/users", getUsers);
router.delete("/users/:id", deleteUser);

// Property routes
router.get("/properties", getProperties);
router.delete("/properties/:id", deleteProperty);

// Booking routes
router.get("/bookings", getBookings);
router.patch("/bookings/:id", updateBookingStatus);

export default router;
