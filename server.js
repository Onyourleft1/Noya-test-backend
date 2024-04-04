const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(cors({ credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
dotenv.config();
const AddressRoute = require("./routes/Address");

app.use("/Address", AddressRoute);

const uri =
  "mongodb+srv://fadiajami82:pvRLnGwJrH6KvG6u@cluster0.fko3fwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected To DB");
  })
  .catch((err) => {
    console.log("connection failed");
  });

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
