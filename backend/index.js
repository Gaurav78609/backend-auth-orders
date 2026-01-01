import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

/*  MIDDLEWARE */
app.use(cors());
app.use(express.json());

/*  ROUTES  */
// Auth routes (register, login)
app.use("/api", authRoutes);

// User routes (protected profile)
app.use("/api", userRoutes);

// Order routes (protected create & list orders)
app.use("/api", orderRoutes);

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

/* SERVER */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
