### 2. Searching & Sorting Algorithms: Linear, Binary & Bubble Sort

> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

Comparison
Criterion
Linear Search Binary Search
Data Prerequisite Works on unsorted or sorted arrays Strictly requires a sorted array
Strategy Sequential element-by-element scan Divide & Conquer (halves range each
step)
Worst-Case Time O(n) O(log2 n)
Best Use Case Small or constantly changing unsorted
lists
Large static sorted arrays / dictionaries

#### 2.2 Sorting Techniques (Arranging Elements in Order)

A. Bubble Sort (Adjacent Swapping)
**Mechanism:** Repeatedly scans adjacent pairs (a[j] and a[j+1]) and swaps them if out of
order. After Pass i, the i-th largest element "bubbles" permanently to the end.
**Early-Exit Optimization:** A swapped flag stops sorting immediately if a full pass makes zero
swaps (giving O(n) best-case time on already-sorted arrays!).
// Bubble Sort from scratch (ascending order)
void bubbleSort(int a[], int n) {
for (int i = 0; i < n - 1; i++) {
int swapped = 0;
for (int j = 0; j < n - 1 - i; j++) {
if (a[j] > a[j + 1]) {
int temp = a[j]; a[j] = a[j + 1]; a[j + 1] = temp;
swapped = 1;
}
}
if (!swapped) break;
}
}
B. Selection Sort (Minimum Selection)
**Mechanism:** Divides the array into a sorted left part and unsorted right part; in each pass, scans
the unsorted region to locate the index minIdx of the smallest element and performs at most
one swap into position i.
**Advantage:** Minimizes total memory writes/swaps (at most n − 1 swaps total).
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming

// Selection Sort from scratch (ascending order)
void selectionSort(int a[], int n) {
for (int i = 0; i < n - 1; i++) {
int minIdx = i;
for (int j = i + 1; j < n; j++) {
if (a[j] < a[minIdx]) minIdx = j;
}
if (minIdx != i) {
int temp = a[i]; a[i] = a[minIdx]; a[minIdx] = temp;
}
}
}
C. Insertion Sort (Card-Hand Placement)
**Mechanism:** Picks each element key = a[i] one by one and shifts larger elements in the
already-sorted left subarray one spot right to insert key into its exact slot.
**Advantage:** Blazingly fast (O(n)) on small or nearly sorted datasets and preserves equal-key
order (stable).
**(a) Bubble Sort:** [50, 20, 40, 10]
**Pass 1:** [ 20, 40, 10, 50 ] (50 locked)
**Pass 2:** [ 20, 10, 40, 50 ] (40 locked)
**Pass 3:** [ 10, 20, 40, 50 ] ✓  Sorted
Largest value bubbles right each pass
**(b) Selection Sort:** [50, 20, 40, 10]
**Pass 1:** [ 10,20, 40, 50 ] (swap 50↔10)
**Pass 2:** [ 10, 20, 40, 50 ] (20 min)
**Pass 3:** [ 10, 20, 40, 50 ] ✓  Sorted
Smallest value selected left (≤1 swap)
**Figure 4:** Pass-by-Pass Sorting Behavior of Bubble Sort vs. Selection Sort
Sorting
Algorithm
Best Time Average /
Worst
Extra
Space
Stable? Key Trait
Bubble Sort O(n) (with
flag)
O(n2) O(1) Yes Simplest; many swaps
Selection Sort O(n2) O(n2) O(1) No Minimum total swaps (≤
n−1)
Insertion Sort O(n) O(n2) O(1) Yes Fastest on nearly sorted
arrays
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming


### 3. String Handling & String Storage in C


#### 3.1 Starting From Scratch: How Strings Work in C

