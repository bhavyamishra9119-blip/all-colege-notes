> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum


### 2. Goal-Driven Search (Backward Chaining / Top-Down Search):

- **Starting Point:** Begins from the desired Goal / Hypothesis and works backward through rules
that could produce that goal, breaking it into smaller sub-goals until reaching known initial
facts.
- **Best Used When:** 
A clear, specific hypothesis or theorem is given to prove (e.g., medical diagnosis: "Does the
patient have Malaria?"; mathematical theorem proving).
Initial data is massive or not yet collected (the system asks the user only targeted questions
needed to prove the goal).
The backward branching factor is smaller than the forward branching factor.

### 3. Bidirectional Search (Hybrid Tip): Runs Data-Driven search forward from Start AND Goal-

Driven search backward from Goal simultaneously until the two frontiers collide in the middle —
slashing search cost from O(bd) down to O(bd/2)!
(a) Data-Driven Search (Forward)
Initial
Data
Apply
Rules →
Goal
Found
Best when few facts, many goals
(b) Goal-Driven Search (Backward)
Target
Goal
Split into
Sub-goals
Verify
Facts
Best when clear goal, huge data

> 🖼️ **Figure 4: Comparison of Data-Driven (Forward) Search vs. Goal-Driven (Backward) Search**

Dimension Data-Driven Search (Forward) Goal-Driven Search (Backward)
Starting State Known initial data / observations Specific hypothesis or goal state
Reasoning Flow Bottom-up (Facts → Rules →
Conclusions)
Top-down (Goal → Sub-goals → Verify
Facts)
Efficiency Rule Faster when forward branching is
smaller
Faster when backward branching is smaller
Classic
Applications
Monitoring, planning, sensor
interpretation
Medical diagnosis, theorem proving,
debugging
Fundamentals of


### 4. Search with Partial Information: Heuristic (Informed) Search


### 4.1 What Is a Heuristic Function (h(n))?

- **Why Informed Search Is Needed:** Blind algorithms (BFS/DFS) explode exponentially on real-
world problems (e.g., Chess has ~10120 states!).
- **Heuristic Function h(n):** A domain-specific educated guess (rule of thumb) estimating the
minimum remaining cost from current node n to the Goal (with h(Goal) = 0).
- **Example 1 (GPS Map):** Straight-line (Euclidean) air distance from City n to Destination.
- **Example 2 (8-Puzzle):** Number of misplaced tiles, or sum of Manhattan distances of tiles from
goal slots.
Admissible Heuristic (Golden Optimality Rule): A heuristic h(n) is admissible if it NEVER
overestimates the true remaining cost h*(n): 0 ≤ h(n) ≤ h*(n) (always optimistic!).

### 4.2 Three Major Heuristic Search Algorithms


### 1. Greedy Best-First Search

- **Evaluation Function:** f(n) = h(n) — always expands whichever frontier node appears closest to
the goal right now, completely ignoring how far it already traveled!
- **Pros & Cons:** Very fast in practice, but NOT optimal and can get stuck in loops (incomplete in
tree search).

### 2. A* (A-Star) Search Algorithm (Most Famous Optimal Informed Search)

- **Evaluation Function:** f(n) = g(n) + h(n)
- **g(n):** Exact actual cost traveled so far from Start to node n.
- **h(n):** Estimated remaining heuristic cost from node n to Goal.
- **f(n):** Estimated total cost of the cheapest solution passing through node n.
- **Data Structure:** Min-Priority Queue (Open List sorted by lowest f(n)).
- **Completeness & Optimality:** A* is guaranteed to be both Complete AND Optimal whenever
h(n) is admissible (and consistent for graph search)!

### 3. Hill Climbing Search (Local Heuristic Search)

- **Core Idea:** Continuously moves from the current state to whichever immediate neighbor improves
the heuristic score most — uses tiny O(1) memory (never keeps a search tree!).
Three Classic Drawbacks (Must Know for Exams!):

- **### 1. Local Maxima:** Gets stuck on a small peak lower than the true Global Maximum.


- **### 2. Plateau:** Flat region where all neighbors have identical h(n), leaving no uphill direction.


- **### 3. Ridge:** Narrow diagonal crest that cannot be climbed in single axis-aligned steps.

Fundamentals of

Worked A* Search Example (Find Shortest Path From S to G):
- **Edges:** S→A (cost 1), S→B (cost 4), A→G (cost 5), B→G (cost 1). Admissible Heuristics: h(S)=5,
h(A)=4, h(B)=1, h(G)=0.

- **### 1. Start at S:** f(S) = 0 + 5 = 5 → Expand S → Open List: A [f = 1 + 4 = 5], B [f = 4 + 1 = 5].


### 2. Expand A (f=5): Generates G [g = 1+5 = 6, h = 0 ⇒  f = 6]. Do NOT stop yet — B still has lower

f=5!

### 3. Expand B (f=5): Generates G [g = 4+1 = 5, h = 0 ⇒  f = 5].


### 4. Pop lowest f = 5 → Goal G reached! Optimal Path = S → B → G (Total Cost = 5)!

- **(a) A* Search:** f(n) = g(n) + h(n)
S
h=5
A
h=4
B
h=1
G
h=0
1
4
5
1
(b) Hill Climbing Pitfalls
Local Max
Plateau
Global Max

> 🖼️ **Figure 5: Worked A* Search Optimal Path Graph and Hill Climbing Pitfalls (Local Maximum & Plateau)**

Heuristic
Algorithm
Evaluation
Formula
Complete? Optimal? Key Note
Greedy Best-
First
f(n) = h(n) No (in
trees)
No Fast, ignores path cost g(n)
A* Search f(n) = g(n) + h(n) Yes Yes (if h
admissible)
Gold standard optimal informed
search
Hill Climbing Local neighbor
h(n)
No No Tiny O(1) RAM; trapped by local
maxima
Fundamentals of