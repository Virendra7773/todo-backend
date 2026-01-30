const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const boardRoutes = require("./routes/boardRoutes");


const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/boards", boardRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
