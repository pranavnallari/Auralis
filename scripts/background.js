// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log("[+] Service Worker loaded")
})


chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-overlay") {
    // send message to content.js that hotkey has been activated
    console.log("Hotkey pressed");
    (async () => {
      const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
      const response = await chrome.tabs.sendMessage(tab.id, {action : "activate_overlay"});
      console.log(response.status)
    })();
  }
});

  