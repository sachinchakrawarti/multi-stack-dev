// ===================================
// External JavaScript Example
// ===================================

// Display messages in the console
console.log("External JavaScript Loaded!");
console.log("Welcome to JavaScript.");
console.log("Current Date & Time:", new Date());

// Select button
const button = document.getElementById("messageBtn");

// Add click event
button.addEventListener("click", function () {

    alert("Hello from External JavaScript!");

    console.log("Button Clicked!");

    document.getElementById("heading").textContent =
        "External JavaScript is Working!";

});