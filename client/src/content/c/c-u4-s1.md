> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

B.TECH (1ST YEAR) • COMPUTATIONAL & PROBLEM SOLVING IN C • UNIT-IV
Advanced Data Handling & Dynamic Memory
Management
Comprehensive, Point-Wise, Exam-Ready Technical Study Notes with Memory Diagrams, Formulas &
Worked Programs
- **Prescribed Unit-IV Syllabus:** 
- **Pointers:** Basics of pointers, Types of pointer (Null, Void, Wild, Dangling, Function, Near, Far, and Huge
Pointers), pointer and array, pointer to array, array of pointers, functions returning a pointer.
- **Structure:** Basics of structure, structure members, structure vs. union, accessing structure members,
nested structures, array of structures, structure and functions, structures and pointers.
- **File Handling:** Introduction about file, type of files, file operations (fopen, fscanf, fprintf, fclose).
- **Dynamic Memory Allocation:** Introduction, malloc, calloc, realloc.
- **UNIT-IV:** C PROGRAMMING MAP

### 1. Pointers

• Basics & Arithmetic
• 8 Pointer Types
• Ptr-to-Arr vs Arr-of-Ptr
• Func Returning Ptr

### 2. Structures

• Struct & Members
• Struct vs Union
• Nested & Array
• Functions & Pointers

### 3. File Handling

• Streams & FILE *
• Text vs Binary
• fopen & Modes
• fprintf, fscanf, fclose

### 4. Dynamic Memory

• Static vs Heap DMA
• malloc() Alloc
• calloc() Zero-Init
• realloc() Resizing
- **Figure 1.1:** Master Topic Architecture Map of Unit-IV (Computational & Problem Solving in C).

### 1. Pointers in C


### 1.1 Basics of Pointers & Memory Addressing

- **RAM Byte-Addressable Model:** Main memory (RAM) is a linear sequence of bytes, each with a
unique hexadecimal memory address. Declaring int x = 25; reserves sizeof(int)
contiguous bytes and binds x to its base address.
- **Definition of a Pointer:** A pointer is a derived variable storing the memory address of another
variable (or function) rather than an ordinary data value.
- **Declaration Syntax:** data_type *pointer_name; — the base data_type tells the compiler how
many bytes to read/write during dereferencing and pointer arithmetic.
- **Core Pointer Operators:** Address-of (&) returns a variable's base address (p = &x;);
Dereference (*) accesses/modifies the value at that address (*p = 50;).
Computational & Problem Solving in C • Unit-IV Study Notes

- **Pointer Size & Arithmetic Rules:** Every standard pointer occupies 2 B (16-bit), 4 B (32-bit), or 8
B (64-bit) regardless of base type. Valid operations: ptr ± n, ptr++/ptr--, and ptr2 - ptr1
(same array). Adding/multiplying/dividing pointers is illegal.
Pointer Arithmetic Scaling Equations (Exam-Critical):

### 1. Address Increment/Decrement: New Address (ptr ± n) = Base Address ± ( n ×

sizeof(base_type) )

### 2. Pointer Difference (same array): (ptr2 − ptr1) = ( Address(ptr2) − Address(ptr1) ) ÷

sizeof(base_type)
Normal Variable (int x)
25
- **Address (&x):** 0x1004
Occupies 4 bytes (0x1004–1007)
Pointer Variable (int *p = &x)
0x1004
- **Address (&p):** 0x2000
*p fetches 25 | p+1 = 0x1008
points to (*p == 25)
p == &x == 0x1004 | *p == x == 25 | *(&x) == 25
- **Figure 1.2:** Memory Cell Model of a C Pointer Variable, Indirection (*p), and Address Scaling.
- **WORKED EXAMPLE 1.1 (NUMERICAL):** POINTER ARITHMETIC TRACE
- **Given:** On a 32-bit system (sizeof(int)=4, sizeof(double)=8, sizeof(char)=1), pointers
int *pi, double *pd, and char *pc all hold base address 1000. Compute pi + 3, pd + 2,
and pc - 4.
- **1. pi + 3:** 1000 + (3 × 4) = 1000 + 12 = 1012.
- **2. pd + 2:** 1000 + (2 × 8) = 1000 + 16 = 1016.
- **3. pc - 4:** 1000 − (4 × 1) = 1000 − 4 = 996.

