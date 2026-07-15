# JavaScript Variables Interview Questions

## Introduction

Variables are one of the most frequently asked topics in JavaScript interviews. Interviewers often test not only your knowledge of variable declaration but also your understanding of **scope**, **hoisting**, **redeclaration**, **reassignment**, and the differences between **`var`**, **`let`**, and **`const`**.

This document contains beginner to intermediate interview questions with concise answers.

---

# Basic Interview Questions

## 1. What is a variable in JavaScript?

A variable is a named container used to store data in memory. The stored value can be accessed and used throughout a program.

Example:

```javascript
let name = "Sachin";
```

---

## 2. Why do we use variables?

Variables are used to:

- Store data
- Reuse values
- Make code readable
- Reduce duplication
- Simplify maintenance

---

## 3. Which keywords are used to declare variables?

JavaScript provides three keywords:

- `var`
- `let`
- `const`

Example:

```javascript
var age = 20;

let city = "Bhopal";

const PI = 3.14159;
```

---

## 4. What is the difference between declaration and initialization?

**Declaration** creates a variable.

```javascript
let age;
```

**Initialization** assigns a value.

```javascript
age = 22;
```

Declaration and initialization together:

```javascript
let age = 22;
```

---

## 5. What is the difference between `var`, `let`, and `const`?

| Feature | `var` | `let` | `const` |
|----------|--------|--------|----------|
| Scope | Function | Block | Block |
| Redeclaration | ✅ Yes | ❌ No | ❌ No |
| Reassignment | ✅ Yes | ✅ Yes | ❌ No |
| Hoisting | Yes (`undefined`) | Yes (TDZ) | Yes (TDZ) |
| Recommended | ❌ No | ✅ Yes | ✅ Yes |

---

## 6. Which keyword should be used by default?

`const`.

Use `let` only when the variable's value needs to change.

---

# Scope Questions

## 7. What is variable scope?

Scope determines where a variable can be accessed in a program.

---

## 8. What are the types of scope in JavaScript?

- Global Scope
- Function Scope
- Block Scope

---

## 9. Which keyword is function-scoped?

`var`

---

## 10. Which keywords are block-scoped?

`let` and `const`

---

## 11. What is the scope chain?

The scope chain is JavaScript's mechanism for resolving variables by searching from the current scope outward to its parent scopes until the variable is found or the global scope is reached.

---

## 12. What is variable shadowing?

Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope.

Example:

```javascript
let name = "Sachin";

function greet() {

    let name = "Rahul";

    console.log(name);

}

greet();

console.log(name);
```

Output

```text
Rahul
Sachin
```

---

# Hoisting Questions

## 13. What is hoisting?

Hoisting is JavaScript's behavior of processing declarations before code execution begins.

---

## 14. Is `var` hoisted?

Yes.

It is hoisted and initialized with `undefined`.

---

## 15. Are `let` and `const` hoisted?

Yes.

They are hoisted but remain in the **Temporal Dead Zone (TDZ)** until their declaration.

---

## 16. What is the Temporal Dead Zone (TDZ)?

The TDZ is the period between entering a scope and the declaration of a `let` or `const` variable, during which the variable cannot be accessed.

---

# Redeclaration and Reassignment

## 17. What is redeclaration?

Declaring the same variable again in the same scope.

---

## 18. What is reassignment?

Changing the value of an already declared variable.

---

## 19. Can `var` be redeclared?

Yes.

Example:

```javascript
var age = 20;

var age = 30;
```

---

## 20. Can `let` be redeclared?

No.

Example:

```javascript
let age = 20;

let age = 30;
```

Results in a `SyntaxError`.

---

## 21. Can `const` be reassigned?

No.

Example:

```javascript
const country = "India";

country = "USA";
```

Results in a `TypeError`.

---

# Naming Rules

## 22. What are the rules for naming variables?

- Must start with a letter, `_`, or `$`
- Cannot start with a number
- Cannot contain spaces
- Cannot use most special characters
- Cannot use reserved keywords
- Are case-sensitive

---

## 23. What naming convention is recommended?

camelCase

Example:

```javascript
let firstName;

let totalPrice;

let accountBalance;
```

---

