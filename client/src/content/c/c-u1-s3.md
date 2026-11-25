> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

Four Categories of Programming Errors:

### 1. Syntax Errors (Compile-Time): Violations of C grammar rules (e.g., missing semicolon ;,

misspelled keyword pritnf, unmatched braces). Caught immediately by the compiler.

- **### 2. Linker Errors:** Occur when the compiler accepts the code, but the linker cannot locate a

referenced function definition (e.g., typing Main() instead of main(), or omitting -lm for
<math.h> on Linux GCC).

### 3. Runtime Errors (Execution-Time): Program compiles cleanly but crashes during execution

(e.g., division by zero 10 / 0, out-of-bounds memory access, stack overflow from infinite
recursion).

- **### 4. Logical (Semantic) Errors:** Hardest to detect—the program runs to completion without

crashing, but produces the wrong answer due to flawed reasoning (e.g., writing area = r *
r; forgetting 3.14159, or using < instead of <=).
- **Core Testing Strategies:** 
- **Black-Box Testing (Functional):** Tests outputs solely against specifications without looking at
internal source code. Includes Equivalence Partitioning and Boundary Value Analysis (testing
edge values like 0, -1, MAX, empty inputs).
- **White-Box Testing (Structural):** Examines internal code paths to ensure every branch
(if/else) and loop condition is executed (statement & branch coverage).
- **Testing Levels (Bottom-Up):** Unit Testing (individual functions) → Integration Testing
(connected modules) → System Testing (complete application) → Acceptance Testing (end-
user validation).
- **Core Debugging Techniques:** 
Trace / Print Debugging: Inserting temporary printf() statements to inspect variable
values at checkpoints.
Interactive Debugger (e.g., GDB / VS Code): Setting breakpoints, stepping line-by-line (Step
Over / Step Into), and watching live variable memory.
Backtracking & Binary Search Debugging: Tracing backward from the wrong output or
isolating code halves to pinpoint the faulty line rapidly.

### 1.10 Introduction to Time and Space Complexity

Why Measure Complexity? Actual wall-clock execution time depends on CPU speed, compiler
flags, and OS load. Algorithmic complexity expresses resource growth strictly as a
mathematical function of input size n, independent of hardware.
- **Time Complexity T(n):** Measures the number of elementary operations executed by an algorithm
as input size n grows.
- **Space Complexity S(n):** Measures total memory required during execution: S(n) = Fixed Part
(code, constants) + Variable / Auxiliary Space (dynamic arrays, recursion stack).
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C

Three Analysis Cases & Asymptotic Notations:

### 1. Big-O Notation — O(g(n)) [Upper Bound / Worst Case]: Guarantees the algorithm will never

take worse than c · g(n) time for large n. Most widely used in exams and industry.

### 2. Big-Omega Notation — Ω(g(n)) [Lower Bound / Best Case]: Represents the minimum time

required under the most favorable input (e.g., finding a key at index 0 in Linear Search →
Ω(1)).

### 3. Big-Theta Notation — Θ(g(n)) [Tight Bound / Exact Order]: Used when upper and lower

bounds grow at the exact same rate.
Asymptotic Growth Order (Fastest →  Slowest):  O(1) < O(log n) < O(n) < O(n log n) < O(n2) <
O(n3) < O(2n) < O(n!)
Input Size (n) →
Operations / Time T(n) →
O(2^n) O(n²)
O(n log n)
O(n)
O(log n)
O(1)
Efficiency Rating
- **O(1):** Constant (Best)
- **O(log n):** Binary Search
- **O(n):** Single Loop
- **O(n log n):** Merge Sort
- **O(n²):** Nested Loops
- **O(2^n):** Exponential
(Drop constants & lower terms)



