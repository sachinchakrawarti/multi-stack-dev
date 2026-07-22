# Function Best Practices

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [Why Best Practices Matter](#why-best-practices-matter)
- [Function Naming](#function-naming)
- [Keep Functions Small](#keep-functions-small)
- [Single Responsibility Principle](#single-responsibility-principle)
- [Limit Parameters](#limit-parameters)
- [Return Values Instead of Side Effects](#return-values-instead-of-side-effects)
- [Use Default Parameters](#use-default-parameters)
- [Prefer const for Functions](#prefer-const-for-functions)
- [Avoid Global Variables](#avoid-global-variables)
- [Write Pure Functions When Possible](#write-pure-functions-when-possible)
- [Document Complex Functions](#document-complex-functions)
- [Examples](#examples)
- [Real-World Use Cases](#real-world-use-cases)
- [Advantages](#advantages)
- [Common Mistakes](#common-mistakes)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercise](#practice-exercise)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

## Learning Objectives

After completing this lesson, you will be able to:

- Write clean and maintainable functions.
- Follow industry-standard coding practices.
- Avoid common function-related mistakes.
- Improve code readability and reusability.
- Build scalable JavaScript applications.

---

# Introduction

Writing a function that works is only the beginning.

Professional developers focus on writing functions that are:

- Easy to understand.
- Easy to test.
- Easy to reuse.
- Easy to maintain.

Following best practices helps reduce bugs, improve collaboration, and make your code easier to extend in the future.

---

# Why Best Practices Matter

Good coding practices provide several benefits:

- Cleaner code.
- Better readability.
- Easier debugging.
- Improved maintainability.
- Faster onboarding for team members.
- Higher code quality.

---

# Function Naming

Choose meaningful names that describe what the function does.

✅ Good

```javascript
function calculateTotal(price, tax) {
    return price + tax;
}
```

❌ Bad

```javascript
function calc(p, t) {
    return p + t;
}
```

A function name should clearly express its purpose.

---

# Keep Functions Small

A function should perform **one task only**.

❌ Large Function

```javascript
function processOrder() {
    validateOrder();
    calculatePrice();
    saveOrder();
    sendEmail();
}
```

✅ Better

```javascript
validateOrder();
calculatePrice();
saveOrder();
sendEmail();
```

Each function has a single responsibility.

---

# Single Responsibility Principle

A function should have **only one reason to change**.

Instead of:

```javascript
function createUser() {
    saveUser();
    sendWelcomeEmail();
    logActivity();
}
```

Split responsibilities:

```javascript
saveUser();
sendWelcomeEmail();
logActivity();
```

---

# Limit Parameters

Too many parameters make functions difficult to understand.

❌

```javascript
function createUser(name, age, city, phone, email, salary) {}
```

✅

```javascript
function createUser(user) {}
```

Using objects improves readability and flexibility.

---

# Return Values Instead of Side Effects

Prefer returning values rather than modifying external variables.

❌

```javascript
let total = 0;

function add(price) {
    total += price;
}
```

✅

```javascript
function add(total, price) {
    return total + price;
}
```

---

# Use Default Parameters

Provide default values when appropriate.

```javascript
function greet(name = "Guest") {
    return `Hello ${name}`;
}

console.log(greet());
```

Output

```
Hello Guest
```

---

# Prefer `const` for Functions

Use `const` for Function Expressions and Arrow Functions to prevent accidental reassignment.

```javascript
const calculateArea = (width, height) => {
    return width * height;
};
```

---

# Avoid Global Variables

Global variables make code harder to maintain.

❌

```javascript
let count = 0;

function increment() {
    count++;
}
```

✅

```javascript
function increment(count) {
    return count + 1;
}
```

---

# Write Pure Functions When Possible

Pure Functions are easier to:

- Test.
- Reuse.
- Debug.
- Optimize.

Example

```javascript
function square(number) {
    return number * number;
}
```

---

# Document Complex Functions

Use comments only when necessary.

```javascript
/**
 * Calculates the final price after applying tax.
 */
function calculateTotal(price, tax) {
    return price + tax;
}
```

Well-written code often requires fewer comments.

---

# Examples

## Example 1 — Good Naming

```javascript
function calculateDiscount(price, discount) {
    return price - discount;
}
```

---

## Example 2 — Pure Function

```javascript
function multiply(a, b) {
    return a * b;
}
```

---

## Example 3 — Default Parameter

```javascript
function welcome(name = "Guest") {
    return `Welcome ${name}`;
}
```

---

## Example 4 — Object Parameter

```javascript
function printUser(user) {
    console.log(user.name);
}
```

---

# Real-World Use Cases

These best practices are followed in:

- React applications.
- Node.js backends.
- Express APIs.
- Enterprise software.
- Open-source libraries.
- Microservices.
- Financial systems.
- E-commerce platforms.

---

# Advantages

Following best practices leads to:

- Cleaner code.
- Better scalability.
- Easier debugging.
- Better collaboration.
- Improved code reuse.
- Easier testing.
- Professional-quality software.

---

# Common Mistakes

## Using Vague Function Names

❌

```javascript
function doStuff() {}
```

✅

```javascript
function calculateSalary() {}
```

---

## Writing Huge Functions

❌

```javascript
function everything() {
    // hundreds of lines
}
```

✅

Split the logic into multiple smaller functions.

---

## Too Many Parameters

❌

```javascript
createUser(name, age, phone, city, country, email);
```

✅

```javascript
createUser(user);
```

---

## Modifying Global Variables

❌

```javascript
score++;
```

inside a function.

Instead, return the updated value.

---

# Summary

In this lesson, you learned:

- Why function best practices matter.
- How to write clean functions.
- The importance of meaningful names.
- Keeping functions focused.
- Avoiding unnecessary side effects.
- Writing reusable and maintainable code.
- Common mistakes to avoid.

Applying these practices consistently will help you write professional JavaScript code that is easier to maintain and scale.

---

# Interview Questions

1. Why should functions have a single responsibility?
2. Why are meaningful function names important?
3. Why should large functions be avoided?
4. What are the benefits of Pure Functions?
5. Why should global variables be avoided?
6. When should default parameters be used?
7. Why are object parameters preferred over many individual parameters?

---

# Practice Exercise

1. Refactor a large function into smaller functions.
2. Rename five poorly named functions.
3. Convert an Impure Function into a Pure Function.
4. Replace multiple parameters with an object.
5. Add default parameters to an existing function.

---

# Key Takeaway

> **Good functions are small, focused, descriptive, reusable, and easy to test. Following function best practices results in cleaner, more maintainable, and professional JavaScript code that scales well as applications grow.**

---

# Next Lesson

<h2>
➡️ <a href="../0035_common_mistakes/common_mistakes.md" style="color:#1E90FF; text-decoration:none;">
<strong>Common Mistakes</strong>
</a>
</h2>