# Window Object

## Table of Contents

- Learning Objectives
- Introduction
- Why Do We Need the Window Object?
- What is the Window Object?
- Browser Object Hierarchy
- Features of the Window Object
- Common Window Properties
- Common Window Methods
- Dialog Boxes
- Timers
- Browser Information
- Navigation
- Window Size and Position
- Opening and Closing Windows
- Event Handling
- Relationship Between Window and Document
- Real-World Examples
- Advantages
- Limitations
- Common Mistakes
- Best Practices
- Summary
- Interview Questions
- Practice Exercise
- Key Takeaway
- Next Lesson

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand what the Window Object is.
- Explain why it is the global object in browsers.
- Use common Window properties and methods.
- Work with browser dialogs and timers.
- Understand the relationship between `window` and `document`.

---

# Introduction

Every JavaScript program running inside a browser executes within a special object called the **Window Object**.

The Window Object is automatically created by the browser and represents the browser window or tab where your webpage is loaded.

Everything in browser JavaScript starts from the Window Object.

For example:

```javascript
alert("Hello");
```

actually means:

```javascript
window.alert("Hello");
```

The `window` keyword is often omitted because it is the global object.

---

# Why Do We Need the Window Object?

The Window Object provides access to:

- Browser information
- Timers
- Dialog boxes
- Navigation
- Browser history
- Screen information
- Storage
- DOM
- Browser APIs

Without the Window Object, JavaScript would not be able to interact with the browser environment.

---

# What is the Window Object?

The **Window Object** is the global object in web browsers.

It represents the browser window and contains all global variables, functions, browser APIs, and the DOM.

Everything declared globally becomes a property of the Window Object.

Example:

```javascript
var language = "JavaScript";

console.log(window.language);
```

Output:

```text
JavaScript
```

---

# Browser Object Hierarchy

```text
Window
│
├── Document
│
├── History
│
├── Location
│
├── Navigator
│
├── Screen
│
├── Console
│
├── Local Storage
│
├── Session Storage
│
├── Fetch API
│
├── Timers
│
└── Many Browser APIs
```

The Window Object is the root object of the browser environment.

---

# Features of the Window Object

- Global object
- Automatically created
- Represents the browser window
- Contains Browser APIs
- Contains the DOM
- Manages timers
- Controls navigation
- Stores global variables

---

# Common Window Properties

| Property | Description |
|----------|-------------|
| `window.document` | HTML document |
| `window.location` | Current URL |
| `window.history` | Browser history |
| `window.navigator` | Browser information |
| `window.screen` | Screen information |
| `window.localStorage` | Local storage |
| `window.sessionStorage` | Session storage |
| `window.console` | Developer console |
| `window.innerWidth` | Browser width |
| `window.innerHeight` | Browser height |

Example:

```javascript
console.log(window.innerWidth);
console.log(window.innerHeight);
```

---

# Common Window Methods

| Method | Description |
|---------|-------------|
| `alert()` | Shows an alert box |
| `confirm()` | Shows a confirmation dialog |
| `prompt()` | Takes user input |
| `open()` | Opens a new window |
| `close()` | Closes the current window |
| `setTimeout()` | Executes code after a delay |
| `setInterval()` | Repeats code at intervals |
| `scrollTo()` | Scrolls to a position |
| `print()` | Opens the print dialog |

---

# Dialog Boxes

## alert()

```javascript
window.alert("Welcome!");
```

Displays a simple message.

---

## confirm()

```javascript
const result = confirm("Delete this file?");

console.log(result);
```

Returns:

- `true`
- `false`

---

## prompt()

```javascript
const name = prompt("Enter your name:");

console.log(name);
```

Returns the entered text or `null` if canceled.

---

# Timers

## setTimeout()

Runs once after a specified delay.

```javascript
setTimeout(() => {

    console.log("Executed after 2 seconds");

}, 2000);
```

---

## setInterval()

Runs repeatedly.

```javascript
setInterval(() => {

    console.log("Running...");

}, 1000);
```

---

## clearTimeout()

Cancels a timeout.

```javascript
const timer = setTimeout(() => {

    console.log("Hello");

}, 3000);

clearTimeout(timer);
```

---

## clearInterval()

Stops an interval.

```javascript
const interval = setInterval(() => {

    console.log("Tick");

}, 1000);

clearInterval(interval);
```

---

# Browser Information

## Navigator

```javascript
console.log(window.navigator.userAgent);
```

Returns browser information.

---

## Screen

