> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum

- **Repeating Radial:** repeating-radial-gradient(circle, #1b365d 0, #0f766e 15px)
creates concentric rings.

- **### 3. Conic Gradients:** Color transitions sweep rotationally around a center point (like a pie chart or

- **color wheel):** conic-gradient(from 0deg at center, red, yellow, green, blue, red).
Linear Angle Compass
0° (to top)
180° (default)
90°270°
45°
linear-gradient(45deg, ...)
- **Stops:** 0% → 55% → 100%
radial-gradient(circle, ...)
Radiates from center (50% 50%)
- **Figure 4.1:** CSS Linear Gradient Angle Compass (Clockwise from 0° North), Linear Axis Stops, and Radial
Gradient Radiation.
- **WORKED EXAMPLE 4.1:** RGB-TO-HEX CONVERSION & GRADIENT SYNTAX

### 1. Convert rgb(27, 54, 93) to Hexadecimal: Divide each channel by 16 (Quotient = 1st hex

digit, Remainder = 2nd hex digit):
- **Red 27:** 27 ÷ 16 = 1 rem 11 (B) ⇒  1B.
- **Green 54:** 54 ÷ 16 = 3 rem 6 ⇒  36.
- **Blue 93:** 93 ÷ 16 = 5 rem 13 (D) ⇒  5D ⇒  Final Hex = #1B365D.

### 2. Layered Gradient + Background Code:

.hero-panel {
- **background-color:** #1B365D; /* Fallback for legacy browsers */
- **background-image:** linear-gradient(135deg, rgba(27,54,93,0.9) 0%, #0F766E
100%);
- **background-repeat:** no-repeat;
- **background-size:** cover;
}
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes


### 5. Creating Boxes and Columns using CSS


- **### 5.1 Creating Boxes:** The CSS Box Model

- **Fundamental Concept:** In CSS layout, every HTML element generates a rectangular box
consisting of four concentric layers from innermost to outermost: Content → Padding → Border
→ Margin.

- **### 1. Content Area:** Holds actual text, images, or child elements. Controlled by width, height,

min-width, max-width, min-height, max-height, and overflow (visible, hidden, scroll,
auto).

- **### 2. Padding:** Transparent inner cushion between Content and Border; inherits the element's

background color/image. Cannot be negative.

- **### 3. Border:** Visible perimeter surrounding Padding and Content. Controlled via border-width,

border-style (solid, dashed, dotted, double, groove, ridge, inset, outset, none),
border-color, and border-radius (rounds corners; 50% on a square yields a circle).

- **### 4. Margin:** Transparent outer buffer separating the element from neighboring elements. Can be

- **negative, and supports margin:** 0 auto; to horizontally center a block element with a defined
width.
Clockwise TRBL Shorthand Rule (applies to padding & margin):
- **1 value:** 10px → all 4 sides = 10px.
- **2 values:** 10px 20px → Top/Bottom = 10px, Left/Right = 20px.
- **3 values:** 10px 20px 30px → Top = 10px, Left/Right = 20px, Bottom = 30px.
- **4 values:** 10px 20px 30px 40px → Top, Right, Bottom, Left (clockwise).
- **Vertical Margin Collapsing:** When two vertical block margins touch (e.g., margin-bottom: 20px
- **above margin-top:** 30px), they do not add up to 50px; instead, they collapse into the larger
- **single margin:** Final Gap = max(M1, M2) = 30px. Horizontal margins never collapse.
- **outline vs. border:** outline draws a line outside the border edge, does NOT take up layout
space, and does not affect total box dimensions.
MARGIN (Transparent outer spacing)
BORDER (width, style, color)
PADDING (Inner cushion)
CONTENT (w × h)
content-box (Default)
CSS width = Content only.
Padding & Border ADD
outside declared width.
border-box (Modern)
CSS width = Content +
Padding + Border total.
Box size stays exact!


