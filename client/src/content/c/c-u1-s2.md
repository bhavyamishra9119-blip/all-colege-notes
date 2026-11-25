> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

- **Advantages vs. Limitations:** Easy visual communication and logic verification for small-to-
medium problems, but tedious to draw and difficult to modify for large, complex software systems.
(A) Standard ANSI Flowchart Symbols
Start / Stop Terminal (Oval): Entry & exit point
Read / Print I/O (Parallelogram): Input / Output
x = a + b Process (Rectangle): Computation
- **Cond? Decision (Diamond):** Branching
- **Flowline (Arrow):** Direction of flow
- **A Connector (Circle):** Joins segments
- **(B) Worked Flowchart:** Sum of 1 to N
Start
Read N
sum = 0; i = 1;
i <= N?
Yes
sum += i; i = i + 1;
No
Print sum
Stop



<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 STANDARD ISO FLOWCHART SYMBOLS & GEOMETRIC MEANING</div>
  <div class="visual-diagram-container">
    <svg width="100%" height="220" viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
      <!-- Symbol 1: Terminal (Oval) -->
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="120" height="50" rx="25" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="60" y="25" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">START / STOP</text>
        <text x="60" y="40" font-family="Inter, sans-serif" font-size="9" fill="#1e3a8a" text-anchor="middle">Oval (Terminal)</text>
      </g>
      <!-- Symbol 2: Input / Output (Parallelogram) -->
      <g transform="translate(180, 25)">
        <polygon points="15,0 135,0 120,50 0,50" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="68" y="25" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">INPUT / OUTPUT</text>
        <text x="68" y="40" font-family="Inter, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">Read A / Print B</text>
      </g>
      <!-- Symbol 3: Process (Rectangle) -->
      <g transform="translate(340, 25)">
        <rect x="0" y="0" width="125" height="50" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="62" y="25" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">PROCESS / CALC</text>
        <text x="62" y="40" font-family="Inter, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">sum = a + b</text>
      </g>
      <!-- Symbol 4: Decision (Diamond) -->
      <g transform="translate(495, 15)">
        <polygon points="65,0 130,35 65,70 0,35" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
        <text x="65" y="34" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">DECISION</text>
        <text x="65" y="48" font-family="Inter, sans-serif" font-size="9" fill="#991b1b" text-anchor="middle">is a &gt; b ?</text>
      </g>
      <!-- Symbol 5: Connector (Circle) -->
      <g transform="translate(655, 25)">
        <circle cx="35" cy="25" r="22" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2"/>
        <text x="35" y="28" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#6b21a8" text-anchor="middle">A</text>
        <text x="35" y="62" font-family="Inter, sans-serif" font-size="9" fill="#6b21a8" text-anchor="middle">Connector</text>
      </g>

      <!-- Bottom Guidance Box -->
      <rect x="30" y="105" width="700" height="95" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="50" y="130" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Stepwise Refinement &amp; Flowchart Standards (ISO 5807):</text>
      <text x="60" y="150" font-family="Inter, sans-serif" font-size="10.5" fill="#334155">• Flow Direction: Top-to-bottom and left-to-right; intersecting flow lines should be avoided.</text>
      <text x="60" y="168" font-family="Inter, sans-serif" font-size="10.5" fill="#334155">• Decision Diamonds: Must strictly possess ONE entry line and TWO or THREE designated exit branches (Yes/No, True/False).</text>
      <text x="60" y="186" font-family="Inter, sans-serif" font-size="10.5" fill="#334155">• Connectors: Ensure clarity by preventing cluttered crossing lines across different page segments.</text>
    </svg>
  </div>
</div>


sum of the first N natural numbers.

### 1.6 Writing Pseudocode

- **Definition:** Pseudocode ("false code") is an informal, structured English notation that mimics the
control structures of high-level programming languages (IF, ELSE, WHILE, FOR) without
enforcing strict compiler syntax like semicolons or data-type declarations.
Standard Pseudocode Writing Conventions:

### 1. Write control keywords in UPPERCASE (BEGIN, END, READ, PRINT, IF ... THEN ...

ELSE ... ENDIF, WHILE ... ENDWHILE).

### 2. Write one statement per line and use consistent indentation to visually show nested blocks.


### 3. Focus on algorithmic intent rather than language-specific syntax (no #include, %d, or ;).


> 📝 **Worked Example: Pseudocode for Checking Whether a Number Is Prime**

- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C

BEGIN
READ N
IF N <= 1 THEN
PRINT "Not Prime"
ELSE
SET isPrime = TRUE
FOR i = 2 TO sqrt(N) DO
IF (N MOD i) == 0 THEN
SET isPrime = FALSE
BREAK
ENDIF
ENDFOR
IF isPrime == TRUE THEN PRINT "Prime"
ELSE PRINT "Not Prime"
ENDIF
ENDIF
END

