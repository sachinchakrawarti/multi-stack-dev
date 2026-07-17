# JavaScript Data Types: Best Practices

## Introduction

Choosing the correct data type and handling values properly are essential for writing clean, efficient, and maintainable JavaScript code.

Following best practices helps you:

- Reduce bugs
- Improve readability
- Write predictable code
- Make debugging easier
- Improve application performance

This chapter summarizes the recommended practices when working with JavaScript data types.

---

# 1. Use the Appropriate Data Type

Choose a data type that matches the information you want to store.

Good Example:

```javascript
const age = 25;
const name = "Sachin";
const isStudent = true;
```

Avoid:

```javascript
const age = "25";
```

Store numbers as numbers instead of strings whenever mathematical operations are required.

---

# 2. Prefer `const` Over `let`

Use `const` by default.

```javascript
const country = "India";
const numbers = [10, 20, 30];
```

Use `let` only when a variable needs to be reassigned.

```javascript
let score = 0;

score++;
```

Avoid using `var` in modern JavaScript.

---

# 3. Use Meaningful Variable Names

Good variable names improve code readability.

Good:

```javascript
const productPrice = 2500;
const userName = "Sachin";
```

Poor:

```javascript
const a = 2500;
const x = "Sachin";
```

Choose names that clearly describe the stored value.

---

# 4. Use Strict Equality (`===`)

Prefer strict equality because it compares both value and data type.

Good:

```javascript
console.log(10 === "10");
```

Output

```text
false
```

Avoid:

```javascript
console.log(10 == "10");
```

Output

```text
true
```

Using `===` prevents unexpected type coercion.

---

# 5. Perform Explicit Type Conversion

Convert values intentionally instead of relying on JavaScript's automatic conversions.

Good:

```javascript
const age = Number("25");

console.log(age + 5);
```

Output

```text
30
```

Avoid:

```javascript
console.log("25" + 5);
```

Output

```text
255
```

---

# 6. Validate User Input

User input is usually received as a string.

Always validate and convert it before using it.

```javascript
const input = "50";

const marks = Number(input);

if (!Number.isNaN(marks)) {
    console.log("Valid input");
}
```

Output

```text
Valid input
```

---

# 7. Use `Array.isArray()` for Arrays

Do not use `typeof` to detect arrays.

Incorrect:

```javascript
console.log(typeof []);
```

Output

```text
object
```

Correct:

```javascript
console.log(Array.isArray([]));
```

Output

```text
true
```

---

# 8. Handle `null` and `undefined` Carefully

Understand their difference.

```javascript
let city;
let address = null;

console.log(city);
console.log(address);
```

Output

```text
undefined
null
```

Use:

- `undefined` for uninitialized values.
- `null` for intentionally empty values.

---

# 9. Check for `NaN` Properly

Do not compare directly with `NaN`.

Incorrect:

```javascript
value === NaN
```

Correct:

```javascript
Number.isNaN(value)
```

---

# 10. Check for Infinite Values

Use `Number.isFinite()` before performing important calculations.

```javascript
const result = 10 / 0;

console.log(Number.isFinite(result));
```

Output

```text
false
```

---

# 11. Avoid Unnecessary Type Coercion

Automatic conversions can make code difficult to understand.

Avoid:

```javascript
console.log("10" + 5);
```

Output

```text
105
```

Prefer:

```javascript
console.log(Number("10") + 5);
```

Output

```text
15
```

---

# 12. Use Boolean Values Correctly

Store only Boolean values in Boolean variables.

Good:

```javascript
const isLoggedIn = true;
```

Avoid:

```javascript
const isLoggedIn = "true";
```

A string is not the same as a Boolean.

---

# 13. Keep Objects Well Structured

Group related information into objects.

```javascript
const student = {
    name: "Sachin",
    age: 22,
    course: "JavaScript"
};
```

Avoid creating many unrelated variables.

---

# 14. Store Collections in Arrays

Use arrays when working with lists.

```javascript
const fruits = [
    "Apple",
    "Banana",
    "Orange"
];
```

Avoid creating separate variables for each item.

---

# 15. Avoid Modifying Constants

While object properties and array elements can be modified, avoid unnecessary changes.

```javascript
const user = {
    name: "Sachin"
};

user.name = "Rahul";
```

Reassigning the object itself is not allowed.

---

# 16. Use Template Literals

Instead of string concatenation:

```javascript
const name = "Sachin";

console.log("Hello " + name);
```

Prefer:

```javascript
console.log(`Hello ${name}`);
```

---

# 17. Use Default Values Carefully

Instead of:

```javascript
const username = "";

console.log(username || "Guest");
```

Use the nullish coalescing operator when appropriate:

```javascript
const username = null;

console.log(username ?? "Guest");
```

---

# 18. Write Readable Code

Readable code is easier to maintain.

Good:

```javascript
const totalPrice = quantity * price;
```

Poor:

```javascript
const t = q * p;
```

---

# Real-World Example

```javascript
const input = "250";

const amount = Number(input);

if (Number.isNaN(amount)) {
    console.log("Invalid amount.");
} else {
    console.log(`Amount: ₹${amount}`);
}
```

Output

```text
Amount: ₹250
```

---

# Summary Checklist

✔ Use the correct data type.

✔ Prefer `const` over `let`.

✔ Avoid `var`.

✔ Use meaningful variable names.

✔ Prefer `===` over `==`.

✔ Perform explicit type conversion.

✔ Validate user input.

✔ Use `Array.isArray()` for arrays.

✔ Handle `null` and `undefined` correctly.

✔ Use `Number.isNaN()` for `NaN`.

✔ Use `Number.isFinite()` for infinite values.

✔ Avoid unnecessary type coercion.

✔ Write clean and readable code.

---

# Interview Questions

1. Why should you use `const` whenever possible?
2. Why is `===` preferred over `==`?
3. Why should you avoid automatic type coercion?
4. How do you correctly detect an array?
5. How do you check for `NaN`?
6. How do you check for `Infinity`?
7. What is the difference between `null` and `undefined`?
8. Why is explicit type conversion recommended?
9. What are the benefits of meaningful variable names?
10. What are the advantages of following JavaScript best practices?

---

# Key Points

- Choose the correct data type for every value.
- Use explicit type conversion for predictable behavior.
- Prefer strict equality (`===`).
- Validate data before using it.
- Write clean, readable, and maintainable code.
- Follow consistent coding standards to reduce errors.

---

# Next Topic

# `Common Mistakes`