<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 THE CSS BOX MODEL &amp; DIMENSIONAL CALCULATION FORMULA</div>
  <div class="visual-diagram-container">
    <svg width="100%" height="220" viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
      <!-- Outer Margin Box -->
      <rect x="80" y="20" width="600" height="175" rx="8" fill="#ffedd5" stroke="#ea580c" stroke-dasharray="4,3" stroke-width="2"/>
      <text x="100" y="42" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#c2410c">MARGIN (Clears area outside border; transparent)</text>

      <!-- Border Box -->
      <rect x="120" y="50" width="520" height="120" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <text x="140" y="70" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#92400e">BORDER (Goes around padding and content)</text>

      <!-- Padding Box -->
      <rect x="160" y="78" width="440" height="75" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="180" y="96" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#166534">PADDING (Clears an area around the content)</text>

      <!-- Content Box -->
      <rect x="220" y="105" width="320" height="35" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="380" y="127" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">CONTENT (Text, Images, Video) [width × height]</text>

      <text x="380" y="210" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Total Rendered Width = width + padding-left + padding-right + border-left + border-right + margin-left + margin-right</text>
    </svg>
  </div>
</div>

| CSS Layout Model | Dimensionality | Primary Design Use Case | Browser Positioning Mechanism |
| :--- | :--- | :--- | :--- |
| **Normal Flow (Block/Inline)**| 1D Vertical Stacking | Standard text articles, linear document flows | Default static document flow |
| **CSS Flexbox (`display: flex`)**| **1-Dimensional** (Row OR Column) | Navbars, button groups, card alignments, modal centers | Main-axis (`justify-content`) &amp; Cross-axis (`align-items`) |
| **CSS Grid (`display: grid`)** | **2-Dimensional** (Rows AND Columns) | Master dashboard templates, photo galleries, magazine grids | `grid-template-columns` and `grid-template-rows` tracks |

Fundamentals of Web Technologies • Unit-IV: CSS Study Notes

Box Model Exact Dimension Equations (Exam-Critical):

- **### 1. Standard (box-sizing:** content-box): Total Rendered Width = width + PL + PR + BL +

BR

- **### 2. Border-Box (box-sizing:** border-box): Total Rendered Width = width;   Actual

Content Width = width − (PL + PR + BL + BR)

### 3. Total Horizontal Layout Space Occupied = Total Rendered Width + ML + MR

- **WORKED EXAMPLE 5.1 (NUMERICAL):** COMPUTING BOX DIMENSIONS
- **Given:** A <div> has width: 300px; height: 150px; padding: 15px 20px; border: 5px
- **solid navy; margin:** 10px 25px;. Calculate total visible width, total visible height, and total
horizontal space occupied under (a) content-box and (b) border-box.

- **### 1. Extract Side Values:** PT=PB=15px, PL=PR=20px; Ball=5px; MT=MB=10px, ML=MR=25px.


- **### 2. Case (a) box-sizing:** content-box:

Visible Width = 300 + 20 + 20 + 5 + 5 = 350px.
Visible Height = 150 + 15 + 15 + 5 + 5 = 190px.
Total Horizontal Space (incl. margin) = 350 + 25 + 25 = 400px.

- **### 3. Case (b) box-sizing:** border-box:

Visible Width = 300px; Actual Content Width = 300 − (20 + 20 + 5 + 5) = 250px.
Visible Height = 150px; Actual Content Height = 150 − (15 + 15 + 5 + 5) = 110px.
Total Horizontal Space (incl. margin) = 300 + 25 + 25 = 350px.

### 5.2 Creating Columns using CSS (Multi-Column Layout)

