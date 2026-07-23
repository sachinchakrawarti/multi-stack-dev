# 01 - Script Loading

## 📖 Overview

This example demonstrates how to load an external JavaScript file **after the HTML content** by placing the `<script>` tag just before the closing `</body>` tag.

This is a common and beginner-friendly approach because the HTML elements are loaded before the JavaScript executes.

---

## 📁 File Structure

```text
01_script_loading/
│
├── index.html
├── README.md
├── script.js
└── style.css
```

---

## 🎯 Objectives

After completing this example, you will learn how to:

- Load an external JavaScript file
- Place the `<script>` tag correctly
- Access HTML elements safely
- Handle button click events
- Understand why script placement matters

---

## 📌 Script Loading

The recommended beginner approach is:

```html
<body>

    <!-- HTML Content -->

    <script src="script.js"></script>

</body>
```

Since the browser loads the HTML first, JavaScript can immediately access page elements without additional code.

---

## ▶️ How to Run

1. Open **index.html** in your browser.
2. Press **F12** (or **Ctrl + Shift + I**).
3. Open the **Console** tab.
4. Click the **Click Me** button.

---

## 💻 Expected Output

### Console

```text
JavaScript file loaded successfully.
DOM elements are ready to use.
Button Clicked!
```

### Alert

```text
The JavaScript file has been loaded.
```

### Page

The heading changes to:

```text
Script Loaded Successfully!
```

---

## 📚 Concepts Covered

- External JavaScript
- Script loading
- DOM access
- `getElementById()`
- `addEventListener()`
- Browser Console

---

## 🧪 Practice Exercises

### Exercise 1

Change the heading color using JavaScript.

```javascript
heading.style.color = "green";
```

---

### Exercise 2

Display the current date in the page.

```javascript
document.querySelector(".note").textContent =
    new Date();
```

---

### Exercise 3

Change the button text after clicking.

```javascript
button.textContent = "Loaded";
```

---

### Exercise 4

Print a custom message to the console.

```javascript
console.log("Learning Script Loading");
```

---

### Exercise 5

Add another button that changes the page background color.

---

## 💡 Best Practice

For beginner projects, placing the `<script>` tag just before the closing `</body>` tag ensures the HTML is fully loaded before JavaScript runs.

For larger applications, you will also learn about the `defer` and `async` attributes, which provide more flexible ways to load scripts.

---

## ✅ Learning Outcome

After completing this example, you will be able to:

- Load JavaScript correctly in an HTML page
- Access DOM elements without errors
- Respond to user interactions
- Understand why script loading order is important

---

**Difficulty:** ⭐ Beginner

**Topic:** JavaScript Introduction

**Example Number:** 01 (Script Loading)