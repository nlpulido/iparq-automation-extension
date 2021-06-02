// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

// Promise to switch to the main portal
function switchToMainPortal() {
  return new Promise((resolve) => {
    console.log("Switching to main portal");
    // Navigate to the main portal
    window.location.href = "https://admin.thepermitstore.com/setup/switch_client.php?table=switch&edit=83";
    resolve();
  });
}

// Promise to switch to the affiliate portal
function switchToAffiliatePortal() {
  return new Promise((resolve) => {
    console.log("Switching to affiliate portal");
    // Navigate to the main portal
    window.location.href = "https://admin.thepermitstore.com/setup/switch_client.php?table=switch&edit=155";
    resolve();
  });
}

// promise to navigate to the permit types
function navigatePermitTypes() {
  return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Switching to navigating to permit types");
        // Navigate to the permit types page
        // window.location.href = "https://admin.thepermitstore.com/setup/permittypes.php";
        resolve();
      }, 2000);
  })
}

function prependText(text) {

  // define our header
  const header = document.createElement("h1")
  header.innerHTML = text;
  
  // prepend it to the body
  const body = document.getElementsByTagName("body");
  body[0].prepend(header);
  
};

// function validateMainPortal() {
//   console.log("Starting validator for MAIN...");

//   switchToMainPortal().then(navigatePermitTypes);

// //   window.location.onchange(() => {
// //     // find the permit table
// //     let permit_table = document.getElementById('st_setuppermittypes');

// //     let permit_elements = permit_table.getElementsByTagName('tr');

// //     console.log(permit_elements)
// //   })
// }

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == "main") {
      switchToMainPortal();
    } else if (request.type == "affiliate") {
      switchToAffiliatePortal();
    } else if (request.type == "interrupt") {
      console.log("Interrupting validator...");
    } else {
      console.log(`Got an unknown type: ${request.type}`)
    }
  }
);