### 3. Real-World Applications & How Modern LLMs Work

> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum


### 6. AI Applications Across Industries


#### 6.1 AI in Healthcare

Medical Imaging & Early Diagnostics: Computer Vision (CNNs) analyzes X-rays, CT scans,
MRIs, and retinal scans to detect tumors, fractures, tuberculosis, and diabetic retinopathy earlier
and with greater consistency.
**Drug Discovery & Genomics:** Deep Learning models (such as protein-folding predictors) screen
millions of molecular compounds in weeks instead of years, slashing R&D costs.
Predictive Analytics & Patient Monitoring: ML models analyze Electronic Health Records
(EHR) and ICU vitals to predict sepsis, cardiac arrest, or hospital readmission hours in advance.
Robotic-Assisted Surgery & Virtual Triage: Precision surgical assistants stabilize micro-
incisions, while NLP symptom-checkers route patients to appropriate specialists 24×7.

#### 6.2 AI in Agriculture (Smart / Precision Farming)

**Crop Disease & Pest Detection:** Drones and smartphone cameras running Computer Vision
inspect leaf imagery to identify blights, fungal infections, and locust infestations early, enabling
targeted treatment.
Precision Irrigation & Soil Health Monitoring: IoT moisture/NPK sensors paired with ML predict
exact crop water and fertilizer needs—reducing water waste by up to 30–40%.
Automated Weeding & Autonomous Tractors: Vision-guided sprayers apply herbicide strictly
on weeds rather than healthy crops, cutting chemical runoff and labor shortages.
**Yield Forecasting & Price Advisory:** Satellite imagery and weather-based ML models forecast
harvest volume and advise farmers on optimal sowing dates and market pricing.

#### 6.3 AI in Finance & Banking

**Real-Time Fraud Detection:** Anomaly-detection ML models evaluate every credit card or UPI
transaction in milliseconds (checking location, amount, merchant pattern) to block fraudulent
charges instantly.
**Algorithmic & Quantitative Trading:** Automated trading engines analyze historical price time-
series and live financial news sentiment (NLP) to execute trades at microsecond latency.
**Credit Scoring & Loan Underwriting:** Evaluates borrower repayment probability using multi-
dimensional financial signals, making loan approvals faster and more accurate.
Regulatory Compliance (RegTech) & Robo-Advisors: Monitors Anti-Money Laundering (AML)
patterns automatically and offers personalized low-cost investment portfolio management.
**Unit-I:** Foundations of Artificial Intelligence • Fundamentals of AIML


#### 6.4 AI in Smart Cities

**Intelligent Traffic Management:** Computer Vision traffic cameras count real-time vehicle density
at intersections and dynamically optimize signal timings, reducing congestion and emergency-
vehicle delays.
Smart Energy Grids & Street Lighting: Predictive ML balances renewable solar/wind supply
against city electricity demand and dims/brightens LED streetlights automatically based on
pedestrian movement.
**Public Safety & Disaster Response:** Automated anomaly detection alerts emergency
responders to road accidents, fires, or crowd surges, while forecasting urban floods and air-quality
(AQI) spikes.
**Smart Waste & Water Management:** Fill-level sensors inside municipal bins optimize garbage-
truck collection routes; acoustic/pressure AI detects underground municipal pipe leaks rapidly.
**Table 6:** Cross-Industry AI Applications Summary Matrix
Industry Signature AI Applications
Primary AI Domains
Used Key Measurable Benefit
Healthcare Radiology diagnosis, drug
discovery, ICU risk alerts
Computer Vision, Deep
Learning, NLP
Earlier disease detection, lower
mortality
Agriculture Leaf disease detection, smart
irrigation, yield prediction
Computer Vision, ML, IoT
Sensors
Higher crop yield, reduced
water/pesticide waste
Finance Fraud blocking, credit scoring,
algorithmic trading
Machine Learning, NLP
(Sentiment)
Millisecond fraud prevention,
lower default risk
Smart
Cities
Adaptive traffic lights, smart grids,
waste routing
Computer Vision, ML,
Optimization
Lower commute times, energy
& carbon savings

### 7. Key AI Use Cases: Virtual Assistants, Autonomous Systems &

Chatbots

#### 7.1 Virtual Assistants