```javascript
console.log(screen.width);
console.log(screen.height);
```

Returns screen dimensions.

---

# Navigation

Current URL:

```javascript
console.log(window.location.href);
```

Redirect to another page:

```javascript
window.location.href = "https://example.com";
```

Reload the page:

```javascript
window.location.reload();
```

Go back:

```javascript
window.history.back();
```

Go forward:

```javascript
window.history.forward();
```

---

# Window Size and Position

```javascript
console.log(window.innerWidth);

console.log(window.innerHeight);
```

Move to top:

```javascript
window.scrollTo(0, 0);
```

Scroll to bottom:

```javascript
window.scrollTo(0, document.body.scrollHeight);
```

---

# Opening and Closing Windows

Open a new window:

```javascript
window.open("https://openai.com");
```

Close the current window:

```javascript
window.close();
```

> **Note:** Browsers generally allow `window.close()` only for windows or tabs that were opened by JavaScript.

---

# Event Handling

The Window Object can listen for browser events.

Example:

```javascript
window.addEventListener("resize", () => {

    console.log("Window resized");

});
```

Another example:

```javascript
window.addEventListener("scroll", () => {

    console.log("Scrolling...");

});
```

---

# Relationship Between Window and Document

The `document` object is a property of the `window` object.

```text
Window
│
└── Document
```

These two statements are equivalent:

```javascript
document.title = "My Website";
```

```javascript
window.document.title = "My Website";
```

---

# Real-World Examples

### Example 1: Welcome Message

```javascript
window.alert("Welcome to our website!");
```

---

### Example 2: Get Browser Width

```javascript
console.log(window.innerWidth);
```

---

### Example 3: Redirect User

```javascript
window.location.href = "/dashboard";
```

---

### Example 4: Auto Refresh After 5 Seconds

```javascript
setTimeout(() => {

    location.reload();

}, 5000);
```

---

### Example 5: Print Current Page

```javascript
window.print();
```

---

# Advantages

- Easy access to browser APIs.
- Global object for browser JavaScript.
- Built-in timers.
- Navigation control.
- Dialog support.
- Access to browser information.
- Access to the DOM through `document`.

---

# Limitations

- Exists only in browsers.
- Not available in Node.js.
- Some methods are restricted for security.
- Excessive use of dialogs can degrade user experience.

---

# Common Mistakes

### ❌ Incorrect

Trying to use `window` in Node.js.

```javascript
console.log(window);
```

This results in:

```text
ReferenceError: window is not defined
```

---

### ❌ Incorrect

Using many `alert()` dialogs in production applications.

They block user interaction until dismissed.

---

### ✅ Correct

Use modern UI components instead of browser dialogs for better user experience.

---

# Best Practices

- Use `window` only when necessary.
- Prefer `globalThis` when writing cross-platform JavaScript.
- Avoid blocking dialogs.
- Clean up timers using `clearTimeout()` and `clearInterval()`.
- Use event listeners responsibly and remove them when no longer needed.

---

# Summary

- The Window Object is the global object in browsers.
- It represents the browser window.
- It contains the DOM, Browser APIs, timers, and storage.
- Global variables become properties of `window` (when declared with `var`).
- It provides methods for navigation, dialogs, timers, printing, and event handling.
- `document` is a property of `window`.

---

# Interview Questions

1. What is the Window Object?
2. Why is `window` called the global object?
3. What is the difference between `window` and `document`?
4. Name five commonly used Window methods.
5. What is the difference between `setTimeout()` and `setInterval()`?
6. How do you redirect a webpage using JavaScript?
7. Why is `window` unavailable in Node.js?
8. What does `window.location` represent?
9. What is `window.navigator` used for?
10. What is `globalThis`, and why is it useful?

---

# Practice Exercise

1. Display an alert welcoming the user.
2. Print the browser width and height.
3. Ask the user for their name using `prompt()`.
4. Show a confirmation dialog before deleting an item.
5. Create a timer that displays a message after 3 seconds.
6. Create a repeating timer and stop it after 10 seconds.
7. Print the current URL using `window.location.href`.
8. Listen for the browser resize event and log the new window size.

---

# Key Takeaway

> The Window Object is the foundation of browser JavaScript. It serves as the global object, giving developers access to browser APIs, the DOM, timers, navigation, storage, and many other features required to build interactive web applications.

---

# Next Lesson

<h2>
➡️ <a href="../0009_document_object/document_object.md" style="color:#1E90FF;text-decoration:none;">
<strong>Document Object</strong>
</a>
</h2>