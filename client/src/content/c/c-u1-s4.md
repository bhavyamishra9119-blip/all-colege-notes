> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum


### 2.2 Translators (Compiler, Interpreter, Assembler)

- **Definition:** A language translator is system software that converts human-written source code
(Assembly or High-Level Language) into binary object / machine code executable by the CPU.

- **### 1. Assembler:** Translates Assembly language mnemonics (1-to-1 instruction mapping) into

binary machine code.

- **### 2. Compiler:** Translates the entire high-level source program at once into an independent

machine-code executable file (e.g., GCC for C, G++ for C++). Displays all syntax errors together
after scanning; once compiled, execution is extremely fast without needing the compiler again.

- **### 3. Interpreter:** Translates and executes a high-level program line by line (statement by

statement) without producing a standalone machine-code file (e.g., standard Python, early
BASIC). Stops immediately upon encountering the first syntax error; easier to debug interactively,
but slower at runtime because translation repeats every execution.

### 1. Compiler Workflow (e.g., C via GCC) — Translates Entire File First:

Source (prog.c) Compiler Object (.obj) Linker Executable (.exe)

### 2. Interpreter Workflow (e.g., Python) — Translates & Executes Line-by-Line:

HLL Source (1 line/step) Interpreter (No .exe saved) Immediate Program Output

### 3. Assembler Workflow — Translates Low-Level Assembly Mnemonics to Binary:

Assembly (MOV, ADD) Assembler (1-to-1 Map) Machine Code (010110...)

> 🖼️ **Figure 5: Side-by-side translation pipelines comparing Compiler, Interpreter, and Assembler operation.**


> 📊 **Table 6: Exam Comparison Matrix — Compiler vs. Interpreter vs. Assembler**

Parameter Compiler Interpreter Assembler
Input Source High-Level Language (C,
C++)
High-Level Language
(Python, JS)
Assembly Language
(Mnemonics)
Translation Unit Entire program at once One statement/line at a
time
Whole assembly file (1-to-1)
Object File
Generated
Yes (.obj / .o / .exe) No intermediate object file
saved
Yes (binary machine object
file)
Error Reporting Lists all syntax errors
together after scanning
Stops immediately at the
first error line
Reports mnemonic/syntax
errors in pass
Execution Speed Very fast (already compiled
binary)
Slower (re-translates every
run)
Fastest (direct CPU
instructions)
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C


### 2.3 Features and Applications of C

- **Origin:** Developed by Dennis Ritchie at AT&T Bell Laboratories in 1972 (evolving from BCPL and
B) primarily to build the UNIX Operating System; later standardized by ANSI (C89/C90) and ISO
(C99, C11, C17, C23).
- **Key Features of C:** 

- **### 1. Simple & Compact Core:** Only 32 standard ANSI keywords make the language easy to

master while remaining extraordinarily expressive.

- **### 2. Structured & Modular:** Programs are cleanly divided into reusable functions and structured

blocks (if, for, while).

- **### 3. Middle-Level Power:** Combines high-level abstraction with low-level pointer arithmetic and

direct bit/register control.

- **### 4. High Execution Speed:** Compiles directly into compact native machine code with virtually zero

runtime overhead.

- **### 5. Portability:** Standard C code can be recompiled and run across Windows, Linux, macOS, and

microcontrollers with minimal modification.

### 6. Rich Standard Library & Extensibility: Ships with built-in headers (<stdio.h>, <math.h>,

<string.h>) and lets programmers add custom functions/libraries.

- **### 7. Direct Memory Management:** Supports pointers and dynamic heap allocation (malloc,

free).
- **Major Real-World Applications of C:** 
- **Operating System Kernels:** Core parts of Linux, Windows, macOS, and UNIX are written in
C.
- **Embedded Systems & IoT Firmware:** Microcontrollers in automobiles, medical devices,
routers, and smart appliances.
- **Compilers, Interpreters & Runtimes:** The reference Python interpreter (CPython), Git, and
major compiler backends.
- **Database Management Systems:** High-performance storage engines like MySQL,
PostgreSQL, Oracle, and SQLite.
- **Device Drivers & Graphics Engines:** Hardware drivers, game engines, and high-frequency
scientific simulations.

### 2.4 Structure of a C Program

Six Standard Sections of a Complete C Program (Top to Bottom):

- **### 1. Documentation Section:** Optional comments specifying program title, author, date, and

purpose (/* ... */).

### 2. Link (Preprocessor Include) Section: Links system/user header files via #include

<stdio.h> so library functions like printf are declared.

- **### 3. Definition Section:** Defines symbolic constants and macros via #define PI 3.14159.

- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C


- **### 4. Global Declaration Section:** Declares global variables (accessible across all functions) and

user-defined function prototypes.
5. main() Function Section (Mandatory): Every executable C program MUST have exactly
one main() function—the entry point where execution starts. Inside { ... } sit the
Declaration Part (local variables) and the Executable Part (logic statements + return 0;).

### 6. Subprogram Section (Optional): Definitions of all user-defined helper functions called from

main().

### 1. Documentation Section


### 2. Link Section (#include)


### 3. Definition Section (#define)


### 4. Global Declaration Section

5. main() Function [Mandatory]
(Local Declarations + Executable Code)

### 6. Subprogram Section (Helper Fns)

/* Program: Area of a Circle */
#include <stdio.h>
#define PI 3.14159
float calcArea(float r); // Prototype
int main() { float r = 5.0;
printf("%.2f", calcArea(r)); return 0; }
float calcArea(float r) { return PI*r*r; }

> 🖼️ **Figure 6: Standard six-section structure of a C program mapped directly to a complete working example.**


### 2.5 Syntax and Semantics

- **Syntax (Grammatical Form):** The strict set of structural rules defining how valid C statements,
tokens, punctuation, and symbols must be arranged. Violating syntax causes a compile-time
error and prevents executable generation.
- **Semantics (Logical Meaning):** The exact runtime meaning and computational behavior of a
syntactically valid statement. A statement can follow 100% valid syntax yet be semantically
nonsensical or wrong.

> 📊 **Table 7: Syntax vs. Semantics — Side-by-Side Comparison with Concrete C Examples**

Criterion Syntax Semantics
Core Question "Is this code written in valid C
grammar?"
"What does this code actually mean/do when run?"
Detected By Compiler automatically during
compilation
Programmer via testing, dry runs, or runtime checks
Analogy
(English)
"Cat the mat on sat." (Broken
grammar)
"The square circle drank green music." (Valid grammar,
absurd meaning)
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C