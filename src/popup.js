'use strict';

import './popup.css';

window.onload = (function() {
  function changeStatusMessage(message) {
    document.getElementById('status').innerHTML() = message;
  }

  function setUpExtension() {

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.log(request);
    });

    document.getElementById('validateBtn').addEventListener('click', () => {
      
      // Communicate with background file by sending a message
      chrome.runtime.sendMessage(
        {
          type: 'GREETINGS',
          payload: {
            message: 'Hello, my name is Pop. I am from Popup.',
          },
        },
        response => {
          console.log(response.message);
        }
      );
    });

  }

  // on load, set up our listeners for the elements
  document.addEventListener('DOMContentLoaded', setUpExtension);
})();
