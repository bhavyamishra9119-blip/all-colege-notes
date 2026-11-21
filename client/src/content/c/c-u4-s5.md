### 5. File Handling Operations & Stream Modes

> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

4. **Safety Rule:** Capture return in a temporary pointer (tmp = realloc(p, ...); if (tmp) p =
tmp;) so a NULL failure never loses p (preventing a Memory Leak). Always end with
free(p); p = NULL;.
**Table 4.2:** High-Yield Exam Comparison — malloc() vs. calloc() vs. realloc()
Parameter malloc() calloc() realloc()
Full Name Memory Allocation Contiguous Allocation Re-Allocation

**Arguments 1 argument:**

(total_bytes)
**2 arguments:** (n,
elem_size)
**2 arguments:** (old_ptr,
new_bytes)
Initial Value Garbage (uninitialized) All bits initialized to Zero
(0)
Old data preserved; extra bytes
garbage
Speed &
Failure
Faster; returns NULL on
fail
Slightly slower; returns
NULL
Relocates if needed; returns NULL
(old intact)
**WORKED EXAMPLE 4.1:** DYNAMIC ARRAY CREATION (CALLOC) & SAFE RESIZING (REALLOC)
**Numerical Check:** Initially allocate n = 3 integers (3 × 4 = 12 bytes, all 0), then resize to
new_n = 5 integers (5 × 4 = 20 bytes, preserving first 3 elements).
#include <stdio.h>
#include <stdlib.h>
int main() {
int n = 3, new_n = 5;
int *arr = (int *) calloc(n, sizeof(int));       /* 12 bytes allocated,
initialized to 0 */
if (arr == NULL) return 1;
arr[0] = 10; arr[1] = 20; arr[2] = 30;
int *temp = (int *) realloc(arr, new_n * sizeof(int)); /* Safe resize to
20 bytes */
if (temp == NULL) { free(arr); return 1; }
arr = temp;
arr[3] = 40; arr[4] = 50;
for (int i = 0; i < new_n; i++) printf("%d ", arr[i]);  /* Output: 10 20
30 40 50 */
free(arr); arr = NULL;                           /* Prevents leak &
dangling pointer */
return 0;
}
Computational & Problem Solving in C • Unit-IV Study Notes


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