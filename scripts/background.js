console.log("background listening.....")


chrome.commands.onCommand.addListener((command) => {
    if (command === "toggle-overlay") {
      console.log("Toggle overlay command received.");
      // Later, we'll message content.js to show/hide an overlay.
    }
  });
  