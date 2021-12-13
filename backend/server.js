import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
// import products from "./data/products.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config(); // for 12 security

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running.....");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);

// I created MongoDB account and install MongoDB compass.
// After configuration (security and data deployment) Then i connected it to MongoDB Compass.
// Finally ı added MongoDB_URI into my .env file.
