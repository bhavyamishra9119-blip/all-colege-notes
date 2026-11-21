### 4. Tables, Images, Image Mapping & IFrames

> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum


#### 8.3 Text Colors & Background Colors/Images

**Setting Colors & Backgrounds:** 
**Classic HTML4 Body Attributes:** <body bgcolor="#eef2ff" text="#1e293b"
background="pattern.png">.
**Modern Inline Style:** <body style="background-color:#eef2ff; color:#1e293b;
**background-image:** url('bg.jpg');">.

**Three Standard Ways to Specify Colors in HTML:**

Color System Syntax Format Examples (Red, Green, Blue, White, Black)

### 1. Color Names 140 predefined English

names
red, teal, navy, white, black

### 2. Hexadecimal

(Hex)
#RRGGBB (each pair
00 to FF)
#FF0000 (Red), #00FF00 (Green), #0000FF (Blue),
#FFFFFF (White), #000000 (Black)

### 3. RGB Decimal rgb(R, G, B) (each

0 to 255)
rgb(255, 0, 0) (Red), rgb(0, 128, 128) (Teal)

## PART III: PAGE LAYOUTS, IMAGES, IMAGE MAPPING AND FRAMES


### 9. Page Layouts in HTML


#### 9.1 What Is a Page Layout?

**Definition:** A Page Layout defines the visual arrangement of core interface regions (Header,
Navigation Bar, Main Content Columns, Sidebar, and Footer) so users can scan information
effortlessly.

#### 9.2 Evolution of HTML Page Layout Techniques

1. 1. Table-Based Layout (Classic HTML4 Approach):
Uses an invisible <table width="100%" border="0"> with colspan (to span header/footer
across columns) and rowspan (for sidebars).
**Limitation:** Rigid, mixes visual design with data markup, slow to render, and fails on small
mobile screens — reserve <table> strictly for tabular data today!
2. 2. Div-Based Layout (<div> + CSS Float/Position):
Replaces tables with lightweight <div id="header">, <div id="sidebar">, and <div
id="content"> blocks positioned side-by-side via CSS.
3. 3. Modern Semantic + CSS Flexbox / Grid Layout (Best Practice):
Uses meaningful HTML5 tags (<header>, <nav>, <main>, <aside>, <footer>)
combined with CSS Flexbox/Grid to adapt smoothly across phones, tablets, and wide monitors.
Fundamentals of Web Technologies • UNIT–2: Basics of HTML

(a) Classic HTML Table Layout
<td colspan="2"> Header Banner </td>
<td> Menu
(25%)
<td> Main Content
(75%)
<td colspan="2"> Footer </td>
(b) 3-Column Div / CSS Layout
Header + Top Navbar
Left Nav Main Article Right Ads
Full-Width Footer
**Figure 8:** Comparison of Classic Table-Based Page Layout vs. Modern Multi-Column Div/CSS Layout
Layout Method Main Tags Used Responsiveness Status
Table-Based <table>, <tr>, <td>
(colspan/rowspan)
Poor (rigid fixed grid) Legacy (use tables for
data only)
Div + CSS <div> with CSS Float / Position Good with Media
Queries
Widely used transition
method
Semantic +
Grid/Flex
<header>, <nav>, <main>,
<footer>
Excellent (Mobile-
First)
Modern industry
standard

### 10. Images and Their Attributes


#### 10.1 Embedding Images with <img>

**Empty Inline Tag:** The <img> tag embeds graphics into a webpage and has no closing tag.

**Two Mandatory Attributes:**

**src (Source):** Relative or absolute path/URL to the image file (e.g.,
src="images/campus.jpg").
**alt (Alternative Text):** Descriptive fallback text shown if the image fails to load, read aloud
by screen readers for visually impaired users, and indexed by Google Image Search!
**Syntax Example:** <img src="campus.jpg" alt="College Campus" width="400"
height="250" title="Main Block">
Attribute of <img> Function / Description
src File path or URL of the image (mandatory)
alt Fallback description for broken links, accessibility & SEO (mandatory)
width & height Sets rendered dimensions in pixels (prevents page layout jump while loading)
title Displays a popup hover tooltip when mouse rests over the image
usemap Links the image to a client-side <map> for clickable hotspots (usemap="#map1")
Fundamentals of Web Technologies • UNIT–2: Basics of HTML

Attribute of <img> Function / Description
border, align, hspace,
vspace
Classic HTML4 border thickness, left/right text wrapping &
horizontal/vertical spacing
Web Image Format Compression & Transparency Best Used For
JPEG (.jpg) Lossy; No transparency; small size Real-world photographs & complex scenes
PNG (.png) Lossless; Full alpha transparency Logos, UI screenshots, crisp diagrams
GIF (.gif) Lossless (256 colors); Supports animation Simple looping animations & small icons
SVG (.svg) Vector XML; Infinitely scalable Sharp icons, charts & responsive logos

### 11. Image Mapping


#### 11.1 Starting From Scratch: What Is an Image Map?

**Definition:** An Image Map is a single image divided into multiple clickable geometric regions
(hotspots), where clicking each different region navigates to a different destination URL (e.g.,
clicking states on a map of India, or clicking organs on a human anatomy diagram).

**Two Types of Image Maps:**

Client-Side Image Map (Standard — Uses <map> + <area>): Processed instantly inside
the user’s browser using usemap="#mapname"; works offline, shows link preview on hover, and
requires zero server load.
Server-Side Image Map (Legacy — Uses ismap): Sends raw (x, y) click coordinates
over the network to a server script (map.cgi?120,45); slow and rarely used today.

#### 11.2 How to Build a Client-Side Image Map (3-Step Formula)


### 1. Step 1 — Attach usemap to <img>: Write <img src="desk.jpg" alt="Desk"

usemap="#deskmap"> (note the mandatory leading # hash symbol!).

### 2. Step 2 — Define <map> Container: Match the exact name without the hash: <map

name="deskmap"> ... </map>.
3. **Step 3 — Add Clickable <area> Hotspots:** Each empty <area> tag defines one hotspot using
shape, coords (pixel coordinates measured from top-left 0,0), href, and alt!
(0,0) +X
+Y
(x1, y1)
(x2, y2)
shape="rect"
coords="x1,y1,x2,y2"
r
shape="circle"
coords="cx,cy,r"
shape="poly"
(x1,y1, x2,y2, ...)
Any irregular polygon
Fundamentals of Web Technologies • UNIT–2: Basics of HTML