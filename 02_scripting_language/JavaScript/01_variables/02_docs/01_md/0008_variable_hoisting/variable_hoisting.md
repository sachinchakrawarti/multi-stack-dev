# Variable Hoisting in JavaScript

## Introduction

**Hoisting** is one of the most important and often misunderstood concepts in JavaScript. It describes JavaScript's behavior of **processing declarations before executing code**.

A common misconception is that JavaScript physically moves code to the top of a file. In reality, **the declarations are registered during the creation phase of execution**, making them available before the code is executed.

Understanding hoisting helps explain why `var`, `let`, and `const` behave differently.

---

# What Is Hoisting?

**Hoisting** is JavaScript's behavior of processing variable and function declarations before code execution begins.

Example:

```javascript
console.log(name);

var name = "Sachin";
```

Output

```text
undefined
```

Even though `name` is declared later, JavaScript already knows about it.

---

# Execution Phases

JavaScript executes code in two phases.

```text
1. Creation Phase
       │
       ▼
- Create Global Object
- Allocate Memory
- Register Variables
- Register Functions

       │
       ▼

2. Execution Phase
       │
       ▼
- Execute Code
- Assign Values
- Run Functions
```

Hoisting happens during the **Creation Phase**.

---

# Hoisting with `var`

Variables declared with `var` are hoisted and initialized with the value `undefined`.

Example:

```javascript
console.log(age);

var age = 22;
```

Output

```text
undefined
```

JavaScript behaves as if the code were:

```javascript
var age;

console.log(age);

age = 22;
```

---

# Memory Representation for `var`

Before execution:

```text
Memory

age → undefined
```

After execution:

```text
Memory

age → 22
```

---

# Hoisting with `let`

Variables declared with `let` are also hoisted, but they are **not initialized** during the creation phase.

Example:

```javascript
console.log(city);

let city = "Bhopal";
```

Output

```text
ReferenceError
```

The variable exists, but it cannot be accessed before its declaration.

---

# Hoisting with `const`

`const` behaves similarly to `let`.

Example:

```javascript
console.log(country);

const country = "India";
```

Output

```text
ReferenceError
```

Like `let`, the variable is hoisted but remains inaccessible until its declaration.

---

# Temporal Dead Zone (TDZ)

The **Temporal Dead Zone (TDZ)** is the period between entering a scope and the point where a `let` or `const` variable is declared.

```text
Enter Scope
      │
      ▼
Temporal Dead Zone
      │
      ▼
Variable Declaration
      │
      ▼
Variable Can Be Used
```

Accessing a `let` or `const` variable during the TDZ results in a `ReferenceError`.

Example:

```javascript
console.log(score);

let score = 100;
```

Output

```text
ReferenceError
```

---

# Comparing `var`, `let`, and `const`

| Keyword | Hoisted | Initialized During Creation | Access Before Declaration |
|----------|----------|-----------------------------|---------------------------|
| `var` | ✅ Yes | `undefined` | ✅ Returns `undefined` |
| `let` | ✅ Yes | ❌ No | ❌ ReferenceError |
| `const` | ✅ Yes | ❌ No | ❌ ReferenceError |

---

# Function Hoisting

Function declarations are fully hoisted.

Example:

```javascript
greet();

function greet() {

    console.log("Hello!");

}
```

Output

```text
Hello!
```

---

# Function Expressions

Function expressions behave differently because they depend on variable hoisting.

Example:

```javascript
sayHello();

var sayHello = function () {

    console.log("Hello");

};
```

Output

```text
TypeError
```

During creation:

```javascript
var sayHello;

sayHello();
```

Since `sayHello` is `undefined` at that point, calling it as a function causes an error.

---

# Arrow Functions

Arrow functions assigned to `let` or `const` are also affected by the Temporal Dead Zone.

Example:

```javascript
greet();

const greet = () => {

    console.log("Hello");

};
```

Output

```text
ReferenceError
```

---

# Hoisting Visualization

Source code:

```javascript
console.log(name);

var name = "Sachin";

console.log(name);
```

Creation phase:

```text
Memory

name → undefined
```

Execution phase:

```text
console.log(name)

↓

undefined

↓

name = "Sachin"

↓

console.log(name)

↓

Sachin
```

---

# Common Mistakes

## Assuming Variables Move to the Top

Incorrect understanding:

```javascript
var age = 22;
```

is **not physically moved** to the top of the file.

Instead, JavaScript registers the declaration before execution.

---

## Using `let` Before Declaration

```javascript
console.log(user);

let user = "Sachin";
```

Output

```text
ReferenceError
```

---

## Using `const` Before Declaration

```javascript
console.log(pi);

const pi = 3.14;
```

Output

```text
ReferenceError
```

---

## Forgetting About TDZ

```javascript
if (true) {

    console.log(score);

    let score = 10;

}
```

Output

```text
ReferenceError
```

---

# Best Practices

- Declare variables before using them.
- Prefer `const` by default.
- Use `let` for values that change.
- Avoid relying on hoisting.
- Avoid using `var` in modern JavaScript.
- Keep declarations close to where they are needed.
- Write code in a clear, top-to-bottom order.

---

# Interview Questions

### 1. What is hoisting?

Hoisting is JavaScript's behavior of processing declarations before executing code.

---

### 2. Is `var` hoisted?

Yes.

It is hoisted and initialized with `undefined`.

---

### 3. Are `let` and `const` hoisted?

Yes.

They are hoisted but remain in the Temporal Dead Zone until their declaration.

---

### 4. What is the Temporal Dead Zone (TDZ)?

The TDZ is the period between entering a scope and the declaration of a `let` or `const` variable, during which the variable cannot be accessed.

---

### 5. Which functions are fully hoisted?

Function declarations.

---

### 6. Are function expressions hoisted?

The variable is hoisted, but the function assignment is not. Attempting to call it before assignment results in an error.

---

# Key Points

- Hoisting occurs during JavaScript's creation phase.
- Variable declarations are processed before execution.
- `var` is hoisted and initialized with `undefined`.
- `let` and `const` are hoisted but remain in the Temporal Dead Zone.
- Function declarations are fully hoisted.
- Function expressions and arrow functions are not callable before assignment.
- Avoid relying on hoisting for clearer and more maintainable code.

---

# Summary

Variable hoisting is a core JavaScript concept that explains how declarations are processed before execution. While `var` variables are initialized with `undefined`, `let` and `const` remain in the Temporal Dead Zone until their declarations are executed. Understanding hoisting helps developers avoid common errors, write predictable code, and confidently work with both modern and legacy JavaScript.