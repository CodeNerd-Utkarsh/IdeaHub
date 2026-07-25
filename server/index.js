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

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});