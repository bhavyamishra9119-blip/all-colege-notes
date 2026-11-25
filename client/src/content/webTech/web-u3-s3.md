> 🟢 **EXAM WEIGHTAGE:** 26 - 30 Marks | Strictly Aligned with Official 2026–27 Curriculum


### 5.2 The HTML5 <audio> Element

- **Purpose:** Embeds sound tracks (music, podcasts, audio lectures) with native play/pause, timeline
scrubber, and volume buttons.
- **Standard Audio Formats:** 
MP3 (audio/mpeg): Universal support across every browser; compact lossy compression.
WAV (audio/wav): Uncompressed lossless studio quality; large file sizes.
Ogg Vorbis (audio/ogg): Open-source, patent-free lossy audio format.
- **Key Attributes:** controls (shows player UI), autoplay, loop (replays automatically),
muted, and preload (none | metadata | auto).
<audio controls preload="metadata">
<source src="lecture.mp3" type="audio/mpeg">
<source src="lecture.ogg" type="audio/ogg">
Your browser does not support the HTML5 audio element.
</audio>

### 5.3 The HTML5 <video> Element

- **Purpose:** Embeds video clips or tutorials with native play/pause, seek bar, volume, and fullscreen
controls.
- **Standard Video Formats:** 
MP4 / H.264 (video/mp4): Most widely supported industry standard across desktop and
mobile.
WebM (video/webm): Open-source, royalty-free high-efficiency web video format.
Ogg Theora (video/ogg): Open-source fallback format.
- **Extra Video-Only Attributes:** width, height, and poster="thumb.jpg" (shows a preview
thumbnail image before playback begins).
Captions & Subtitles (<track>): Attaches WebVTT (.vtt) closed captions or multi-language
subtitles directly to the player.
- **Modern Autoplay Policy:** Most modern browsers block autoplay with sound unless the
muted attribute is also present.
<video width="480" height="270" controls poster="preview.jpg">
<source src="demo.mp4" type="video/mp4">
<source src="demo.webm" type="video/webm">
<track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
Your browser does not support HTML5 video.
</video>

Parse <video>
or <audio>
Check Source #1
(e.g., MP4 / MP3)
No Check Source #2
(e.g., WebM / Ogg)
No Show Fallback
Unsupported Text
Yes Yes
Decode & Play Media Natively

> 🖼️ **Figure 4: Multi-Source Media Resolution and Fallback Flowchart in HTML5**

Attribute Applies To Exact Function
controls Audio &
Video
Displays native play, pause, timeline, volume & fullscreen controls
autoplay /
muted
Audio &
Video
Starts playback automatically (requires muted in modern
browsers)
loop Audio &
Video
Automatically restarts media from the beginning when it ends
preload Audio &
Video
- **Hints buffering strategy:** none, metadata, or auto
poster Video only URL of thumbnail image shown before video playback starts

### 6. HTML5 Canvas


- **### 6.1 Starting From Scratch:** What Is HTML5 Canvas?

- **Definition:** The <canvas> element creates a blank rectangular pixel-based drawing surface
(bitmap) inside a web page on which shapes, paths, images, animations, and charts are painted
dynamically using JavaScript.
- **Default Size:** If width and height attributes are omitted, a canvas defaults to 300 px × 150 px
with no visible border.
Coordinate System (Critical Exam Concept!):
The origin (0, 0) sits at the TOP-LEFT corner of the canvas.
X increases moving RIGHT; Y increases moving DOWNWARD (opposite of standard math
graphs!).

### 6.2 The 4-Step Canvas Drawing Workflow


- **### 1. Step 1 — Declare Container:** Add <canvas id="myCanvas" width="400" height="200">

</canvas> in the document.

### 2. Step 2 — Grab 2D Rendering Context: Call const ctx = canvas.getContext("2d"); — this

context object holds all drawing tools (brushes, colors, shapes).

### 3. Step 3 — Configure Paint Styles: Set ctx.fillStyle (fill color/gradient), ctx.strokeStyle

(outline color), and ctx.lineWidth.


### 4. Step 4 — Invoke Drawing Commands: Draw rectangles, lines, circular arcs, or text labels onto

the pixel grid.
<canvas id="board" width="300" height="150" style="border:1px solid #333;">
</canvas>
// JavaScript 2D Drawing Example:
const c = document.getElementById("board");
const ctx = c.getContext("2d");
ctx.fillStyle = "#0369a1";
ctx.fillRect(20, 20, 100, 60);             // Filled rectangle
ctx.beginPath();
ctx.arc(200, 75, 40, 0, 2 * Math.PI);      // Full circle (0 to 2π radians)
ctx.stroke();                              // Draw circle outline
(a) Canvas Coordinate System
(0, 0) +X
+Y
fillRect() arc()
moveTo() → lineTo() → stroke()
(b) 4-Step Drawing Pipeline

### 1. Create <canvas id="c">


### 2. Get ctx = c.getContext("2d")


### 3. Set fillStyle / strokeStyle


### 4. Draw Rects, Arcs, Paths, Text


> 🖼️ **Figure 5: HTML5 Canvas Top-Left Coordinate Grid and 4-Step Drawing Pipeline**


### 6.3 Essential Canvas 2D Context Methods Reference

Category 2D Context Method / Property What It Draws / Does
Rectangles fillRect(x, y, w, h)
strokeRect(x, y, w, h)
clearRect(x, y, w, h)
Draws solid filled rectangle; draws outlined rectangle;
erases rectangular area to transparent
Paths &
Lines
beginPath(),
moveTo(x,y),
lineTo(x,y), stroke(),
fill()
Starts a fresh path, lifts pen to start point, connects line
segments, then paints outline or interior
Circles &
Arcs
arc(cx, cy, r, start,
end)
Draws circular arc centered at (cx, cy) with radius r; full
circle = 0 to 2π (2 * Math.PI)
Text &
Styles
fillStyle,
strokeStyle,
font, fillText(txt, x,
y)
Sets fill/stroke color or gradient, sets font size/family, and
renders crisp text labels

---

#### 💻 Written Code Example & Layout: HTML5 2D Canvas Graphics API Drawing

<!-- HTML5 2D Canvas Graphics API Drawing -->
```html
<canvas id="myCanvas" width="300" height="120" style="border: 1px solid #cbd5e1;"></canvas>
```
```javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw blue rectangle
ctx.fillStyle = '#3b82f6';
ctx.fillRect(20, 20, 100, 70);

// Draw red circular arc
ctx.beginPath();
ctx.arc(190, 55, 35, 0, 2 * Math.PI);
ctx.fillStyle = '#ef4444';
ctx.fill();

// Draw text
ctx.fillStyle = '#0f172a';
ctx.font = '12px sans-serif';
ctx.fillText('Canvas 2D API', 150, 105);
```

**Visual Rendered Behavior:**
<div class='pdf-callout' style='background: #f0fdf4; border-left-color: #16a34a;'>🌐 <strong>Browser Output:</strong> Draws procedural raster graphics, shapes, gradients, and text directly onto the pixel canvas buffer using JavaScript.</div>

> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Canvas is raster-based (pixel manipulation); SVG is vector-based (XML elements).**
- **Canvas graphics do not exist as DOM elements and cannot be styled with CSS.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Setting canvas width/height via CSS instead of HTML attributes (causes distortion).**
- **Forgetting ctx.beginPath() before drawing new paths causing bleed.**

