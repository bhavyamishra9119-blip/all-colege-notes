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


> 🖼️ **Figure 7: Execution flowcharts contrasting pre-test (entry-controlled) for and while loops against the post-**

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