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



<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 A* HEURISTIC SEARCH & ADMISSIBILITY CONDITION</div>
  <div class="visual-diagram-container">
    <svg width="100%" height="200" viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="720" height="170" rx="8" fill="#f8fafc" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="380" y="38" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#1e40af" text-anchor="middle">The A* Evaluation Function: f(n) = g(n) + h(n)</text>
      <!-- Formula Breakdown -->
      <g transform="translate(60, 55)">
        <rect x="0" y="0" width="200" height="70" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="100" y="25" font-family="Courier, monospace" font-size="16" font-weight="bold" fill="#1e40af" text-anchor="middle">g(n)</text>
        <text x="100" y="45" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Exact Past Cost</text>
        <text x="100" y="60" font-family="Inter, sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">From start state to node n</text>

        <text x="215" y="40" font-family="Inter, sans-serif" font-size="20" font-weight="bold" fill="#0f172a">+</text>

        <rect x="230" y="0" width="200" height="70" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="330" y="25" font-family="Courier, monospace" font-size="16" font-weight="bold" fill="#92400e" text-anchor="middle">h(n)</text>
        <text x="330" y="45" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#78350f" text-anchor="middle">Heuristic Future Estimate</text>
        <text x="330" y="60" font-family="Inter, sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Estimated cost from n to Goal</text>

        <text x="445" y="40" font-family="Inter, sans-serif" font-size="20" font-weight="bold" fill="#0f172a">=</text>

        <rect x="460" y="0" width="180" height="70" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="550" y="25" font-family="Courier, monospace" font-size="16" font-weight="bold" fill="#166534" text-anchor="middle">f(n)</text>
        <text x="550" y="45" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#14532d" text-anchor="middle">Total Estimated Cost</text>
        <text x="550" y="60" font-family="Inter, sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Via node n to Goal</text>
      </g>
      <text x="380" y="155" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">Admissibility Condition: 0 ≤ h(n) ≤ h*(n) [Heuristic must NEVER overestimate true cost!]</text>
      <text x="380" y="172" font-family="Inter, sans-serif" font-size="10" fill="#0f172a" text-anchor="middle">If h(n) is admissible, Tree-Search A* is GUARANTEED to be Complete and Optimal!</text>
    </svg>
  </div>
</div>


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


> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
> - **A* search is guaranteed optimal and complete if the heuristic function h(n) is admissible (never overestimates true cost to goal).**
> - **Breadth-First Search (BFS) uses a FIFO Queue and is optimal for uniform step costs; Depth-First Search (DFS) uses a LIFO Stack.**

> ⚠️ **MISTAKES TO AVOID:**
> 
> - **Designing an inadmissible heuristic in A* search (causes sub-optimal path selection).**
> - **Failing to maintain a visited/explored set in graph search, leading to infinite loops in cyclic state spaces.**

