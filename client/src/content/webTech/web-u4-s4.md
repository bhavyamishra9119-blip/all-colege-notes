> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum

| Box Model Layer | Function | CSS Properties | Default Sizing Behavior |
|---|---|---|---|
| **Content Area** | Inner area where text, images, and child elements render | `width`, `height`, `min-width` | Defined by element or CSS dimensions |
| **Padding** | Transparent space between content and outer border | `padding`, `padding-top`, etc. | Clears an area around the content |
| **Border** | Visible boundary surrounding padding and content | `border`, `border-width`, `border-style` | Inherits or sets line style &amp; color |
| **Margin** | Transparent space separating element from neighbors | `margin`, `margin: auto` | Can collapse vertically with sibling margins |
<div class="pdf-figure-caption">Figure 4.1: The Standard CSS Box Model (Content, Padding, Border, and Margin)</div>


> 📊 **Table 6.1: Comparison Matrix of Display & Visibility Modes**

Property / Value Starts New
Line?
Respects width /
height? Vertical Margin & Padding? Space
Reserved?
- **display:** block Yes (before &
after)
Yes Yes (all 4 sides) Yes
- **display:** inline No (flows
inline)
No (ignored) Horizontal margins only;
top/bottom margin ignored
Yes (content
width)
- **display:** 
inline-block
No (flows
inline)
Yes Yes (all 4 sides) Yes
- **display:** none N/A (removed) N/A N/A No (collapsed)
- **visibility:** 
hidden
Retains
original type
Yes Yes Yes (blank
hole)

### 6.2 Positioning Elements (position, Offsets, and z-index)

- **Offset Properties:** top, right, bottom, and left shift a positioned element (any element
whose position is NOT static) relative to its reference container.
- **1. position:** static (Default): Element obeys normal document flow. Offset properties
(top/left/right/bottom) and z-index have no effect.
- **2. position:** relative: Element remains in normal flow and its original space is preserved,
but its visual box is shifted relative to its own normal position. Also creates a positioning reference
(containing block) for absolute child elements.
- **3. position:** absolute: Element is removed from normal flow (occupies zero flow space).
Positioned relative to its nearest positioned ancestor (an ancestor with relative, absolute,
fixed, or sticky). If none exists, it positions relative to the initial containing block (<html>
document).
- **4. position:** fixed: Removed from normal flow and anchored permanently to the browser
viewport. Stays locked in place even when the user scrolls (used for sticky navigation bars or
"Back to Top" buttons).
- **5. position:** sticky: Hybrid scheme—behaves as relative during normal scrolling until the
viewport reaches a specified offset threshold (e.g., top: 0), then locks like fixed until its parent
container scrolls out of view.
- **Stacking Order (z-index):** Controls overlap along the Z-axis (depth) for positioned elements.
Accepts integers (negative, 0, positive); a higher z-index paints on top of a lower one.
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes

- **1. position:** relative
Original Spot
Shifted Box
- **top:** 36px; left:50px
Original space preserved
- **2. position:** absolute
- **Parent (position:** relative)
Normal Sibling
Absolute Child
- **bottom:** 10; right:10
Removed from normal flow
- **3. position:** fixed
- **Fixed Header (top:** 0)
Browser Viewport
Page scrolls beneath ↓↑
Fixed Btn
Anchored to Viewport
- **Figure 6.1:** Visual Geometry of relative, absolute (inside Positioned Parent), and fixed Positioning.

> 📊 **Table 6.2: Summary Reference Matrix of All Five CSS position Values**

Value In Normal
Flow? Reference Coordinate System Offsets & z-index
Active?
Moves on
Scroll?
static Yes Normal document flow No Yes
relative Yes (space kept) Its own original normal position Yes Yes
absolute No Nearest positioned ancestor (else
<html>)
Yes Yes
fixed No Browser viewport window Yes No (locked)
sticky Yes (until
threshold)
Nearest scrolling ancestor /
viewport
Yes Stops at offset
- **WORKED EXAMPLE 6.1:** COORDINATE & STACKING TRACE FOR NESTED POSITIONING
- **Given:** A parent box .card (position: relative; width: 400px; height: 200px;) starts at
screen coordinates (50, 100). Inside it are Box A (position: absolute; top: 20px; left:
- **30px; z-index:** 2;) and overlapping Box B (position: absolute; top: 25px; left: 40px;
- **z-index:** 5;).
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes


- **### 1. Containing Block:** Because .card has position: relative, it acts as the origin (0, 0)

for both absolute children.

- **### 2. Screen Coordinates of Box A:** x = 50 + 30 = 80px, y = 100 + 20 = 120px.


- **### 3. Screen Coordinates of Box B:** x = 50 + 40 = 90px, y = 100 + 25 = 125px.


- **### 4. Stacking Visibility:** Since z-index of Box B (5) > Box A (2), Box B renders on top of Box

A in the overlapping region.

### 6.3 Floating and Clearing Elements (float & clear)

