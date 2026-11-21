### University Solved Examination Questions (Unit 3)

> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

Input Characteristics (IB vs. VBE at constant VCE):
Forward-diode shape; IB (in μA) shoots up once VBE > 0.7 V (Si).
Raising VCE narrows the base → reduces base recombination → lowers IB slightly for a fixed
VBE → curve shifts slightly right.
**Input Resistance:** ri = ΔVBE / ΔIB → moderate (500 Ω – 2 kΩ).
Output Characteristics (IC vs. VCE at constant IB):
Saturation Region (0 < VCE < 0.2 V): IC climbs rapidly to the knee (VCE(sat) ≈ 0.2 V); collector
current is limited by load resistor RC, not IB.
Active Region (VCE > 0.2 V): Curves rise gently upward (Early effect); IC = βIB + ICEO.
Cut-off Region (below IB = 0): Leakage current ICEO = (β + 1)ICBO remains.
**Output Resistance:** ro = ΔVCE / ΔIC → moderate (10 – 50 kΩ).
Why Most Popular? Only configuration delivering both high voltage gain AND high current
gain → highest power gain (with 180° phase inversion).

#### 10.4 Common Collector (CC / Emitter Follower) Configuration

**Terminals:** Input = Base & Collector (VBC, IB)  |  Output = Emitter & Collector (VEC, IE).
Input Characteristics (IB vs. VBC at constant VEC):
Since VEC = VEB + VBC, raising VEC shifts the turn-on curve noticeably to the right.
**Input Resistance:** Very high (100 kΩ – 500 kΩ).
Output Characteristics (IE vs. VEC at constant IB):
Because IE = (β + 1)IB ≈ IC, the output curve family closely mirrors CE output curves.
**Output Resistance:** Very low (10 – 50 Ω).
**Key Behavior:** Voltage gain Av ≈ 1 with 0° phase shift → emitter voltage tracks base voltage
(hence Emitter Follower).
**UNIT–3:** Semiconductor Devices & Applications and Transistors

**CB Input:** IE vs VEB
VEB
IE VCB2>VCB1
**CB Output:** IC vs VCB
Sat. Active (IE2>IE1)
Cut-off (IE=0)
VCB
**CE Input:** IB vs VBE
VBE
IB VCE2>VCE1
**CE Output:** IC vs VCE
Sat. Active (IB2>IB1)
Cut-off (IB=0)
VCE
**CC Input:** IB vs VBC
VBC
IB VEC2>VEC1
**CC Output:** IE vs VEC
**Active:** IE=(β+1)IB
VEC
**Figure 12:** Input and Output Characteristics of BJT in CB, CE, and CC Configurations
Parameter Common Base (CB) Common Emitter (CE) Common Collector (CC)
Input / Output
Ports
Emitter–Base / Collector–
Base
Base–Emitter / Collector–
Emitter
Base–Collector / Emitter–
Collector
Input Resistance
(Ri)
Very Low (20 – 50 Ω) Moderate (500 Ω – 2 kΩ) Very High (100 – 500 kΩ)
Output Resistance
(Ro)
Very High
(100 kΩ – 1 MΩ)
Moderate (10 – 50 kΩ) Very Low (10 – 50 Ω)
Current Gain α < 1 (0.95 – 0.99) High (β = 20 – 500) Highest (γ = β + 1)
**UNIT–3:** Semiconductor Devices & Applications and Transistors

Parameter Common Base (CB) Common Emitter (CE) Common Collector (CC)
Voltage Gain (Av) High (100 – 500) High (100 – 500) Unity (≈ 1)
Power Gain (Ap) Moderate Highest (≈ 10,000) Low
Phase Shift 0° (In-phase) 180° (Inverted) 0° (In-phase)
Main Application High-frequency RF stages Audio & voltage amplifiers Impedance matching / Buffer

### 11. Applications of Bipolar Junction Transistors


#### 11.1 BJT as a Linear Amplifier (Active Region)

**Operating Requirement:** The transistor must be DC-biased stably at a quiescent Q-point in the
center of the Active Region (JE forward, JC reverse) so both positive and negative AC swings
amplify without clipping.
Step-by-Step Signal Amplification (CE Amplifier):

