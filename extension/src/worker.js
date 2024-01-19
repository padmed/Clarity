chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason !== "install" && details.reason !== "update") return;
  chrome.contextMenus.create({
    title: "Clarity",
    contexts: ["selection"],
    id: "clarifai",
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
