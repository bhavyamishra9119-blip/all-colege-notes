> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum


- **### 5. No Keywords:** A variable name cannot be any of C's 32 standard reserved keywords (such as

int, if, else, for, while, switch, return, break, float, void).

### 1.4 Operators and Expressions

- **Operator & Operand:** An operator is a symbol that instructs the compiler to perform a specific
mathematical, relational, logical, or bit-level operation. The data items on which an operator acts
are called operands.
- **Expression:** A valid combination of operands (constants, variables) and operators that evaluates
to a single resulting value (e.g., a + b * 2, x >= 18).
Classification by Operand Count (Arity):
- **Unary Operators:** Act on 1 operand (e.g., -x, ++a, --b, !flag, ~n, sizeof(x)).
- **Binary Operators:** Act on 2 operands (e.g., a + b, x == y, p && q, m & n).
- **Ternary Operator:** Acts on 3 operands—C has only one: the conditional operator condition
- **? expr1:** expr2.

> 📊 **Table 4: Complete Classification of Operators in C**

Operator
Category Operators Key Functional Rules & Behavior

### 1. Arithmetic +, -, *, /,

%
Integer division truncates decimals (7 / 2 == 3). Modulus %
yields remainder and works ONLY on integers (7 % 2 == 1; 7.5
% 2 is a syntax error).

### 2. Relational <, <=, >, >=,

==, !=
Compares two values and returns integer 1 (True) or 0 (False).
- **Beware:** == checks equality, whereas = assigns!

### 3. Logical && (AND), ||

(OR), ! (NOT)
Combines conditions. Any non-zero value is treated as True; 0 is
False. Always evaluates to 1 or 0. Uses short-circuit evaluation.

### 4. Assignment =, +=, -=,

*=, /=, %=
Assigns right-hand value to left-hand variable. Shorthand a += b
means a = a + (b); a *= b + 2 means a = a * (b +
2).

### 5. Increment /

Decrement
++ (add 1), --
(sub 1)
- **Prefix (++a):** Increment first, then use new value.
- **Postfix (a++):** Use current value first, then increment.

### 6. Conditional

(Ternary)
expr1 ?
- **expr2:** 
expr3
Compact if-else. If expr1 is non-zero (True), evaluates and
returns expr2; otherwise evaluates and returns expr3.

### 7. Bitwise &, |, ^, ~,

<<, >>
Operates directly on individual binary bits of integer operands (int,
char). Cannot be applied to float or double.

### 8. Special sizeof, ,

(comma)
sizeof(type/var) returns size in bytes (compile-time). Comma
operator evaluates left-to-right and returns the rightmost expression's
value.
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

Key Mechanics & Worked Examples of Tricky Operators
Short-Circuit Evaluation in Logical Operators:
- **In A && B:** If A is False (0), B is never evaluated because the result is guaranteed to be 0.
- **In A || B:** If A is True (non-zero), B is never evaluated because the result is guaranteed to
be 1.
- **Exam Example:** int a = 0, b = 5; int r = (a && ++b); → Because a is 0, ++b is
skipped; final values are r = 0 and b = 5 (unchanged!).
- **Prefix vs. Postfix Worked Trace:** 
Given int a = 5, b, c;
- **Step 1:** b = a++; → Assigns current a (5) to b, then increments a to 6. State: b = 5, a =

### 6.
- **Step 2:** c = ++a; → Increments a to 7 first, then assigns 7 to c. State: c = 7, a = 7.

- **Undefined Behavior Warning:** Never modify the same variable more than once in a single
expression without a sequence point (e.g., a++ + ++a); the C standard leaves its output
undefined across compilers.
Bitwise Shift Formulas (for Non-Negative Integers):
Left Shift (x << n): Shifts bits left by n positions, filling vacated right bits with 0. Equivalent
to x × 2n.
Right Shift (x >> n): Shifts bits right by n positions, discarding rightmost bits. Equivalent to
integer division ⌊x / 2n⌋.
- **Worked Bitwise Numerical:** Let 8-bit integers a = 12 (000011002) and b = 10 (000010102):

- **### 1. Bitwise AND (a & b):** 00001100 & 00001010 = 000010002 = 8 (bit is 1 only if both bits are

1).

- **### 2. Bitwise OR (a | b):** 00001100 | 00001010 = 000011102 = 14 (bit is 1 if either bit is 1).


- **### 3. Bitwise XOR (a ^ b):** 00001100 ^ 00001010 = 000001102 = 6 (bit is 1 if bits differ).


