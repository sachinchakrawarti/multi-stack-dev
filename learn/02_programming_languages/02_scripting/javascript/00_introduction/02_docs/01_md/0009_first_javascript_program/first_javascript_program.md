# First JavaScript Program

## Introduction

Writing your first JavaScript program is the first step toward becoming a JavaScript developer.

In this lesson, you will learn how to:

- Create your first JavaScript file
- Connect JavaScript to an HTML page
- Display output
- Use the browser console
- Run JavaScript using Node.js

By the end of this lesson, you will have written and executed your first JavaScript program.

---

# Prerequisites

Before starting, make sure you have:

- A web browser
- A code editor (such as Visual Studio Code)
- Basic knowledge of HTML
- (Optional) Node.js installed

---

# Project Structure

Create a new folder.

```text
first-javascript-program/
│
├── index.html
└── script.js
```

---

# Step 1: Create the HTML File

Create a file named **index.html**.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>First JavaScript Program</title>
</head>

<body>

    <h1>Welcome to JavaScript</h1>

    <script src="script.js"></script>

</body>

</html>
```

The `<script>` tag loads the JavaScript file.

---

# Step 2: Create the JavaScript File

Create **script.js**

```javascript
console.log("Hello, World!");
```

---

# Step 3: Run the Program

Open `index.html` in your browser.

Open Developer Tools.

Shortcut:

| Operating System | Shortcut |
|------------------|----------|
| Windows/Linux | **F12** or **Ctrl + Shift + I** |
| macOS | **Cmd + Option + I** |

Go to the **Console** tab.

Output:

```text
Hello, World!
```

Congratulations! 🎉

You have successfully written your first JavaScript program.

---

# Understanding console.log()

The `console.log()` function prints information to the browser console.

Example:

```javascript
console.log("Learning JavaScript");
```

Output:

```text
Learning JavaScript
```

It is one of the most commonly used functions for debugging and testing code.

---

# Printing Multiple Messages

```javascript
console.log("Hello");

console.log("Welcome");

console.log("JavaScript");
```

Output:

```text
Hello
Welcome
JavaScript
```

---

# Display Output Using alert()

JavaScript can display popup messages.

Example:

```javascript
alert("Welcome to JavaScript!");
```

Output:

A dialog box appears with the message:

```text
Welcome to JavaScript!
```

---

# Display Output on the Web Page

You can write content directly to the webpage.

Example:

```javascript
document.write("Hello from JavaScript!");
```

Output:

```text
Hello from JavaScript!
```

> **Note:** `document.write()` is useful for learning but is generally **not recommended** for modern web development because it can overwrite the page after it has loaded.

---

# Change HTML Content

JavaScript can modify HTML elements.

Example:

### HTML

```html
<h1 id="title">Hello</h1>
```

### JavaScript

```javascript
document.getElementById("title").textContent = "Welcome to JavaScript";
```

Result:

```text
Welcome to JavaScript
```

---

# Run JavaScript Using Node.js

If Node.js is installed, you can run JavaScript without a browser.

Create `script.js`.

```javascript
console.log("Hello from Node.js");
```

Open a terminal.

Run:

```bash
node script.js
```

Output:

```text
Hello from Node.js
```

---

# Complete Example

## index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>JavaScript Example</title>
</head>

<body>

    <h1 id="heading">Learning JavaScript</h1>

    <button onclick="showMessage()">
        Click Me
    </button>

    <script src="script.js"></script>

</body>

</html>
```

---

## script.js

```javascript
console.log("JavaScript Loaded!");

function showMessage() {

    alert("Hello, JavaScript!");

    document.getElementById("heading").textContent =
        "Button Clicked Successfully";

}
```

When the button is clicked:

- A popup message appears.
- The heading text changes.
- A message is already displayed in the console.

---

# Common Output Methods

| Method | Output Location |
|---------|-----------------|
| `console.log()` | Browser console |
| `alert()` | Popup dialog |
| `document.write()` | Web page |
| `textContent` | Updates HTML element |
| `innerHTML` | Updates HTML content |

---

# Common Mistakes

## Forgetting to Link the JavaScript File

Incorrect:

```html
<script src="scripts.js"></script>
```

Correct:

```html
<script src="script.js"></script>
```

---

## Misspelling `console.log`

Incorrect:

```javascript
Console.log("Hello");
```

Correct:

```javascript
console.log("Hello");
```

---

## Forgetting Quotes Around Strings

Incorrect:

```javascript
console.log(Hello);
```

Correct:

```javascript
console.log("Hello");
```

---

## Forgetting Semicolons

Although JavaScript often inserts semicolons automatically, writing them consistently improves readability and avoids certain edge cases.

Example:

```javascript
console.log("Hello");
console.log("World");
```

---

# Best Practices

- Write simple programs first.
- Use `console.log()` for testing.
- Keep HTML and JavaScript in separate files.
- Use meaningful file names.
- Save files before running.
- Practice writing small programs every day.

---

# Practice Exercises

1. Print your name using `console.log()`.
2. Display your favorite programming language using `alert()`.
3. Change the text of an HTML heading using JavaScript.
4. Print three different messages to the console.
5. Run the same JavaScript file using both a browser and Node.js.

---

# Key Points

- JavaScript code can be written in a separate `.js` file.
- The `<script>` tag connects JavaScript to an HTML page.
- `console.log()` displays messages in the browser console.
- `alert()` shows popup messages.
- JavaScript can modify HTML content dynamically.
- The same JavaScript file can often run in both a browser and Node.js (unless it uses browser-specific APIs).

---

# Summary

Your first JavaScript program introduces the basic workflow of writing, linking, and executing JavaScript code. By learning how to use `console.log()`, `alert()`, and simple DOM manipulation, you build the foundation for creating interactive web applications. These core concepts will be used throughout your JavaScript learning journey.