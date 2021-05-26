'use strict';

import './popup.css';

window.onload = (function() {

  function setUpExtension() {

    document.getElementById('validateBtn').addEventListener('click', () => {
      // log statement
      console.log("Button Pressed");

      // send a message to the background
      chrome.runtime.sendMessage(
        {
          type: "START",
          message: "Hello from the popup!",
        }
      );
      
      return true;
    });

  }

  // on load, set up our listeners for the elements
  document.addEventListener('DOMContentLoaded', setUpExtension);
})();
