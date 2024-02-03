chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason !== "install" && details.reason !== "update") return;
  chrome.contextMenus.create({
    title: "Clarity",
    contexts: ["selection"],
    id: "Clarity",
  });
});

chrome.contextMenus.onClicked.addListener(async (details) => {
  if (details.menuItemId === "Clarity") {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });

    chrome.scripting
      .executeScript({
        target: { tabId: tab.id },
        files: ["./content.bundle.js"],
      })
      .then(() => console.log("script injected in all frames"));
  }
});

chrome.runtime.onMessageExternal.addListener(
  (request, sender, sendResponse) => {
    // if (sender.url === blocklistedWebsite) return; // don't allow this web page access
    console.log(request.message);
  }
);
