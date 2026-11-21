> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum


- **## PART II:** KNOWLEDGE REPRESENTATION (LOGICAL, PROCEDURAL,

NETWORK & STRUCTURED)

### 5. Logical Representation Scheme: Propositional & Predicate Calculus,

Unification & Resolution

### 5.1 What Is Knowledge Representation (KR)?

- **Definition:** The study of how facts, beliefs, rules, and relationships about the real world are
encoded into formal symbols inside a computer so an AI agent can reason and deduce new
conclusions automatically.
Four Properties of a Good KR Scheme: (1) Representational Adequacy (can express all needed
facts), (2) Inferential Adequacy (can derive new knowledge), (3) Inferential Efficiency (guides
search swiftly), and (4) Acquisitional Efficiency (easy to add/update knowledge).

### 5.2 Propositional Calculus (Propositional Logic — PL)

- **Core Idea:** Represents declarative statements (Propositions) as atomic symbols (P, Q, R) that
are strictly either TRUE (T) or FALSE (F).
- **Five Logical Connectives:** 
- **Negation (¬P):** NOT P (flips truth value).
- **Conjunction (P ∧  Q):** P AND Q (true only if both true).
- **Disjunction (P ∨  Q):** P OR Q (false only if both false).
- **Implication (P → Q):** IF P THEN Q (equivalent to ¬P ∨  Q; false only when P is True and Q is
False!).
- **Biconditional (P ↔ Q):** P IF AND ONLY IF Q (true when both share the same truth value).
Major Limitation of Propositional Logic: Cannot express internal objects, properties, or general
"All / Some" statements (e.g., to say "All humans are mortal", PL would need billions of separate
symbols!).

### 5.3 Predicate Calculus (First-Order Logic — FOL)

- **Core Upgrade Over PL:** Breaks statements into Objects (Constants/Variables), Predicates
(Relations/Properties), Functions, and Quantifiers — giving immense expressive power!
- **Building Blocks of FOL:** 
- **Constants:** Specific objects (Socrates, John, Apple).
- **Variables:** Placeholders for unknown objects (x, y, z).
- **Predicates:** Return True/False about objects (Human(Socrates), Loves(John, Mary)).
- **Functions:** Map an object to another object (FatherOf(John)).
Universal Quantifier (∀ x — "For ALL x"): Usually paired with →: "All humans are mortal" ⇒
∀ x (Human(x) → Mortal(x)).
Fundamentals of

Existential Quantifier (∃ x — "There EXISTS at least one x"): Usually paired with ∧: "Some
student loves AI" ⇒  ∃ x (Student(x) ∧  Loves(x, AI)).

### 5.4 Unification (Pattern Matching in Predicate Logic)

- **Definition:** The mechanical algorithm that takes two Predicate Logic expressions and finds a
Substitution (θ) of variables that makes both expressions strictly identical!
- **Most General Unifier (MGU):** The simplest substitution making the fewest unnecessary
commitments (leaves variables as general as possible).
- **Worked Unification Examples:** 
- **Example 1 (Success):** Unify Knows(John, x) and Knows(y, Bill) → MGU θ = { y/John,
x/Bill } (both become Knows(John, Bill)).
Example 2 (Failure — Predicate Mismatch): Loves(x, y) vs. Hates(John, Mary) → FAIL.
- **Example 3 (Failure — Occurs Check):** P(x) vs. P(f(x)) → FAIL (a variable x cannot unify
with a function containing itself!).

### 5.5 Resolution (Automated Theorem Proving by Refutation)

Core Rule (Resolution Inference Rule): Given two disjunction clauses containing
complementary literals (P and ¬P), cancel them out and merge the rest:
(A ∨  P) and (¬P ∨  B)  ⊢   (A ∨  B).
If two unit clauses cancel completely (P and ¬P), they yield the Empty Clause (□ =
Contradiction / FALSE)!
5-Step Resolution Refutation Algorithm (Proof by Contradiction):

### 1. Convert all Knowledge Base facts/rules into Conjunctive Normal Form (CNF) (eliminate → via

¬A ∨  B, push ¬ inward via De Morgan, drop ∀, Skolemize ∃, distribute ∨ over ∧).

### 2. Negate the Goal you want to prove (¬Goal) and add it into the clause set!


### 3. Pick two clauses with complementary literals (using Unification in FOL) and resolve them to

produce a new clause.

### 4. Repeat Step 3 until the Empty Clause (□) is derived.


### 5. Deriving □ proves ¬Goal causes a contradiction → therefore the Original Goal is 100%

PROVED TRUE!
Resolution Refutation Steps

### 1. Convert KB Rules to CNF


### 2. Add Negated Goal (¬Goal)


### 3. Unify & Cancel Literals


### 4. Empty Clause (□) ⇒  PROVED

