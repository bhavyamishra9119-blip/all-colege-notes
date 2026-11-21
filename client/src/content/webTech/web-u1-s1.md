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

> 🖼️ **Figure 1: Master Topic Map covering all eight syllabus modules of Unit-I: Fundamentals of Web Technologies.**


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