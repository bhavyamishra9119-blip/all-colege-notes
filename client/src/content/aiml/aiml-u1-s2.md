> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

```
┌────────────────────────────────────────────────────────────────────────┐
│                   INTELLIGENT AGENT ARCHITECTURE                       │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│                      ┌──────────────────────┐                          │
│                      │     ENVIRONMENT      │                          │
│                      └──────┬────────▲──────┘                          │
│                             │        │                                 │
│                  Percepts   │        │ Actions                         │
│                  (Inputs)   │        │ (Outputs)                       │
│                             ▼        │                                 │
│                         ┌────────────┴──┐                              │
│                         │    SENSORS    │                              │
│                         └───────┬───────┘                              │
│                                 │                                      │
│                                 ▼                                      │
│                     ┌────────────────────────┐                         │
│                     │     AGENT PROGRAM      │                         │
│                     │  (Decision / Brain)    │                         │
│                     └───────────┬────────────┘                         │
│                                 │                                      │
│                                 ▼                                      │
│                         ┌───────────────┐                              │
│                         │   ACTUATORS   │                              │
│                         └───────────────┘                              │
│                                                                        │
│ • PEAS Framework: Performance Measure, Environment, Actuators, Sensors │
└────────────────────────────────────────────────────────────────────────┘
```


### 5. Decision / Action: Triggering downstream action (e.g., unlocking a smartphone via Face ID or

braking for a pedestrian).
- **Four Core Computer Vision Tasks:** 
- **Image Classification:** Assigns a single label to an entire image (e.g., "Tumor Detected" vs.
"Normal").
- **Object Detection:** Locates multiple objects with rectangular bounding boxes and class labels
(e.g., detecting cars, cyclists, and traffic lights simultaneously).
- **Semantic Segmentation:** Classifies every individual pixel in the image to trace exact object
boundaries.
OCR (Optical Character Recognition): Extracts editable text from scanned documents or
vehicle license plates.

### 3.3 Expert Systems

- **Definition:** An Expert System is a knowledge-based AI software program designed to emulate
the decision-making ability of a specialized human domain expert (such as a doctor, geologist, or
engineer) by reasoning over an explicit database of facts and IF–THEN production rules.
Six Core Architectural Components of an Expert System:

- **### 1. Knowledge Base (KB):** The "brain" storing domain-specific facts and heuristic rules written in

IF <condition> THEN <action/conclusion> format.

- **### 2. Inference Engine (IE):** The reasoning processor that matches user inputs against Knowledge

Base rules to derive new conclusions using logical chaining.

- **### 3. Working Memory (Fact Base):** Temporary workspace holding facts supplied by the user

during the current consultation session.

- **### 4. User Interface (UI):** Accepts user queries/symptoms in plain language and displays final

diagnoses or recommendations.

- **### 5. Explanation Facility:** Justifies "Why did you ask this?" and "How did you reach this

conclusion?" by tracing the exact rules fired (vital for medical/legal trust).

### 6. Knowledge Acquisition Module: Tool used by Knowledge Engineers to extract expertise from

human specialists and update the Knowledge Base.
Worked Inference Example (Medical Rule-Based Trace):
- **Unit-I:** Foundations of Artificial Intelligence • Fundamentals of AIML

- **Rule R1:** IF (fever == HIGH) AND (cough == YES) THEN (suspect =
RESPIRATORY_INFECTION)
- **Rule R2:** IF (suspect == RESPIRATORY_INFECTION) AND (chest_xray == FLUID) THEN
(diagnosis = PNEUMONIA)
- **Input Facts:** fever = HIGH, cough = YES, chest_xray = FLUID
- **Forward Chaining Trace:** 
- **Step 1:** Match Input Facts against R1 -> Fires R1 -> Adds fact: suspect =
RESPIRATORY_INFECTION
- **Step 2:** Match updated facts against R2 -> Fires R2 -> Conclusion: diagnosis =
PNEUMONIA
- **Classic Historical Examples:** MYCIN (diagnosed bacterial blood infections and recommended
antibiotics), DENDRAL (identified chemical molecular structures from mass spectrometry), and
PROSPECTOR (mineral exploration).

> 📊 **Table 3: Inference Mechanisms in Expert Systems — Forward Chaining vs. Backward Chaining**

