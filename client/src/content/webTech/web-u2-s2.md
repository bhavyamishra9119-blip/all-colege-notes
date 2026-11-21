> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

A. Static Website (Direct File Fetch — Fast & Fixed)
Browser
HTTP Req / File
Web Server (Fixed HTML) No DB • Same Page for All
B. Dynamic Website (Live Server Script + Database Query)
Browser App Server (PHP/Node)
SQL
Database (MySQL / NoSQL)

> 🖼️ **Figure 4: Request–Response Architecture of Static Websites vs. Dynamic Websites**

Comparison Feature Static Website Dynamic Website
Content Delivery Fixed; identical for every visitor Changes dynamically per user, login, or live
data
Technologies Used HTML, CSS, basic client-side JS HTML/CSS/JS + PHP/Python/Node.js +
Database
Database Required? No Yes (MySQL, PostgreSQL, MongoDB)
Loading Speed &
Cost
Very fast; cheap hosting & easy to
build
Slightly slower (server processing); higher cost
Content Updates Manual editing of HTML source files Easy live updates via Admin CMS / Dashboard
Security Risk Lower attack surface (no DB to
hack)
Higher (must guard against SQL injection/XSS)

### 4. Structure of a Webpage and HTML Features


- **### 4.1 Starting From Scratch:** What Is HTML & Its Core Features?

- **Full Form & Origin:** HTML (HyperText Markup Language), created by Tim Berners-Lee (1991)
— a markup language (NOT a programming language!) that uses tags to describe webpage
structure and hyperlinks.
Six Core Features of HTML (Exam Standard Points):

- **### 1. Simple & Human-Readable:** Uses plain English-like tags (<p>, <title>, <img>) that

anyone can write in Notepad and view in a browser.

- **### 2. Platform-Independent:** The exact same .html file opens identically on Windows, macOS,

Linux, Android, and iOS.

- **### 3. Case-Insensitive Tags:** <BODY>, <Body>, and <body> work identically (though lowercase

is modern best practice).

- **### 4. Hypertext Navigation:** Connects pages globally across the World Wide Web via clickable

<a> hyperlinks.

### 5. Rich Media & Easy Integration: Supports images, lists, tables, frames, and seamlessly

integrates with CSS (styling) and JavaScript (logic).

- **### 6. Error-Tolerant Rendering:** Browsers never crash with fatal compile errors on minor markup

mistakes; they gracefully render what they understand.
Fundamentals of Web Technologies • UNIT–2: Basics of HTML


### 4.2 Standard Structure of an HTML Webpage

<!DOCTYPE html>                     <!-- Tells browser the HTML version -->
<html>                              <!-- Root container of entire webpage -->
<head>                            <!-- Metadata section (not shown in main body)
-->
<title>My First Webpage</title> <!-- Displayed on browser tab bar -->
</head>
<body>                            <!-- Visible webpage content area -->
<h1>Welcome to HTML</h1>
<p>This paragraph is visible inside the browser window.</p>
</body>
</html>
<html> (Root Element)
<head> (Page Metadata)
<title>, <meta>, <style>, <link>
(Browser tab title, charset, CSS links)
<body> (Visible Viewport)
<h1>, <p>, <ul>, <a>, <img>, <table>
(Everything seen & clicked by the user)

> 🖼️ **Figure 5: Hierarchical Document Tree Structure of an HTML Webpage**


- **## PART II:** HTML TAGS, LISTS, HYPERLINKS & TEXT FORMATTING


- **### 5. HTML Tags:** Header, Title, Body, and Paragraph


### 5.1 Tag Anatomy & Types of HTML Tags

- **HTML Tag vs. HTML Element:** 
A Tag is a keyword enclosed in angle brackets (e.g., opening <p> and closing </p>).
- **An Element is the complete unit:** Opening Tag + Attributes + Content + Closing Tag.
- **Attributes:** Extra name–value settings written inside the opening tag only: name="value" (e.g.,
<p align="center">).
Two Structural Categories of HTML Tags:

- **### 1. Paired (Container) Tags:** Always have both an opening tag and a matching closing tag

enclosing content (e.g., <html>...</html>, <p>...</p>, <b>...</b>).

### 2. Empty (Singular / Void) Tags: Self-contained with NO closing tag and no enclosed text

(e.g., <br> line break, <hr> horizontal rule, <img> image, <meta>).
Fundamentals of Web Technologies • UNIT–2: Basics of HTML

Anatomy of an HTML Element
<p align="center"> Hello HTML World! </p>
Opening Tag Attribute="Value" Element Content Closing Tag

> 🖼️ **Figure 6: Visual Anatomy of an HTML Element (Opening Tag, Attribute, Content, and Closing Tag)**


### 5.2 Core Document Tags Explained: Header, Title, Body & Paragraph


### 1. Header Section (<head>...</head>): First child inside <html>; stores page-level

information for browsers and search engines (<title>, <meta>, <style>, <link>,
<script>). Nothing inside <head> prints inside the main webpage canvas.

### 2. Title Tag (<title>...</title>): Placed strictly inside <head>; sets the text displayed on

the browser tab, browser bookmarks/favorites, and the blue clickable headline in Google search
results.

### 3. Body Tag (<body>...</body>): Encloses all visible content rendered in the browser viewport.

Classic HTML attributes of <body> (frequently asked in exams!):
- **bgcolor:** Sets solid page background color (e.g., bgcolor="#f0fdfa").
- **background:** Tiles a background image behind the page (e.g., background="bg.jpg").
- **text:** Sets default body text color (e.g., text="navy").
- **link, vlink, alink:** Control colors of unvisited, visited, and active (being clicked)
hyperlinks.

### 4. Paragraph Tag (<p>...</p>) & Line Control:

Defines a block-level paragraph with automatic vertical blank margin above and below.
- **Whitespace Collapsing Rule:** HTML collapses multiple consecutive spaces and Enter
keystrokes into a single space! To force a line break without starting a new paragraph, use
<br>; to draw a thematic divider line, use <hr>.
- **Alignment attribute:** align="left | center | right | justify" (modern equivalent: CSS
text-align).
Tag Category Characteristics Examples
Paired (Container)
Tags
Require opening & closing tag; wrap
inner content
<html>, <head>, <title>, <body>,
<p>, <h1>, <a>
Empty (Void) Tags Single opening tag only; no content or
closing tag
<br>, <hr>, <img>, <meta>,
<area>, <frame>
Block-Level Tags Always start on a new line & span
100% width
<p>, <h1>–<h6>, <div>, <ul>,
<ol>, <table>
Inline Tags Flow inside the same line; take only
needed width
<b>, <i>, <u>, <a>, <span>,
<img>
Fundamentals of Web Technologies • UNIT–2: Basics of HTML