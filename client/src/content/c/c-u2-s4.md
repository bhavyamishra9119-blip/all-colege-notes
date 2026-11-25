> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum

- **Syntax:** 
switch (integral_expression) {
- **case constant_1:** 
// statements
break;
- **case constant_2:** 
// statements
break;
- **default:** 
// executed if no case matches (optional)
}
Strict Rules of switch in C (High-Yield Exam Questions):

- **### 1. Integral Expression Only:** The switch expression MUST evaluate to an int, char, or

short/long integer. float, double, and strings are strictly illegal.

- **### 2. Constant Case Labels:** Every case label must be a compile-time constant expression (e.g.,

- **case 1:** , case 'A':, case 2+3:). Variables (case x:) and relational expressions (case
x > 5:) are illegal.

- **### 3. Unique Case Values:** No two case labels inside the same switch can have duplicate

values.

- **### 4. Fall-Through Mechanism:** If break; is omitted at the end of a matched case, execution

falls through and sequentially executes all subsequent case bodies (and even default)
without checking their labels until a break or } is hit. This can be intentionally used to group
- **cases (e.g., case 'a':** case 'e': case 'i': case 'o': case 'u':).
- **5. default Placement:** The default clause is optional and can appear anywhere inside the
switch (conventionally at the bottom). If placed above other cases, it also requires a break;
to prevent fall-through.
switch (expr)
int / char value
- **case c1:** Statements 1 + break;
- **case c2:** Statements 2 (no break)
Fall-Through!
- **case c3:** Statements 3 + break;
- **default:** Default Statements
Exit
switch

> 🖼️ **Figure 5: Execution flow of switch-case showing direct case jump, normal exit via break, and dashed fall-**

through when break is omitted.
- **Worked Program:** Menu-Driven Arithmetic Calculator Using switch
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

#include <stdio.h>
int main() {
char op;
double a, b;
printf("Enter operator (+, -, *, /) and two numbers: ");
scanf(" %c %lf %lf", &op, &a, &b);
switch (op) {
- **case '+':** printf("Result = %.2lf\n", a + b); break;
- **case '-':** printf("Result = %.2lf\n", a - b); break;
- **case '*':** printf("Result = %.2lf\n", a * b); break;
case '/':
if (b != 0) printf("Result = %.2lf\n", a / b);
- **else        printf("Error:** Division by zero!\n");
break;
- **default:** printf("Invalid operator!\n");
}
return 0;
}

> 📊 **Table 9: Comparison Matrix — if-else-if Ladder vs. switch Statement**

Comparison
Criterion if-else-if Ladder switch Statement
Supported Data
Types
All types (int, float, double,
char, pointers)
Only integral types (int, char, short,
long)
Condition Types Supports ranges (x > 10), logical (&&,
||), variables
Tests ONLY exact equality against compile-
time constants
Execution Speed Evaluates conditions sequentially top-to-
bottom (O(n))
Often compiled into a jump table for fast
direct dispatch (O(1))
Fall-Through
Behavior
No fall-through; only one matched branch
runs
Falls through to next case unless stopped by
break;
Readability Best for complex boolean logic and
continuous ranges
Best for clean discrete menus and single-
variable state checks

### 2.5 Nesting of Decision Control Structures

- **Definition:** Placing one decision control structure (an if, if-else, or switch) completely
inside the body of another decision control structure is called nesting.
- **Why Nesting Is Used:** Required when a secondary condition should be tested only if a primary
(outer) condition has already been satisfied (hierarchical decision making).
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

- **Nested if-else Structure:** 
if (outer_condition) {
if (inner_condition) {
// Executed when BOTH outer and inner are True
} else {
// Executed when outer is True, inner is False
}
} else {
// Executed when outer is False
}
The Dangling-else Problem (Classic University Exam Question):
When braces are omitted in if (c1) if (c2) stmtA; else stmtB;, which if does the
else belong to?
- **C Language Rule:** An else always binds to the nearest unmatched preceding if within
the same block (here, if (c2)), regardless of indentation!
- **Solution:** Always enclose nested blocks in explicit curly braces { } to make pairing
unambiguous.
- **Nested switch Statement:** A switch can appear inside a case of an outer switch. Note that
a break; inside the inner switch exits only the inner switch, not the outer switch.
a >= b ?
True
a >= c ?
T
Max = a
F
Max = c
False
b >= c ?
T
Max = b
F
Max = c
Print Maximum Value & Continue

> 🖼️ **Figure 6: Nested if-else decision tree illustrating two-level hierarchical branching to determine the maximum**

of three numbers a, b, and c.
- **Worked Program:** Largest of Three Numbers Using Nested if-else
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

