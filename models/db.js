const mongoose = require("mongoose");

//connecting to mongodb using mongoose
const url =
  " mongodb://admin:admin@pricedatabase-shard-00-00.re29j.mongodb.net:27017,pricedatabase-shard-00-01.re29j.mongodb.net:27017,pricedatabase-shard-00-02.re29j.mongodb.net:27017/priceDatabase?ssl=true&replicaSet=atlas-bew5c1-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect(url)
  .then((db) => {
    console.log("Connected to the mongodb server successfuly: ");
  })
  .catch((err) => console.log(err));
