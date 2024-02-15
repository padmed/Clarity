import user from "./services/AuthService";

const handleError = (error, context) => {
  console.error(`Error in ${context}:`, error);
};

const createContextMenu = () => {
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

const handleOnInstalled = (details) => {
  try {
    if (details.reason !== "install" && details.reason !== "update") return;
    createContextMenu();
    const externalUrl = "http://localhost:3000/onboarding/signin";
    chrome.tabs.create({ url: externalUrl }, (tab) => {
      console.log("New tab launched with http://localhost:3000/");
    });
  } catch (error) {
    handleError(error, "handleOnInstalled");
  }
};

const handleOnStartup = async () => {
  try {
    const userData = await chrome.storage.sync.get(["userData"]);
    user.updateUserProps(userData);
  } catch (error) {
    handleError(error, "handleOnStartup");
  }
};

const handleMessages = async (request, sender, sendResponse) => {
  try {
    if (request.message === "signInRequest") {
      await user.login();
      await chrome.storage.sync.set({ userData: user.userData });
    } else if (request.message === "logOutRequest") {
      await user.logout();
      await chrome.storage.sync.set({ userData: null });
    }
  } catch (error) {
    handleError(error, "handleMessages");
  }
};

const onContextMenuClicked = async (details) => {
  try {
    if (details.menuItemId === "mfbigjpknmeflcogckmjhpghdjbfpmle") {
      const [tab] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
      });

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["./content/content.index.js"],
      });
    }
  } catch (error) {
    handleError(error, "onContextMenuClicked");
  }
};

const main = async () => {
  try {
    chrome.runtime.onInstalled.addListener(handleOnInstalled);
    chrome.runtime.onStartup.addListener(handleOnStartup);
    chrome.contextMenus.onClicked.addListener(onContextMenuClicked);
    chrome.runtime.onMessageExternal.addListener(handleMessages);
    chrome.runtime.onMessage.addListener(handleMessages);
  } catch (error) {
    handleError(error, "main");
  }
};

main();
