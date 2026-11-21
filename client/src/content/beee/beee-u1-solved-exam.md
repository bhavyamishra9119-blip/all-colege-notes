### 11. Quick Exam-Revision Cheat Sheet (BEEE Unit–1 Master Table)

| Topic | Primary Formula | Exam Tip / Key Observation |
|---|---|---|
| **Practical Voltage Source** | $V_L = V_s - I_L R_s$ | $R_s$ is in series; internal drop reduces terminal voltage |
| **Practical Current Source** | $I_L = I_s - \frac{V_L}{R_p}$ | $R_p$ is in parallel; internal shunt diverts load current |
| **Kirchhoff’s Current Law** | $\sum I = 0$ at node | Follows Conservation of Charge; used for Nodal Analysis |
| **Kirchhoff’s Voltage Law** | $\sum V = 0$ around loop | Follows Conservation of Energy; used for Mesh Analysis |
| **Superposition Theorem** | $I = I' \pm I''$ | Voltage source $\to$ Short; Current source $\to$ Open. Never add power directly! |
| **Thevenin’s Equivalent** | $I_L = \frac{V_{\text{th}}}{R_{\text{th}} + R_L}$ | $V_{\text{th}} = V_{AB(\text{oc})}$; $R_{\text{th}}$ looking back with sources off |
| **Norton’s Equivalent** | $I_L = I_N \frac{R_N}{R_N + R_L}$ | $I_N = I_{AB(\text{sc})}$; $R_N = R_{\text{th}}$ |
| **Max Power Transfer** | $R_L = R_{\text{th}} \implies P_{\max} = \frac{V_{\text{th}}^2}{4 R_{\text{th}}}$ | Efficiency is always exactly $\eta = 50\%$ at maximum power transfer |
| **AC Sinusoidal Wave** | $V_{\text{rms}} = \frac{V_m}{\sqrt{2}}, V_{\text{avg}} = \frac{2 V_m}{\pi}$ | Form factor $K_f = 1.11$; Peak factor $K_p = 1.414$ |
| **Series R–L–C Resonance** | $f_r = \frac{1}{2\pi\sqrt{LC}}, Z_{\min} = R$ | Current is maximum $I_{\max} = \frac{V}{R}$; Acceptor circuit; $\text{PF} = 1.0$ |
| **Parallel Resonance** | $Z_d = \frac{L}{CR}, I_{\min} = \frac{V}{Z_d}$ | Impedance is maximum; Current is minimum; Rejector / Tank circuit |
| **Power Triangle** | $S = \sqrt{P^2 + Q^2}, \text{PF} = \cos\phi = \frac{P}{S}$ | $P = V I \cos\phi$ (W); $Q = V I \sin\phi$ (VAR); $S = V I$ (VA) |

---

### University Examination Solved Questions (Unit 1)

<example title="Q1: Superposition Theorem on Two-Source Mesh (10 Marks)" level="hard">
**Question:** In the circuit below, a $28\text{ V}$ DC source feeds $R_1 = 4\,\Omega$. A center branch contains $R_2 = 2\,\Omega$, and a second loop contains $R_3 = 4\,\Omega$ fed by a $7\text{ A}$ independent current source directed upward into the common top node. Calculate the current flowing downward through resistor $R_2$ using the Superposition Theorem.

**Step 1: Case 1 ($28\text{ V}$ Source Acting Alone)**
* Deactivate the $7\text{ A}$ current source by replacing it with an **open circuit**.
* Resistors $R_2 = 2\,\Omega$ and $R_3$ are no longer parallel because $R_3$ is in an open branch. Resistor $R_2$ is in simple series with $R_1$:
$$R_{\text{eq1}} = R_1 + R_2 = 4 + 2 = 6\,\Omega$$
$$I_2' = \frac{V_s}{R_{\text{eq1}}} = \frac{28}{6} = 4.67\text{ A (downward)}$$

**Step 2: Case 2 ($7\text{ A}$ Current Source Acting Alone)**
* Deactivate the $28\text{ V}$ voltage source by replacing it with a **short circuit**.
* Resistors $R_1 = 4\,\Omega$ and $R_2 = 2\,\Omega$ are now connected in parallel at the top node to ground.
* The $7\text{ A}$ source injects current into this parallel pair. By the Current Divider Rule:
$$I_2'' = I_s \times \frac{R_1}{R_1 + R_2} = 7 \times \frac{4}{4 + 2} = 7 \times \frac{4}{6} = 4.67\text{ A (downward)}$$

**Step 3: Total Load Current via Superposition**
* Since both individual current components act in the downward direction through $R_2$:
$$I_2 = I_2' + I_2'' = 4.67 + 4.67 = 9.33\text{ A (downward)}$$
</example>

<example title="Q2: Thevenin Equivalent & Maximum Power Transfer (10 Marks)" level="hard">
**Question:** A bridge network is driven by a $36\text{ V}$ DC supply. Terminals A–B connect to an adjustable load resistor $R_L$. Find:
1. Thevenin voltage $V_{\text{th}}$ across A–B.
2. Thevenin resistance $R_{\text{th}}$.
3. The value of $R_L$ for maximum power transfer and the maximum power $P_{\max}$ delivered.

**Solution:**
1. **Thevenin Voltage $V_{\text{th}}$:**
   With $R_L$ removed, the open circuit voltage across A–B is determined by the voltage divider:
   $$V_{\text{th}} = 36 \times \frac{6}{6 + 12} = 12\text{ V}$$
2. **Thevenin Resistance $R_{\text{th}}$:**
   Short-circuiting the $36\text{ V}$ source:
   $$R_{\text{th}} = (12 \parallel 6) = \frac{12 \times 6}{12 + 6} = \frac{72}{18} = 4\,\Omega$$
3. **Maximum Power Transfer Condition:**
   $$R_L = R_{\text{th}} = 4\,\Omega$$
   $$P_{\max} = \frac{V_{\text{th}}^2}{4 R_{\text{th}}} = \frac{12^2}{4 \times 4} = \frac{144}{16} = 9\text{ W}$$
</example>
