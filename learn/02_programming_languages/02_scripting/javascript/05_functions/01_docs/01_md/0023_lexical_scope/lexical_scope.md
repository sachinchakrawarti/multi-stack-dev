# Lexical Scope

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is Lexical Scope?](#what-is-lexical-scope)
- [Why Do We Need Lexical Scope?](#why-do-we-need-lexical-scope)
- [How Lexical Scope Works](#how-lexical-scope-works)
- [Syntax](#syntax)
- [Scope Chain](#scope-chain)
- [Nested Functions](#nested-functions)
- [Examples](#examples)
- [Lexical Scope vs Dynamic Scope](#lexical-scope-vs-dynamic-scope)
- [Real-World Use Cases](#real-world-use-cases)
- [Advantages](#advantages)
- [Limitations](#limitations)
- [Common Mistakes](#common-mistakes)
- [Best Practices](#best-practices)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercise](#practice-exercise)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what Lexical Scope is.
- Learn how JavaScript determines variable accessibility.
- Understand the Scope Chain.
- Work with nested functions.
- Build a strong foundation for Closures.

---

# Introduction

Imagine a family living in a house.

- A child can access things owned by the family.
- A parent cannot directly access the child's private school locker.
- A neighbor cannot access anything inside the house.

JavaScript functions behave similarly.

A function can access variables from the scope in which it was **defined**, not where it is **called**.

This behavior is called **Lexical Scope** (also known as **Static Scope**).

Lexical Scope is one of the most important concepts in JavaScript because **Closures** are built on top of it.

---

# What is Lexical Scope?

**Lexical Scope** means that a function can access:

- Its own variables.
- Variables from its parent scope.
- Variables from the global scope.

The word **lexical** means that scope is determined by **where the code is written**, not where it is executed.

Example

```javascript
let language = "JavaScript";

function outer() {

    function inner() {

        console.log(language);

    }

    inner();

}

outer();
```

Output

```
JavaScript
```

The `inner()` function can access `language` because it was defined inside the scope where `language` is visible.

---

# Why Do We Need Lexical Scope?

Lexical Scope helps JavaScript:

- Organize variables.
- Prevent accidental access.
- Create predictable programs.
- Support nested functions.
- Enable Closures.
- Improve code readability.

Without Lexical Scope, JavaScript programs would become unpredictable and difficult to maintain.

---

# How Lexical Scope Works

Execution Flow

```text
Global Scope
      │
      ▼
Outer Function
      │
      ▼
Inner Function
      │
      ▼
Search Variable
      │
      ▼
Current Scope?
      │
   Yes ▼ No
      │
      ▼
Parent Scope
      │
      ▼
Global Scope
      │
      ▼
Found or ReferenceError
```

JavaScript always searches **from the inside outward**.

---

# Syntax

```javascript
let globalVar = "Global";

function outer() {

    let outerVar = "Outer";

    function inner() {

        let innerVar = "Inner";

    }

}
```

Each function creates its own lexical environment.

---

# Scope Chain

When JavaScript cannot find a variable in the current scope, it searches the parent scope.

This process continues until:

- The variable is found.
- The global scope is reached.
- A `ReferenceError` occurs.

Example

```javascript
let a = 10;

function first() {

    let b = 20;

    function second() {

        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);

    }

    second();

}

first();
```

Output

```
10
20
30
```

This searching process is called the **Scope Chain**.

---

# Nested Functions

Nested functions naturally demonstrate Lexical Scope.

Example

```javascript
function parent() {

    let parentValue = "Parent";

    function child() {

        console.log(parentValue);

    }

    child();

}

parent();
```

Output

```
Parent
```

The child function accesses variables from its parent.

---

# Examples

## Example 1 — Accessing Global Variables

```javascript
let country = "India";

function showCountry() {

    console.log(country);

}

showCountry();
```

---

## Example 2 — Nested Functions

```javascript
function outer() {

    let message = "Hello";

    function inner() {

        console.log(message);

    }

    inner();

}

outer();
```

---

## Example 3 — Multiple Levels

```javascript
let x = 1;

function first() {

    let y = 2;

    function second() {

        let z = 3;

        console.log(x);
        console.log(y);
        console.log(z);

    }

    second();

}

first();
```

Output

```
1
2
3
```

---

## Example 4 — Variable Shadowing

```javascript
let name = "Global";

function display() {

    let name = "Local";

    console.log(name);

}

display();

console.log(name);
```

Output

```
Local
Global
```

The local variable hides the global variable inside the function.

---

# Lexical Scope vs Dynamic Scope

| Lexical Scope | Dynamic Scope |
|---------------|---------------|
| Based on where code is written | Based on where function is called |
| Used by JavaScript | Not used by JavaScript |
| Predictable | Less predictable |
| Supports Closures | Does not support JavaScript Closures |

JavaScript always uses **Lexical Scope**.

---

# Real-World Use Cases

Lexical Scope is used in:

- Closures.
- Event handlers.
- Callback functions.
- React Hooks.
- Module patterns.
- Factory functions.
- Data encapsulation.
- Private variables.

Example

```javascript
function createCounter() {

    let count = 0;

    return function () {

        count++;

        console.log(count);

    };

}
```

This example works because of Lexical Scope.

---

# Advantages

Lexical Scope provides several benefits.

- Predictable behavior.
- Better organization.
- Cleaner code.
- Supports Closures.
- Improves modular programming.
- Reduces accidental variable access.

---

# Limitations

Lexical Scope also has some considerations.

- Beginners may find nested scopes confusing.
- Variable shadowing may reduce readability.
- Deep nesting makes debugging more difficult.

---

# Common Mistakes

## Assuming Functions Access Caller Variables

❌ Incorrect assumption

```javascript
function first() {

    let value = 10;

}

function second() {

    console.log(value);

}
```

`second()` cannot access `value` because it was not defined inside `first()`.

---

## Excessive Nesting

```javascript
function a() {

    function b() {

        function c() {

            function d() {

            }

        }

    }

}
```

Too much nesting reduces readability.

---

## Variable Shadowing

```javascript
let age = 20;

function test() {

    let age = 30;

    console.log(age);

}
```

Be careful when using the same variable names.

---

# Best Practices

- Keep functions small.
- Avoid unnecessary nesting.
- Use meaningful variable names.
- Minimize variable shadowing.
- Prefer `const` and `let` over `var`.
- Understand the Scope Chain before using Closures.

---

# Summary

In this lesson, you learned:

- What Lexical Scope is.
- How JavaScript searches variables.
- Scope Chain.
- Nested functions.
- Variable shadowing.
- Practical applications.
- Advantages, limitations, and best practices.

Lexical Scope is one of the core concepts of JavaScript and serves as the foundation for Closures, Modules, and many advanced programming patterns.

---

# Interview Questions

1. What is Lexical Scope?
2. What is the Scope Chain?
3. How does JavaScript search for variables?
4. What is the difference between Lexical Scope and Dynamic Scope?
5. What is variable shadowing?
6. Why is Lexical Scope important for Closures?
7. Can an outer function access variables inside an inner function?

---

# Practice Exercise

1. Create a nested function and access a parent variable.
2. Create three nested functions and observe the Scope Chain.
3. Demonstrate variable shadowing.
4. Try accessing a child function's variable from the parent.
5. Explain why JavaScript uses Lexical Scope instead of Dynamic Scope.

---

# Key Takeaway

> **Lexical Scope determines variable accessibility based on where functions are defined in the source code, not where they are called. It enables nested functions, predictable variable lookup through the Scope Chain, and forms the foundation of Closures in JavaScript.**

---

# Next Lesson

<h2>
➡️ <a href="../0024_closures/closures.md" style="color:#1E90FF; text-decoration:none;">
<strong>Closures</strong>
</a>
</h2>