var isOff = true;

chrome.browserAction.onClicked.addListener(function (tab) {
  if (isOff) {
    chrome.contentSettings.javascript.set({
      'primaryPattern': '<all_urls>',
      'setting': 'block',
      'scope': 'regular'
    });
    chrome.browserAction.setIcon({
      path: {
        '19': 'images/icon-38-off.png',
        '38': 'images/icon-76-off.png'
      }
    });
    chrome.browserAction.setTitle({
      title: 'JavaScript: OFF'
    });
    isOff = false;
  } else {
    chrome.contentSettings.javascript.set({
      'primaryPattern': '<all_urls>',
      'setting': 'allow',
      'scope': 'regular'
    });
    chrome.browserAction.setIcon({
      path: {
        '19': 'images/icon-38.png',
        '38': 'images/icon-76.png'
      }
    });
    isOff = true;
  }
  chrome.tabs.update(tab.id, {
    url: tab.url
  });
});	