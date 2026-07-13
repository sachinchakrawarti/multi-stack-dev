---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #f5f5f5
color: #333
style: |
  section {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    padding: 40px;
  }
  h1 {
    color: #007acc;
  }
  h2 {
    color: #444;
    border-bottom: 2px solid #007acc;
  }
  footer {
    font-size: 0.5em;
    color: #777;
  }
  code {
    background: #e8e8e8;
    color: #d14;
  }
---

# JavaScript Core Series
## Module 01: Mastering Variables

Presented by: Your Repo Core
Data & Architecture Deep-Dive

---

## What is a Variable?

A **variable** is a named container used to store data values in memory. 

* **The Analogy:** Think of a variable as a labeled storage box. 
  * The **label** is the identifier (`age`).
  * The **contents** inside are the value (`25`).
* **The Reality:** Instead of forcing your brain to remember raw hardware memory addresses like `0x7FFF5FBFFD8`, you write readable code.

---

## Variables in Memory: The Engine Room

The JavaScript Engine (e.g., V8) manages variable storage using two specialized structural environments:

1. **The Stack**
   * High-speed, execution-ready storage.
   * Holds **primitive values** (Numbers, Strings, Booleans) and variable identifiers.

2. **The Heap**
   * Large, unstructured memory space.
   * Holds complex **reference types** (Objects, Arrays, Functions).

---

## Lifecycle: Declaration vs. Initialization

Setting up a variable involves two distinct runtime behaviors:

* **Declaration:** Registering the variable identifier within its scope execution environment.
* **Initialization:** Allocating memory and assigning the baseline/initial data value.

```javascript
let targetScore;       // Declaration (Defaults to 'undefined')
targetScore = 100;     // Initialization / Assignment

const maxLimit = 500;  // Inline Declaration & Initialization