### 1.2 Types of Pointers in C (All 8 Syllabus Categories)


- **### 1. Null Pointer:** Explicitly assigned NULL ((void *)0 in <stdio.h>/<stddef.h>), signifying it points

to no valid memory address. Used for safe initialization and error checking. Dereferencing triggers
a Segmentation Fault.

- **### 2. Void (Generic) Pointer:** Declared as void *ptr;. Holds the address of any data type (int,

- **float, struct). Rule:** Cannot be dereferenced directly—must be typecast first (e.g., *(int
*)ptr). Returned by malloc() and calloc().

- **### 3. Wild Pointer:** An uninitialized local pointer (e.g., int *p;) holding a random garbage address.

Writing via *p corrupts memory. Fix: initialize to NULL or a valid address immediately.

- **### 4. Dangling Pointer:** Points to memory that has already been freed (free()) or whose local stack

- **variable went out of scope. Fix:** set ptr = NULL; immediately after free(ptr).
Computational & Problem Solving in C • Unit-IV Study Notes


- **### 5. Function Pointer:** Stores the starting address of a function's executable code: int (*fp)(int,

int) = &add;; invoked via (*fp)(10, 20) or fp(10, 20). Used for callbacks and jump tables.

### 1.2 Types of Pointers in C (Continued: Legacy 16-bit Segmented Pointers)


### 6. Near Pointer (16-bit 8086 DOS Model): A 2-byte (16-bit) pointer storing only an offset address

within the active 64 KB segment (0x0000 to 0xFFFF). Fast execution, but cannot access memory
beyond 64 KB.

### 7. Far Pointer (16-bit 8086 DOS Model): A 4-byte (32-bit) pointer storing both a 16-bit Segment

- **and 16-bit Offset (Segment:** Offset), accessing the entire 1 MB (220 bytes) RAM. Limitation: Not
- **normalized—two different Segment:** Offset pairs can point to the same physical byte, making
comparisons unreliable, and offset arithmetic wraps around at 64 KB.

### 8. Huge Pointer (16-bit 8086 DOS Model): Also a 4-byte (32-bit) Segment:Offset pointer covering

1 MB RAM, but automatically normalized after every arithmetic step so offset always stays in
0x0000–0x000F. Guarantees a unique address per physical byte, safe comparisons (==, <), and
arrays larger than 64 KB.

> 📊 **Table 1.1: Master Classification Matrix of All Eight Pointer Types in C**

Pointer Type Declaration Example Memory Size /
Range Key Characteristic / Rule
Null Pointer int *p = NULL; Arch-dependent
(4/8 B)
Points to address 0; safe sentinel; never
dereference
Void Pointer void *vp = &x; Arch-dependent
(4/8 B)
Generic address holder; requires typecast *
(int*)vp
Wild Pointer int *p; (uninit) Arch-dependent Holds garbage address; causes undefined
behavior/crash
Dangling
Pointer
free(p); (old addr) Arch-dependent Points to freed/out-of-scope RAM; fix via p =
NULL;
Function
Pointer
int (*fp)(int,
int);
Code pointer size Stores function entry address; enables
dynamic calls
Near Pointer int near *p; 2 Bytes (64 KB
max)
16-bit offset only inside current data segment
(16-bit DOS)
Far Pointer int far *p; 4 Bytes (1 MB
max)
- **Segment:** Offset; NOT normalized; wraps at 64
KB offset
Huge Pointer int huge *p; 4 Bytes (1 MB
max)
- **Segment:** Offset; normalized (offset 0–15);
crosses 64 KB
Computational & Problem Solving in C • Unit-IV Study Notes