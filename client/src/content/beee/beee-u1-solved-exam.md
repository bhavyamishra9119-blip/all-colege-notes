### University Solved Examination Questions (Unit 1)

> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum


#### 9.2 The Three AC Powers & Power Triangle

1. **Active / Real / True Power (P):** Actual useful power converted to heat, light, or mechanical
**torque:** P = V I cos φ — Unit: Watt (W) / kW.
2. **Reactive Power (Q):** Power oscillating back and forth to build magnetic/electric fields in L and
**C (performs zero net work):** Q = V I sin φ — Unit: VAR / kVAR.
3. **Apparent Power (S):** Total vector power the generator and transformer must supply: S = V I =
**√(P2 + Q2) — Unit:** Volt-Ampere (VA) / kVA.

#### 9.3 Disadvantages of Low Power Factor & How Industries Improve It

Why Low Power Factor Hurts Industry: For a fixed useful power P, line current is I = P / (V cos
φ) — if cos φ drops from 1.0 to 0.5, current doubles, causing:
4× higher I2R copper heat losses in cables and transformers.
Larger, costlier kVA-rated transformers and thicker copper conductors.
Poor voltage regulation (excessive line voltage drop) and heavy utility tariff penalties.

**Power Factor Improvement Methods:**

1. Static Shunt Capacitor Banks (Most Common): Connected in parallel across inductive
factory motors — their leading reactive current (−QC) cancels the motors’ lagging reactive
current (+QL), raising cos φ close to 0.95–0.99!
2. **Synchronous Condenser:** An over-excited unloaded synchronous motor acting as a
smoothly adjustable variable capacitor for large substations.
(a) AC Power Triangle (Lagging Load)

$$P = VI cos φ (kW)$$


$$Q = VI sin φ$$

(kVAR)

$$S = VI (kVA)$$

φ
(b) PF Correction via Shunt Capacitor
Active Power P Unchanged
−QC (Cap)
Qnew
S1 (Old)
S2 < S1
φ2<φ1
**Figure 10:** AC Power Triangle and Reduction of Apparent Power (S) via Shunt Capacitor Bank
Power Type Formula SI Unit Physical Role in AC Circuit
Active / True Power
(P)
V I cos φ = I2R Watt (W /
kW)
Useful real work (mechanical rotation, heat, light)
Reactive Power (Q) V I sin φ = I2X VAR / kVAR Sustains magnetic/electric fields; oscillates back &
forth
Apparent Power (S) V I = √(P2 +
Q2)
VA / kVA Total equipment rating of transformers &
alternators
**BEEE • UNIT–1:** DC Circuits & Single-Phase AC Circuits


### 10. Industrial Applications of DC and AC Circuits


#### 10.1 Major Industrial Applications of DC Circuits

1. Electrochemistry, Electroplating & Refining: Unidirectional DC current is mandatory to
deposit uniform metal coatings (chrome, gold, zinc) and refine pure aluminum/copper via
electrolysis.
2. High-Torque Variable-Speed Drives & Traction: Steel rolling mills, harbor cranes, mine
hoists, elevators, and urban electric trains leverage DC motors for smooth speed control and high
starting torque.
3. Battery Charging, Energy Storage & Electric Vehicles (EVs): All electrochemical batteries
store and discharge DC; EV fast-charging stations, solar PV arrays, and uninterruptible power
supplies (UPS) in hospitals and data centers run on DC buses.
4. High-Voltage DC (HVDC) Bulk Power Transmission: Transmits gigawatts over ultra-long
distances (>600 km) or undersea cables with zero skin-effect loss and zero reactive power drop.
5. Industrial Control, PLCs & DC Arc Welding: Factory Programmable Logic Controllers
(PLCs), sensors, relays, and digital microchips operate on regulated 5 V / 12 V / 24 V DC; DC arc
welders deliver stable, spatter-free welds.

#### 10.2 Major Industrial Applications of AC Circuits

