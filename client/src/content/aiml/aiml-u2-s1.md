### 1. Problem Formulation & Uninformed Search (BFS vs DFS)

> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

FUNDAMENTALS OF AIML • UNIT–2 (9 HOURS) • COMPLETE FROM-SCRATCH POINT-WISE
STUDY NOTES
Searching Algorithms & Knowledge Representation
**Strictly Syllabus-Aligned Notes:** Built point-by-point from basic AI concepts to exam mastery — covering
Searching for Solutions, Uninformed Search (BFS & DFS), Data-Driven & Goal-Driven Search, Search with
Partial Information (Heuristic Search), Logical KR (Propositional & Predicate Calculus, Unification, Resolution),
Procedural KR (Production Systems & Types), Network KR (Semantic Networks & Conceptual Graphs), and
Structured KR (Scripts, Frames & Objects).
**UNIT–2:** SEARCH & KNOWLEDGE REP. MAP

## PART I: SEARCHING ALGORITHMS


### 1. Searching for Solutions (State Space)


### 2. Uninformed Search: BFS & DFS


### 3. Data-Driven vs. Goal-Driven Search


### 4. Search with Partial Info: Heuristic Search

(Best-First, A* Search, Hill Climbing)

## PART II: KNOWLEDGE REPRESENTATION


### 5. Logical KR: Propositional & Predicate

Calculus, Unification & Resolution

### 6. Procedural KR: Production Systems


### 7. Network KR: Semantic Nets & CGs


### 8. Structured KR: Scripts, Frames & Objects

**Figure 1:** Master Syllabus Roadmap of Fundamentals of AIML Unit–2

## PART I: SEARCHING ALGORITHMS IN ARTIFICIAL INTELLIGENCE


### 1. Searching for Solutions (Problem Formulation & State-Space Search)


#### 1.1 Starting From Scratch: What Is Search in AI?

**Simple Definition:** In AI, Searching is the systematic process of exploring possible sequences of
actions from a known starting situation (Initial State) to reach a desired target situation (Goal
State).
**Why Search Matters:** Almost every intelligent problem — route navigation (Google Maps),
playing Chess, solving the 8-Puzzle, scheduling flights, or proving logical theorems — can be
formulated as searching through a State Space.
The 5 Formal Components of a Search Problem (Exam Standard):
1. **1. Initial State (S0):** Where the AI agent starts (e.g., City A, or starting board configuration).
2. **2. Actions / Operators:** Legal moves available from any state s (e.g., move blank tile
Up/Down/Left/Right).
3. 3. Transition Model (Successor Function): Describes the new state s' produced by applying
an action a in state s.
4. **4. Goal Test:** Checks whether the current state satisfies the target condition (e.g., reached City
G).
**Fundamentals of AIML • UNIT–2:** Searching Algorithms & Knowledge Representation

5. **5. Path Cost (g(n)):** Sum of numerical step costs along the path from start to node n (e.g., total
kilometers driven). An Optimal Solution has the lowest possible path cost.

**Core Search Terminology:**

**State Space:** Complete graph of all states reachable from the initial state.
**Search Tree:** Tree generated dynamically during search (root = initial state; branches =
actions; nodes = explored states).
**Frontier (Open List):** Data structure storing generated nodes waiting to be expanded next
(Queue for BFS, Stack for DFS, Priority Queue for Heuristic Search).
**Explored Set (Closed List):** Stores already-visited states to prevent infinite loops in graphs
with cycles.

#### 1.2 The 4 Standard Metrics for Evaluating Any Search Algorithm

1. **Completeness:** Is the algorithm guaranteed to find a solution if at least one exists?
2. **Optimality:** Does it guarantee finding the lowest-cost (shortest/best) solution?
3. **Time Complexity:** How many nodes are generated/expanded? Measured using branching
factor b (max children per node), shallowest goal depth d, and max tree depth m.

### 4. Space Complexity: Maximum number of nodes kept simultaneously in RAM.


### 1. Init Open

Push Start S0

### 2. Pick Node

Pop Frontier

### 3. Goal Test

Is n == Goal?
No 4. Expand Successors
Add new children to Open List
Repeat until Open List is Empty (Failure)
Yes
Return Solution Path (Start → Goal)
**Figure 2:** General State-Space Search Algorithm Loop Using Open (Frontier) & Closed Sets

### 2. Uninformed (Blind) Search Strategies: BFS and DFS


#### 2.1 What Is Uninformed (Blind) Search?

