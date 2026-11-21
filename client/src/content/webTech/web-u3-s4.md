### 4. Canvas 2D Graphics API & Web Storage (localStorage vs Cookies)

> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum


#### 6.4 High-Yield Exam Comparison: HTML5 Canvas vs. SVG

Feature HTML5 Canvas (<canvas>) SVG (<svg>)
Graphic Type Raster (Pixel-based) — blurs if
zoomed far in
Vector (Math-based) — stays razor-sharp
at any zoom
How It Is Drawn Drawn imperatively via JavaScript API Declared with XML tags (<rect>,
<circle>, <path>)
DOM & Events Single pixel bitmap (no individual
shape events)
Every shape is a DOM node supporting
click/hover events
Performance Sweet
Spot
High-speed 2D games, animations,
10,000+ objects
Logos, icons, maps, responsive UI charts
(fewer nodes)

## PART III: WEB STORAGE, HTML5 FORMS & CREATING GRAPHS AND

CHARTS

### 7. HTML5 Web Storage


#### 7.1 Starting From Scratch: What Is Web Storage?

**Definition:** HTML5 Web Storage is a built-in browser API that allows web applications to store
structured key–value string pairs locally inside the user’s browser.
**Large Capacity:** Stores 5 MB to 10 MB per origin (versus only ~4 KB for HTTP Cookies).
**Zero Network Overhead:** Data stays strictly on the client machine and is NEVER automatically
attached to every HTTP server request — drastically boosting speed.
**Same-Origin Security Isolation:** Pages from siteA.com cannot read storage written by
siteB.com (Origin = Protocol + Domain + Port).

#### 7.2 The Two Types of Web Storage

1. window.localStorage (Persistent Storage)
Stores data with NO expiration date; data remains intact even after closing the tab, closing the
browser, or rebooting — cleared only via JavaScript or browser settings.
Shared across all tabs/windows of the same website origin (e.g., Dark Mode preference, shopping
cart items, offline draft notes).
2. window.sessionStorage (Temporary Tab Storage)
Stores data strictly for one single browser session (one tab) and is automatically deleted the
instant that tab or window is closed (survives page reload, not tab close).
Isolated per tab — opening the same site in two tabs creates two separate storage buckets (e.g.,
multi-step form progress, temporary checkout wizard).
Fundamentals of Web Technologies • UNIT–3: HTML5


#### 7.3 Core Web Storage API Methods & JSON Rule

Save / Update Value: localStorage.setItem("key", "value")
**Read Value:** localStorage.getItem("key") (returns null if missing).
**Delete Single Key:** localStorage.removeItem("key")  |  Wipe All Keys:
localStorage.clear().
Key Count / Lookup: localStorage.length and localStorage.key(index).
**String-Only Rule:** Web Storage stores strings only — to save JavaScript objects or arrays,
convert with JSON.stringify(obj) when saving and restore with JSON.parse(str) when
reading!
// Saving & Reading Plain Text and Objects in localStorage:
localStorage.setItem("theme", "dark");
const mode = localStorage.getItem("theme");     // "dark"
const user = { name: "Riya", sem: 1 };
localStorage.setItem("student", JSON.stringify(user));
const loaded = JSON.parse(localStorage.getItem("student"));
sessionStorage.setItem("step", "2");            // Cleared on tab close
Need Data Sent on
Every Server Request?
No
Yes
Use HTTP Cookies
(≤ 4 KB • Auth Tokens)
Must Data Survive
Closing Browser Tab?
Yes
No
Use sessionStorage
(5 MB • Cleared on Close)
Use localStorage
(5–10 MB • Permanent)

**Security Rule:**

Never store raw passwords!
**Figure 6:** Client-Side Storage Decision Flowchart (Cookies vs. sessionStorage vs. localStorage)
Feature HTTP Cookies localStorage sessionStorage
Storage Capacity ~4 KB 5 MB – 10 MB 5 MB
Expiration / Lifetime Manual expiry
date
Permanent (until deleted) Cleared when tab
closes
Sent With HTTP
Requests?
Yes (every
request)
No (client-side only) No (client-side only)
Scope Across Tabs Shared per
domain
Shared across same-origin
tabs
Isolated to one tab only
Fundamentals of Web Technologies • UNIT–3: HTML5


