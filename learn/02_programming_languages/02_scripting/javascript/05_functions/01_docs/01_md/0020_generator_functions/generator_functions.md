# Generator Functions

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Generator Functions?](#what-are-generator-functions)
- [Why Do We Need Generator Functions?](#why-do-we-need-generator-functions)
- [How Generator Functions Work](#how-generator-functions-work)
- [Syntax](#syntax)
- [The `yield` Keyword](#the-yield-keyword)
- [Generator Object](#generator-object)
- [Examples](#examples)
- [Generator vs Normal Function](#generator-vs-normal-function)
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

- Understand what Generator Functions are.
- Learn how the `yield` keyword works.
- Create and use generator objects.
- Compare generator functions with normal functions.
- Apply generators in real-world applications.

---

# Introduction

Imagine reading a long book.

Instead of reading the entire book at once, you read one page, pause, and continue later from exactly where you stopped.

A **Generator Function** works in the same way.

Unlike normal functions that execute completely in one go, a generator can **pause execution**, remember its current state, and continue later.

This makes generators very useful for processing large datasets, creating custom iterators, and implementing lazy evaluation.

---

# What are Generator Functions?

A **Generator Function** is a special type of function that can pause and resume its execution.

It is declared using the `function*` syntax and uses the `yield` keyword to return values one at a time.

Example

```javascript
function* numbers() {

    yield 1;
    yield 2;
    yield 3;

}

const generator = numbers();

console.log(generator.next());
```

Output

```javascript
{ value: 1, done: false }
```

---

# Why Do We Need Generator Functions?

Generator functions help us:

- Pause execution.
- Resume execution later.
- Process large datasets efficiently.
- Generate values on demand.
- Reduce memory usage.
- Build custom iterators.

Instead of storing everything in memory, generators produce values only when needed.

---

# How Generator Functions Work

Execution Flow

```text
Generator Created
        │
        ▼
next()
        │
        ▼
yield Value
        │
        ▼
Pause Execution
        │
        ▼
next()
        │
        ▼
Resume Execution
        │
        ▼
yield Next Value
        │
        ▼
Continue Until Finished
```

Each call to `next()` resumes execution from the previous `yield`.

---

# Syntax

```javascript
function* generatorName() {

    yield value1;
    yield value2;
    yield value3;

}
```

Using the generator

```javascript
const iterator = generatorName();

iterator.next();
```

---

# The `yield` Keyword

`yield` temporarily stops the function and returns a value.

Example

```javascript
function* demo() {

    yield "HTML";
    yield "CSS";
    yield "JavaScript";

}

const iterator = demo();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

Output

```javascript
{ value: "HTML", done: false }
{ value: "CSS", done: false }
{ value: "JavaScript", done: false }
```

After all values are returned,

```javascript
console.log(iterator.next());
```

Output

```javascript
{ value: undefined, done: true }
```

---

# Generator Object

Calling a generator function **does not execute it immediately**.

Instead, it returns a **Generator Object**.

Example

```javascript
function* demo() {

    yield 10;

}

const generator = demo();

console.log(generator);
```

The returned object provides methods such as:

- `next()`
- `return()`
- `throw()`

The most commonly used method is `next()`.

---

# Examples

## Example 1 — Simple Generator

```javascript
function* colors() {

    yield "Red";
    yield "Green";
    yield "Blue";

}

const iterator = colors();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

---

## Example 2 — Number Generator

```javascript
function* count() {

    yield 1;
    yield 2;
    yield 3;
    yield 4;

}

const numbers = count();

console.log(numbers.next().value);
console.log(numbers.next().value);
```

Output

```
1
2
```

---

## Example 3 — Infinite Generator

```javascript
function* infiniteCounter() {

    let count = 1;

    while (true) {

        yield count++;

    }

}

const counter = infiniteCounter();

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
```

Output

```
1
2
3
```

---

## Example 4 — Using `for...of`

```javascript
function* fruits() {

    yield "Apple";
    yield "Banana";
    yield "Orange";

}

for (const fruit of fruits()) {

    console.log(fruit);

}
```

Output

```
Apple
Banana
Orange
```

---

# Generator vs Normal Function

| Generator Function | Normal Function |
|--------------------|-----------------|
| Uses `function*` | Uses `function` |
| Uses `yield` | Uses `return` |
| Pauses execution | Executes completely |
| Returns Generator Object | Returns final value |
| Resumes with `next()` | Cannot resume |

---

# Real-World Use Cases

Generator Functions are useful for:

- Lazy loading.
- Large file processing.
- Infinite sequences.
- Pagination.
- Custom iterators.
- Streaming data.
- Data pipelines.
- Game loops.

Example

```javascript
function* idGenerator() {

    let id = 1;

    while (true) {

        yield id++;

    }

}
```

Each call generates the next unique ID.

---

# Advantages

Generator Functions provide several benefits.

- Memory efficient.
- Pause and resume execution.
- Lazy evaluation.
- Easy custom iteration.
- Suitable for large datasets.
- Cleaner iterator implementation.

---

# Limitations

Generator Functions also have limitations.

- Slightly harder to understand.
- Cannot be used with arrow function syntax.
- Not required for simple tasks.
- Less common than async/await in everyday development.

---

# Common Mistakes

## Forgetting `*`

❌ Incorrect

```javascript
function demo() {

    yield 1;

}
```

This causes an error.

---

✅ Correct

```javascript
function* demo() {

    yield 1;

}
```

---

## Forgetting to Call `next()`

```javascript
function* demo() {

    yield "Hello";

}

const generator = demo();
```

Nothing happens until

```javascript
generator.next();
```

---

## Using `return` Instead of `yield`

```javascript
function* demo() {

    return 1;
    return 2;

}
```

Use `yield` when producing multiple values.

---

# Best Practices

- Use generators for large or infinite datasets.
- Keep generator logic simple.
- Use meaningful generator names.
- Prefer `for...of` when iterating generators.
- Use generators only when pause/resume behavior is needed.
- Avoid replacing normal functions unnecessarily.

---

# Summary

In this lesson, you learned:

- What Generator Functions are.
- How `yield` works.
- Generator Objects.
- Using `next()`.
- Differences from normal functions.
- Practical examples.
- Advantages, limitations, and best practices.

Generator Functions are an advanced JavaScript feature that enables efficient iteration, lazy evaluation, and stateful execution.

---

# Interview Questions

1. What is a Generator Function?
2. What is the purpose of the `yield` keyword?
3. What does a Generator Function return?
4. What is the difference between `yield` and `return`?
5. How does `next()` work?
6. When should Generator Functions be used?
7. Can Generator Functions produce infinite sequences?

---

# Practice Exercise

1. Create a generator that returns three colors.
2. Build a number generator from 1 to 10.
3. Create an infinite ID generator.
4. Iterate through a generator using `for...of`.
5. Compare a generator with a normal function.

---

# Key Takeaway

> **Generator Functions (`function*`) allow JavaScript functions to pause and resume execution using the `yield` keyword, making them ideal for lazy evaluation, custom iteration, and efficient processing of large or infinite data sequences.**

---

# Next Lesson

<h2>
➡️ <a href="../0021_async_functions/async_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Async Functions</strong>
</a>
</h2>