- **Purpose:** CSS Multi-Column Layout splits a continuous block of content automatically into
balanced vertical columns—similar to newspapers and magazines—without manually creating
separate column <div> tags.
- **column-count:** Sets the exact number of columns (e.g., column-count: 3;).
- **column-width:** Suggests the optimal minimum width of each column (e.g., column-width:
180px;); the browser calculates how many columns fit cleanly.
- **columns Shorthand:** Combines both: columns: 200px 3; (browser uses at most 3 columns,
each at least 200px wide).
- **column-gap:** Sets the horizontal gutter spacing between adjacent columns (default: normal ≈
1em).
- **column-rule:** Draws a vertical divider line down the middle of the gap (does not consume extra
space). Shorthand for column-rule-width, column-rule-style, and column-rule-color (e.g.,
- **column-rule:** 2px solid #cbd5e1;).
- **column-span:** Applied to a child element (like an <h2> headline) — column-span: all; lets it
span across all columns; none keeps it inside one column.
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes

- **column-fill:** balance (default — equalizes content height across all columns) or auto (fills
columns sequentially until container height is reached).
- **Heading with column-span:** all (Spans Full Container Width)
Column 1 Column 2 Column 3
← column-width → gap + rule gap + rule column-count: 3
- **Figure 5.2:** CSS Multi-Column Container Anatomy with Spanning Header, Column Gaps, and Divider
Rules.
- **WORKED EXAMPLE 5.2:** MULTI-COLUMN CSS & EFFECTIVE COLUMN WIDTH
CALCULATION

> 💡 **Formula: Effective Column Width = [ Container Content Width − (N − 1) × column-gap**

] ÷ N
- **Numerical:** A newspaper container has content width 960px, column-count: 3, and column-
- **gap:** 30px. Find the width of each column.
- **Step 1:** Number of gaps = N − 1 = 3 − 1 = 2. Total gap width = 2 × 30px = 60px.
- **Step 2:** Effective Column Width = (960 − 60) ÷ 3 = 900 ÷ 3 = 300px per column (note:
column-rule occupies zero additional width).
- **.article { width:** 960px; column-count: 3; column-gap: 30px; column-rule: 1px
solid #94a3b8; }
- **.article h2 { column-span:** all; text-align: center; }

### 6. Displaying, Positioning, and Floating an Element


### 6.1 Displaying Elements (display & visibility)

- **Normal Document Flow:** By default, block-level elements (<div>, <p>, <h1>) start on a new
line and stretch to 100% available width, while inline elements (<span>, <a>, <strong>) sit side-
by-side and occupy only their content's width.
- **Overriding Behavior with display:** Converts any element's rendering box type—commonly
used to turn inline <a> links into button-like boxes (inline-block) or hide elements completely
(none).
- **Exam Favorite — display:** none vs. visibility: hidden: display: none removes the
element completely from the layout tree (zero space reserved); visibility: hidden hides the
element visually while preserving its empty layout box.
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes

---

#### 💻 Written Code Example & Layout: CSS Box Model: content-box vs border-box

<!-- CSS Box Model: content-box vs border-box -->
```html
<div class="box content-box">Box 1: content-box (Width 200 + 40 pad + 10 border = 250px!)</div>
<div class="box border-box">Box 2: border-box (Width stays strictly 200px!)</div>
```
```css
.box {
    width: 200px;
    height: 80px;
    padding: 20px;
    border: 5px solid #2563eb;
    margin: 10px 0;
    color: #ffffff;
    font-weight: bold;
    font-size: 11px;
}
.content-box { box-sizing: content-box; background: #ea580c; }
.border-box  { box-sizing: border-box;  background: #16a34a; }
```

**Visual Rendered Behavior:**
<div class='pdf-callout' style='background: #f0fdf4; border-left-color: #16a34a;'>🌐 <strong>Browser Output:</strong> Visually contrasts default content-box with modern border-box where padding and borders are absorbed inside the specified width.</div>

> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Total width in content-box = width + padding-left + padding-right + border-left + border-right.**
- **Best Practice: apply * { box-sizing: border-box; } globally across all projects.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Forgetting that margins can collapse vertically between adjacent elements.**
- **Expecting percentage widths to fit when padding is added under content-box.**

