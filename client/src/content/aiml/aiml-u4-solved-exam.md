> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum


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

- **Step-by-Step Evaluation for Rule:** {Bread} → {Butter}
- **Individual Counts:** Count(Bread) = 4 → Support(Bread) = 4/5 = 0.80  |  Count(Butter) = 3 →
Support(Butter) = 3/5 = 0.60.
- **Combined Count:** Count(Bread ∪  Butter) = 3 (Transactions T1, T4, T5).
- **Support({Bread} → {Butter}):** 3 / 5 = 0.60 (60%).
- **Confidence({Bread} → {Butter}):** 3 / 4 = 0.75 (75%).
- **Lift({Bread} → {Butter}):** 0.75 / 0.60 = 1.25 (> 1) → Verdict: Strong positive association!

### 8.4 Major Association Algorithms (Apriori & FP-Growth)


### 1. Apriori Algorithm (Most Famous Level-Wise Algorithm):

Apriori Principle (Anti-Monotone Pruning Rule): "If an itemset is infrequent (below minimum
support), then ALL of its supersets MUST also be infrequent and can be pruned immediately!"
(Saves enormous computation).
- **4-Step Apriori Execution:** 

- **### 1. Set user thresholds:** Minimum Support (min_sup) and Minimum Confidence (min_conf).


### 2. Scan database to count 1-itemsets; discard any item below min_sup to keep Frequent 1-

itemsets (L1).

### 3. Join frequent k-itemsets to build candidate (k+1)-itemsets (Ck+1), prune infrequent subsets,

and scan support iteratively until no frequent sets remain.

### 4. Generate all strong rules X → Y from the final frequent itemsets whose Confidence ≥

min_conf.

### 2. FP-Growth (Frequent Pattern Growth — Faster Alternative):

Compresses the transaction database into a compact tree (FP-Tree) in just 2 database scans
without generating huge candidate sets — much faster than Apriori on massive retail
databases.
- **Real-World Applications:** Supermarket shelf placement & cross-selling bundles, Amazon
"Frequently Bought Together" widgets, web clickstream optimization, and medical symptom–drug
co-occurrence analysis.

### 1. Scan DB

Count Items

### 2. Prune Rare

Sup ≥ min_sup

### 3. Join Sets

Build Pairs/Triples

### 4. Build Rules

Conf ≥ min
Strong
X → Y Rules
Repeat Until No Frequent Sets Left

> 🖼️ **Figure 10: Step-by-Step Apriori Algorithm Flowchart for Frequent Itemsets and Strong Association**

Rules

Feature Clustering (Unsupervised) Association Rule Mining
(Unsupervised)
Primary Goal Group similar objects/rows into
homogeneous clusters
Discover IF–THEN co-occurrence rules
among items
Typical Input
Data
Numeric feature vectors (e.g., age, income,
coordinates)
Transactional itemsets (e.g., shopping
baskets)
Key Output Cluster labels (C1, C2, …, CK) or
Dendrogram
Ranked rules X → Y with Support,
Confidence & Lift
Core
Algorithms
K-Means, Hierarchical Clustering, DBSCAN Apriori, FP-Growth, Eclat
Classic
Example
Grouping shoppers into Budget vs. Premium
segments
"75% of customers buying Bread also buy
Butter"

### 9. Quick Exam-Revision Cheat Sheet (AIML Unit–4 Summary)

Syllabus Topic Must-Memorize Formula / Definition High-Yield Exam Tip
- **ML Overview Tom Mitchell:** Improves on Task (T) with
Experience (E) measured by Performance (P)
Contrast Traditional (Data + Rules →
Answers) vs. ML (Data + Answers →
Model).
3 Learning
Categories
Supervised (Labeled), Unsupervised
(Unlabeled), Reinforcement (Agent + Rewards)
Always draw the RL Agent–Environment
Action/State/Reward feedback loop!
Application
Areas
Recommendations (Content/Collab/Hybrid),
Automation (Vision/Maintenance), Smart
Devices (Edge ML)
Mention the Cold-Start problem in
Collaborative Filtering and Edge ML in
wearables.
- **ML Lifecycle 8 Stages:** Define → Collect → Clean → Feature
Eng. → Split (70/15/15) → Train → Tune →
Deploy/Monitor
Explain Underfitting (High Bias) vs.
Overfitting (High Variance) and Data
Drift.
Classification Discrete classes; Metrics: Accuracy, Precision
(TP/(TP+FP)), Recall (TP/(TP+FN)), F1
- **Remember:** Logistic Regression is a
Classification algorithm using the
Sigmoid curve!
Regression Continuous numeric values; ŷ = m·x + c;
- **Metrics:** MAE, MSE, RMSE, R2
Distinguish Simple (1 feature), Multiple
(2+ features), and Polynomial (curved)
regression.
Clustering K-Means (5-step centroid loop + Elbow
Method), Hierarchical (Dendrogram), DBSCAN
(Density/Noise)
- **State:** High Intra-Cluster similarity + Low
Inter-Cluster similarity.
Association
Rules
Support, Confidence, Lift = Conf(X→Y) /
Sup(Y); Apriori & FP-Growth
- **Remember:** Lift > 1 = Positive link; Lift
= 1 = Independent; Lift < 1 = Negative
link.


> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
> - **Supervised learning trains on labeled data (inputs + targets); Unsupervised learning discovers hidden patterns in unlabeled data.**
> - **High Bias causes Underfitting (model too simple); High Variance causes Overfitting (model memorizes noise).**

> ⚠️ **MISTAKES TO AVOID:**
> 
> - **Data leakage: Evaluating machine learning models on training data rather than an isolated test set.**
> - **Confusing correlation with causation in feature importance.**

