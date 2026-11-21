### University Solved Examination Questions (Unit 2)

> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

Feature Semantic Network Conceptual Graph (CG)
Graph Type General directed labeled graph Strict Bipartite graph (Boxes + Ovals)
How Relations Are
Drawn
Labels written directly on arrows Dedicated oval Relation Nodes (AGNT,
OBJ)
Link to Predicate Logic Informal / ad-hoc Exact formal 1-to-1 mapping to FOL
Best Used For Taxonomies, ontologies &
inheritance
Natural Language Understanding (NLU)

### 8. Structured Representation Scheme: Scripts, Frames, and Objects


#### 8.1 Frames (Marvin Minsky, 1975)

**Definition:** A Frame is a structured record-like knowledge template representing a stereotyped
object, concept, or situation using a collection of attribute–value pairs called Slots and Fillers.

**Key Features of Frames:**

**Slots & Fillers:** Each slot stores an attribute (e.g., Wheels: 4, Fuel: Petrol).
**Facets & Default Values:** Slots can store default assumptions (used when data is missing!),
allowed value ranges, and Procedural Attachments (Demons) — mini-programs triggered
automatically (IF-NEEDED to compute a missing value, IF-ADDED to validate a newly stored
value).
**Class & Instance Hierarchy:** Supports AKO / IS-A inheritance just like Semantic Networks.

#### 8.2 Scripts (Roger Schank & Robert Abelson, 1977)

**Definition:** A Script is a specialized frame-like structure designed specifically to represent a
stereotypical sequence of events in time (e.g., Eating at a Restaurant, Visiting a Doctor, or
Boarding a Flight).
**Why Scripts Are Powerful:** They allow an AI story-understanding system to infer unstated
missing facts automatically (if a story says "Raj ate at a restaurant and left", the Restaurant Script
lets the AI deduce he sat at a table, ordered from a menu, and paid the bill!).
The 6 Standard Components of Any Script (Must Memorize for Exams!):
1. **1. Entry Conditions:** Facts that must be true before the script starts (e.g., Customer is hungry
& has money).
2. **2. Props:** Physical objects involved (Tables, Menu, Food, Bill, Tip).
3. **3. Roles:** People participating (Customer, Waiter, Chef, Cashier).
4. **4. Track:** Specific variation of the script (e.g., Fast-Food vs. Fine-Dining restaurant).
5. **5. Scenes:** Ordered sequence of sub-events (Scene 1: Entering → Scene 2: Ordering →
**Scene 3:** Eating → Scene 4: Exiting/Paying).
6. **6. Results:** Final facts true after the script ends (Customer is no longer hungry; Restaurant has
more money).
**Fundamentals of AIML • UNIT–2:** Searching Algorithms & Knowledge Representation


#### 8.3 Objects (Object-Oriented Knowledge Representation)

**Definition:** Evolves the Frame concept into full Object-Oriented Programming (OOP) entities
that bundle Data (Attributes/State) AND Behavior (Methods/Functions) together inside one
modular unit called an Object (instantiated from a blueprint Class).
**Four Pillars of Object-Based KR:** 
1. **Encapsulation:** Hides internal data and exposes controlled methods (prevents accidental
corruption).
2. **Inheritance:** Subclasses automatically inherit attributes and methods from parent classes
(ElectricCar inherits from Vehicle).
3. **Polymorphism:** Same message/method name (start()) triggers class-specific behavior
in different objects.
4. **Message Passing:** Objects collaborate by sending messages invoking one another’s
methods.
**(a) Restaurant Script:** Stereotypical Event Sequence (Props: Menu, Food, Bill | Roles: Customer, Waiter)
Entry Cond.
Hungry + Money
**Scene 1:** Enter
Sit at Table
**Scene 2:** Order
Menu → Chef
**Scene 3:** Eat
Consume Meal
**Scene 4:** Pay
**Result:** Full ✓
**(b) Frame:** Student_Record
**IS-A:** BTech_Student | Sem: 1 (Default) Name: Ananya | Branch: AIML GPA (IF-
**NEEDED Demon):** calc_gpa() (c) Object: Car (Encapsulated State + Methods)
**Attributes:** brand="EV", speed=60, battery=85% Methods: start(), accelerate(), charge()
Supports Encapsulation, Inheritance & Polymorphism
**Figure 9:** Structured Knowledge Representation — Restaurant Script Timeline, Frame Slots, and
Encapsulated Object
Structured KR
Scheme
Primary Focus Core Structural Units Typical AI Application
Frames Stereotyped static objects
& entities
Slots, Fillers, Defaults &
Demons
Scene recognition, expert-
system catalogs
Scripts Stereotyped time-
ordered events
Entry, Props, Roles, Track,
Scenes, Results
Story understanding, NLP
dialogue systems
Objects Modular software data +
active behavior
Classes, Attributes,
Methods, Messages
Simulations, multi-agent
systems, modern AI apps
**Fundamentals of AIML • UNIT–2:** Searching Algorithms & Knowledge Representation


