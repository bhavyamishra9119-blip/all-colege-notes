> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

B.TECH • FUNDAMENTALS OF WEB TECHNOLOGIES • UNIT-I (6 HOURS)
- **Unit-I:** Internet, World Wide Web, Browsers,
Servers, HTTP & Web-Casting
Areas of Internet • Requirements for Working with Internet & WWW • Web Browsers • Web Servers • Hypertext
Transfer Protocol (HTTP) • Searching & Web-Casting Techniques
- **UNIT-I:** FUNDAMENTALS OF WEB TECHNOLOGIES (6 HRS)

### 1. Internet & WWW Basics

• Internet vs. WWW
• History & Web 1.0–3.0
• Application Areas
• HW, SW, ISP & Protocols
• IP, DNS & URL Anatomy

### 2. Core Web Architecture

• Web Browsers & Engines
• Web Servers (Static/Dyn)
• HTTP Request & Response
• HTTP Methods & Codes
• HTTPS & HTTP/1.1–3

### 3. Discovery & Delivery

• Search Engine Pipeline
• Crawling, Indexing, Rank
• Boolean Search Operators
• Web-Casting (Push/Pull)
• Streaming, RSS & Unicast



<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 CLIENT–SERVER WEB ARCHITECTURE & DATA FLOW</div>
  <div class="visual-diagram-container">
    <svg width="100%" height="220" viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="webArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
        </marker>
        <marker id="webArrowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/>
        </marker>
      </defs>

      <!-- Client Side -->
      <rect x="30" y="45" width="160" height="130" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="110" y="75" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">WEB CLIENT</text>
      <text x="110" y="95" font-family="Inter, sans-serif" font-size="10" fill="#3b82f6" text-anchor="middle">(Web Browser)</text>
      <rect x="45" y="110" width="130" height="45" rx="4" fill="#ffffff" stroke="#93c5fd" stroke-width="1"/>
      <text x="110" y="128" font-family="Inter, sans-serif" font-size="9.5" fill="#1e293b" text-anchor="middle">Chrome, Safari, Edge</text>
      <text x="110" y="142" font-family="Inter, sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Renders HTML, CSS, JS</text>

      <!-- Cloud / Internet Network -->
      <g transform="translate(260, 45)">
        <ellipse cx="70" cy="65" rx="60" ry="40" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
        <text x="70" y="60" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">INTERNET</text>
        <text x="70" y="78" font-family="Inter, sans-serif" font-size="9" fill="#64748b" text-anchor="middle">DNS + TCP/IP</text>
      </g>

      <!-- Server Side -->
      <rect x="440" y="45" width="150" height="130" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="515" y="75" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">WEB SERVER</text>
      <text x="515" y="95" font-family="Inter, sans-serif" font-size="10" fill="#d97706" text-anchor="middle">(Apache / Nginx)</text>
      <rect x="455" y="110" width="120" height="45" rx="4" fill="#ffffff" stroke="#fcd34d" stroke-width="1"/>
      <text x="515" y="128" font-family="Inter, sans-serif" font-size="9.5" fill="#1e293b" text-anchor="middle">Node.js, Python, Java</text>
      <text x="515" y="142" font-family="Inter, sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Business Logic Routing</text>

      <!-- Database -->
      <g transform="translate(640, 55)">
        <rect x="0" y="10" width="90" height="80" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="45" y="45" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">DATABASE</text>
        <text x="45" y="65" font-family="Inter, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">MySQL / PG</text>
      </g>
      <line x1="590" y1="105" x2="635" y2="105" stroke="#16a34a" stroke-width="1.5"/>

      <!-- Arrows -->
      <!-- Request: Client -> Server -->
      <path d="M 190 85 L 260 85 L 340 85 L 435 85" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#webArrow)"/>
      <text x="315" y="75" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">1. HTTP GET / POST Request 🠆</text>

      <!-- Response: Server -> Client -->
      <path d="M 440 135 L 340 135 L 260 135 L 195 135" fill="none" stroke="#16a34a" stroke-width="2" marker-end="url(#webArrowGreen)"/>
      <text x="315" y="152" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">🠄 2. HTTP 200 OK Response (HTML/JSON)</text>
    </svg>
  </div>
</div>

| Attribute | The Internet | The World Wide Web (WWW) |
| :--- | :--- | :--- |
| **Fundamental Nature** | Global physical network of interconnected computers, cables, routers & satellites | High-level distributed information service operating **on top** of the Internet |
| **Creation Origin** | ARPANET (1969), DoD / Vint Cerf & Bob Kahn | Invented by Sir Tim Berners-Lee at CERN (1989) |
| **Primary Protocols** | TCP, IP, UDP, BGP, ICMP | HTTP, HTTPS, WebSocket |
| **Addressing System** | IP Addresses (e.g. `192.168.1.1` or IPv6) | Uniform Resource Locators (URLs e.g. `https://...`) |
| **Metaphor** | The physical highway and asphalt roads system | The delivery trucks, courier packages & cars driving on the highway |



