> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

Source Code (`prog.c`) ➔ Preprocessor (`cpp`) ➔ Expanded Code (`prog.i`) ➔ Compiler (`cc1`) ➔ Assembly (`prog.s`) ➔ Assembler (`as`) ➔ Object Code (`prog.o`) ➔ Linker (`ld`) ➔ Executable Binary (`prog.exe`)
<div class="pdf-figure-caption">Figure 1.3: Complete 4-Stage C Compilation Pipeline Architecture</div>

| Memory Segment | Growth Direction | Typical Contents | Access Permissions |
|---|---|---|---|
| **Stack** | Downward (High $\to$ Low) | Function call frames, local variables, return addresses | Read / Write |
| **Memory Mapping / Shared** | Free space | Shared libraries (`libc.so`), `mmap` regions | Read / Write / Execute |
| **Heap** | Upward (Low $\to$ High) | Dynamic allocations (`malloc`, `calloc`, `realloc`) | Read / Write |
| **BSS (Uninitialized Data)** | Fixed | Global &amp; static variables initialized to zero / uninitialized | Read / Write |
| **Data Segment (Initialized)** | Fixed | Global &amp; static variables with explicit initial values | Read / Write |
| **Text Segment (Code)** | Fixed | Read-only compiled machine instructions (`main`, functions) | Read / Execute (Read-Only) |
<div class="pdf-figure-caption">Figure 1.4: Linux / POSIX 32-bit Process Virtual Memory Layout</div>

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



<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 C 4-STAGE COMPILATION PIPELINE & VIRTUAL MEMORY LAYOUT</div>
  <div class="visual-diagram-container">
    <svg width="100%" height="240" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="pipeArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
        </marker>
      </defs>

      <!-- Stage 1 -->
      <rect x="15" y="25" width="115" height="70" rx="6" fill="#f8fafc" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="72" y="45" font-family="Inter, sans-serif" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">Source File</text>
      <text x="72" y="62" font-family="Courier, monospace" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">program.c</text>
      <text x="72" y="80" font-family="Inter, sans-serif" font-size="9" fill="#64748b" text-anchor="middle">C Source Code</text>
      <line x1="130" y1="60" x2="160" y2="60" stroke="#2563eb" stroke-width="2" marker-end="url(#pipeArrow)"/>

      <!-- Stage 2: Preprocessor -->
      <rect x="165" y="25" width="125" height="70" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="227" y="45" font-family="Inter, sans-serif" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">1. Preprocessor</text>
      <text x="227" y="62" font-family="Courier, monospace" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">program.i</text>
      <text x="227" y="80" font-family="Inter, sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Expands #include/#def</text>
      <line x1="290" y1="60" x2="320" y2="60" stroke="#2563eb" stroke-width="2" marker-end="url(#pipeArrow)"/>

      <!-- Stage 3: Compiler -->
      <rect x="325" y="25" width="120" height="70" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="385" y="45" font-family="Inter, sans-serif" font-size="10.5" font-weight="bold" fill="#92400e" text-anchor="middle">2. Compiler</text>
      <text x="385" y="62" font-family="Courier, monospace" font-size="11" font-weight="bold" fill="#d97706" text-anchor="middle">program.s</text>
      <text x="385" y="80" font-family="Inter, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Generates Assembly</text>
      <line x1="445" y1="60" x2="475" y2="60" stroke="#2563eb" stroke-width="2" marker-end="url(#pipeArrow)"/>

      <!-- Stage 4: Assembler -->
      <rect x="480" y="25" width="120" height="70" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="540" y="45" font-family="Inter, sans-serif" font-size="10.5" font-weight="bold" fill="#166534" text-anchor="middle">3. Assembler</text>
      <text x="540" y="62" font-family="Courier, monospace" font-size="11" font-weight="bold" fill="#16a34a" text-anchor="middle">program.o / .obj</text>
      <text x="540" y="80" font-family="Inter, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Relocatable Binary</text>
      <line x1="600" y1="60" x2="630" y2="60" stroke="#2563eb" stroke-width="2" marker-end="url(#pipeArrow)"/>

      <!-- Stage 5: Linker -->
      <rect x="635" y="25" width="110" height="70" rx="6" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
      <text x="690" y="45" font-family="Inter, sans-serif" font-size="10.5" font-weight="bold" fill="#9d174d" text-anchor="middle">4. Linker</text>
      <text x="690" y="62" font-family="Courier, monospace" font-size="11" font-weight="bold" fill="#db2777" text-anchor="middle">a.out / .exe</text>
      <text x="690" y="80" font-family="Inter, sans-serif" font-size="8.5" fill="#831843" text-anchor="middle">Resolves Libs (libc)</text>

      <!-- Bottom Panel: Process Virtual Memory Layout -->
      <rect x="15" y="115" width="730" height="110" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="380" y="133" font-family="Inter, sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Linux / Windows 32-bit Process Memory Architecture</text>
      <!-- Memory segment blocks -->
      <g transform="translate(35, 145)">
        <rect x="0" y="0" width="130" height="45" fill="#e2e8f0" stroke="#475569" stroke-width="1"/>
        <text x="65" y="20" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">Text (Code) Segment</text>
        <text x="65" y="35" font-family="Inter, sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Read-Only Instructions</text>

        <rect x="135" y="0" width="130" height="45" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
        <text x="200" y="20" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">Data &amp; BSS Segments</text>
        <text x="200" y="35" font-family="Inter, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Initialized &amp; Uninit Globals</text>

        <rect x="270" y="0" width="190" height="45" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
        <text x="365" y="20" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">Heap Segment (Grows 🠅)</text>
        <text x="365" y="35" font-family="Inter, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">malloc(), calloc(), free()</text>

        <rect x="465" y="0" width="220" height="45" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
        <text x="575" y="20" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Stack Segment (Grows 🠇)</text>
        <text x="575" y="35" font-family="Inter, sans-serif" font-size="8.5" fill="#991b1b" text-anchor="middle">Stack frames, local vars, ret addr</text>
      </g>
      <text x="380" y="215" font-family="Inter, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Low Memory Addresses (0x00000000) ────────────────────────────────────────── High Memory Addresses (0xFFFFFFFF)</text>
    </svg>
  </div>
