> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

TYPES OF EXPERT SYSTEMS
Symbolic / Logic-Based
• Rule-Based (IF–THEN)
• Frame-Based (Objects)
• Model-Based (Causal)
Uncertain & Case-Driven
• Fuzzy ES (0.0 to 1.0)
• Case-Based (CBR 4-R)
Data-Driven & Hybrid
• Neural ES (ANN Weights)
• Hybrid (Neuro-Fuzzy)

> 🖼️ **Figure 9: Classification Tree of Major Types of Expert Systems**

ES Type Knowledge
Representation
Key Advantage Typical Application
Rule-Based IF–THEN production rules Clear logic & strong
explanations
Medical diagnosis (MYCIN),
tax rules
Frame-Based Frames, slots & inheritance
trees
Clean object hierarchy &
defaults
Equipment configuration,
catalogs
Fuzzy ES Fuzzy sets & membership
curves
Handles linguistic
vagueness well
AC/HVAC control, auto-
transmission
Neural ES Trained neural network
weights
Learns directly from noisy
data
Credit fraud detection, vision
Case-Based
(CBR)
Library of past problem
cases
No explicit rule writing
needed
IT support helpdesk, legal
advice
Model-Based Deep physical/causal
equations
Solves novel, unseen
failures
Spacecraft & electronic circuit
faults
Hybrid ES Combined (e.g., Rules +
ANN)
Balances learning +
explainability
Financial trading, smart
robotics

- **## PART III:** KNOWLEDGE ENGINEERING & KNOWLEDGE ACQUISITION



- **### 8. Knowledge Engineering:** Scope of Knowledge


### 8.1 What Is Knowledge Engineering (KE)?

- **Definition:** The engineering discipline dedicated to integrating human expertise into computer
systems — encompassing the systematic acquisition, validation, representation, inferencing,
and maintenance of domain knowledge.
The 5 Core Stages of the Knowledge Engineering Process:
- **1. 1. Knowledge Acquisition:** Collecting raw expertise from human experts, textbooks, manuals,
and databases.
- **2. 2. Knowledge Validation:** Verifying that acquired rules are consistent, complete, accurate, and
free from contradictions using test cases.
- **3. 3. Knowledge Representation:** Encoding validated knowledge into computer-readable forms
(IF–THEN rules, frames, semantic networks, or predicate logic).
- **4. 4. Inferencing:** Designing or configuring the Inference Engine to derive conclusions efficiently
from the encoded knowledge.
- **5. 5. Explanation & Justification:** Building transparent trace mechanisms so the ES explains its
reasoning clearly to end users.

### 8.2 The DIKW Hierarchy & Scope of Knowledge