1. Bulk Power Generation & National Transmission Grids: AC voltages can be stepped up to
400 kV+ for low-loss cross-country transmission and stepped down safely to 415 V / 230 V using
simple, high-efficiency Transformers.
2. Industrial Induction Motors (Workhorse of Factories): Rugged, brushless AC induction
motors drive over 80% of industrial pumps, fans, air compressors, conveyor belts, lathes, and
HVAC chillers with minimal maintenance.
3. **Industrial Heating & Metallurgy:** High-frequency AC powers induction furnaces (melting
steel cleanly via eddy currents) and dielectric heaters (plastics/wood curing).
4. RF Communication, Tuning & Filtering (Resonance): Series and parallel RLC resonant AC
circuits tune radio/TV transmitters, radar receivers, wireless chargers, and harmonic power-line
filters.
5. **Commercial & Factory Lighting Systems:** AC distribution powers LED/HID high-bay
industrial lighting grids cleanly with simple circuit-breaker protection (current naturally crosses
zero 100 times/sec at 50 Hz, quenching arcs!).
INDUSTRIAL DC CIRCUIT USES
- Electroplating & Metal Electrolysis
- Cranes, Rolling Mills & Traction Drives
- EV Charging, Solar PV & Data-Center UPS
- HVDC Subsea Lines, PLCs & DC Welding
INDUSTRIAL AC CIRCUIT USES
- National Power Grids & Transformers
- Induction Motors (Pumps, Fans, Belts)
- Induction Furnaces & HVAC Chillers
- RF Resonant Filters & Plant Lighting
**BEEE • UNIT–1:** DC Circuits & Single-Phase AC Circuits

**Figure 11:** Overview of Key Industrial Applications of DC Circuits and AC Circuits
Comparison Point DC Circuits AC Circuits
Frequency &
Direction
f = 0 Hz (unidirectional, constant
polarity)

$$f = 50/60 Hz (reverses periodically)$$

Voltage
Transformation
Requires power-electronic DC–DC
converters
Easy & cheap via passive
Transformers
Opposition to Current Pure Resistance (R) only Impedance (Z = R + jX)
Power Factor Issue None (P = V × I always) Yes (P = V I cos φ; requires PF
correction)
Energy Storage Directly storable in batteries Cannot be stored directly (must rectify to
DC)

### 11. Quick Exam-Revision Cheat Sheet (BEEE Unit–1 Master Table)

Syllabus Topic Must-Memorize Formula / Rule High-Yield Exam Tip
Sources &
Transform
Is = Vs / R; Ideal V: Rs=0; Ideal I:
Rp=∞
Source transformation keeps the exact same
value of R!
**KCL & KVL KCL:** ∑I = 0 (Charge) | KVL: ∑V = 0
(Energy)
Current divider uses the opposite branch resistor
in numerator.
**Superposition Deactivate:** V-source → Short; I-
source → Open
NEVER add partial powers directly (P = I2R is
non-linear).
Thevenin &
Norton
IL = Vth/(Rth+RL); IN = Vth/Rth;

$$RN = Rth$$

**Remove RL first:** Open-circuit gives Vth; Short-
circuit gives IN.
Max Power
Transfer
RL = Rth → Pmax = Vth
2/(4Rth); η =
50%
Used in telecom/audio for max signal, NOT
power grids (50% loss).
AC Fundamentals Vrms=0.707Vm; Vavg=0.637Vm;
Kf=1.11; Kp=1.414
Full-cycle average of a sine wave is 0; always
integrate half-cycle!
R, L, C Circuits XL=2πfL; XC=1/(2πfC); Z=√(R2+
(XL−XC)2)
**Remember ELI (L:** I lags V 90°) and ICE (C: I
leads V 90°).
**Resonance Series:** fr=1/(2π√(LC)), Zmin=R
**Parallel:** Zd=L/(CR), Imin
Series = Acceptor / Voltage magnifier; Parallel =
Rejector / Current magnifier.
Power & PF P = VI cos φ (W); Q = VI sin φ
(VAR); S = VI (VA)
Improve lagging industrial PF using parallel
Shunt Capacitor Banks.
**BEEE • UNIT–1:** DC Circuits & Single-Phase AC Circuits