- **### 4. Bitwise NOT (~a):** Flips all bits (1's complement). For signed 2's complement integer, formula

is ~x = −(x + 1) → ~12 = −13.

### 5. Left Shift (a << 2): 001100002 = 12 × 22 = 48.


### 6. Right Shift (a >> 1): 000001102 = ⌊ 12 / 21⌋ = 6.

- **Ternary Operator Example:** max = (a > b) ? a : b; — Assigns a to max if a > b is true,
else assigns b.
- **Comma Operator Example:** int x = (a = 3, b = 4, a + b); — Evaluates a = 3, then b
= 4, then returns a + b (7) and stores 7 in x.

> 📊 **Table 5: Truth Table for Logical (&&, ||, !) and Bitwise (&, |, ^) Operations**

- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

A B A && B / A & B A || B / A | B A ^ B (Bitwise XOR) !A (Logical NOT)
0 0 0 0 0 1
0 1 0 1 1 1
1 0 0 1 1 0
1 1 1 1 0 0

### 1.5 Operator Precedence and Associativity

- **Precedence (Priority):** Determines which operator is evaluated first when an expression contains
multiple operators of different priority levels (e.g., in 2 + 3 * 4, multiplication * has higher
precedence than +, yielding 2 + 12 = 14, NOT 20).
Associativity (Tie-Breaking Direction): Determines the direction of evaluation—either Left-to-
Right (L → R) or Right-to-Left (R → L)—when multiple operators of the same precedence level
appear together (e.g., in 20 / 5 * 2, both / and * have equal precedence and L → R
associativity, so (20 / 5) * 2 = 4 * 2 = 8, NOT 20 / 10 = 2).
- **Right-to-Left Rule Shortcut:** Almost all binary operators associate Left-to-Right. Only three
groups associate Right-to-Left (R → L): (1) Unary operators, (2) Ternary ?:, and (3)
Assignment operators (=, +=, etc., enabling chained assignment a = b = c = 0;).

> 📊 **Table 6: Complete C Operator Precedence and Associativity Master Table (Highest to Lowest)**

Rank Category Operators Associativity
1 (Highest) Postfix / Grouping () [] -> . a++ a-- Left to Right (L → R)
2 Unary + - ! ~ ++a --a (type) sizeof Right to Left (R → L)
3 Multiplicative * / % Left to Right (L → R)
4 Additive + - Left to Right (L → R)
5 Bitwise Shift << >> Left to Right (L → R)
6 Relational < <= > >= Left to Right (L → R)
7 Equality == != Left to Right (L → R)
8 Bitwise AND & Left to Right (L → R)
9 Bitwise XOR ^ Left to Right (L → R)
10 Bitwise OR | Left to Right (L → R)
11 Logical AND && Left to Right (L → R)
12 Logical OR || Left to Right (L → R)
- **13 Conditional (Ternary) ?:** Right to Left (R → L)
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

Rank Category Operators Associativity
14 Assignment = += -= *= /= %= &= |= ^= <<= >>= Right to Left (R → L)
15 (Lowest) Comma , Left to Right (L → R)
Worked Step-by-Step Expression Evaluation Numericals
- **Numerical 1 (Arithmetic):** Evaluate res = 10 + 20 * 3 - 8 / 4 % 3

### 1. Rank 3 (*, /, %, L → R): First compute 20 * 3 = 60 → 10 + 60 - 8 / 4 % 3.


- **### 2. Next Rank 3 (L → R):** Compute 8 / 4 = 2 → 10 + 60 - 2 % 3.


- **### 3. Next Rank 3 (L → R):** Compute 2 % 3 = 2 → 10 + 60 - 2.


- **### 4. Rank 4 (+, -, L → R):** Compute 10 + 60 = 70, then 70 - 2 = 68.


### 5. Rank 14 (=): Final answer res = 68.

Numerical 2 (Mixed Arithmetic, Relational & Logical): Given x = 5, y = 10, z = 15,
evaluate ans = x < y && y == z || x + y == z

- **### 1. Rank 4 (+):** Compute x + y = 5 + 10 = 15 → 5 < 10 && 10 == 15 || 15 == 15.


### 2. Rank 6 (<): Compute 5 < 10 = 1 → 1 && 10 == 15 || 15 == 15.


### 3. Rank 7 (==, L → R): Compute 10 == 15 = 0 and 15 == 15 = 1 → 1 && 0 || 1.


- **### 4. Rank 11 (&& beats ||):** Compute 1 && 0 = 0 → 0 || 1.


