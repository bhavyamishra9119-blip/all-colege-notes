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

> 🖼️ **Figure 2: (A) Standard ANSI flowchart symbols and their meanings; (B) Complete worked flowchart computing the**

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