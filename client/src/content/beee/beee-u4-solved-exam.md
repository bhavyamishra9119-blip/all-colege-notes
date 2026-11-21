### University Solved Examination Questions (Unit 4)

> 🟢 **EXAM WEIGHTAGE:** 22 - 26 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

5. Step 5 — Overlapping Is Allowed (Redundancy Is Not): A 1 may be shared by two or more
groups if that makes a group larger, but never add a redundant group whose every 1 is already
covered by other groups.
6. **Step 6 — Read Out Each Simplified Term:** For each loop, drop any variable that changes
between 0 and 1 inside the loop, and keep only variables that stay constant (1 → A, 0 → A). OR
all group terms together.
**Worked 3-Variable K-Map Example:** Minimize F(A, B, C) = Σm(0, 2, 4, 5, 6)
**Plot 1s:** Row A=0 has 1 at m0(00), m2(10); Row A=1 has 1 at m4(00), m5(01), m6(10).
**Group 1 (Wrap-Around Quad:** m0, m2, m4, m6): Leftmost col (BC=00) wraps to rightmost col
(BC=10) → A changes, B changes, only C = 0 stays constant → Term = C.
**Group 2 (Overlapping Pair:** m4, m5): Needed to cover m5 → A = 1, B = 0 stay constant, C
changes → Term = A·B.
**Minimized Result:** F(A, B, C) = C + A·B.

#### 8.3 Don’t Care Conditions (d or X) & 4-Variable K-Map Simplification

What Is a Don’t Care Condition? An input combination whose output can safely be either 0 or 1
— either because that input state can never physically occur (e.g., invalid BCD codes
1010–1111) or because the system ignores the output in that state.
**Notation:** Marked as X (or d) inside the K-Map and written as F = Σm(…) + d(…).
Two Golden Rules for Using Don’t Care (X) Cells:
1. Include an X as 1 ONLY when it expands a group of real 1s into a larger power-of-2 loop (e.g.,
turning a Pair into a Quad or a Quad into an Octet).
2. NEVER form a group consisting solely of Xs — any leftover X that does not help cover a
real 1 is simply treated as 0 and ignored!
Worked 4-Variable K-Map Problem with Don’t Care: Minimize
F(A, B, C, D) = Σm(0, 2, 4, 6, 8, 10, 15) + d(5, 11, 12, 14)
Group 1 (Wrap-Around Octet — Col CD=00 + Col CD=10): Combines real 1s {0, 2, 4, 6, 8, 10}
with Don’t Cares {12, 14} → A, B, C all vary, only D = 0 stays fixed → Term 1 = D.
Group 2 (Bottom-Right Quad — {m15, m14(X), m11(X), m10}): Covers remaining m15 using
Don’t Cares {11, 14} and overlapping m10 → A = 1, C = 1 stay fixed, B, D vary → Term 2 = A·C.
**Ignored Don’t Care:** Cell d(5) does not help enlarge any group of 1s, so it is safely treated as
0!
**Final Minimized Expression:** F(A, B, C, D) = D + A·C (only 3 gates instead of 7!).
**UNIT–4:** Number Systems, Boolean Algebra & Logic Gates and Circuits

F = Σm(0,2,4,6,8,10,15) + d(5,11,12,14)
AB\CD 00 01 11 10
00
01
11
10
1 0 0 1
1 X 0 1
X 0 1 X
1 0 X 1
Grouping Summary & Final Circuit
- **Blue Octet (Wrap):** D'
- **Green Quad (2×2):** A · C
- **Red X at m5:** Ignored (= 0)
D
A
C AND
OR F
**Minimized:** F = D' + A·C
**Figure 8:** Solved 4-Variable K-Map with Don’t Care Conditions (X) and Resulting Minimized Gate Circuit

### 9. Industrial Use of Logic Circuits


#### 9.1 Why Industries Rely on Digital Logic Circuits

**Deterministic Safety:** Logic gates evaluate sensor conditions instantaneously (nanosecond
response) with zero human hesitation.
**High Noise Immunity:** Binary HIGH/LOW signals resist electromagnetic interference generated
by heavy industrial motors and welding equipment.
**Low Cost & Easy Expansion:** Combinational gate networks and Programmable Logic
Controllers (PLCs) replace bulky electromechanical relay racks.