- **### 5. Rank 12 (||):** Compute 0 || 1 = 1 → Final answer ans = 1 (True).


### 1.6 Type Conversion (Implicit and Explicit)

- **Definition:** Type conversion is the process of converting a value from one data type to another
so that mixed-type expressions or assignments can be evaluated consistently by the CPU.

### 1. Implicit Type Conversion (Automatic Type Promotion / Coercion):

Performed automatically by the C compiler without programmer intervention whenever
operands of different types appear in an expression.
- **Integer Promotion Rule:** Any operand smaller than int (such as char or short) is
automatically promoted to int before arithmetic is performed.
Usual Arithmetic Conversion Ladder (Widening): The operand of the lower data type is
temporarily upgraded to match the higher data type to prevent loss of data: char / short →
int → unsigned int → long → unsigned long → long long → float → double → long
double.
- **Assignment Conversion (May Narrow):** During assignment lhs = rhs;, the result on the
right is automatically converted to the data type of the left-hand variable. Assigning a float to
an int truncates (discards) the fractional part (e.g., int x = 9.87; stores 9, NOT 10).
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C


### 2. Explicit Type Conversion (Type Casting):

Performed manually by the programmer using the unary cast operator.
- **Syntax:** (target_data_type) expression — Note that the cast operator has high unary
precedence (Rank 2, R → L).
- **Primary Use Case:** Avoiding integer division truncation when computing averages, ratios, or
percentages from integer variables.

> 📝 **Worked Example: Solving Integer Division Truncation via Explicit Type Casting**

int sum = 7, count = 2;
float avg1 = sum / count;          // int / int = 3 (truncated!), then promoted to
3.000000
float avg2 = (float)sum / count;   // sum cast to 7.0f; count implicitly promoted
to 2.0f -> 3.500000
float avg3 = (float)(sum / count); // WRONG: (7 / 2) runs first as int = 3, then
cast -> 3.000000

> 📊 **Table 7: Comparison Matrix — Implicit vs. Explicit Type Conversion**

Feature Implicit Type Conversion Explicit Type Conversion (Type Casting)
Performed By C compiler automatically Programmer explicitly in source code
Syntax /
Operator
No special operator required Unary cast operator: (type)
expression
Direction Lower to higher type in expressions (widening) Any compatible direction (widening or
narrowing)
Risk of Data
Loss
No loss in expression promotion; possible in
narrowing assignment
Possible when casting higher type to lower
type (e.g., (int)5.9 → 5)
Example int a = 5; float b = 2.5f; float
c = a + b; (a → 5.0f)
int a = 5, b = 2; float r =
(float)a / b; (r = 2.5)

### 1.7 Header Files in C

- **Definition:** A header file (extension .h) is a text file containing function declarations
(prototypes), macro definitions, symbolic constants, and data type definitions that can be
shared across multiple C source files.
How Header Files Work (Preprocessing Stage): When the compiler encounters the
preprocessor directive #include, the C Preprocessor literally copies and pastes the entire
contents of the specified .h file into the source code before actual compilation begins. Notice that
#include is a preprocessor directive, so it MUST NOT end with a semicolon.
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

---

#### 💻 Working C Code Example: Arithmetic, Relational & Bitwise Operator Precedence

```c
#include <stdio.h>

int main() {
    int a = 12, b = 5; // 12 = 1100_2, 5 = 0101_2
    printf("Arithmetic: a + b = %d, a %% b = %d
", a + b, a % b);
    printf("Bitwise AND (a & b): %d (0100_2)
", a & b);
    printf("Bitwise OR  (a | b): %d (1101_2)
", a | b);
    printf("Bitwise XOR (a ^ b): %d (1001_2)
", a ^ b);
    printf("Shift Left  (a << 1): %d (multiply by 2)
", a << 1);
    printf("Shift Right (a >> 1): %d (divide by 2)
", a >> 1);
    return 0;
}
```

**Console Output:**
```text
Arithmetic: a + b = 17, a % b = 2
Bitwise AND (a & b): 4 (0100_2)
Bitwise OR  (a | b): 13 (1101_2)
Bitwise XOR (a ^ b): 9 (1001_2)
Shift Left  (a << 1): 24 (multiply by 2)
Shift Right (a >> 1): 6 (divide by 2)
```


> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Bitwise shift left (x << k) computes x * 2^k.**
- **Logical operators short-circuit; bitwise operators evaluate both sides.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Modulus operator (%) cannot be applied to floating-point numbers.**
- **Confusing bitwise & with logical &&.**

