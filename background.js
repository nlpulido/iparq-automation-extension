'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

function validateMainPortal() {
    console.log("Starting validator for MAIN...");
  
    switchToMainPortal().then(navigatePermitTypes);
  
  //   window.location.onchange(() => {
  //     // find the permit table
  //     let permit_table = document.getElementById('st_setuppermittypes');
  
  //     let permit_elements = permit_table.getElementsByTagName('tr');
  
  //     console.log(permit_elements)
  //   })
  }

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