### 5. Loop Control Structures (while, for, do-while) & Jump Statements

> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

Pass i (Start) Condition (i <= 4) Body: fact = fact * i Update (i++)
4 4 4 <= 4 (True) fact = 6 * 4 = 24 i becomes 5
5 5 5 <= 4 (False) Loop Terminates — (Final fact = 24)

#### 3.2 The while Loop (Entry-Controlled)

**Best Use Case:** Sentinel-controlled or condition-controlled iteration where the exact number of
repetitions is unknown in advance (e.g., processing digits of an arbitrary number, reading input
until a stop value is entered).

**Syntax:**

initialization;
while (condition) {
// loop body statements
update;
}
Worked Program (Reverse an Integer & Dry Run for n = 153):
#include <stdio.h>
int main() {
int n = 153, rev = 0, rem;
while (n != 0) {
rem = n % 10;           // Extract last digit
rev = rev * 10 + rem;   // Append digit to reversed number
n = n / 10;             // Remove last digit (integer division)
}
printf("Reversed = %d\n", rev); // Output: Reversed = 351
return 0;
}
Step-by-Step Dry Run (n = 153, rev = 0):

### 1. Pass 1: 153 != 0 (T) → rem = 3 → rev = 0*10 + 3 = 3 → n = 153 / 10 = 15.


### 2. Pass 2: 15 != 0 (T) → rem = 5 → rev = 3*10 + 5 = 35 → n = 15 / 10 = 1.


### 3. Pass 3: 1 != 0 (T) → rem = 1 → rev = 35*10 + 1 = 351 → n = 1 / 10 = 0.


### 4. Pass 4: 0 != 0 (F) → Loop terminates; prints Reversed = 351.


#### 3.3 The do-while Loop (Exit-Controlled)

**Best Use Case:** Menu-driven programs, password/input validation prompts, or any task that
MUST execute at least once before checking whether to repeat.
**Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

Syntax (Note Mandatory Trailing Semicolon!):
initialization;
do {
// loop body statements (guaranteed to run at least once)
update;
} while (condition);   // <-- Semicolon is REQUIRED here!

**Worked Program (Positive Number Input Validation):**

#include <stdio.h>
int main() {
int num;
do {
**printf("Enter a positive number:** ");
scanf("%d", &num);
} while (num <= 0);
**printf("Accepted:** %d\n", num);
return 0;
}
**Dry Run:** Even if the user enters -4 first, the prompt ran once, -4 <= 0 is True, so it repeats.
Once the user enters 12, 12 <= 0 is False, and the loop terminates.
**Table 11:** Comprehensive Comparison Matrix — for vs. while vs. do-while
Feature for Loop while Loop do-while Loop
Control Type Entry-controlled (pre-test) Entry-controlled (pre-test) Exit-controlled (post-
test)
Minimum
Executions
0 (if condition initially False) 0 (if condition initially False) 1 (body runs before first
test)
Condition
Position
Middle clause of header At top in while (cond) At bottom in while
(cond);
Trailing
Semicolon
No (creates empty-body bug) No (creates infinite loop bug) Yes — syntactically
mandatory
Best Suited For Known iteration count
(counters, matrices, series)
Unknown iteration count (digit
extraction, sentinels)
Menu systems and
input validation

#### 3.4 Nested Loops

**Definition:** A nested loop consists of an inner loop placed entirely inside the body of an outer
loop. Any combination of for, while, and do-while can be nested.
**Execution Principle:** For every single iteration of the outer loop, the inner loop executes
completely from start to finish (re-initializing its counter every time the outer loop advances).

**Total Iteration Formula (Independent Bounds):**

**Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

Total Inner Body Executions (Independent Bounds): Ntotal = Nouter × Ninner   |   Triangular
**Pattern (1 to i):** Ntotal = n(n + 1) / 2
**Common Exam Applications:** Printing 2D star/number patterns, generating multiplication tables,
finding all prime numbers in a range, and processing 2D grids.
Worked Program (Right-Angled Number Triangle Pattern):
#include <stdio.h>
int main() {
int i, j, rows = 4;
for (i = 1; i <= rows; i++) {        // Outer loop controls ROWS
for (j = 1; j <= i; j++) {       // Inner loop controls COLUMNS in row i
printf("%d ", j);
}
printf("\n");                    // Move to next line after finishing
row
}
return 0;
}
**Table 12:** Outer-Inner Execution Trace Matrix for Number Triangle (rows = 4)
Outer i (Row) Inner j Values Run (1 to i) Inner Count Printed Row Output

$$i = 1 j = 1 1 1$$


$$i = 2 j = 1, 2 2 1 2$$


$$i = 3 j = 1, 2, 3 3 1 2 3$$


$$i = 4 j = 1, 2, 3, 4 4 1 2 3 4$$

**Total printf("%d ", j) Executions:** 10 (= 4×5/2) 4 rows printed

#### 3.5 Use of Jumping Statements (break, continue, goto)

**Definition:** Jumping statements unconditionally transfer program control from one point to
another, overriding normal loop or sequential execution.

### 1. The break Statement

**Working Principle:** Immediately terminates the nearest enclosing loop (for, while, do-
while) or switch statement and transfers control to the first statement immediately following
that block.
**Nested Loop Scope:** Inside a nested loop, break exits only the inner loop; the outer loop
continues normally.
**Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C


**Worked Example (Prime Number Check Using Early break):**

int n = 29, i, isPrime = 1;
for (i = 2; i * i <= n; i++) {
if (n % i == 0) {
isPrime = 0;
break;   // Factor found; no need to test remaining divisors
}
}
printf(isPrime && n > 1 ? "Prime\n" : "Not Prime\n");

### 2. The continue Statement

**Working Principle:** Skips the remaining statements of the current loop iteration and
immediately forces the next iteration of the nearest enclosing loop. Valid ONLY inside loops
(cannot be used inside a standalone switch).
Crucial Behavior Difference Across Loops (Exam Trap!):
**In a for loop:** continue jumps to the update expression (i++), then evaluates the
condition.
In a while / do-while loop: continue jumps directly to the condition test. If the counter
update sits below continue, the counter never changes, causing an infinite loop!

> 📝 **Worked Example (Print Numbers 1 to 6 Skipping Multiples of 3):**

for (int i = 1; i <= 6; i++) {
if (i % 3 == 0) continue;   // Skips printf when i is 3 or 6; still runs i++
printf("%d ", i);
}
// Output: 1 2 4 5

### 3. The goto Statement

**Working Principle:** Performs an unconditional jump directly to a user-defined label within the
same function. A label is any valid identifier followed by a colon (label_name:).

**Two Jump Directions:**

**Forward Jump:** Label appears after goto (skips intermediate code; useful for centralized
error cleanup or exiting deeply nested loops).
**Backward Jump:** Label appears before goto (creates a manual loop; risks infinite looping if
no exit condition guards it).
**Why goto Is Generally Discouraged:** Overuse destroys structured programming discipline,
creating tangled "spaghetti code" that is hard to trace, debug, and maintain.
**Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C