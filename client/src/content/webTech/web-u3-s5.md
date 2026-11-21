> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum

Attribute What It Enforces / Does Usage Example
autocomplete Enables or disables browser autofill
(on/off)
autocomplete="on"
multiple /
novalidate
Allows multi-file selection; bypasses form
check
<input type="file"
multiple>

### 1. User Fills

HTML5 Form

### 2. Clicks Submit

(Check novalidate)

### 3. Native Validation

required / type / pattern
Valid 4. Send Data
GET / POST Server
Invalid → Block Submit & Show Browser Tooltip Warning

> 🖼️ **Figure 7: HTML5 Native Form Validation & Submission Flowchart**


### 8.4 Complete HTML5 Form Example

<form action="/register" method="post">
<label>Email:</label>
<input type="email" name="mail" placeholder="name@college.edu" required
autofocus>
<label>Birth Date:</label>
<input type="date" name="dob" required>
<label>Rating (1–10):</label>
<input type="range" name="rate" min="1" max="10" value="8">
<label>Branch:</label>
<input list="branches" name="branch" placeholder="Select branch">
<datalist id="branches">
<option value="CSE"><option value="AIML"><option value="ECE">
</datalist>
<button type="submit">Register</button>
</form>

### 9. Creating Graphs & Charts in HTML5


### 9.1 Three Ways to Build Graphs & Charts in HTML5


### 1. Native HTML5 Canvas Charts (Custom Pixel Drawing): Uses <canvas> and the 2D API

(fillRect, lineTo, arc, fillText) to compute pixel coordinates mathematically and draw
Bar, Line, or Pie charts from scratch — ideal for exams and live sensor plots.

### 2. Native HTML5 SVG Charts (Scalable Vector Drawing): Uses declarative XML tags (<rect>

for bars, <polyline> for trend lines, <path> for pie wedges); stays razor-sharp at any zoom
level and supports mouse hover events on individual bars.


### 3. HTML5 Charting Libraries (Production Apps): Popular libraries layered over Canvas (e.g.,

Chart.js) or SVG (e.g., D3.js, Google Charts) automate axis scaling, legends, tooltips, and
smooth animations.

### 9.2 Step-by-Step Mathematical Blueprint for Bar, Line & Pie Charts

A. Creating a Bar Chart (Comparing Discrete Categories)

### 1. Store labels and numeric values in arrays (e.g., values = [60, 120, 90, 140]).


### 2. Draw vertical Y-axis and horizontal X-axis baseline using moveTo() and lineTo().


### 3. Because Canvas Y grows downward, compute each bar’s top-left Y-coordinate by subtracting

- **height from the baseline:** ytop = baselineY − scaledHeight.

### 4. Loop through the data array calling ctx.fillRect(x, yTop, barWidth, scaledHeight) and

render labels with ctx.fillText().
B. Creating a Line Chart (Showing Trends Over Time)

### 1. Draw axes and grid lines; convert each data point (xi, yi) to Canvas pixel coordinates.


### 2. Call ctx.beginPath() and ctx.moveTo(x0, y0) at the first data point.


### 3. Loop through remaining points calling ctx.lineTo(xi, yi), then call ctx.stroke() to

connect the trend line.

### 4. Mark each vertex with small circular dots using ctx.arc(xi, yi, 4, 0, 2 * Math.PI).

C. Creating a Pie Chart (Showing Parts-of-a-Whole Proportions)

- **### 1. Sum all values:** Total = ∑ vi; initialize startAngle = 0.


### 2. For each slice value vi, calculate its wedge angle in radians: sliceAngle = (vi / Total) × 2π.


- **### 3. Draw the filled wedge:** beginPath() → moveTo(cx, cy) → arc(cx, cy, r, startAngle,

startAngle + sliceAngle) → closePath() → fill().

### 4. Advance startAngle += sliceAngle and repeat for every slice with a distinct fillStyle

color.
(a) Bar Chart (fillRect)
Q1 Q2 Q3 Q4
y = baseY − height
(b) Line Chart (lineTo)
Time / Sequence →
moveTo() → lineTo()
(c) Pie Chart (arc)
50%
30%
20%
θ = (val / total) × 2π

> 🖼️ **Figure 8: Geometric Construction Blueprints for Bar, Line, and Pie Charts in HTML5 Canvas**



### 9.3 Compact Canvas Bar Chart Logic Example

// Draw a 4-bar chart inside <canvas id="barChart" width="320" height="180">
const ctx = document.getElementById("barChart").getContext("2d");
const values = [60, 120, 90, 140];
const colors = ["#fb923c", "#0369a1", "#0f766e", "#c2410c"];
for (let i = 0; i < values.length; i++) {
ctx.fillStyle = colors[i];
let x = 30 + i * 65;
let y = 160 - values[i];      // Subtract height because Y grows downward
ctx.fillRect(x, y, 40, values[i]);
}

### 1. Raw Data

Arrays / JSON

### 2. Scale Math

Map to Pixels

### 3. Draw Axes

Grid & Ticks

### 4. Plot Shapes

Bars/Lines/Arcs

### 5. Labels

Text & Legend

> 🖼️ **Figure 9: End-to-End HTML5 Data-to-Chart Rendering Pipeline**

Chart Type Best Data Scenario Primary Canvas API Method
Bar / Column
Chart
Comparing quantities across distinct
categories
fillRect(x, y, w, h)
Line Chart Visualizing continuous trends over time moveTo(), lineTo(), stroke()
Pie / Donut Chart Showing parts-of-a-whole percentage share arc(cx, cy, r, start, end),
fill()
Scatter Plot Showing correlation between two numeric
variables
arc(x, y, radius, 0,
2*Math.PI)

### 10. Quick Exam-Revision Cheat Sheet (Unit–3 HTML5 Summary)

Syllabus Topic Key Syntax / Fact to Memorize High-Yield Exam Tip
HTML5 Intro &
HTML4 Limits
<!DOCTYPE html>; <meta
charset="UTF-8">
Highlight zero plugins (no Flash), semantic
tags, 5–10 MB storage & native validation.
Semantic Layout
Tags
<header>, <nav>, <section>,
<article>, <footer>
Always draw the HTML5 page wireframe
and explain <section> vs.
<article>.
HTML5 Elements <figure>, <mark>, <time>,
<progress>, <meter>,
<details>
Know deprecated HTML4 tags (<font>,
<center>, <frameset>,
<applet>).

Syllabus
Topic
Key Syntax / Fact to Memorize High-Yield Exam Tip
Audio &
Video
<audio controls>, <video
poster="...">, <source>,
<track>
- **Remember formats:** MP3/WAV/Ogg (Audio) and
MP4/WebM/Ogg (Video).
HTML5
Canvas
Default 300 × 150; getContext("2d");
origin (0,0) top-left
Know Canvas (pixel/raster, fast games) vs. SVG
(vector, crisp zoom, DOM events).
Web
Storage
localStorage (permanent) vs.
sessionStorage (tab close)
- **Methods:** setItem, getItem,
removeItem, clear; use
JSON.stringify for objects.
HTML5
Forms
- **Types:** email, date, number,
range, color; <datalist>
- **Attributes:** required, placeholder,
pattern, min/max, autofocus.
Graphs &
Charts
- **Bar:** fillRect | Line: lineTo | Pie: θ =
(v/T)×2π + arc
Explain subtracting bar height from baseline Y
because Canvas Y increases downward!