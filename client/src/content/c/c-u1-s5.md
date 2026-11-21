> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

```
┌────────────────────────────────────────────────────────────────────────┐
│                 4-STAGE C COMPILATION PIPELINE                         │
├────────────────────────────────────────────────────────────────────────┤
│  Source Code (.c)                                                      │
│        │                                                               │
│        ▼                                                               │
│  [ PREPROCESSOR ]  ──► Expands #include, #define, strips comments      │
│        │                                                               │
│        ▼ Preprocessed Source (.i)                                      │
│  [ COMPILER ]      ──► Lexical, Syntax & Semantic analysis             │
│        │                                                               │
│        ▼ Assembly Code (.s / .asm)                                     │
│  [ ASSEMBLER ]     ──► Translates mnemonic assembly to relocatable code│
│        │                                                               │
│        ▼ Object Code (.o / .obj)                                       │
│  [ LINKER ]        ──► Links C Runtime (CRT) & Library functions       │
│        │                                                               │
│        ▼                                                               │
│  Executable Binary (.exe / a.out)                                      │
└────────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────────┐
│                  PROCESS VIRTUAL MEMORY LAYOUT                         │
├────────────────────────────────────────────────────────────────────────┤
│ High Memory (0xFFFFFFFF)                                               │
│  ┌─────────────────────────┐                                           │
│  │ Stack Segment           │ ◄── Local variables, function call frames │
│  │ (Grows DOWNWARD ▼)      │                                           │
│  ├─────────────────────────┤                                           │
│  │                         │                                           │
│  │ (Free Unallocated Space)│                                           │
│  │                         │                                           │
│  ├─────────────────────────┤                                           │
│  │ (Grows UPWARD ▲)        │                                           │
│  │ Heap Segment            │ ◄── Dynamic Memory (malloc, calloc, free) │
│  ├─────────────────────────┤                                           │
│  │ BSS Segment             │ ◄── Uninitialized global/static variables │
│  ├─────────────────────────┤                                           │
│  │ Data Segment            │ ◄── Initialized global/static variables   │
│  ├─────────────────────────┤                                           │
│  │ Text / Code Segment     │ ◄── Read-only machine bytecode            │
│  └─────────────────────────┘                                           │
│ Low Memory (0x00000000)                                                │
└────────────────────────────────────────────────────────────────────────┘
```

Criterion Syntax Semantics
C Code
Example
int x = 10 (Missing ; →
Syntax Error)
if x > 5 {} (Missing () →
Syntax Error)
int avg = (a + b) / 0; (Valid syntax, illegal
math)
int avg = a + b / 2; (Valid syntax, wrong
formula meaning)

### 2.6 Memory Layout of a C Program

- **Overview:** When the operating system loads a compiled C program into main memory (RAM) for
execution, its virtual address space is systematically divided into five distinct memory segments
from lowest address to highest address:

- **### 1. Text (Code) Segment:** Stores compiled binary machine instructions of the program. Usually

read-only and shareable across processes so accidental memory writes cannot corrupt
executable code.

### 2. Initialized Data Segment (DS): Stores global and static variables that are explicitly

initialized by the programmer to a non-zero value (e.g., int count = 5; or static float
rate = 2.5;).

### 3. Uninitialized Data Segment (BSS — Block Started by Symbol): Stores global and static

variables that are not explicitly initialized (or initialized to 0). Automatically zero-initialized by
the OS loader before main() begins.

- **### 4. Heap Segment:** Dedicated to dynamic memory allocation at runtime (managed manually by

the programmer via malloc(), calloc(), realloc(), and released via free()). Grows
upward toward higher memory addresses.

- **### 5. Stack Segment:** Follows LIFO (Last-In, First-Out) order. Stores local variables, function

parameters, and return addresses inside stack frames (activation records) created on every
function call and destroyed automatically on return. Grows downward toward lower memory
addresses.
High Address
0xFFFFFFFF
Low Address
0x00000000

### 5. STACK Segment

Grows Downward ↓ (LIFO)
Free Virtual Space

### 4. HEAP Segment

Grows Upward ↑ (Dynamic)

### 3. Uninitialized Data (BSS)


### 2. Initialized Data (DS)


### 1. Text / Code Segment (RO)

- **Stores:** Local variables, params, return addresses
e.g., int a = 10; inside main()
- **Stores:** Runtime dynamic allocations
e.g., malloc(), calloc(), free()
- **Stores:** Global/static uninitialized (= 0) → int g;
- **Stores:** Global/static initialized → int g = 5;
- **Stores:** Compiled binary machine instructions

