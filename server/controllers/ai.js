const aiRouter = require("express").Router();
const generateText = require("../services/llmAI");
const User = require("../db/models/user");

aiRouter.post("/generate", async (req, res) => {
  try {
    const { prompt, email } = req.body;
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      console.error("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    if (user.freeTrial.tokens >= 20) {
      console.error("Free trial expired");
      user.freeTrial.access = false;
      await user.save();
      return res.status(402).json({ error: "Free trial expired" });
    }

    const generatedText = await generateText(prompt);
    user.freeTrial.tokens++;
    await user.save();
    return res.status(201).json({ generatedText });
  } catch (error) {
    console.error("Error generating text:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = aiRouter;
