> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum


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

Key Superpower — Property Inheritance (With Exceptions!):
A child node automatically inherits all properties of its parent classes (e.g., Tweety inherits
Has Wings from Bird and Breathes from Animal without duplicating data!).
- **Exception Overriding:** If Penguin —AKO→ Bird has a local link Penguin —CANNOT→ Fly, the
more specific local property overrides the inherited default!
- **Advantages & Limitations:** Intuitive visual clarity, saves memory via inheritance; Limitations:
Hard to express complex logical quantifiers (∀ , ∃) or negation cleanly, and multiple inheritance can
cause ambiguity.

### 7.2 Conceptual Graphs (CG — John Sowa, 1984)

- **Definition:** A formally grounded bipartite directed graph (extending Semantic Networks so every
graph maps cleanly to First-Order Predicate Logic!).
Strict Bipartite Structure (Two Distinct Node Types — Must Draw Correctly in Exams!):

### 1. Concept Nodes (Drawn as RECTANGLES [...]): Represent entities, attributes, states, or

- **actions in [Type:** Referent] format (e.g., [DOG: Bruno], [EAT], [BONE]).

### 2. Conceptual Relation Nodes (Drawn as OVALS/CIRCLES (...)): Represent exact

semantic roles linking concepts (e.g., (AGNT) = Agent who performs action, (OBJ) = Object
acted upon, (LOC) = Location, (INST) = Instrument).
- **Golden Bipartite Rule:** An arrow can ONLY connect a Concept Box to a Relation Oval (or Oval to
Box) — NEVER connect Box-to-Box or Oval-to-Oval directly!
- **Example Sentence:** "Bruno the dog eats a bone" →
- **Linear Notation:** [DOG: Bruno] ← (AGNT) ← [EAT] → (OBJ) → [BONE].
- **Equivalent FOL:** ∃ x ∃ y (Dog(Bruno) ∧  Eat(x) ∧  Bone(y) ∧  Agent(x, Bruno) ∧  Object(x, y)).
(a) Semantic Network (Inheritance)
Animal Breathes
CAN
Bird
AKO
Wings
HAS-A
Tweety
IS-A
Yellow
COLOR
(b) Conceptual Graph (Bipartite)
"Bruno the dog eats a bone"
EAT
AGNT OBJ
- **DOG:** Bruno BONE

> 🖼️ **Figure 8: Network Knowledge Representation — Semantic Network vs. Bipartite Conceptual Graph**

Fundamentals of

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


### 8.1 Frames (Marvin Minsky, 1975)

- **Definition:** A Frame is a structured record-like knowledge template representing a stereotyped
object, concept, or situation using a collection of attribute–value pairs called Slots and Fillers.
- **Key Features of Frames:** 
- **Slots & Fillers:** Each slot stores an attribute (e.g., Wheels: 4, Fuel: Petrol).
- **Facets & Default Values:** Slots can store default assumptions (used when data is missing!),
allowed value ranges, and Procedural Attachments (Demons) — mini-programs triggered
automatically (IF-NEEDED to compute a missing value, IF-ADDED to validate a newly stored
value).
- **Class & Instance Hierarchy:** Supports AKO / IS-A inheritance just like Semantic Networks.

### 8.2 Scripts (Roger Schank & Robert Abelson, 1977)

- **Definition:** A Script is a specialized frame-like structure designed specifically to represent a
stereotypical sequence of events in time (e.g., Eating at a Restaurant, Visiting a Doctor, or
Boarding a Flight).
- **Why Scripts Are Powerful:** They allow an AI story-understanding system to infer unstated
missing facts automatically (if a story says "Raj ate at a restaurant and left", the Restaurant Script
lets the AI deduce he sat at a table, ordered from a menu, and paid the bill!).
The 6 Standard Components of Any Script (Must Memorize for Exams!):
- **1. 1. Entry Conditions:** Facts that must be true before the script starts (e.g., Customer is hungry
& has money).
- **2. 2. Props:** Physical objects involved (Tables, Menu, Food, Bill, Tip).
- **3. 3. Roles:** People participating (Customer, Waiter, Chef, Cashier).
- **4. 4. Track:** Specific variation of the script (e.g., Fast-Food vs. Fine-Dining restaurant).
- **5. 5. Scenes:** Ordered sequence of sub-events (Scene 1: Entering → Scene 2: Ordering →
- **Scene 3:** Eating → Scene 4: Exiting/Paying).
- **6. 6. Results:** Final facts true after the script ends (Customer is no longer hungry; Restaurant has
more money).
Fundamentals of


> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
> - **A* search is guaranteed optimal and complete if the heuristic function h(n) is admissible (never overestimates true cost to goal).**
> - **Breadth-First Search (BFS) uses a FIFO Queue and is optimal for uniform step costs; Depth-First Search (DFS) uses a LIFO Stack.**

> ⚠️ **MISTAKES TO AVOID:**
> 
> - **Designing an inadmissible heuristic in A* search (causes sub-optimal path selection).**
> - **Failing to maintain a visited/explored set in graph search, leading to infinite loops in cyclic state spaces.**

