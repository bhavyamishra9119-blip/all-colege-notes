### 2. Pointer Taxonomy & Real-Mode 16-Bit Architecture (Near, Far, Huge)

> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

**WORKED EXAMPLE 1.2 (NUMERICAL):** 8086 FAR VS. HUGE POINTER PHYSICAL ADDRESS
NORMALIZATION

> 💡 **Formula: 20-bit Physical Address = (Segment × 16dec) + Offset = (Segment × 0x10) +**

Offset
1. **Far Pointer A = 0x1234:** 0x0025: Physical Address = 0x12340 + 0x0025 = 0x12365.
2. **Far Pointer B = 0x1236:** 0x0005: Physical Address = 0x12360 + 0x0005 = 0x12365. (Same
byte in RAM, yet Far comparison A == B evaluates to False because raw 32-bit pairs differ!)
3. **Normalized Huge Form of 0x12365:** Top 4 hex digits = Segment (0x1236), last hex digit =
Offset (0x0005) ⇒  Both normalize uniquely to 0x1236:0x0005, so Huge comparison A == B
evaluates to True.

#### 1.3 Pointer and Array Relationship

**Array Decay Principle:** In C expressions, an array name automatically decays to a constant
pointer pointing to its first element (arr ≡ &arr[0]).
**Equivalent Indexing Identities:** Given int a[5] and int *p = a;, element i can be accessed
**identically via:** a[i] ≡ *(a + i) ≡ *(p + i) ≡ p[i] ≡ i[a].
**Key Differences:** An array name is a non-modifiable constant (a++ is a compile error), whereas
a pointer variable is modifiable (p++ is valid). Also, sizeof(a) returns total array bytes (e.g., 20
B), while sizeof(p) returns pointer size (4/8 B).

#### 1.4 Pointer to Array vs. Array of Pointers (High-Frequency Exam Topic)

**Operator Precedence Rule:** Subscript [] has higher precedence than dereference *;
parentheses decide the declaration's meaning.
**Pointer to an Array — int (*p)[3];:** p is a single pointer pointing to an entire 1D array of 3
integers. p + 1 jumps by the entire array size (3 × 4 = 12 bytes). Ideal for 2D matrix traversal
via *(*(p + i) + j).
**Array of Pointers — int *p[3];:** p is an array holding 3 independent integer pointers (p[0],
p[1], p[2]). Ideal for storing variable-length strings (char *names[3] = {"CSE", "ECE",
"AI"};).

### 1. Pointer to Array: int (*p)[3]

p (1 ptr) 10 20 30
Single 12-byte Array Block
p + 1 jumps by 12 bytes (3 × 4)
sizeof(p) = 4/8 bytes (1 pointer)

### 2. Array of Pointers: int *p[3]

p[0]
p[1]
p[2]

$$a = 10 (0x100)$$


$$b = 20 (0x408)$$


$$c = 30 (0x920)$$

sizeof(p) = 3 × sizeof(int*) (3 pointers)
**Figure 1.3:** Structural Memory Contrast Between a Pointer to an Array and an Array of Pointers.
Computational & Problem Solving in C • Unit-IV Study Notes

**Table 1.2:** Exam Comparison — Pointer to Array vs. Array of Pointers
Feature Pointer to Array (int (*p)[N]) Array of Pointers (int *p[N])
Core Entity A single pointer pointing to an entire array of N
elements
An array containing N separate pointer
elements
Parentheses Mandatory around *p to override [] precedence Not required ([] binds tighter than *)
sizeof(p) Size of 1 pointer (4 B on 32-bit, 8 B on 64-bit) N × sizeof(int *)
p + 1
Jump
Skips N × sizeof(int) bytes (entire row) Skips sizeof(int *) bytes (next
pointer slot)
Typical Use 2D matrix row traversal Array of strings / jagged arrays

#### 1.5 Functions Returning a Pointer

**Definition & Syntax:** A C function can return a memory address using data_type
- function_name(parameter_list) { ... return ptr; }.
Critical Safety Warning (Stack Frame Rule): NEVER return the address of a local non-static
variable (int x = 10; return &x;). When the function exits, its stack frame is destroyed,
producing a Dangling Pointer.

**Three Safe Patterns for Returning a Pointer:**

1. Return a pointer to a static local variable (persists in Data Segment for program lifetime).

### 2. Return a pointer to dynamically allocated Heap memory (via malloc / calloc).

3. Return a pointer derived from an array/pointer passed as an argument by the caller.
**WORKED EXAMPLE 1.3:** SAFE FUNCTION RETURNING A POINTER TO MAXIMUM ARRAY
ELEMENT
#include <stdio.h>
int *findMax(int *arr, int n) {          /* Returns int pointer safely
(caller's array) */
int *maxPtr = &arr[0];
for (int i = 1; i < n; i++) {
if (arr[i] > *maxPtr) maxPtr = &arr[i];
}
return maxPtr;
}
int main() {
int a[4] = {12, 45, 9, 31};
int *p = findMax(a, 4);
printf("Max Value = %d at Address = %p\n", *p, (void *)p); /* Output: 45
- /
return 0;
}
Computational & Problem Solving in C • Unit-IV Study Notes


### 2. Structures in C


#### 2.1 Basics of Structure & Structure Members

**Definition:** A structure (struct) is a user-defined heterogeneous composite data type that
groups logically related variables of different data types (called members or fields) under one
name (unlike homogeneous arrays).
**Memory Allocation Rule:** Defining a struct template creates a blueprint and allocates zero
bytes. Memory is reserved only when a structure variable is declared.
**Syntax & Structure Padding:** Each member receives a distinct slot in declaration order;
compilers may insert unused padding bytes for CPU word alignment, so sizeof(struct) ≥ ∑
sizeof(members).
struct Student {              /* Blueprint (tag = Student); trailing semicolon
mandatory! */
int roll;                 /* Structure member 1 (4 bytes) */
char grade;               /* Structure member 2 (1 byte)  */
float cgpa;               /* Structure member 3 (4 bytes) */
};
struct Student s1 = {101, 'A', 8.95};   /* Variable declaration + initialization
- /

#### 2.2 Structure vs. Union

**Core Architectural Difference:** In a struct, every member receives its own separate memory
block so all members store values simultaneously. In a union, all members share the exact same
starting memory address—the compiler allocates only enough space for the largest single
member, so only one member is valid at any instant.
**Overwriting Behavior:** Assigning a value to a second union member overwrites the bit pattern of
the previous member. Ideal for memory-constrained embedded systems or variant records.
struct Record (Separate Memory Blocks)
int id
4 Bytes
ch pad 3B double sal
8 Bytes
0x100 0x104 0x108 0x110
Total Size = 16 Bytes (with alignment)
All 3 members active simultaneously
union Record (Shared Overlapping Block)
**double sal (Bytes 0–7:** 8 Bytes)
int id (Bytes 0–3)
ch (Byte 0 only)
All start at 0x100!
Total Size = max(4, 1, 8) = 8 Bytes
Only 1 member valid at a time
**Figure 2.1:** Memory Allocation Geometry of struct Record (Sum + Padding) vs. union Record
(Shared Largest Member).
**Table 2.1:** Comprehensive Comparison Matrix — Structure vs. Union
Computational & Problem Solving in C • Unit-IV Study Notes