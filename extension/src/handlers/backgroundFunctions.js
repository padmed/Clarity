import getGeneratedText from "../services/llmService";
import user from "../services/AuthService";

export const openOnboardingPage = () => {
  const externalUrl = "http://localhost:3000/onboarding/signin";
  chrome.tabs.create({ url: externalUrl }, (tab) => {
    console.log("New tab launched with http://localhost:3000/");
  });
};

export const signinReq = async () => {
  await user.login();
  await chrome.storage.sync.set({ userData: user.userData });
};

export const logOutReq = async () => {
  await user.logout();
  await chrome.storage.sync.set({ userData: null });
};

export const generateTextReq = async (request, sender, sendResponse) => {
  const generatedText = await getGeneratedText({
    prompt: request.prompt,
    email: user.email,
  });

  sendResponse(generatedText);
};

export const createContextMenu = () => {
  try {
    chrome.contextMenus.create({
      title: "Clarity",
      contexts: ["selection"],
      id: "mfbigjpknmeflcogckmjhpghdjbfpmle",
    });
  } catch (error) {
    handleError(error, "createContextMenu");
  }
};

export const executeScript = async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["./content/content.index.js"],
  });
};
