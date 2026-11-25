> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

AIML • UNIT–3 (9 HOURS) • COMPLETE FROM-SCRATCH POINT-WISE STUDY NOTES
Expert Systems & Knowledge Engineering
- **Strictly Syllabus-Aligned Notes:** Built point-by-point from basic AI foundations to university exam depth —
covering Introduction, Basic Concepts, Structure, Human Element, Architecture, Problem Areas, Success
Factors, Types of Expert Systems, and Knowledge Engineering (Scope, Difficulties & Acquisition Methods).

- **## PART I:** Foundations


### 1. Introduction &

Basic Concepts

### 2. Structure of ES


### 3. The Human Element


### 4. Architecture & Chains


- **## PART II:** Scope & Types


### 5. Problem Areas

(10 Core Domains)

### 6. ES Success Factors


### 7. Types of Expert

Systems (7 Paradigms)

- **## PART III:** Knowledge Engg.


### 8. Knowledge Engg. &

Scope of Knowledge

### 9. Difficulties in KA

(The KA Bottleneck)

### 10. Methods of KA




<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 ARCHITECTURE OF AN EXPERT SYSTEM: KNOWLEDGE BASE &amp; INFERENCE ENGINE</div>
  <div class="visual-diagram-container">
    <svg width="100%" height="230" viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="esArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
        </marker>
      </defs>

      <!-- User Box -->
      <rect x="20" y="70" width="100" height="70" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
      <text x="70" y="102" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">End User</text>
      <text x="70" y="118" font-family="Inter, sans-serif" font-size="9" fill="#64748b" text-anchor="middle">(Non-Expert)</text>

      <line x1="120" y1="105" x2="160" y2="105" stroke="#2563eb" stroke-width="2" marker-end="url(#esArrow)"/>

      <!-- User Interface -->
      <rect x="165" y="70" width="110" height="70" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="220" y="100" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">User Interface</text>
      <text x="220" y="116" font-family="Inter, sans-serif" font-size="9" fill="#1e3a8a" text-anchor="middle">Natural Lang/GUI</text>

      <line x1="275" y1="105" x2="315" y2="105" stroke="#2563eb" stroke-width="2" marker-end="url(#esArrow)"/>

      <!-- Inference Engine -->
      <rect x="320" y="45" width="150" height="120" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="395" y="75" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">INFERENCE</text>
      <text x="395" y="92" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">ENGINE</text>
      <text x="395" y="112" font-family="Inter, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">• Forward Chaining</text>
      <text x="395" y="126" font-family="Inter, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">• Backward Chaining</text>
      <text x="395" y="140" font-family="Inter, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">• Conflict Resolution</text>

      <!-- Knowledge Base -->
      <rect x="520" y="25" width="220" height="75" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="630" y="48" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">Knowledge Base (Domain Rules)</text>
      <text x="630" y="65" font-family="Courier, monospace" font-size="9.5" fill="#78350f" text-anchor="middle">IF (condition) THEN (action)</text>
      <text x="630" y="80" font-family="Inter, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">Heuristic Rules from Domain Expert</text>

      <!-- Working Memory -->
      <rect x="520" y="115" width="220" height="75" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="630" y="138" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">Working Memory (Dynamic Facts)</text>
      <text x="630" y="155" font-family="Inter, sans-serif" font-size="9.5" fill="#991b1b" text-anchor="middle">Current Case Facts (Temperature=102F)</text>
      <text x="630" y="170" font-family="Inter, sans-serif" font-size="9" fill="#991b1b" text-anchor="middle">Session-specific dynamic state</text>

      <!-- Connecting bidirectional arrows between IE and KB / WM -->
      <line x1="470" y1="75" x2="515" y2="60" stroke="#2563eb" stroke-width="1.5"/>
      <line x1="470" y1="125" x2="515" y2="140" stroke="#2563eb" stroke-width="1.5"/>

      <!-- Explanation Facility at bottom -->
      <rect x="165" y="160" width="110" height="50" rx="4" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.5"/>
      <text x="220" y="180" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#6b21a8" text-anchor="middle">Explanation System</text>
      <text x="220" y="196" font-family="Inter, sans-serif" font-size="8.5" fill="#6b21a8" text-anchor="middle">Answers HOW &amp; WHY</text>
      <line x1="320" y1="140" x2="275" y2="175" stroke="#7c3aed" stroke-width="1.5"/>
    </svg>
  </div>