Parameter Forward Chaining (Data-Driven) Backward Chaining (Goal-Driven)
Direction of
Reasoning
- **Bottom-Up:** Starts from known facts →
fires matching rules → reaches
conclusions.
- **Top-Down:** Starts from a hypothesis/goal →
works backward to verify required facts.
Trigger
Question
"Given these current facts, what can we
conclude?"
"Is hypothesis X true? Which conditions prove
X?"
Best Suited For Monitoring, planning, sensor alerts,
scheduling
Medical diagnosis (MYCIN), troubleshooting,
theorem proving
(A) Natural Language Processing (NLP) Pipeline:
Raw Text/Speech 1. Lexical 2. Syntactic 3. Semantic 4–5. Discourse Intent / NLG
(B) Computer Vision (CV) Processing Pipeline:
Camera / Image Pre-Processing Feature Extraction Detect / Classify Visual Action
(C) Expert System Block Architecture:
Non-Expert
User Query
User Interface
+ Explanation
Inference Engine
Forward / Backward
Knowledge Base
IF–THEN Rules
Human Expert
& Knowledge Eng.

> 🖼️ **Figure 4: End-to-end architectural pipelines for the three primary Unit-I AI domains: (A) NLP, (B) Computer Vision,**

and (C) Expert Systems.
- **Unit-I:** Foundations of Artificial Intelligence • Fundamentals of AIML


### 4. Difference Between AI, Machine Learning, and Deep Learning

Nested Subset Relationship (Must-Know Rule): Deep Learning (DL) ⊂  Machine Learning
(ML) ⊂  Artificial Intelligence (AI). Every Deep Learning model is a Machine Learning model, and
every Machine Learning model is Artificial Intelligence—but NOT all AI uses Machine Learning
(e.g., rule-based Expert Systems are AI without ML).

### 1. Artificial Intelligence (Broadest Umbrella): Any technique enabling computers to mimic

intelligent behavior—spanning static IF–THEN expert rules, classical search algorithms, Machine
Learning, and Deep Learning.

### 2. Machine Learning (Subset of AI): Algorithms that automatically learn statistical patterns

from historical data to improve performance without being explicitly programmed with hard-
coded rules. Requires human experts to perform Manual Feature Engineering (choosing which
attributes matter—e.g., petal length, email word count).
- **Three Learning Modes:** Supervised Learning (labeled data: Spam vs. Not Spam),
Unsupervised Learning (unlabeled data: Customer Clustering), and Reinforcement Learning
- **(trial-and-error rewards:** Game Playing/Robotics).

### 3. Deep Learning (Specialized Subset of ML): Uses multi-layered Artificial Neural Networks

(ANNs) (many hidden layers → "deep") inspired by the human cortex. Performs Automatic End-
to-End Feature Extraction directly from raw unstructured data (images, audio, text), thriving on
massive datasets and high-compute GPUs/TPUs.
Worked Analogy (Recognizing a Cat in an Image):

- **### 1. Rule-Based AI:** Human manually codes rigid rules (IF pointy_ears AND whiskers AND

tail THEN cat) — fails easily on unusual angles or lighting.

- **### 2. Traditional ML:** Human extracts numeric edge/shape/color features manually, then feeds them

to a classifier (e.g., Decision Tree or SVM) trained on thousands of labeled photos.

- **### 3. Deep Learning:** Feed raw pixels directly into a Deep CNN; early layers automatically discover

edges, middle layers discover ears/eyes, and deep layers recognize "Cat" with >98% accuracy.
(A) Nested Subset Hierarchy (AI ⊃  ML ⊃  DL)
Artificial Intelligence (AI)
Rules, Logic, Search, Expert Systems
Machine Learning (ML)
Learns from Data (Manual Features)
Deep Learning
Deep Neural Nets
(B) Performance vs. Training Data Volume
Amount of Training Data →
Accuracy / Perf. →
Deep Learning
Traditional ML
Rule-Based AI

> 🖼️ **Figure 5: (A) Nested relationship between AI, Machine Learning, and Deep Learning; (B) Classic scaling curve**

showing why Deep Learning outperforms Traditional ML on large datasets.
- **Unit-I:** Foundations of Artificial Intelligence • Fundamentals of AIML


> 📊 **Table 4: Comprehensive Exam Comparison Matrix — AI vs. Machine Learning vs. Deep Learning**

