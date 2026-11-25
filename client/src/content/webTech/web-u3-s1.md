> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum

FUNDAMENTALS OF WEB TECHNOLOGIES • UNIT–3 (6 HOURS) • POINT-WISE STUDY
NOTES
- **HTML5:** Semantic Web, Multimedia, Canvas, Storage,
Forms & Charts
- **Strictly Syllabus-Aligned Notes:** Complete from-scratch coverage of HTML5 Introduction & Advantages,
Limitations of HTML4, Header/Nav/Section/Article/Footer, HTML5 Elements, Multimedia (Audio & Video),
Canvas, Web Storage, HTML5 Forms, and Creating Graphs & Charts.

- **## PART I:** Core & Semantics


### 1. HTML5 Intro & Pros


### 2. Limitations of HTML4


### 3. Header, Nav, Section,

Articles & Footer

### 4. HTML5 Elements


- **## PART II:** Media & Graphics


### 5. HTML5 Multimedia

(Audio & Video Tags)

### 6. HTML5 Canvas

(2D Drawing & API)
• Canvas vs. SVG

- **## PART III:** Data & Apps


### 7. Web Storage

(local vs. session)

### 8. HTML5 Forms


### 9. Graphs & Charts

(Bar, Line, Pie)



<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 HTML4 DIV-SOUP VS. HTML5 SEMANTIC PAGE ARCHITECTURE</div>
  <div class="visual-diagram-container">
    <svg width="100%" height="230" viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
      <!-- HTML4 Legacy Div Soup -->
      <rect x="20" y="15" width="340" height="200" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="190" y="38" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#64748b" text-anchor="middle">HTML4 Legacy: Non-Semantic "Div Soup"</text>
      <rect x="40" y="50" width="300" height="25" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
      <text x="190" y="67" font-family="Courier, monospace" font-size="10" fill="#334155" text-anchor="middle">&lt;div id="header"&gt; / &lt;div id="nav"&gt;</text>
      <!-- Center -->
      <rect x="40" y="80" width="200" height="75" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
      <text x="140" y="115" font-family="Courier, monospace" font-size="10" fill="#334155" text-anchor="middle">&lt;div id="content"&gt;</text>
      <rect x="245" y="80" width="95" height="75" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
      <text x="292" y="115" font-family="Courier, monospace" font-size="10" fill="#334155" text-anchor="middle">&lt;div id="sidebar"&gt;</text>
      <rect x="40" y="160" width="300" height="25" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
      <text x="190" y="177" font-family="Courier, monospace" font-size="10" fill="#334155" text-anchor="middle">&lt;div id="footer"&gt;</text>
      <text x="190" y="205" font-family="Inter, sans-serif" font-size="9" fill="#dc2626" text-anchor="middle">❌ Meaningless to Screen Readers &amp; Search Engine Crawlers</text>

      <!-- HTML5 Semantic Page Layout -->
      <rect x="380" y="15" width="360" height="200" rx="8" fill="#f8fafc" stroke="#16a34a" stroke-width="1.5"/>
      <text x="560" y="38" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#166534" text-anchor="middle">HTML5 Modern Semantic Layout</text>
      <rect x="400" y="50" width="320" height="20" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/>
      <text x="560" y="64" font-family="Courier, monospace" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">&lt;header&gt; (Branding / Logo)</text>
      <rect x="400" y="73" width="320" height="18" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
      <text x="560" y="86" font-family="Courier, monospace" font-size="9.5" font-weight="bold" fill="#1d4ed8" text-anchor="middle">&lt;nav&gt; (Primary Navigation Links)</text>
      <!-- Main & Aside -->
      <rect x="400" y="94" width="220" height="65" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
      <text x="510" y="118" font-family="Courier, monospace" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">&lt;main&gt;</text>
      <text x="510" y="135" font-family="Courier, monospace" font-size="9.5" fill="#166534" text-anchor="middle">&lt;article&gt; / &lt;section&gt;</text>
      <rect x="625" y="94" width="95" height="65" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
      <text x="672" y="125" font-family="Courier, monospace" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">&lt;aside&gt;</text>
      <text x="672" y="140" font-family="Inter, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Sidebar/Ads</text>
      <rect x="400" y="162" width="320" height="20" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1"/>
      <text x="560" y="176" font-family="Courier, monospace" font-size="10" font-weight="bold" fill="#6b21a8" text-anchor="middle">&lt;footer&gt; (Copyright, Legal, Contact)</text>
      <text x="560" y="205" font-family="Inter, sans-serif" font-size="9.5" font-weight="bold" fill="#166534" text-anchor="middle">✔ Superior SEO, WCAG Accessibility &amp; Screen Reader Parsing</text>
    </svg>
  </div>
</div>

