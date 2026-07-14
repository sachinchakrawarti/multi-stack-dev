# 03 - External JavaScript

## 📖 Overview

This example demonstrates how to use **External JavaScript** by placing JavaScript code in a separate `.js` file and linking it to an HTML document.

Using external JavaScript is the recommended approach for modern web development because it keeps HTML and JavaScript separate, making projects easier to organize and maintain.

---

## 📁 File Structure

```text
03_external_javascript/
│
├── index.html
├── README.md
├── script.js
└── style.css
```

---

## 🎯 Objectives

After completing this example, you will learn how to:

- Create an external JavaScript file
- Link JavaScript using the `<script src="">` tag
- Use `console.log()`
- Handle button click events
- Display alert messages
- Update HTML elements with JavaScript

---

## 📌 Linking an External JavaScript File

```html
<script src="script.js"></script>
```

The browser loads and executes the JavaScript code from `script.js`.

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
External JavaScript Loaded!
Welcome to JavaScript.
Current Date & Time: Mon Jul ...
Button Clicked!
```

### Alert

```text
Hello from External JavaScript!
```

### Page

The heading changes to:

```text
External JavaScript is Working!
```

---

## 📚 Concepts Covered

- External JavaScript
- `<script src="">`
- `console.log()`
- `alert()`
- DOM Selection
- `getElementById()`
- `addEventListener()`
- Button Click Events

---

## ⚖️ Internal vs External JavaScript

| Internal JavaScript | External JavaScript |
|---------------------|---------------------|
| Inside HTML file | Separate `.js` file |
| Suitable for small examples | Best for medium and large projects |
| Difficult to reuse | Easy to reuse |
| Harder to maintain | Easier to maintain |

---

## 🧪 Practice Exercises

### Exercise 1

Print your name.

```javascript
console.log("Sachin");
```

---

### Exercise 2

Change the background color.

```javascript
document.body.style.backgroundColor = "#dbeafe";
```

---

### Exercise 3

Change the button text.

```javascript
button.textContent = "Clicked!";
```

---

### Exercise 4

Display today's date in the webpage.

```javascript
document.querySelector(".note").textContent =
    new Date();
```

---

### Exercise 5

Add another button that displays your favorite programming language.

---

## ✅ Learning Outcome

After completing this example, you will be able to:

- Create and organize an external JavaScript file
- Connect HTML with JavaScript
- Respond to user interactions
- Modify webpage content dynamically
- Understand why external JavaScript is the preferred approach for professional web development

---

**Difficulty:** ⭐ Beginner

**Topic:** JavaScript Introduction

**Example Number:** 03