**No Native String Type:** Unlike Python or Java, C has no dedicated string data type.
**C String Definition:** A C string is simply a 1D array of characters (char) terminated by a
special Null Character '\0' (ASCII value 0).
**Role of '\0' (Crucial Exam Point):** Without '\0', functions like printf("%s") and
strlen() would keep reading past the end of the array into random garbage RAM!
**Sizing Rule:** To store a string of N visible characters, you MUST allocate at least N + 1 bytes (the
**extra 1 byte holds '\0'). Example:** "HELLO" has length 5, but occupies 6 bytes!

#### 3.2 String Storage & Initialization Methods


### 1. String Literal into Mutable Array (Stack Storage — Recommended):

char s1[] = "HELLO"; → Compiler automatically appends '\0' (size = 6 bytes).
Characters can be modified (e.g., s1[0] = 'J'; is valid).

### 2. Character-by-Character Brace Initialization:

char s2[6] = {'H', 'E', 'L', 'L', 'O', '\0'}; → You MUST write '\0' explicitly!

### 3. Character Pointer to String Literal (Read-Only Data Segment):

const char *p = "HELLO"; → Pointer p sits on Stack pointing to read-only memory.
Attempting p[0] = 'J'; causes a runtime crash!

### 4. Array of Strings (2D Character Array):

char names[3][10] = {"Amit", "Neha", "Raj"}; → Each row holds one null-terminated
string up to 9 characters + '\0'.

#### 3.3 String Input / Output & Manual Traversal

**Important scanf Rule:** Never write & before a string array name in scanf("%s", str);
because str is already a base memory address! However, scanf("%s") stops at the very first
space.
**Safe Multi-Word Input:** Use fgets(str, sizeof(str), stdin); (reads spaces safely and
prevents buffer overflow; avoid unsafe deprecated gets()).

**Manual String Length / Traversal Loop (From Scratch):**

int len = 0;
while (str[len] != '\0') {
len++;     // Counts characters until null terminator is hit
}
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming

**Memory Storage of:** char word[6] = "HELLO"; (strlen = 5, sizeof = 6 bytes)
'H' (72) 'E' (69) 'L' (76) 'L' (76) 'O' (79) '\0' (0)
word[0] • 2000word[1] • 2001word[2] • 2002word[3] • 2003word[4] • 2004 Null End • 2005
1 byte per char (ASCII stored as integer) • Always reserve +1 byte for '\0'
**Figure 5:** Contiguous Byte-by-Byte Storage of a Null-Terminated String in C RAM
I/O Function Reads / Prints
Spaces?
Buffer Safe? Exam & Practical Note
scanf("%s", s) No (stops at
whitespace)
Only with width
(%9s)
Best for single-word inputs; omit
&
fgets(s, n, stdin) Yes (full line) Yes (Safest) Recommended modern standard
for sentences
gets(s) Yes No (Removed in
C11)
Never use in real code (causes
buffer overflow)
printf("%s", s) /
puts(s)
Yes Yes (if null-
terminated)
puts() automatically prints a
trailing newline

### 4. Storage Classes in C (auto, register, static, extern)


#### 4.1 What Does a Storage Class Control?

Every variable in C has a Storage Class that defines four exact attributes:
1. **Storage Location:** Where in hardware it lives (RAM Stack, RAM Data/BSS segment, or CPU
Register).
2. **Default Initial Value:** Value assigned if the programmer forgets to initialize it (Garbage vs. 0).
3. **Scope (Visibility):** Which functions or files are allowed to read/write the variable.
4. **Lifetime (Longevity):** How long the variable stays alive in memory during execution.

#### 4.2 Detailed Breakdown of All Four C Storage Classes

1. auto (Automatic — Default for Local Variables)
**Behavior:** Every ordinary local variable declared inside a function or block is auto by default
(int x; is identical to auto int x;).
**Attributes:** Stored on the Stack; default value is Garbage (unpredictable); scope is local to its
enclosing block; created on block entry and destroyed immediately on block exit.
Computational & Problem Solving in C • UNIT–3: Data Handling & Modular Programming