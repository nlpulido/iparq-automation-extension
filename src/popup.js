'use strict';

import './popup.css';

window.onload = (function() {

  let validationEnabled = false;
  function handleValidation() {
    validationEnabled = !validationEnabled;
  }

  function setUpExtension() {

    // add a listener for when the user clicks start
    document.getElementById('validateBtn').addEventListener('click', () => {
      
      // handle our validation state
      handleValidation();

      // log statement
      console.log(`Validation state: ${validationEnabled}`);

      // send a message to the background
      // chrome.runtime.sendMessage(
      //   {
      //     type: "START",
      //     message: "Hello from the popup!",
      //   }
      // );

      // disable our validateBtn & enabled our cancelBtn
      document.getElementById('validateBtn').disabled = true;
      document.getElementById('cancelBtn').disabled = false;

      // send a message to the content script
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "start"});
      });

    });

    // add a listener for when the user clicks cancel
    document.getElementById('cancelBtn').addEventListener('click', () => {
      
      // handle our validation state
      handleValidation();

      // send a message to the background
      // chrome.runtime.sendMessage(
      //   {
      //     type: "INTERRUPT",
      //     message: "Hello from the popup!",
      //   }
      // );

      // disable our validateBtn & enabled our cancelBtn
      document.getElementById('validateBtn').disabled = false;
      document.getElementById('cancelBtn').disabled = true;

      // send a message to the content script
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "interrupt"});
      });
    });
  
  }

  // on load, set up our listeners for the elements
  document.addEventListener('DOMContentLoaded', setUpExtension);
})();