**Definition:** Search algorithms that have NO extra domain clues (no heuristics) telling them how
close a state is to the goal — they blindly explore the state space in a rigid mechanical order until
they stumble upon the goal.
**Fundamentals of AIML • UNIT–2:** Searching Algorithms & Knowledge Representation


#### 2.2 Breadth-First Search (BFS)

**Core Strategy:** Explores the search tree strictly level by level — expands the root (Depth 0),
then all nodes at Depth 1, then all nodes at Depth 2, and so on.
**Data Structure Used:** FIFO Queue (First-In, First-Out — new children are inserted at the rear,
and the oldest shallowest node is removed from the front).
**Step-by-Step Algorithm:** 

### 1. Enqueue Initial State S0 into the FIFO Queue and mark it visited.


### 2. While Queue is not empty, dequeue the front node u.


### 3. If u satisfies the Goal Test, stop and return the path!

4. Otherwise, generate all unvisited neighbors of u, mark them visited, and enqueue them at the
back.

**Performance Characteristics:**

Complete? Yes (if branching factor b is finite).
Optimal? Yes (guaranteed to find the shortest path in number of edges when all step costs are
equal!).
**Time & Space Complexity:** Both O(bd) — Major Drawback: Exponential RAM usage quickly
exhausts memory on deep problems!

#### 2.3 Depth-First Search (DFS)

**Core Strategy:** Plunges straight down the deepest branch first until hitting a dead end (leaf
node), then backtracks to the most recent unexplored branch.
**Data Structure Used:** LIFO Stack (Last-In, First-Out — or implemented naturally using function
Recursion).
**Step-by-Step Algorithm:** 

### 1. Push Initial State S0 onto the LIFO Stack.


### 2. While Stack is not empty, pop the top node u.


### 3. If u is the Goal, stop and return the path.

4. If u is unvisited, mark it visited and push all its unvisited children onto the top of the Stack.

**Performance Characteristics:**

Complete? No (can get trapped forever in infinite branches or cycles without visited tracking /
depth limit).
Optimal? No (may find a long winding path down the left branch even if a 1-step goal sat on
the right!).
**Time Complexity:** O(bm) (can be terrible if max depth m >> d).
**Space Complexity:** O(b × m) (Linear memory!) — Huge Advantage: Uses tiny RAM because it
stores only the single active path plus unexpanded siblings!
**Fundamentals of AIML • UNIT–2:** Searching Algorithms & Knowledge Representation

Sample Search Tree (Start = A, Goal = F)
A
B C
D E F G
**Depth 0:** A | Depth 1: B, C | Depth 2: D, E, F, G
BFS Trace (FIFO Queue — Level by Level)
**Visit Order:** A → B → C → D → E → F (Goal!) • Expands entire Depth 1 (B, C) before
**Depth 2 • Path Found:** A → C → F (Guaranteed Shortest) DFS Trace (LIFO Stack —
**Deepest First) Visit Order:** A → B → D → E → C → F (Goal!) • Plunges left (A→B→D),
backtracks to E, then C→F • Tiny RAM O(b·m), but no optimality guarantee
**Figure 3:** Worked Traversal Comparison of Breadth-First Search (BFS) vs. Depth-First Search (DFS)
Comparison
Feature
Breadth-First Search (BFS) Depth-First Search (DFS)
Data Structure FIFO Queue LIFO Stack (or Recursion)
Exploration Pattern Wide, level-by-level expansion Deep, branch-by-branch with backtracking
Completeness Complete (if b is finite) Incomplete (fails in infinite depths/loops)
Optimality Optimal (for equal step costs) Not Optimal
Time Complexity O(bd) O(bm)
Space Complexity O(bd) — Very High Memory O(b × m) — Very Low Memory
Best Used When… Goal is shallow or shortest path is
mandatory
Solutions are deep and memory is tightly
limited

### 3. Data-Driven and Goal-Driven Search


#### 3.1 Direction of Search in State-Space Problem Solving


### 1. Data-Driven Search (Forward Chaining / Bottom-Up Search):

**Starting Point:** Begins from the known initial facts / available data (S0) and applies valid
rules/operators forward until the goal condition is reached.

**Best Used When:**

All initial facts are already given up front, while the exact goal state is vague or there are
many possible goal states (e.g., interpreting sensor logs, weather prediction, game
playing).
The forward branching factor is smaller than the backward branching factor.
**Drawback:** Can waste time deriving hundreds of true facts that are completely irrelevant to the
final target!
**Fundamentals of AIML • UNIT–2:** Searching Algorithms & Knowledge Representation