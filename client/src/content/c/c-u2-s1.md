### 1. Tokens, Keywords, Identifiers & Primitive Data Types

> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

B.TECH FIRST YEAR • COMPUTATIONAL & PROBLEM SOLVING IN C
**Unit-II:** Core Programming Concepts and Control
Structures
**Official Syllabus Coverage:** Core Programming Concepts (Data types, Constants, Variables, Operators &
Expressions, Precedence & Associativity, Type Conversion, Header Files) • Decision Control Structure (if, if-else, if-
else-if, switch, Nesting) • Loop Control Structure (for, while, do-while, Nested Loops, goto, break, continue)
**UNIT-II:** CORE CONCEPTS & CONTROL STRUCTURES (C)

### 1. Core Programming

- Data Types & Modifiers
- Constants & Variables
- Operators & Expressions
- Precedence & Associativity
- Type Conversion (Imp / Exp)
- Header Files (#include)

### 2. Decision Control

- Simple if Statement
- if-else Statement
- if-else-if Ladder
- switch-case & Fall-Through
- Nesting (Nested if / switch)
- Dangling-else Resolution

### 3. Loop Control

- **Entry-Controlled:** for, while
- **Exit-Controlled:** do-while
- Nested Loops & Tracing
- **Jumping:** break Statement
- **Jumping:** continue Statement
- **Jumping:** goto & Labels
**Figure 1:** Master Topic Map outlining the complete Unit-II syllabus hierarchy in Computational & Problem Solving
in C.

### 1. Core Programming Concepts


#### 1.1 Data Types in C

**Definition:** A data type specifies the category of data a variable can store, the exact amount of
memory (in bytes) allocated to it, the range of permissible values, and the set of operations that
can be legally performed on it.
**Why Data Types Matter:** Computer memory stores everything as raw binary bits (0s and 1s). The
data type instructs the C compiler how to interpret a sequence of bits—for example, the 8-bit
binary pattern 01000001 represents the integer 65 as an int, or the uppercase letter 'A' as a
char.

**Classification of C Data Types:**

1. Primary (Fundamental / Built-in) Data Types: int (integers), char (single characters),
float (single-precision floating-point), double (double-precision floating-point), and void
(empty / no value).
2. **Derived Data Types:** Constructed from primary types (e.g., arrays, pointers, functions—
studied in later units).
3. **User-Defined Data Types:** Defined by the programmer (e.g., struct, union, enum,
typedef—studied in later units).
**Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

**Type Modifiers (Qualifiers):** Keywords placed before primary data types to alter their memory
**size or sign interpretation:** 
**Sign Modifiers:** signed (default for int; stores negative, zero, and positive values using the
Most Significant Bit as the sign bit) and unsigned (stores only zero and positive values,
doubling the positive range).
**Size Modifiers:** short (reduces memory footprint, typically 2 bytes) and long / long long
(expands memory footprint and range, e.g., 4 or 8 bytes; long double expands floating-point
precision).
Bit-Range Formulas (Exam Derivation): For an integer data type occupying n bits (where 1 byte
= 8 bits):
**Unsigned Integer Range (n bits):** 0  to  (2n − 1)   |   Signed Integer Range (2's
**Complement, n bits):** −2n−1  to  +(2n−1 − 1)
Worked Derivation (1-Byte Character & 2-Byte Integer):
1. **1-byte unsigned char (n = 8 bits):** Range = 0 to (28 − 1) = 0 to 255.
2. **1-byte signed char (n = 8 bits):** Range = −27 to +(27 − 1) = −128 to +127.
3. **2-byte short int (n = 16 bits):** Range = −215 to +(215 − 1) = −32,768 to +32,767.
4. **4-byte int (n = 32 bits):** Range = −231 to +(231 − 1) = −2,147,483,648 to +2,147,483,647.
**Role of void Data Type:** Represents the absence of a value. Used to specify that a function
returns no value (void display()), takes no parameters (int main(void)), or for generic
pointers. A regular variable cannot be declared as void x;.
Precision Difference (float vs. double): float follows IEEE 754 single precision (32 bits: 1
sign, 8 exponent, 23 mantissa bits → ~6–7 decimal digits of accuracy), whereas double follows
**IEEE 754 double precision (64 bits:** 1 sign, 11 exponent, 52 mantissa bits → ~15–16 decimal
digits of accuracy).
(A) C Data Types Classification
C Data Types
Primary Derived User-Def.
- int
- char
- float
- double
- void
- Arrays
- Pointers
- Functions
- struct
- union
- enum
- typedef
(B) Variable Anatomy & 8-Bit Signed Storage
**Declaration:** int age = 20;
20

**Name:**

age

**Address:**

0x1004
Value (r-value) stored at Address (l-value)
8-Bit signed char (Value = +65 = 'A'):
0 1 0 0 0 0 0 1
MSB
(Sign) 7 Magnitude Bits (64 + 1 = 65) LSB
**Figure 2:** (A) Classification of C data types showing primary types covered in Unit-II; (B) Variable memory model
and 8-bit signed binary storage layout.
**Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

**Table 1:** Primary C Data Types, Modifiers, Typical Sizes (32/64-bit Modern Compilers), Ranges, and Format
Specifiers
Data Type Typical Size Value Range
Format
Specifier
signed char /
char
1 byte (8 bits) −128 to +127 %c (or %hhd)
unsigned char 1 byte (8 bits) 0 to 255 %c (or %hhu)
short int
(signed)
2 bytes (16 bits) −32,768 to +32,767 %hd
unsigned short
int
2 bytes (16 bits) 0 to 65,535 %hu
int (signed int) 4 bytes (32 bits)* −2,147,483,648 to +2,147,483,647 %d or %i
unsigned int 4 bytes (32 bits)* 0 to 4,294,967,295 %u
long int 4 or 8 bytes At least −2,147,483,648 to +2,147,483,647 %ld
long long int 8 bytes (64 bits) −9.22 × 1018 to +9.22 × 1018 %lld
float 4 bytes (32 bits) ±3.4 × 10−38 to ±3.4 × 10+38 (~6–7 digits) %f or %e
double 8 bytes (64 bits) ±1.7 × 10−308 to ±1.7 × 10+308 (~15–16
digits)
%lf
long double 10, 12, or 16
bytes
Extended precision (platform dependent) %Lf
**Note on Architecture (*):** Older 16-bit compilers (such as Turbo C) allocate 2 bytes to int
(−32,768 to +32,767), whereas modern 32-bit/64-bit GCC/Clang compilers allocate 4 bytes. Use
the sizeof() operator at runtime to verify exact sizes on any machine.

#### 1.2 Constants in C

**Definition:** A constant (also called a literal when written directly in code) is a fixed value that
cannot be modified during program execution.
**Category 1 — Integer Constants:** Whole numbers without fractional parts or decimal points.
Commas, spaces, and currency symbols are strictly prohibited.
**Decimal (Base 10):** Digits 0–9; must not start with 0 (e.g., 42, -150, 0).
**Octal (Base 8):** Digits 0–7; MUST begin with a leading zero 0 (e.g., 037 = 3×8 + 7 = 3110).
Writing 089 is a syntax error because 8 and 9 are invalid octal digits.
**Hexadecimal (Base 16):** Digits 0–9 and letters A–F (or a–f); MUST begin with 0x or 0X
(e.g., 0x1F = 1×16 + 15 = 3110).
**Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

**Integer Suffixes:** Append U/u for unsigned, L/l for long, or UL for unsigned long
(e.g., 50000UL).
Category 2 — Floating-Point (Real) Constants: Numbers with fractional parts or exponents.
Default type is double (append f or F for float, e.g., 3.14f).
**Fractional Form:** Must contain a decimal point and at least one digit (e.g., 3.14159, -0.005,
.75, 12.0).
**Exponential (Scientific) Form:** Written as mantissa e exponent or mantissa E
exponent, representing mantissa × 10exponent. The exponent MUST be an integer (e.g.,
6.022e23, 1.6e-19).
**Category 3 — Character Constants:** A single character enclosed in single quotes (e.g., 'A',
'5', '$'). Internally stored as its integer ASCII code (e.g., 'A' = 65, 'a' = 97, '0' = 48).
Note that '5' (ASCII 53) is NOT equal to integer 5.
**Category 4 — String Literals:** Zero or more characters enclosed in double quotes (e.g.,
"B.Tech", "A", ""). The compiler automatically appends a null terminator '\0' at the end, so
"A" occupies 2 bytes ('A' and '\0'), whereas 'A' occupies 1 byte.

**Two Ways to Define Named (Symbolic) Constants:**


### 1. Using Preprocessor Macro #define: #define PI 3.14159 — Performs pure text

substitution before compilation; takes no memory address, has no data type check, and MUST
NOT end with a semicolon.

### 2. Using const Keyword: const float PI = 3.14159f; — Creates a read-only typed

variable in memory; obeys scope rules, undergoes compiler type-checking, and ends with a
semicolon. Attempting PI = 3.14; triggers a compile-time error.
**Table 2:** Classification of C Constants — Valid vs. Invalid Examples
Constant Type Valid Examples Invalid Examples & Reason
Decimal Integer 0, 2026, -98, 100U 1,000 (comma illegal), $50 (symbol illegal), 10 20
(space illegal)
Octal / Hex
Integer
045, 077, 0x2A, 0XFF 082 (8 not octal), 0xG4 (G not hex)
Floating-Point 3.14, -0.5f, 2.5e-4,
1E6
2.5e3.2 (exponent cannot be decimal), 3,14.5
(comma illegal)
Character 'Z', '9', '\n', ' ' "Z" (double quotes make a string), 'AB' (multiple
chars)
String Literal "Hello", "C", "" 'Hello' (single quotes cannot hold strings)
**Table 3:** Essential C Escape Sequences (Backslash Character Constants)
**Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C

Escape
Sequence Meaning / Action
Escape
Sequence Meaning / Action
\n Newline (moves cursor to next
line)
\\ Prints a literal backslash (\)
\t Horizontal tab (aligned spacing) \' and \" Prints literal single quote or double
quote
\r Carriage return (start of current
line)
\0 Null character (ASCII 0, terminates
strings)
\b Backspace (moves cursor 1
column left)
\a Audible alert (system beep)

#### 1.3 Variables in C

**Definition:** A variable is a named storage location in main memory (RAM) whose stored value
can change during program execution. Every variable has four attributes: name (identifier), data
type, value (r-value), and memory address (l-value).
**Declaration vs. Initialization:** 
Declaration / Definition: Reserves memory and binds a name to a data type. Syntax:
data_type var_name; (e.g., int marks;). An uninitialized local variable holds an
unpredictable garbage value.
**Initialization:** Assigning an initial value at the time of declaration. Syntax: data_type
var_name = value; (e.g., int marks = 95;).
**Multiple Variables:** Multiple variables of the same type can be declared together: float r =
2.5f, area, peri;
**L-value vs. R-value:** 
**L-value (Locator Value):** An expression referring to an identifiable memory location that can
appear on the left side of an assignment operator (e.g., variable x in x = 10;).
**R-value (Read Value):** A data value stored at some address; can appear ONLY on the right
side of an assignment (e.g., 10 or a + b). Writing 10 = x; or a + b = 5; causes a
compile-time "lvalue required" error.

**Strict Rules for Naming Variables (Identifiers):**

1. Allowed characters are strictly alphabets (A–Z, a–z), digits (0–9), and the underscore
(_).
2. The first character MUST be a letter or an underscore (_); it can NEVER begin with a digit
(e.g., 1st_num is invalid; num1 and _count are valid).
3. No whitespace or special symbols (@, #, $, -, %, spaces) are permitted (e.g., net-pay
and total marks are invalid).
4. **Case-Sensitivity:** C treats uppercase and lowercase letters as distinct; Sum, sum, and SUM
are three completely different variables.
**Unit-II:** Core Programming Concepts & Control Structures • Computational & Problem Solving in C