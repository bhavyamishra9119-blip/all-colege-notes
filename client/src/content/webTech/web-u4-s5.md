### 5. Element Layouts, Navigation Bars & Solved Exam Questions

> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

**WORKED EXAMPLE 7.1:** HORIZONTAL NAVIGATION BAR USING CSS LIST STYLES
**Exam Question:** Write CSS to convert an HTML unordered list into a clean horizontal navigation
bar with hover effects.
ul.navbar {
**list-style-type:** none; /* Removes default bullets */
**margin:** 0; padding: 0;
**background-color:** #1b365d;
**overflow:** hidden;      /* Prevents parent collapse from floated li */
}
ul.navbar li {
**float:** left;           /* Arranges items horizontally */
}
ul.navbar li a {
**display:** block;        /* Makes entire padded box clickable */
**color:** #ffffff; text-decoration: none;
**padding:** 12px 18px;
}
**ul.navbar li a:** hover { background-color: #0f766e; }

### 8. Table Layouts in CSS


#### 8.1 Essential CSS Table Properties

**Table Borders:** Applying border: 1px solid #1b365d; to table alone draws only the outer
perimeter. To draw internal grid lines, apply the border to table, th, td together.
**border-collapse:** Controls whether adjacent cell borders remain distinct or merge:
**separate (Default):** Every cell draws its own complete 4-sided border, resulting in double lines
separated by a gap.
**collapse:** Adjacent cell borders merge into a single crisp shared line (standard for clean
professional tables).
**border-spacing:** Sets distance between adjacent cell borders (border-spacing: 8px; or
**border-spacing:** 10px 4px; for horizontal/vertical). Crucial Rule: Works only when border-
**collapse:** separate is active.
**empty-cells:** Controls whether borders and backgrounds are painted on cells containing no
content — show (default) or hide. Works only when border-collapse: separate.
**caption-side:** Places the HTML <caption> element either top (default) or bottom of the table.
**Cell Alignment & Spacing:** Use padding inside th, td for breathing room; text-align (left,
center, right) for horizontal alignment; vertical-align (top, middle, bottom) for vertical
alignment.
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes


**Readability Enhancements:**

**Zebra Striping:** tbody tr:nth-child(even) { background-color: #f1f5f9; }
**Interactive Row Highlight:** tbody tr:hover { background-color: #e2e8f0; }
**Responsive Overflow Handling:** Wrap wide tables in a <div style="overflow-x: auto;">
to enable horizontal scrolling on narrow viewports.

#### 8.2 The table-layout Algorithm (auto vs. fixed)

**table-layout:** auto (Default): The browser must download and scan every row and cell before
calculating final column widths. Column widths automatically expand to accommodate the widest
unbreakable content (e.g., long URLs).
**table-layout:** fixed: The browser calculates column widths purely from the declared width of
the <table> and its first row (<th> or <col> elements). If column widths are omitted, remaining
table width is divided equally among columns.
Performance & Predictability Benefit: table-layout: fixed renders large data tables
significantly faster (row-by-row streaming) and prevents long strings from distorting column
alignment.
**border-collapse:** separate
TH 1 TH 2
TD 1 (Double border) border-spacing: 8px
**border-collapse:** collapse
TH 1 TH 2
Single Shared Grid No Gap Between Cells
**table-layout:** auto (Content-Driven)
Scans ALL cells first; columns stretch
unevenly to fit longest cell content.
**table-layout:** fixed (Header-Driven)
Uses 1st row widths only; fast rendering
and strict predictable column widths.
**Figure 8.1:** CSS Table Border Models (separate vs. collapse) and Sizing Algorithms (auto vs.
fixed).
**Table 8.1:** Reference Comparison of table-layout: auto vs. table-layout: fixed
**Criterion table-layout:** auto (Default) table-layout: fixed
Column Width Basis Determined by widest content across
entire column
Determined solely by <table> & first-
row widths
Rendering Speed Slower (waits until full table loads) Faster (renders progressively row-by-
row)
Long Unbreakable
Words
Forces column wider; may break layout Obeys fixed width; wraps or clips via
overflow
Best Suited For Small tables with unpredictable data
lengths
Large data grids & strict multi-column
reports
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes

**WORKED EXAMPLE 8.1:** COMPLETE EXAM-READY CSS TABLE LAYOUT
table.marks {
**width:** 100%;
**table-layout:** fixed;        /* Predictable equal/explicit column widths */
**border-collapse:** collapse;  /* Merges double borders into single crisp
grid */
**caption-side:** bottom;       /* Places caption beneath table */
}
table.marks th, table.marks td {
**border:** 1px solid #cbd5e1;
**padding:** 8px 10px;
**text-align:** left;
**vertical-align:** middle;
}
**table.marks th { background-color:** #1b365d; color: #ffffff; }
**table.marks tbody tr:** nth-child(even) { background-color: #f8fafc; }
**table.marks tbody tr:** hover { background-color: #e2e8f0; }

### 9. High-Yield Quick-Revision Cheat Sheet (Exam Capsule)


#### 9.1 Master Formulas, Key Constants & Priority Rules

**Specificity Tuple (a, b, c, d):** Inline (1,0,0,0) > ID (0,1,0,0) > Class / Pseudo-class
(0,0,1,0) > Element (0,0,0,1) > Universal (0,0,0,0). !important overrides normal
cascade.
**Box Model (content-box):** Total Width = width + padding-left + padding-right +
border-left + border-right.
**Box Model (border-box):** Total Width = width; Content Width = width − (PL + PR + BL +
BR).
**Vertical Margin Collapse:** Adjacent vertical margins collapse to max(Mtop, Mbottom); horizontal
margins always add.
**Multi-Column Effective Width:** Wcol = [ Wcontainer − (N − 1) × column-gap ] ÷ N.
**Typography Constants:** Default browser root font = 16px = 1rem = 12pt; 1pt = 1/72 in ≈
**1.333px; font-weight:** normal = 400, bold = 700.
**Color Constants:** RGB channels = 0–255 (00–FF Hex); Alpha = 0.0 (transparent) to 1.0
**(opaque); Linear Gradient angles:** 0° = Up, 90° = Right, 180° = Down (default).

#### 9.2 Master CSS Shorthand Syntax Reference

**Table 9.1:** Quick-Revision Shorthand Order & Mandatory Rules
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes

Shorthand
Property Exact Value Order / Pattern Example & Exam Note
font style variant weight
size/line-height family
**font:** italic bold 14px/1.5 Arial,
sans-serif; (Size & family mandatory)
background color image position/size
repeat attachment
**background:** #fff url(a.png)
center/cover no-repeat;
margin /
padding
top right bottom left
(Clockwise TRBL)
**padding:** 10px 20px; (10px V, 20px H)
**border width style color border:** 2px solid #1b365d; (Style
mandatory to show border)
columns column-width column-count columns: 200px 3;
column-rule width style color column-rule: 1px dashed #64748b;
list-style type position image list-style: square outside none;

#### 9.3 Top 10 Common University Exam Mistakes to Avoid

1. **Mistake 1:** Writing background-color: linear-gradient(...) → Fix: Gradients are CSS
images; always use background-image or background.
2. **Mistake 2:** Applying top, left, or z-index to an element with default position: static → Fix:
Offsets and z-index work only on positioned elements (relative, absolute, fixed, sticky).
3. **Mistake 3:** Forgetting position: relative on the parent of an absolute child → Fix: Without a
positioned ancestor, the child jumps to the root <html> viewport edges.
4. **Mistake 4:** Setting width and height on a display: inline element (like <span>) → Fix:
**Switch to display:** inline-block or block first.
5. **Mistake 5:** Using border-spacing or empty-cells together with border-collapse: collapse
**→ Fix:** Both properties take effect only under border-collapse: separate.
6. **Mistake 6:** Putting <style> tags inside an external .css file → Fix: External .css files must
contain pure CSS rules only, zero HTML tags.
7. **Mistake 7:** Adding margins directly into box-sizing: border-box width → Fix: border-box
includes Content + Padding + Border only; Margin always stays outside.
8. **Mistake 8:** Confusing display: none with visibility: hidden → Fix: display: none
**collapses space; visibility:** hidden leaves an invisible blank space.
9. **Mistake 9:** Forgetting to clear floats before a footer or failing to fix parent container collapse →
**Fix:** Apply clear: both on the footer and ::after clearfix (or overflow: auto) on the parent.
10. **Mistake 10:** Omitting font-family or font-size in the font shorthand → Fix: Both are strictly
required; omitting either makes the entire declaration invalid and ignored by the browser.

#### 9.4 High-Probability B.Tech University Exam Questions (Unit-IV)

**Short-Answer (2–3 Marks):** Differentiate display: none vs. visibility: hidden; Define CSS
specificity; Explain list-style-position: inside vs. outside; State the purpose of box-
**sizing:** border-box; Differentiate table-layout: auto vs. fixed.
**Long-Answer (7–10 Marks):** Compare Inline, Embedded, and External CSS with examples and
cascade precedence; Explain the CSS Box Model with a neat labeled diagram and numerical
dimension problem; Discuss all five CSS position schemes with diagrams; Explain CSS Linear
& Radial Gradients and Background properties with syntax; Demonstrate CSS Multi-Column
Layout and Float/Clearfix mechanisms with code.
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes