> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

<div class="pdf-roadmap-card">
  <div class="pdf-roadmap-badge">INTELLIGENT AGENT ARCHITECTURE (SENSE ➔ THINK ➔ ACT)</div>
  <div class="pdf-roadmap-grid">
    <div class="pdf-roadmap-col col-blue">
      <div class="pdf-roadmap-col-header">1. ENVIRONMENT</div>
      <div class="pdf-roadmap-items">
        <div class="roadmap-item">• External world containing state, tasks, and constraints</div>
        <div class="roadmap-item">• Emits observable signals captured by agent Sensors</div>
      </div>
    </div>
    <div class="pdf-roadmap-col col-purple">
      <div class="pdf-roadmap-col-header">2. AGENT CORE (PERCEPT ➔ ACTION)</div>
      <div class="pdf-roadmap-items">
        <div class="roadmap-item">• Sensors (Cameras, Microphones, Network sockets, Keyboards)</div>
        <div class="roadmap-item">• Agent Function $f: P^* 	o A$ mapping percept sequences to actions</div>
        <div class="roadmap-item">• Actuators (Motors, Robotic arms, Display screens, API calls)</div>
      </div>
    </div>
    <div class="pdf-roadmap-col col-emerald">
      <div class="pdf-roadmap-col-header">3. PEAS CRITERIA</div>
      <div class="pdf-roadmap-items">
        <div class="roadmap-item">• <strong>P</strong>erformance Measure: Objective utility function</div>
        <div class="roadmap-item">• <strong>E</strong>nvironment: Physical or digital operating space</div>
        <div class="roadmap-item">• <strong>A</strong>ctuators: Output devices exerting control</div>
        <div class="roadmap-item">• <strong>S</strong>ensors: Input instruments measuring state</div>
      </div>
    </div>
  </div>
  <div class="pdf-figure-caption">Figure 1.2: General Architecture of an Intelligent Agent Interacting with its Environment</div>
</div>


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



<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 INTELLIGENT AGENT ARCHITECTURE & THE PEAS FRAMEWORK</div>
  <div class="visual-diagram-container">
    <svg width="100%" height="220" viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="agentArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
        </marker>
      </defs>
      <!-- Agent Box -->
      <rect x="220" y="30" width="320" height="110" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="380" y="55" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">INTELLIGENT AGENT</text>
      <!-- Sensors & Actuators inside agent -->
      <rect x="240" y="70" width="120" height="45" rx="4" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="300" y="90" font-family="Inter, sans-serif" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">Sensors</text>
      <text x="300" y="104" font-family="Inter, sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">(Cameras, LiDAR, GPS)</text>

      <rect x="400" y="70" width="120" height="45" rx="4" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="460" y="90" font-family="Inter, sans-serif" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">Actuators</text>
      <text x="460" y="104" font-family="Inter, sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">(Steering, Motors, Screen)</text>

      <!-- Environment Box -->
      <rect x="120" y="170" width="520" height="40" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
      <text x="380" y="195" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">ENVIRONMENT (Physical World, Roads, Web, Users)</text>

      <!-- Sensor arrow from Env to Sensors -->
      <path d="M 180 170 L 180 92 L 235 92" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#agentArrow)"/>
      <text x="170" y="130" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">Percepts</text>

      <!-- Actuator arrow from Actuators to Env -->
      <path d="M 525 92 L 580 92 L 580 170" fill="none" stroke="#16a34a" stroke-width="2" marker-end="url(#agentArrow)"/>
      <text x="590" y="130" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">Actions</text>
    </svg>
  </div>
</div>

| PEAS Element | Autonomous Self-Driving Taxi | Automated Medical Diagnosis System | E-Commerce Recommendation Bot |
| :--- | :--- | :--- | :--- |
| **P – Performance Measure** | Safety, passenger arrival speed, legal compliance, comfort | Correct diagnosis, minimal false negatives, patient recovery | Click-through rate, sales revenue, user retention |
| **E – Environment** | City roadways, pedestrians, weather, traffic lights | Patient history, symptoms, lab tests, medical staff | Website browsing history, user cart, item catalog |
| **A – Actuators** | Steering wheel, accelerator, brakes, headlights, turn signals | Screen display, prescription generation, test referral | Personalized carousel, email notifications, discounts |
| **S – Sensors** | Cameras, Sonar, LiDAR, Radar, GPS, speedometer | Keyboard keyboard input, digital pathology images, vitals | User click stream, search query logs, purchase history |


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


> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
> - **Modern AI defines intelligence primarily as Acting Rationally (maximizing expected utility), rather than acting humanly.**
> - **PEAS stands for Performance measure, Environment, Actuators, and Sensors.**

> ⚠️ **MISTAKES TO AVOID:**
> 
> - **Believing that the Turing Test requires physical embodiment (it is strictly text-terminal based to prevent visual bias).**
> - **Confusing Artificial General Intelligence (AGI) with Narrow/Weak AI.**

