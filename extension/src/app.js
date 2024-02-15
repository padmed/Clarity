import user from "./services/AuthService";

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

const handleOnStartup = async () => {
  const userData = await chrome.storage.sync.get(["userData"]);
  console.log(userData);
};

const handleMessages = async (request, sender, sendResponse) => {
  if (request.message === "signInRequest") {
    await user.login();
    await chrome.storage.sync.set({ userData: user.userData });
  } else if (request.message === "logOutRequest") {
    await user.logout();
    await chrome.storage.sync.set({ userData: null });
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
      files: ["./content/content.index.js"],
    });
  }
};

const main = async () => {
  chrome.runtime.onInstalled.addListener(handleOnInstalled);
  chrome.runtime.onStartup.addListener(handleOnStartup);
  chrome.contextMenus.onClicked.addListener(onContextMenuClicked);
  chrome.runtime.onMessageExternal.addListener(handleMessages);
  chrome.runtime.onMessage.addListener(handleMessages);
};

main();
