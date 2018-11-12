let isOff = true;

const setContentsJS = flag => {
  // Set contents settings
  chrome.contentSettings.javascript.set({
    primaryPattern: "<all_urls>",
    setting: flag ? "block" : "allow",
    scope: "regular"
  });
  // Set contents settings
  chrome.browserAction.setIcon({
    path: {
      "19": `images/icon-38${flag ? "-off" : ""}.png`,
      "38": `images/icon-76${flag ? "-off" : ""}.png`
    }
  });
  // Set title
  chrome.browserAction.setTitle({
    title: `JavaScript: ${flag ? "OFF" : "ON"}`
  });
  isOff = !flag;
};

chrome.browserAction.onClicked.addListener(tab => {
  setContentsJS(isOff);
  chrome.tabs.update(tab.id, { url: tab.url });
});