### 1. A weak AC input signal (vin, e.g., in mV) is applied at the base terminal.

2. During the positive input swing, VBE rises slightly → base current rises by ΔIB.
3. Transistor action multiplies this change by β → collector current jumps by ΔIC = βΔIB.
4. The large ΔIC flowing through collector load RC produces a large drop (ΔICRC).
5. Because Vout = VCC − ICRC, an increase in IC pulls Vout downward → yields a strongly
magnified, 180° phase-inverted output wave.
**Practical Uses:** Audio speakers and microphone preamplifiers, hearing aids, radio/TV receiver
stages, and biomedical sensor amplification.

#### 11.2 BJT as an Electronic Switch (Cut-off & Saturation Regions)

**Operating Principle:** Operates exclusively at the two extreme ends of its load line — Cut-off
(OFF) and Saturation (ON) — switching millions of times per second with zero mechanical wear.
State 1 — Switch OPEN / OFF (Cut-off Mode):
Input Vin = 0 V (or < 0.7 V) → JE and JC are both reverse-biased.
Base current IB = 0 → Collector current IC ≈ 0.
Output voltage Vout = VCC − (0 × RC) = VCC (Digital Logic HIGH / 1).

**State 2 — Switch CLOSED / ON (Saturation Mode):**

High input voltage Vin drives base current past saturation threshold: IB ≥ IC(sat)
β
where
IC(sat) ≈
VCC
RC
.
Both junctions become forward-biased; collector–emitter path behaves like a closed switch.
Output voltage collapses to Vout = VCE(sat) ≈ 0.2 V ≈ 0 V (Digital Logic LOW / 0).
**UNIT–3:** Semiconductor Devices & Applications and Transistors

**Practical Uses:** Digital logic gates (NOT inverter, NAND, NOR), microcontroller drivers for LEDs,
relays, buzzers, and DC motors, plus switching power supplies.

#### 11.3 Additional Key BJT Applications

Impedance Matching / Buffer Stage (CC Configuration): Very high input impedance avoids
loading weak signal sources, while very low output impedance efficiently drives low-resistance
loads like speakers.
**Constant Current Source:** Uses the flat active-region collector current (nearly independent of
VCE) to maintain steady bias currents inside analog ICs.
High-Frequency RF Amplifier (CB Configuration): Eliminates Miller feedback capacitance,
enabling stable amplification at VHF and UHF radio frequencies.
(a) BJT as a CE Amplifier
Weak vin
+VCC
RC
Large vout (180°)
**Active Region:** ΔIC = βΔIB
(b) BJT as an Electronic Switch
Vin
RB
+VCC
RC

$$Vin = LOW$$

**OFF:** Vout=VCC

$$Vin = HIGH$$

**ON:** Vout≈0.2V
Cut-off (OFF) ↔ Saturation (ON)
**Figure 13:** Practical BJT Circuits — (a) Common-Emitter Amplifier and (b) Electronic Switch

#### 11.4 Quick Exam-Revision Summary Table (Unit–3 High-Yield Values)

Topic Key Constant / Formula Critical Exam Takeaway
Band Theory Eg(Si) = 1.12 eV; Eg(Ge) = 0.67 eV Conductors: PTC; Semiconductors: NTC
Extrinsic
Doping
n × p = ni2 (Mass Action Law) Both N-type & P-type crystals are electrically
neutral
p–n Junction &
V–I
Vγ = 0.7 V (Si), 0.3 V (Ge); VT ≈ 26 mVI0 doubles every 10 °C; Vγ drops 2 mV/°C
**Rectifiers HWR:** η=40.6%, γ=1.21 | FWR:
η=81.2%, γ=0.482
Center-Tap PIV = 2Vm; Bridge PIV = Vm
Clipper &
Clamper
**Clamper rule:** τ = RLC ≥ 10 × (T/2) Clipper slices shape; Clamper shifts DC
level only
BJT Gains &
Modes
IE = IB + IC; β = α/(1−α);

$$ICEO = (β+1)ICBO$$

Active → Amp; Cut-off/Sat → Switch; CE →
180° inversion
**UNIT–3:** Semiconductor Devices & Applications and Transistors