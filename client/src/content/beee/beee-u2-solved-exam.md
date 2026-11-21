> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

Feature Squirrel-Cage 3-Φ IM Slip-Ring (Wound-Rotor) 3-Φ IM
Rotor Construction Shorted skewed copper/aluminum
bars
3-phase insulated winding + 3 slip
rings
External Rotor
Resistance
Cannot be added Easily added via slip rings & brushes
Starting Torque Moderate (~1.5× full load) Very High (~2.5× full load)
Cost & Maintenance Low cost, practically maintenance-free Higher cost; brush wear requires
upkeep
Typical Applications Pumps, fans, blowers, lathes,
conveyors
Heavy cranes, hoists, elevators,
crushers

### 10. Single-Phase Induction Motor: Principle, Construction, and Working


### 10.1 Why a Single-Phase Induction Motor Is NOT Self-Starting

Double-Field Revolving Theory (Exam Favorite!):

### 1. A single-phase AC stator winding creates a pulsating (standing) magnetic field that merely

grows and reverses along one fixed axis — it does NOT rotate!

### 2. Mathematically, a pulsating field Φm cos(ωt) resolves into two equal rotating fields, each of

amplitude Φm / 2, rotating in opposite directions at +Ns (Forward) and −Ns (Backward).

### 3. At standstill (N = 0, s = 1), Forward Torque (Tf) and Backward Torque (Tb) are equal and

opposite → Net Starting Torque = Tf − Tb = 0! The rotor simply hums and refuses to turn.

- **### 4. Running Condition:** If given an initial kick in either direction, forward slip decreases (s < 1)

while backward slip increases (2 − s), making Tf > Tb — so net torque accelerates the rotor up
to normal speed!

### 10.2 Construction & How We Make It Self-Starting (Split-Phase Principle)

- **Construction:** Uses a standard rugged Squirrel-Cage Rotor inside a slotted laminated stator
housing TWO stator windings placed 90° electrical degrees apart:

- **### 1. Main (Running) Winding:** Thick wire, low resistance, high inductance (current Im lags

supply voltage V strongly).

### 2. Auxiliary (Starting) Winding: Connected in parallel with the main winding; designed with

either higher resistance or a series Starting Capacitor (C) so its current Ia is phase-shifted by
30° – 90° ahead of Im.
- **Working (Artificial 2-Phase RMF):** Because Im and Ia are out of phase in time AND displaced 90°
in space, they create a Rotating Magnetic Field that kicks the rotor into rotation automatically!
- **Role of Centrifugal Switch:** Once the rotor reaches ~75%–80% of rated speed, a spring-loaded
centrifugal switch disconnects the auxiliary starting winding (in Split-Phase and Capacitor-Start
motors) so the motor runs efficiently on the main winding alone.

- **Four Standard Commercial Types:** 
- **Split-Phase (Resistance-Start):** Uses thin high-resistance auxiliary coil (α ≈ 30°); low cost,
modest starting torque (small pumps, grinders).
- **Capacitor-Start IM:** Adds electrolytic capacitor in series with auxiliary coil (α ≈ 80°–90°); very
high starting torque (refrigerators, air compressors).
- **Permanent-Split Capacitor (PSC):** Oil-filled capacitor stays in circuit permanently (no
centrifugal switch → silent, reliable → ceiling fans & air blowers!).
- **Shaded-Pole Motor:** Copper shading ring on salient poles; ultra-cheap, tiny starting torque
(hair dryers, small desk fans, electric clocks).
(a) Double-Field Revolving Torque
At N=0: Tnet=0
Tf
Tnet
Tb
+Ns−Ns
(b) Capacitor-Start 1-Φ IM
1-Φ
AC
Main
C
Aux
SW
Rotor V
Ia
Im
Phase split α ≈ 80°–90° → High Starting Torque

> 🖼️ **Figure 11: Double-Field Revolving Torque Curve and Capacitor-Start Single-Phase Induction Motor**