### 9. Master Comparison of All Four Knowledge Representation Schemes

KR Scheme Key Techniques Main Strength Main Limitation

### 1. Logical

KR
Propositional & Predicate
Calculus, Unification,
Resolution
Mathematically sound, exact,
unambiguous proofs
Computationally slow on huge
KBs; rigid on uncertainty
2.
Procedural
KR
Production Systems (IF–
THEN rules + Control)
Modular, natural
representation of "know-how"
steps
Hard to trace rule interactions
when rules grow huge

### 3. Network

KR
Semantic Networks &
Conceptual Graphs
Intuitive visual graphs;
compact property inheritance
Weak handling of complex
quantifiers/negation (in basic
SN)
4.
Structured
KR
Scripts, Frames & Objects Handles default assumptions,
expectations & event
sequences
Brittle when real-world situations
break stereotypes

### 10. Quick Exam-Revision Cheat Sheet (AIML Unit–2 Master Summary)

Syllabus Topic Must-Memorize Formula / Fact High-Yield Exam Tip
Searching
Basics
**5 parts:** Initial, Actions, Transition, Goal Test,
Path Cost
Always evaluate search on Completeness,
Optimality, Time & Space.
**BFS vs. DFS BFS:** Queue, O(bd) Time/Space, Complete
& Optimal
**DFS:** Stack, O(b·m) Space, Incomplete &
Non-Optimal
Draw a mini 7-node tree and explicitly list
both visit sequences!
Data vs. Goal
Search
Data-Driven = Forward (Facts → Goal)
Goal-Driven = Backward (Goal → Sub-goals
→ Facts)
Choose whichever direction has the
smaller branching factor!
**Heuristic Search A*:** f(n) = g(n) + h(n); Admissible: h(n) ≤
h*(n)
**Name the 3 Hill Climbing traps:** Local
Maxima, Plateau, Ridge.
Logic, Unify &
Resolve
∀ x (Human(x) → Mortal(x)); ∃ x (A(x) ∧
B(x))
**Resolution:** CNF + ¬Goal → derive Empty
Clause (□)
**Remember:** ∀ pairs with →; ∃ pairs with
∧; check MGU Occurs Check!
Production
Systems
Working Memory + Rule Base + Match–
Resolve–Act
**4 Types:** Monotonic, Non-Monotonic,
Partial/Commutative

$$Commutative = BOTH Monotonic AND$$

Partially Commutative!
**Network KR Semantic Net:** Nodes + IS-A/AKO/HAS-A +
Inheritance
**Conceptual Graph:** Bipartite Boxes
[Concept] + Ovals (Rel)
Never link Box-to-Box or Oval-to-Oval in a
Conceptual Graph!
Structured KR Frames (Slots/Fillers/Demons) | Scripts (6
parts) | Objects
**Memorize the 6 Script parts:** Entry, Props,
Roles, Track, Scenes, Results.
**Fundamentals of AIML • UNIT–2:** Searching Algorithms & Knowledge Representation