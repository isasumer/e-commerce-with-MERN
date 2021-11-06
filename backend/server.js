import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running.....");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);

// I created MongoDB account and install MongoDB compass.
//After configuration (security and data deployment) Then i connected it to MongoDB Compass.
// Finally ı added MongoDB_URI into my .env file.