#include <stdio.h>
int main() {
int a = 14, b = 29, c = 21;
if (a >= b) {
if (a >= c) printf("Largest = %d\n", a);
else        printf("Largest = %d\n", c);
} else {
if (b >= c) printf("Largest = %d\n", b);
else        printf("Largest = %d\n", c);
}
return 0; // Dry Run: 14>=29 (False) -> enters outer else -> 29>=21 (True) ->
prints Largest = 29
}

### 3. Loop Control Structure

- **Definition:** A loop (iterative control structure) repeatedly executes a block of statements as long
as a specified test condition remains True.
Four Essential Components of Every Well-Formed Loop:

- **### 1. Initialization:** Sets the starting state of the loop control variable (executes once).


- **### 2. Test Condition:** Boolean expression checked every iteration to decide whether to repeat or

terminate.

- **### 3. Loop Body:** The statements executed during each pass (iteration).


### 4. Update (Increment/Decrement): Modifies the loop variable so the condition eventually

becomes False (preventing an infinite loop).
- **Classification of Loops in C:** 
- **Entry-Controlled (Pre-Test) Loops:** Condition is tested before entering the loop body.
Minimum executions = 0. Examples: for and while.
- **Exit-Controlled (Post-Test) Loops:** Loop body runs first, and condition is tested at the end.
Minimum executions = 1. Example: do-while.
(A) for Loop (Entry)

### 1. Initialization


### 2. Cond?

True

### 3. Loop Body


### 4. Update

False
Exit Loop
(B) while Loop (Entry)
Init (Before Loop)
Cond?
True
Loop Body
+ Update Statement
False
Exit Loop
(C) do-while Loop (Exit)
Init (Before Loop)
Loop Body
(Runs ≥ 1 Time!)
Cond?
True
False
Exit Loop
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C




<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 LOOP EXECUTION CYCLES: WHILE VS. DO-WHILE VS. FOR LOOPS</div>
  <div class="visual-diagram-container">
    <svg width="100%" height="220" viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="loopArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
        </marker>
      </defs>

      <!-- Panel 1: while (Entry-controlled) -->
      <rect x="20" y="15" width="225" height="190" rx="8" fill="#f8fafc" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="132" y="38" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">while Loop (Entry-Controlled)</text>
      <!-- Diamond Condition -->
      <polygon points="132,55 185,75 132,95 80,75" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="132" y="79" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Condition ?</text>
      <!-- Body -->
      <line x1="132" y1="95" x2="132" y2="115" stroke="#2563eb" stroke-width="2" marker-end="url(#loopArrow)"/>
      <text x="145" y="108" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#16a34a">TRUE</text>
      <rect x="80" y="115" width="105" height="35" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="132" y="136" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">Loop Body</text>
      <!-- Loop back -->
      <path d="M 80 132 L 50 132 L 50 75 L 75 75" fill="none" stroke="#2563eb" stroke-width="1.5" marker-end="url(#loopArrow)"/>
      <!-- Exit -->
      <line x1="185" y1="75" x2="215" y2="75" stroke="#dc2626" stroke-width="2"/>
      <line x1="215" y1="75" x2="215" y2="175" stroke="#dc2626" stroke-width="2"/>
      <line x1="215" y1="175" x2="155" y2="175" stroke="#dc2626" stroke-width="2" marker-end="url(#loopArrow)"/>
      <text x="195" y="70" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#dc2626">FALSE</text>
      <text x="132" y="195" font-family="Inter, sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Min Iterations: 0 (Can skip)</text>

      <!-- Panel 2: do-while (Exit-controlled) -->
      <rect x="265" y="15" width="225" height="190" rx="8" fill="#f8fafc" stroke="#16a34a" stroke-width="1.5"/>
      <text x="377" y="38" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#166534" text-anchor="middle">do-while (Exit-Controlled)</text>
      <!-- Body First -->
      <rect x="325" y="55" width="105" height="35" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="377" y="76" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">Loop Body</text>
      <line x1="377" y1="90" x2="377" y2="110" stroke="#2563eb" stroke-width="2" marker-end="url(#loopArrow)"/>
      <!-- Diamond Condition -->
      <polygon points="377,110 430,130 377,150 325,130" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="377" y="134" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Condition ?</text>
      <!-- Loop back to body -->
      <path d="M 325 130 L 295 130 L 295 72 L 320 72" fill="none" stroke="#2563eb" stroke-width="1.5" marker-end="url(#loopArrow)"/>
      <text x="290" y="105" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#16a34a">TRUE</text>
      <!-- Exit -->
      <line x1="377" y1="150" x2="377" y2="175" stroke="#dc2626" stroke-width="2" marker-end="url(#loopArrow)"/>
      <text x="390" y="165" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#dc2626">FALSE</text>
      <text x="377" y="195" font-family="Inter, sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Min Iterations: 1 (Guaranteed)</text>

      <!-- Panel 3: for loop 4-step sequence -->
      <rect x="510" y="15" width="230" height="190" rx="8" fill="#f8fafc" stroke="#d97706" stroke-width="1.5"/>
      <text x="625" y="38" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#92400e" text-anchor="middle">for Loop: 4-Step Cycle</text>
      <rect x="525" y="55" width="200" height="24" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
      <text x="625" y="71" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Step 1: Initialization (Once only)</text>
      <rect x="525" y="85" width="200" height="24" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
      <text x="625" y="101" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Step 2: Condition Evaluation</text>
      <rect x="525" y="115" width="200" height="24" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
      <text x="625" y="131" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">Step 3: Execute Loop Body</text>
      <rect x="525" y="145" width="200" height="24" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
      <text x="625" y="161" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">Step 4: Increment / Update</text>
      <text x="625" y="195" font-family="Inter, sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Repeats Steps 2 🠆 3 🠆 4</text>
    </svg>
  </div>
