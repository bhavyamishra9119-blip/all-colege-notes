> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum


### 3. Generative AI (LLM-Powered) Chatbots: Built on large Transformer models capable of open-

ended reasoning, code generation, summarization, and dynamic human-like dialogue across
virtually any topic.
- **Worked Chatbot NLU Parsing Example:** 
- **User Message:** "Book a train ticket from Delhi to Jaipur tomorrow morning."
-> Detected Intent:   BOOK_TRAIN_TICKET
-> Extracted Entities: { origin: "Delhi", destination: "Jaipur", date:
- **"Tomorrow", slot:** "Morning" }
-> Action Triggered:  Query Railway API -> Return available trains to user.
(A) Virtual Assistant & AI Chatbot Pipeline (Voice Adds ASR + TTS; Text Chatbots Start at NLU):

### 1. Wake/ASR

Speech → Text

### 2. NLU Engine

Intent + Entities

### 3. Dialog & APIs

Context / Action / DB

### 4. NLG Reply

Text Response

### 5. TTS / UI

Voice or Chat Out
(B) Autonomous System Closed-Loop Architecture (Self-Driving Vehicle / Drone / Robot):

### 1. Sensor Fusion

LiDAR, Radar, Cam

### 2. Perception (CV)

Objects, Lanes, Map

### 3. Path Planning

Safe Trajectory / Rules

### 4. Control & Act

Steer, Brake, Throttle
Continuous Real-Time Environmental Feedback Loop

> 🖼️ **Figure 7: Working pipelines for (A) Voice Virtual Assistants & Chatbots and (B) Closed-Loop Autonomous**

Systems.

> 📊 **Table 7: Comparison Matrix — Virtual Assistants vs. Chatbots vs. Autonomous Systems**

Feature Virtual Assistants Chatbots Autonomous Systems
Primary
Interface
Voice-first (plus
screen/IoT integration)
Text-first inside websites /
messaging apps
Physical world via sensors &
mechanical actuators
Task Scope Broad personal & smart-
device tasks
Focused conversational Q&A
/ customer support
Real-time physical navigation &
control
Core AI
Domains
ASR, NLP/NLU, TTS,
API orchestration
NLP (Intent/Entity), Dialog
Mgmt, LLMs
Computer Vision, Sensor Fusion,
RL, Planning
Safety
Criticality
Low (convenience /
productivity)
Low-to-Moderate (accuracy /
privacy)
Extremely High (human life &
physical safety)
Examples Siri, Amazon Alexa,
Google Assistant
Bank support bots, IRCTC
AskDISHA, ChatGPT
Waymo Robo-taxi, Autonomous
Drones, Warehouse Robots
- **Unit-I:** Foundations of Artificial Intelligence • Fundamentals of AIML


### 8. High-Yield Quick-Revision Cheat Sheet


### 8.1 Essential Milestones, Acronyms & Fast-Recall Anchors

- **Must-Memorize Years & Pioneers:** 1950 (Alan Turing — Turing Test), 1956 (John McCarthy —
Dartmouth Conference coined "AI"), 1966 (ELIZA chatbot), 1970s–80s (MYCIN Expert System &
AI Winters), 1997 (IBM Deep Blue), 2012 (AlexNet Deep Learning boom), 2017 (Transformers).
- **AI Types Quick Formula:** Capability (3): ANI (exists) → AGI (human-level) → ASI (superhuman).
- **Functionality (4):** Reactive → Limited Memory → Theory of Mind → Self-Aware.
- **Nested Subset Identity:** DL ⊂  ML ⊂  AI — Traditional ML needs Manual Feature Engineering;
Deep Learning does Automatic Feature Extraction via deep neural networks.
- **Expert System Core Equation:** Expert System = Knowledge Base (IF–THEN Rules) +
Inference Engine (Forward/Backward Chaining) + Explanation Facility.
- **PEAS Acronym:** Performance Measure, Environment, Actuators, Sensors.
Core Voice/NLP Acronyms: ASR (Automatic Speech Recognition), NLU (Natural Language
Understanding), NLG (Natural Language Generation), TTS (Text-to-Speech), OCR (Optical
Character Recognition), CNN (Convolutional Neural Network).

> 📊 **Table 8: Top 10 Unit-I AIML University Exam Traps & Common Mistakes to Avoid**

#
Common Mistake /
Exam Trap Why It Is Incorrect Exam-Accurate Answer
1 Claiming ChatGPT or Siri
is "General AI (AGI)"
Even advanced LLMs lack true general
consciousness & autonomous cross-
domain mastery.
All deployed AI systems today are
classified as Narrow AI (ANI) &
Limited Memory.
2 Treating AI, ML, and DL
as synonymous terms
Fails to show the nested hierarchy and
feature-extraction distinction.
Always state DL ⊂  ML ⊂  AI and
contrast manual vs. automatic
feature extraction.
3 Saying Expert Systems
"learn automatically from
big data"
Classical Expert Systems rely on
manually encoded human rules, not
statistical training.
Expert Systems use a Knowledge
Base built by human experts + an
Inference Engine.
4 Mixing up Forward and
Backward Chaining
Forward starts from facts; Backward
starts from the goal/hypothesis.
- **Remember:** Forward = Facts →
Goal; Backward = Goal → Facts.
5 Saying Deep Learning is
ALWAYS better than
Traditional ML
On small structured/tabular datasets, DL
overfits and wastes GPU power.
Traditional ML wins on small tabular
data; DL excels on large
unstructured data.
6 Forgetting the
Explanation Facility in
Expert Systems
Examiners look for this unique
component that answers "Why?" and
"How?".
- **Include all 6 blocks:** UI, Inference
Engine, Knowledge Base, Working
Memory, Explanation, Acquisition.
7 Confusing Virtual
Assistants with basic
Chatbots
Chatbots are usually narrow text Q&A
tools; Virtual Assistants execute multi-
domain OS/IoT voice tasks.
Highlight voice pipeline (ASR + TTS)
and device/API actions for Virtual
Assistants.
- **Unit-I:** Foundations of Artificial Intelligence • Fundamentals of AIML

#
Common Mistake /
Exam Trap Why It Is Incorrect Exam-Accurate Answer
8 Crediting Alan Turing
with coining the term
"AI"
Turing proposed the Turing Test
(1950); he did not coin the term
"Artificial Intelligence".
John McCarthy coined "Artificial
Intelligence" at the 1956 Dartmouth
Conference.
9 Describing Computer
Vision as "only image
storage"
CV extracts semantic meaning
(classification, detection,
segmentation) from pixel matrices.
Explain pixel matrix representation (RGB)
+ CV pipeline ending in
recognition/action.
10 Omitting the Feedback
Loop in Intelligent
Systems
An intelligent agent continuously re-
senses the effect of its own actions.
Always draw the closed Environment →
Sensors → Think → Actuators →
Environment loop.
Exam Presentation Checklist (Unit-I AIML Full-Marks Strategy)
Long Questions (10 Marks — AI vs. ML vs. DL / Types of AI / Expert Systems): Always draw the
concentric Venn diagram + scaling curve (or Expert System 6-block diagram) before listing structured
bullet points and a crisp comparison matrix.
Application & Use-Case Questions (Healthcare, Agriculture, Finance, Smart Cities,
- **Autonomous Systems):** Never write generic one-liners—name the exact AI Domain (e.g., CV for
MRI scans, ML for fraud anomaly detection, Sensor Fusion + Path Planning for self-driving cars) and
cite one concrete real-world benefit.
- **Unit-I:** Foundations of Artificial Intelligence • Fundamentals of AIML