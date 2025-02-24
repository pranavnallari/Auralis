// content.js
console.log("Auralis content script loaded!");


window.onload = () => {
  // Check if the overlay already exists
  if (!document.getElementById('auralis-overlay')) {
    // Create the overlay element
    const overlay = document.createElement('div');
    overlay.id = 'auralis-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '10%';
    overlay.style.right = '10%';
    overlay.style.width = '300px';
    overlay.style.height = '50px'; // Adjust height based on your design
    overlay.style.backgroundColor = 'rgba(255,255,255,0.9)';
    overlay.style.border = '1px solid #ccc';
    overlay.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
    overlay.style.zIndex = '10000';
    overlay.style.display = 'none'; // Keep it hidden initially

    // Create a simple input element for the search bar
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchInput.style.width = '100%';
    searchInput.style.height = '100%';
    searchInput.style.border = 'none';
    searchInput.style.outline = 'none';
    searchInput.style.fontSize = '16px';
    searchInput.style.padding = '5px';

    // Append the input to the overlay
    overlay.appendChild(searchInput);
    // Append the overlay to the document body
    document.body.appendChild(overlay);
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "activate_overlay") {
    console.log("Overlay will be enabled !!!")
    sendResponse({status : "success"})
  }
})
