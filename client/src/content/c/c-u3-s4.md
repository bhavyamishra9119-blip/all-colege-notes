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



<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 12-POINT MASTER STORAGE CLASSES COMPARISON MATRIX</div>
</div>

| Storage Class | Declaration Keyword | Storage Location | Default Initial Value | Variable Scope (Visibility) | Variable Lifetime (Persistence) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Automatic** | `auto` (default for locals) | **Stack Memory** | Garbage Value (Indeterminate) | Local to declaring block `{ ... }` | Terminated upon exiting block |
| **Register** | `register` | **CPU General Registers** | Garbage Value (Indeterminate) | Local to declaring block `{ ... }` | Terminated upon exiting block |
| **Static Local**| `static` (inside function) | **Data / BSS Segment** | **Zero (`0` or `NULL`)** | Local to declaring block only | **Entire program run** (Preserves values) |
| **Static Global**| `static` (outside functions)| **Data / BSS Segment** | **Zero (`0` or `NULL`)** | **Strictly File Scope** (Private to file) | Entire program execution |
| **External** | `extern` | **Data / BSS Segment** | **Zero (`0` or `NULL`)** | **Global** (Accessible across all project files) | Entire program execution |

> ⚠️ **Key Exam Points on Storage Classes:**
> 1. You **CANNOT** use the address-of operator `&` on a `register` variable because CPU registers do not reside at memory addresses.
> 2. `static` local variables are initialized **only once** at compile time before `main()` executes.
> 3. `extern` declarations only declare the variable's type and name without allocating new memory; the actual definition must exist in another `.c` file.


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



<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 CALL STACK FRAME &amp; RECURSION EXECUTION LIFECYCLE</div>
  <div class="visual-diagram-container">
    <svg width="100%" height="200" viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Call stack frames -->
      <rect x="20" y="15" width="720" height="170" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="380" y="38" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Recursion Call Stack Unwinding: int fact(3)</text>
      <!-- 3 Frames stacked -->
      <g transform="translate(80, 50)">
        <rect x="0" y="0" width="160" height="35" rx="3" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="80" y="22" font-family="Courier, monospace" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">fact(1) = 1 (Base Case)</text>

        <rect x="0" y="38" width="160" height="35" rx="3" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="80" y="60" font-family="Courier, monospace" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">fact(2) = 2 * fact(1)</text>

        <rect x="0" y="76" width="160" height="35" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="80" y="98" font-family="Courier, monospace" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">fact(3) = 3 * fact(2)</text>

        <rect x="0" y="114" width="160" height="35" rx="3" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
        <text x="80" y="136" font-family="Courier, monospace" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">main() caller frame</text>
      </g>
      <!-- Arrows and explanation -->
      <g transform="translate(290, 50)">
        <text x="0" y="25" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#166534">1. Winding Phase (Push):</text>
        <text x="15" y="42" font-family="Inter, sans-serif" font-size="10" fill="#334155">fact(3) calls fact(2) calls fact(1) (Stack grows upward)</text>

        <text x="0" y="75" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">2. Base Case Reached (n == 1):</text>
        <text x="15" y="92" font-family="Inter, sans-serif" font-size="10" fill="#334155">Halts further recursive descent; returns 1 immediately</text>

        <text x="0" y="120" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#2563eb">3. Unwinding Phase (Pop):</text>
        <text x="15" y="137" font-family="Inter, sans-serif" font-size="10" fill="#334155">fact(2)=2*1=2 🠆 fact(3)=3*2=6 returned to main()</text>
      </g>
    </svg>
  </div>
</div>

| Parameter | Iteration (Loops) | Recursion (Self-Calling Function) |
| :--- | :--- | :--- |
| **Termination Condition** | Loop condition becomes false | **Base Case** is explicitly reached |
| **Memory Overhead** | **$O(1)$ Auxiliary Space** (Minimal register storage) | **$O(n)$ Auxiliary Stack Space** (Stack frames allocated per call) |
| **Risk of Infinite Run** | Infinite loop (consumes CPU time) | **Stack Overflow Error** (Crash due to exhausted stack RAM) |
| **Code Elegance** | Can require verbose nested index tracking | **Compact, natural & clean** for trees, graphs, divide & conquer |


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

---

#### 💻 Working C Code Example: Modular Functions: Call by Value vs Call by Reference

```c
#include <stdio.h>

void swap_by_value(int a, int b) {
    int temp = a; a = b; b = temp;
}

void swap_by_reference(int *a, int *b) {
    int temp = *a; *a = *b; *b = temp;
}

int main() {
    int x = 10, y = 20;

    swap_by_value(x, y);
    printf("After swap_by_value:     x = %d, y = %d (Unchanged!)\n", x, y);

    swap_by_reference(&x, &y);
    printf("After swap_by_reference: x = %d, y = %d (Swapped!)\n", x, y);
    return 0;
}
```

**Console Output:**
```text
After swap_by_value:     x = 10, y = 20 (Unchanged!)
After swap_by_reference: x = 20, y = 10 (Swapped!)
```


> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Call by value passes copies; caller variables cannot be modified.**
- **Call by reference passes addresses (&); caller variables can be mutated.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Passing uninitialized pointers to functions.**
- **Returning pointers to local stack variables (dangling pointer).**

