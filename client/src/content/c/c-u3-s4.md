> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

Mechanism 2 — Call by Reference (Simulated Using Pointers in C):
Passes the memory addresses (&x, &y) of actual variables into pointer formal parameters
(int *a, int *b).
Dereferencing (*a, *b) inside the function modifies the caller’s original variables directly —
essential for swap() or returning multiple results!
- **Array Note:** When you pass an array to a function (func(arr, n)), C automatically passes its
base address — so functions modify the original array in place!
// Complete Example: Prototype, Call by Reference Swap, and Call
void swap(int *a, int *b);       // 1. Prototype
int main() {
int x = 10, y = 25;
swap(&x, &y);                // 3. Function Call (Actual args: &x, &y)
printf("%d %d", x, y);       // Prints: 25 10 (Originals swapped!)
return 0;
}
void swap(int *a, int *b) {      // 2. Definition (Formal params: *a, *b)
int temp = *a; *a = *b; *b = temp;
}
(a) Call by Value (Copies Data)
main()
x = 10 (1000)
y = 25 (1004)
Copy swap(a, b)
a = 25 (2000)
b = 10 (2004)
Originals x, y remain UNCHANGED!
(b) Call by Reference (Passes Address)
main()
x = 25 (1000)
y = 10 (1004)
*a,*b swap(*a, *b)
a = 1000
b = 1004
Originals x, y MODIFIED directly!

> 🖼️ **Figure 7: Memory Behavior of Call by Value vs. Call by Reference (Pointers)**

Comparison Point Call by Value Call by Reference (Pointers)
What Is Passed? Copy of actual variable values Memory addresses (&var) of actual
variables
Memory
Allocation
Separate memory boxes for actual &
formal
Pointers directly access caller’s memory
boxes
Effect on
Originals
Original variables stay safe & unchanged Original variables are modified permanently
Typical Use Safe single-output calculations Swapping values, returning multiple results
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming


### 7. Recursive Functions


- **### 7.1 Starting From Scratch:** How Recursion Works

- **Definition:** A recursive function is a function that calls itself (directly or indirectly) to break a
complex problem down into smaller, identical sub-problems.
Two Mandatory Ingredients (Never Omit Either!):

### 1. Base Case (Stopping Condition): The simplest smallest input solved directly without making

another recursive call (e.g., if (n <= 1) return 1;). Missing the base case causes infinite
recursion and a Stack Overflow crash!

### 2. Recursive Case (Step Toward Base): Calls the same function with a strictly smaller argument

(e.g., return n * fact(n - 1);).
How Memory Handles Recursion (The Call Stack): Every recursive call pushes a fresh Stack
Frame (storing its own local variables and return address) onto the Stack during the Winding
Phase, then pops frames in LIFO order to compute results during the Unwinding Phase.
- **Types of Recursion:** 
- **Direct Recursion:** Function A() calls A() directly.
- **Indirect Recursion:** Function A() calls B(), and B() calls A().
- **Tail Recursion:** Recursive call is the very last operation executed (no pending work after
return).
// Classic Recursive Examples: Factorial and Fibonacci
long fact(int n) {
if (n <= 1) return 1;              // Base Case
return n * fact(n - 1);            // Recursive Case
}
int fib(int n) {
if (n <= 1) return n;              // Base Cases: fib(0)=0, fib(1)=1
return fib(n - 1) + fib(n - 2);    // Tree Recursion
}
Winding Phase (Push Stack Frames) → Base Case → Unwinding Phase (Return & Pop)
fact(4) = 4*f(3) fact(3) = 3*f(2) fact(2) = 2*f(1) fact(1) → Base = 1
Returns 12 × 1 = 23 × 2 = 64 × 6 = 24 ✓

> 🖼️ **Figure 8: Step-by-Step Winding (Push) and Unwinding (Pop) Call-Stack Trace of Recursive Factorial**

Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming

Feature Recursion Iteration (Loops)
Termination
Condition
Base Case (if check) Loop condition becomes false
Memory Usage High — pushes new Stack Frame per call Low — O(1) fixed local variables
Execution Speed Slower (function-call overhead) Faster (no call-stack overhead)
Failure Mode Stack Overflow crash if base case missing Infinite loop (program hangs, no
crash)
Best Used For Trees, Tower of Hanoi, DFS, Divide &
Conquer
Simple linear counting, array loops

### 8. Macros (#define Preprocessor Directives)


### 8.1 What Is a Macro in C?

- **Definition:** A Macro is a named code fragment defined with the #define preprocessor directive.
Before compilation even begins, the C Preprocessor performs pure textual find-and-replace
wherever the macro name appears.
- **Syntax Rule:** Never end a #define line with a semicolon ; — otherwise the semicolon gets
pasted straight into your expressions and causes syntax errors!

### 8.2 Three Standard Categories of Macros


### 1. Object-Like Macros (Symbolic Constants):

- **Example:** #define PI 3.14159 and #define MAX_SIZE 100 — improves readability and
lets you update a constant across an entire file in one line.

### 2. Function-Like Macros (Parameterized Macros):

- **Example:** #define SQUARE(x) ((x) * (x)) and #define MAX(a, b) ((a) > (b) ? (a)
- **:** (b)).
The Parentheses Trap (Classic Exam Question!):
- **WRONG:** #define SQ(x) x * x → SQ(1 + 2) expands blindly to 1 + 2 * 1 + 2 = 5!
- **RIGHT:** #define SQ(x) ((x) * (x)) → SQ(1 + 2) expands safely to ((1 + 2) * (1
+ 2)) = 9!
- **Side-Effect Warning:** Never pass ++ or -- into a macro — SQ(i++) expands to ((i++) *
(i++)), incrementing i twice!

### 3. Predefined Standard C Macros: Automatically supplied by the compiler for logging and

- **debugging:** __FILE__ (current filename), __LINE__ (current line number), __DATE__, and
__TIME__.
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming