# The `var` Keyword in JavaScript

## Introduction

The `var` keyword is the **original way** to declare variables in JavaScript. It has been part of the language since its creation in **1995**.

Although `var` is still supported in all modern browsers and JavaScript environments, it is **not recommended** for new projects. Modern JavaScript prefers using **`let`** and **`const`** because they provide better scoping rules and help prevent common programming mistakes.

---

# Syntax

```javascript
var variableName;
```

Declaration with initialization:

```javascript
var age = 22;
```

---

# Basic Examples

## Example 1

```javascript
var name = "Sachin";

console.log(name);
```

Output

```text
Sachin
```

---

## Example 2

```javascript
var city = "Bhopal";

console.log(city);
```

Output

```text
Bhopal
```

---

## Example 3

```javascript
var price = 499;

console.log(price);
```

Output

```text
499
```

---

# Declaration and Initialization

Variables can be declared first and assigned later.

```javascript
var language;

language = "JavaScript";

console.log(language);
```

Output

```text
JavaScript
```

---

# Reassignment

Variables declared with `var` can be reassigned.

```javascript
var score = 50;

score = 90;

console.log(score);
```

Output

```text
90
```

---

# Redeclaration

One of the biggest differences between `var` and `let` is that `var` allows redeclaration in the same scope.

```javascript
var age = 20;

var age = 25;

console.log(age);
```

Output

```text
25
```

Although valid, redeclaration can make programs harder to understand.

---

# Function Scope

Variables declared with `var` are **function-scoped**, not block-scoped.

Example:

```javascript
function displayName() {

    var name = "Sachin";

    console.log(name);

}

displayName();
```

Output

```text
Sachin
```

The variable `name` is only available inside the function.

---

# `var` Inside a Block

Unlike `let` and `const`, `var` ignores block boundaries.

```javascript
if (true) {

    var message = "Hello";

}

console.log(message);
```

Output

```text
Hello
```

The variable is still accessible outside the `if` block.

---

# Hoisting

Variables declared with `var` are **hoisted**.

This means JavaScript moves the declaration to the top of its scope before execution.

Example:

```javascript
console.log(age);

var age = 22;
```

Output

```text
undefined
```

JavaScript interprets it like this:

```javascript
var age;

console.log(age);

age = 22;
```

---

# Using `var` in Loops

```javascript
for (var i = 1; i <= 3; i++) {

    console.log(i);

}
```

Output

```text
1
2
3
```

After the loop:

```javascript
console.log(i);
```

Output

```text
4
```

The variable `i` is still available because `var` is not block-scoped.

---

# Memory Example

```javascript
var user = "Sachin";

var age = 22;

var active = true;
```

Memory

```text
user   → "Sachin"

age    → 22

active → true
```

---

# Advantages of `var`

- Supported in all browsers
- Simple syntax
- Useful when maintaining older JavaScript projects
- Backward compatible

---

# Disadvantages of `var`

- Function scope instead of block scope
- Allows redeclaration
- Can cause accidental overwriting
- Hoisting may lead to unexpected behavior
- Makes debugging more difficult

---

# `var` vs `let`

| Feature | `var` | `let` |
|----------|--------|--------|
| Scope | Function | Block |
| Redeclaration | ✅ Yes | ❌ No |
| Reassignment | ✅ Yes | ✅ Yes |
| Hoisting | Yes (`undefined`) | Yes (Temporal Dead Zone) |
| Modern Recommendation | ❌ No | ✅ Yes |

---

# `var` vs `const`

| Feature | `var` | `const` |
|----------|--------|----------|
| Scope | Function | Block |
| Redeclaration | ✅ Yes | ❌ No |
| Reassignment | ✅ Yes | ❌ No |
| Hoisting | Yes | Yes (Temporal Dead Zone) |
| Preferred for constants | ❌ No | ✅ Yes |

---

# When Should You Use `var`?

Generally, avoid using `var` in new code.

Use it only when:

- Maintaining legacy JavaScript applications
- Reading older tutorials or codebases
- Working on projects that already use `var`

For modern development:

- Use `const` for values that do not change.
- Use `let` for values that may change.

---

# Common Mistakes

## Redeclaring Variables

```javascript
var age = 20;

var age = 30;
```

This is allowed but often leads to bugs.

---

## Assuming Block Scope

```javascript
if (true) {

    var message = "Hello";

}

console.log(message);
```

Many beginners expect an error, but the output is:

```text
Hello
```

---

## Using Variables Before Assignment

```javascript
console.log(name);

var name = "Sachin";
```

Output

```text
undefined
```

This happens because of hoisting.

---

# Best Practices

- Avoid `var` in modern JavaScript.
- Prefer `const` whenever possible.
- Use `let` when reassignment is needed.
- Learn `var` because you'll encounter it in older code.
- Understand hoisting and function scope.

---

# Interview Questions

### 1. What is `var`?

`var` is the original keyword used to declare variables in JavaScript.

---

### 2. Is `var` block-scoped?

No.

It is **function-scoped**.

---

### 3. Can `var` variables be reassigned?

Yes.

---

### 4. Can `var` variables be redeclared?

Yes.

---

### 5. Is `var` hoisted?

Yes.

The declaration is hoisted and initialized with `undefined`.

---

### 6. Should you use `var` in modern JavaScript?

Generally, no.

Use `let` and `const` unless you're maintaining legacy code.

---

# Key Points

- `var` was introduced in the first version of JavaScript.
- It is function-scoped.
- It supports reassignment.
- It supports redeclaration.
- It is hoisted.
- It is mainly used in legacy code.
- Modern JavaScript recommends `let` and `const`.

---

# Summary

The `var` keyword is an important part of JavaScript history and is still found in many existing codebases. However, its function scope, redeclaration behavior, and hoisting can introduce subtle bugs. For new applications, developers should prefer **`let`** and **`const`**, while still understanding `var` to confidently read and maintain older JavaScript projects.