const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./controllers/auth");
const aiRouter = require("./controllers/ai");
const usersRouter = require("./controllers/users");

const corsOptions = {
  origin: "chrome-extension://mfbigjpknmeflcogckmjhpghdjbfpmle",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/ai", aiRouter);
app.use("/api/users", usersRouter);

module.exports = app;
