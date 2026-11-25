> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum

- **Two Forms of #include Directive:** 

### 1. Angle Brackets — #include <filename.h>: Used for standard system library header files

(e.g., <stdio.h>). Instructs the preprocessor to search only the standard compiler include
directories.

### 2. Double Quotes — #include "filename.h": Used for user-defined header files (e.g.,

"myutils.h"). Searches the current project directory first, and falls back to standard system
directories if not found.
- **Why Header Files Are Essential:** 
Enables compile-time verification of function argument types and return types (preventing
runtime bugs).
Promotes code modularity and reusability (write declarations once, include anywhere).
Separates interface (.h declarations) from compiled library implementation (standard C library
linked by the linker).
(A) Implicit Type Promotion Hierarchy (Usual Arithmetic Conversion — Lower to Higher)
char/short int unsigned long float double long double
Safe Widening Direction (Preserves Value) ──► | ◄── Narrowing (Explicit Cast Required; Risks Truncation)
(B) Role of Header Files in the C Build Pipeline
program.c
stdio.h / math.h
Preprocessor
(#include, #define)
Expanded
program.i
Compiler
& Assembler
Linker
→  .exe / out

> 🖼️ **Figure 3: (A) C Implicit Type Promotion hierarchy; (B) How the C Preprocessor expands #include header files**

before compilation.

> 📊 **Table 8: Standard C Header Files Frequently Tested in University Exams**

Header File Full Name / Purpose Key Functions / Macros Provided
<stdio.h> Standard Input / Output printf(), scanf(), getchar(), putchar(),
puts(), EOF
<math.h> Mathematical Functions sqrt(), pow(), fabs(), ceil(), floor(), sin(),
cos(), log()
<stdlib.h> Standard General Utilities abs(), exit(), rand(), srand(), atoi(),
EXIT_SUCCESS
<ctype.h> Character Testing &
Conversion
isalpha(), isdigit(), isspace(), toupper(),
tolower()
<string.h> String Handling
Operations
strlen(), strcpy(), strcmp(), strcat()
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

Header File Full Name / Purpose Key Functions / Macros Provided
<limits.h> Integer Data Type Limits INT_MAX, INT_MIN, CHAR_BIT, UINT_MAX,
SHRT_MAX
<float.h> Floating-Point Type Limits FLT_MAX, FLT_MIN, DBL_MAX, FLT_DIG
<stdbool.h> Boolean Type Support
(C99+)
bool, true (1), false (0)

### 2. Decision Control Structure

- **Definition:** By default, C programs execute sequentially (top to bottom, line by line). Decision
control structures (also called branching or selection statements) alter the normal sequential
flow by evaluating a condition and choosing which block of statements to execute.
- **Truth Evaluation Rule in C:** Any expression evaluating to zero (0) is treated as False; any non-
zero value (positive or negative, e.g., 1, -5, 3.14) is treated as True.

### 2.1 Simple if Statement (One-Way Selection)

- **Working Principle:** Evaluates the test condition inside parentheses. If the condition is True (non-
zero), the statement block executes. If False (0), the block is skipped and control moves directly
to the statement following the if block.
- **Syntax:** 
if (condition) {
// statements executed ONLY when condition is True
}
- **Braces Rule:** Curly braces { } are optional for a single statement, but mandatory for multiple
statements (compound block). Always using braces prevents logic bugs.

> 📝 **Worked Example (Applying Discount):**

#include <stdio.h>
int main() {
float bill = 1500.0f;
if (bill >= 1000.0f) {
bill = bill - (bill * 0.10f);  // 10% discount applied
}
printf("Final Bill = %.2f\n", bill); // Output: Final Bill = 1350.00
return 0;
}
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

2.2 if-else Statement (Two-Way Selection)
- **Working Principle:** Evaluates the condition. If True, the if block executes and the else block
is skipped. If False, the if block is skipped and the else block executes. Exactly one of the
two blocks is guaranteed to run.
- **Syntax:** 
if (condition) {
// True block
} else {
// False block
}

> 📝 **Worked Example (Even or Odd Check):**

#include <stdio.h>
int main() {
int n;
- **printf("Enter an integer:** ");
scanf("%d", &n);
if (n % 2 == 0) {
printf("%d is Even\n", n);
} else {
printf("%d is Odd\n", n);
}
return 0;
}
- **Dry Run:** For input n = 17 → 17 % 2 evaluates to 1 → 1 == 0 is False (0) → executes
else block → prints 17 is Odd.
2.3 if-else-if Ladder (Multi-Way Selection)
- **Working Principle:** Used when a choice must be made among three or more mutually
exclusive conditions. Conditions are evaluated strictly from top to bottom. As soon as the first
True condition is found, its associated block executes and the entire remaining ladder is
skipped. If all conditions fail, the optional trailing else block runs as the default fallback.
- **Syntax:** 
if (condition_1) {
// Block 1
} else if (condition_2) {
// Block 2
} else if (condition_3) {
// Block 3
} else {
// Default block (if all above conditions are False)
}
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C


> 📝 **Worked Example (B.Tech Grade Classification):**

#include <stdio.h>
int main() {
int marks = 76;
if (marks >= 90) {
- **printf("Grade:** A+\n");
} else if (marks >= 75) {
- **printf("Grade:** A\n");
} else if (marks >= 60) {
- **printf("Grade:** B\n");
} else if (marks >= 40) {
- **printf("Grade:** C (Pass)\n");
} else {
- **printf("Grade:** F (Fail)\n");
}
return 0;
}
- **Dry Run:** For marks = 76 → 76 >= 90 is False → checks 76 >= 75 which is True → prints
- **Grade:** A and immediately skips marks >= 60, marks >= 40, and else.
(A) Simple if
Cond?
True
if Body
False
Next Statement
(B) if-else
Cond?
True
if Body
False
else Body
Next Statement
(C) if-else-if Ladder
Cond 1?
T
Block 1
F
Cond 2?
T
Block 2
F
else Block
Next Statement

> 🖼️ **Figure 4: Standard ANSI flowcharts comparing (A) Simple if, (B) if-else, and (C) if-else-if ladder**

control paths.
2.4 switch Statement (Multi-Way Constant Dispatch)
- **Working Principle:** Evaluates a single integer or character control expression once and
compares its value against a list of compile-time constant case labels. When a match occurs,
execution jumps directly to that case and runs until a break; statement or the closing brace }
is reached.
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

---

#### 💻 Working C Code Example: Decision Making: Nested If-Else & Conditional Operator

```c
#include <stdio.h>

int main() {
    int score = 85;
    char grade;

    if (score >= 90) grade = 'A';
    else if (score >= 80) grade = 'B';
    else if (score >= 70) grade = 'C';
    else if (score >= 60) grade = 'D';
    else grade = 'F';

    // Ternary operator
    const char *status = (score >= 60) ? "PASS" : "FAIL";

    printf("Score: %d -> Grade: %c | Result: %s
", score, grade, status);
    return 0;
}
```

**Console Output:**
```text
Score: 85 -> Grade: B | Result: PASS
```


> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Else always pairs with the closest unmatched preceding if.**
- **Ternary operator ?: is the only three-operand operator in C.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Dangling-else ambiguity without braces.**
- **Writing if (x = 5) instead of if (x == 5).**

