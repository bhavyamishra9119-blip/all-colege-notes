> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

2. register (High-Speed CPU Register Hint)
- **Behavior:** Requests the compiler to keep a heavily used local variable (e.g., loop counter
register int i;) directly inside a fast CPU Register instead of slower RAM.
- **Critical Exam Rule:** Because CPU registers do not have RAM memory addresses, you CANNOT
apply the address-of operator (&i) to a register variable! (If registers are full, compiler
silently falls back to auto.)
3. static (Persistent Memory / Internal Linkage)
- **Local static Variable:** Initialized only ONCE to 0 (or given value) in the Data/BSS segment;
stays local in scope, but retains its modified value across repeated calls to the same function!
Global static Variable / Function: Restricts visibility strictly to the current source file (internal
linkage — hides it from other .c files).
4. extern (External Linkage Across Multiple Files)
- **Behavior:** Declares (without allocating new memory) that a global variable or function is defined
elsewhere (later in the same file or inside another linked .c file), enabling multi-file modular
programs to share global state.
// Demonstrating local static retaining value across calls:
void counter() {
static int count = 0;   // Executed ONLY on first call
count++;
printf("%d ", count);
}
// Calling counter() three times prints: 1 2 3  (auto would print: 1 1 1)
auto (Default)
RAM Stack
- **Init:** Garbage
- **Scope:** Block
Dies at } exit
register
CPU Register
- **Init:** Garbage
- **Scope:** Block
No & operator!
static
Data / BSS Seg.
- **Init:** Zero (0)
- **Scope:** Block/File
Persists All Run
extern
Data / BSS Seg.
- **Init:** Zero (0)
- **Scope:** Multi-File
Global Sharing

> 🖼️ **Figure 6: Hardware Placement, Initialization, Scope, and Lifetime of All Four Storage Classes**

Storage Class Storage Area Default Value Scope (Visibility) Lifetime
auto RAM (Stack) Garbage Local to block Till control stays in block
register CPU Register Garbage Local to block Till control stays in block
static RAM (Data/BSS) Zero (0) Local block (or current file) Entire program execution
extern RAM (Data/BSS) Zero (0) Global across all linked files Entire program execution
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming


- **## PART II:** FUNCTIONS, BUILT-IN STRING FUNCTIONS, RECURSION & MACROS


### 5. Concepts of Library Functions & Built-in String Functions


### 5.1 Standard Library Functions in C

- **Definition:** Pre-written, heavily optimized, compiled functions bundled with every C compiler so
programmers do not reinvent standard I/O, math, or string routines from scratch.
- **How to Use Them:** Include the matching header file at the top of your program using #include
<header.h> (supplies function prototypes) and the linker automatically binds the pre-compiled
machine code.
Header File Purpose Common Built-In Library Functions
<stdio.h> Standard Input / Output printf(), scanf(), fgets(), puts(),
getchar()
<string.h> String & Memory Handling strlen(), strcpy(), strcat(), strcmp(),
strstr()
<math.h> Mathematical
Computations
sqrt(), pow(), fabs(), ceil(), floor(),
sin()
<stdlib.h> Utilities & Memory
Allocation
abs(), rand(), atoi(), exit(), malloc(),
free()
<ctype.h> Character Testing & Case isalpha(), isdigit(), toupper(), tolower()

### 5.2 Built-in String Functions (#include <string.h>)

- **Important Rule:** In C, you cannot assign or compare strings with =, ==, or + (e.g., s1 =
s2; or if (s1 == s2) compares memory addresses, NOT text!). Always use <string.h>
functions or explicit character loops.
Function Syntax Exact Operation Example & Output
strlen(s) Returns number of characters before '\0'
(excludes null)
strlen("Code") → 4
strcpy(dest,
src)
Copies src (including '\0') into dest strcpy(d, "Hi") → d =
"Hi"
strncpy(d, s,
n)
Safer bounded copy of at most n characters Prevents buffer overflow
strcat(dest,
src)
Appends src to the end of dest
(concatenation)
"Hi " + "C" → "Hi C"
strcmp(s1, s2) Compares ASCII codes lexicographically:
0 if equal | < 0 if s1 < s2 | > 0 if s1
> s2
strcmp("abc","abc") == 0
strcmp("ant","bat") < 0
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming

Function Syntax Exact Operation Example & Output
strchr(s, ch) Returns pointer to first occurrence of char ch (or
NULL)
Finds '@' in an email string
strstr(s1,
s2)
Returns pointer to first occurrence of substring s2
in s1
Checks if "cat" is in
"scatter"

- **### 6. User-Defined Functions:** Prototypes, Definition, Calling & Parameter

Passing

### 6.1 The Three Essential Components of a User-Defined Function

1. 1. Function Prototype (Declaration): Placed above main() (ends with a semicolon ;).
Informs the compiler about the function’s return type, name, and parameter data types so it can
verify calls before seeing the full body.
- **Syntax:** return_type function_name(type1 param1, type2 param2);
2. 2. Function Definition (Implementation): Contains the actual function header (no semicolon)
plus the executable block { ... } ending with a return statement (if non-void).
- **3. 3. Function Call (Invocation):** Transfers CPU control from the caller (e.g., main()) to the callee;
once the callee executes return, control resumes immediately at the exact call site.

### 6.2 Four Categories of User-Defined Functions


### 1. No Arguments, No Return Value: void printBanner(void); — self-contained

display/menu tasks.

### 2. Arguments Passed, No Return Value: void displaySum(int a, int b); — caller sends

data, callee prints output directly.

### 3. No Arguments, Returns a Value: int readAge(void); — callee reads/generates a value

and hands it back.

### 4. Arguments Passed, Returns a Value (Most Modular): int add(int a, int b); — pure

reusable computation cleanly decoupled from I/O.

### 6.3 Parameter Types & Parameter Passing Mechanisms

- **Parameter Types:** 
- **Actual Parameters (Arguments):** Real values/variables written inside the function call (e.g.,
sum = add(x, y);).
- **Formal Parameters:** Receiving placeholder variables declared inside the function header
(e.g., int add(int a, int b)).
Mechanism 1 — Call by Value (Default in C):
Copies the values of actual arguments into separate formal parameter variables on the Stack.
Modifying formal parameters inside the function has ZERO effect on the caller’s original
variables (safe against accidental corruption).
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming