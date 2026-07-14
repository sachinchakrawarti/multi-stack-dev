// ===================================
// Greeting Page Example
// ===================================

console.log("Greeting Page Loaded");

const button = document.getElementById("greetBtn");
const message = document.getElementById("message");
const heading = document.getElementById("heading");

button.addEventListener("click", function () {

    const greetings = [
        "👋 Hello! Welcome to JavaScript.",
        "😊 Have a wonderful day!",
        "🚀 Keep learning and keep coding!",
        "💻 Practice makes perfect.",
        "🎉 Welcome to the world of programming!"
    ];

    const randomGreeting =
        greetings[Math.floor(Math.random() * greetings.length)];

    message.textContent = randomGreeting;

    heading.textContent = "Greeting Delivered!";

    console.log(randomGreeting);

});