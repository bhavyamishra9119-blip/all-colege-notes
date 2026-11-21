> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

Parameter Structure (struct) Union (union)
Keyword struct union
Memory Size Sum of all members' sizes (+ alignment
padding)
Size of the largest single member only
Storage Model Every member occupies a unique memory
location
All members share the same base memory
address
Member
Access
All members can hold values and be read
simultaneously
Only the most recently assigned member is
valid
Initialization Multiple members can be initialized in { ...
}
Only the first member can be initialized
directly
Side Effect Modifying one member never affects other
members
Modifying one member overwrites all other
members

### 2.3 Accessing Structure Members & Nested Structures

Dot (.) vs. Arrow (->): Use . with normal structure variables (s1.roll); use -> with structure
pointers (ptr->roll, shorthand for (*ptr).roll).
- **Nested Structures:** Defining one structure inside another (either separately as struct Date
doj; or embedded inline). Access nested fields by chaining dots outermost-to-innermost:
emp.doj.y = 2026; or empPtr->doj.y = 2026;.

### 2.4 Array of Structures

- **Concept:** Stores N homogeneous records of a structure type contiguously: struct Student
cls[60];.
- **Memory Footprint & Access:** Occupies N × sizeof(struct Student) bytes; access elements
inside loops via cls[i].roll and cls[i].cgpa.

### 2.5 Structure and Functions, and Structures and Pointers

Passing Structures to Functions (3 Methods):

- **### 1. Individual Members:** printRoll(s1.roll); — behaves like passing standard primitive

arguments.

- **### 2. Whole Structure by Value:** void display(struct Student s); — copies all bytes onto the

stack; protects original data but adds memory/CPU overhead for large structs.

### 3. Structure by Address / Pointer (Recommended): void addBonus(struct Student *p); —

passes only 4/8 bytes (fast) and allows in-place edits via p->cgpa.
- **Returning a Structure:** Functions can return complete structures by value (e.g., struct Complex
add(struct Complex a, struct Complex b)).
- **Pointer Precedence Trap:** Dot (.) binds tighter than dereference (*). Writing *p.roll parses as
*(p.roll) (compile error!). Always write (*p).roll or p->roll.
Computational & Problem Solving in C • Unit-IV Study Notes

- **WORKED EXAMPLE 2.1:** NESTED STRUCTURE, ARRAY OF STRUCTURES & POINTER-TO-
STRUCTURE FUNCTION
#include <stdio.h>
struct Date { int d, m, y; };
struct Student {
int roll;
float marks;
struct Date dob;                     /* Nested structure member */
};
void graceMarks(struct Student *p, float bonus) {
p->marks += bonus;                   /* Arrow operator modifies caller's
record */
}
int main() {
struct Student s[2] = { {101, 78.5, {12, 5, 2006}}, {102, 84.0, {20, 8,
2005}} };
graceMarks(&s[0], 5.0);              /* Pass address of s[0] */
for (int i = 0; i < 2; i++)
- **printf("Roll:** %d Marks:%.1f DOB:%d/%d/%d\n",
s[i].roll, s[i].marks, s[i].dob.d, s[i].dob.m, s[i].dob.y);
return 0;
}

### 3. File Handling in C


### 3.1 Introduction to Files & The FILE Pointer

- **Need for Persistent Storage:** Variables and arrays reside in volatile RAM and vanish when
execution ends. A file is a named sequence of bytes stored permanently on secondary storage
(HDD/SSD).
Streams & FILE *fp (<stdio.h>): C treats every file as a byte stream (alongside stdin,
stdout, stderr). The FILE structure holds the OS descriptor, RAM buffer address, current
cursor position, and EOF/error flags.
Computational & Problem Solving in C • Unit-IV Study Notes


### 3.2 Types of Files in C (Text vs. Binary)

- **Text Files (.txt, .c, .csv):** Store human-readable ASCII characters separated by \n. Easy to
edit, but numeric values require ASCII ↔ binary conversion (slower I/O, more bytes for large
integers).
- **Binary Files (.bin, .dat, .exe):** Store raw machine bit patterns identical to RAM layout.
Faster, compact (e.g., 1234567 uses 4 bytes in binary vs. 7 bytes as ASCII text), and unreadable
in plain text editors.

> 📊 **Table 3.1: Comparison Matrix — Text Files vs. Binary Files**

Criterion Text File Binary File
Data
Representation
Sequence of ASCII/Unicode characters Raw sequence of binary bits (0s and 1s)
Human Readability Easily readable in any plain text editor Not human-readable (displays gibberish)
Storage Efficiency Larger for numeric datasets (1 byte per
digit)
Compact (exact sizeof bytes in RAM)
Speed &
Conversion
Slower (ASCII ↔ binary & \n translation) Faster (direct block copy; zero translation)
Opening Modes "r", "w", "a", "r+", "w+", "a+" "rb", "wb", "ab", "rb+", "wb+",
"ab+"

### 1. Declare

FILE *fp;

### 2. Open File

fp = fopen(...) fp == NULL?
YES
Print Error & Exit
NO 3. Read/Write
fprintf / fscanf

### 4. Close

fclose(fp)
Loop until EOF (-1)
Flushes
RAM Buffer
- **Figure 3.1:** Step-by-Step C File Operations Lifecycle and NULL-Check Safety Flowchart.

### 3.3 Core File Operations (fopen, fscanf, fprintf, fclose)


### 1. FILE *fopen(const char *filename, const char *mode); — Opens/creates the file in the

requested mode. Returns a valid FILE * on success or NULL on failure; always verify if (fp ==
NULL).
2. int fprintf(FILE *fp, const char *format, ...); — Writes formatted text to stream fp
(identical to printf but file-directed); returns characters written or negative on error.
3. int fscanf(FILE *fp, const char *format, &var1, ...); — Reads formatted input from fp
into variable addresses; returns matched item count, or EOF (-1) at end of file.
4. int fclose(FILE *fp); — Flushes buffered RAM data to disk and releases the OS handle;
returns 0 on success or EOF on error. Omitting it risks data truncation.
Computational & Problem Solving in C • Unit-IV Study Notes