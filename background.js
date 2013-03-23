var isOff = true;

chrome.browserAction.onClicked.addListener(function (tab) {
	if (isOff) {
		chrome.contentSettings.javascript.set({
			'primaryPattern': '<all_urls>',
			'setting': 'block',
			'scope': 'regular'
		});
		chrome.browserAction.setBadgeText({
			text: 'Zzz'
		});
		chrome.browserAction.setBadgeBackgroundColor({
			color: [20, 130, 220, 140]
		});
		chrome.browserAction.setIcon({
			path: 'img/badge_off.png'
		});
		chrome.browserAction.setTitle({
			title: 'ON'
		});
		isOff = false;
	} else {
		chrome.contentSettings.javascript.set({
			'primaryPattern': '<all_urls>',
			'setting': 'allow',
			'scope': 'regular'
		});
		chrome.browserAction.setBadgeText({
			text: ''
		});
		chrome.browserAction.setIcon({
			path: 'img/badge_on.png'
		});
		chrome.browserAction.setTitle({
			title: 'OFF'
		});
		isOff = true;
	}
	chrome.tabs.update(tab.id, {
		url: tab.url
	});
});	