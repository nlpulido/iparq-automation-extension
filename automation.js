// promise to navigate to the permit types
function navigatePermitTypes() {
    return new Promise((resolve) => {
        console.log("Switching to navigating to permit types");
  
        // Navigate to the permit types page
        window.location.href = "https://admin.thepermitstore.com/setup/permittypes.php";
  
        resolve();
    })
}

function prependText(text) {
    // define our header
    const header = document.createElement("h1")
    header.innerHTML = text;

    // prepend it to the body
    const body = document.getElementsByTagName("body");
    body[0].prepend(header);

    console.log(`Prepending: ${text}`);
};

console.log("done")