</div>

| Attribute | Conventional Computer Program | Artificial Intelligence Expert System |
| :--- | :--- | :--- |
| **Primary Focus** | Data manipulation, mathematical calculation & numbers | **Knowledge, heuristics, symbolic reasoning & logic** |
| **Separation of Concerns** | Knowledge and control logic are hardcoded together | **Strict separation**: Knowledge Base is independent of Inference Engine |
| **Explanation Capability** | None (Black-box execution; yields output without explanation) | **Built-in Explanation Facility** (Explains HOW & WHY a decision was made) |
| **Handling Incomplete Data**| Fails or crashes upon receiving missing parameters | **Graceful degradation**: Uses certainty factors ($CF \in [-1, +1]$) |
| **Ease of Knowledge Update**| Requires refactoring code and recompiling software | **High modularity**: Add or edit IF-THEN rules without touching the engine |



- **## PART I:** INTRODUCTION, CONCEPTS, STRUCTURE, HUMAN ELEMENT &

ARCHITECTURE

### 1. Introduction and Basic Concepts of Expert Systems


- **### 1.1 Starting From Scratch:** What Is an Expert System?

- **Simple Definition:** An Expert System (ES) is a branch of Artificial Intelligence (AI) that creates
an interactive computer program capable of mimicking the decision-making, judgment, and
problem-solving ability of a human expert within a specific, narrow domain (such as medical
diagnosis, fault repair, or financial auditing).
Formal Definition (Prof. Edward Feigenbaum — Father of Expert Systems): An intelligent
computer program that uses knowledge and inference procedures to solve problems that are
difficult enough to require significant human expertise for their solution.
Core Philosophy (The Golden Equation of ES):
Traditional Software = Data + Algorithms (fixed step-by-step formulas).
Expert System = Knowledge Base + Inference Engine (domain facts/rules separated cleanly
from the reasoning mechanism).

- **Why Expert Systems Were Invented:** 
True human experts are scarce, expensive, slow to train, and eventually retire or leave
organizations.
Human decisions can fluctuate due to fatigue, stress, or cognitive bias.
An Expert System captures rare expertise permanently, runs 24/7 with consistent accuracy, and
distributes expert advice simultaneously to thousands of non-expert users.
Landmark Historical Expert Systems (Must-Know for University Exams):
- **DENDRAL (1965, Stanford):** First major expert system; identified unknown organic chemical
molecular structures from mass-spectrometry data.
- **MYCIN (1972, Stanford):** Diagnosed bacterial blood infections and recommended exact
antibiotic dosages; introduced Certainty Factors (CF) for reasoning under uncertainty.
- **PROSPECTOR (1978, SRI):** Assisted geologists in locating mineral ore deposits using
Bayesian probability networks; successfully discovered a multi-million-dollar molybdenum
deposit.
XCON / R1 (1980, DEC): Configured custom VAX computer hardware orders automatically;
first massive commercial financial success saving tens of millions of dollars per year.

### 1.2 Fundamental (Basic) Concepts of Expert Systems


- **### 1. Expertise:** Deep, task-specific knowledge acquired through years of education, training, and

hands-on experience — consisting of facts, theories, and practical shortcuts (heuristics).

- **### 2. Domain:** The narrowly bounded subject area in which the expert system operates (e.g.,

infectious blood diseases rather than all of medicine).

- **### 3. Experts:** Human specialists who solve complex domain problems significantly faster, more

accurately, and with better judgment than novices.

- **### 4. Transferring Expertise:** The central objective of an ES — extracting expertise from a human

expert, encoding it into a computer, and transferring it on demand to a non-expert user.

- **### 5. Inferencing (Reasoning):** The computer’s ability to logically derive new conclusions or

advice from existing stored knowledge and user-supplied facts — rather than merely retrieving
pre-written answers.

