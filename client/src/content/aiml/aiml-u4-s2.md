> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum


### 3.3 Smart Devices (IoT, Wearables & Edge Machine Learning)

How ML Powers Everyday Smart Devices: Embeds lightweight trained models directly onto
device microchips (Edge ML / TinyML) or syncs sensor streams with cloud ML models for instant
intelligent response.
- **Major Smart-Device Applications:** 
Voice Assistants & Smart Speakers (Alexa, Siri, Google Assistant): Wake-word detection
on device + Automatic Speech Recognition (ASR) + Natural Language Understanding (NLU).
- **Smartphones:** Face/fingerprint biometric unlock, computational night-mode photography, real-
time spam call blocking, and adaptive battery optimization.
Smart Wearables (Smartwatches & Fitness Bands): Classify walking/running/sleeping
activities, detect irregular heartbeats (atrial fibrillation), and trigger automatic fall-detection SOS
alerts.
Smart Homes & Thermostats (e.g., Nest): Learn household occupancy schedules
automatically to adjust HVAC heating/cooling and cut electricity consumption without manual
programming.

### 1. Recommendation Systems

- **Inputs:** 
Clicks, Ratings, History
- **Engines:** 
Content | Collab. | Hybrid
- **Examples:** 
Netflix, Amazon, Spotify

### 2. Automation

- **Inputs:** 
Cameras, LiDAR, Sensors
- **ML Tasks:** 
Defect Vision, Fault Pred.
- **Examples:** 
Self-Driving, Smart Robots

### 3. Smart Devices (IoT)

- **Inputs:** 
Voice, Heart Rate, Temp
- **Deployment:** 
On-Device Edge ML + Cloud
- **Examples:** 
Alexa, Watch, Smart AC

> 🖼️ **Figure 4: Summary Map of Core Machine Learning Application Areas**

Recommendation
Type
How It Works Strength Limitation
Content-Based Matches item features to
user’s past likes
No data needed from
other users
Narrow "filter bubble"
suggestions
Collaborative Finds users with similar
rating patterns
Discovers fresh,
unexpected items
Cold-Start problem for
new users/items
Hybrid Combines Content +
Collaborative signals
Highest accuracy &
solves cold start
Higher engineering &
compute cost


### 4. Machine Learning Workflow & Model Development Lifecycle


### 4.1 The 8-Stage End-to-End ML Development Lifecycle

Stage 1 — Problem Formulation & Goal Definition
Translate a business or engineering need into a clear ML task (Supervised vs. Unsupervised;
Classification vs. Regression).
Select the exact success metric before modeling (e.g., 95% Recall for medical screening or low
RMSE for price forecasting).
Stage 2 — Data Collection & Integration
Gather relevant, representative raw data from databases, CSV logs, APIs, web scrapers, or IoT
sensors.
- **Golden Rule:** "Garbage In, Garbage Out (GIGO)" — model quality never exceeds the quality of
its underlying data.
Stage 3 — Data Exploration (EDA) & Data Preprocessing (60–70% of Project Time)
- **Handle Missing Values:** Impute gaps using mean, median, or mode, or remove severely
corrupted rows.
- **Remove Duplicates & Outliers:** Prevent noisy extreme values from skewing learned parameters.
- **Encode Categorical Text:** Convert text labels (e.g., Red/Blue/Green) into numeric form via Label
Encoding or One-Hot Encoding.
- **Feature Scaling:** Normalize ([0, 1]) or Standardize (μ = 0, σ = 1) numerical columns so large-scale
values (e.g., Salary) do not overpower small-scale ones (e.g., Age).
Stage 4 — Feature Engineering & Feature Selection
Create informative domain variables (e.g., deriving BMI from Height & Weight) to expose clearer
patterns to the model.
Drop irrelevant or redundant columns to reduce complexity, avoid noise, and speed up training.
Stage 5 — Dataset Splitting (Preventing Data Leakage)
- **Training Set (~70%):** Used by the algorithm to learn internal weights or decision rules.
- **Validation Set (~15%):** Used to compare candidate algorithms and tune hyperparameters.
- **Test Set (~15%):** Held strictly untouched until the very end to measure unbiased real-world
performance.
Stage 6 — Model Selection & Training
Start with a simple, interpretable baseline model (e.g., Linear or Logistic Regression), then train
more expressive candidates (Decision Trees, Random Forest, SVM) on the training split.

