const authRouter = require("express").Router();
const User = require("../db/models/user");

// Sign-in route
authRouter.post("/signin", async (req, res) => {
  try {
    const { email, picture } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(200).json(user);
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

module.exports = authRouter;