### 1. Introduction to Internet and World Wide Web (WWW)


### 1.1 What Is the Internet?

- **Definition:** The Internet (short for Interconnected Network) is a massive, global "network of
networks" linking billions of heterogeneous computers, servers, routers, smartphones, and IoT
devices across the world using standardized communication protocols—primarily the TCP/IP
protocol suite.
- **Decentralized Infrastructure:** No single company, country, or central computer owns or controls
the Internet. Data travels across redundant physical links (undersea fiber-optic cables, copper
lines, Wi-Fi, cellular towers, satellites) broken into small chunks called packets (Packet
Switching).
Key Services Running Over the Internet: The Internet is the underlying physical and networking
highway supporting numerous independent services—including the World Wide Web
(HTTP/HTTPS), Email (SMTP/IMAP/POP3), File Transfer (FTP/SFTP), Remote Login (SSH),
and Voice/Video Calling (VoIP).
- **Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes


### 1.2 What Is the World Wide Web (WWW)?

- **Definition:** The World Wide Web (WWW or simply "the Web") is a global information-sharing
system built on top of the Internet that allows users to access interlinked hypertext and
hypermedia documents (web pages containing text, images, audio, video, and clickable
hyperlinks) via a Web Browser.
Three Core Technical Pillars of the WWW:

### 1. URL (Uniform Resource Locator): A globally unique address specifying where a resource

