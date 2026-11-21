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

> 🖼️ **Figure 1: Complete Syllabus Roadmap of Unit–3 (HTML5)**


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