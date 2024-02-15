import AuthService from "./services/AuthService";

const user = new AuthService();

const createContextMenu = () => {
  chrome.contextMenus.create({
    title: "Clarity",
    contexts: ["selection"],
    id: "mfbigjpknmeflcogckmjhpghdjbfpmle",
  });
};

const handleOnInstalled = (details) => {
  if (details.reason !== "install" && details.reason !== "update") return;
  createContextMenu();
  const externalUrl = "http://localhost:3000/onboarding/signin";
  chrome.tabs.create({ url: externalUrl }, (tab) => {
    console.log("New tab launched with http://localhost:3000/");
  });
};

const handleMessages = async (request, sender, sendResponse) => {
  if (request.message === "signInRequest") {
    const response = await user.login();
    console.log(response);
  } else if (request.message === "logOutRequest") {
    const response = await user.logout();
    console.log(response);
  }
};

const onContextMenuClicked = async (details) => {
  if (details.menuItemId === "mfbigjpknmeflcogckmjhpghdjbfpmle") {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["./content/index.js"],
    });
  }
};

const main = async () => {
  chrome.runtime.onInstalled.addListener(handleOnInstalled);
  chrome.contextMenus.onClicked.addListener(onContextMenuClicked);
  chrome.runtime.onMessageExternal.addListener(handleMessages);
  chrome.runtime.onMessage.addListener(handleMessages);
};

main();
