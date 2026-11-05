const button = document.getElementById("helloBtn");

button.addEventListener("click",()=>{
    chrome.runtime.sendMessage({
        message: "Hello Background!"
    });
})
