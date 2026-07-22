# Common Function Mistakes

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [Why Understanding Common Mistakes is Important](#why-understanding-common-mistakes-is-important)
- [Common Function Mistakes](#common-function-mistakes)
- [Examples](#examples)
- [Real-World Use Cases](#real-world-use-cases)
- [Advantages of Avoiding These Mistakes](#advantages-of-avoiding-these-mistakes)
- [Best Practices](#best-practices)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercise](#practice-exercise)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

## Learning Objectives

After completing this lesson, you will be able to:

- Identify common mistakes made while writing JavaScript functions.
- Understand why these mistakes occur.
- Learn how to fix them.
- Write cleaner, safer, and more maintainable functions.
- Improve your debugging skills.

---

# Introduction

Even experienced developers make mistakes when writing functions.

Most bugs in JavaScript applications are caused by small mistakes such as:

- Forgetting to return a value.
- Calling functions incorrectly.
- Misusing `this`.
- Modifying global variables.
- Passing incorrect arguments.

Learning these mistakes early will help you write more reliable and professional code.

---

# Why Understanding Common Mistakes is Important

Avoiding common mistakes helps you:

- Reduce bugs.
- Improve code readability.
- Simplify debugging.
- Write predictable functions.
- Build maintainable applications.

---

# Common Function Mistakes

## 1. Forgetting to Return a Value

❌ Incorrect

```javascript
function add(a, b) {

    a + b;

}

console.log(add(10, 20));
```

Output

```
undefined
```

---

✅ Correct

```javascript
function add(a, b) {

    return a + b;

}

console.log(add(10, 20));
```

Output

```
30
```

---

## 2. Calling a Function Without Parentheses

❌ Incorrect

```javascript
function greet() {

    console.log("Hello");

}

greet;
```

Nothing happens because the function is only referenced.

---

✅ Correct

```javascript
greet();
```

---

## 3. Calling a Function Before a Function Expression

❌ Incorrect

```javascript
sayHello();

const sayHello = function () {

    console.log("Hello");

};
```

Output

```
ReferenceError
```

---

✅ Correct

```javascript
const sayHello = function () {

    console.log("Hello");

};

sayHello();
```

---

## 4. Confusing Parameters and Arguments

❌ Incorrect

```javascript
function greet(name) {

    console.log(name);

}

greet();
```

Output

```
undefined
```

---

✅ Correct

```javascript
greet("Sachin");
```

---

## 5. Modifying Global Variables

❌ Incorrect

```javascript
let total = 0;

function add(price) {

    total += price;

}
```

The function changes external state.

---

✅ Better

```javascript
function add(total, price) {

    return total + price;

}
```

---

## 6. Mutating Objects Directly

❌ Incorrect

```javascript
function updateUser(user) {

    user.age++;

}
```

This changes the original object.

---

✅ Better

```javascript
function updateUser(user) {

    return {

        ...user,

        age: user.age + 1

    };

}
```

---

## 7. Writing Large Functions

❌

```javascript
function processOrder() {

    validateOrder();

    calculatePrice();

    saveOrder();

    sendEmail();

    printInvoice();

}
```

Large functions are difficult to maintain.

---

✅ Better

Break the logic into multiple smaller functions.

---

## 8. Using Too Many Parameters

❌

```javascript
createUser(name, age, city, country, phone, email);
```

---

✅ Better

```javascript
createUser(user);
```

---

## 9. Misusing the `this` Keyword

❌ Incorrect

```javascript
const person = {

    name: "Sachin",

    greet: () => {

        console.log(this.name);

    }

};

person.greet();
```

Output

```
undefined
```

---

✅ Correct

```javascript
const person = {

    name: "Sachin",

    greet() {

        console.log(this.name);

    }

};

person.greet();
```

Output

```
Sachin
```

---

## 10. Ignoring Default Parameters

❌

```javascript
function greet(name) {

    return `Hello ${name}`;

}

console.log(greet());
```

Output

```
Hello undefined
```

---

✅ Better

```javascript
function greet(name = "Guest") {

    return `Hello ${name}`;

}
```

Output

```
Hello Guest
```

---

# Examples

## Example 1 — Missing Return

```javascript
function multiply(a, b) {

    return a * b;

}

console.log(multiply(5, 4));
```

---

## Example 2 — Pure Function

```javascript
function increment(value) {

    return value + 1;

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
function printStudent(student) {

    console.log(student.name);

}
```

---

# Real-World Use Cases

Understanding these mistakes is useful in:

- React development.
- Node.js applications.
- Express APIs.
- Backend services.
- Frontend applications.
- Enterprise software.
- Open-source projects.
- Technical interviews.

---

# Advantages of Avoiding These Mistakes

You will:

- Write cleaner code.
- Reduce runtime errors.
- Improve readability.
- Make debugging easier.
- Increase code reusability.
- Improve software quality.

---

# Best Practices

- Always return values when needed.
- Keep functions small.
- Use meaningful names.
- Avoid global variables.
- Prefer Pure Functions.
- Use default parameters.
- Avoid mutating objects.
- Test functions independently.
- Keep business logic separate from side effects.

---

# Summary

In this lesson, you learned about the most common mistakes developers make while working with JavaScript functions.

These included:

- Missing `return` statements.
- Calling functions incorrectly.
- Confusing parameters and arguments.
- Modifying global variables.
- Mutating objects.
- Misusing `this`.
- Ignoring default parameters.
- Creating overly large functions.

Recognizing and avoiding these mistakes will help you write cleaner, more maintainable, and professional JavaScript code.

---

# Interview Questions

1. What happens if a function does not return a value?
2. Why should global variables be avoided?
3. Why are Pure Functions preferred?
4. What is the difference between parameters and arguments?
5. Why should functions be small?
6. Why can Arrow Functions be problematic when using `this`?
7. What are default parameters used for?

---

# Practice Exercise

1. Fix a function that forgets to return a value.
2. Refactor a large function into smaller functions.
3. Replace global variables with function parameters.
4. Convert an Impure Function into a Pure Function.
5. Rewrite an object mutation using object spread syntax.
6. Add default parameters to an existing function.
7. Identify five function mistakes in your previous JavaScript projects and correct them.

---

# Key Takeaway

> **Most JavaScript function bugs come from small mistakes such as missing return statements, modifying global state, misusing `this`, or writing overly complex functions. Following best practices and writing small, predictable, and reusable functions leads to cleaner, safer, and more maintainable code.**

---

# Next Lesson

<h2>
➡️ <a href="../0036_interview_questions/interview_questions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Interview Questions</strong>
</a>
</h2>