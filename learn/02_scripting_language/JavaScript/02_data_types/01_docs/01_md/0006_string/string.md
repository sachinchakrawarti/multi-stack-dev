# String Data Type in JavaScript

## Introduction

The **String** data type is one of JavaScript's **primitive data types**. A string is used to represent **textual data**, such as names, messages, addresses, emails, and sentences.

Strings consist of a sequence of **Unicode characters** enclosed in:

- Single quotes (`' '`)
- Double quotes (`" "`)
- Backticks (`` ` ` ``)

Strings are **immutable**, meaning once created, their individual characters cannot be changed.

---

# What is a String?

A **String** is a sequence of zero or more characters used to represent text.

Examples:

```javascript
let name = "Sachin";
let city = 'Delhi';
let language = `JavaScript`;

console.log(name);
console.log(city);
console.log(language);
```

Output

```text
Sachin
Delhi
JavaScript
```

---

# Characteristics of String

- Primitive data type.
- Stores textual data.
- Immutable.
- Supports Unicode characters.
- Can be created using single quotes, double quotes, or backticks.
- Supports numerous built-in methods.

---

# Creating Strings

## Using Double Quotes

```javascript
let message = "Hello World";

console.log(message);
```

Output

```text
Hello World
```

---

## Using Single Quotes

```javascript
let language = 'JavaScript';

console.log(language);
```

Output

```text
JavaScript
```

---

## Using Template Literals

```javascript
let framework = `React`;

console.log(framework);
```

Output

```text
React
```

---

# Empty String

```javascript
let text = "";

console.log(text);
```

Output

```text

```

---

# String Length

Use the `length` property to find the number of characters.

```javascript
let course = "JavaScript";

console.log(course.length);
```

Output

```text
10
```

---

# Accessing Characters

## Using Index

```javascript
let word = "Coding";

console.log(word[0]);
console.log(word[3]);
```

Output

```text
C
i
```

---

## Using charAt()

```javascript
let word = "JavaScript";

console.log(word.charAt(4));
```

Output

```text
S
```

---

# String Concatenation

Strings can be joined using the `+` operator.

```javascript
let first = "Sachin";
let last = "Kumar";

console.log(first + " " + last);
```

Output

```text
Sachin Kumar
```

---

# Template Literals

Template literals use backticks and `${}` for interpolation.

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

# Escape Characters

```javascript
console.log("He said \"Hello\"");
console.log('It\'s JavaScript');
console.log("First Line\nSecond Line");
```

Output

```text
He said "Hello"
It's JavaScript
First Line
Second Line
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

Removes whitespace from both ends.

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

Checks whether a string contains another string.

```javascript
let text = "JavaScript";

console.log(text.includes("Script"));
```

Output

```text
true
```

---

## startsWith()

```javascript
let text = "JavaScript";

console.log(text.startsWith("Java"));
```

Output

```text
true
```

---

## endsWith()

```javascript
let text = "JavaScript";

console.log(text.endsWith("Script"));
```

Output

```text
true
```

---

## indexOf()

Returns the first occurrence.

```javascript
let text = "JavaScript";

console.log(text.indexOf("Script"));
```

Output

```text
4
```

---

## lastIndexOf()

```javascript
let text = "banana";

console.log(text.lastIndexOf("a"));
```

Output

```text
5
```

---

## slice()

Extracts part of a string.

```javascript
let text = "JavaScript";

console.log(text.slice(0, 4));
```

Output

```text
Java
```

---

## substring()

```javascript
let text = "Programming";

console.log(text.substring(0, 11));
```

Output

```text
Programming
```

---

## replace()

```javascript
let text = "Hello World";

console.log(text.replace("World", "JavaScript"));
```

Output

```text
Hello JavaScript
```

---

## replaceAll()

```javascript
let text = "cat cat cat";

console.log(text.replaceAll("cat", "dog"));
```

Output

```text
dog dog dog
```

---

## split()

Converts a string into an array.

```javascript
let text = "HTML,CSS,JavaScript";

console.log(text.split(","));
```

Output

```text
["HTML", "CSS", "JavaScript"]
```

---

## repeat()

```javascript
let text = "Hi ";

console.log(text.repeat(3));
```

Output

```text
Hi Hi Hi
```

---

# String Immutability

Strings cannot be modified directly.

```javascript
let name = "Sachin";

name[0] = "R";

console.log(name);
```

Output

```text
Sachin
```

The original string remains unchanged.

---

# Comparing Strings

```javascript
console.log("Apple" === "Apple");
console.log("Apple" === "apple");
```

Output

```text
true
false
```

---

# String Conversion

Convert other data types into strings.

```javascript
console.log(String(100));
console.log(String(true));
console.log(String(null));
```

Output

```text
100
true
null
```

---

# Real-World Example

```javascript
const user = {
    firstName: "Sachin",
    lastName: "Chakrawarti"
};

const fullName = `${user.firstName} ${user.lastName}`;

console.log(fullName);
```

Output

```text
Sachin Chakrawarti
```

---

# Best Practices

- Use meaningful variable names.
- Prefer template literals over string concatenation.
- Use `trim()` before validating user input.
- Use `===` for string comparison.
- Keep strings immutable.

---

# Common Mistakes

## Forgetting Quotes

```javascript
let name = Sachin;
```

Produces:

```text
ReferenceError
```

Correct:

```javascript
let name = "Sachin";
```

---

## Using `+` with Numbers

```javascript
console.log("10" + 5);
```

Output

```text
105
```

---

## Case-Sensitive Comparison

```javascript
console.log("Java" === "java");
```

Output

```text
false
```

---

## Modifying Characters Directly

```javascript
let text = "Hello";

text[0] = "Y";
```

The string remains unchanged because strings are immutable.

---

# Interview Questions

1. What is the String data type?
2. Is String primitive or reference?
3. What is string immutability?
4. What is the difference between `slice()` and `substring()`?
5. What are template literals?
6. What is string interpolation?
7. What is the difference between `replace()` and `replaceAll()`?
8. How do you convert a value into a string?
9. What is the purpose of the `trim()` method?
10. How do you find the length of a string?

---

# Summary

- String is a primitive data type used to store text.
- Strings are immutable.
- Strings can be created using single quotes, double quotes, or backticks.
- JavaScript provides many built-in methods for working with strings.
- Template literals make string formatting easier.
- String methods simplify searching, replacing, extracting, and formatting text.

---

# Next Topic

**0007_boolean**