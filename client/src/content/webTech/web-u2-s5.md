### 5. University Solved Examination Questions (Unit 2)

> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

**Figure 9:** Pixel Coordinate Geometry for Client-Side Image Mapping Shapes (rect, circle, poly)
<!-- Complete Client-Side Image Map Exam Code -->
<img src="workspace.jpg" alt="Study Desk" usemap="#deskmap" width="500"
height="300">
<map name="deskmap">
<area shape="rect"   coords="34,44,270,350" href="laptop.html" alt="Laptop">
<area shape="circle" coords="337,150,44"    href="coffee.html" alt="Coffee Cup">
<area shape="poly"   coords="400,50,460,90,440,180,380,140" href="notes.html"
alt="Notes">
</map>
shape
Value
coords Format Geometric Meaning
rect x1, y1, x2, y2 Top-left corner (x1,y1) and bottom-right corner
(x2,y2)
circle cx, cy, radius Center pixel (cx,cy) and circular radius in pixels
poly x1,y1, x2,y2, x3,y3,
...
List of all vertex coordinates closing an irregular polygon
default (None needed) Covers the entire remaining unmapped area of the image

### 12. Frames (<frameset>, <frame> & <iframe>)


#### 12.1 Classic HTML4 Frameset Architecture

**Definition:** HTML Frames divide a single browser window into multiple independent rectangular
panes, where each pane loads its own separate .html document with its own scrollbar.
Crucial Exam Rule (No <body> Tag!): A frameset document replaces <body> completely with
<frameset>! You must NEVER put <body> around <frameset> (only inside <noframes> as
fallback).
**Core Frameset & Frame Tags:** 
<frameset rows="..." cols="...">: Splits window horizontally (rows) or vertically
(cols) using pixels (150), percentages (25%), or wildcard remaining space (*).
<frame> (Empty Tag): Populates one pane inside <frameset>:
src="menu.html": Webpage file loaded inside that pane.
name="mainFrame": Gives the pane a target ID so links in a sidebar menu can open pages
inside it (<a href="ch1.html" target="mainFrame">)!
**noresize:** Locks frame divider so users cannot drag borders.
scrolling="yes | no | auto" & frameborder="0 | 1": Controls scrollbars and
divider lines.
<noframes>: Displays fallback message on very old browsers that do not support frames.
Fundamentals of Web Technologies • UNIT–2: Basics of HTML

**Nested Framesets:** Placing a second <frameset cols="25%,75%"> inside a row of an outer
<frameset rows="20%,80%"> creates a full top-banner + left-menu + right-content dashboard!
Frame 1 (rows="20%"): src="banner.html" | name="topFrame"
Frame 2 (cols="25%")
src="menu.html"
target="mainFrame"
Frame 3 (cols="75%" / "*"): name="mainFrame"
Initially loads src="welcome.html"
Clicking sidebar link loads new page ONLY in this pane!
**Figure 10:** Nested HTML Frameset Structure and Cross-Frame Link Targeting
<!-- Complete Nested Frameset Exam Example -->
<html>
<head><title>Nested Frameset Demo</title></head>
<frameset rows="20%, 80%">
<frame src="banner.html" name="topFrame" noresize scrolling="no">
<frameset cols="25%, *">
<frame src="menu.html" name="leftFrame">
<frame src="welcome.html" name="mainFrame">
</frameset>
<noframes><body>Your browser does not support frames.</body></noframes>
</frameset>
</html>

#### 12.2 Inline Frames (<iframe>) & Limitations of Classic Framesets

Inline Frame (<iframe> — Supported in HTML5!): Embeds an external webpage, Google
Map, or YouTube video directly inside a regular <body> without splitting the entire browser
**window:** 
**Syntax:** <iframe src="page.html" width="500" height="300" title="Embedded Page">
</iframe>
Why <frameset> Was Deprecated in HTML5:
Breaks browser bookmarking (URL bar never updates when inner panes navigate).
Confuses the browser Back button, printing, screen readers, and search engine indexing
(SEO).
Poor usability on small smartphone screens.
Feature Classic <frameset> / <frame> Inline Frame (<iframe>)
Placement in Document Replaces <body> completely Placed freely anywhere inside <body>
Window Layout Splits entire viewport into fixed panes Acts like a floating embedded rectangle
HTML5 Support Status Deprecated / Removed in HTML5 Fully Supported (used for maps, videos)
Fundamentals of Web Technologies • UNIT–2: Basics of HTML


### 13. Quick Exam-Revision Cheat Sheet (Unit–2 Basics of HTML)

Syllabus
Topic
Must-Memorize Syntax / Fact High-Yield Exam Tip
Dev. Steps &
Hosting
**7 Steps:** Analyze → Plan → Design →
Content → Code → Test → Deploy
Homepage file must be named
index.html; DNS maps Domain → IP.
Static vs.
Dynamic
Static = Fixed HTML (No DB) | Dynamic =
Server Script + Live DB
**Give examples:** Resume site (Static) vs.
Amazon / Portal (Dynamic).
Structure &
Tags
<html> → <head>(<title>) +
<body>(<p>, <h1>)
Distinguish Paired tags (<p>...</p>) vs.
Empty tags (<br>, <hr>, <img>).
Lists <ol type="A" start="3"> | <ul
type="square"> | <dl>/<dt>/<dd>
Always nest inner lists strictly inside an outer
<li> tag.
Creating
Links
<a href="..." target="_blank">;
Bookmarks use #id
**Know all 4 targets:** _self, _blank,
**_parent, _top + mailto:** .
Text &
Colors
Physical (<b>, <i>) vs. Logical
(<strong>, <em>); Hex #RRGGBB
Remember #FFFFFF = White, #000000 =
Black, <body bgcolor text>.
Images &
Mapping
<img src alt usemap="#m"> +
<map name="m"> + <area>
**Coordinates:** rect(x1,y1,x2,y2),
circle(cx,cy,r), poly(x1,y1,...).
Frames <frameset rows cols> + <frame
src name> (NO <body>!)
Compare deprecated <frameset> against
modern supported <iframe>.
Fundamentals of Web Technologies • UNIT–2: Basics of HTML