### 6. Production Rules (IF–THEN Logic): The most common way to encode expert reasoning:

- **Format:** IF <Condition / Premise / Antecedent> THEN <Action / Conclusion /
Consequent>.
- **Example:** IF (Fever > 101°F) AND (Sore_Throat = Yes) THEN (Suspect =
Bacterial_Infection, CF = 0.75).

- **### 7. Heuristics (Rules of Thumb):** Experience-based educated guesses and practical shortcuts

that lead rapidly to a "good enough" solution when exact mathematical algorithms do not exist or
take too long.

- **### 8. Symbolic Processing:** Unlike calculators that crunch raw numbers, expert systems manipulate

symbols (words, concepts, relationships, logical propositions) to reason conceptually.


### 9. Explanation Capability (Transparency): Unlike black-box algorithms, a genuine expert

system can explain HOW it reached a conclusion and WHY it is asking a specific question —
essential for building human trust.
A. Conventional Program (Algorithm + Data Intertwined)
Input Data Fixed Code (Data + Control Mixed) Exact Answer Only
B. Expert System (Knowledge Separated From Reasoning)
User Facts Inference Engine Knowledge Base Advice + Reason

> 🖼️ **Figure 2: Fundamental Difference Between Conventional Software and an Expert System**


- **### 1.3 Comparison:** Expert Systems vs. Conventional Programs & Human Experts

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


### 2. Structure of Expert Systems


### 2.1 The Two Distinct Operational Environments

An Expert System is structurally divided into two complementary environments serving
- **completely different audiences:** 
1. 1. Development Environment (Building & Updating Mode):
- **Used by:** Knowledge Engineer (in collaboration with the Domain Expert).
- **Purpose:** To acquire domain knowledge, structure facts and rules, test logic, debug
contradictions, and refine the Knowledge Base.
- **Key Modules Active Here:** Knowledge Acquisition Subsystem, Knowledge Base Editor,
Knowledge Refining System, and Debugging/Validation Tools.
2. 2. Consultation Environment (Runtime / Problem-Solving Mode):
- **Used by:** Non-Expert End User (e.g., junior doctor, technician, bank officer).
- **Purpose:** To ask questions, input case-specific observations, receive expert
recommendations, and inspect explanations.
- **Key Modules Active Here:** User Interface, Inference Engine, Blackboard (Workplace),
Explanation Subsystem, and Read-Only Access to the Knowledge Base.

### 2.2 The Seven Structural Subsystems Explained Point-by-Point


### 1. Knowledge Acquisition Subsystem: Structured channel for gathering, verifying, and

transferring knowledge from experts, manuals, and databases into the Knowledge Base.

### 2. Knowledge Base (Long-Term Memory): Permanent repository storing two types of domain

knowledge — Facts (known truths/concepts) and Heuristics/Rules (IF–THEN decision logic).

### 3. Inference Engine (Reasoning Brain): Domain-independent software processor that evaluates

rules against current case facts to infer conclusions.

### 4. Blackboard / Workplace (Short-Term Working Memory): Dynamic scratchpad recording

intermediate findings, user inputs, hypotheses, and evolving solution plans during one
consultation session (cleared when the session ends).

- **### 5. User Interface:** Interactive front-end enabling smooth two-way communication between the

user and the ES via menus, natural-language Q&A, forms, or graphical prompts.

### 6. Explanation Subsystem (Justifier): Traces the exact sequence of fired rules to answer "WHY

are you asking this?" and "HOW did you reach this conclusion?".

### 7. Knowledge Refining System (Self-Analysis Module): Advanced module that analyzes past

successes and failures to suggest new rules or modify faulty rules, helping the system improve
over time.

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

> 🖼️ **Figure 3: Structural Organization of an Expert System — Development vs. Consultation Environments**

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


### 3.1 Why People Are the Most Critical Component of an Expert System

An Expert System cannot build, validate, or trust itself — its accuracy and organizational success
depend entirely on seamless collaboration among five primary human roles.

### 3.2 Detailed Breakdown of Every Human Role


- **### 1. Domain Expert:** 

