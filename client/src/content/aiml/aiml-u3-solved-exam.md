> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

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


### 4. Group & Consensus Methods (For Multiple Experts):

- **Brainstorming:** Free-flowing group idea generation with zero immediate criticism.
- **Nominal Group Technique (NGT):** Experts write ideas silently first, share round-robin, and
rank priorities democratically — prevents loud personalities from dominating.
- **Delphi Method:** Multiple experts answer anonymous questionnaires across several iterative
rounds with summarized feedback until consensus emerges.

### 5. Document Analysis & Questionnaires:

Mining textbooks, SOP manuals, fault logs, and regulatory checklists to collect explicit factual
knowledge before interviewing experts.
B. Semi-Automated Methods (Computer-Assisted Acquisition)

### 1. Interactive Knowledge Editors (Expert-Driven):

Software interfaces guide the Domain Expert directly to enter, test, and debug rules with
minimal KE intervention (e.g., TEIRESIAS helped doctors refine MYCIN rules interactively).

### 2. Repertory Grid Analysis (RGA) Tools:

Based on Personal Construct Psychology: software prompts the expert to compare triads of
domain objects (e.g., 3 diseases), rate attributes on a numeric scale, and automatically
converts the rating grid into IF–THEN rules (e.g., ETS — Expertise Transfer System and
AQUINAS).
C. Automated Methods (Machine-Led Discovery)

### 1. Rule Induction (Decision-Tree Algorithms):

Algorithms such as ID3, C4.5, and CART analyze large historical tables of labeled input-output
examples and automatically induce compact, optimal IF–THEN decision rules (minimizing
human interviewing time!).

### 2. Machine Learning & Neural Network Extraction:

Trains statistical or neural models on massive historical sensor/transaction datasets to discover
complex hidden patterns that even human experts cannot articulate.

### 3. Automated Text & Knowledge Mining:

Uses Natural Language Processing (NLP) to parse thousands of technical papers,
maintenance tickets, or clinical guidelines into structured entity-relationship graphs.
METHODS OF KNOWLEDGE ACQUISITION

### 1. Manual (Human-Led)

• Interviews (Un/Struct.)
• Protocol Analysis
• Direct Observation
• Delphi / NGT / Docs

### 2. Semi-Automated

• Interactive KA Editors
(e.g., TEIRESIAS)
• Repertory Grid Tools
(e.g., ETS, AQUINAS)

### 3. Automated (ML-Led)

• Rule Induction
(ID3, C4.5, CART)
• Neural Networks / ML
• NLP Text Mining


> 🖼️ **Figure 12: Complete Taxonomy of Manual, Semi-Automated, and Automated Knowledge Acquisition**

Methods
KA Method Category Best Used When… Main Limitation
Unstructured
Interview
Manual Starting a new project &
exploring scope
Disorganized; hard to extract
precise rules
Structured Interview Manual Refining specific rules & edge
cases
Misses tacit steps outside planned
script
Protocol Analysis Manual Uncovering tacit step-by-step
heuristics
Very time-consuming to transcribe
& analyze
Delphi / NGT Manual Resolving conflicts among
multiple experts
Slow across multiple consensus
rounds
Repertory Grid (ETS) Semi-Auto Classifying objects & generating
draft rules
Suited mostly for classification, not
planning
Rule Induction
(ID3/C4.5)
Automated Large clean datasets of past
cases exist
Requires quality labeled historical
records

### 11. Quick Exam-Revision Cheat Sheet (Unit–3 High-Yield Summary)

Syllabus Topic Core Formula / Fact to Memorize High-Yield Exam Tip
Intro & Basic
Concepts
ES = Knowledge Base + Inference Engine
- **Classics:** DENDRAL, MYCIN,
PROSPECTOR, XCON
Always contrast ES (symbolic/heuristic,
separated KB) vs. conventional code
(algorithmic, mixed).
- **Structure of ES 2 Environments:** Development vs.
Consultation
- **7 Modules:** KA, KB, IE, Blackboard, UI,
Justifier, Refiner
Clearly show who uses each environment:
KE/Expert in Development; End User in
Consultation.
- **Human Element 5 Roles:** Domain Expert, Knowledge
Engineer, End User, System/Tool Builder,
Manager
Highlight the Knowledge Engineer as the
critical human bridge between Expert and
computer.
Architecture &
Chaining
- **IE Cycle:** Match → Conflict Resolution →
Act
Forward (Data-driven) vs. Backward
(Goal-driven)
Include HOW (proof trace) & WHY (question
reason) in the Explanation Facility diagram.
- **Problem Areas 10 Areas:** Interpret, Predict, Diagnose,
Design, Plan, Monitor, Debug, Repair,
Instruct, Control
Pair every problem area with one concrete
example (e.g., Diagnosis → MYCIN; Design
→ XCON).
Success
Factors
Narrow heuristic domain + Cooperative
expert + High payoff + Explainability + IT
integration
- **Remember:** ES fails on broad common-sense
tasks or pure heavy math calculations.

Syllabus Topic Core Formula / Fact to Memorize High-Yield Exam Tip
Types of ES Rule-Based, Frame-Based, Fuzzy,
Neural, CBR (4-R cycle), Model-
Based, Hybrid
Note CBR’s 4-R cycle (Retrieve–Reuse–
Revise–Retain) and Fuzzy’s continuous truth
[0, 1].
Knowledge
Engineering
- **DIKW Pyramid; 5 Types:** Declarative,
Procedural, Heuristic, Meta, Structural
Emphasize Explicit vs. Tacit and Shallow vs.
Deep knowledge dimensions.
Difficulties &
Methods of KA
KA Bottleneck (Feigenbaum) — Tacit
skill is #1 hurdle
- **Methods:** Manual, Semi-Automated,
Automated
Mention Protocol Analysis for tacit skill, Delphi
for multi-expert conflicts, and ID3/C4.5 for
automated induction.


> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
> - **An Expert System strictly separates domain knowledge (Knowledge Base) from the general problem-solving logic (Inference Engine).**
> - **Forward Chaining is data-driven (starts from known facts to derive conclusions); Backward Chaining is goal-driven.**

> ⚠️ **MISTAKES TO AVOID:**
> 
> - **Hardcoding domain rules directly into procedural algorithms instead of the declarative knowledge base.**
> - **Confusing procedural knowledge (step-by-step how-to) with declarative knowledge (what-is facts).**

