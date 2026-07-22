# Closures

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Closures?](#what-are-closures)
- [Why Do We Need Closures?](#why-do-we-need-closures)
- [How Closures Work](#how-closures-work)
- [Syntax](#syntax)
- [Lexical Scope and Closures](#lexical-scope-and-closures)
- [Examples](#examples)
- [Memory Behavior](#memory-behavior)
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

- Understand what Closures are.
- Learn how Closures use Lexical Scope.
- Preserve variables after a function finishes execution.
- Build private variables and data encapsulation.
- Apply Closures in real-world JavaScript applications.

---

# Introduction

Imagine a backpack.

You finish school and go home, but everything you packed in your backpack is still there.

Similarly, in JavaScript, a function can "carry" the variables from the environment where it was created—even after the outer function has finished executing.

This special behavior is called a **Closure**.

Closures are one of the most powerful and frequently asked JavaScript interview topics because they enable private data, callbacks, event handlers, and many advanced programming patterns.

---

# What are Closures?

A **Closure** is created when an inner function remembers and continues to access variables from its outer (lexical) scope, even after the outer function has returned.

In simple words:

> A Closure is a function together with the variables from the scope in which it was created.

Example

```javascript
function outer() {

    let message = "Hello";

    function inner() {

        console.log(message);

    }

    return inner;

}

const greet = outer();

greet();
```

Output

```
Hello
```

Although `outer()` has finished executing, `inner()` still remembers the variable `message`.

---

# Why Do We Need Closures?

Closures are useful because they allow us to:

- Preserve data.
- Create private variables.
- Hide implementation details.
- Build reusable functions.
- Create function factories.
- Maintain state without global variables.

Closures make JavaScript applications more secure and modular.

---

# How Closures Work

Execution Flow

```text
Outer Function Starts
        │
        ▼
Variable Created
        │
        ▼
Inner Function Created
        │
        ▼
Inner Function Returned
        │
        ▼
Outer Function Ends
        │
        ▼
Closure Keeps Variables Alive
        │
        ▼
Inner Function Executes Later
```

The inner function keeps a reference to the outer variables instead of copying them.

---

# Syntax

```javascript
function outer() {

    let value = 100;

    return function () {

        console.log(value);

    };

}

const demo = outer();

demo();
```

---

# Lexical Scope and Closures

Closures work because of **Lexical Scope**.

When a function is created, JavaScript stores a reference to the variables that are visible in its lexical environment.

Example

```javascript
function parent() {

    let name = "Sachin";

    function child() {

        console.log(name);

    }

    return child;

}

const display = parent();

display();
```

Output

```
Sachin
```

Without Lexical Scope, Closures would not exist.

---

# Examples

## Example 1 — Basic Closure

```javascript
function greeting() {

    let message = "Welcome";

    return function () {

        console.log(message);

    };

}

const sayHello = greeting();

sayHello();
```

---

## Example 2 — Counter

```javascript
function createCounter() {

    let count = 0;

    return function () {

        count++;

        console.log(count);

    };

}

const counter = createCounter();

counter();
counter();
counter();
```

Output

```
1
2
3
```

The variable `count` remains alive because of the Closure.

---

## Example 3 — Private Variable

```javascript
function createBankAccount() {

    let balance = 1000;

    return {

        deposit(amount) {

            balance += amount;

        },

        getBalance() {

            return balance;

        }

    };

}

const account = createBankAccount();

account.deposit(500);

console.log(account.getBalance());
```

Output

```
1500
```

The variable `balance` cannot be accessed directly from outside the function.

---

## Example 4 — Function Factory

```javascript
function multiply(multiplier) {

    return function (number) {

        return number * multiplier;

    };

}

const double = multiply(2);

console.log(double(10));
```

Output

```
20
```

Closures allow one function to generate customized functions.

---

# Memory Behavior

When an outer function finishes execution, its local variables are usually removed from memory.

However, if an inner function still references those variables, JavaScript keeps them in memory.

Example

```text
Outer Function
      │
      ▼
Variable Created
      │
      ▼
Inner Function References Variable
      │
      ▼
Outer Function Ends
      │
      ▼
Variable Remains Alive
```

Once no Closure references the variables anymore, JavaScript's Garbage Collector can free the memory.

---

# Real-World Use Cases

Closures are widely used in:

- Private variables.
- Event listeners.
- Callback functions.
- React Hooks.
- Timers (`setTimeout`, `setInterval`).
- Module Pattern.
- Function factories.
- Memoization.
- State management.

Example

```javascript
button.addEventListener("click", function () {

    console.log("Button clicked");

});
```

The callback forms a Closure over its surrounding variables.

---

# Advantages

Closures provide several benefits.

- Data privacy.
- Encapsulation.
- Persistent state.
- Reusable functions.
- Cleaner architecture.
- Reduced global variables.

---

# Limitations

Closures also have some drawbacks.

- Can increase memory usage.
- Improper use may lead to memory leaks.
- Can make debugging more difficult.
- Deeply nested Closures reduce readability.

---

# Common Mistakes

## Assuming Variables are Copied

Closures keep **references**, not copies.

```javascript
function test() {

    let value = 10;

    return function () {

        console.log(value);

    };

}
```

---

## Creating Unnecessary Closures

Avoid wrapping every function inside another function unless needed.

---

## Memory Leaks

Large objects referenced by Closures remain in memory until no Closure references them.

Always remove unused event listeners and callbacks.

---

## Using `var` in Loops

❌ Incorrect

```javascript
for (var i = 1; i <= 3; i++) {

    setTimeout(function () {

        console.log(i);

    }, 1000);

}
```

Output

```
4
4
4
```

✅ Correct

```javascript
for (let i = 1; i <= 3; i++) {

    setTimeout(function () {

        console.log(i);

    }, 1000);

}
```

Output

```
1
2
3
```

---

# Best Practices

- Use Closures for data privacy.
- Avoid unnecessary nesting.
- Release unused references.
- Prefer `let` and `const`.
- Keep Closure logic simple.
- Use meaningful function names.

---

# Summary

In this lesson, you learned:

- What Closures are.
- How Closures work.
- Relationship with Lexical Scope.
- Persistent variables.
- Private variables.
- Function factories.
- Memory behavior.
- Advantages, limitations, and best practices.

Closures are one of JavaScript's most powerful features and are heavily used in modern frameworks like React, Vue, Angular, and Node.js.

---

# Interview Questions

1. What is a Closure?
2. How are Closures related to Lexical Scope?
3. Why do variables remain available after the outer function returns?
4. What are private variables?
5. What are some real-world uses of Closures?
6. Can Closures cause memory leaks?
7. What is the difference between Scope and Closure?

---

# Practice Exercise

1. Create a function that returns another function.
2. Build a counter using Closures.
3. Create a private bank account object using Closures.
4. Create a function factory that generates multiplication functions.
5. Demonstrate the difference between `var` and `let` in a loop with `setTimeout()`.

---

# Key Takeaway

> **A Closure is created when an inner function remembers and accesses variables from its outer lexical scope even after the outer function has finished executing. Closures enable data privacy, persistent state, function factories, and many advanced JavaScript programming patterns.**

---

# Next Lesson

<h2>
➡️ <a href="../0025_this_keyword/this_keyword.md" style="color:#1E90FF; text-decoration:none;">
<strong>The <code>this</code> Keyword</strong>
</a>
</h2>