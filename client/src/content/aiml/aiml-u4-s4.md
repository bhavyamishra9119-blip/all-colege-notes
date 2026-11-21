> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum

Comparison
Dimension
Classification Regression
Example Questions "Is this email Spam?" / "Which digit is
this?"
"What is the house price?" / "How many
units sold?"

- **## PART III:** UNSUPERVISED MACHINE LEARNING (CLUSTERING &

ASSOCIATION)

- **### 7. Unsupervised ML:** Introduction to Clustering Algorithms


### 7.1 What Is Clustering?

- **Definition:** An unsupervised learning technique that groups an unlabeled dataset into
meaningful subsets called Clusters based purely on mathematical similarity (distance).
Two Golden Properties of Good Clusters:
- **High Intra-Cluster Similarity:** Data points inside the same cluster are very close/similar to
each other.
- **Low Inter-Cluster Similarity:** Data points in different clusters are well-separated and distinct.
- **Real-World Uses:** Customer segmentation for targeted marketing, document/news grouping,
image color compression, biological gene clustering, and fraud/outlier spotting.

### 7.2 Three Major Clustering Algorithms Explained From Scratch

A. K-Means Clustering (Centroid / Partition-Based — Most Famous)
- **Goal:** Partition data into exactly K non-overlapping clusters, each represented by its geometric
center called a Centroid (μk).
Step-by-Step K-Means Algorithm (Memorize These 5 Steps!):

- **### 1. Step 1 — Choose K:** Decide the desired number of clusters K (often chosen using the Elbow

Method, plotting Within-Cluster Sum of Squares [WCSS] vs. K and picking the sharp "elbow"
bend).

### 2. Step 2 — Initialize Centroids: Randomly pick K starting points as initial cluster centroids.


- **### 3. Step 3 — Assignment Step:** Calculate Euclidean distance from every data point to all K

centroids and assign each point to its nearest centroid.

- **### 4. Step 4 — Update Step:** Recompute each cluster’s centroid as the exact mathematical mean

(average) of all points assigned to it.

- **### 5. Step 5 — Convergence Check:** Repeat Steps 3 & 4 until centroids stop moving (or

assignments no longer change).
- **Strengths & Limits:** Very fast and scalable, but requires choosing K upfront, struggles with non-
spherical shapes, and is sensitive to outliers.

B. Hierarchical Clustering (Tree / Dendrogram-Based)
- **Core Idea:** Builds a multi-level nested hierarchy of clusters visualized as an inverted tree called a
Dendrogram — does NOT require specifying K in advance!
- **Two Approaches:** 
Agglomerative (Bottom-Up — Most Common): Starts with every data point as its own single
cluster → repeatedly merges the two closest clusters until all points form one single root
cluster.
- **Divisive (Top-Down):** Starts with all data in one huge cluster → recursively splits clusters apart
down to individual points.
- **Cutting the Dendrogram:** Drawing a horizontal line across the tallest vertical gap in the
dendrogram determines the natural number of clusters K.
C. DBSCAN (Density-Based Spatial Clustering of Applications with Noise)
- **Core Idea:** Groups together points packed closely in high-density regions (controlled by radius ε
and minimum neighbors MinPts) and automatically labels sparse isolated points as Noise /
Outliers.
- **Major Advantage:** Discovers arbitrarily curved/ring-shaped clusters without needing K
beforehand and handles outliers naturally.

### 1. Pick K Centers 2. Assign Nearest 3. Recompute Mean 4. Converged? Stop

(a) K-Means (K = 3)
×
×
×
(b) Elbow Method (Pick K)
Elbow (K=3)
Number of Clusters (K)
(c) Dendrogram Tree
A      B         C      D       E

> 🖼️ **Figure 9: K-Means Iterative Loop, Optimal K Elbow Curve, and Hierarchical Dendrogram**

Clustering
Algorithm
Needs K
Upfront?
Cluster
Shape
Outlier
Handling
Best Used For
K-Means Yes (fixed K) Spherical /
convex
Sensitive to
outliers
Large numerical datasets,
customer tiers
Hierarchical No (cut
dendrogram)
Nested tree
groups
Moderate
sensitivity
Small/medium taxonomy &
biology trees
DBSCAN No (uses ε,
MinPts)
Any arbitrary
shape
Excellent (flags
Noise)
Spatial maps, GPS hotspots,
anomaly detection


- **### 8. Unsupervised ML:** Introduction to Association Algorithms


### 8.1 What Is Association Rule Mining?

- **Definition:** An unsupervised data-mining technique that discovers strong, interesting IF–THEN
co-occurrence relationships among items in huge transactional databases (popularly called
Market Basket Analysis).
- **Rule Format:** X → Y (where X is the Antecedent [IF], Y is the Consequent [THEN], and X ∩ Y
= ∅).
- **Classic Example:** {Bread} → {Butter} means customers who put Bread into their shopping
cart also have a high likelihood of buying Butter in the same transaction.

### 8.2 The Three Mathematical Metrics Evaluating Every Association Rule

Core Association Rule Formulas (Total Transactions = N):

### 1. Support (Popularity / Frequency): Fraction of all transactions containing both X and Y:

Support(X → Y) = Count(X ∪  Y)
N

### 2. Confidence (Rule Reliability / Conditional Probability): Fraction of transactions with X that

- **also contain Y:** Confidence(X → Y) = Support(X ∪  Y)
Support(X)

### 3. Lift (True Association Strength): Ratio of observed confidence to expected random chance:

Lift(X → Y) = Confidence(X → Y)
Support(Y)  = Support(X ∪  Y)
Support(X) × Support(Y)
Lift > 1: Positive association (buying X genuinely increases probability of buying Y).
Lift = 1: Independent (pure coincidence — no real link).
Lift < 1: Negative association (substitute goods — buying X makes Y less likely).

### 8.3 Worked Step-by-Step Association Example (Market Basket Calculation)

Transaction ID Items Purchased (N = 5)
T1 Milk, Bread, Butter
T2 Milk, Bread
T3 Milk, Eggs
T4 Bread, Butter
T5 Milk, Bread, Butter, Eggs