> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum

Parameter Inline CSS Embedded (Internal) CSS External CSS
Browser
Caching
Not cached independently Not cached independently Cached by browser (faster
repeat loads)
Pseudo-
classes
Not supported (e.g., no
- **:** hover)
Fully supported Fully supported
Best Use Case Quick one-off testing or email
templates
Standalone single-page
documents
All production multi-page
websites
- **WORKED EXAMPLE 2.1:** TRACING CSS CASCADE & PRECEDENCE ORDER
- **Problem:** Given style.css sets p { color: blue; font-size: 14px; }, an embedded
<style> block placed after <link> sets p { color: green; }, and the body contains <p
style="color: red;">Hello</p>. Determine the final rendered color and font-size.

- **### 1. Evaluate color:** Three rules conflict (External: blue, Embedded: green, Inline: red). Inline

CSS has highest specificity (1,0,0,0) ⇒  Final color = red.

- **### 2. Evaluate font-size:** Only External CSS defines font-size: 14px; neither Embedded nor

Inline overrides it ⇒  Final font-size = 14px (properties merge across sheets).

### 3. Text Formatting, Fonts, and Text Styles in CSS


### 3.1 CSS Text Formatting & Text Style Properties

- **color:** Sets the foreground color of text (inherited by child elements).
- **text-align:** Controls horizontal alignment of inline content inside a block container — values:
left, right, center, justify (stretches lines so left and right edges align flush).
- **text-align-last:** Aligns specifically the final line of a justified or multi-line paragraph (left,
right, center, justify).
- **text-decoration:** Adds decorative lines to text — shorthand for text-decoration-line (none,
underline, overline, line-through), text-decoration-style (solid, double, dotted,
dashed, wavy), and text-decoration-color. Commonly set to none to remove link underlines.
- **text-transform:** Changes letter casing visually without altering HTML content — uppercase,
lowercase, capitalize (first letter of each word), none.
- **text-indent:** Indents the first line of a text block by a length (e.g., 30px, 2em) or percentage;
negative values create a hanging indent.
- **letter-spacing & word-spacing:** Adjusts horizontal space between adjacent characters
(tracking) or between words (e.g., 2px, -0.5px, normal).
- **line-height:** Sets vertical line spacing (leading). Recommended value is a unitless multiplier
(e.g., 1.5 ⇒  1.5 × font-size), which scales safely on inheritance.
- **white-space:** Controls how whitespace and line breaks behave — normal (collapses spaces,
wraps text), nowrap (prevents wrapping), pre (preserves exact spaces & newlines like <pre>),
pre-wrap (preserves spaces and wraps).
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes

- **direction & vertical-align:** direction: ltr | rtl sets reading direction; vertical-align
aligns inline elements or table cells vertically (baseline, sub, super, top, middle, bottom).
- **text-shadow:** Adds drop shadow to text: text-shadow: h-offset v-offset blur-radius
color; (e.g., 2px 2px 4px #64748b).

### 3.2 CSS Font Properties & Generic Font Families

- **font-family (Font Stack):** Specifies a prioritized comma-separated fallback list of typefaces.
Multi-word font names must be enclosed in quotes, and the list must end with a generic family:
- **serif:** Small decorative strokes at letter ends (e.g., Times New Roman, Georgia) — classic
print feel.
- **sans-serif:** Clean edges without strokes (e.g., Arial, Helvetica, Verdana) — preferred for
screens.
- **monospace:** Every character occupies identical horizontal width (e.g., Courier New, Consolas)
— used for code.
- **cursive:** Mimics human handwriting (e.g., Brush Script).
- **fantasy:** Decorative display fonts for stylized titles (e.g., Impact).
- **font-style:** normal (upright), italic (true cursive-styled italic typeface), or oblique
(mechanically slanted normal glyph).
- **font-variant:** normal or small-caps (renders lowercase letters as smaller uppercase glyphs).
- **font-weight:** Controls stroke thickness via keywords (normal = 400, bold = 700, bolder,
lighter) or numeric scale from 100 (thin) to 900 (black) in steps of 100.
- **font-size:** Sets character height using keywords (xx-small to xx-large), absolute units (px,
pt), or relative units (em, rem, %).
- **font Shorthand Property:** Combines all font properties in one line. Exam Rule: font-size and
font-family are mandatory and must appear last in exact order:
- **font:** [font-style] [font-variant] [font-weight] font-size[/line-height] font-
family;
Typg
Ascender
x-Height
Baseline
Descender
line-height
(Leading Box)
indent
← letter-spacing gap
- **Figure 3.1:** CSS Typography Anatomy Showing Baseline, x-Height, Ascender/Descender, Leading (line-
height), and Indentation.

> 📊 **Table 3.1: Absolute vs. Relative CSS Font-Size Units & Standard Constants**

Fundamentals of Web Technologies • Unit-IV: CSS Study Notes

Unit Category Exact Definition / Reference Base Standard Conversion Constant
px Absolute
(Screen)
CSS reference pixel (1/96th of 1 inch) Default browser root = 16px
pt Absolute (Print) Typographic point (1/72nd of 1 inch) 1pt = 1.333px; 12pt = 16px
em Relative
(Parent)
Relative to the computed font-size of the
parent element
Compounds in nested elements!
rem Relative (Root) Relative strictly to the root <html> element's
font-size
1rem = 16px (default); never
compounds
% Relative
(Parent)
Percentage of the parent element's font-
size
100% = 1em; 150% = 1.5em
- **WORKED EXAMPLE 3.1 (NUMERICAL):** NESTED EM VS. REM FONT-SIZE CALCULATION
- **Given:** Root html { font-size: 16px; }, outer div { font-size: 1.5em; }, inner p.a {
- **font-size:** 1.5em; line-height: 1.5; }, and inner p.b { font-size: 1.5rem; } inside
that <div>. Compute pixel sizes.

### 1. Outer <div>: Parent is <html> (16px) ⇒  1.5 × 16px = 24px.


- **### 2. Inner p.a (using em):** Compounds relative to parent <div> (24px) ⇒  1.5 × 24px = 36px.

Its computed line-height = 1.5 × 36px = 54px.

- **### 3. Inner p.b (using rem):** References root <html> directly (16px) ⇒  1.5 × 16px = 24px (no

compounding).

