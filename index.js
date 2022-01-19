const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const userRouter = require("./routes/user");

//connecting to mongodb using mongoose
require("./models/db");

//main app
const app = express();

//using middlewares
app.use(express.json());
app.use(userRouter);

//default route
app.get("/", (req, res) => {
  console.log("got request");
  res.json({ success: true, message: "Welcome to the app server" });
});
