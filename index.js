const express = require("express");
const app = express();
const port = 5300;

const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef API server is running");
});

app.get("/test", (req, res) => {
  res.send({ name: "Mohammad Rahman" });
});

app.listen(port, () => {
  console.log(`API Server is running on port ${port}`);
});