Comparison Point Single-Phase Induction Motor Three-Phase Induction Motor
Supply Required 1-Phase AC (230 V, 50 Hz) 3-Phase AC (415 V, 50 Hz)
Self-Starting? No (requires auxiliary winding /
capacitor)
Yes (natural 3-phase RMF)
Power Rating Fractional / Low power (< 3 kW) Medium to Very High power (1 kW –
MW)
Efficiency & Power
Factor
Lower efficiency & lower PF Higher efficiency & better PF
Typical Usage Domestic appliances (fans, fridges,
mixers)
Heavy industrial drives (pumps,
factories)

### 11. Applications of Transformers and Electrical Machines

Device / Machine Key Engineering
Characteristic
Major Industrial & Domestic Applications
Power & Distribution
Transformers
Steps voltage UP/DOWN at
95%–99% efficiency
Long-distance HV grid transmission (400 kV), local
substations (11 kV → 415/230 V), phone/laptop
adapters
Special Transformers
(CT, PT, Isolation)
Current/voltage scaling &
galvanic safety
Substation metering & protective relays (CT/PT),
medical equipment isolation, electric arc welding

Device /
Machine
Key Engineering
Characteristic
Major Industrial & Domestic Applications
DC Shunt Motor Nearly constant speed;
easy speed control
Lathes, drilling & milling machines, paper mills, wood planers,
centrifugal pumps, printing presses
DC Series
Motor
Very high starting
torque (T ∝  Ia
2)
Electric trains & trams, cranes, hoists, elevators, automobile
starter motors (never start at no-load!)
DC Compound
Motor
High starting torque +
safe no-load speed
Steel rolling mills, heavy stamping/punching presses, shears,
large compressors
3-Phase
Induction Motor
Rugged, brushless, self-
starting workhorse
Factory pumps, blowers, conveyors, CNC plants, crushers,
hoists (slip-ring type for heavy starts)
1-Phase
Induction Motor
Runs directly on home
230 V single-phase
Ceiling & exhaust fans (PSC), refrigerators & ACs (Cap-Start),
washing machines, domestic water pumps, hair dryers
(Shaded-Pole)

### 12. Quick Exam-Revision Cheat Sheet (BEEE Unit–2 Master Table)

Syllabus Topic Must-Memorize Formula / Fact High-Yield Exam Tip
Magnetic Materials
& B–H
B = μ0 μr H; Loop Area ∝
Hysteresis Loss
Use Soft CRGO Silicon Steel (narrow B–H loop)
for cores; Hard steel for permanent magnets.
Transformers E = 4.44 f N Φm; K = N2/N1 =
V2/V1 = I1/I2
Never works on DC (dΦ/dt = 0 → zero EMF &
primary burns out!).
Equivalent Circuit Secondary → Primary: R2' = R2
/ K2, X2' = X2 / K2
Move shunt branch (R0 ǁ Xm) to left for
Approximate Equivalent Circuit.
Losses & Max
Efficiency
Pi = Constant; Pcu ∝  x2;
Max η when Pi = x2 Pcu,FL
Hysteresis cut by Si-Steel; Eddy current cut by thin
varnished laminations.
OC & SC Tests OC (LV, rated V) → Pi, R0, Xm
SC (HV, 5–10% V) → Pcu,FL,
R01, X01
Never mix up which side is open (HV open in OC)
or shorted (LV shorted in SC)!
DC Motor & Speed
Control
V = Eb + IaRa; N ∝  (V − IaRa)
/ Φ
Flux control → Above base speed; Armature R
control → Below base speed.
3-Φ Induction
Motor
Ns = 120f / P; s = (Ns−N)/Ns; fr
= s·f
Rotor speed N is always strictly less than Ns; swap
any 2 phases to reverse!
1-Φ Induction
Motor
- **Double-Field Theory:** Tf = Tb at
N=0 → Not self-starting
Needs auxiliary winding + capacitor (90° space &
phase split) + centrifugal switch.