# `const` Questions

## 24. Can a `const` object be modified?

Yes.

Its properties can be modified, but the variable cannot be reassigned.

Example:

```javascript
const student = {

    name: "Sachin"

};

student.name = "Rahul";
```

---

## 25. Can a `const` array be modified?

Yes.

Example:

```javascript
const colors = ["Red"];

colors.push("Blue");
```

---

## 26. Why must `const` be initialized?

Because JavaScript requires a constant binding to have a value at the time of declaration.

---

# Practical Questions

## 27. Which keyword would you use for a loop counter?

```javascript
for (let i = 0; i < 10; i++) {

}
```

Use `let`.

---

## 28. Which keyword would you use for API URLs?

```javascript
const API_URL = "https://example.com/api";
```

Use `const`.

---

## 29. Which keyword would you use for a user's score?

```javascript
let score = 0;

score += 10;
```

Use `let`.

---

## 30. Which keyword would you use for the value of π?

```javascript
const PI = 3.14159;
```

Use `const`.

---

# Scenario-Based Questions

## 31. Why is `var` not recommended in modern JavaScript?

Because:

- It is function-scoped.
- It allows redeclaration.
- Its hoisting behavior can be confusing.
- `let` and `const` provide safer and more predictable behavior.

---

## 32. Why should global variables be avoided?

Global variables can:

- Be modified from anywhere.
- Cause naming conflicts.
- Make debugging harder.
- Reduce code maintainability.

---

## 33. Why are meaningful variable names important?

Meaningful names:

- Improve readability.
- Make debugging easier.
- Help other developers understand your code.
- Reduce confusion.

---

## 34. What happens if you access a `let` variable before declaration?

A `ReferenceError` is thrown because the variable is in the Temporal Dead Zone.

---

## 35. What happens if you declare the same `let` variable twice?

A `SyntaxError` occurs.

---

# Code Output Questions

## Question 1

```javascript
console.log(age);

var age = 22;
```

Output

```text
undefined
```

---

## Question 2

```javascript
console.log(age);

let age = 22;
```

Output

```text
ReferenceError
```

---

## Question 3

```javascript
const city = "Bhopal";

city = "Delhi";
```

Output

```text
TypeError
```

---

## Question 4

```javascript
if (true) {

    let x = 10;

}

console.log(x);
```

Output

```text
ReferenceError
```

---

## Question 5

```javascript
if (true) {

    var x = 10;

}

console.log(x);
```

Output

```text
10
```

---

# Rapid-Fire Questions

### What keyword should be used by default?

`const`

---

### Which keyword allows reassignment?

`let` and `var`

---

### Which keyword allows redeclaration?

`var`

---

### Which keywords are block-scoped?

`let` and `const`

---

### Which keyword is function-scoped?

`var`

---

### Which keyword requires initialization?

`const`

---

### What is TDZ?

Temporal Dead Zone.

---

### Can `const` objects be modified?

Yes.

Their properties can change.

---

### Can `const` be redeclared?

No.

---

### Can `let` be redeclared?

No.

---

# Tips for Interviews

- Explain concepts with simple examples.
- Clearly distinguish between **redeclaration** and **reassignment**.
- Be able to compare `var`, `let`, and `const`.
- Understand block scope, function scope, and global scope.
- Explain hoisting and the Temporal Dead Zone accurately.
- Mention that modern JavaScript prefers `const` by default.
- Use descriptive variable names in your code examples.

---

# Key Takeaways

- Variables store data in memory.
- JavaScript uses `var`, `let`, and `const` for variable declaration.
- `const` is the preferred default choice.
- `let` is used when reassignment is needed.
- `var` is mainly encountered in legacy code.
- Scope determines where variables are accessible.
- Hoisting affects how declarations are processed.
- The Temporal Dead Zone applies to `let` and `const`.
- Meaningful names and proper scope improve code quality.

---

# Summary

Variables are one of the most fundamental topics in JavaScript interviews. A strong understanding of declarations, initialization, scope, hoisting, redeclaration, reassignment, and naming conventions is essential. Mastering these concepts will help you confidently answer interview questions, write modern JavaScript code, and build a solid foundation for learning more advanced topics.