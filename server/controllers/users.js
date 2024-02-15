const usersRouter = require("express").Router();
const User = require("../db/models/user");

// Get all users route
usersRouter.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error while fetching users:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = usersRouter;
