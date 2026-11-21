> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

B.TECH FIRST YEAR • COMPUTATIONAL & PROBLEM SOLVING IN C
- **Unit-I:** Programming Fundamentals and Problem
Solving
Logic & Types, Algorithm Design, Flowcharts, Pseudocode, Programming Logic, Stepwise Refinement, Debugging &
Testing, Time & Space Complexity, Basic I/O, Tracing & Dry Run) • Introduction to C Programming (Computer
Languages, Translators, Features & Applications, Structure of a C Program, Syntax & Semantics, Memory Layout,
I/O Functions, Indentation & Comments)
- **UNIT-I:** PROGRAMMING FUNDAMENTALS & PROBLEM SOLVING
- **Part 1:** Problem Solving Techniques
• Problem Solving Steps & Classification
• Logic & Types (Boolean, Predicate, Deductive)
• Algorithm Design, Flowcharts & Pseudocode
• Programming Logic & Stepwise Refinement
• Debugging, Testing, Time & Space Complexity
• Basic I/O Operations, Tracing & Dry Run
- **Part 2:** Introduction to C Programming
• Computer Languages (Low-Level & High-Level)
- **• Translators:** Compiler, Interpreter, Assembler
• Features & Applications of C Language
• Structure of a C Program, Syntax & Semantics
• Memory Layout (Text, Data, BSS, Heap, Stack)
• I/O Functions, Indentation & Comments

> 🖼️ **Figure 1: Master Topic Map outlining the complete Unit-I syllabus structure across Problem Solving Techniques**

and Introduction to C Programming.

### 1. Problem Solving Techniques


### 1.1 Introduction to Problem Solving

- **Definition:** Problem solving in computer science is the systematic process of analyzing a real-
world or mathematical task, designing a clear step-by-step computational solution, translating it
into a programming language, and verifying its correctness.
Six Standard Phases of Computer Problem Solving (SDLC-Aligned):

### 1. Problem Definition & Analysis: Clearly identify what is given (inputs), what is required

(outputs), constraints, and edge cases.

- **### 2. Solution Design (Planning):** Formulate logic using tools such as stepwise refinement,

algorithms, flowcharts, and pseudocode—completely independent of any specific programming
language.

- **### 3. Coding (Implementation):** Translate the designed algorithm into a programming language

(such as C) following exact syntax rules.

- **### 4. Compilation & Execution:** Convert source code into machine-executable instructions via a

translator and run it on sample data.

- **### 5. Testing & Debugging:** Execute the program against normal, boundary, and invalid test inputs

to detect and eliminate syntax, runtime, and logical defects.
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C


- **### 6. Documentation & Maintenance:** Add meaningful comments, user guides, and refine the

software as requirements evolve.
- **Core Engineering Principle:** Never jump straight to typing code. Spending time analyzing
constraints and dry-running an algorithm prevents 80% of logical errors before a single line of C is
written.

### 1.2 Computational Problem & Its Classification

- **Definition:** A computational problem is a precisely specified mathematical relationship between
a set of valid inputs (problem instances) and their corresponding desired outputs (solutions)
that can be solved mechanically by a computer algorithm.
Well-Defined vs. Ill-Defined Problems:
- **Well-Defined Problem:** Has an unambiguous starting state, explicit rules, and verifiable goal
state (e.g., Sort an array of N integers in ascending order). Computers solve well-defined
problems directly.
- **Ill-Defined Problem:** Has vague goals or incomplete constraints (e.g., Make this website look
nice); must first be formalized into measurable criteria before computation.
Classification Based on Output Nature (Core Exam Matrix):

> 📊 **Table 1: Classification of Computational Problems by Nature of Solution**

Problem Category Formal Goal / Output Classic Computing Examples

### 1. Decision Problem Answers a strict YES / NO (True / False)

question for an input instance.
Is integer N prime? Is year Y a leap year?
Does element K exist in an array?

### 2. Search Problem Finds at least one valid solution (or

index/object) satisfying given constraints.
Find the index of key X in a list; find a
valid path out of a maze.

### 3. Optimization

Problem
Finds the best possible (minimum or
maximum) solution according to an
objective function.
Find the shortest route between two
cities; maximize profit within a budget
(Knapsack).

### 4. Counting Problem Counts the total number of valid

solutions or occurrences matching a
condition.
Count how many vowels appear in a
string; count total prime numbers
between 1 and N.

### 5. Function

(Computation)
Problem
Computes a single unique output value
for every valid input.
Compute factorial N!; calculate roots of a
quadratic equation; convert Celsius to
Fahrenheit.
Classification by Solvability & Efficiency:
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C

