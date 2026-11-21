> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum

Valid Engineering Use Case (Breaking Out of Deeply Nested Loops):
for (int i = 1; i <= 5; i++) {
for (int j = 1; j <= 5; j++) {
if (i * j == 12) {
- **printf("Found pair:** (%d, %d)\n", i, j);
goto exit_all;   // Exits BOTH inner and outer loops at once
}
}
}
- **exit_all:** 
printf("Search terminated.\n");
(A) break Statement
Loop Block
Statements Before
if (c) break;
Skipped Body
Exits!
Statement After Loop
(B) continue Statement
Update / Cond
Statements Before
if (c) continue;
Skipped This Pass
Next
Pass
(C) goto Statement
- **Forward Jump:** 
goto end;
Skipped Code
- **end:** stmt;
Skip
- **Backward Jump:** 
- **top:** stmt;
goto top;
Loop

> 🖼️ **Figure 8: Unconditional control transfer mechanics of (A) break, (B) continue, and (C) forward and**

backward goto jumps.

> 📊 **Table 13: Comparison Matrix — break vs. continue vs. goto**

Feature break continue goto
Primary
Effect
Terminates enclosing loop or
switch completely
Skips current pass; starts
next loop iteration
Jumps unconditionally to a
named label
Valid
Contexts
for, while, do-while,
switch
for, while, do-while
ONLY
Anywhere within the same C
function
Nested Loop
Effect
Exits innermost loop only Continues innermost loop
only
Can exit multiple nested loops
at once
Requires
Label?
- **No No Yes (label_name:** )
Code Quality Clean, structured,
recommended
Clean when used carefully
(watch while updates)
Discouraged except multi-
level break / cleanup
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C


### 4. High-Yield Quick-Revision Cheat Sheet


### 4.1 Essential Formulas, Bit-Ranges & Core Rules

- **Integer Bit Ranges (n bits):** Unsigned = 0 to 2n − 1; Signed (2's complement) = −2n−1 to +
(2n−1 − 1).
- **Key ASCII Anchors:** '0' = 48 ('0'–'9': 48–57), 'A' = 65 ('A'–'Z': 65–90), 'a' = 97
- **('a'–'z':** 97–122), space ' ' = 32, null '\0' = 0. Difference: 'a' − 'A' = 32.
- **Bitwise Shortcuts:** ~x = −(x + 1); x << n = x × 2n; x >> n = ⌊ x / 2n⌋; Odd check: (x
& 1) == 1.
Precedence Memory Ladder (Top → Bottom): Postfix/() → Unary (R→L) → Mul/Div/Mod →
Add/Sub → Shift → Relational → Equality → Bitwise (&, ^, |) → Logical (&&, ||) → Ternary
(R→L) → Assignment (R→L) → Comma.
- **Type Promotion Ladder:** char/short → int → unsigned → long → float → double → long
double.
- **Header File Syntax:** #include <stdio.h> (standard library, NO semicolon) vs. #include
"custom.h" (local user header).
- **Loop Minimum Executions:** for = 0, while = 0, do-while = 1.

> 📊 **Table 14: Top 10 University Exam Traps & Common Mistakes to Avoid**

#
Common Mistake / Exam
Trap Why It Fails / Actual C Behavior Correct Approach
1 if (x = 5) instead of
if (x == 5)
Assigns 5 to x; non-zero result makes
condition ALWAYS True!
Use == for comparison: if
(x == 5).
2 float r = 5 / 2;
expecting 2.5
Both operands are int → integer
division yields 2, stored as 2.0.
- **Cast at least one operand:** 
(float)5 / 2 or 5.0 /
2.
3 float x = 5.5 % 2; Compile error: % modulus operator is
strictly illegal on floats.
Use % only with integers (or
fmod() in <math.h>).
4 if (a > b); { ... }
or while (i < 5);
Stray semicolon creates an empty body;
block runs unconditionally or loops
forever.
Never place ; after if,
for, or entry while
headers.
5 Forgetting ; in do { ...
} while (cond)
Syntax error; do-while is the ONLY
loop requiring a trailing semicolon.
Always terminate with }
while (cond);.
6 Missing break; inside
switch cases
Causes unintended fall-through into
subsequent case / default blocks.
End every independent case
block with break;.
7 switch (floatVar) or
- **case x:** 
- **Compile error:** switch requires
integer/char; cases must be constants.
Use if-else-if for floats,
ranges, or variables.
8 if (10 < x < 20) for
range check
- **Evaluates L→R:** (10 < x) gives 0 or
1, both of which are always < 20!
- **Use logical AND:** if (x > 10
&& x < 20).
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

#
Common Mistake / Exam
Trap Why It Fails / Actual C Behavior Correct Approach
9 continue placed before
i++ in while
Jumps back to condition without
updating i → infinite loop!
Increment i++ before
continue, or use a for loop.
10 Dangling else without
braces
else silently pairs with the nearest
inner if, ignoring indentation.
Always wrap nested if-else
blocks in curly braces { }.
Exam Presentation Checklist (Full-Marks Strategy)
- **For Theory Questions (5–10 Marks):** Always present (1) Formal Definition, (2) Standard C Syntax,
(3) Working Principle in numbered steps, (4) Clean ANSI Flowchart (diamonds for decisions,
rectangles for processes), and (5) A short traced C program with sample output.
For Output / Trace Questions: Construct a column-wise dry-run table tracking every variable after
each pass, check operator precedence/associativity carefully, and watch for integer division, short-
circuiting, and fall-through traps.
- **Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C