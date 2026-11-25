> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum


> 📊 **Table 3.2: Standard File Opening Modes in fopen()**

Mode Permitted Operation If File Already Exists If File Does NOT Exist
"r" Read only Opens at start; preserves content Returns NULL (does not create)
"w" Write only Erases (truncates) content to 0 bytes Creates a new empty file
"a" Append (write at end) Preserves content; writes at EOF Creates a new empty file
"r+" Read & Write (update) Opens at start; preserves content Returns NULL
"w+" Read & Write Erases existing content to 0 bytes Creates a new empty file
"a+" Read & Append Reads from start; appends at EOF Creates a new empty file
- **WORKED EXAMPLE 3.1:** COMPLETE C PROGRAM USING FOPEN, FPRINTF, FSCANF, AND
FCLOSE
#include <stdio.h>
int main() {
FILE *fp;
int roll; float marks;
/* Phase 1: Write formatted student records to disk */
fp = fopen("marks.txt", "w");
if (fp == NULL) { printf("Error opening file!\n"); return 1; }
fprintf(fp, "%d %.2f\n", 101, 88.50);
fprintf(fp, "%d %.2f\n", 102, 92.00);
fclose(fp);                              /* Flush buffer & close write
stream */
/* Phase 2: Re-open and read back until EOF */
fp = fopen("marks.txt", "r");
if (fp == NULL) { printf("File not found!\n"); return 1; }
while (fscanf(fp, "%d %f", &roll, &marks) == 2) {   /* Checks 2 items
matched */
printf("Roll = %d, Marks = %.2f\n", roll, marks);
}
fclose(fp);
return 0;
}

### 4. Dynamic Memory Allocation (DMA)


- **### 4.1 Introduction:** Static vs. Dynamic Memory Allocation

- **Limitation of Static Allocation:** Standard arrays (int a[100];) fix size at compile time on the
Stack—wasting memory if underused or overflowing if exceeded.
- **Definition & Header:** DMA allocates, resizes, and releases exact memory blocks from the Heap
at run time using library functions declared in <stdlib.h> (malloc, calloc, realloc, free).

> 📊 **Table 4.1: Comparison Matrix — Static vs. Dynamic Memory Allocation**

Computational & Problem Solving in C • Unit-IV Study Notes

Feature Static Memory Allocation Dynamic Memory Allocation (DMA)
Allocation Time Compile time (fixed before execution) Run time (decided during execution)
Memory Segment Stack (local) or Data Segment
(global/static)
Heap memory segment
Resizability Impossible to grow or shrink Can grow or shrink anytime via
realloc()
Lifetime &
Cleanup
Automatically freed when scope exits Persists until free() (else Memory Leak)
C Process RAM Segments
High
Low
STACK (Local vars, Static) ↓
Free Growth Space
HEAP (malloc/calloc/realloc) ↑
DATA / BSS (Global & static)
TEXT / CODE (Instructions)
Heap Block States by DMA Function
- **malloc(12):** Single 12B Block (Garbage Values)
- **calloc(3, 4):** 0 0 0
3 Blocks × 4B = 12B (All Zero-Initialized)
- **realloc(p,20):** Old 12B Preserved +8B (Garbage)
- **Figure 4.1:** C Process Memory Architecture (Left) and Heap Block Mechanics for malloc, calloc, and
realloc (Right).

### 4.2 Detailed Study of malloc(), calloc(), and realloc()

- **1. malloc() — Memory Allocation:** 
- **Syntax:** ptr = (cast_type *) malloc(size_in_bytes); (e.g., (int *) malloc(n *
sizeof(int))).
- **Working:** Allocates one single contiguous block of size_in_bytes bytes from the Heap;
returns void * or NULL on failure. Leaves bytes uninitialized (garbage); faster than
calloc().
2. calloc() — Contiguous Allocation:
- **Syntax:** ptr = (cast_type *) calloc(num_elements, size_of_each_element);
- **Working:** Takes two arguments and reserves num_elements × size_of_each_element
contiguous bytes, automatically zero-initializing every bit to 0. Slightly slower due to zero-fill
step.
3. realloc() — Re-Allocation (Resizing Heap Blocks):
- **Syntax:** new_ptr = (cast_type *) realloc(old_ptr, new_total_size_in_bytes);
- **Working:** Expands/shrinks in-place if adjacent heap RAM is free; otherwise allocates a new
block, copies existing data (min(old, new)), frees the old block, and returns the new base
address. Extra expanded bytes hold garbage.
Computational & Problem Solving in C • Unit-IV Study Notes

---

#### 💻 Working C Code Example: Structures: Member Access and Structure Padding

```c
#include <stdio.h>

struct Student {
    int id;        // 4 bytes
    char grade;    // 1 byte + 3 bytes padding
    float gpa;     // 4 bytes
};

int main() {
    struct Student s1 = {101, 'A', 3.85f};

    printf("Student ID:    %d\n", s1.id);
    printf("Student Grade: %c\n", s1.grade);
    printf("Student GPA:   %.2f\n", s1.gpa);
    printf("sizeof(struct Student): %zu bytes (with padding)\n", sizeof(s1));
    return 0;
}
```

**Console Output:**
```text
Student ID:    101
Student Grade: A
Student GPA:   3.85
sizeof(struct Student): 12 bytes (with padding)
```


> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Structure members are accessed using the dot (.) operator.**
- **Pointers to structures use the arrow (->) operator: ptr->id.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Assuming sizeof(struct) is strictly the sum of member sizes (compiler adds padding!).**
- **Comparing structure variables with == (illegal in C; compare field-by-field).**