### 8. HTML5 Forms


#### 8.1 Why HTML5 Forms Are a Huge Upgrade

**Native Client-Side Validation:** Browsers check required fields, email formats, URLs, numeric
ranges, and regular-expression patterns automatically before form submission — cutting repetitive
JavaScript validation code dramatically.
Native UI Widgets & Smart Mobile Keyboards: Browsers render native calendar date pickers,
range sliders, and color palettes automatically, and smartphones switch to context-aware
keyboards (@ for email, numeric dialpad for phone).

#### 8.2 New HTML5 Input Types & Form Elements

Input Type / Element UI Widget / Purpose Built-In Behavior / Benefit
type="email" / url Email address / Web link
field
**Validates @ domain syntax or https:** //
prefix automatically
type="number" / range Numeric spinner / Visual
slider
Restricts numeric input with min, max, and
step
type="date" / time /
month
Native calendar / clock
picker
Prevents ambiguous date formats (DD/MM vs.
MM/DD)
type="color" Interactive OS color
picker
Returns standard hex color string (e.g.,
#c2410c)
type="tel" / search Phone number / Search
box
Opens phone dialpad on mobile; adds quick-
clear "×" icon
<datalist> Autocomplete suggestion
list
Lets users choose a preset suggestion OR type
custom text
<output> Displays live calculated
value
Semantically binds computed outputs to form
controls

#### 8.3 Essential HTML5 Form Validation Attributes

Attribute What It Enforces / Does Usage Example
required Blocks submission if field is left empty <input type="text" required>
placeholder Displays faint hint text inside empty field placeholder="Enter your email"
pattern Validates text against a Regular
Expression
pattern="[0-9]{10}" (10 digits)
min, max,
step
Sets numeric/date bounds & increments min="18" max="60" step="1"
autofocus Places typing cursor in input on page
load
<input type="search"
autofocus>
Fundamentals of Web Technologies • UNIT–3: HTML5

Attribute What It Enforces / Does Usage Example
autocomplete Enables or disables browser autofill
(on/off)
autocomplete="on"
multiple /
novalidate
Allows multi-file selection; bypasses form
check
<input type="file"
multiple>

### 1. User Fills

HTML5 Form

### 2. Clicks Submit

(Check novalidate)

### 3. Native Validation

required / type / pattern
Valid 4. Send Data
GET / POST Server
Invalid → Block Submit & Show Browser Tooltip Warning
**Figure 7:** HTML5 Native Form Validation & Submission Flowchart

#### 8.4 Complete HTML5 Form Example

<form action="/register" method="post">
<label>Email:</label>
<input type="email" name="mail" placeholder="name@college.edu" required
autofocus>
<label>Birth Date:</label>
<input type="date" name="dob" required>
<label>Rating (1–10):</label>
<input type="range" name="rate" min="1" max="10" value="8">
<label>Branch:</label>
<input list="branches" name="branch" placeholder="Select branch">
<datalist id="branches">
<option value="CSE"><option value="AIML"><option value="ECE">
</datalist>
<button type="submit">Register</button>
</form>

### 9. Creating Graphs & Charts in HTML5


#### 9.1 Three Ways to Build Graphs & Charts in HTML5

1. Native HTML5 Canvas Charts (Custom Pixel Drawing): Uses <canvas> and the 2D API
(fillRect, lineTo, arc, fillText) to compute pixel coordinates mathematically and draw
Bar, Line, or Pie charts from scratch — ideal for exams and live sensor plots.
2. Native HTML5 SVG Charts (Scalable Vector Drawing): Uses declarative XML tags (<rect>
for bars, <polyline> for trend lines, <path> for pie wedges); stays razor-sharp at any zoom
level and supports mouse hover events on individual bars.
Fundamentals of Web Technologies • UNIT–3: HTML5