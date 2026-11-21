> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum


### 6. Ordered and Unordered Lists (Plus Definition & Nested Lists)


### 6.1 The Three Standard HTML List Types


### 1. Ordered List (<ol>...</ol>): Displays items in a strict numbered or alphabetical

sequence (e.g., exam steps, recipes, top-10 rankings). Each entry uses <li>...</li> (List
Item).
- **type attribute values:** "1" (default Arabic 1,2,3), "A" (A,B,C), "a" (a,b,c), "I" (Roman
I,II,III), "i" (i,ii,iii).
- **start attribute:** Starts numbering from a custom integer (e.g., <ol type="A" start="3">
begins at C!).
- **reversed attribute:** Counts downward (e.g., 3, 2, 1).

### 2. Unordered List (<ul>...</ul>): Displays items with bullet symbols when order does not

matter (e.g., shopping lists, website menus).
- **type attribute values:** "disc" (default solid circle •), "circle" (hollow circle ○), "square"
(solid square ■).

### 3. Definition / Description List (<dl>): Ideal for glossaries — pairs each term (<dt>) with its

indented definition (<dd>).

- **### 4. Nested Lists:** Placing an inner <ul> or <ol> cleanly inside an outer <li>...</li> creates

multi-level outlines!
<!-- Nested Ordered & Unordered List Example -->
<ol type="I" start="1">
<li>Frontend Technologies
<ul type="square">
<li>HTML (Structure)</li>
<li>CSS (Styling)</li>
</ul>
</li>
<li>Backend Technologies</li>
</ol>
List Tag Child Tag(s) Key Attributes Default Visual Marker
<ol> (Ordered) <li> type="1|A|a|I|i", start,
reversed
Numbers (1., 2., 3.)
<ul>
(Unordered)
<li> type="disc|circle|square" Solid round bullet (•)
<dl>
(Definition)
<dt>,
<dd>
Standard global attributes No marker; indented
description
Fundamentals of Web Technologies • UNIT–2: Basics of HTML


### 7. Creating Links (Hyperlinks & Anchor Tag)


### 7.1 The Anchor Tag (<a>) & Essential Attributes

- **Syntax:** <a href="destination_URL" target="_blank" title="Tooltip text">Clickable
Text or Image</a>.
- **href (Hypertext Reference):** Mandatory attribute specifying the exact target address.
target Attribute (Where Link Opens):
- **_self (Default):** Opens destination in the same browser tab/frame.
- **_blank:** Opens destination in a brand-new browser tab/window.
_parent / _top: Opens in the parent frameset or breaks out to the full browser window.
- **frame_name:** Loads the page directly inside a specific named <frame> or <iframe>!

### 7.2 Five Practical Types of HTML Hyperlinks


### 1. External Link (Absolute URL): Full web address including protocol: <a

href="https://www.w3.org" target="_blank">Visit W3C</a>.

### 2. Internal Site Link (Relative URL): Short local file path within your own website folder: <a

href="notes/unit2.html">Unit 2</a> (use ../ to step up one parent folder).

### 3. Same-Page Bookmark Link (Fragment Anchor): Jumps smoothly to a section on the same long

page — assign id="top" on the target element and link with <a href="#top">Back to
Top</a>.

- **### 4. Email & Telephone Links:** Launches default mail app (<a

href="mailto:info@site.com">Email Us</a>) or phone dialer (<a
href="tel:+919876543210">Call</a>).

- **### 5. Clickable Image Link:** Nest an <img> tag inside <a>...</a>: <a href="home.html"><img

src="logo.png" alt="Home"></a>.
<a href="..." target="...">
External URL
https://...
Absolute
Internal Page
about.html
Relative
Bookmark
#section2
Same Page
Mail / Tel
- **mailto:** / tel:
Protocol
Image Link
<a><img></a>
Clickable Graphic

> 🖼️ **Figure 7: Five Core Categories of HTML Hyperlinks Using the Anchor (<a>) Tag**

Fundamentals of Web Technologies • UNIT–2: Basics of HTML


### 8. Text Styles, Structuring, Colors, Background & Formatting Text


### 8.1 Text Structuring Elements

Six Heading Levels (<h1> to <h6>): Define hierarchical document outlines — <h1> is the
largest, most important main title; <h6> is the smallest subheading.
- **Structural Containers & Breaks:** 
<p> (Paragraph), <br> (Line Break), <hr> (Horizontal Divider with width, size,
color).
<div> (Block-level grouping container) vs. <span> (Inline styling wrapper).
<pre> (Preformatted text — preserves exact spaces and newlines, ideal for code listings) and
<blockquote> (Indented long quotation).

### 8.2 Text Styles & Formatting Tags (Physical vs. Logical)

- **Physical Formatting Tags:** Instruct the browser purely on visual appearance (<b>, <i>, <u>,
<sub>, <sup>).
- **Logical (Semantic) Formatting Tags:** Convey meaning and emphasis to screen readers &
search engines in addition to styling (<strong>, <em>, <code>, <del>, <ins>).
Classic <font> Tag (HTML4) vs. Modern Inline Style:
- **HTML4:** <font face="Arial" size="4" color="blue">Styled Text</font> (size scale 1
to 7; default = 3).
- **Modern Standard:** <span style="font-family:Arial; font-size:18px;
- **color:** blue;">Styled Text</span>.
Tag Type Visual Output & Meaning Example
<b> vs.
<strong>
Physical /
Logical
Bold text (<strong> signals
high importance)
<strong>Warning</strong>
<i> vs. <em> Physical /
Logical
Italic text (<em> adds vocal
stress emphasis)
<em>Important</em>
<u> / <ins> Physical /
Logical
Underlined text / newly inserted
text
<u>Note</u>
<del> / <s> Logical /
Physical
Strikethrough (deleted / old price) <del> ₹ 500</del> ₹399
<sub> &
<sup>
Physical Subscript (lowered) & Superscript
(raised)
H2O and x2
<small> /
<mark>
Formatting Smaller fine print / highlighted
keyword
<mark>Key</mark>
Fundamentals of Web Technologies • UNIT–2: Basics of HTML