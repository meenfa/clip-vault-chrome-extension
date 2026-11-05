console.log("Background service worker started!");

chrome.runtime.onInstalled.addListener(() => {
    console.log("ClipVault has been installed!");
});

// listens for messages
chrome.runtime.onMessage.addListener((message)=>{
    console.log("message received:", message);
    
})