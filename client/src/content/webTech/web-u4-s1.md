### 1. CSS Fundamentals, Anatomy & 3 Inclusion Methods

> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

B.TECH (1ST YEAR) • FUNDAMENTALS OF WEB TECHNOLOGIES • UNIT-IV (6 HOURS)
Cascading Style Sheets (CSS)
Comprehensive, Point-Wise, Exam-Ready Technical Study Notes with Diagrams, Formulas & Worked
Examples
**Prescribed Unit-IV Syllabus:** CSS: Style sheets, text formatting using CSS, Embedded CSS, Inline CSS
and external CSS, Background and Color Gradients in CSS, Fonts and text Styles, Creating Boxes and
Columns using CSS, Displaying, Positioning and floating an element, List Styles, Table Layouts.
**UNIT-IV:** CSS SYLLABUS

### 1. Core & Inclusion

- Style Sheet Basics
- Inline CSS
- Embedded CSS
- External CSS

### 2. Visual Styling

- Text Formatting
- Fonts & Text Styles
- Backgrounds
- Color Gradients

### 3. Layout & Flow

- Boxes (Box Model)
- Multi-Columns
- Display & Position
- Float & Clear

### 4. Element Layouts

- List Style Types
- List Images/Pos.
- Table Borders
- Table Layouts
**Figure 1.1:** Master Syllabus Architecture Map of Unit-IV (Cascading Style Sheets).

### 1. Style Sheets & CSS Fundamentals


#### 1.1 What is a Style Sheet?

**Definition:** Cascading Style Sheets (CSS) is a declarative style sheet language developed by
the W3C (World Wide Web Consortium) to control the visual presentation, layout, typography,
colors, and formatting of markup documents such as HTML.
**Separation of Concerns:** HTML defines the semantic structure and content (headings,
paragraphs, tables, lists), whereas CSS defines the visual appearance (colors, fonts, spacing,
positioning).
**Meaning of "Cascading":** When multiple style rules target the same HTML element, the browser
resolves conflicts using a deterministic priority hierarchy called the Cascade (based on origin,
importance, specificity, and source order).

**Key Advantages over Pure HTML Styling:**

**Consistency:** One external style sheet enforces uniform branding across hundreds of pages.
**Reduced Bandwidth:** Eliminates repetitive inline HTML formatting tags (such as obsolete
<font> tags), making pages faster to load.
**Easy Maintenance:** Modifying a single CSS rule updates every linked page automatically.
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes


#### 1.2 Browser CSS Processing Mechanism

1. **HTML Parsing:** The browser parses the HTML file and builds the DOM (Document Object
Model) tree representing all page elements.
2. **CSS Parsing:** The browser reads all CSS rules (external, embedded, and inline) and constructs
the CSSOM (CSS Object Model).
3. **Style Resolution (Cascade):** Matching rules are applied to each DOM node; conflicts are
resolved via specificity and source order.
4. **Layout & Painting:** The browser calculates exact box geometry (width, height, position) and
paints pixels onto the screen.

#### 1.3 Anatomy of a CSS Rule-Set

**Selector:** Identifies which HTML element(s) the styling rule targets (e.g., h1, .intro, #header).
**Declaration Block:** Enclosed within curly braces { ... }; contains one or more declarations
separated by semicolons (;).
**Declaration:** A single property: value; pair separated by a colon (:).
**CSS Comments:** Enclosed between /* and */; ignored by browsers and valid across single or
multiple lines.
**h1 { color:** navy ; font-size : 24px ; }
Selector Property Value Declaration 2 (Property : Value;) Terminator (;)
Declaration Block { ... }
**Figure 1.2:** Syntax Anatomy of a Standard CSS Rule-Set.

#### 1.4 Fundamental CSS Selectors & Specificity Weights

**Specificity Rule:** Every selector carries a 4-tuple specificity weight written as (a, b, c, d), where a
= Inline style, b = ID selectors, c = Class/Pseudo-class/Attribute selectors, and d =
Element/Pseudo-element selectors.
**Comparison Rule:** Compare left to right (a first, then b, then c, then d). A higher number in an
earlier column always wins regardless of lower columns.
**Table 1.1:** Classification Matrix of Core CSS Selectors
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes

Selector Type Syntax Example Matching Scope Specificity
(a,b,c,d)
**Universal * { margin:** 0; } Matches every HTML element on the page (0, 0, 0, 0)
Element
(Type)
**p { color:** black; } Matches all instances of the given HTML
tag
(0, 0, 0, 1)
**Class .note { font-size:** 
14px; }
Matches all elements having
class="note" (reusable)
(0, 0, 1, 0)
**ID #banner { width:** 
100%; }
Matches the single unique element with
id="banner"
(0, 1, 0, 0)
Grouping h1, h2, p { ... } Applies identical declarations to multiple
selectors
Evaluated per
selector
Descendant div p { ... } Matches all <p> nested anywhere inside
<div>
(0, 0, 0, 2)
**Pseudo-class a:** hover, tr:nth-
child(even)
Matches elements in a specific state or
structural position
(0, 0, 1, 1)

