> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

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

main() — Coordinator Module
1. inputData() 2. processMarks() 3. displayReport()
calcAverage() assignGrade() sortByRank()
- **Top-Down Procedure-Based Design:** High Cohesion + Low Coupling

> 🖼️ **Figure 10: Top-Down Modular Hierarchy Chart in Procedure-Based C Programming**

Dimension Monolithic Programming Modular (Procedure-Based) Programming
Code Structure Single huge main() block Decomposed into focused, reusable
functions/files
Reusability Poor (copy-paste code duplication) High (call the same function anywhere)
Debugging &
Testing
Difficult to trace errors across long
code
Fast unit testing of isolated modules
Team Collaboration Only 1 programmer can edit easily Multiple programmers build separate modules

### 10. Quick Exam-Revision Cheat Sheet (Unit–3 C Programming Summary)

Syllabus Topic Must-Memorize Syntax /
Rule
Common Exam Trap to Avoid
1D & 2D Arrays Addr(A[i]) = Base +
i×size;
2D C storage = Row-Major
Order
Valid indices are 0 to N-1; column count is mandatory
in 2D arrays!
Searching &
Sorting
- **Linear:** O(n) | Binary: O(log
n);
Bubble / Selection /
- **Insertion:** O(n2)
Binary Search fails silently on unsorted arrays; Selection
Sort uses ≤ n−1 swaps.
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming

Syllabus Topic Must-Memorize Syntax / Rule Common Exam Trap to Avoid
Strings & Storage Null-terminated char array
('\0');
- **Safe input:** fgets(s, n,
stdin)
Always reserve length + 1 bytes; never use ==
to compare two strings!
Storage Classes auto, register (Garbage);
static, extern (Default 0)
Never apply & to a register variable; local
static initializes only once.
Built-in
<string.h>
strlen, strcpy, strcat,
strcmp, strstr
strcmp(a, b) == 0 means strings are
EQUAL (not 1!).
Functions &
Passing
Prototype → Call → Definition;
Call by Value vs. Reference (& &
*)
Call by Value never swaps originals; arrays decay
to pointers automatically.
Recursion Base Case + Recursive Step;
LIFO Call Stack (Winding &
Unwinding)
Forgetting the Base Case causes a Stack
Overflow crash!
Macros
(#define)
#define SQ(x) ((x)*(x));
Expanded by Preprocessor before
compile
No trailing semicolon ;; always wrap macro
arguments in parentheses!
Modular Design High Cohesion + Low Coupling;
Top-Down vs. Bottom-Up
procedure design
Avoid global variables between modules; pass
data via parameters & return values.
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming