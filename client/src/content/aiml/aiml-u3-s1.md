### 1. Expert Systems Architecture & The HOW/WHY Explanation Engine

> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

AIML • UNIT–3 (9 HOURS) • COMPLETE FROM-SCRATCH POINT-WISE STUDY NOTES
Expert Systems & Knowledge Engineering
**Strictly Syllabus-Aligned Notes:** Built point-by-point from basic AI foundations to university exam depth —
covering Introduction, Basic Concepts, Structure, Human Element, Architecture, Problem Areas, Success
Factors, Types of Expert Systems, and Knowledge Engineering (Scope, Difficulties & Acquisition Methods).
**UNIT–3:** EXPERT SYSTEMS ROADMAP

## PART I: Foundations


### 1. Introduction &

Basic Concepts

### 2. Structure of ES


### 3. The Human Element


### 4. Architecture & Chains


## PART II: Scope & Types


### 5. Problem Areas

(10 Core Domains)

### 6. ES Success Factors


### 7. Types of Expert

Systems (7 Paradigms)

## PART III: Knowledge Engg.


### 8. Knowledge Engg. &

Scope of Knowledge

### 9. Difficulties in KA

(The KA Bottleneck)

### 10. Methods of KA

**Figure 1:** Complete Syllabus Roadmap of AIML Unit–3 (Expert Systems & Knowledge Engineering)

## PART I: INTRODUCTION, CONCEPTS, STRUCTURE, HUMAN ELEMENT &

ARCHITECTURE

### 1. Introduction and Basic Concepts of Expert Systems


#### 1.1 Starting From Scratch: What Is an Expert System?

**Simple Definition:** An Expert System (ES) is a branch of Artificial Intelligence (AI) that creates
an interactive computer program capable of mimicking the decision-making, judgment, and
problem-solving ability of a human expert within a specific, narrow domain (such as medical
diagnosis, fault repair, or financial auditing).
Formal Definition (Prof. Edward Feigenbaum — Father of Expert Systems): An intelligent
computer program that uses knowledge and inference procedures to solve problems that are
difficult enough to require significant human expertise for their solution.

**Core Philosophy (The Golden Equation of ES):**

Traditional Software = Data + Algorithms (fixed step-by-step formulas).
Expert System = Knowledge Base + Inference Engine (domain facts/rules separated cleanly
from the reasoning mechanism).
**AIML • UNIT–3:** Expert Systems & Knowledge Engineering


**Why Expert Systems Were Invented:**

True human experts are scarce, expensive, slow to train, and eventually retire or leave
organizations.
Human decisions can fluctuate due to fatigue, stress, or cognitive bias.
An Expert System captures rare expertise permanently, runs 24/7 with consistent accuracy, and
distributes expert advice simultaneously to thousands of non-expert users.
Landmark Historical Expert Systems (Must-Know for University Exams):
**DENDRAL (1965, Stanford):** First major expert system; identified unknown organic chemical
molecular structures from mass-spectrometry data.
**MYCIN (1972, Stanford):** Diagnosed bacterial blood infections and recommended exact
antibiotic dosages; introduced Certainty Factors (CF) for reasoning under uncertainty.
**PROSPECTOR (1978, SRI):** Assisted geologists in locating mineral ore deposits using
Bayesian probability networks; successfully discovered a multi-million-dollar molybdenum
deposit.
XCON / R1 (1980, DEC): Configured custom VAX computer hardware orders automatically;
first massive commercial financial success saving tens of millions of dollars per year.

#### 1.2 Fundamental (Basic) Concepts of Expert Systems

1. **Expertise:** Deep, task-specific knowledge acquired through years of education, training, and
hands-on experience — consisting of facts, theories, and practical shortcuts (heuristics).
2. **Domain:** The narrowly bounded subject area in which the expert system operates (e.g.,
infectious blood diseases rather than all of medicine).
3. **Experts:** Human specialists who solve complex domain problems significantly faster, more
accurately, and with better judgment than novices.
4. **Transferring Expertise:** The central objective of an ES — extracting expertise from a human
expert, encoding it into a computer, and transferring it on demand to a non-expert user.
5. **Inferencing (Reasoning):** The computer’s ability to logically derive new conclusions or
advice from existing stored knowledge and user-supplied facts — rather than merely retrieving
pre-written answers.
6. **Production Rules (IF–THEN Logic):** The most common way to encode expert reasoning:
**Format:** IF <Condition / Premise / Antecedent> THEN <Action / Conclusion /
Consequent>.

> 📝 **Example: IF (Fever > 101°F) AND (Sore_Throat = Yes) THEN (Suspect =**

Bacterial_Infection, CF = 0.75).
7. **Heuristics (Rules of Thumb):** Experience-based educated guesses and practical shortcuts
that lead rapidly to a "good enough" solution when exact mathematical algorithms do not exist or
take too long.
8. **Symbolic Processing:** Unlike calculators that crunch raw numbers, expert systems manipulate
symbols (words, concepts, relationships, logical propositions) to reason conceptually.
**AIML • UNIT–3:** Expert Systems & Knowledge Engineering