### 2. Embedded CSS, Inline CSS, and External CSS


#### 2.1 Three Methods of Inserting CSS into HTML


### 1. Inline CSS:

**Definition:** Style rules are written directly inside an individual HTML element's opening tag
using the global style attribute.
**Scope:** Applies strictly to that single element only.
**Priority:** Highest normal cascade priority (1, 0, 0, 0); overrides both Embedded and
External CSS.
**Limitation:** Violates separation of content and style, bloats HTML code, cannot style pseudo-
**classes (like:** hover), and is difficult to maintain.

### 2. Embedded (Internal) CSS:

**Definition:** Style rules are grouped inside a <style> element placed within the <head> section
of an HTML document.
**Scope:** Applies to all matching elements across that entire single HTML page.
**Use Case:** Ideal for single-page standalone documents or page-specific style overrides.
**Limitation:** Styles cannot be shared across multiple HTML files without duplicating code.

### 3. External CSS:

Fundamentals of Web Technologies • Unit-IV: CSS Study Notes

4. **Definition:** All CSS rules are stored in a separate plain-text file with a .css extension
(containing NO HTML tags) and linked to HTML documents via the <link> tag inside <head>.
**Syntax:** <link rel="stylesheet" type="text/css" href="styles.css"> (alternatively,
@import url("styles.css"); inside a style sheet).
**Scope:** Applies to every HTML page in a website that links to the .css file.
**Advantages:** Maximum reusability, clean HTML markup, centralized maintenance, and
browser caching (the browser downloads the .css file once and reuses it on subsequent
pages).
<!-- 1. External CSS (inside <head>) -->
<link rel="stylesheet" href="main.css">
<!-- 2. Embedded / Internal CSS (inside <head>) -->
<style>
**p { color:** navy; font-size: 16px; }
</style>
<!-- 3. Inline CSS (inside <body> tag) -->
<p style="color: darkred; font-weight: bold;">Inline overrides Embedded &
External.</p>
Cascade Precedence (Highest to Lowest)
1. !important Declaration (Overrides All)

### 2. Inline CSS (style="..." attribute)


### 3. Embedded & External (Last Loaded Wins)


### 4. Browser Default (User-Agent Sheet)

Equal priority? Higher Specificity wins;
equal specificity? Later rule in source wins.
Method Selection Flowchart
Shared across multiple pages?
YES
Use External CSS
NO
Only 1 element?
YES
Inline CSS
NO
Embed
**Figure 2.1:** CSS Cascade Precedence Stack (Left) and Inclusion Method Decision Flowchart (Right).
**Table 2.1:** Comprehensive Comparison Matrix — Inline vs. Embedded vs. External CSS
Parameter Inline CSS Embedded (Internal) CSS External CSS
Placement Inside opening HTML tag via
style attribute
Inside <style>...
</style> in <head>
Separate .css file linked
via <link>
Scope Single HTML element only Single HTML web page Entire multi-page website
Cascade
Priority
Highest (overrides Embedded
& External)
Depends on order relative to
<link>
Depends on order relative to
<style>
Code
Reusability
None (must repeat per
element)
Low (reusable within one
page only)
Maximum (reusable across
all linked pages)
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes