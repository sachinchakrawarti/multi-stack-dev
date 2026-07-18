# Flowchart

## Introduction

Before writing a program, programmers often create a visual representation of the program's logic. This visual representation is called a **flowchart**.

A flowchart uses standard symbols connected by arrows to illustrate the sequence of steps involved in solving a problem.

Flowcharts make it easier to understand, analyze, and communicate the logic of a program before writing code.

---

# Definition

A **flowchart** is a graphical representation of an algorithm or process using standardized symbols connected by arrows to show the flow of execution.

In simple words,

> A flowchart is a diagram that visually represents the steps required to solve a problem.

---

# Why Do We Need Flowcharts?

Flowcharts help programmers:

- Visualize the solution before coding
- Understand complex logic easily
- Detect logical errors
- Improve communication among team members
- Simplify debugging
- Create proper documentation

---

# Basic Flow of a Flowchart

```text
Start
  │
Input
  │
Process
  │
Decision (if required)
  │
Output
  │
Stop
```

---

# Standard Flowchart Symbols

## 1. Terminator (Start / End)

Represents the beginning or end of a flowchart.

```text
  _________
 /         \
|  START    |
 \_________/
```

Used for:

- Start
- End
- Stop

---

## 2. Process

Represents an operation or instruction.

```text
+------------------+
| Calculate Total  |
+------------------+
```

Examples:

- Add two numbers
- Calculate salary
- Update balance

---

## 3. Input / Output

Represents user input or displayed output.

```text
   ____________
  /           /
 / Enter Age /
 \          /
  \________/
```

Examples:

- Read input
- Display result
- Print report

---

## 4. Decision

Represents a condition that has two or more possible outcomes.

```text
      /\
     /  \
    <Age?>
     \  /
      \/
```

Examples:

- Age >= 18?
- Password Correct?
- Number > 0?

Decision branches usually contain:

- Yes
- No

---

## 5. Flow Line

Shows the direction of execution.

```text
↓
```

or

```text
────►
```

---

## 6. Connector

Connects different parts of a flowchart.

```text
 (A)
```

Useful for large flowcharts.

---

# Example 1: Add Two Numbers

## Algorithm

1. Start
2. Read A
3. Read B
4. Add A and B
5. Display Sum
6. Stop

---

## Flowchart

```text
        ┌─────────┐
        │ START   │
        └────┬────┘
             │
             ▼
     ┌────────────────┐
     │ Read A and B   │
     └──────┬─────────┘
            │
            ▼
     ┌────────────────┐
     │ Sum = A + B    │
     └──────┬─────────┘
            │
            ▼
     ┌────────────────┐
     │ Display Sum    │
     └──────┬─────────┘
            │
            ▼
        ┌─────────┐
        │  STOP   │
        └─────────┘
```

---

# Example 2: Check Voting Eligibility

## Problem

Determine whether a person is eligible to vote.

---

## Algorithm

1. Start
2. Read Age
3. Is Age >= 18?
4. If Yes → Display "Eligible"
5. Else → Display "Not Eligible"
6. Stop

---

## Flowchart

```text
              ┌─────────┐
              │ START   │
              └────┬────┘
                   │
                   ▼
           ┌─────────────┐
           │ Read Age    │
           └─────┬───────┘
                 │
                 ▼
             ┌─────────┐
             │Age>=18? │
             └──┬───┬──┘
              Yes   No
               │     │
               ▼     ▼
      ┌────────────┐ ┌──────────────┐
      │ Eligible   │ │ Not Eligible │
      └─────┬──────┘ └──────┬───────┘
            │               │
            └───────┬───────┘
                    ▼
              ┌─────────┐
              │  STOP   │
              └─────────┘
```

---

# Flowchart Rules

- Every flowchart should have one Start and one Stop.
- Flow should generally move from top to bottom.
- Use standard symbols.
- Keep the flow simple and readable.
- Connect all symbols using arrows.
- Avoid crossing flow lines whenever possible.

---

# Advantages of Flowcharts

- Easy to understand
- Visual representation of logic
- Helps identify errors
- Simplifies debugging
- Improves communication
- Useful for documentation
- Makes maintenance easier

---

# Disadvantages of Flowcharts

- Large flowcharts become difficult to manage.
- Updating a flowchart may require redrawing it.
- Complex systems produce very large diagrams.
- Time-consuming for very detailed programs.

---

# Flowchart vs Algorithm

| Flowchart | Algorithm |
|-----------|-----------|
| Graphical representation | Textual representation |
| Easy to visualize | Easy to write |
| Uses symbols | Uses steps |
| Better for presentations | Better for documentation |

---

# Flowchart vs Pseudocode

| Flowchart | Pseudocode |
|-----------|------------|
| Visual | Text-based |
| Uses symbols | Uses simple English |
| Easier to understand visually | Easier to modify |
| Better for explaining logic | Better for coding preparation |

---

# Applications of Flowcharts

Flowcharts are widely used in:

- Software development
- Business process modeling
- Banking systems
- Manufacturing
- Healthcare
- Education
- Project planning
- Network design
- Quality control
- Data processing

---

# Best Practices

- Begin with a clear understanding of the problem.
- Use meaningful labels inside symbols.
- Keep the flowchart neat and organized.
- Break large flowcharts into smaller sections.
- Test the logic before writing code.

---

# Common Mistakes

- Using incorrect symbols.
- Missing Start or Stop symbols.
- Forgetting arrow directions.
- Creating confusing or crossed flow lines.
- Writing too much text inside symbols.

---

# Interview Questions

1. What is a flowchart?
2. Why are flowcharts used?
3. What are the standard flowchart symbols?
4. What is the purpose of the decision symbol?
5. What is the difference between a flowchart and an algorithm?
6. What is the difference between a flowchart and pseudocode?
7. What are the advantages of flowcharts?
8. What are the disadvantages of flowcharts?
9. Where are flowcharts commonly used?
10. What are the rules for drawing a flowchart?

---

# Summary

- A flowchart is a graphical representation of an algorithm.
- It uses standard symbols to represent different operations.
- Flowcharts help visualize program logic before coding.
- They simplify debugging, communication, and documentation.
- Every flowchart should have a clear Start, logical flow, and Stop.

---