- **resides on the Web (e.g., https:** //www.example.edu/notes/unit1.pdf).

### 2. HTTP / HTTPS (Hypertext Transfer Protocol): The application-layer request–response

protocol governing how browsers and web servers exchange web documents.

### 3. HTML (HyperText Markup Language): The standard markup language defining the structure

and hyperlinks of web pages.
- **Key Analogy (Exam Favorite):** Think of the Internet as the physical network of roads, highways,
and traffic rules, while the World Wide Web is just one major service (like delivery trucks carrying
hyperlinked books) traveling on top of those roads.

> 📊 **Table 1: Core Comparison Matrix — Internet vs. World Wide Web (WWW)**

Comparison
Parameter Internet World Wide Web (WWW)
Nature Global hardware & networking
infrastructure ("network of networks")
Software-based information system running
over the Internet
Primary Purpose Connects devices worldwide for raw packet
transmission
Publishes, links, and retrieves
hypertext/hypermedia web pages
Core Protocols TCP/IP (Transmission Control Protocol /
Internet Protocol)
HTTP / HTTPS (built on top of TCP/IP)
Origin / Pioneers ARPANET (1969, US DoD); TCP/IP by Vint
Cerf & Bob Kahn (1974/1983)
Invented by Sir Tim Berners-Lee at CERN
(1989–1991)
Dependency Can exist independently without the Web
(e.g., Email, FTP, SSH)
Strictly requires the Internet (or an IP
network) to operate
Governing
Bodies
IETF (protocols), ICANN (domains & IPs),
ISOC
W3C (World Wide Web Consortium —
HTML, CSS, Web standards)
- **Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes


### 2. Evolution and History of the World Wide Web


### 2.1 Historical Milestones (From ARPANET to Modern Web)

1969 — ARPANET (Precursor of the Internet): The U.S. Department of Defense's Advanced
Research Projects Agency launched ARPANET, connecting four university computers (UCLA,
Stanford, UCSB, Utah) using packet switching.
1974–1983 — Birth of TCP/IP & DNS: Vint Cerf and Bob Kahn designed TCP/IP; on January 1,
1983, ARPANET officially adopted TCP/IP as its standard protocol—widely regarded as the
birthday of the modern Internet. Paul Mockapetris introduced the Domain Name System (DNS) in
1983.
1989 — Tim Berners-Lee's Proposal at CERN: British computer scientist Sir Tim Berners-Lee
- **wrote "Information Management:** A Proposal" at CERN (Geneva, Switzerland) to help scientists
share linked documents seamlessly across incompatible computers.
1990–1991 — First Web Browser, Server & Website: Berners-Lee built the first web
browser/editor (WorldWideWeb, later renamed Nexus), the first web server (CERN httpd), and
published the world's first webpage (info.cern.ch) in August 1991.
1993 — Public Release & Mosaic Browser: CERN placed WWW software into the public
domain (royalty-free) in April 1993. Marc Andreessen and Eric Bina released NCSA Mosaic—the
first popular graphical web browser capable of displaying inline images alongside text—sparking
explosive public adoption.
1994 — Founding of W3C & Netscape Navigator: Tim Berners-Lee founded the World Wide
Web Consortium (W3C) at MIT to maintain open Web standards; Netscape Navigator
popularized SSL encryption and JavaScript (1995).
2000s–Present — Interactive, Mobile & Semantic Web: Rise of AJAX and social platforms
(Web 2.0), HTML5 & responsive mobile web, universal HTTPS encryption, cloud APIs, HTTP/2 &
HTTP/3, and AI/decentralized Semantic Web initiatives (Web 3.0).
- **Evolution Timeline:** From Packet-Switched ARPANET to Web 3.0
1969
ARPANET Launch
1983
TCP/IP & DNS
(Modern Internet)
1989–1991
- **Berners-Lee:** WWW
1993–1994
Mosaic & W3C
(Web 1.0 Era)
2004–2015
Web 2.0 (Social/AJAX)
2016–Present
Web 3.0 / Semantic
AI, Cloud, HTTP/3

> 🖼️ **Figure 2: Chronological evolution of the Internet and World Wide Web across foundational milestones and Web**

generations.
- **Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes


### 2.2 Generations of the World Wide Web (Web 1.0 vs. Web 2.0 vs. Web 3.0)

Web 1.0 (The Static / Read-Only Web, ~1991–2004): Consisted primarily of static HTML pages
published by organizations; users were passive consumers who could only read information with
minimal interactivity (e.g., early Yahoo directories, static brochure sites).
Web 2.0 (The Social / Read-Write Web, ~2004–Present): Transformed the Web into a
participatory platform powered by dynamic server backends, AJAX, CSS3, and APIs. Users both
read and create content—blogs, wikis, video sharing, social networks, and collaborative web apps
(e.g., Wikipedia, YouTube, GitHub, Google Docs).
Web 3.0 (The Semantic / Intelligent / Read-Write-Execute Web): Emphasizes machine-
understandable metadata (RDF, OWL, Linked Data), AI-driven personalization, ubiquitous IoT
connectivity, and decentralized user-owned identity/data architectures.

> 📊 **Table 2: Generation Comparison Matrix — Web 1.0 vs. Web 2.0 vs. Web 3.0**

Dimension Web 1.0 (Static Web) Web 2.0 (Social Web)
Web 3.0 (Semantic / Intelligent
Web)
Interaction
Mode
Read-Only (one-way
broadcast)
Read-Write (two-way
interactive)
Read-Write-Execute (intelligent &
autonomous)
Content Creator Website owners /
companies only
Users & communities
(UGC)
Users, AI agents & linked
knowledge graphs
Core
Technologies
Static HTML, HTTP/1.0,
CGI
AJAX, JavaScript,
XML/JSON, REST APIs
Semantic Web (RDF/OWL), AI/ML,
Decentralized APIs
Typical
Examples
Early Britannica Online,
static portals
Wikipedia, YouTube,
Facebook, Amazon
Knowledge graphs, AI assistants,
decentralized apps

### 3. Application Areas of the Internet

- **Why the Internet Is Ubiquitous:** By combining instant global reach with low transmission cost,
the Internet serves as the primary operational backbone across communication, commerce,
academia, governance, and engineering.

> 📊 **Table 3: Major Application Areas of the Internet — Core Services & Real-World Impact**

Application Domain Key Internet-Powered Services Core Benefits / Examples

### 1. Communication &

Collaboration
Email (SMTP/IMAP), Instant
Messaging, VoIP, Video
Conferencing
Real-time global text, voice, and video
collaboration (Gmail, Zoom, Slack, Teams).

### 2. E-Commerce &

Digital Marketing
Online marketplaces (B2C, B2B,
C2C), digital catalogs, payment
gateways
24×7 borderless buying/selling, order tracking,
personalized recommendations (Amazon,
Flipkart).
- **Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes

---

#### 💻 Written Code Example & Layout: Standard HTML5 Page Skeleton with Meta Tags

<!-- Standard HTML5 Page Skeleton with Meta Tags -->
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Official B.Tech Web Tech Portal">
    <title>My First Web Application</title>
</head>
<body>
    <header><h1>Welcome to Web Engineering</h1></header>
    <main><p>Client-server architecture fundamentals.</p></main>
    <footer><p>&copy; 2026 University Department</p></footer>
</body>
</html>
```

**Visual Rendered Behavior:**
<div class='pdf-callout' style='background: #f0fdf4; border-left-color: #16a34a;'>🌐 <strong>Browser Output:</strong> Renders a fully responsive page with proper viewport scaling and metadata for search engine crawlers.</div>

> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **<!DOCTYPE html> triggers HTML5 standards mode in browsers.**
- **The viewport meta tag is essential for responsive mobile layouts.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Omitting <!DOCTYPE html> triggering Quirks Mode in modern browsers.**
- **Missing charset='UTF-8' causing character encoding glitches.**

