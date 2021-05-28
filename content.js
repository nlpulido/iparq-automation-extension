// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

function prependText(text) {

  // define our header
  const header = document.createElement("h1")
  header.innerHTML = text;
  
  // prepend it to the body
  const body = document.getElementsByTagName("body");
  body[0].prepend(header);
  
};

function validateMainPortal() {
  console.log("Starting validator for MAIN...");

  // redirect to the permit types page
  window.location.replace("https://admin.thepermitstore.com/setup/permittypes.php");

  // find the permit table
  let permit_table = document.getElementById('st_setuppermittypes');

  
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == "main") {
      validateMainPortal();
    } else if (request.type == "affiliate") {
      console.log("Starting validator for AFFILIATE...");
    } else if (request.type == "interrupt") {
      console.log("Interrupting validator...");
    } else {
      console.log(`Got an unknown type: ${request.type}`)
    }
  }
);