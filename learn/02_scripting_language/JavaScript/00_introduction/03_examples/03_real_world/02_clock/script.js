// ===================================
// Digital Clock Example
// ===================================

const clock = document.getElementById("clock");
const dateText = document.getElementById("date");
const toggleBtn = document.getElementById("toggleBtn");

let use24Hour = true;

function updateClock() {

    const now = new Date();

    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !use24Hour
    };

    clock.textContent = now.toLocaleTimeString([], options);

    dateText.textContent = now.toDateString();

}

updateClock();

// Update every second
setInterval(updateClock, 1000);

// Toggle between 12-hour and 24-hour format
toggleBtn.addEventListener("click", function () {

    use24Hour = !use24Hour;

    updateClock();

    console.log(
        use24Hour
            ? "24-hour format enabled"
            : "12-hour format enabled"
    );

});