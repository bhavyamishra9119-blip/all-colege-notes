> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum


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


### 3. High-Yield Quick-Revision Cheat Sheet


### 3.1 Essential Rules, Formulas & Fast-Recall Summary

- **5 Algorithm Properties (F-D-I-O-E):** Finiteness, Definiteness, Input (≥ 0), Output (≥ 1),
Effectiveness.
- **3 Universal Logic Structures:** Sequence (top-down), Selection (branching), Iteration (looping).
- **De Morgan's Laws:** !(A && B) == (!A || !B) and !(A || B) == (!A && !B).
- **Big-O Growth Order:** O(1) < O(log n) < O(n) < O(n log n) < O(n2) < O(2n) < O(n!).
Always drop leading constants and lower-order terms (e.g., 3n2 + 7n + 20 → O(n2)).
- **5 Memory Segments (Low → High RAM):** Text/Code (instructions) → Initialized Data
(global/static ≠ 0) → BSS (global/static = 0) → Heap ↑ (malloc) → ↓ Stack (local vars & calls).
- **Translators Quick Key:** Assembler (Assembly → Machine); Compiler (Whole HLL →
Object/Exe, fast run); Interpreter (Line-by-line HLL → Direct execution, stops at 1st error).
- **C History Anchor:** Created by Dennis Ritchie at Bell Labs in 1972; middle-level, case-sensitive,
free-form, compiled language with 32 ANSI keywords.

> 📊 **Table 9: Top 10 Unit-I University Exam Traps & Common Mistakes to Avoid**

#
Common Mistake / Exam
Trap Why It Is Wrong Correct Approach
1 Omitting & in
scanf("%d", n);
scanf receives garbage value
instead of address → runtime crash!
- **Always pass address:** 
scanf("%d", &n);
2 Nesting block comments /*
a /* b */ c */
First */ prematurely terminates
comment → syntax error on c */.
Never nest /* */; use //
inside blocks if needed.
3 Confusing Syntax and
Logical errors
Compiler catches syntax errors ONLY;
logical errors still produce an
executable.
Identify grammar errors as Syntax;
wrong output as Logical.
4 Thinking indentation affects C
execution
C is free-form; braces { }—not
spaces—define code blocks.
Use both proper indentation AND
explicit braces { }.
5 Putting a semicolon after
#include <stdio.h>;
Preprocessor directives are NOT C
statements; trailing ; causes errors.
Write #include <stdio.h>
with no semicolon.
6 Drawing rectangles for
Input/Output in flowcharts
Rectangles represent Processing only;
I/O requires a slanted shape.
Use a Parallelogram for
Read/Print and Diamond for
decisions.
7 Saying n(n+1)/2 has time
complexity O(n)
Expanding gives (n2 + n)/2;
dominant term is n2!
Triangular nested loops always
run in O(n2).
8 Mixing up Stack and Heap
storage
Local variables live on Stack (auto-
freed); malloc lives on Heap
(manual).
- **Remember:** Stack = Local/Calls
↓, Heap = Dynamic ↑.
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C

#
Common Mistake / Exam
Trap Why It Is Wrong Correct Approach
9 Claiming scanf("%s",
str) reads full sentences
%s stops reading at the very first
whitespace/space character.
Use fgets(str,
sizeof(str), stdin) for
multi-word lines.
10 Writing void main() in
standard exams
ISO C standard mandates int
main(void) returning 0 to OS.
Always write int main() {
... return 0; }.
Exam Presentation Checklist (Unit-I Full-Marks Strategy)
Algorithm / Flowchart Questions: Always pair every flowchart with numbered algorithm steps, label
Yes/No on every decision diamond, and include explicit Start and Stop ovals.
- **Architecture & Theory Questions:** For Memory Layout, Structure of a C Program, or Compiler vs.
Interpreter, always draw the labeled vertical/block diagram first—examiners award immediate
structural credit before reading the bullet points.
- **Complexity & Dry-Run Questions:** Show the exact loop-count equation before simplifying to Big-O,
and use a neat column-wise trace table for every dry run.
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C

---

#### 💻 Working C Code Example: Step-by-Step Tracing & Dry-Run Variable Table

```c
#include <stdio.h>

int main() {
    int n = 5;
    long long fact = 1;

    printf("Dry-Run Trace for Factorial(%d):
", n);
    for (int i = 1; i <= n; i++) {
        fact *= i;
        printf("  Iteration %d: i = %d, fact = %lld
", i, i, fact);
    }

    printf("Final Result: %d! = %lld
", n, fact);
    return 0;
}
```

**Console Output:**
```text
Dry-Run Trace for Factorial(5):
  Iteration 1: i = 1, fact = 1
  Iteration 2: i = 2, fact = 2
  Iteration 3: i = 3, fact = 6
  Iteration 4: i = 4, fact = 24
  Iteration 5: i = 5, fact = 120
Final Result: 5! = 120
```

**Walkthrough & Execution Notes:**
Manual dry-run tracking confirms loop invariants and termination state.

> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Dry runs catch off-by-one boundary errors (< vs <=) prior to machine compilation.**
- **Tracing tables must include loop counter, condition outcome, and all updated accumulators.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Failure to initialize accumulator variables (e.g. sum=0, fact=1).**
- **Incrementing loop counters inside the body when already specified in the for header.**

