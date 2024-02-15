const express = require("express");
const app = express();
const User = require("./db/models/user");
const cors = require("cors");

const corsOptions = {
  origin: "chrome-extension://mfbigjpknmeflcogckmjhpghdjbfpmle",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

// Sign-in route
app.post("/api/signin", async (req, res) => {
  try {
    const { email, picture } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(202).json(user);
    } else {
      user = new User({ email, picture });
      await user.save();
      console.log("New user saved:", user);
      return res.status(201).json(user);
    }
  } catch (error) {
    console.error("Error while signing in:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all users route
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error while fetching users:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = app;