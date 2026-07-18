# Program Execution Process

## Introduction

Writing a program is only the beginning of the software development process. After the source code has been compiled (or interpreted), the computer must execute the program.

Program execution is the process by which the operating system loads a program into memory and the CPU executes its instructions one by one until the program finishes.

Understanding the program execution process helps developers understand how software interacts with the operating system, memory, and CPU.

---

# Definition

The **Program Execution Process** is the sequence of steps through which a computer loads a program into memory, executes its instructions, and produces the desired output.

---

# Why Do We Need Program Execution?

Program execution allows the computer to:

- Run software
- Perform calculations
- Process user input
- Generate output
- Access memory
- Communicate with hardware

Without execution, a program is simply a file stored on a storage device.

---

# Complete Program Execution Process

```text
Source Code
      │
      ▼
Compilation / Interpretation
      │
      ▼
Executable Program
      │
      ▼
Operating System
      │
      ▼
Loader
      │
      ▼
RAM (Main Memory)
      │
      ▼
CPU Execution
      │
      ▼
Program Output
```

---

# Step 1: Write Source Code

The programmer writes the source code.

Example:

```c
#include <stdio.h>

int main()
{
    printf("Hello, World!");
    return 0;
}
```

---

# Step 2: Compile or Interpret

Depending on the language:

- Compiled languages produce an executable file.
- Interpreted languages execute through an interpreter.

Examples:

Compiled:

- C
- C++
- Rust

Interpreted:

- JavaScript
- Python

---

# Step 3: Create Executable File

After successful compilation, an executable file is generated.

Examples:

Windows

```text
program.exe
```

Linux

```text
a.out
```

---

# Step 4: User Starts the Program

The user launches the program by:

- Double-clicking it
- Running it from the terminal
- Clicking a button
- Starting a web application

Example:

```text
./program
```

---

# Step 5: Operating System Receives the Request

The operating system:

- Verifies the executable
- Creates a new process
- Allocates required resources
- Starts the loader

---

# Step 6: Loader Loads the Program

The loader:

- Loads executable into RAM
- Loads required libraries
- Creates memory sections
- Initializes the program
- Transfers control to the CPU

---

# Program Memory Layout

A running program is divided into different memory sections.

```text
+----------------------+
|       Stack          |
+----------------------+
|        Heap          |
+----------------------+
| Initialized Data     |
+----------------------+
| Uninitialized Data   |
+----------------------+
| Code (Text Segment)  |
+----------------------+
```

---

# Code (Text Segment)

Contains:

- Machine instructions
- Read-only program code

---

# Data Segment

Contains initialized global and static variables.

Example:

```c
int count = 100;
```

---

# BSS Segment

Contains uninitialized global and static variables.

Example:

```c
int total;
```

---

# Heap

Stores dynamically allocated memory.

Example:

- Objects
- Dynamic arrays

The heap grows upward.

---

# Stack

Stores:

- Local variables
- Function parameters
- Return addresses

The stack grows downward.

---

# Step 7: CPU Begins Execution

The CPU starts executing instructions from the program's entry point.

Usually:

```text
main()
```

or the runtime entry point that eventually calls `main()`.

---

# CPU Execution Cycle

The CPU continuously performs three operations.

```text
Fetch
   │
   ▼
Decode
   │
   ▼
Execute
```

This cycle repeats until the program ends.

---

# Fetch

The CPU retrieves the next instruction from memory.

---

# Decode

The CPU determines what operation the instruction represents.

Examples:

- Add
- Move
- Jump
- Compare

---

# Execute

The CPU performs the requested operation.

Examples:

- Addition
- Memory access
- Function call
- Printing output

---

# Step 8: Input and Output

During execution, the program may interact with the user.

Input:

- Keyboard
- Mouse
- File
- Network

Output:

- Monitor
- Printer
- File
- Network

---

# Step 9: Program Termination

When execution finishes:

- Memory is released.
- Open files are closed.
- Resources are freed.
- The process is removed from memory.
- Control returns to the operating system.

---

# Complete Execution Flow

```text
Programmer
      │
      ▼
Source Code
      │
      ▼
Compiler / Interpreter
      │
      ▼
Executable
      │
      ▼
Operating System
      │
      ▼
Loader
      │
      ▼
RAM
      │
      ▼
CPU
      │
      ▼
Fetch
      │
      ▼
Decode
      │
      ▼
Execute
      │
      ▼
Output
      │
      ▼
Program Ends
```

---

# Real-World Example

Suppose you open a calculator application.

1. Click the Calculator icon.
2. The operating system creates a process.
3. The executable is loaded into RAM.
4. The CPU starts executing instructions.
5. You enter numbers.
6. The CPU performs calculations.
7. The result is displayed.
8. Closing the calculator releases all allocated resources.

---

# Program vs Process

| Program | Process |
|----------|---------|
| Stored on disk | Running in memory |
| Passive | Active |
| Static | Dynamic |
| File | Executing instance |

---

# Process States

A process may move through different states.

```text
New
 │
 ▼
Ready
 │
 ▼
Running
 │
 ├──────────────┐
 ▼              │
Waiting         │
 │              │
 └──────► Ready │
                ▼
           Terminated
```

---

# Advantages of Understanding Program Execution

- Better debugging
- Improved performance optimization
- Easier memory management
- Understanding process behavior
- Better system programming knowledge

---

# Best Practices

- Write efficient code.
- Release resources properly.
- Avoid memory leaks.
- Understand stack and heap usage.
- Handle errors gracefully.

---

# Common Mistakes

- Confusing a program with a process.
- Assuming execution starts directly at `main()`.
- Ignoring memory management.
- Forgetting to release allocated resources.
- Believing the CPU executes source code directly.

---

# Interview Questions

1. What is program execution?
2. What happens when a program starts?
3. What is the role of the operating system during execution?
4. What does the loader do?
5. What are the memory segments of a program?
6. What is the Fetch-Decode-Execute cycle?
7. What is the difference between a program and a process?
8. What is stored in the stack?
9. What is stored in the heap?
10. What happens when a program terminates?

---

# Summary

- Program execution begins after a program is compiled or interpreted.
- The operating system loads the executable into memory and creates a process.
- The CPU executes instructions using the **Fetch–Decode–Execute** cycle.
- During execution, the program uses memory segments such as the **Code**, **Data**, **BSS**, **Heap**, and **Stack**.
- After execution completes, the operating system releases all allocated resources.

---

# Next Topic

**0020_errors_in_programming**