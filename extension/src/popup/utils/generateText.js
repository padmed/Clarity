// Makes sure to wait for the response from service worker, returns response as a promise
const generateText = (prompt) => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(
      { message: "generateText", prompt },
      (response) => {
        console.log(response);
        if (response) {
          resolve(response);
        } else {
          reject("Something wrong");
        }
      }
    );
  });
};

export default generateText;
