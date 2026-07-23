# JavaScript Best Practices

## Introduction

Writing JavaScript that **works** is important, but writing JavaScript that is **clean, readable, maintainable, and efficient** is even more valuable.

Following best practices helps you:

- Write better code
- Reduce bugs
- Improve performance
- Make teamwork easier
- Maintain projects more efficiently

These practices are widely followed in professional JavaScript development.

---

# 1. Use `const` by Default

Use `const` whenever a variable should not be reassigned.

```javascript
const pi = 3.14159;

console.log(pi);
```

### Why?

- Prevents accidental reassignment
- Makes code easier to understand

---

# 2. Use `let` Instead of `var`

Modern JavaScript prefers `let` because it has block scope.

Good:

```javascript
let age = 22;
```

Avoid:

```javascript
var age = 22;
```

---

# 3. Use Meaningful Variable Names

Choose names that describe the data.

Good:

```javascript
const studentName = "Sachin";
const totalMarks = 450;
```

Bad:

```javascript
const x = "Sachin";
const a = 450;
```

---

# 4. Follow Consistent Naming Conventions

Use **camelCase** for variables and functions.

```javascript
let firstName = "Sachin";

function calculateTotal() {

}
```

Use **PascalCase** for classes.

```javascript
class Student {

}
```

Use **UPPER_CASE** for constants.

```javascript
const MAX_USERS = 100;
```

---

# 5. Keep Functions Small

Each function should perform one task.

Good:

```javascript
function greet(name) {
    console.log(`Hello, ${name}`);
}
```

Avoid large functions that perform multiple unrelated tasks.

---

# 6. Write Reusable Functions

Avoid repeating the same code.

Instead of:

```javascript
console.log("Welcome");

console.log("Welcome");

console.log("Welcome");
```

Write:

```javascript
function welcome() {
    console.log("Welcome");
}

welcome();
welcome();
welcome();
```

---

# 7. Use Strict Equality (`===`)

Always prefer strict equality.

Good:

```javascript
5 === 5
```

Avoid:

```javascript
5 == "5"
```

Strict equality compares both **value** and **data type**.

---

# 8. Avoid Global Variables

Global variables can cause unexpected behavior.

Bad:

```javascript
let username = "Sachin";
```

Better:

```javascript
function login() {

    const username = "Sachin";

}
```

Keep variables inside functions whenever possible.

---

# 9. Write Comments Wisely

Explain **why**, not **what**.

Good:

```javascript
// Calculate total after discount
```

Avoid:

```javascript
// Add two numbers
total = price + tax;
```

The code already explains what it does.

---

# 10. Format Your Code Properly

Use proper indentation.

Good:

```javascript
function greet() {

    console.log("Hello");

}
```

Avoid:

```javascript
function greet(){console.log("Hello");}
```

Readable code is easier to maintain.

---

# 11. Keep Files Organized

Example project:

```text
project/
│
├── index.html
├── style.css
├── script.js
└── images/
```

For larger projects:

```text
src/
│
├── components/
├── utils/
├── services/
├── pages/
└── assets/
```

---

# 12. Use Template Literals

Instead of:

```javascript
const name = "Sachin";

console.log("Hello " + name);
```

Use:

```javascript
const name = "Sachin";

console.log(`Hello ${name}`);
```

Template literals improve readability.

---

# 13. Handle Errors Properly

Use `try...catch`.

```javascript
try {

    console.log(user.name);

} catch (error) {

    console.log("Something went wrong.");

}
```

---

# 14. Avoid Magic Numbers

Instead of:

```javascript
const area = 3.14 * radius * radius;
```

Use:

```javascript
const PI = 3.14159;

const area = PI * radius * radius;
```

Named constants improve readability.

---

# 15. Keep Code DRY

**DRY** means:

> **Don't Repeat Yourself**

Bad:

```javascript
console.log("Welcome");
console.log("Welcome");
console.log("Welcome");
```

Better:

```javascript
function showWelcome() {

    console.log("Welcome");

}

showWelcome();
```

---

# 16. Remove Unused Code

Delete:

- Unused variables
- Unused functions
- Dead code
- Commented-out code

This keeps projects clean.

---

# 17. Use Modern JavaScript Features

Prefer modern syntax.

Good:

```javascript
const square = number => number * number;
```

Instead of:

```javascript
function square(number) {

    return number * number;

}
```

---

# 18. Validate User Input

Never trust user input.

```javascript
const age = Number(input);

if (Number.isNaN(age)) {

    console.log("Invalid age.");

}
```

Always validate data before processing it.

---

# 19. Separate HTML, CSS, and JavaScript

Good structure:

```text
project/
│
├── index.html
├── style.css
└── script.js
```

Avoid writing large amounts of JavaScript directly inside HTML.

---

# 20. Use Developer Tools

Modern browsers provide powerful tools.

Use them for:

- Debugging
- Viewing errors
- Inspecting HTML
- Monitoring network requests
- Testing JavaScript

Useful shortcut:

- **F12**

---

# 21. Use Version Control

Use **Git** to track changes.

Common commands:

```bash
git init

git add .

git commit -m "Initial commit"
```

---

# 22. Keep Learning Modern JavaScript

Focus on ES6+ features.

Learn:

- let
- const
- Arrow Functions
- Modules
- Classes
- Promises
- Async/Await
- Destructuring
- Spread Operator

---

# Summary Table

| Best Practice | Benefit |
|--------------|---------|
| Use `const` | Prevents reassignment |
| Use `let` | Block scope |
| Avoid `var` | Cleaner, safer code |
| Use meaningful names | Better readability |
| Keep functions small | Easier maintenance |
| Use `===` | Safer comparisons |
| Avoid globals | Fewer bugs |
| Use template literals | Cleaner strings |
| Handle errors | More reliable programs |
| Keep code DRY | Less duplication |
| Organize files | Better project structure |
| Use Git | Track code changes |

---

# Common Mistakes

- Using `var` everywhere
- Writing very long functions
- Repeating the same code
- Ignoring error handling
- Poor variable names
- Mixing HTML, CSS, and JavaScript
- Forgetting to validate user input
- Not formatting code consistently

---

# Key Points

- Prefer `const` and `let` over `var`.
- Write small, reusable functions.
- Use meaningful names and consistent formatting.
- Follow the DRY principle.
- Validate user input.
- Use modern JavaScript (ES6+) features.
- Keep your project organized.
- Use Git and browser Developer Tools regularly.

---

# Summary

Following JavaScript best practices helps you write code that is clean, efficient, and easy to maintain. By using modern language features, organizing your projects well, writing reusable functions, handling errors, and keeping your code readable, you develop habits that are expected in professional software development. These practices will become increasingly valuable as your applications grow in size and complexity.