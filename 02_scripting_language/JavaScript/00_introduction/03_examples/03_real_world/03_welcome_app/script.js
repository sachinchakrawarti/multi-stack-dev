// ===================================
// Welcome App Example
// ===================================

const nameInput = document.getElementById("nameInput");
const welcomeBtn = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

welcomeBtn.addEventListener("click", function () {

    const name = nameInput.value.trim();

    if (name === "") {

        message.textContent = "⚠️ Please enter your name.";
        message.style.color = "red";

        return;

    }

    message.style.color = "#1e40af";

    message.textContent =
        `👋 Welcome, ${name}! Happy Learning JavaScript!`;

    console.log(`User Name: ${name}`);

});

// Allow Enter key
nameInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        welcomeBtn.click();

    }

});