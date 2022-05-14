chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.local.set({
		group: '12K1',
        projectGroup: 'P02',
        labGroup:'L02',
        compGroup:'K01',
        langGroup:'MM5',
        hideLectures: false,
	});
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

	if (!!tab.url) {
		if (changeInfo.status === "complete" && tab.url.includes("http://podzial.mech.pk.edu.pl/stacjonarne/html/index.html")) {
			chrome.scripting
					.insertCSS({
						target: { tabId: tabId },
						files: ["pkwm-helper.css"],
					})
					.then(() =>
						chrome.scripting.executeScript({
							target: { tabId: tabId },
							files: ["content-script.js"],
						})
					)
					.catch((err) => console.error("err: " + err));
				}
        }
    }
);