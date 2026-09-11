const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
PORT = 5000;

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(5000, () => {
  console.log(`Server is running on the http://localhost:${PORT}`);
});