<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 ALGORITHM FLOWCHART: FINDING THE LARGEST OF THREE NUMBERS (A, B, C)</div>
  <div class="visual-diagram-container">
    <svg width="100%" height="240" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowC" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
        </marker>
      </defs>
      
      <!-- Start -->
      <rect x="330" y="10" width="100" height="30" rx="15" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="380" y="30" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">START</text>
      <line x1="380" y1="40" x2="380" y2="55" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowC)"/>

      <!-- Input -->
      <polygon points="310,55 450,55 440,85 300,85" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="375" y="73" font-family="Inter, sans-serif" font-size="10.5" font-weight="bold" fill="#92400e" text-anchor="middle">Read A, B, C</text>
      <line x1="375" y1="85" x2="375" y2="100" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowC)"/>

      <!-- Diamond 1: A > B -->
      <polygon points="375,100 440,125 375,150 310,125" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="375" y="129" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Is A &gt; B ?</text>

      <!-- Branch A > B YES -> Diamond 2: A > C -->
      <line x1="310" y1="125" x2="200" y2="125" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowC)"/>
      <text x="260" y="118" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#16a34a">YES</text>
      <polygon points="200,105 260,125 200,145 140,125" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="200" y="129" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#991b1b" text-anchor="middle">Is A &gt; C ?</text>

      <!-- Print A / Print C -->
      <line x1="140" y1="125" x2="90" y2="125" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrowC)"/>
      <text x="115" y="118" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#16a34a">YES</text>
      <rect x="20" y="110" width="70" height="30" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="55" y="129" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">Print A</text>

      <!-- Branch A > B NO -> Diamond 3: B > C -->
      <line x1="440" y1="125" x2="550" y2="125" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowC)"/>
      <text x="490" y="118" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#dc2626">NO</text>
      <polygon points="550,105 610,125 550,145 490,125" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="550" y="129" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#991b1b" text-anchor="middle">Is B &gt; C ?</text>

      <!-- Print B / Print C -->
      <line x1="610" y1="125" x2="660" y2="125" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrowC)"/>
      <text x="635" y="118" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#16a34a">YES</text>
      <rect x="660" y="110" width="70" height="30" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="695" y="129" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">Print B</text>

      <!-- Stop at bottom -->
      <rect x="330" y="195" width="100" height="30" rx="15" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="380" y="215" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">STOP</text>
      <!-- Connecting lines to stop -->
      <line x1="55" y1="140" x2="55" y2="210" stroke="#64748b" stroke-width="1.5"/>
      <line x1="55" y1="210" x2="330" y2="210" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrowC)"/>
      <line x1="695" y1="140" x2="695" y2="210" stroke="#64748b" stroke-width="1.5"/>
      <line x1="695" y1="210" x2="430" y2="210" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrowC)"/>
    </svg>
  </div>
</div>

| Attribute | Algorithm | Flowchart | Pseudocode |
| :--- | :--- | :--- | :--- |
| **Format** | Numbered natural language steps (English) | Visual geometric diagram with flowlines | Text-based structured informal programming syntax |
| **Standardization** | Informal (Finiteness, Definiteness, Input, Output) | Strictly standardized via ISO / ANSI symbols | Loosely follows Pascal / C control structures |
| **Debugging Ease** | Moderate (Requires mental execution) | **High** (Visual path tracking exposes logic loops) | High (Close to code structure) |
| **Modification Cost**| Easy to edit or reorder text | Tedious (Requires redrawing shapes & connections)| Very easy to edit |


standard Big-O complexity classes.
Worked Step-by-Step Complexity Derivations
- **Derivation 1 — Constant Time O(1):** int sum = n * (n + 1) / 2; → Executes 3 arithmetic
steps regardless of whether n = 10 or n = 109 → Time: O(1), Space: O(1).
- **Derivation 2 — Linear Time O(n):** Single loop for (i = 1; i <= n; i++) sum += i; →
Loop body executes exactly n times; T(n) = c1n + c2 → dropping constants gives Time: O(n),
- **Space:** O(1).
Derivation 3 — Logarithmic Time O(log2 n): Loop halving/doubling: for (i = 1; i < n; i =
i * 2) → After k iterations, 2k = n ⇒  k = log2 n → Time: O(log n).
Derivation 4 — Quadratic Time O(n2): Nested loops for (i=0; i<n; i++) for (j=0; j<n;
j++) → Inner body runs n × n = n2 times → Time: O(n2). Even a triangular loop (j <= i)
executes n(n+1)/2 = (n2 + n)/2 times, which drops lower-order terms and constants to
remain O(n2).
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C


### 1.11 Basic Input / Output (I/O) Operations

- **The IPO Model:** Every computing task follows the three-stage Input → Process → Output
- **pipeline:** external data enters via an input device (keyboard, file), the CPU transforms it in RAM,
and results leave via an output device (monitor, file).
Three Standard I/O Streams in C (Opened Automatically by OS):
- **1. stdin (Standard Input):** Default input stream connected to the keyboard.
- **2. stdout (Standard Output):** Default buffered output stream connected to the display
screen/console.
- **3. stderr (Standard Error):** Unbuffered output stream reserved for immediate error diagnostics.
Key Concept — I/O Buffering: Keyboard characters first wait inside a temporary memory area
called an input buffer until the user presses Enter (\n). Leftover newline characters in the buffer
can accidentally be consumed by subsequent character reads (solved by placing a leading space
in scanf(" %c", &ch)).