9. **Explanation Capability (Transparency):** Unlike black-box algorithms, a genuine expert
system can explain HOW it reached a conclusion and WHY it is asking a specific question —
essential for building human trust.
A. Conventional Program (Algorithm + Data Intertwined)
Input Data Fixed Code (Data + Control Mixed) Exact Answer Only
B. Expert System (Knowledge Separated From Reasoning)
User Facts Inference Engine Knowledge Base Advice + Reason
**Figure 2:** Fundamental Difference Between Conventional Software and an Expert System

#### 1.3 Comparison: Expert Systems vs. Conventional Programs & Human Experts

Comparison
Dimension
Conventional Software Program Expert System (AI)
Core Processing
Method
Numeric & algorithmic (step-by-step
formulas)
Symbolic & heuristic (rules, inference, logic)
Knowledge vs. Control Tightly mixed together inside source
code
Strictly separated (Knowledge Base ≠
Inference Engine)
Updating /
Maintenance
Hard — requires editing &
recompiling code
Easy — add, edit, or delete rules
independently
Incomplete / Uncertain
Data
Usually crashes or outputs wrong
results
Handles smoothly via Certainty Factors /
Fuzzy Logic
Explanation of Result None (gives final output only) Explains exact reasoning chain (HOW &
WHY)
Execution Style Sequential, deterministic execution Interactive, opportunistic rule firing
Factor Human Expert Expert System
Availability &
Permanence
Perishable (retires, leaves, needs
rest)
Permanent, available 24/7 globally
Consistency Can vary due to fatigue, mood, or
stress
100% consistent for identical inputs
Creativity & Common
Sense
High — adapts brilliantly to novel
situations
None — fails outside its narrow coded
domain
Replication Cost Very high (takes years to train one
expert)
Near-zero marginal cost to copy
software
Learning Ability Learns continuously from raw
experience
Requires explicit rule updates by
engineers
**AIML • UNIT–3:** Expert Systems & Knowledge Engineering


### 2. Structure of Expert Systems


#### 2.1 The Two Distinct Operational Environments

An Expert System is structurally divided into two complementary environments serving
**completely different audiences:** 
1. 1. Development Environment (Building & Updating Mode):
**Used by:** Knowledge Engineer (in collaboration with the Domain Expert).
**Purpose:** To acquire domain knowledge, structure facts and rules, test logic, debug
contradictions, and refine the Knowledge Base.
**Key Modules Active Here:** Knowledge Acquisition Subsystem, Knowledge Base Editor,
Knowledge Refining System, and Debugging/Validation Tools.
2. 2. Consultation Environment (Runtime / Problem-Solving Mode):
**Used by:** Non-Expert End User (e.g., junior doctor, technician, bank officer).
**Purpose:** To ask questions, input case-specific observations, receive expert
recommendations, and inspect explanations.
**Key Modules Active Here:** User Interface, Inference Engine, Blackboard (Workplace),
Explanation Subsystem, and Read-Only Access to the Knowledge Base.

#### 2.2 The Seven Structural Subsystems Explained Point-by-Point

1. **Knowledge Acquisition Subsystem:** Structured channel for gathering, verifying, and
transferring knowledge from experts, manuals, and databases into the Knowledge Base.
2. **Knowledge Base (Long-Term Memory):** Permanent repository storing two types of domain
knowledge — Facts (known truths/concepts) and Heuristics/Rules (IF–THEN decision logic).
3. **Inference Engine (Reasoning Brain):** Domain-independent software processor that evaluates
rules against current case facts to infer conclusions.
4. Blackboard / Workplace (Short-Term Working Memory): Dynamic scratchpad recording
intermediate findings, user inputs, hypotheses, and evolving solution plans during one
consultation session (cleared when the session ends).
5. **User Interface:** Interactive front-end enabling smooth two-way communication between the
user and the ES via menus, natural-language Q&A, forms, or graphical prompts.
6. **Explanation Subsystem (Justifier):** Traces the exact sequence of fired rules to answer "WHY
are you asking this?" and "HOW did you reach this conclusion?".
7. Knowledge Refining System (Self-Analysis Module): Advanced module that analyzes past
successes and failures to suggest new rules or modify faulty rules, helping the system improve
over time.
**AIML • UNIT–3:** Expert Systems & Knowledge Engineering

DEVELOPMENT ENVIRONMENT
Domain Expert
& Sources
Knowledge
Engineer
Knowledge Acquisition Subsystem
KNOWLEDGE BASE
Facts + Rules + Heuristics
CONSULTATION ENVIRONMENT
End User (Non-Expert Client)
User Interface (Q&A / Menus)
Explanation
(HOW / WHY)
INFERENCE
ENGINE Blackboard
**Figure 3:** Structural Organization of an Expert System — Development vs. Consultation Environments
Feature Development Environment Consultation Environment
Primary Operators Domain Expert & Knowledge
Engineer
Non-Expert End User / Practitioner
Main Purpose Build, encode, validate, and refine
knowledge
Solve real-world problems and generate
advice
Knowledge Base
Access
Read + Write (add, edit, delete rules) Read-Only (rules are queried, not altered)
Key Active
Subsystems
KA Subsystem, KB Editor, Refining
Module
User Interface, Inference Engine,
Blackboard, Justifier

