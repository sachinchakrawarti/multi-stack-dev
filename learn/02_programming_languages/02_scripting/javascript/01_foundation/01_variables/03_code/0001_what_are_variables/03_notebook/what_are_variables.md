# What Are Variables

## Learning Objectives

- Understand variables
- Learn var, let and const
- Store values

## Introduction

Variables are named containers used to store data.

```javascript
console.log("Welcome to JavaScript Variables");
```

## What is a Variable?

```javascript
let name = "Sachin";
console.log(name);
```

## Why Do We Need Variables?

```javascript
let age = 25;
console.log(age);
```

## Declaring Variables

```javascript
let city = "Delhi";
console.log(city);
```

## The var Keyword

```javascript
var country = "India";
console.log(country);
```

## The let Keyword

```javascript
let language = "JavaScript";
console.log(language);
```

## The const Keyword

```javascript
const PI = 3.14159;
console.log(PI);
```

## Variable Naming Rules

```javascript
let firstName = "John";
let _age = 20;
let $salary = 5000;

console.log(firstName);
console.log(_age);
console.log($salary);
```

## Invalid Variable Names

```javascript
// let 1name = "John";
// let first-name = "John";
// let let = 10;
```

## Reassigning Variables

```javascript
let score = 10;
score = 20;

console.log(score);
```

## Constants Cannot Be Reassigned

```javascript
const COUNTRY = "India";
console.log(COUNTRY);

// COUNTRY = "USA";
```

## Best Practices

```javascript
let studentName = "Alice";
let totalMarks = 450;
let isPassed = true;

console.log(studentName);
console.log(totalMarks);
console.log(isPassed);
```

## Exercise

```javascript
// Create these variables:
//
// yourName
// yourAge
// yourCity
// yourCountry
//
// Print all values.
```

## Summary

- Variables store values.
- Prefer let and const.
- Avoid var in modern JavaScript.

## Practice Questions

1. What is a variable?
2. Difference between var, let and const?
3. Why use const?
4. What are naming rules?