**Definition:** A Virtual Assistant (e.g., Apple Siri, Amazon Alexa, Google Assistant) is an AI-
powered, voice- and text-enabled personal software agent capable of understanding natural
commands, accessing device/cloud APIs, and executing multi-domain everyday tasks (setting
alarms, controlling smart lights, sending messages, playing music, fetching weather).
Six-Stage End-to-End Voice Working Pipeline:
1. **Wake-Word Detection:** Lightweight on-device neural network listens locally for trigger phrase
("Hey Siri", "Alexa").
2. **ASR (Automatic Speech Recognition):** Converts acoustic sound waves into raw text
transcripts.
3. **NLU (Intent & Entity Extraction):** Identifies what the user wants (Intent) and specific
parameters (Entities).
**Unit-I:** Foundations of Artificial Intelligence • Fundamentals of AIML

4. **Dialog & Skill Execution:** Calls the relevant backend service/API (Calendar, Smart Home IoT,
Weather API).
5. **NLG (Response Formulation):** Composes a concise natural-language confirmation sentence.
6. **TTS (Text-to-Speech Synthesis):** Converts the text reply into human-like spoken audio.

#### 7.2 Autonomous Systems

**Definition:** An Autonomous System (e.g., Self-Driving Cars like Waymo/Tesla Autopilot,
Autonomous Delivery Drones, Amazon Warehouse Kiva Robots, Mars Rovers) is an
embodied cyber-physical AI system capable of perceiving complex real-world environments,
making real-time safety-critical decisions, and executing physical motion without continuous
human intervention.
Four-Stage Autonomous Control Loop (Sense → Perceive → Plan → Act):
1. **Sense (Sensor Fusion):** Combines complementary sensors—Cameras (colors/signs), LiDAR
(precise 3D laser depth map), Radar (speed in fog/rain), and GPS/IMU (localization).
2. **Perceive (World Modeling):** Deep Learning CV detects lanes, traffic lights, pedestrians, and
predicts other vehicles' trajectories.
3. **Plan (Decision & Path Planning):** Computes a collision-free, traffic-law-compliant trajectory
and velocity profile in real time.
4. **Act (Control Execution):** Sends smooth continuous electrical signals to physical actuators
(steering motor, throttle, hydraulic brakes).
SAE Six Levels of Driving Autonomy (Exam Bonus Fact): Level 0 (No Automation) → Level 1
**(Driver Assistance:** Cruise Control) → Level 2 (Partial: Steering + Acceleration, human monitors)
**→ Level 3 (Conditional:** car drives in defined zones, human takes over on alert) → Level 4 (High:
full self-driving inside geofenced areas) → Level 5 (Full Autonomy: everywhere, no steering wheel
required).

#### 7.3 Chatbots

**Definition:** A Chatbot is a conversational AI software program designed to simulate human-like
text or voice dialogues with users over messaging apps, websites, or customer-support portals
(e.g., banking support bots, e-commerce order trackers, ChatGPT).

**Three Generations / Types of Chatbots:**

1. Rule-Based (Menu / Decision-Tree) Chatbots: Rely on fixed keyword matching and
predefined button flows. Fast and predictable for FAQs, but break immediately if the user
phrases a question unexpectedly.
2. AI / NLP-Powered (Retrieval & Intent) Chatbots: Use Machine Learning and NLP to classify
user Intents and extract Entities, handling typos, synonyms, and multi-turn conversation
context.
**Unit-I:** Foundations of Artificial Intelligence • Fundamentals of AIML

3. **Generative AI (LLM-Powered) Chatbots:** Built on large Transformer models capable of open-
ended reasoning, code generation, summarization, and dynamic human-like dialogue across
virtually any topic.

**Worked Chatbot NLU Parsing Example:**

**User Message:** "Book a train ticket from Delhi to Jaipur tomorrow morning."
- **> Detected Intent:** BOOK_TRAIN_TICKET
- **> Extracted Entities:** { origin: "Delhi", destination: "Jaipur", date:
**"Tomorrow", slot:** "Morning" }
- **> Action Triggered:** Query Railway API -> Return available trains to user.
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
**Figure 7:** Working pipelines for (A) Voice Virtual Assistants & Chatbots and (B) Closed-Loop Autonomous
Systems.
**Table 7:** Comparison Matrix — Virtual Assistants vs. Chatbots vs. Autonomous Systems
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
**Unit-I:** Foundations of Artificial Intelligence • Fundamentals of AIML