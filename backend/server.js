import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 50001;
app.listen(
  PORT,
  console.log(`Server Running on ${process.env.NODE_ENV} mode on port ${PORT}`)
);