</div>

| Control Feature | `while` Loop | `do-while` Loop | `for` Loop |
| :--- | :--- | :--- | :--- |
| **Control Category** | **Entry-Controlled** | **Exit-Controlled** | **Entry-Controlled** |
| **Test Condition Position** | At the beginning of each cycle | At the end of each cycle | At the beginning of each cycle |
| **Minimum Executions** | **0 times** (If condition starts false) | **1 time guaranteed** | **0 times** |
| **Best Used When...** | Iteration count is unknown in advance | Menu-driven programs & user input prompts | Exact number of iterations is known |
| **Semicolon Syntax** | No semicolon after `while(cond)` | **Mandatory semicolon:** `do { ... } while(cond);` | Semicolons separate header: `for(i=0; i<n; i++)` |

| Jump Statement | Scope of Effect | Subsequent Execution Flow |
| :--- | :--- | :--- |
| **`break;`** | Terminates enclosing `switch` or loop | Exits loop completely; jumps to statement immediately following loop |
| **`continue;`** | Bypasses remaining code in current cycle | Jumps directly to increment step (in `for`) or condition check (in `while`) |
| **`goto label;`** | Unconditional jump within same function | Bypasses structured programming hierarchy; can cause unmaintainable code |


test (exit-controlled) do-while loop.

### 3.1 The for Loop (Entry-Controlled)

- **Best Use Case:** Counter-controlled iteration where the exact number of repetitions is known
beforehand.
- **Syntax:** 
for (initialization; condition; update) {
// loop body statements
}
- **Exact Execution Sequence:** (1) initialization runs once → (2) condition is evaluated; if
False, loop exits → (3) loop body runs → (4) update runs → returns to step (2).
- **Important Variations in C:** 
- **Multiple Control Variables:** Separated by commas: for (i = 0, j = 10; i < j; i++, j-
-).
- **Omitted Expressions:** Any of the three expressions can be left blank, but the two
semicolons are mandatory. Writing for (;;) creates an intentional infinite loop (condition
defaults to True).
- **Empty Body Trap:** Placing a semicolon directly after the header—for (i = 1; i <= 5;
i++);—runs an empty loop 5 times, leaving i = 6, and executes the next block only once!
- **Worked Program (Factorial of N):** 
#include <stdio.h>
int main() {
int n = 4, i;
long fact = 1;
for (i = 1; i <= n; i++) {
fact = fact * i;
}
printf("Factorial of %d = %ld\n", n, fact); // Output: Factorial of 4 = 24
return 0;
}

> 📊 **Table 10: Step-by-Step Dry-Run Trace Table for Factorial for Loop (n = 4)**

Pass i (Start) Condition (i <= 4) Body: fact = fact * i Update (i++)
1 1 1 <= 4 (True) fact = 1 * 1 = 1 i becomes 2
2 2 2 <= 4 (True) fact = 1 * 2 = 2 i becomes 3
3 3 3 <= 4 (True) fact = 2 * 3 = 6 i becomes 4
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

---

#### 💻 Working C Code Example: Multi-Way Branching: Switch-Case Menu Selection

```c
#include <stdio.h>

int main() {
    char op = '*';
    double a = 10.0, b = 4.0;
    double result;

    switch (op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': 
            if (b != 0) result = a / b; 
            else { printf("Error: Div by zero\n"); return 1; }
            break;
        default: printf("Error: Invalid operator\n"); return 1;
    }

    printf("%.2lf %c %.2lf = %.2lf
", a, op, b, result);
    return 0;
}
```

**Console Output:**
```text
10.00 * 4.00 = 40.00
```


> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Case labels must be integral compile-time constants.**
- **Without break, execution falls through into subsequent cases.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Using float/string expressions in switch expressions.**
- **Duplicate case constant values.**

