const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const productRoutes = require("./Routes/Productroute");

const app = express();

app.use(
  cors({
    origin: [process.env.LOCAL_FRONTEND_URL, process.env.FRONTEND_URL].filter(
      Boolean,
    ),
  }),
);
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

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
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on the http://localhost:${PORT}`);
});