- **Who:** A recognized specialist with deep theoretical and practical mastery of the target problem
area (e.g., senior cardiologist, aerospace fault engineer).
- **Core Responsibilities:** Provides facts, heuristic shortcuts, real case examples, and validates
whether the system’s advice matches true professional standards.
- **Ideal Traits:** Articulate communicator, patient, willing to share knowledge, and available during
development.


- **### 2. Knowledge Engineer (KE):** 

- **Who:** The specialized AI architect who acts as the human bridge between the Domain Expert
and the computer system.
- **Core Responsibilities:** Interviews experts to elicit knowledge, selects the right knowledge
representation (rules, frames, fuzzy sets), designs the inference strategy, encodes the
Knowledge Base, and tests system accuracy.
- **Ideal Traits:** Strong interpersonal/interviewing skills combined with solid AI software
engineering expertise.

- **### 3. End User (Client):** 

- **Who:** The person who interacts with the finished Expert System to get decisions, diagnoses, or
training — can be a novice seeking advice, a student learning, or a peer expert wanting a fast
second opinion.
- **Core Responsibilities:** Supplies accurate case inputs, interprets recommendations
responsibly, and provides usability feedback.

### 4. System Builder / Programmer:

- **Who:** Software developer responsible for coding custom user interfaces, integrating the ES
with corporate SQL databases or IoT sensors, and deploying the system securely.

### 5. Tool Builder & Project Manager / Support Staff:

- **Tool Builder:** Develops reusable Expert System Shells (e.g., CLIPS, Jess, Drools) containing
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

> 🖼️ **Figure 4: Collaboration Workflow and Feedback Loop Among Human Roles in an Expert System**

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

Human Role Primary Responsibility Key Skills Needed
Manager /
Support
Sponsors project, allocates expert time, drives
adoption
Project management & organizational
leadership

### 4. Architecture of Expert Systems


### 4.1 Core Architectural Layers & Information Flow

The functional architecture of an Expert System consists of six tightly coordinated modules:

- **### 1. User Interface (UI):** Translates human questions/answers into internal symbolic

representations and displays final advice cleanly.

### 2. Working Memory (Fact Base / Short-Term Memory): Stores initial facts provided by the user

during the active session plus all intermediate conclusions inferred so far.

### 3. Knowledge Base (KB / Long-Term Memory): Stores permanent domain expertise divided

- **into:** 
- **Factual Knowledge:** Widely agreed-upon truths, definitions, and textbook properties.
- **Heuristic Knowledge:** Private, experience-driven IF–THEN rules, judgmental weights, and
probabilities.

### 4. Inference Engine (Control Mechanism): Continuously matches facts in Working Memory

against rules in the Knowledge Base using the 3-Step Match–Resolve–Act Cycle:
- **Step 1 — Match:** Identify all rules whose IF conditions match current Working Memory facts
(these form the Conflict Set).
- **Step 2 — Conflict Resolution:** Pick the single best rule to fire next using priority criteria (e.g.,
rule specificity, recency of facts, or explicit priority order).
- **Step 3 — Act (Fire Rule):** Execute the chosen rule’s THEN part — adding a new deduced
fact to Working Memory or triggering an output action. Repeat until the goal is reached or no
rules match.

- **### 5. Explanation Facility:** Maintains a dynamic Rule-Trace Log so the user can query:

WHY? — Shows the current goal rule the Inference Engine is trying to prove.
HOW? — Walks backward through every fired rule and fact that produced the final
conclusion.

### 6. Knowledge Acquisition & Editing Facility: Enables Knowledge Engineers to inspect, add,

modify, and consistency-check rules without altering the Inference Engine code.


> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
> - **An Expert System strictly separates domain knowledge (Knowledge Base) from the general problem-solving logic (Inference Engine).**
> - **Forward Chaining is data-driven (starts from known facts to derive conclusions); Backward Chaining is goal-driven.**

> ⚠️ **MISTAKES TO AVOID:**
> 
> - **Hardcoding domain rules directly into procedural algorithms instead of the declarative knowledge base.**
> - **Confusing procedural knowledge (step-by-step how-to) with declarative knowledge (what-is facts).**