| Storage Mechanism | Storage Capacity | Expiration / Lifetime | Sent with Every HTTP Request? | Typical Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **`localStorage`** | **$5\text{ MB} - 10\text{ MB}$** per origin | **Permanent** (Until explicitly cleared via JS) | **No** (Client-side access only) | Theme settings, cached offline notes, user preferences |
| **`sessionStorage`**| **$5\text{ MB}$** per origin | **Tab Session Only** (Wiped when tab closes) | **No** (Client-side access only) | Multi-step form wizards, active test progress |
| **HTTP Cookies** | **$4\text{ KB}$** maximum per cookie | Configurable (`Expires` / `Max-Age`) | **Yes** (Automatically sent in HTTP header) | User auth JWT session tokens, tracking IDs |



- **## PART I:** INTRODUCTION, HTML4 LIMITATIONS, SEMANTIC LAYOUT &

ELEMENTS

### 1. Introduction and Advantages of HTML5


- **### 1.1 Starting From Scratch:** What Is HTML5?

- **Full Form & Definition:** HTML5 (HyperText Markup Language, 5th Revision) is the modern
standard language used to structure, organize, and present content on the World Wide Web.
- **Evolution & Standardization:** Jointly shaped by WHATWG (Web Hypertext Application
Technology Working Group) and W3C; finalized as a W3C Recommendation in October 2014 and
maintained continuously as the HTML Living Standard to build plugin-free interactive Web
Applications across desktops, tablets, and smartphones.
- **Ultra-Simple Document Header:** Uses the short declaration <!DOCTYPE html> (case-
insensitive; triggers Standards Mode) and <meta charset="UTF-8"> (supports almost every
human language and symbol cleanly).

Four Core Design Principles of HTML5

- **### 1. Backward Compatibility:** Existing HTML4 web pages continue rendering smoothly in modern

browsers without breaking.

- **### 2. Zero Plugin Dependency:** Native audio, video, and 2D/3D graphics run directly inside the

browser engine.

- **### 3. Standardized Error Handling:** All modern browsers parse unclosed or broken tags using one

uniform parsing algorithm.

### 4. Mobile & Accessibility First: Built-in support for touchscreens, smart form keyboards, semantic

screen readers, and offline usage.

### 1.2 Major Advantages of HTML5


### 1. Native Multimedia (No Flash or Silverlight): Built-in <audio> and <video> tags eliminate

external security-prone plugins, lower battery drain, and work on iOS/Android devices.

### 2. Cleaner Semantic Markup & Better SEO: Meaningful tags (<header>, <nav>, <article>,

<footer>) help search engines rank pages accurately and help screen readers guide visually
impaired users.

### 3. Rich Client-Side Web Storage: Replaces tiny ~4 KB cookies with 5–10 MB of fast local

storage (localStorage and sessionStorage) that never slows down HTTP network traffic.

### 4. Powerful Built-In 2D Graphics (<canvas> & <svg>): Enables interactive charts, animations,

photo editors, and browser games directly inside a web page.

### 5. Smart Forms & Native Validation: Built-in input types (email, date, number, range,

color) and attributes (required, pattern) validate user entries automatically without custom
JavaScript.

### 6. Cross-Platform & Mobile-Friendly: Works identically across Windows, macOS, Linux,

Android, and iOS; mobile browsers automatically pop up tailored keypads (e.g., numeric keypad
for tel, @ key for email).

- **### 7. Rich Modern Web APIs:** Integrates Geolocation, Drag-and-Drop, Web Workers (background

threads), and offline caching for app-like web experiences.
HTML 4.01 (1999 Era)
• Long SGML DOCTYPE header
• Generic <div id="..."> soup
• Needed Flash/Java for media
• Tiny 4 KB Cookies + JS forms
Shift
HTML5 (Modern Web App Platform)
• Clean <!DOCTYPE html>
• Semantic tags (SEO & A11y)
• Native <audio>, <video>, <canvas>
• 5–10 MB Storage + Smart Forms

> 🖼️ **Figure 2: Paradigm Shift From Document-Centric HTML4 to Application-Ready HTML5**



### 2. Limitations of HTML4


### 2.1 Why HTML4 Could No Longer Meet Modern Web Demands


### 1. No Native Audio or Video Support: Playing media required heavy third-party plugins (Adobe

Flash, QuickTime, Java Applets) that crashed browsers, caused security vulnerabilities, and failed
on smartphones.

### 2. Lack of Semantic Structural Tags: Developers built entire layouts out of meaningless <div

id="header"> and <div id="footer"> wrappers ("div soup"), leaving search engines and
screen readers unable to distinguish navigation from main content.

### 3. No Built-In Vector or 2D Bitmap Graphics: Drawing interactive charts, diagrams, or

animations required static images or external plugins — no <canvas> or seamless inline <svg>.

### 4. Severe Client-Side Storage Constraints: Only HTTP Cookies (~4 KB max) existed, and every

