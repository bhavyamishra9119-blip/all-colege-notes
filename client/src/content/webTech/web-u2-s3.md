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



<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 THE HTML DOCUMENT OBJECT MODEL (DOM) TREE HIERARCHY</div>
  <div class="visual-diagram-container">
    <svg width="100%" height="210" viewBox="0 0 760 210" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="720" height="180" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="380" y="38" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">HTML DOM Tree Structure (Nodes &amp; Branches)</text>
      <!-- Root: Document -->
      <rect x="330" y="50" width="100" height="26" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="380" y="67" font-family="Courier, monospace" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">&lt;html&gt; (Root)</text>
      <!-- Head & Body branches -->
      <line x1="380" y1="76" x2="230" y2="95" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="380" y1="76" x2="530" y2="95" stroke="#94a3b8" stroke-width="1.5"/>

      <!-- Head Node -->
      <rect x="180" y="95" width="100" height="26" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="230" y="112" font-family="Courier, monospace" font-size="10.5" font-weight="bold" fill="#92400e" text-anchor="middle">&lt;head&gt;</text>
      <line x1="230" y1="121" x2="230" y2="140" stroke="#94a3b8" stroke-width="1.5"/>
      <rect x="180" y="140" width="100" height="24" rx="3" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
      <text x="230" y="156" font-family="Courier, monospace" font-size="9.5" fill="#78350f" text-anchor="middle">&lt;title&gt;</text>

      <!-- Body Node -->
      <rect x="480" y="95" width="100" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="530" y="112" font-family="Courier, monospace" font-size="10.5" font-weight="bold" fill="#166534" text-anchor="middle">&lt;body&gt;</text>
      <!-- Children of Body -->
      <line x1="510" y1="121" x2="400" y2="140" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="530" y1="121" x2="530" y2="140" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="550" y1="121" x2="660" y2="140" stroke="#94a3b8" stroke-width="1.5"/>

      <rect x="360" y="140" width="80" height="24" rx="3" fill="#ffffff" stroke="#16a34a" stroke-width="1"/>
      <text x="400" y="156" font-family="Courier, monospace" font-size="9.5" fill="#166534" text-anchor="middle">&lt;h1&gt;</text>

      <rect x="490" y="140" width="80" height="24" rx="3" fill="#ffffff" stroke="#16a34a" stroke-width="1"/>
      <text x="530" y="156" font-family="Courier, monospace" font-size="9.5" fill="#166534" text-anchor="middle">&lt;p&gt;</text>

      <rect x="620" y="140" width="80" height="24" rx="3" fill="#ffffff" stroke="#16a34a" stroke-width="1"/>
      <text x="660" y="156" font-family="Courier, monospace" font-size="9.5" fill="#166534" text-anchor="middle">&lt;table&gt;</text>

      <text x="380" y="185" font-family="Inter, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">DOM APIs (document.getElementById, querySelector) traverse this exact hierarchical tree</text>
    </svg>
  </div>
</div>


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

---

#### 💻 Written Code Example & Layout: Hyperlinks, Anchor Targets & Email/Phone Protocol Schemes

<!-- Hyperlinks, Anchor Targets & Email/Phone Protocol Schemes -->
```html
<!-- Absolute External Link -->
<a href="https://www.w3.org" target="_blank" rel="noopener noreferrer">W3C Official Standards</a>

<!-- Relative Internal Document Link -->
<a href="notes/unit-2.html">Jump to Unit 2 Notes</a>

<!-- Same-Page Bookmark Jump -->
<a href="#summary-section">Scroll to Summary</a>

<!-- Protocol Schemes -->
<a href="mailto:support@university.edu?subject=Web%20Notes">Email Professor</a>
<a href="tel:+1234567890">Call Office</a>
```

**Visual Rendered Behavior:**
<div class='pdf-callout' style='background: #f0fdf4; border-left-color: #16a34a;'>🌐 <strong>Browser Output:</strong> Creates clickable hyperlinks that navigate to external URLs, internal pages, jump to specific section anchors, or trigger native email/phone apps.</div>

> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Always add rel='noopener noreferrer' when opening links with target='_blank' for security.**
- **Anchor IDs (#section) enable smooth jumping within the same page.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Empty href='#' causing page jump to top on click.**
- **Missing alt text on linked images.**

