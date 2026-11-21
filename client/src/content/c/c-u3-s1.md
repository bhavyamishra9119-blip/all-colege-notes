### 1. 1D & 2D Arrays: Memory Mapping & Row-Major Formula

> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

COMPUTATIONAL & PROBLEM SOLVING IN C • UNIT–3 • COMPLETE POINT-WISE STUDY
NOTES
Data Handling (Arrays, Strings & Functions) and
Modular Programming
**Strictly Syllabus-Aligned Notes:** Built from scratch for B.Tech 1st Year — covering 1D/2D Arrays, Searching
& Sorting, String Handling & Storage, Storage Classes (auto, register, static, extern), Library & Built-in String
Functions, User-Defined Functions, Parameter Passing, Recursion, Macros, and Modular Procedure-Based
Design.
**UNIT–3:** C DATA HANDLING & MODULARITY

## PART I: Arrays & Strings

1. 1D & 2D Arrays
(Decl. & Init.)

### 2. Searching & Sorting


### 3. Strings & Storage


### 4. Storage Classes (4)


## PART II: Functions


### 5. Library & String Fns


### 6. User-Defined Fns

(Proto, Def, Params)

### 7. Recursion & Stack


### 8. Preprocessor Macros


## PART III: Modularity


### 9. Modular Programming

- Cohesion & Coupling
- Top-Down vs Bot-Up
- Procedure Design

### 10. Exam Cheat Sheet

**Figure 1:** Complete Syllabus Roadmap of Unit–3 (Data Handling & Modular Programming in C)

## PART I: ARRAYS, SEARCHING & SORTING, STRINGS AND STORAGE

CLASSES

### 1. Concepts of Arrays (1D & 2D), Declaration & Initialization


#### 1.1 Starting From Scratch: What Is an Array?

**Definition:** An array is a derived data structure that stores a fixed-size, ordered collection of
elements of the exact same data type (homogeneous) inside contiguous (side-by-side)
memory locations under one single variable name.
**Why Arrays Are Needed:** Storing marks of 60 students with individual variables (m1, m2, …,
m60) is impossible to loop through cleanly; one array int marks[60]; holds all 60 values and
lets a single for loop process them in 3 lines of code.

**Core Properties of C Arrays:**

**Zero-Based Indexing:** First element is at index 0; last element of an array of size N is at
index N - 1.
**Direct Random Access — O(1):** Any element a[i] is accessed instantaneously via pointer
arithmetic without scanning earlier elements.
Array Name = Base Address: The bare array name arr evaluates to the memory address of
its first element (&arr[0]).
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming

**No Automatic Bounds Checking in C:** Accessing arr[N] or arr[-1] causes Undefined
Behavior (corrupts adjacent memory or crashes with a Segmentation Fault).
Memory Address Calculation Formulas (High-Yield Exam Numericals):
**1D Array Element Address:** Address(A[i]) = Base_Address + (i × sizeof(data_type))
2D Array Address (Row-Major Order — Used by C):  Address(M[i][j]) = Base_Address + ((i ×
Total_Cols) + j) × sizeof(data_type)
**Total Memory Occupied:** 1D: N × sizeof(type) bytes  |  2D: Rows × Cols × sizeof(type) bytes.

#### 1.2 One-Dimensional (1D) Arrays: Declaration & Initialization

**Declaration Syntax:** data_type array_name[size]; (e.g., int marks[5]; reserves 5 × 4 =
20 contiguous bytes on a 32/64-bit system).
**Compile-Time Initialization Modes:** 
**Full Initialization:** int a[5] = {10, 20, 30, 40, 50};
**Partial Initialization:** int a[5] = {10, 20}; → remaining unspecified elements (a[2],
a[3], a[4]) are automatically initialized to 0!
**Zero-All Shorthand:** int a[5] = {0}; → sets every single element to 0.
**Unsized Initialization:** int a[] = {10, 20, 30}; → compiler automatically counts
elements and sets size to 3.
**Run-Time Initialization:** Read values dynamically from the user inside a for loop using
scanf("%d", &a[i]);.

#### 1.3 Two-Dimensional (2D) Arrays (Matrices)

