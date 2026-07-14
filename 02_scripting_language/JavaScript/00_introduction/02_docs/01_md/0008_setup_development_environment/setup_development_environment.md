# Setting Up the JavaScript Development Environment

## Introduction

Before writing JavaScript code, you need a **development environment**. A good setup helps you write, test, debug, and run JavaScript applications efficiently.

The good news is that you can start learning JavaScript with just a **web browser** and a **text editor**.

As you progress, you can install additional tools such as **Node.js**, **Visual Studio Code**, and **Git**.

---

# Prerequisites

To start learning JavaScript, you should have:

- A computer (Windows, macOS, or Linux)
- A modern web browser
- A code editor
- Basic knowledge of HTML (recommended)

---

# Required Software

| Software | Purpose |
|----------|---------|
| Web Browser | Run JavaScript |
| Visual Studio Code | Write code |
| Node.js | Run JavaScript outside the browser |
| Git | Version control |
| Terminal / Command Prompt | Run commands |

---

# Step 1: Install a Web Browser

Modern browsers already include a JavaScript engine.

Recommended browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

These browsers allow you to:

- Run JavaScript
- Inspect web pages
- Debug code
- View console output

---

# Step 2: Install Visual Studio Code

Visual Studio Code (VS Code) is one of the most popular code editors.

Features include:

- Syntax highlighting
- IntelliSense (Auto-completion)
- Built-in terminal
- Extensions
- Git integration
- Debugging support

After installation, create a folder for your JavaScript projects and open it in VS Code.

Example:

```text
JavaScript/
│
├── 00_introduction/
├── 01_variables/
├── 02_data_types/
└── README.md
```

---

# Step 3: Install Node.js

Node.js allows JavaScript to run outside the browser.

Benefits:

- Execute JavaScript from the terminal
- Build backend applications
- Use npm packages
- Create APIs
- Learn modern JavaScript development

Verify the installation.

```bash
node -v
```

Example output:

```text
v22.x.x
```

Check npm.

```bash
npm -v
```

Example output:

```text
10.x.x
```

---

# Step 4: Create Your First Project

Create a folder.

```text
hello-javascript/
```

Inside it, create the following files.

```text
hello-javascript/
│
├── index.html
└── script.js
```

---

# Step 5: Write HTML

Create **index.html**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>JavaScript Setup</title>
</head>

<body>

    <h1>Learning JavaScript</h1>

    <script src="script.js"></script>

</body>

</html>
```

---

# Step 6: Write JavaScript

Create **script.js**

```javascript
console.log("Hello, JavaScript!");
```

---

# Step 7: Run in the Browser

Open `index.html` in your browser.

Open Developer Tools.

Shortcut:

| Operating System | Shortcut |
|------------------|----------|
| Windows/Linux | **F12** or **Ctrl + Shift + I** |
| macOS | **Cmd + Option + I** |

Open the **Console** tab.

Output:

```text
Hello, JavaScript!
```

---

# Step 8: Run JavaScript Using Node.js

Open a terminal.

Navigate to your project folder.

```bash
cd hello-javascript
```

Run the file.

```bash
node script.js
```

Output:

```text
Hello, JavaScript!
```

---

# Useful VS Code Extensions

Recommended extensions:

- ESLint
- Prettier
- Live Server
- JavaScript (ES6) Code Snippets
- Error Lens
- GitLens
- Path Intellisense
- Material Icon Theme

These extensions improve productivity and code quality.

---

# Project Structure

Example learning repository:

```text
javascript/
│
├── 00_introduction/
├── 01_variables/
├── 02_data_types/
├── 03_operators/
├── 04_input_output/
├── 05_type_conversion/
├── ...
└── README.md
```

---

# Developer Tools

Every browser includes Developer Tools.

Useful tabs:

- Elements
- Console
- Sources
- Network
- Performance
- Application

The **Console** is especially useful for beginners.

Example:

```javascript
console.log("Learning JavaScript");
```

---

# Writing Comments

Single-line comment:

```javascript
// This is a comment
```

Multi-line comment:

```javascript
/*
This is a
multi-line comment.
*/
```

---

# Best Practices

- Organize projects into folders.
- Keep HTML, CSS, and JavaScript in separate files.
- Use meaningful file names.
- Save your work frequently.
- Practice every day.
- Use browser Developer Tools for debugging.
- Learn keyboard shortcuts.
- Use Git for version control.

---

# Common Mistakes

- Forgetting to save files before running.
- Incorrect file names.
- Incorrect script path.

Incorrect:

```html
<script src="scripts.js"></script>
```

Correct:

```html
<script src="script.js"></script>
```

- Forgetting to open the browser console.
- Running browser-only code in Node.js.

Example:

```javascript
document.body.style.background = "red";
```

This works in the browser but not in Node.js because `document` is a browser API.

---

# Development Workflow

```text
Write Code
      │
      ▼
Save Files
      │
      ▼
Run in Browser or Node.js
      │
      ▼
Check Console
      │
      ▼
Fix Errors
      │
      ▼
Repeat
```

---

# Key Points

- A browser is enough to start learning JavaScript.
- Visual Studio Code is a popular editor for JavaScript development.
- Node.js allows JavaScript to run outside the browser.
- Developer Tools help inspect and debug code.
- Keeping HTML, CSS, and JavaScript in separate files improves organization.
- A well-structured project makes learning and maintenance easier.

---

# Summary

Setting up a JavaScript development environment is simple and requires only a browser and a code editor to get started. As you advance, tools like **Node.js**, **VS Code**, **Git**, and browser Developer Tools become essential for building, testing, and debugging applications. A clean workspace and organized project structure will help you develop efficient coding habits and prepare you for professional JavaScript development.