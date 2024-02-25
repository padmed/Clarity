const getGeneratedText = async ({ prompt, email }) => {
  try {
    const response = await fetch("http://localhost:3001/api/ai/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        email,
      }),
    });

    if (response.status === 402) {
      return "Payment required";
    }

    const data = await response.json();
    return data.generatedText;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export default getGeneratedText;
