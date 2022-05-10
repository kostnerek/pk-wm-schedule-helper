chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.local.set({
		group: '',
        projectGroup: '',
        labGroup:'',
        compGroup:'',
        langGroup:'',
        hideLectures: false,
	});
});