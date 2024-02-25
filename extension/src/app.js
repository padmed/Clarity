import user from "./services/AuthService";
import {
  signinReq,
  logOutReq,
  generateTextReq,
  createContextMenu,
  openOnboardingPage,
  executeScript,
} from "./handlers/backgroundFunctions";

const handleError = (error, context) => {
  console.error(`Error in ${context}:`, error);
};

const handleOnInstalled = (details) => {
  try {
    if (details.reason !== "install" && details.reason !== "update") return;
    createContextMenu();
    openOnboardingPage();
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

const handleMessages = (request, sender, sendResponse) => {
  try {
    if (request.message === "signInRequest") {
      signinReq();
    } else if (request.message === "logOutRequest") {
      logOutReq();
    } else if (request.message === "generateText") {
      generateTextReq(request, sender, sendResponse);
    }
    return true;
  } catch (error) {
    handleError(error, "handleMessages");
  }
};

const onContextMenuClicked = async (details) => {
  try {
    if (details.menuItemId === "mfbigjpknmeflcogckmjhpghdjbfpmle") {
      if (!user.email) {
        openOnboardingPage();
        return;
      }
      executeScript();
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