cookie traveled back and forth in every HTTP header, wasting bandwidth.

### 5. Weak Forms & Manual JavaScript Validation: Supported only basic inputs (text,

password, radio, checkbox); date pickers, sliders, and email checks had to be coded
manually in JavaScript.

### 6. Complex, Error-Prone DOCTYPE: Required memorizing long SGML DTD URLs (Strict,

Transitional, Frameset) that differed subtly across browsers.

### 7. Inconsistent Browser Error Handling: HTML4 never standardized how browsers should fix

malformed markup, causing identical pages to break differently in Internet Explorer, Firefox, and
Opera.

### 8. Poor Mobile & Offline Readiness: Designed in 1999 for static desktop documents — lacked

offline storage, geolocation, responsive semantics, and mobile keyboard hints.

- **### 2.2 High-Yield Exam Comparison:** HTML4 vs. HTML5

Feature HTML4 HTML5
DOCTYPE
Declaration
Very long SGML DTD URL (3
flavors)
- **Ultra-short:** <!DOCTYPE html>
Character
Encoding
Long http-equiv="Content-
Type" tag
- **Simple:** <meta charset="UTF-8">
Audio & Video Not built-in (needs Flash /
Silverlight)
Native <audio> and <video> tags
Graphics &
Charts
Static images or plugins only Native <canvas> and inline <svg>
Semantic Layout Generic <div> and <span> <header>, <nav>, <section>,
<article>, <footer>
Client-Side
Storage
HTTP Cookies only (~4 KB limit) localStorage & sessionStorage (5–10
MB)

Feature HTML4 HTML5
Form
Controls
Basic text/radio/checkbox + manual JS email, date, range, color + native
validation
Framesets Supported (<frameset>,
<frame>)
Removed (harms usability & bookmarking)
Error
Handling
Inconsistent across browsers Strict standardized parsing rules

- **### 3. Semantic Page Structure:** Header, Navigation, Section, Articles &

Footer

### 3.1 What Are Semantic Elements?

- **Definition:** A semantic element clearly describes its meaning and structural role to both human
developers and machines (browsers, Google search crawlers, assistive screen readers).
- **Non-Semantic vs. Semantic:** <div> and <span> tell nothing about their contents; <header>,
<nav>, <section>, <article>, and <footer> explicitly declare their purpose.

### 3.2 Detailed Guide to the Five Core Structural Tags

1. <header> (Introductory Banner Container)
Holds introductory content or navigational aids — site logo, main page title (<h1>), tagline,
search bar, or author/date info.
- **Key Exam Rule:** A page can contain multiple <header> elements (one for the whole site and
separate headers inside individual <article> blocks), but never nest a <header> inside a
<footer> or another <header>.
2. <nav> (Navigation Block)
Wraps a major block of navigation links (top navbar, sidebar menu, table of contents,
breadcrumb trail).
- **Key Exam Rule:** Not every link on a page belongs inside <nav> — reserve it strictly for primary
navigation blocks so screen-reader users can jump straight to menus or skip over them.
3. <section> (Thematic Content Group)
Defines a thematic grouping of related content within a document (e.g., Chapters of a report,
"About Us", "Features", "Contact").
- **Key Exam Rule:** Almost always includes its own heading (<h2>–<h6>); use <div> only when
you need a purely visual CSS styling wrapper with no thematic meaning.

---

#### 💻 Written Code Example & Layout: HTML5 Semantic Page Architecture Layout

<!-- HTML5 Semantic Page Architecture Layout -->
```html
<div class="semantic-container">
    <header><h1>University Engineering Portal</h1></header>
    <nav><ul><li><a href="#home">Home</a></li><li><a href="#courses">Courses</a></li></ul></nav>
    <main>
        <article>
            <h2>Lecture 1: Web Architecture</h2>
            <p>Article body containing syllabus concepts.</p>
        </article>
        <aside><h3>Related Links</h3><p>Prerequisites: C Programming</p></aside>
    </main>
    <footer><p>&copy; 2026 Academic Engineering</p></footer>
</div>
```
```css
header, nav, main, footer { padding: 10px; margin: 4px 0; border: 1px solid #cbd5e1; }
header { background: #eff6ff; } nav { background: #f1f5f9; }
main { display: flex; gap: 10px; } article { flex: 3; } aside { flex: 1; background: #fffbeb; }
```

**Visual Rendered Behavior:**
<div class='pdf-callout' style='background: #f0fdf4; border-left-color: #16a34a;'>🌐 <strong>Browser Output:</strong> Demonstrates modern HTML5 semantic elements (header, nav, main, article, aside, footer) replacing non-semantic div-soup.</div>

> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **HTML5 semantic elements describe their meaning to both browser and developer.**
- **Only one <main> element can appear per document.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Using multiple <main> elements on a single page.**
- **Using <section> or <article> purely as styling wrappers instead of <div>.**