**Concept:** An "array of arrays" organized conceptually as a rectangular table of Rows and
Columns (ideal for mathematical matrices, game boards, and spreadsheets).
**Declaration Syntax:** data_type matrix_name[rows][cols]; (e.g., int mat[2][3]; holds 2
× 3 = 6 integers).
**Compile-Time Initialization:** 
Nested Braces (Clear & Recommended): int m[2][3] = { {1, 2, 3}, {4, 5, 6} };
**Flat Braces (Filled Row-by-Row):** int m[2][3] = {1, 2, 3, 4, 5, 6};
**Omitted Row Dimension Rule:** You may omit the first dimension (int m[][3] =
{1,2,3,4,5,6};), but the column count is strictly mandatory so the compiler knows each
row’s stride length!
**Row-Major Memory Storage:** Physical RAM is strictly 1D (linear). C stores 2D arrays in Row-
Major Order — placing all elements of Row 0 first, immediately followed by Row 1, then Row 2.
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming

// Run-time input and display of a 2x3 matrix using nested loops:
int mat[2][3], i, j;
for (i = 0; i < 2; i++) {
for (j = 0; j < 3; j++) {
scanf("%d", &mat[i][j]);
}
}
**(a) 1D Array in RAM:** int a[5] = {10, 20, 30, 40, 50}; (sizeof(int) = 4 bytes)
10 20 30 40 50
a[0] • 1000 a[1] • 1004 a[2] • 1008 a[3] • 1012 a[4] • 1016
**(b) 2D Array:** int m[2][3] — Logical Table vs. Physical Row-Major RAM Layout
1 2 3
4 5 6
→ 1 2 3 4 5 6
**Row 0:** m[0][0..2] Row 1: m[1][0..2]
**Figure 2:** Contiguous Memory Representation of 1D Arrays and Row-Major 2D Arrays in C
Feature One-Dimensional (1D) Array Two-Dimensional (2D) Array
Logical View Single linear list / vector Grid / Matrix of Rows × Columns
Declaration int a[5]; int m[3][4];
Subscripts Required 1 index (a[i]) 2 indices (m[row][col])
Traversal Loops Single for loop Nested for loops (outer = rows, inner = cols)
Omitted Size Rule int a[] = {1,2,3}; (valid) int m[][3] = {...}; (cols mandatory!)

### 2. Searching and Sorting Algorithms on Arrays


#### 2.1 Searching Techniques (Finding a Target Key)

A. Linear Search (Sequential Search)
**Core Idea:** Inspects every array element one by one from index 0 to n - 1 until a[i] == key
is found or the end is reached.
**Prerequisite:** None — works on both unsorted and sorted arrays.
**Time Complexity:** Best Case = O(1) (found at index 0); Worst / Average Case = O(n).
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming

// Linear Search from scratch (returns index or -1 if not found)
int linearSearch(int a[], int n, int key) {
for (int i = 0; i < n; i++) {
if (a[i] == key) return i;
}
return -1;
}
B. Binary Search (Divide & Conquer)
**Core Idea:** Repeatedly splits a sorted search window in half by checking the middle index mid =
low + (high - low) / 2.
**Prerequisite:** Array MUST be sorted (ascending or descending) beforehand!
**Step-by-Step Decision Logic:** 

### 1. If a[mid] == key → Match found! Return mid.


### 2. If key < a[mid] → Discard right half; set high = mid - 1.


### 3. If key > a[mid] → Discard left half; set low = mid + 1.


### 4. Repeat while low <= high; if loop finishes, return -1.

**Time Complexity:** Best Case = O(1); Worst Case = O(log2 n) (searches 1,000,000 items in at
most 20 comparisons!).
// Iterative Binary Search from scratch (ascending sorted array)
int binarySearch(int a[], int n, int key) {
int low = 0, high = n - 1;
while (low <= high) {
int mid = low + (high - low) / 2;
if (a[mid] == key) return mid;
else if (key < a[mid]) high = mid - 1;
else low = mid + 1;
}
return -1;
}
**Binary Search Trace:** Searching Key = 35 in Sorted Array [10, 18, 25, 30, 35, 42, 50]
**Step 1:** 10 18 25 30 (mid) 35 42 50 35 > 30 → Go Right
**Step 2:** 35 42 (mid) 50 35 < 42 → Go Left
**Step 3:** 35 ✓ Found at index 4 in only 3 comparisons!
**Figure 3:** Step-by-Step Search-Space Halving Trace of Binary Search
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming