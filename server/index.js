require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())

app.get("/", (req, res) => {
  res.send("IdeaHub API is running 🚀");
});

app.get("/api/message", (req, res) => {
  res.json({
  "message": "Welcome to IdeaHub 🚀"
});
});

const PORT =  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});