Solvable (Decidable) vs. Unsolvable (Undecidable): A problem is decidable if an algorithm
exists that halts with the correct answer for all inputs (e.g., sorting); it is undecidable if no
algorithm can ever solve it in general (e.g., the Halting Problem).
- **Tractable (P) vs. Intractable:** Tractable problems can be solved in reasonable polynomial time
such as O(n) or O(n2); Intractable problems require exponential time such as O(2n), becoming
impractical for large inputs.

### 1.3 Logic & Its Types

- **Definition:** Logic is the formal study of valid reasoning and truth evaluation. In programming,
logic provides the exact rules that let a computer evaluate conditions and make unambiguous
decisions.
Types of Logic Relevant to Computer Science:

### 1. Propositional (Boolean) Logic: Operates on declarative statements (propositions) that are

strictly either True (1) or False (0), combined via logical connectives: AND ( ∧ ), OR ( ∨ ), NOT
(¬), Implication (→), and Biconditional (↔). Forms the foundation of C conditions (&&, ||, !)
and digital circuits.

### 2. Predicate (First-Order) Logic: Extends propositional logic with variables, predicates

(properties like IsEven(x)), and quantifiers: Universal Quantifier ( ∀  — "for all") and
Existential Quantifier ( ∃  — "there exists"). Used to formalize loop invariants and database
queries.

### 3. Deductive Logic (Top-Down Reasoning): Moves from general rules/axioms to a guaranteed

- **specific conclusion (e.g., Rule:** All even numbers are divisible by 2; Fact: 14 is even;
- **Conclusion:** 14 is divisible by 2). Used in program verification and static analysis.

### 4. Inductive Logic (Bottom-Up Reasoning): Observes specific patterns or base cases to

generalize a rule (e.g., Mathematical Induction used to prove loop correctness and recursive
formulas).

- **### 5. Fuzzy Logic (Multi-Valued):** Allows partial degrees of truth continuously between 0.0 and

1.0 (e.g., "warm = 0.7"), used in washing-machine controllers and AI systems—unlike C's
strict binary logic.

> 📊 **Table 2: Core Boolean (Propositional) Logic Truth Table & De Morgan's Laws**

P Q NOT P (¬P) P AND Q (P ∧  Q) P OR Q (P ∨  Q) P → Q (Implies)
False (0) False (0) True (1) False (0) False (0) True (1)
False (0) True (1) True (1) False (0) True (1) True (1)
True (1) False (0) False (0) False (0) True (1) False (0)
True (1) True (1) False (0) True (1) True (1) True (1)
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C

De Morgan's Laws (Essential for Simplifying C Conditions):  ¬(P ∧  Q) ≡  (¬P) ∨  (¬Q)   |
¬(P ∨  Q) ≡  (¬P) ∧  (¬Q)

### 1.4 Algorithm Design

- **Definition:** An algorithm is a finite, well-ordered, unambiguous sequence of step-by-step
instructions designed to take zero or more inputs and produce the required output for a
computational problem.
Five Essential Characteristics of a Valid Algorithm (Donald Knuth's Criteria — High-Yield
- **Exam Topic):** 

- **### 1. Input:** Accepts zero or more externally supplied, clearly specified values.


- **### 2. Output:** Produces at least one measurable result related to the input.


- **### 3. Definiteness (Unambiguity):** Every single instruction must be crystal clear with only one

possible interpretation (never write "add a few numbers").

- **### 4. Finiteness:** Must always terminate after a finite number of steps for every valid input (no

infinite loops).

- **### 5. Effectiveness (Feasibility):** Each step must be basic enough to be executed accurately in

finite time using available computing resources.

> 📝 **Worked Example — Algorithm to Find the Largest of Three Numbers (A, B, C):**


- **### 1. Step 1:** Start.


- **### 2. Step 2:** Read three numbers A, B, and C.


- **### 3. Step 3:** If A ≥ B and A ≥ C, set MAX = A and go to Step 6.


- **### 4. Step 4:** Else if B ≥ C, set MAX = B and go to Step 6.


- **### 5. Step 5:** Else set MAX = C.


- **### 6. Step 6:** Print MAX.


- **### 7. Step 7:** Stop.


### 1.5 Flowchart Creation

- **Definition:** A flowchart is a standardized graphical (pictorial) representation of an algorithm that
uses specific geometric shapes connected by directional flow arrows to illustrate the sequence of
operations and decision paths.
Strict ANSI Drawing Rules for Full Marks in Exams:
Every flowchart must have exactly one Start terminal and at least one Stop terminal.
Standard flow direction is top-to-bottom and left-to-right; arrowheads are mandatory on
every connecting line.
A Decision Diamond has exactly one entry line and two (or three) clearly labeled exit lines
(True/False or Yes/No).
Avoid crossing flow lines; use labeled circular On-Page Connectors (e.g., A) if diagrams
become complex.
- **Unit-I:** Programming Fundamentals & Problem Solving • Computational & Problem Solving in C