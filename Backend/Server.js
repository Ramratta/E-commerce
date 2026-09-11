const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const productRoutes = require("./Routes/Productroute");

const app = express();

app.use(cors());
app.use(express.json());

//MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error: ", error);
  });

//Express Connection

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

//Server Connection
PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server is running on the http://localhost:${PORT}`);
});