### 3. The Human Element in Expert Systems


#### 3.1 Why People Are the Most Critical Component of an Expert System

An Expert System cannot build, validate, or trust itself — its accuracy and organizational success
depend entirely on seamless collaboration among five primary human roles.

#### 3.2 Detailed Breakdown of Every Human Role


### 1. Domain Expert:

**Who:** A recognized specialist with deep theoretical and practical mastery of the target problem
area (e.g., senior cardiologist, aerospace fault engineer).
**Core Responsibilities:** Provides facts, heuristic shortcuts, real case examples, and validates
whether the system’s advice matches true professional standards.
**Ideal Traits:** Articulate communicator, patient, willing to share knowledge, and available during
development.
**AIML • UNIT–3:** Expert Systems & Knowledge Engineering


### 2. Knowledge Engineer (KE):

**Who:** The specialized AI architect who acts as the human bridge between the Domain Expert
and the computer system.
**Core Responsibilities:** Interviews experts to elicit knowledge, selects the right knowledge
representation (rules, frames, fuzzy sets), designs the inference strategy, encodes the
Knowledge Base, and tests system accuracy.
**Ideal Traits:** Strong interpersonal/interviewing skills combined with solid AI software
engineering expertise.

### 3. End User (Client):

**Who:** The person who interacts with the finished Expert System to get decisions, diagnoses, or
training — can be a novice seeking advice, a student learning, or a peer expert wanting a fast
second opinion.
**Core Responsibilities:** Supplies accurate case inputs, interprets recommendations
responsibly, and provides usability feedback.

### 4. System Builder / Programmer:

**Who:** Software developer responsible for coding custom user interfaces, integrating the ES
with corporate SQL databases or IoT sensors, and deploying the system securely.

### 5. Tool Builder & Project Manager / Support Staff:

**Tool Builder:** Develops reusable Expert System Shells (e.g., CLIPS, Jess, Drools) containing
a pre-built inference engine and UI so Knowledge Engineers do not code from scratch.
Project Manager / Clerical Staff: Secures budget, schedules expert time, manages
organizational change, and handles documentation and user training.
Domain Expert
(Source of Wisdom)
Elicit Knowledge Eng.
(Bridge & Coder)
Build Expert System
(KB + Engine)
End User
(Gets Advice)
Usability Feedback, Validation & Refinement Loop
**Figure 4:** Collaboration Workflow and Feedback Loop Among Human Roles in an Expert System
Human Role Primary Responsibility Key Skills Needed
Domain Expert Supplies domain rules, heuristics, test cases &
verification
Deep mastery, clear articulation,
patience
Knowledge
Engineer
Extracts, models, encodes & refines knowledge
in ES
Interviewing, logic modeling, AI
tools/shells
End User Consults system for problem-solving, diagnosis,
or training
Basic domain context & critical
judgment
System / Tool
Builder
Builds ES shells, UI screens, database &
sensor integrations
Software engineering, AI languages,
UX design
**AIML • UNIT–3:** Expert Systems & Knowledge Engineering

Human Role Primary Responsibility Key Skills Needed
Manager /
Support
Sponsors project, allocates expert time, drives
adoption
Project management & organizational
leadership

### 4. Architecture of Expert Systems


#### 4.1 Core Architectural Layers & Information Flow

The functional architecture of an Expert System consists of six tightly coordinated modules:
1. **User Interface (UI):** Translates human questions/answers into internal symbolic
representations and displays final advice cleanly.
2. Working Memory (Fact Base / Short-Term Memory): Stores initial facts provided by the user
during the active session plus all intermediate conclusions inferred so far.
3. **Knowledge Base (KB / Long-Term Memory):** Stores permanent domain expertise divided
**into:** 
**Factual Knowledge:** Widely agreed-upon truths, definitions, and textbook properties.
**Heuristic Knowledge:** Private, experience-driven IF–THEN rules, judgmental weights, and
probabilities.
4. **Inference Engine (Control Mechanism):** Continuously matches facts in Working Memory
against rules in the Knowledge Base using the 3-Step Match–Resolve–Act Cycle:
**Step 1 — Match:** Identify all rules whose IF conditions match current Working Memory facts
(these form the Conflict Set).
**Step 2 — Conflict Resolution:** Pick the single best rule to fire next using priority criteria (e.g.,
rule specificity, recency of facts, or explicit priority order).
**Step 3 — Act (Fire Rule):** Execute the chosen rule’s THEN part — adding a new deduced
fact to Working Memory or triggering an output action. Repeat until the goal is reached or no
rules match.
5. **Explanation Facility:** Maintains a dynamic Rule-Trace Log so the user can query:
WHY? — Shows the current goal rule the Inference Engine is trying to prove.
HOW? — Walks backward through every fired rule and fact that produced the final
conclusion.
6. Knowledge Acquisition & Editing Facility: Enables Knowledge Engineers to inspect, add,
modify, and consistency-check rules without altering the Inference Engine code.
**AIML • UNIT–3:** Expert Systems & Knowledge Engineering