chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason !== "install" && details.reason !== "update") return;
  chrome.contextMenus.create({
    title: "Clarifai",
    contexts: ["selection"],
    id: "clarifai",
  });
});

chrome.contextMenus.onClicked.addListener(async (details) => {
  if (details.menuItemId === "clarifai") {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });

    chrome.scripting
      .executeScript({
        target: { tabId: tab.id },
        files: ["content.js"],
      })
      .then(() => console.log("script injected in all frames"));
  }
});