- **Worked Proof:** Prove Mortal(Socrates)
- **C1:** ¬Human(x) ∨  Mortal(x) ¬Goal: ¬Mortal(Socrates)
{x/Socrates}
- **C3:** ¬Human(Socrates)C2: Human(S)
□ Contradiction ⇒  Proved!
Fundamentals of


> 🖼️ **Figure 6: Resolution Refutation Steps and Complete Worked Predicate-Logic Proof Tree**

Feature Propositional Calculus (PL) Predicate Calculus (FOL)
Basic Unit Whole indivisible proposition (P, Q) Predicates, Objects, Functions (Human(x))
Quantifiers (∀ , ∃) Not supported Fully supported
Expressive Power Low (cannot generalize across objects) Very High (models complex relations cleanly)
Unification Needed? No (exact symbol match only) Yes (MGU binds variables during Resolution)

### 6. Procedural Representation Scheme: Production Systems & Types


### 6.1 What Is Procedural Representation & a Production System?

Procedural Knowledge Representation: Encodes knowledge as actionable "Know-How"
procedures or IF–THEN rules describing how to transform a current state into a better state
(contrasting with static "Know-What" facts).
- **Production System:** A foundational AI architecture that represents procedural knowledge as a
collection of independent Production Rules.
The 4 Essential Components of Every Production System:
1. 1. Global Database (Working Memory): Holds the current state of the problem and active
facts (updated dynamically whenever a rule fires).
2. 2. Set of Production Rules (Rule Base): Collection of condition–action pairs (IF Condition
(LHS) THEN Action (RHS)).
3. 3. Control Strategy (Inference Engine): Decides which matching rule to apply next when
multiple rules trigger simultaneously (Conflict Resolution — e.g., specificity, recency, priority)
and stops when the goal is achieved.
- **4. 4. Rule Applier:** Executes the winning rule’s action to modify Working Memory.
Classic Example (Water Jug Problem): State = (x, y) for 4-L & 3-L jugs; Rule 1: IF (x < 4)
- **THEN (4, y) (fill 4-L jug); Rule 2:** IF (x + y ≥ 4 AND y > 0) THEN (4, y − (4 − x)) (pour
from 3-L into 4-L until full).

### 6.2 The Four Different Types of Production Systems (High-Yield Exam Topic!)


- **### 1. Monotonic Production System:** 

Applying one rule NEVER prevents any other previously applicable rule from firing later —
facts are only added, never invalidated (e.g., proving geometry theorems).

### 2. Non-Monotonic Production System:

Applying a rule CAN invalidate or disable other previously valid rules (e.g., chess moves,
robot block stacking, or revising an assumption when new evidence arrives).
Fundamentals of


### 3. Partially Commutative Production System:

If a sequence of rules transforms state X into state Y, then any valid permutation
(reordering) of those exact same rules that is allowable ALSO transforms X into the exact
same state Y!
- **Benefit:** Ideal for irreversible real-world actions (like robot assembly or chemical mixing)
because order mistakes don’t trap you in wrong final states.

### 4. Commutative Production System:

A system that is BOTH Monotonic AND Partially Commutative — rules can be applied in any
arbitrary order and will always remain valid and yield the exact same final state (e.g., pure
mathematical theorem proving).
(a) Production System Control Cycle
Rule Base
(IF → THEN)
Working Memory
(Current State)
Control Strategy (Inference Cycle)

### 1. Match → 2. Resolve → 3. Act

(b) 4 Types of Production Systems
Monotonic Non-Monotonic
Commutative
(Theorem Proving)
Partially Comm.
(Robot Navigation)
Monotonic Only
(Chem. Synthesis)
Non-Monotonic
(Chess, 8-Puzzle)
Part.
Comm.
Not
Comm.

> 🖼️ **Figure 7: Production System Architecture and 2×2 Classification of Production System Types**


### 7. Network Representation Scheme: Semantic Networks & Conceptual

Graphs

### 7.1 Semantic Networks (Associative Networks)

- **Definition:** A graphical knowledge representation where knowledge is modeled as a directed
- **labeled graph consisting of:** 
Nodes (Ovals/Boxes): Represent objects, concepts, classes, or events (e.g., Animal, Bird,
Sparrow, Tweety).
- **Directed Arcs (Labeled Arrows):** Represent semantic relationships linking nodes together.
- **Standard Relationship Arcs:** 
- **IS-A (Instance link):** Connects a specific individual to its class (Tweety —IS-A→ Sparrow).
AKO (A-Kind-Of / Subclass link): Connects a subclass to a superclass (Sparrow —AKO→
Bird —AKO→ Animal).
HAS-A / CAN / COLOR: Connects a class or object to its attributes/capabilities (Bird —HAS→
Wings; Bird —CAN→ Fly).
Fundamentals of