const aiRouter = require("express").Router();
const generateText = require("../services/llmAI");

aiRouter.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    const generatedText = await generateText(prompt);
    return res.status(201).json(generatedText);
  } catch (error) {
    console.error("Error while generating text:", error);
    return res.status(500).json({ error: "Error while generating text" });
  }
});

module.exports = aiRouter;
