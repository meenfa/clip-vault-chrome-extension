console.log("Background service worker started!");

chrome.runtime.onInstalled.addListener(() => {
    console.log("ClipVault has been installed!");
});