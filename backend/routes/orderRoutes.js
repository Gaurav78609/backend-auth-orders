import express from "express";
import protect from "../middleware/authMiddleware.js";
import { createOrder, getOrders } from "../controllers/orderController.js";

const router = express.Router();

router.post("/order", protect, createOrder);
router.get("/orders", protect, getOrders);

export default router;