> 🖼️ **Figure 7: Five-segment virtual memory layout of an executing C program showing opposing Heap and Stack**

growth directions.
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C


### 2.7 Input / Output Functions in C

- **Classification:** Standard C library I/O functions (declared in <stdio.h>) fall into two categories:
Formatted I/O (supports format specifiers to read/display any data type cleanly) and
Unformatted I/O (reads/writes raw characters or strings without format specifiers).

- **### 1. Formatted Output — printf():** 

- **Syntax:** printf("format string", arg1, arg2, ...);
- **Formatting Controls:** Width & precision specifiers control alignment and decimals—e.g.,
%8.2f prints a float right-aligned in an 8-character field with 2 decimal places; %-8d prints an
integer left-aligned.
- **Return Value:** Returns the total number of characters successfully printed (a classic MCQ
exam question!).

- **### 2. Formatted Input — scanf():** 

- **Syntax:** scanf("format string", &var1, &var2, ...);
- **Address-of Operator (&):** Mandatory before primitive variables (&age, &marks) so
scanf() knows the exact RAM address where user input must be stored. (Strings/character
arrays do NOT use &.)
- **Return Value:** Returns the number of input items successfully matched and assigned.

### 3. Unformatted I/O Functions:

Character I/O: getchar() reads a single character from stdin (waits for Enter);
putchar(ch) writes a single character to stdout. (Non-standard console variants getch()
and getche() in <conio.h> read a key without waiting for Enter.)
String I/O: puts(str) prints a string and automatically appends a newline \n; fgets(str,
size, stdin) safely reads a full line including spaces (preferred over legacy gets(), which
was removed in C11 due to buffer-overflow vulnerabilities).

> 📊 **Table 8: Summary Reference of Standard C Input/Output Functions & Common Format Specifiers**

Function Category Data Type Example Usage & Key Note
printf() Formatted
Output
All primary
types
printf("PI = %.2f\n", 3.14159); →
prints PI = 3.14
scanf() Formatted Input All primary
types
scanf("%d %f", &id, &gpa); → &
required for variables
getchar() /
putchar()
Unformatted I/O Single char char c = getchar(); putchar(c); →
buffered single char
fgets() / puts() Unformatted I/O Strings
(char[])
fgets(name, 50, stdin);
puts(name); → reads spaces safely
- **Core Format Specifiers:** %d (int), %u (unsigned int), %ld (long), %f (float), %lf
(double), %c (char), %s (string), %x (hex), %o (octal), %% (literal %).
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C


### 2.8 Indentation and Comments

- **Indentation:** 
- **Definition:** The systematic use of leading spaces (typically 4 spaces) or tabs at the beginning
of lines to visually represent block hierarchy (statements inside main(), if, else, or loops).
- **Compiler vs. Human Role:** C is a free-form language—the compiler ignores indentation and
extra whitespace outside strings. However, proper indentation is essential for readability,
preventing logical errors (like misreading dangling-else pairing), and maintaining team
codebases.
Standard Style (K&R / Allman): Indent every level inside curly braces { ... } consistently
by 4 spaces and align closing braces with the opening header.
- **Comments:** 
- **Definition:** Non-executable explanatory annotations embedded inside source code to
document program logic, formulas, or assumptions. Stripped completely by the
preprocessor/compiler—they consume zero memory and add zero runtime overhead.

- **### 1. Single-Line Comment (C99+):** Starts with // and extends to the end of the current line

(e.g., // Convert Celsius to Fahrenheit).

### 2. Multi-Line (Block) Comment (ANSI C89+): Starts with /* and ends with */; can span

one or many lines.
Critical Exam Rule (No Nesting of Block Comments): C does NOT allow nesting /* ...
*/ inside another /* ... */. Writing /* outer /* inner */ still outer */ causes a
compile error because the first */ immediately closes the entire comment!

> 📝 **Worked Example: Clean Indentation & Proper Commenting Style in C**

/* Program: Compute Simple Interest
- **Author:** B.Tech Unit-I Lab */
#include <stdio.h>
int main() {
float p = 1000.0f, r = 5.0f, t = 2.0f, si;
si = (p * r * t) / 100.0f;      // Formula: SI = (P * R * T) / 100
if (si > 0) {
printf("Simple Interest = %.2f\n", si);
}
return 0;                       // Return 0 indicates successful execution
}
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C