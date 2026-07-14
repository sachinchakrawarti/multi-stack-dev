# 02 - Internal JavaScript

## 📖 Overview

This example demonstrates **Internal JavaScript**, where JavaScript code is written directly inside the HTML document using the `<script>` tag.

This approach is suitable for small examples and learning purposes but is generally not recommended for large projects.

---

## 📁 File Structure

```text
02_internal_javascript/
│
├── index.html
├── README.md
├── script.js
└── style.css
```

> **Note:** The `script.js` file is intentionally empty because this example focuses on **Internal JavaScript**.

---

## 🎯 Objectives

After completing this example, you will learn how to:

- Write JavaScript inside an HTML page
- Use the `<script>` tag
- Print output using `console.log()`
- Display popup messages using `alert()`
- Change HTML content using JavaScript
- Handle button click events

---

## 📌 What is Internal JavaScript?

Internal JavaScript is written inside the HTML file using the `<script>` element.

Example:

```html
<script>

console.log("Hello!");

</script>
```

---

## ▶️ How to Run

1. Open **index.html** in your browser.
2. Press **F12**.
3. Open the **Console** tab.
4. Click the **Click Me** button.

---

## 💻 Expected Output

### Console

```text
Internal JavaScript Loaded!
Button Clicked!
```

### Alert

```text
Hello from Internal JavaScript!
```

### Page

The heading changes to:

```text
Button Clicked Successfully!
```

---

## 📚 Concepts Covered

- Internal JavaScript
- `<script>` tag
- `console.log()`
- `alert()`
- Functions
- Button events
- DOM manipulation
- `getElementById()`

---

## ⚖️ Internal vs External JavaScript

| Internal JavaScript | External JavaScript |
|---------------------|---------------------|
| Written inside HTML | Stored in `.js` file |
| Good for small examples | Best for large projects |
| Harder to maintain | Easier to organize |
| Less reusable | Highly reusable |

---

## 🧪 Practice Exercises

### Exercise 1

Print your name.

```javascript
console.log("Sachin");
```

---

### Exercise 2

Display your favorite programming language.

```javascript
alert("JavaScript");
```

---

### Exercise 3

Change the paragraph text.

```javascript
document.querySelector("p").textContent =
    "Learning Internal JavaScript";
```

---

### Exercise 4

Add another button that changes the page background color.

---

### Exercise 5

Print today's date.

```javascript
console.log(new Date());
```

---

## ✅ Learning Outcome

After completing this example, you will understand:

- What Internal JavaScript is
- How to use the `<script>` tag
- When to use Internal JavaScript
- How to manipulate HTML with JavaScript
- Why external JavaScript is preferred for larger applications

---

**Difficulty:** ⭐ Beginner

**Topic:** JavaScript Introduction

**Example Number:** 02