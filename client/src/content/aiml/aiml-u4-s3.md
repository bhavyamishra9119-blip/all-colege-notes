> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum


### 5. Naive Bayes Classifier (Probabilistic Bayes Theorem)

- **Core Idea:** Applies Bayes’ Theorem (P(C|X) ∝  P(X|C)·P(C)) assuming features are conditionally
independent (the "naive" assumption).
- **Strength:** Ultra-fast even on huge vocabularies — the classic choice for Spam Filtering & Text
Classification.

### 6. Support Vector Machine (SVM — Maximum-Margin Classifier)

- **Core Idea:** Finds the optimal separating line or plane (Hyperplane) that maximizes the safety gap
(Margin) between the closest boundary points (Support Vectors) of each class. Uses the Kernel
Trick to separate non-linear data cleanly.
(a) Decision Tree
Score ≥ 70?
Yes No
PASS FAIL
IF–THEN Feature Splits
(b) k-NN (k = 3)
?
2 Blue vs 1 Orange → Blue
(c) SVM Max Margin
Widest Gap + Support Vecs

> 🖼️ **Figure 7: Visual Intuition of Core Classification Algorithms — Decision Tree, k-NN, and SVM**


### 5.3 Evaluating Classification Models: Confusion Matrix & Key Metrics

- **The 4 Confusion Matrix Outcomes:** 
- **True Positive (TP):** Actually Positive, predicted Positive (Correct!).
- **True Negative (TN):** Actually Negative, predicted Negative (Correct!).
- **False Positive (FP — Type I Error):** Actually Negative, falsely predicted Positive (False
Alarm).
False Negative (FN — Type II Error): Actually Positive, missed as Negative (Dangerous Miss
in Medicine!).
Core Classification Metrics (With Worked Example: TP = 40, TN = 45, FP = 5, FN = 10):
- **Accuracy:** TP + TN
TP + TN + FP + FN  = (40 + 45) / 100 = 85.0%
- **Precision (Positive Purity):** TP
TP + FP
= 40 / (40 + 5) = 88.9% (crucial for Spam Filters).
Recall / Sensitivity (Capture Rate):  TP
TP + FN
= 40 / (40 + 10) = 80.0% (crucial for Cancer
Screening).
- **F1-Score (Harmonic Mean):** 2 × Precision × Recall
Precision + Recall  = 84.2% (best for imbalanced classes).

Algorithm Core Idea Key Advantage Main Limitation
Logistic
Regression
Sigmoid probability
threshold
Fast, simple &
interpretable
Struggles with non-linear
boundaries
Decision Tree Hierarchical feature splits Easy visual IF–THEN
rules
Prone to overfitting if too deep
Random Forest Voting across many trees Very high accuracy &
robust
Less interpretable; heavier
memory
k-NN Vote of k closest
neighbors
Zero training time;
intuitive
Slow prediction on huge
datasets
Naive Bayes Bayes conditional
probability
Blazing fast for
text/spam
Assumes independent features
SVM Maximum-margin
hyperplane
Excels in high
dimensions
Slow to train on millions of rows

- **### 6. Supervised ML:** Introduction to Regression Algorithms


### 6.1 What Is Regression?

- **Definition:** A supervised learning task that models the mathematical relationship between
independent input feature(s) X and a continuous numerical output variable Y.
- **Goal:** Fit a smooth line or curve through the training points that minimizes the vertical prediction
- **errors (Residuals:** ei = yi − ŷi).

### 6.2 Five Important Regression Algorithms


### 1. Simple Linear Regression (1 Input Feature)

- **Fits the best straight line:** ŷ = m·x + c (or ŷ = β0 + β1x), where m is the slope (rate of change) and c
is the y-intercept.
Training Objective (Ordinary Least Squares / Gradient Descent): Find m and c that minimize
the sum of squared residuals.
- **Example:** Predicting House Price (Y) solely from Area in sq. ft. (X).

### 2. Multiple Linear Regression (2+ Input Features)

Extends straight-line modeling to multiple features: ŷ = β0 + β1x1 + β2x2 + … + βnxn.
- **Example:** Predicting House Price from Area (x1), Bedrooms (x2), and City Distance (x3).

### 3. Polynomial Regression (Curved Non-Linear Trends)

- **Includes higher powers of x:** ŷ = β0 + β1x + β2x2 + … + βdxd to capture curved relationships (e.g.,
bacterial growth or crop yield vs. rainfall).


### 4. Regularized Regression (Ridge L2 & Lasso L1)

Adds a penalty term for overly large weights to prevent overfitting when many correlated features
exist (Lasso can shrink useless feature weights all the way to zero).

### 5. Decision Tree / Random Forest Regression & SVR

Tree-based regressors predict the average numeric value inside each leaf region; Support Vector
Regression (SVR) fits a smooth curve within an error tolerance tube.
- **(a) Classification:** Discrete Classes
Class A
Class B
Learns a Separating Decision Boundary
- **(b) Regression:** Continuous Best-Fit Line
Error ei = y − ŷ
- **Best-Fit Line:** ŷ = m·x + c (Min MSE)

> 🖼️ **Figure 8: Visual Contrast Between Supervised Classification (Boundary) and Regression (Best-Fit Line)**


### 6.3 Regression Evaluation Metrics & Classification vs. Regression Summary

Standard Regression Evaluation Formulas (n = samples, yi = actual, ŷi = predicted, ȳ =
- **mean):** 
- **Mean Absolute Error (MAE):** MAE = 1
n ∑ |yi − ŷi|  (average error magnitude in original units).
- **Mean Squared Error (MSE):** MSE = 1
n ∑ (yi − ŷi)2  (penalizes large outlier errors heavily).
- **Root Mean Squared Error (RMSE):** RMSE = √MSE  (easy to interpret in same unit as Y).
Coefficient of Determination (R2 Score):  R2 = 1 −
∑ (yi − ŷi)2
∑ (yi − ȳ)2  (closer to 1.0 means better
fit!).
Comparison
Dimension
Classification Regression
Output Variable
Type
Discrete / Categorical class labels Continuous real numerical quantities
Geometric Goal Find an optimal Decision Boundary Find an optimal Best-Fit Line / Curve
Popular Algorithms Logistic Reg., Decision Tree, k-NN, SVM,
Naive Bayes
Linear, Multiple, Polynomial,
Ridge/Lasso, SVR
Evaluation Metrics Accuracy, Precision, Recall, F1-Score,
ROC-AUC
MAE, MSE, RMSE, R2 Score


> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
> - **Supervised learning trains on labeled data (inputs + targets); Unsupervised learning discovers hidden patterns in unlabeled data.**
> - **High Bias causes Underfitting (model too simple); High Variance causes Overfitting (model memorizes noise).**

> ⚠️ **MISTAKES TO AVOID:**
> 
> - **Data leakage: Evaluating machine learning models on training data rather than an isolated test set.**
> - **Confusing correlation with causation in feature importance.**