</div>

| Feature / Criterion | Compiler (e.g. GCC, Clang) | Interpreter (e.g. Python, Ruby) | Assembler |
| :--- | :--- | :--- | :--- |
| **Input Code** | Entire High-Level Source Code file | High-Level Source Code line-by-line | Assembly Language (`.s`, `.asm`) |
| **Execution Speed** | **Fastest** (Generates standalone machine code) | Slower (Translates during runtime) | Very Fast |
| **Intermediate Object File**| **Yes** (Generates `.o` / `.obj` file) | **No** (Directly interprets & executes) | Yes (Generates `.o` object) |
| **Error Reporting** | Reports all syntax errors together | Halts immediately at the first faulty line | Reports mnemonic syntax errors |
| **Memory Footprint** | Low runtime memory (Pre-compiled) | Requires interpreter engine in RAM | Low runtime memory |


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

---

#### 💻 Working C Code Example: Memory Layout Inspection: Printing Addresses of Text, Data, Heap & Stack

```c
#include <stdio.h>
#include <stdlib.h>

int global_init_var = 100;     // Initialized Data Segment (.data)
int global_uninit_var;         // Uninitialized Data Segment (.bss)

int main() {
    int local_stack_var = 10;  // Stack Segment
    int *heap_var = (int*)malloc(sizeof(int)); // Heap Segment
    *heap_var = 50;

    printf("Address of global_init_var (.data): %p
", (void*)&global_init_var);
    printf("Address of global_uninit_var (.bss): %p
", (void*)&global_uninit_var);
    printf("Address of heap_var       (Heap):   %p
", (void*)heap_var);
    printf("Address of local_stack_var (Stack):  %p
", (void*)&local_stack_var);

    free(heap_var);
    return 0;
}
```

**Console Output:**
```text
Address of global_init_var (.data): 0x7fff502010
Address of global_uninit_var (.bss): 0x7fff502030
Address of heap_var       (Heap):   0x5560124080
Address of local_stack_var (Stack):  0x7ffd98b42c
```

**Walkthrough & Execution Notes:**
Stack grows downward toward lower memory; Heap grows upward toward higher memory.

> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Stack handles automatic local variables with LIFO lifetime.**
- **Uninitialized global and static variables automatically initialize to zero in the .bss segment.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Dereferencing dangling pointers after calling free().**
- **Stack overflow caused by unbounded recursion.**