- **float Property:** Shifts an element horizontally to the far left or right edge of its containing block
while allowing surrounding inline text to wrap smoothly around it.
- **float:** left; — Pushes element to the left edge; subsequent content wraps along its right
side.
- **float:** right; — Pushes element to the right edge; subsequent content wraps along its left
side.
- **float:** none; — Default; element stays in normal document flow.
- **clear Property:** Prevents an element from sitting beside preceding floated boxes by forcing it
- **down onto a fresh line below them:** 
- **clear:** left; (clears left floats), clear: right; (clears right floats), clear: both; (clears all
preceding floats — standard for page footers), clear: none; (default).
The Parent Container Collapse Problem: Because floated children are taken out of normal flow,
a parent container holding only floated elements collapses to height: 0px (its border/background
shrinks flat above the floats).
Three Exam-Standard Solutions to Container Collapse:

- **### 1. Overflow Method:** Apply overflow: auto; or overflow: hidden; to the parent container to

establish a new Block Formatting Context (BFC).

### 2. Clearfix Hack (Recommended Best Practice): Add a CSS pseudo-element rule to the parent:

- **.clearfix:** :after { content: ""; display: table; clear: both; }

### 3. Empty Clearing Element (Legacy): Insert <div style="clear: both;"></div> as the final

child inside the parent.
- **1. float:** left + clear: both
Floated
Image
- **Footer (clear:** both)

### 2. Parent Collapse Problem

↑ Parent collapses to 0px!
Float Left Float Right
Children escape parent box

### 3. Clearfix / overflow: auto

Float Left Float Right
- **:** :after { clear: both; }
- **Figure 6.2:** Float Text Wrapping, Parent Container Height Collapse Bug, and Clearfix Resolution.
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes


### 7. List Styles in CSS


### 7.1 Core CSS List Properties

- **HTML List Types Targeted:** CSS list properties style both unordered lists (<ul>, default bullet =
disc) and ordered lists (<ol>, default marker = decimal), as well as individual <li> elements.
- **list-style-type:** Defines the shape or numbering system of the list marker:
- **Unordered Values:** disc (filled circle), circle (hollow ring), square (filled square), none
(removes marker completely).
- **Ordered Values:** decimal (1, 2, 3), decimal-leading-zero (01, 02, 03), lower-roman (i, ii,
iii), upper-roman (I, II, III), lower-alpha (a, b, c), upper-alpha (A, B, C), lower-greek (α, β,
γ).
- **list-style-image:** Replaces standard text/shape markers with a custom image icon via list-
- **style-image:** url("arrow.png"); (default: none). Always pair with a fallback list-style-type
in case the image fails to load.
- **list-style-position:** Controls where the marker renders relative to the <li> content box:
- **outside (Default):** Marker sits outside the content box in the left padding area; wrapped
second lines align neatly under the start of the text (hanging indent).
- **inside:** Marker becomes the first inline character inside the content box; wrapped second
lines flow directly underneath the marker.
- **list-style Shorthand:** Combines all three properties in one declaration:
- **list-style:** [list-style-type] [list-style-position] [list-style-image]; (e.g., list-
- **style:** square inside url("dot.png");).
Removing Default Browser Indentation: Browsers apply default left padding (~40px) and
vertical margins to <ul>/<ol>. Reset them with ul { list-style-type: none; margin: 0;
- **padding:** 0; } when building navigation bars.
- **list-style-position:** outside (Default)
First line of list item text
Wrapped second line aligns
flush with text (hanging).
- **list-style-position:** inside
First line of list item text
Wrapped second line flows
directly beneath the marker.
- **Figure 7.1:** Alignment Geometry of list-style-position: outside vs. list-style-position:
inside.
Fundamentals of Web Technologies • Unit-IV: CSS Study Notes

---

#### 💻 Written Code Example & Layout: CSS Positioning Mechanics: Static, Relative, Absolute & Fixed

<!-- CSS Positioning Mechanics: Static, Relative, Absolute & Fixed -->
```html
<div class="parent-relative">
    Parent Container (position: relative)
    <div class="child-absolute">Absolute Child (top: 5px, right: 5px)</div>
</div>
```
```css
.parent-relative {
    position: relative;
    width: 280px;
    height: 100px;
    background: #eff6ff;
    border: 2px dashed #3b82f6;
    padding: 10px;
}
.child-absolute {
    position: absolute;
    top: 5px;
    right: 5px;
    background: #dc2626;
    color: #ffffff;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 10px;
}
```

**Visual Rendered Behavior:**
<div class='pdf-callout' style='background: #f0fdf4; border-left-color: #16a34a;'>🌐 <strong>Browser Output:</strong> Demonstrates absolute positioning anchored relative to the nearest positioned ancestor (position: relative).</div>

> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **position: fixed is anchored to the viewport and remains visible during scrolling.**
- **position: absolute looks upward for the nearest ancestor with non-static position.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Using position: absolute without a relative parent, causing the element to anchor to <html>.**
- **Uncontrolled z-index wars without established stacking contexts.**