### 4. Background and Color Gradients in CSS


### 4.1 CSS Color Models & Key Constants

- **Named Colors:** 140+ predefined W3C keywords (e.g., navy, teal, crimson, transparent).
Hexadecimal (#RRGGBB / #RGB): Base-16 notation for Red, Green, Blue channels ranging from
00 (0) to FF (255). Shorthand #RGB expands each digit twice (e.g., #09F ≡ #0099FF).
- **RGB & RGBA:** rgb(R, G, B) takes decimal integers 0–255 or percentages 0%–100%. rgba(R,
G, B, A) adds an Alpha opacity channel from 0.0 (fully transparent) to 1.0 (fully opaque).
- **HSL & HSLA:** hsl(H, S%, L%) defines Hue as a color-wheel angle (0° = Red, 120° = Green,
240° = Blue), Saturation (0% gray to 100% pure), and Lightness (0% black, 50% pure, 100%
white).
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes


### 4.2 CSS Background Properties

- **background-color:** Fills the element's content + padding + border area with a solid color (default:
transparent).
- **background-image:** Sets one or more images or gradients via url("bg.png") or gradient
- **functions (default:** none). Multiple comma-separated images stack front-to-back.
- **background-repeat:** Controls tiling — repeat (both axes, default), repeat-x (horizontal),
repeat-y (vertical), no-repeat (once), space, round.
- **background-position:** Anchors the starting coordinates — keywords (left top, center
center, right bottom), percentages (50% 50%), or lengths (20px 10px).
- **background-attachment:** scroll (moves with page content, default), fixed (locked to viewport
— creates parallax effect), local (scrolls with element's internal overflow).
- **background-size:** auto (intrinsic size), cover (scales proportionally to cover entire box, may
crop edges), contain (scales to fit completely inside box without cropping), or explicit width
height.
background-origin vs. background-clip: origin defines where the background image
positioning begins; clip defines how far the background paints (border-box, padding-box,
content-box).
- **background Shorthand:** background: color image position/size repeat attachment;

### 4.3 Color Gradients in CSS

- **Core Principle:** CSS gradients display smooth transitions between two or more specified color
stops. Technically, gradients generate a dynamic image and MUST be applied to background-
image (or background), never to background-color.

- **### 1. Linear Gradients:** Color transitions along a straight axis.

- **Syntax:** background-image: linear-gradient(direction | angle, color-stop1, color-
stop2, ...);
- **Directions:** to bottom (default = 180deg), to top (0deg), to right (90deg), to left
(270deg), or diagonal corners (to bottom right).
- **Color Stop Positions:** Explicit lengths or percentages control transition points (e.g., linear-
gradient(90deg, navy 0%, teal 40%, gold 100%)).
- **Repeating Linear:** repeating-linear-gradient(45deg, #1b365d 0px, #1b365d 10px,
#e2e8f0 10px, #e2e8f0 20px) creates striped patterns.

- **### 2. Radial Gradients:** Color radiates outward from a central origin point.

- **Syntax:** background-image: radial-gradient(shape size at position, color-stop1,
color-stop2, ...);
- **Shapes:** ellipse (default — adapts to box aspect ratio) or circle (equal horizontal and
vertical radii).
- **Size Keywords:** closest-side, farthest-side, closest-corner, farthest-corner
(default).
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes