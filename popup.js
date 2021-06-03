'use strict';

window.onload = (function() {

  let validationEnabled = false;
  let portal = "main"; // defaults to main portal

  function handleValidation() {
    validationEnabled = !validationEnabled;
  };

  function validateiPARQAdmin() {
    // check if we're on an iPARQ URL
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

      // rewrite popup.html if we're not on an admin iPARQ site
      if (!tabs[0].url.includes("admin.thepermitstore")) {
        const inner = document.getElementById('inner');
        inner.innerHTML = "<h1>Please use the extension on the iPARQ admin site.</h1>";
      }

    });
  };

  function initializeDropdown() {
    // query our current tab & set our dropdown accordingly
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0].title.includes("AFFILIATES")) {
        document.getElementById("permit-portal").value = "affiliate";
      }
    });
  }

  function handleDropdown() {
    // initialize our dropdown
    initializeDropdown();

    // grab our menu
    let dropdown = document.getElementById('permit-portal');

    // set up a change listener
    dropdown.onchange = function () {

      // grab the current choice
      let choice = document.getElementById("permit-portal").value;
      portal = choice;
  
      // send a message to the content script to change the portal
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: portal});
      });
    }
  };

  function toggleButtons() {
    // disable our validateBtn & enabled our cancelBtn
    document.getElementById('validateBtn').disabled = !document.getElementById('validateBtn').disabled;
    document.getElementById('cancelBtn').disabled = !document.getElementById('cancelBtn').disabled;
  }

  function setUpExtension() {

    /* make sure we're on the iPARQ admin site */
    validateiPARQAdmin();

    /* handle the drop down selection (navigates to the portal as necessary) */
    handleDropdown();

    // add a listener for when the user clicks start
    document.getElementById('validateBtn').addEventListener('click', () => {
      
      // handle our validation state & toggle buttons
      handleValidation();
      toggleButtons();

      // send a message to the content script
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "start"});
      });

    });

    // add a listener for when the user clicks cancel
    document.getElementById('cancelBtn').addEventListener('click', () => {
      
      // handle our validation state & toggle buttons
      handleValidation();
      toggleButtons();

      // send a message to the content script
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "interrupt"});
      });

    });
  
  }

  // on load, set up our listeners for the elements
  document.addEventListener('DOMContentLoaded', setUpExtension);
})();