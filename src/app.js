require("dotenv").config();
const express = require("express");
const { initMysql } = require("./config/mysql");
const { initMongo } = require("./config/mongo");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Backend with MySQL and MongoDB" });
});

initMysql().catch((error) => {
  console.error("MySQL initialization failed:", error);
});

initMongo().catch((error) => {
  console.error("MongoDB initialization failed:", error);
});

module.exports = app;