Understanding the DIKW Progression (From Raw Symbols to Wisdom):
- **Data:** Raw, unorganized symbols or measurements with no context (e.g., 103.4).
- **Information:** Processed, contextualized data answering who, what, where, when (e.g.,
"Patient’s body temperature is 103.4°F").
- **Knowledge:** Actionable rules, patterns, and relationships answering how (e.g., "Temperature >
102°F with chills indicates acute infection requiring blood culture").
- **Wisdom:** Deep ethical judgment and strategic foresight answering why and weighing long-term
consequences.
Five Major Types Defining the Scope of Knowledge in KE:
1. 1. Declarative Knowledge ("Know-What"): Descriptive facts, concepts, objects, and textbook
statements (e.g., "Copper conducts electricity"; "Fever is a symptom").
2. 2. Procedural Knowledge ("Know-How"): Step-by-step instructions, operational sequences,
and decision rules explaining how to accomplish a task (e.g., how to troubleshoot a dead
router).
3. 3. Heuristic Knowledge ("Rules of Thumb"): Unwritten intuition, shortcuts, and educated
guesses accumulated by veterans over decades of practice.
4. 4. Meta-Knowledge ("Knowledge About Knowledge"): High-level control knowledge that
tells the Inference Engine which rule set is most reliable, fastest, or most relevant to try first.
- **5. 5. Structural Knowledge:** Relationships linking concepts together — such as is-a
(classification), part-of (composition), and causes (causal links).

Two Additional Knowledge Dimensions Every Student Must Know:
- **Explicit vs. Tacit Knowledge:** Explicit knowledge is written down in books/manuals (easy to
capture); Tacit knowledge lives subconsciously inside an expert’s mind (hardest to extract!).
Shallow (Surface) vs. Deep Knowledge: Shallow knowledge links inputs directly to outputs
via shortcuts (IF warning_light THEN check_oil); Deep knowledge captures underlying
scientific/causal principles (thermodynamics, anatomy).
A. The 5-Stage Knowledge Engineering Process

### 1. Acquire

Elicit Facts

### 2. Validate

Verify Rules

### 3. Represent

Code KB

### 4. Infer

Run Engine

### 5. Explain

HOW / WHY
B. DIKW Knowledge Hierarchy
Wisdom
Knowledge (ES Focus)
Information (Context)
Raw Data (Numbers / Symbols)
C. Scope of Domain Knowledge
• Declarative (Facts) vs. Procedural (Steps)
• Heuristic (Shortcuts) & Structural (Links)
• Meta-Knowledge (Rules about Rules)
• Explicit vs. Tacit | Shallow vs. Deep

> 🖼️ **Figure 10: Knowledge Engineering Lifecycle, DIKW Hierarchy, and Scope of Domain Knowledge**

Knowledge
Type
Core Meaning Concrete Example
Declarative Know-what (static facts & concepts) "Normal human body temperature is 98.6°F."
Procedural Know-how (action steps & rules) "To reset server: stop service → clear cache →
restart."
Heuristic Experience-based rules of thumb "If engine clicks rapidly on startup, check battery
first."
Meta-
Knowledge
Knowledge about selecting/using
knowledge
"Check high-probability common faults before
rare ones."
Structural Relationships linking concepts together "Piston is part-of Engine; Diesel is a-kind-of
Fuel."

### 9. Difficulties in Knowledge Acquisition (The KA Bottleneck)


### 9.1 Why Knowledge Acquisition Is the Hardest Stage in Building an ES

The Knowledge Acquisition Bottleneck: Coined by Edward Feigenbaum, this refers to the well-
known fact that extracting, structuring, and verifying knowledge from human experts is the
slowest, most expensive, and most error-prone stage of creating an Expert System.


### 9.2 Categorized Breakdown of Major KA Difficulties

Group A — Expert-Related Difficulties:

### 1. Tacit / Subconscious Expertise (Polanyi’s Paradox): Seasoned experts solve problems

almost instinctively — they "know much more than they can tell" and struggle to translate
intuitive judgment into explicit IF–THEN rules.

### 2. Scarcity & Limited Availability: The best experts are busy doing critical real-world work

and rarely have spare hours for lengthy interviews.

### 3. Reluctance & Job-Security Fear: Some experts hesitate to share trade secrets out of fear

that the finished Expert System might replace them or diminish their value.

### 4. Cognitive Biases & Inconsistency: Humans occasionally give inconsistent answers across

different days, overlook edge cases, or overstate confidence in familiar solutions.
Group B — Knowledge Engineer-Related Difficulties:

### 5. Vocabulary & Communication Gap: The Knowledge Engineer often lacks deep domain

jargon initially, leading to misunderstood terms or oversimplified rules.

### 6. Interviewing & Modeling Errors: Asking leading questions or choosing the wrong

representation format distorts the expert’s true reasoning process.

- **### 7. Cognitive Overload:** Sifting through hours of transcripts, diagrams, and exceptions without

introducing contradictions is mentally exhausting.
Group C — Domain & Knowledge-Related Difficulties:

- **### 8. Multi-Expert Conflicts:** When two or more experts are consulted, they frequently disagree

on best practices, priorities, or diagnostic thresholds.

### 9. Uncertainty & Incomplete Knowledge: Real-world domains contain noisy data, exceptions

to every rule, and probabilistic judgments rather than neat binary truths.

### 10. Dynamic / Evolving Knowledge: Medical guidelines, tax laws, and software systems

change continuously — making captured knowledge stale unless continuously updated.

### 1. Expert Factors

• Tacit / intuitive skill
• Busy / scarce time
• Fear of job loss
• Cognitive biases
• Hard to verbalize

### 2. Engineer & Domain

• Jargon / vocab gap
• Multi-expert conflict
• Noisy / uncertain data
• Fast-changing rules
• Modeling distortion
THE KA
BOTTLENECK
High Cost & Delays
Incomplete / Flawed KB

> 🖼️ **Figure 11: Root Causes and Impact of the Knowledge Acquisition Bottleneck**


KA Difficulty Practical Impact on ES Effective Mitigation Strategy
Tacit / Unconscious Skill Missing key heuristic rules in KB Use Protocol Analysis (think-aloud) & live
observation
Jargon / Vocabulary Gap Misinterpreted conditions & faulty
logic
KE studies manuals first & builds a shared
glossary
Multi-Expert
Disagreement
Contradictory rules firing at once Use Delphi Method or designate one Lead
Authority
Expert Fear of
Replacement
Withholding critical shortcuts Position ES as an assistant that handles
boring cases
Dynamic Changing
Rules
Outdated, unsafe
recommendations
Modular KB design + scheduled periodic
audits

### 10. Methods of Knowledge Acquisition


### 10.1 Three Major Categories of Knowledge Acquisition Methods

Knowledge Acquisition methods fall cleanly into three generations ranging from purely human-
- **led to fully machine-automated:** 

### 1. Category A — Manual Methods (Human Knowledge Engineer directly elicits knowledge).


### 2. Category B — Semi-Automated Methods (Interactive software tools assist the Expert or KE).


### 3. Category C — Automated Methods (Machine Learning algorithms extract rules directly from

data).

### 10.2 Detailed Point-Wise Breakdown of Every Method

A. Manual Methods (Most Widely Used in Traditional ES)

### 1. Interviews (Primary Elicitation Tool):

- **Unstructured Interview:** Open-ended informal conversation with no rigid script; best during
the very first meetings to map broad domain boundaries and build rapport.
- **Structured Interview:** Planned, goal-focused questionnaire targeting specific concepts, rule
conditions, and edge cases; yields systematic, verifiable knowledge.
- **Semi-Structured Interview:** Hybrid combining a prepared topic checklist with flexible follow-up
probing.

### 2. Protocol Analysis (Think-Aloud Method):

The expert solves a realistic problem while speaking every thought aloud; the session is
audio/video recorded and transcribed.
The Knowledge Engineer extracts hidden step-by-step heuristics directly from the verbal trace
— highly effective for uncovering tacit knowledge!

### 3. Direct Observation & Case Tracking:

The KE silently observes the expert handling real cases on the job (e.g., shadowing a
technician on a factory floor) without interrupting workflow, recording tools checked and
decisions made.