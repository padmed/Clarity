require("dotenv").config();
const app = require("./app");
const { connectToDb } = require("./db");

const PORT = process.env.PORT || 3002;

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectToDb();
});