#### 9.2 Five Major Real-World Industrial Applications


### 1. Machine Safety Interlock Systems (AND + NOT Logic):


> 📝 **Example: A heavy hydraulic press or CNC cutter is allowed to start (M = 1) ONLY IF the**

protective safety guard is closed (G = 1), the operator presses both two-hand start buttons
(S = 1), AND the emergency-stop button is NOT pressed (E = 0 → E = 1).
**Boolean Logic:** M = G · S · E — instantly halts the machine if any single safety condition fails.

### 2. Plant Fault Detection & Alarm Annunciators (OR / NAND Logic):


> 📝 **Example: In a chemical plant or power transformer, an alarm siren sounds (A = 1) whenever**

over-temperature (T = 1) OR over-pressure (P = 1) OR coolant-level low (L = 1) is triggered.
**Boolean Logic:** A = T + P + L.

### 3. Automated Tank Liquid-Level & Boiler Control (SOP/K-Map Logic):

Level, temperature, and flow sensors output binary 0/1 signals into a K-Map minimized
combinational logic circuit that automatically turns inlet valves, heaters, or drainage pumps
ON/OFF without operator intervention.

### 4. Programmable Logic Controllers (PLCs) & Factory Assembly Lines:

Industrial conveyors, robotic sorting arms, bottling lines, and elevator controllers execute
Boolean AND/OR/NOT ladder logic inside PLCs to coordinate optical sensors, limit switches,
and pneumatic actuators.
**UNIT–4:** Number Systems, Boolean Algebra & Logic Gates and Circuits


### 5. Data Integrity (XOR/XNOR) & Fault-Tolerant Majority Voting Systems:

Error Checking (XOR/XNOR): Industrial communication buses use XOR/XNOR parity
generators and comparators to detect bit errors caused by factory electrical noise.
Triple-Modular Majority Voting (Aerospace / Nuclear Plants): Three redundant sensors
(A, B, C) feed the majority logic circuit Y = A·B + B·C + A·C — guaranteeing safe shutdown if
any 2 out of 3 sensors agree, preventing a single faulty sensor from causing false alarms or
missed hazards.

### 1. Plant Sensors 2. Combinational Logic 3. Industrial Actuators

Guard Closed (G)
Start Button (S)
E-Stop Pressed (E)
Over-Temp Fault (T)
AND
M = G·S·E'
OR

$$A = E + T$$

Machine Motor ON
(Safe Interlock)
Plant Alarm Siren
(Fault Annunciator)
**Figure 9:** Practical Industrial Safety Interlock (Motor Run) and Fault Alarm Logic Circuit

### 10. Quick Exam-Revision Summary Table (Unit–4 Cheat Sheet)

Syllabus Topic Key Rule / Formula High-Yield Exam Tip
Number
Conversions
**Dec → Base r:** ÷r (Int), ×r
(Frac)
Bin ↔ Oct (3 bits); Bin ↔
Hex (4 bits)
Always convert Octal ↔ Hex via the Binary bridge; pad
zeros outward from radix point.
**BCD & Excess-3 8421 BCD:** 4 bits per
decimal digit
XS-3 = BCD + 0011 (+3)
BCD add > 9 or carry → add 0110 (+6); XS-3 is
unweighted & self-complementing.
Boolean & De
Morgan
A + B = A·B  |
A · B = A + B
Remember Boolean-only Distributive Law:
A + B·C = (A+B)(A+C).
**7 Logic Gates Universal:** NAND, NOR
**XOR:** AB + AB | XNOR:
AB + AB
XOR detects inequality (odd 1s); XNOR detects equality.
SOP, POS,
Canonical
SOP = Σm (where F=1)
POS = ΠM (where F=0)
In Max-terms (Mi), 0 = uncomplemented and 1 =
complemented!
K-Maps & Don’t
Care
**Gray order:** 00, 01, 11, 10
**Group sizes:** 16, 8, 4, 2, 1
Use X only to enlarge groups of real 1s; never form an X-
only group.
**Industrial Logic Interlock:** M = G·S·E |
**Alarm:** A = E+T
Mention safety interlocks, alarms, PLCs, parity checkers,
and majority voting.
**UNIT–4:** Number Systems, Boolean Algebra & Logic Gates and Circuits