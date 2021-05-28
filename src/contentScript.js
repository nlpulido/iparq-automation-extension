'use strict';

// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts
chrome.scripting.executeScript(null, { file: "jquery.js" }, function (results) {
  console.log(results);
});

function prependText(text) {

  // define our header
  const header = document.createElement("h1")
  header.innerHTML = text;
  
  // prepend it to the body
  // const body = document.getElementsByTagName("body");
  // body[0].prepend(header);

  // Use jquery to overwrite the elements
  // $("body").prepend(header);

  console.log("something should've happened");
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == "start") {
      console.log("Starting validator...");
      prependText("START!!");
    } else if (request.type == "interrupt") {
      console.log("Interrupting validator...");
      prependText("CANCEL!!");
    }
  }
);