### 1.12 Tracing and Dry Run of Code

- **Definition:** A dry run (manual code tracing) is the process of executing a program or algorithm by
hand on paper, line by line, using a trace table to record the exact value of every variable and
condition after each step—without using a computer.
- **Why Dry Running Is Critical:** Catches off-by-one loop errors, uninitialized variables, integer
division mistakes, and infinite loops before compilation; also the standard method for solving
university "predict the output" questions.

> 📝 **Worked Example: Dry Run of a Digit-Sum C Code Snippet (Input: n = 472)**

int n = 472, sum = 0, d;
while (n > 0) {
d = n % 10;       // Extract rightmost digit
sum = sum + d;    // Add digit to accumulator
n = n / 10;       // Drop rightmost digit (integer division)
}
printf("Sum = %d", sum);

> 📊 **Table 4: Manual Trace Table (Dry Run) for n = 472**

Iteration Condition (n > 0) d = n % 10 sum = sum + d n = n / 10
Initial — garbage 0 472
Pass 1 472 > 0 (True) 2 0 + 2 = 2 47
Pass 2 47 > 0 (True) 7 2 + 7 = 9 4
Pass 3 4 > 0 (True) 4 9 + 4 = 13 0
Pass 4 0 > 0 (False) Loop terminates → Final Output: Sum = 13
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C


### 2. Introduction to C Programming


### 2.1 Computer Languages (Low-Level & High-Level)

- **Definition:** A computer programming language is a formal notation of vocabulary and grammar
rules used to write instructions that a computer can execute.

### 1. Low-Level Languages (Machine-Oriented): Close to the physical hardware architecture; fast

execution but hard for humans to write and machine-dependent (not portable across different
CPUs).
Machine Language (1st Generation — 1GL): Written purely in binary strings of 0s and 1s
(e.g., 10110000 01100001). Directly understood by the CPU without any translator, ultra-fast,
but extremely error-prone to write or debug.
Assembly Language (2nd Generation — 2GL): Replaces raw binary opcodes with short
symbolic abbreviations called mnemonics (e.g., MOV AX, 5; ADD AX, BX). Requires an
Assembler to convert into machine code.

### 2. High-Level Languages (3rd Generation — 3GL, Problem-Oriented): Written using human-

readable English keywords and mathematical notation (e.g., C, C++, Java, Python). Machine-
independent (portable), easy to learn and maintain, but require a Compiler or Interpreter to
translate into machine code.
Why C Is Called a "Middle-Level Language": C uniquely bridges both worlds—it provides high-
level structured control constructs (functions, loops, data types) while also permitting low-level
hardware operations (bitwise manipulation, direct memory addressing via pointers, inline
assembly).

> 📊 **Table 5: Comparison Matrix — Machine Language vs. Assembly Language vs. High-Level Language**

Feature
Machine Language
(1GL) Assembly Language (2GL) High-Level Language (3GL)
Code Format Binary digits (0s and
1s)
Symbolic mnemonics (MOV,
ADD)
English keywords & math
expressions
Translator
Needed
None (native to CPU) Assembler Compiler or Interpreter
Portability Zero (CPU-specific) Zero (CPU-specific) High (portable across platforms)
Execution Speed Fastest possible Very fast Fast (compiled) to moderate
(interpreted)
Ease of
Debugging
Extremely difficult Difficult Easy and programmer-friendly
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C

---

#### 💻 Working C Code Example: Time Complexity Demonstration: Linear Search vs Constant Access

```c
#include <stdio.h>

int linear_search(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) return i; // O(n) worst case
    }
    return -1;
}

int main() {
    int data[] = {12, 34, 54, 2, 93, 77};
    int n = sizeof(data) / sizeof(data[0]);
    int key = 93;

    int idx = linear_search(data, n, key);
    if (idx != -1)
        printf("Key %d found at index %d (Linear Time O(n))
", key, idx);
    else
        printf("Key %d not found.
", key);

    return 0;
}
```

**Console Output:**
```text
Key 93 found at index 4 (Linear Time O(n))
```

**Walkthrough & Execution Notes:**
Linear traversal requires n comparisons in worst case. Space complexity is O(1) auxiliary.

> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Big-O notation describes the asymptotic upper bound of execution time as input size n grows.**
- **O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n).**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Confusing Time Complexity (operation count) with clock-time in seconds.**
- **Assuming faster hardware changes the Big-O complexity class.**