Stage 7 — Model Evaluation & Hyperparameter Tuning
Evaluate on unseen validation/test data using task-specific metrics (Accuracy/F1 for Classification;
RMSE/R2 for Regression).
Tune external settings (Hyperparameters such as tree depth or k in k-NN) via Cross-Validation &
Grid Search to prevent Underfitting and Overfitting.
Stage 8 — Deployment, Monitoring & Retraining (Maintenance Loop)
Deploy the validated model into production (REST API, cloud service, or embedded edge chip).
Continuously monitor for Data Drift (live real-world data gradually diverging from training data)
and retrain periodically to preserve accuracy.

### 1. Problem

Definition

### 2. Data

Collection

### 3. Cleaning &

Preprocessing

### 4. Feature

Engineering

### 5. Train/Val/

Test Split

### 6. Model

Training

### 7. Evaluation

& Tuning

### 8. Deploy &

Monitor
Drift Retraining
- **Standard Dataset Split:** Training Set (70%) Val 15% Test 15%
- **Iterative Lifecycle:** Model quality is continuously validated & updated as live data evolves

> 🖼️ **Figure 5: Complete 8-Stage Machine Learning Workflow, Iterative Retraining Loop, and Dataset Split**


- **### 4.2 Crucial Lifecycle Pitfalls:** Underfitting vs. Optimal Fit vs. Overfitting

- **Underfitting (High Bias):** Model is too simple to capture underlying patterns → performs poorly
on both Training AND Test data. Fix: Use a richer model, add better features, train longer.
- **Optimal Fit (Good Generalization):** Captures true underlying signal while ignoring random noise
→ achieves low error on both Training AND unseen Test data.
- **Overfitting (High Variance):** Model memorizes training data and its random noise → performs
nearly 100% on Training data but poorly on unseen Test data. Fix: Add more training data,
apply Regularization, prune deep trees, or reduce unnecessary features.
(a) Underfitting
Too simple (High Bias)
(b) Optimal Fit (Ideal)
Generalizes well!
(c) Overfitting
Memorizes noise (High Var.)

> 🖼️ **Figure 6: Visual Diagnosis of Underfitting, Optimal Generalization, and Overfitting**



- **## PART II:** SUPERVISED MACHINE LEARNING (CLASSIFICATION &

REGRESSION)

- **### 5. Supervised ML:** Introduction to Classification Algorithms


### 5.1 What Is Classification?

- **Definition:** A supervised learning task where the model predicts a discrete categorical class
label for a given input example by learning a Decision Boundary separating different classes in
feature space.
Three Common Types of Classification:
- **Binary Classification (2 Classes):** Output is Yes/No or 0/1 (e.g., Fraud vs. Genuine; Disease
Positive vs. Negative; Pass vs. Fail).
Multi-Class Classification (3+ Mutually Exclusive Classes): Input belongs to exactly one of
K categories (e.g., Handwritten Digit 0–9; Sentiment: Positive / Neutral / Negative).
- **Multi-Label Classification:** One input can receive multiple labels simultaneously (e.g., a movie
tagged as both Action AND Sci-Fi).

### 5.2 Six Core Classification Algorithms (Beginner-Friendly Breakdown)


### 1. Logistic Regression (Probabilistic Linear Classifier)

- **Core Idea:** Despite having "Regression" in its name, it is strictly a Classification algorithm. It
passes a linear weighted sum through the S-shaped Sigmoid Function: P(y = 1) = 1
1 + e−(w·x + b)
, outputting a probability between 0 and 1.
- **Decision Rule:** If P ≥ 0.5 → Class 1; else → Class 0. Fast, interpretable baseline for binary tasks.

### 2. Decision Tree Classifier (Rule-Splitting Tree)

- **Core Idea:** Recursively splits the dataset at internal nodes using the best feature question
(measured by Gini Impurity or Information Gain / Entropy) until leaf nodes assign a final class
label.
- **Strength:** Easy to read like a flowchart (transparent rules) and requires no feature scaling.

### 3. Random Forest (Ensemble of Decision Trees)

- **Core Idea:** Builds many independent Decision Trees on random subsets of data and features
(Bagging) and combines their predictions via Majority Voting — drastically reducing overfitting
and boosting accuracy.
4. k-Nearest Neighbors (k-NN — Instance-Based / Lazy Learner)
- **Core Idea:** Stores the training dataset; when a new point arrives, computes its distance (e.g.,
Euclidean distance) to all points, finds the k closest neighbors, and assigns the majority class
among them.
- **Practical Tip:** Requires feature scaling; choosing an odd k (e.g., k = 3, 5) avoids tie votes in
binary tasks.