Comparison
Parameter
Artificial Intelligence
(AI) Machine Learning (ML) Deep Learning (DL)
Core Goal Simulate human
intelligence & decision-
making
Learn predictive patterns
from structured data
Learn complex representations
via deep neural nets
Feature
Extraction
Hand-crafted rules & logic Manual (engineered by
human experts)
Automatic (learned end-to-
end by hidden layers)
Data
Requirement
Works even with small
rules/facts
Performs well on small-to-
medium datasets
Requires massive
labeled/unlabeled datasets
Hardware
Dependency
Standard CPU sufficient Standard CPU usually
sufficient
High-performance GPUs /
TPUs required
Training Time Minimal (coding rules
takes time)
Short (seconds to minutes) Long (hours to weeks on
clusters)
Interpretability High (transparent logic
rules)
Moderate to High (e.g.,
Decision Trees)
Low (often acts as a "Black
Box")
Best Data Type Symbolic facts, logical
rules
Tabular / structured
spreadsheets
Unstructured data (Images,
Audio, Video, Text)
Typical
Algorithms
A* Search, Minimax,
Expert Rules
Linear Regression, SVM,
Random Forest, K-Means
CNN, RNN/LSTM,
Transformers (GPT)

### 5. Characteristics of Intelligent Systems

- **Definition:** An Intelligent System (formalized in AI as a Rational Intelligent Agent) is a
hardware or software entity that perceives its surrounding environment via sensors, processes
information internally to make rational decisions, and acts back upon the environment via
actuators to achieve defined goals.
Eight Essential Characteristics of an Intelligent System (Full-Marks Exam List):

- **### 1. Perception:** Ability to gather raw data from the physical or digital world through sensors

(cameras, microphones, GPS, APIs, text inputs) and interpret it meaningfully.

- **### 2. Learning & Adaptation:** Improves accuracy and behavior automatically over time from new

data, feedback, or past mistakes without manual reprogramming.

- **### 3. Reasoning & Inference:** Applies deductive, inductive, or probabilistic logic to draw new

conclusions from incomplete or implicit facts.

- **### 4. Problem Solving & Planning:** Evaluates multiple candidate paths and constructs a multi-step

action plan to move from a current state to a desired goal state.

- **### 5. Autonomy:** Operates independently with minimal or zero continuous human supervision,

adjusting dynamically to unexpected environmental changes.

- **### 6. Goal-Directed Rationality:** Consistently selects actions that maximize an explicit Performance

Measure (e.g., minimum travel time, maximum diagnostic accuracy).
- **Unit-I:** Foundations of Artificial Intelligence • Fundamentals of AIML


- **### 7. Knowledge Representation:** Organizes facts, rules, and relationships in structured internal

formats (knowledge graphs, rules, neural weights) for rapid retrieval.

### 8. Handling Uncertainty & Natural Interaction: Makes sensible probabilistic decisions despite

noisy or missing sensor data, and communicates seamlessly via human-friendly interfaces
(speech, text, visual dashboards).
The PEAS Framework (Specifying Any Intelligent System): Before engineering an intelligent
system, AI designers define its task environment using four pillars: Performance Measure,
Environment, Actuators, and Sensors.
INTELLIGENT SYSTEM (RATIONAL AGENT)

### 1. SENSORS2. THINK (Cognitive Core)

• Knowledge Representation
• Reasoning & Inference
• Learning & Adaptation
• Goal Planning & Utility
- **Decision:** Choose Best Action 3. ACTUATORS
ENVIRONMENT
(Physical Roads,
Users, Markets,
Hospital Data)
Percepts
(Raw Inputs)
Actions
(Output Effects)

> 🖼️ **Figure 6: Closed-loop Sense–Think–Act architecture showing how an Intelligent System perceives, reasons,**

learns, and acts on its environment.

> 📊 **Table 5: Worked PEAS Specifications for Classic Intelligent Systems**

Intelligent
System
P — Performance
Measure E — Environment A — Actuators S — Sensors
Medical
Diagnosis
System
Accurate diagnosis,
low cost, minimal
false negatives
Patient, hospital
records, lab test
staff
Screen display of
diagnosis, test/drug
recommendations
Keyboard entry of
symptoms, lab
reports, MRI scans
Autonomous
Self-Driving
Car
Safety, legal
compliance, fast &
smooth trip
Roads, traffic
signals,
pedestrians,
weather
Steering, accelerator,
brakes, turn signals,
horn
Cameras, LiDAR,
Radar, GPS,
speedometer, sonar
Customer
Support
Chatbot
Query resolution
rate, fast response,
user satisfaction
Website/app chat
interface, customer
database
Text/voice replies, ticket
creation, API triggers
User text input,
button clicks,
account history
- **Unit-I:** Foundations of Artificial Intelligence • Fundamentals of AIML