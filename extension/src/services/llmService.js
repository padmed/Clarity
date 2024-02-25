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

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.generatedText;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export default getGeneratedText;
