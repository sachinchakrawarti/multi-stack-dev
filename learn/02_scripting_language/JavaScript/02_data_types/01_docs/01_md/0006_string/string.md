# String Data Type in JavaScript

## Introduction

A **String** is a primitive data type used to store textual data in JavaScript. Text can include letters, numbers, symbols, spaces, emojis, and special characters.

Strings are one of the most commonly used data types because almost every application works with text such as names, email addresses, passwords, messages, product names, and URLs.

---

# What Is a String?

A **String** is a sequence of zero or more characters enclosed within quotes.

JavaScript supports three ways to create strings:

- Single quotes (`' '`)
- Double quotes (`" "`)
- Backticks (`` ` ` ``)

Example:

```javascript
let language = "JavaScript";
let name = 'Sachin';
let message = `Welcome`;
```

All three variables store string values.

---

# Why Use Strings?

Strings allow programs to work with textual information.

Examples include:

- User names
- Addresses
- Phone numbers
- Email addresses
- Product names
- Messages
- URLs

Example:

```javascript
let username = "Sachin";
let email = "sachin@example.com";
let city = "Bhopal";
```

---

# Creating Strings

## Using Double Quotes

```javascript
let city = "Delhi";
```

---

## Using Single Quotes

```javascript
let country = 'India';
```

---

## Using Backticks

```javascript
let course = `JavaScript`;
```

Backticks support string interpolation and multi-line strings.

---

# Empty String

A string may contain no characters.

```javascript
let text = "";

console.log(text);
```

Output

```text

```

---

# String Data Type

Use the `typeof` operator.

```javascript
let language = "JavaScript";

console.log(typeof language);
```

Output

```text
string
```

---

# String Length

The `length` property returns the number of characters.

```javascript
let language = "JavaScript";

console.log(language.length);
```

Output

```text
10
```

Spaces are counted.

```javascript
let text = "Hello World";

console.log(text.length);
```

Output

```text
11
```

---

# Character Index

Every character has an index.

```text
J  a  v  a  S  c  r  i  p  t
0  1  2  3  4  5  6  7  8  9
```

Example:

```javascript
let language = "JavaScript";

console.log(language[0]);
console.log(language[4]);
```

Output

```text
J
S
```

---

# String Concatenation

Strings can be combined using the `+` operator.

```javascript
let firstName = "Sachin";
let lastName = "Kumar";

let fullName = firstName + " " + lastName;

console.log(fullName);
```

Output

```text
Sachin Kumar
```

---

# Template Literals

Template literals make it easy to insert variables into strings.

```javascript
let name = "Sachin";
let age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output

```text
My name is Sachin and I am 22 years old.
```

---

# Multi-Line Strings

Only template literals support multi-line strings.

```javascript
let message = `Welcome
to
JavaScript`;

console.log(message);
```

Output

```text
Welcome
to
JavaScript
```

---

# Escape Characters

Escape characters allow special characters inside strings.

| Escape | Description |
|---------|-------------|
| `\'` | Single quote |
| `\"` | Double quote |
| `\\` | Backslash |
| `\n` | New line |
| `\t` | Tab |

Example:

```javascript
let quote = "He said, \"Hello\".";

console.log(quote);
```

Output

```text
He said, "Hello".
```

---

# Common String Methods

## toUpperCase()

```javascript
let text = "javascript";

console.log(text.toUpperCase());
```

Output

```text
JAVASCRIPT
```

---

## toLowerCase()

```javascript
let text = "JAVASCRIPT";

console.log(text.toLowerCase());
```

Output

```text
javascript
```

---

## trim()

```javascript
let text = "  Hello World  ";

console.log(text.trim());
```

Output

```text
Hello World
```

---

## includes()

```javascript
let language = "JavaScript";

console.log(language.includes("Script"));
```

Output

```text
true
```

---

## startsWith()

```javascript
console.log("JavaScript".startsWith("Java"));
```

Output

```text
true
```

---

## endsWith()

```javascript
console.log("JavaScript".endsWith("Script"));
```

Output

```text
true
```

---

## indexOf()

```javascript
let language = "JavaScript";

console.log(language.indexOf("S"));
```

Output

```text
4
```

---

## slice()

```javascript
let language = "JavaScript";

console.log(language.slice(4));
```

Output

```text
Script
```

---

## replace()

```javascript
let text = "I like Java";

console.log(text.replace("Java", "JavaScript"));
```

Output

```text
I like JavaScript
```

---

## split()

```javascript
let colors = "Red,Green,Blue";

console.log(colors.split(","));
```

Output

```text
["Red", "Green", "Blue"]
```

---

# String Immutability

Strings are immutable.

```javascript
let language = "JavaScript";

language[0] = "P";

console.log(language);
```

Output

```text
JavaScript
```

JavaScript creates a new string instead of modifying the original.

---

# Comparing Strings

```javascript
console.log("Apple" === "Apple");
```

Output

```text
true
```

```javascript
console.log("Apple" === "apple");
```

Output

```text
false
```

String comparison is case-sensitive.

---

# Real-World Example

```javascript
const firstName = "Sachin";
const lastName = "Kumar";

const fullName = `${firstName} ${lastName}`;

console.log(fullName);
```

Output

```text
Sachin Kumar
```

---

# Best Practices

- Use meaningful variable names.
- Prefer template literals for dynamic strings.
- Use `trim()` to remove unwanted spaces.
- Keep strings readable.
- Use built-in string methods instead of writing custom logic.

---

# Common Mistakes

## Forgetting Quotes

Incorrect:

```javascript
let name = Sachin;
```

Correct:

```javascript
let name = "Sachin";
```

---

## Assuming Strings Can Be Modified

Incorrect:

```javascript
let text = "Hello";

text[0] = "Y";
```

Strings are immutable.

---

## Using `+` for Complex Strings

Less readable:

```javascript
let message = "Hello " + name + ", Welcome!";
```

Better:

```javascript
let message = `Hello ${name}, Welcome!`;
```

---

# Interview Questions

1. What is a string in JavaScript?
2. Is a string a primitive data type?
3. What is string immutability?
4. What is the difference between single quotes, double quotes, and backticks?
5. What is string interpolation?
6. What does the `length` property return?
7. How do you access a specific character in a string?
8. What is the difference between `slice()` and `substring()`?
9. What does the `split()` method do?
10. Why are template literals preferred over string concatenation?

---

# Summary

- A String stores textual data.
- Strings are primitive and immutable.
- Strings can be created using single quotes, double quotes, or backticks.
- Template literals simplify string formatting.
- JavaScript provides many built-in methods for manipulating strings.

---

# Key Points

- String is a primitive data type.
- `typeof "Hello"` returns `"string"`.
- Strings are immutable.
- Indexing starts at `0`.
- Use template literals for dynamic strings.
- Use built-in string methods whenever possible.

---

# Next Topic

# `Boolean`