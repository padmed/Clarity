const { default: mongoose } = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "";

const connectToDb = async () => {
  try {
    console.log("Connecting to MongoDB");
    await mongoose.connect(MONGODB_URI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    logger.error(`Cannot connect to MongoDB: ${error.message}`);
  }
};

module.exports = { connectToDb };
