> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum

```
┌────────────────────────────────────────────────────────────────────────┐
│               HTML5 SEMANTIC PAGE LAYOUT BLUEPRINT                     │
├────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ <header>  Site Branding, Logo, and Main Title                   │  │
│  ├──────────────────────────────────────────────────────────────────┤  │
│  │ <nav>     Primary Navigation Menu (Home, Notes, Syllabus)        │  │
│  ├───────────────────────────────────┬──────────────────────────────┤  │
│  │ <main>                            │ <aside>                      │  │
│  │   <article>                       │   Sidebar / Secondary info   │  │
│  │     <h2>Article Heading</h2>      │   Related links              │  │
│  │     <section>                     │   Ads / Quick links          │  │
│  │       <p>Content block 1...</p>   │                              │  │
│  │     </section>                    │                              │  │
│  │     <section>                     │                              │  │
│  │       <p>Content block 2...</p>   │                              │  │
│  │     </section>                    │                              │  │
│  │   </article>                      │                              │  │
│  ├───────────────────────────────────┴──────────────────────────────┤  │
│  │ <footer>  Copyright, University Affiliation, Terms & Privacy    │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

4. <article> (Self-Contained Independent Content)
Represents a complete, independent, self-contained composition that still makes full sense if
syndicated or shared elsewhere on its own (e.g., a news story, blog post, forum comment, or e-
commerce product card).
Nesting Relationship (<section> vs. <article>): Both directions are valid! A news
<section> ("Sports") can hold multiple <article> stories, AND a long <article> can be
split internally into thematic <section> chapters.
5. <footer> (Closing Metadata Container)
Defines the closing region of a page or an individual <section>/<article> — typically holding
copyright notices, author bio, contact links, privacy policy, and sitemap links.
<header> — Website Logo, Main Title & Tagline
<nav> — Home | Courses | Notes | Contact
<section> — Thematic Topic Group
<article> #1
(Independent Post)
<article> #2
(Independent Post)
<aside>
Sidebar / Ads /
Related Links
<footer> — Copyright, Author Info & Legal Links

> 🖼️ **Figure 3: Standard HTML5 Semantic Layout Wireframe**



### 3.3 Clean HTML5 Semantic Page Skeleton (Exam Code Template)

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>HTML5 Semantic Page</title>
</head>
<body>
<header><h1>Tech Portal</h1></header>
<nav><a href="#home">Home</a> | <a href="#blog">Blog</a></nav>
<main>
<section>
<h2>Latest News</h2>
<article>
<h3>HTML5 Overview</h3>
<p>Self-contained article content goes here.</p>
</article>
</section>
</main>
<footer><p>&copy; 2026 Tech Portal</p></footer>
</body>
</html>

### 4. HTML5 Elements (New Additions & Deprecated Tags)


### 4.1 Categorized Guide to New HTML5 Elements


### 1. Structural & Figure Elements

<main>: Wraps the unique dominant content of the document (use only once per page).
<aside>: Holds tangentially related side content (sidebars, pull quotes, related links).
<figure> & <figcaption>: Groups self-contained diagrams, photos, or code blocks together
with an official caption.

### 2. Text-Level Semantic & Measurement Elements

<mark>: Highlights relevant text (similar to a yellow highlighter marker for search terms).
<time datetime="...">: Encodes human-readable dates/times with a machine-readable ISO
timestamp.
<progress value="70" max="100">: Displays real-time completion progress of an active task
(e.g., file upload).
<meter value="0.8" min="0" max="1">: Displays a static scalar measurement within a known
range (e.g., disk quota or battery level).


### 3. Interactive, Media, Graphics & Form Elements

<details> & <summary>: Native clickable accordion that expands/collapses hidden notes with
zero JavaScript.
<dialog>: Built-in modal popup dialog container.
- **Media, Graphics & Forms:** <audio>, <video>, <source>, <track>; <canvas> & <svg>;
<datalist> & <output>.

### 4.2 Summary of New HTML5 Elements & Deprecated HTML4 Tags

HTML5 Element Category Purpose / Exam Example
<main> / <aside> Layout Primary page body vs. secondary sidebar content
<figure> + <figcaption> Media Grouping Pairs an image or diagram with a semantic caption
<progress> vs. <meter> Indicators Task completion bar (upload) vs. static gauge (disk %)
<details> + <summary> Interactive Native collapsible FAQ / disclosure widget
<mark> / <time> Inline Semantics Highlighted keyword / machine-readable timestamp
Removed / Deprecated HTML4
Tag
Reason Removed Modern HTML5 / CSS Replacement
<font>, <center>,
<big>, <strike>
Purely presentational (mixed
style into markup)
CSS (font-family, text-align,
text-decoration)
<frameset>, <frame>,
<noframes>
Broke Back button, URLs &
accessibility
CSS Flexbox / Grid layouts or
<iframe>
<applet>, <acronym> Obsolete Java plugins;
redundant tag
<object> / <canvas> and
<abbr>

- **## PART II:** HTML5 MULTIMEDIA (AUDIO & VIDEO) AND HTML5 CANVAS


- **### 5. HTML5 Multimedia:** Audio and Video


### 5.1 Native Browser Multimedia Concept

- **Core Breakthrough:** HTML5 embeds sound and video directly inside standard web pages using
<audio> and <video> tags — decoded natively by the browser with zero third-party plugins.
Multi-Format Fallback Strategy (<source>): Developers list multiple <source> tags inside
<audio> or <video>. The browser scans top-to-bottom and plays the first codec/format it
supports; fallback text displays only on ancient unsupported browsers.