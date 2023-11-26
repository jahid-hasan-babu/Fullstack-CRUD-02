const express = require("express");
const router = require("./src/routes/api");
const app = new express();
const mongoose = require("mongoose");

require("dotenv").config();
const URI = process.env.DATABASE;

// Middleware requires
const helmet = require("helmet");
const hpp = require("hpp");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");

// Security middleware
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 });
app.use(limiter);

mongoose
  .connect(URI)
  .then((res) => {
    console.log("Connected success...");
  })
  .catch((err) => {
    console.log(err);
  });

// API call
app.use("/api/v1", router);

app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "not found" });
});

module.exports = app;
