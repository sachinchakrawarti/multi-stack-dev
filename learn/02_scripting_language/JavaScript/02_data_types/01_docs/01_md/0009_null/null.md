# Null Data Type in JavaScript

## Introduction

The **Null** data type is one of JavaScript's **seven primitive data types**.

The value `null` represents the **intentional absence of a value**. Unlike `undefined`, which is assigned automatically by JavaScript, `null` is assigned deliberately by the programmer to indicate that a variable currently has no value.

`null` is commonly used when a value is expected in the future but is not available at the moment.

---

# What Is Null?

`null` is a special primitive value that represents **nothing**, **no value**, or an **empty reference**.

Example:

```javascript
let selectedUser = null;

console.log(selectedUser);
```

Output

```text
null
```

---

# Characteristics of Null

- Primitive data type.
- Represents an intentional empty value.
- Assigned manually by the programmer.
- Has only one possible value: `null`.
- Different from `undefined`.

---

# Creating Null Values

Assign `null` explicitly.

```javascript
let employee = null;

console.log(employee);
```

Output

```text
null
```

---

# Checking the Data Type

Using `typeof` with `null` gives an unexpected result.

```javascript
console.log(typeof null);
```

Output

```text
object
```

This is a **historical bug** in JavaScript that has been preserved for backward compatibility.

Although `typeof null` returns `"object"`, **`null` is a primitive data type**.

---

# Null vs Undefined

Although both represent the absence of a value, they have different meanings.

| Null | Undefined |
|------|-----------|
| Assigned intentionally | Assigned automatically |
| Means "empty value" | Means "value not assigned" |
| Primitive data type | Primitive data type |

Example:

```javascript
let a = null;
let b;

console.log(a);
console.log(b);
```

Output

```text
null
undefined
```

---

# Comparing Null

```javascript
let value = null;

console.log(value === null);
```

Output

```text
true
```

---

# Null and Undefined Equality

Loose equality:

```javascript
console.log(null == undefined);
```

Output

```text
true
```

Strict equality:

```javascript
console.log(null === undefined);
```

Output

```text
false
```

Always prefer **strict equality (`===`)**.

---

# Boolean Conversion

When converted to a Boolean, `null` becomes `false`.

```javascript
console.log(Boolean(null));
```

Output

```text
false
```

---

# Number Conversion

```javascript
console.log(Number(null));
```

Output

```text
0
```

---

# String Conversion

```javascript
console.log(String(null));
```

Output

```text
null
```

---

# Null in Objects

A property can intentionally contain `null`.

```javascript
const user = {
    name: "Sachin",
    phone: null
};

console.log(user.phone);
```

Output

```text
null
```

This indicates that the property exists but currently has no value.

---

# Null in Functions

Functions can return `null` when no meaningful value is available.

```javascript
function findUser() {
    return null;
}

console.log(findUser());
```

Output

```text
null
```

---

# Real-World Example

A shopping application may not have a discount available.

```javascript
const product = {
    name: "Laptop",
    price: 65000,
    discount: null
};

console.log(product.discount);
```

Output

```text
null
```

Another example:

```javascript
let currentUser = null;

console.log(currentUser);
```

This indicates that no user is currently logged in.

---

# Best Practices

- Use `null` to represent an intentionally empty value.
- Use `undefined` only for values that have not been assigned.
- Always compare using strict equality (`===`).
- Document the meaning of `null` values in your application.

Example:

```javascript
if (user === null) {
    console.log("No user selected.");
}
```

---

# Common Mistakes

## Confusing Null and Undefined

Incorrect assumption:

```javascript
null === undefined
```

Output

```text
false
```

These are different values.

---

## Expecting `typeof null` to Return `"null"`

```javascript
console.log(typeof null);
```

Output

```text
object
```

This is a historical JavaScript behavior.

---

## Using Loose Equality

```javascript
console.log(null == undefined);
```

Output

```text
true
```

Prefer:

```javascript
console.log(null === undefined);
```

Output

```text
false
```

---

# Interview Questions

1. What is `null` in JavaScript?
2. Is `null` a primitive data type?
3. What is the difference between `null` and `undefined`?
4. Why does `typeof null` return `"object"`?
5. What is the result of `Boolean(null)`?
6. What is the result of `Number(null)`?
7. What is the result of `String(null)`?
8. When should `null` be used?
9. What is the difference between `==` and `===` when comparing `null`?
10. Why is `typeof null` considered a historical bug?

---

# Summary

- `null` is a primitive data type.
- It represents an intentionally empty value.
- It must be assigned manually by the programmer.
- `typeof null` returns `"object"` because of a historical JavaScript bug.
- `null` is different from `undefined`.
- Use strict equality (`===`) when comparing `null`.

---

# Key Points

- `null` means **intentional absence of a value**.
- `typeof null` returns `"object"`.
- `Boolean(null)` returns `false`.
- `Number(null)` returns `0`.
- `String(null)` returns `"null"`.
- Prefer `null` over `undefined` when indicating an intentionally empty value.

---

# Next Topic

# `Symbol`