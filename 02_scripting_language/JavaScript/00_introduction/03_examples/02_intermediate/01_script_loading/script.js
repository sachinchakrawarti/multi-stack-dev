// ===================================
// Script Loading Example
// ===================================

console.log("JavaScript file loaded successfully.");

// Access DOM elements immediately because
// the script is loaded after the HTML.

const heading = document.getElementById("heading");
const button = document.getElementById("loadBtn");

button.addEventListener("click", function () {

    heading.textContent = "Script Loaded Successfully!";

    alert("The JavaScript file has been loaded.");

    console.log("Button Clicked!");

});

console.log("DOM elements are ready to use.");