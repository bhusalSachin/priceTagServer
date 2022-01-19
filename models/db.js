const mongoose = require("mongoose");

//connecting to mongodb using mongoose
const url = process.env.MONGO_URI;
mongoose
  .connect(url)
  .then((db) => {
    console.log("Connected to the mongodb server successfuly: ");
  })
  .catch((err) => console.log(err));
