# Common JavaScript Mistakes

## Introduction

Every JavaScript developer, from beginners to professionals, makes mistakes. Understanding the most common mistakes helps you write cleaner, more reliable, and bug-free code.

Many JavaScript errors occur because of:

- Incorrect syntax
- Misunderstanding language behavior
- Typographical errors
- Incorrect variable usage
- Improper handling of data types
- Ignoring modern JavaScript best practices

Learning these mistakes early will save you hours of debugging.

---

# 1. Forgetting to Declare Variables

Incorrect:

```javascript
name = "Sachin";

console.log(name);
```

This creates a global variable (outside strict mode).

Correct:

```javascript
let name = "Sachin";

console.log(name);
```

---

# 2. Using `var` Instead of `let` or `const`

Avoid:

```javascript
var age = 22;
```

Prefer:

```javascript
let age = 22;

const country = "India";
```

`let` and `const` provide block scope and help avoid unexpected behavior.

---

# 3. Using `==` Instead of `===`

Incorrect:

```javascript
console.log(5 == "5");
```

Output:

```text
true
```

Correct:

```javascript
console.log(5 === "5");
```

Output:

```text
false
```

Always prefer strict equality (`===`).

---

# 4. Forgetting Quotes Around Strings

Incorrect:

```javascript
console.log(Hello);
```

Output:

```text
ReferenceError
```

Correct:

```javascript
console.log("Hello");
```

---

# 5. Misspelling Keywords

Incorrect:

```javascript
Console.log("Hello");
```

Correct:

```javascript
console.log("Hello");
```

JavaScript is **case-sensitive**.

---

# 6. Missing Brackets or Braces

Incorrect:

```javascript
if (true)

    console.log("Hello");
```

Although valid for one statement, this style is error-prone.

Better:

```javascript
if (true) {

    console.log("Hello");

}
```

Always use braces for clarity.

---

# 7. Forgetting to Link the JavaScript File

Incorrect:

```html
<script src="scripts.js"></script>
```

Actual file:

```text
script.js
```

Correct:

```html
<script src="script.js"></script>
```

---

# 8. Using Browser Code in Node.js

Incorrect:

```javascript
document.body.style.background = "red";
```

This works only in a browser.

Node.js does not have a `document` object.

---

# 9. Accessing Variables Before Declaration

Incorrect:

```javascript
console.log(age);

let age = 22;
```

Output:

```text
ReferenceError
```

Correct:

```javascript
let age = 22;

console.log(age);
```

---

# 10. Forgetting `return`

Incorrect:

```javascript
function add(a, b) {

    a + b;

}

console.log(add(5, 3));
```

Output:

```text
undefined
```

Correct:

```javascript
function add(a, b) {

    return a + b;

}
```

---

# 11. Modifying a `const`

Incorrect:

```javascript
const pi = 3.14;

pi = 3.14159;
```

Output:

```text
TypeError
```

Correct:

```javascript
let pi = 3.14;

pi = 3.14159;
```

Or keep `const` if the value should not change.

---

# 12. Confusing Assignment (`=`) with Comparison (`===`)

Incorrect:

```javascript
if (age = 18) {

    console.log("Adult");

}
```

This assigns the value `18` to `age`.

Correct:

```javascript
if (age === 18) {

    console.log("Adult");

}
```

---

# 13. Ignoring Data Types

Incorrect:

```javascript
console.log("5" + 2);
```

Output:

```text
52
```

Correct:

```javascript
console.log(Number("5") + 2);
```

Output:

```text
7
```

Understand how JavaScript performs type conversion.

---

# 14. Forgetting to Handle Errors

Incorrect:

```javascript
console.log(user.name);
```

If `user` is undefined, the program crashes.

Better:

```javascript
try {

    console.log(user.name);

} catch (error) {

    console.log("User not found.");

}
```

---

# 15. Writing Long Functions

Avoid:

```javascript
function processEverything() {

    // Hundreds of lines

}
```

Better:

```javascript
function validateUser() {

}

function calculateTotal() {

}

function saveData() {

}
```

Small functions are easier to test and maintain.

---

# 16. Repeating Code

Incorrect:

```javascript
console.log("Welcome");

console.log("Welcome");

console.log("Welcome");
```

Correct:

```javascript
function welcome() {

    console.log("Welcome");

}

welcome();
welcome();
welcome();
```

Follow the **DRY (Don't Repeat Yourself)** principle.

---

# 17. Ignoring Console Errors

Many beginners ignore browser console messages.

Always check:

- Syntax errors
- Reference errors
- Type errors
- Warnings

The browser console is one of the best debugging tools.

---

# 18. Using `document.write()`

Avoid:

```javascript
document.write("Hello");
```

Modern applications use DOM manipulation instead.

Example:

```javascript
document.getElementById("title").textContent = "Hello";
```

---

# 19. Poor Variable Names

Bad:

```javascript
let x = 25;

let y = 100;
```

Good:

```javascript
let studentAge = 25;

let totalMarks = 100;
```

Meaningful names improve readability.

---

# 20. Not Formatting Code

Bad:

```javascript
function greet(){console.log("Hello");}
```

Good:

```javascript
function greet() {

    console.log("Hello");

}
```

Use proper indentation and spacing.

---

# Example of Good Code

```javascript
const studentName = "Sachin";

function greet(name) {

    console.log(`Welcome, ${name}!`);

}

greet(studentName);
```

This code is:

- Readable
- Reusable
- Properly formatted
- Uses modern JavaScript
- Uses meaningful names

---

# Tips to Avoid Mistakes

- Use `const` whenever possible.
- Use `let` for variables that change.
- Prefer `===` over `==`.
- Use meaningful names.
- Write small functions.
- Check the browser console regularly.
- Format your code consistently.
- Test your code frequently.
- Validate user input.
- Learn modern JavaScript (ES6+).

---

# Summary Table

| Mistake | Correct Practice |
|----------|------------------|
| Using `var` | Use `let` or `const` |
| Using `==` | Use `===` |
| Missing quotes | Wrap strings in quotes |
| Misspelling keywords | Use correct case |
| Forgetting `return` | Return values from functions |
| Modifying `const` | Use `let` if reassignment is needed |
| Long functions | Create small reusable functions |
| Repeating code | Follow the DRY principle |
| Ignoring errors | Use the browser console and `try...catch` |
| Poor formatting | Indent and organize code |

---

# Key Points

- Most JavaScript bugs come from small mistakes.
- Use `let` and `const` instead of `var`.
- Always prefer strict equality (`===`).
- Use meaningful variable and function names.
- Keep functions short and focused.
- Read error messages in the console.
- Write clean, well-formatted code.
- Practice regularly to reduce common errors.

---

# Summary

Making mistakes is a natural part of learning JavaScript, but understanding the most common pitfalls helps you become a better programmer. By following modern JavaScript practices, writing readable code, validating input, handling errors properly, and using browser debugging tools, you can avoid many common problems and build more reliable applications.