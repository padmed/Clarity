const axios = require("axios");

const API_KEY_AI = process.env.API_KEY_AI || "";
const apiUrl = process.env.API_URL_AI || "";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY_AI}`,
};

const generateText = async (prompt) => {
  const requestData = {
    input: `[INST] <<SYS>> You are a science communicator, your task is to read the following
            text snippet and describe its content in a simple, short, and understandable way,
            ensuring clarity for a general audience <<SYS>> ${prompt}[/INST]`,
  };

  try {
    const request = await axios.post(apiUrl, requestData, { headers: headers });
    return request.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

module.exports = generateText;
