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

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "IdeaHub API",
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});