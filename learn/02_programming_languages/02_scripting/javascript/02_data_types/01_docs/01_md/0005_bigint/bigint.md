# String Data Type in JavaScript

## Introduction

A **String** is a primitive data type used to store and manipulate **text** in JavaScript.

Anything enclosed within **single quotes (`'`)**, **double quotes (`"`),** or **backticks (`` ` ``)** is considered a string.

Strings are one of the most commonly used data types because almost every application works with text, such as names, addresses, messages, emails, and URLs.

---

# What Is a String?

A **String** is a sequence of zero or more characters.

Characters can include:

- Letters
- Numbers
- Symbols
- Spaces
- Special characters
- Emojis

Example:

```javascript
let language = "JavaScript";
let name = 'Sachin';
let message = `Welcome`;
```

All three variables contain string values.

---

# Creating Strings

JavaScript provides three ways to create strings.

## Double Quotes

```javascript
let city = "Bhopal";
```

---

## Single Quotes

```javascript
let country = 'India';
```

---

## Template Literals (Backticks)

```javascript
let course = `JavaScript`;
```

Template literals also support multi-line strings and string interpolation.

---

# Empty String

A string can also be empty.

```javascript
let text = "";

console.log(text);
```

Output

```text

```

---

# Checking the Data Type

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

The `length` property returns the number of characters in a string.

```javascript
let language = "JavaScript";

console.log(language.length);
```

Output

```text
10
```

Spaces are also counted.

```javascript
let text = "Hello World";

console.log(text.length);
```

Output

```text
11
```

---

# Accessing Characters

Each character has an index starting from **0**.

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

Template literals allow embedding variables inside strings.

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

Using backticks, strings can span multiple lines.

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

| Escape Character | Description |
|------------------|-------------|
| `\'` | Single quote |
| `\"` | Double quote |
| `\\` | Backslash |
| `\n` | New line |
| `\t` | Tab |

Example:

```javascript
let text = "He said, \"Hello!\"";

console.log(text);
```

Output

```text
He said, "Hello!"
```

---

# Common String Methods

## toUpperCase()

Converts all characters to uppercase.

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

Converts all characters to lowercase.

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

Removes spaces from both ends.

```javascript
let text = "  Hello  ";

console.log(text.trim());
```

Output

```text
Hello
```

---

## includes()

Checks whether a string contains another string.

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

Checks whether a string starts with specific characters.

```javascript
console.log("JavaScript".startsWith("Java"));
```

Output

```text
true
```

---

## endsWith()

Checks whether a string ends with specific characters.

```javascript
console.log("JavaScript".endsWith("Script"));
```

Output

```text
true
```

---

## indexOf()

Returns the index of the first occurrence.

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

Extracts part of a string.

```javascript
let language = "JavaScript";

console.log(language.slice(0, 4));
```

Output

```text
Java
```

---

## replace()

Replaces part of a string.

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

Splits a string into an array.

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

Strings are **immutable**, meaning they cannot be changed after creation.

```javascript
let language = "JavaScript";

language[0] = "P";

console.log(language);
```

Output

```text
JavaScript
```

Instead, JavaScript creates a new string whenever modifications are made.

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

String comparison is **case-sensitive**.

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
- Prefer template literals for string interpolation.
- Use `trim()` to remove unwanted spaces.
- Use string methods instead of manual processing.
- Keep strings readable and properly formatted.

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

## Using `+` Instead of Template Literals

Less readable:

```javascript
let message = "Hello " + name;
```

Better:

```javascript
let message = `Hello ${name}`;
```

---

## Assuming Strings Are Mutable

Incorrect:

```javascript
let text = "Hello";

text[0] = "Y";
```

The string remains unchanged.

---

# Interview Questions

1. What is a string in JavaScript?
2. Is a string a primitive or reference data type?
3. What is string immutability?
4. What is the difference between single quotes, double quotes, and backticks?
5. What are template literals?
6. What does the `length` property do?
7. How do you access individual characters?
8. What is the difference between `slice()` and `substring()`?
9. How does `split()` work?
10. Which string methods are commonly used?

---

# Summary

- A String stores textual data.
- Strings are primitive and immutable.
- Strings can be created using single quotes, double quotes, or backticks.
- JavaScript provides many built-in methods for working with strings.
- Template literals make string formatting easier and more readable.

---

# Key Points

- String is a primitive data type.
- `typeof "Hello"` returns `"string"`.
- Strings are immutable.
- Indexing starts at `0`.
- Use template literals for dynamic strings.
- JavaScript provides many useful string methods.

---

# Next Topic

# `Boolean`