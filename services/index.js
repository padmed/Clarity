require("dotenv").config();
const axios = require("axios");

const API_KEY_AI = process.env.API_KEY_AI;
const apiUrl =
  "https://api.deepinfra.com/v1/inference/meta-llama/Llama-2-70b-chat-hf";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY_AI}`,
};

export const generateText = (prompt) => {
  const requestData = {
    input: `[INST] <<SYS>> You are a science communicator, your task is to read the following
            text snippet and describe its content in a simple, short, and understandable way,
            ensuring clarity for a general audience <<SYS>> ${prompt}[/INST]`,
  };

  axios
    .post(apiUrl, requestData, { headers: headers })
    .then((response) => {
      console.log("Response:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
      return error;
    });
};
