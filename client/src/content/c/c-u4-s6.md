### 6. University Examination Solved Questions (Unit 4)

> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum


### 5. High-Yield Quick-Revision Cheat Sheet (Exam Capsule)


#### 5.1 Master Formulas & Key Constants

**Pointer Arithmetic:** (ptr ± n) = Base_Addr ± (n × sizeof(base_type)); (p2 − p1) =
(Addr2 − Addr1) ÷ sizeof(base_type).
8086 Segmented Physical Address (Far/Huge): Physical_Address = (Segment × 16) +
Offset (20-bit address = 1 MB max).
**Array-Pointer Equivalence:** a[i] ≡ *(a + i) ≡ *(p + i) ≡ p[i]; 2D array: a[i][j] ≡ *(*(a
+ i) + j).
**Pointer Size Constants:** 16-bit = 2 B; 32-bit = 4 B; 64-bit = 8 B (Near = 2 B, Far/Huge = 4 B).
**Structure vs. Union Size:** sizeof(struct) ≥ ∑ sizeof(members) (with padding);
sizeof(union) = max(sizeof(members)).
**Library Constants & Headers:** NULL ≡ (void*)0; EOF ≡ -1; File I/O → <stdio.h>; DMA →
<stdlib.h>.

#### 5.2 Master Syntax & Operator Quick-Reference

**Table 5.1:** Essential Unit-IV Syntax Patterns for Rapid Pre-Exam Revision
Concept Exact C Syntax Critical Behavior / Exam Note
Void Pointer
Deref
- (float *)vptr Direct *vptr is a compile error;
typecast required
Function
Pointer
int (*fp)(int, int) = add; Parentheses around *fp distinguish
from func returning int*
Pointer to
Array
int (*p)[5]; p + 1 jumps by 5 × sizeof(int)
Array of
Pointers
int *p[5]; Holds 5 independent pointers
Struct Ptr
Access
ptr->member or (*ptr).member . has higher precedence than *
File Read
Loop
while (fscanf(fp, "%d", &x) != EOF) Stops cleanly at End-of-File (-1)
DMA
Allocation
(int*)malloc(n*sizeof(int)) / calloc(n,
sizeof(int))
Always check if (p == NULL)
before using
Computational & Problem Solving in C • Unit-IV Study Notes


#### 5.3 Top 10 Common University Exam Mistakes to Avoid

1. **Mistake 1:** Confusing int (*p)[5] with int *p[5] → Fix: Parentheses bind * to p first =
Pointer to Array; no parentheses = Array of Pointers.
2. **Mistake 2:** Returning the address of a local non-static variable from a function → Fix: Creates a
Dangling Pointer; return a static, Heap (malloc), or caller-passed address instead.
3. **Mistake 3:** Writing *ptr.roll to access a struct member via pointer → Fix: Dot (.) binds tighter
than *; always write ptr->roll or (*ptr).roll.
4. **Mistake 4:** Forgetting the trailing semicolon ; after a struct { ... }; or union { ... }; block
**→ Fix:** Structure/union definitions always terminate with a semicolon.
5. **Mistake 5:** Assuming sizeof(struct) is always the exact arithmetic sum of its members → Fix:
Account for compiler structure padding for CPU word alignment.
6. **Mistake 6:** Dereferencing a void * pointer without typecasting → Fix: Always cast first: *(int
- )vp.
7. **Mistake 7:** Using fopen("data.txt", "w") when intending to add records to an existing file →
**Fix:** "w" wipes existing data to 0 bytes; use append mode "a" instead.
8. **Mistake 8:** Passing val instead of &val to fscanf() for scalar variables → Fix: Like scanf(),
fscanf() requires memory addresses (&) for int, float, and char.
9. **Mistake 9:** Overwriting the original pointer directly with p = realloc(p, new_size); → Fix: If
realloc() fails and returns NULL, the old block address is lost (memory leak); use a temporary
pointer first.
10. **Mistake 10:** Saying malloc() initializes memory to zero → Fix: malloc() leaves garbage
values; only calloc() zero-initializes memory.

#### 5.4 High-Probability B.Tech University Exam Questions (Unit-IV)

**Short-Answer (2–3 Marks):** 
Differentiate between Wild Pointer and Dangling Pointer with code snippets.
Explain Void Pointer and state why explicit typecasting is mandatory before dereferencing.
Contrast Far Pointer vs. Huge Pointer normalization in 16-bit segmented memory.
Differentiate between dot (.) and arrow (->) operators for structure access.
Compare "w" vs. "a" file opening modes and explain the role of fclose().
Contrast malloc() vs. calloc() with syntax and default memory initialization.
**Long-Answer (7–10 Marks):** 
Classify and explain all 8 types of pointers in C with syntax, memory sizes, and examples.
Differentiate Pointer to Array and Array of Pointers with labeled memory diagrams and a C
program.
Compare Structure vs. Union with memory layout diagrams and write a complete C program
demonstrating Nested Structures, Array of Structures, and passing structures via pointers.
Differentiate Text vs. Binary files and write a complete C program demonstrating fopen,
fprintf, fscanf, and fclose with proper error handling.
Explain Dynamic Memory Allocation, compare Static vs. Dynamic allocation, and explain
malloc(), calloc(), and realloc() with a complete resizing C program.
Computational & Problem Solving in C • Unit-IV Study Notes