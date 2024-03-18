import getGeneratedText from "../services/llmService";
import user from "../services/AuthService";
import { BASE_URL, ONBOARDING_SUCCESS_URL } from "../utils/constants";

export const openPage = (url) => {
  chrome.tabs.create({ url }, (tab) => {
    console.log("New tab launched with", url);
  });
};

const signIn = async (sendResponse) => {
  await user.login();
  await chrome.storage.sync.set({ userData: user.userData });
  sendResponse({ success: true });
};

export const signinReq = async (request, sender, sendResponse) => {
  try {
    if (sender.origin === BASE_URL) {
      await signIn(sendResponse);
      openPage(ONBOARDING_SUCCESS_URL);
    } else {
      await signIn(sendResponse);
    }
  } catch (error) {
    sendResponse({ success: false });
    handleError(error, "signinReq");
  }
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
