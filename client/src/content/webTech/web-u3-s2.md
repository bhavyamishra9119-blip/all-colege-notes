> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum

<div class="pdf-roadmap-card">
  <div class="pdf-roadmap-badge">HTML5 SEMANTIC PAGE LAYOUT BLUEPRINT</div>
  <div class="pdf-roadmap-grid">
    <div class="pdf-roadmap-col col-blue">
      <div class="pdf-roadmap-col-header">&lt;header&gt; &amp; &lt;nav&gt;</div>
      <div class="pdf-roadmap-items">
        <div class="roadmap-item">• Site identity, branding logo, global primary navigation menu</div>
      </div>
    </div>
    <div class="pdf-roadmap-col col-purple">
      <div class="pdf-roadmap-col-header">&lt;main&gt; &amp; &lt;article&gt; / &lt;section&gt;</div>
      <div class="pdf-roadmap-items">
        <div class="roadmap-item">• Unique core content of the page, self-contained articles, thematic sections</div>
      </div>
    </div>
    <div class="pdf-roadmap-col col-maroon">
      <div class="pdf-roadmap-col-header">&lt;aside&gt; &amp; &lt;footer&gt;</div>
      <div class="pdf-roadmap-items">
        <div class="roadmap-item">• Related sidebars, ads, author bio, copyright notice, legal links</div>
      </div>
    </div>
  </div>
  <div class="pdf-figure-caption">Figure 3.1: Standard HTML5 Semantic Page Layout Hierarchy</div>
</div>

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

---

#### 💻 Written Code Example & Layout: HTML5 Audio & Video Players with Fallback Sources

<!-- HTML5 Audio & Video Players with Fallback Sources -->
```html
<!-- HTML5 Video with Multi-Format Source Resolution -->
<video width="320" height="180" controls poster="thumb.jpg">
    <source src="lecture1.mp4" type="video/mp4">
    <source src="lecture1.webm" type="video/webm">
    <p>Your browser does not support HTML5 video. <a href="lecture1.mp4">Download video</a>.</p>
</video>

<!-- HTML5 Audio Player -->
<audio controls preload="metadata">
    <source src="podcast.mp3" type="audio/mpeg">
    <source src="podcast.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```

**Visual Rendered Behavior:**
<div class='pdf-callout' style='background: #f0fdf4; border-left-color: #16a34a;'>🌐 <strong>Browser Output:</strong> Renders native browser media players with play/pause controls, volume sliders, timeline scrubbers, and fallback links for legacy clients.</div>

> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Always provide MP4 (H.264) and WebM formats for cross-browser video compatibility.**
- **The controls attribute is required to display native play/pause buttons.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Autoplaying audio with sound on page load (blocked by modern browser policies).**
- **Missing MIME type attributes on <source> tags.**