> 📊 **Table 3: Comparison Matrix — Algorithm vs. Flowchart vs. Pseudocode**

Feature Algorithm Flowchart Pseudocode
Representation Numbered plain-English
steps
Standardized geometric
shapes & arrows
Structured code-like English
statements
Ease of
Modification
Moderate Difficult (requires redrawing
boxes)
Very easy (quick text editing)
Visual Clarity Low for nested
loops/branches
Highest for visualizing control
flow
High via indentation and
block keywords
Translation to C
Code
Requires structural
mapping
Direct mapping of
diamonds/loops
Fastest (nearly 1-to-1 with C
code)

### 1.7 Basics of Programming Logic

Structured Program Theorem (Böhm–Jacopini Principle): Any computable algorithm—no
matter how large or complex—can be constructed using combinations of just three fundamental
- **programming logic structures:** 

- **### 1. Sequence Logic:** Statements execute strictly one after another in top-to-bottom order without

skipping or repeating (e.g., read input → compute formula → display result).

### 2. Selection (Decision / Branching) Logic: Evaluates a Boolean condition to choose between

alternative execution paths (e.g., if, if-else, switch).

### 3. Iteration (Repetition / Looping) Logic: Repeats a sequence of statements until a termination

condition becomes False (e.g., for, while, do-while).
- **Key Logic Building Blocks:** Every algorithmic problem relies on core state variables such as
Counters (count = count + 1), Accumulators (sum = sum + x), Flags (found = 0 or 1),
and Sentinel Values (a special marker like -1 signaling end of input).
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C


### 1.8 Stepwise Refinement

- **Definition:** Stepwise refinement (introduced by Niklaus Wirth) is a top-down problem-solving
strategy in which a complex problem is initially written as a small set of high-level abstract tasks,
and each task is repeatedly broken down (refined) into smaller, more concrete sub-steps until
every step can be directly translated into a C statement.
- **Key Benefits:** Reduces cognitive overload, isolates defects to specific sub-modules, encourages
modular functions, and makes large programs easier to verify.

> 📝 **Worked Example — Stepwise Refinement for Computing Class Average Marks:**

- **Level 0 (Goal):** Compute and print the average marks of N students.
- **Level 1 (Major Phases):** (1) Initialize totals → (2) Input all N marks and accumulate sum → (3)
Compute average and display result.
- **Level 2 (Concrete Refinement):** 
- **Refine (1):** Read N; set sum = 0; set i = 1.
- **Refine (2):** While i <= N, read mark, add sum = sum + mark, increment i = i + 1.
- **Refine (3):** If N > 0, compute avg = (float)sum / N and print avg; else print
"Invalid N".
(A) Top-Down Stepwise Refinement (Class Average)
- **L0:** Compute Class Average
- **L1:** Initialize L1: Sum Marks L1: Output Avg
Read N
sum = 0
i = 1
while i<=N:
Read m
sum+=m; i++
if N > 0:
avg = sum/N
Print avg
(B) Three Structured Logic Constructs
Step 1
Step 2
Step 3

### 1. Sequence

C?
T F

### 2. Selection

C?
Body

### 3. Iteration


> 🖼️ **Figure 3: (A) Stepwise refinement decomposing a problem from abstract Goal (L0) to executable steps (L2); (B)**

The three universal structured logic constructs.

### 1.9 Debugging and Testing Strategies

- **Testing vs. Debugging:** 
- **Testing:** The process of executing a program with carefully chosen inputs to verify
correctness and reveal the presence of defects (bugs).
- **Debugging:** The systematic process of locating, diagnosing, and fixing the root cause of a
bug once testing exposes a failure.
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C

---

#### 💻 Working C Code Example: Conditional Decision Making & Largest of Three Numbers

```c
#include <stdio.h>

int main() {
    int n1 = 45, n2 = 82, n3 = 63;
    int largest;

    if (n1 >= n2 && n1 >= n3) {
        largest = n1;
    } else if (n2 >= n1 && n2 >= n3) {
        largest = n2;
    } else {
        largest = n3;
    }

    printf("Numbers: %d, %d, %d
", n1, n2, n3);
    printf("The largest number is: %d
", largest);
    return 0;
}
```

**Console Output:**
```text
Numbers: 45, 82, 63
The largest number is: 82
```

**Walkthrough & Execution Notes:**
Demonstrates two-level relational evaluation and compound logical AND (&&) gating.

> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Every flowchart must have exactly ONE Start terminal and at least ONE Stop/End terminal.**
- **Decision diamonds have exactly 1 incoming flow line and at least 2 outgoing branch lines.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Omitting arrowheads on connecting lines.**
- **Confusing assignment (=) with equality comparison (==) in condition checks.**

