'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request) => {
    switch(request.type) {
        case "START":
            console.log("START REQUESTED (from background.js)");
            break;
        case "INTERRUPT":
            console.log("INTERRUPTION REQUESTED (from background.js)");
            break;
        default:
            break;
    }
    return true;
});