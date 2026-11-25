> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

Feature Recursion Iteration (Loops)
Termination
Condition
Base Case (if check) Loop condition becomes false
Memory Usage High — pushes new Stack Frame per call Low — O(1) fixed local variables
Execution Speed Slower (function-call overhead) Faster (no call-stack overhead)
Failure Mode Stack Overflow crash if base case missing Infinite loop (program hangs, no
crash)
Best Used For Trees, Tower of Hanoi, DFS, Divide &
Conquer
Simple linear counting, array loops

### 8. Macros (#define Preprocessor Directives)


### 8.1 What Is a Macro in C?

- **Definition:** A Macro is a named code fragment defined with the #define preprocessor directive.
Before compilation even begins, the C Preprocessor performs pure textual find-and-replace
wherever the macro name appears.
- **Syntax Rule:** Never end a #define line with a semicolon ; — otherwise the semicolon gets
pasted straight into your expressions and causes syntax errors!

### 8.2 Three Standard Categories of Macros


### 1. Object-Like Macros (Symbolic Constants):

- **Example:** #define PI 3.14159 and #define MAX_SIZE 100 — improves readability and
lets you update a constant across an entire file in one line.

### 2. Function-Like Macros (Parameterized Macros):

- **Example:** #define SQUARE(x) ((x) * (x)) and #define MAX(a, b) ((a) > (b) ? (a)
- **:** (b)).
The Parentheses Trap (Classic Exam Question!):
- **WRONG:** #define SQ(x) x * x → SQ(1 + 2) expands blindly to 1 + 2 * 1 + 2 = 5!
- **RIGHT:** #define SQ(x) ((x) * (x)) → SQ(1 + 2) expands safely to ((1 + 2) * (1
+ 2)) = 9!
- **Side-Effect Warning:** Never pass ++ or -- into a macro — SQ(i++) expands to ((i++) *
(i++)), incrementing i twice!

### 3. Predefined Standard C Macros: Automatically supplied by the compiler for logging and

- **debugging:** __FILE__ (current filename), __LINE__ (current line number), __DATE__, and
__TIME__.
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming

Source (.c)
#define PI
Preprocessor
Expands Macros
Compiler
Checks Types
Linker → .exe
Machine Binary
- **Key Fact:** Macros are pure text replacement (Zero call overhead, No type checking!)

> 🖼️ **Figure 9: C Build Pipeline Highlighting Preprocessor Macro Expansion Before Compilation**

Feature Macro (#define) Function
Processing Stage Preprocessor (before compilation) Compiler & Runtime Call Stack
Execution Speed Faster (expanded inline; zero call
overhead)
Slightly slower (stack push/pop
overhead)
Compiled Code Size Larger (body duplicated at every use) Smaller (body stored once in memory)
Type Checking None (works on any type; error-prone) Strict compiler type validation
Debugging &
Recursion
Hard to debug; cannot be recursive Easy to step through; supports
recursion

- **## PART III:** MODULAR PROGRAMMING & PROCEDURE-BASED DESIGN


### 9. Concept of Modularity, Functions & Procedure-Based Design


- **### 9.1 Starting From Scratch:** What Is Modular Programming?

- **Definition:** Modular Programming is a software engineering discipline that breaks a large,
complex problem into small, independent, self-contained, and reusable sub-programs called
Modules (implemented in C as functions and separate .h / .c files).
Core Philosophy (Divide and Conquer): Instead of cramming 2,000 lines of logic into one
gigantic main() function (Monolithic Programming), each logical sub-task becomes its own clean
function that can be written, tested, and debugged in isolation.

### 9.2 Two Golden Quality Metrics of Modularity


### 1. High Cohesion (STRONGLY DESIRED):

Measures how closely related the tasks inside a single module are.
A high-cohesion function performs ONE clear, focused responsibility (e.g.,
calculateGrade() only computes a grade — it does not also read files or print menus).

### 2. Low / Loose Coupling (STRONGLY DESIRED):

Measures how little one module depends on the internal implementation of another module.
Achieved by passing explicit parameters and returning values cleanly instead of relying on
shared global variables.
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming

- **Exam Golden Rule of Modular Design:** Always aim for HIGH COHESION inside each module and
LOW COUPLING between different modules!

### 9.3 Top-Down vs. Bottom-Up Design & Procedure-Based Design in C

Top-Down Design (Stepwise Refinement — Classic C Approach):
Starts with the highest-level problem (main()) and recursively breaks it down into smaller
sub-functions until every leaf function is trivial to code.
- **Bottom-Up Design:** 
Starts by building and testing small low-level reusable utility functions first (e.g., sort(),
validateInput()), then assembles them into larger parent modules.
Procedure-Based (Structured) Design in C:
- **C is a Procedural Language:** software is structured as a coordinated hierarchy of procedures
(functions) that transform data passed to them.
- **Clean Coordinator Pattern:** main() acts like an executive manager — reading clearly like an
outline (inputMarks() → computeAverage() → sortRankList() → printReport()).
Multi-File Modular Structure in Larger C Projects:
- **Header File (math_utils.h):** Public interface holding function prototypes, macros, and
extern declarations.
- **Implementation File (math_utils.c):** Private function definitions and static helper
functions.
- **Driver File (main.c):** Includes "math_utils.h" and orchestrates overall execution.
Five Major Advantages of Modular Programming:

- **### 1. Code Reusability:** Write a well-tested function once and call it across multiple places or future

projects.

- **### 2. Easier Debugging & Testing:** Bugs are isolated inside one small function rather than hidden

across thousands of lines.

- **### 3. Parallel Teamwork:** Different engineers can build separate modules simultaneously without

stepping on each other’s code.

### 4. Better Readability & Maintenance: Updating one business rule requires editing only one

module.

- **### 5. Information Hiding:** Callers only need to know what a function takes and returns, not its

internal mechanics.
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming

---

#### 💻 Working C Code Example: Recursion: Stack Unwinding & Fibonacci Sequence

```c
#include <stdio.h>

int fib(int n) {
    if (n <= 1) return n; // Base case
    return fib(n - 1) + fib(n - 2); // Recursive step
}

int main() {
    printf("First 7 Fibonacci Numbers: ");
    for (int i = 0; i < 7; i++) {
        printf("%d ", fib(i));
    }
    printf("\n");
    return 0;
}
```

**Console Output:**
```text
First 7 Fibonacci Numbers: 0 1 1 2 3 5 8
```


> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Every recursive function must have at least one base case.**
- **Each recursive call allocates a new stack frame on the call stack.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Missing base condition causing stack overflow crashes.**
- **Exponential O(2^n) time complexity for naive tree recursion.**

