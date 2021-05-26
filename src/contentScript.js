'use strict';

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

}

// Wait for the DOM to completely load.
document.addEventListener("DOMContentLoaded", () => {

  // Listen for the message to start the script
  

//   prependText("iPARQ PERMIT VALIDATOR WOOHOO");

  // Listen for request
  // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //   if (request.type == "getText") {
  //     // Append to the contents of the body.
  //     document.body.innerHTML = '<h1 id="installed" >Successfully Installed!</h1>' + document.body.innerHTML;
  //     // console.log("content script received message")
  //     sendResponse({response: "Hello from content script!"});
  //   }

});
