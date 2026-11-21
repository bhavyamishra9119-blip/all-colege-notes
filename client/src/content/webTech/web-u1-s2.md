### 2. Historical Evolution: ARPANET to Web 3.0 & Application Domains

> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

Application Domain Key Internet-Powered Services Core Benefits / Examples

### 3. Education & E-

Learning
MOOCs, Learning Management
Systems (LMS), virtual labs, digital
libraries
Remote lectures, open courseware,
IEEE/ACM research access (NPTEL,
SWAYAM, Coursera).

### 4. Banking & FinTech Net Banking, UPI, NEFT/RTGS, mobile

wallets, online stock trading
Instant cashless transfers, 24×7 account
access, encrypted bill payments.

### 5. E-Governance &

Public Services
Tax filing, digital identity verification,
online passports & certificates
Transparent citizen services, reduced
paperwork (DigiLocker, Income Tax Portal,
Passport Seva).

### 6. Healthcare &

Telemedicine
Remote doctor consultations, Electronic
Health Records (EHR), wearable IoT
Medical access in rural areas, digital
diagnostics, online pharmacy delivery.

### 7. Entertainment &

Media
OTT video/audio streaming, cloud
gaming, live webcasts, podcasts
On-demand HD media delivery across
devices (YouTube, Netflix, Spotify).

### 8. Research, Cloud &

File Sharing
Cloud storage/compute
(IaaS/PaaS/SaaS), FTP/Git repositories,
open datasets
Global scientific collaboration, distributed
backups, scalable computing (GitHub, AWS,
Google Drive).

### 4. Requirements for Working with Internet and World Wide Web

**Overview:** Accessing and interacting with the Internet and WWW requires the coordinated
integration of five essential components: Hardware, Software, Connectivity/ISP, Communication
Protocols, and Addressing Systems (IP, DNS, URL).

### 1. Hardware Requirements:

**Client Computing Device:** Desktop PC, laptop, tablet, or smartphone equipped with a
processor, RAM, and display.
Network Interface Card (NIC) / Wi-Fi Adapter: Hardware circuit (with a unique 48-bit physical
MAC address) that physically connects the device to a wired Ethernet cable or wireless radio
network.
**Modem (Modulator–Demodulator):** Converts digital computer signals into analog/optical
transmission signals over telephone, coaxial, or fiber lines—and demodulates incoming signals
back to digital bits.
Router / Access Point: Directs IP packets between a local network (LAN) and the wider
Internet (WAN), allowing multiple devices to share a single connection via Wi-Fi or Ethernet.

### 2. Software Requirements:

Operating System with TCP/IP Network Stack: Manages network interfaces, sockets, and
packet routing (Windows, Linux, macOS, Android, iOS).
**Web Browser (Client Software):** Fetches, parses, and renders web pages via HTTP/HTTPS
(Chrome, Firefox, Edge, Safari).
**Security Software:** Firewall and antivirus protection to guard against malware, phishing, and
unauthorized network access.
**Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes


### 3. Internet Service Provider (ISP) & Transmission Medium:

An ISP is an organization (e.g., Jio, Airtel, BSNL, AT&T) that leases network bandwidth,
assigns an IP address to the user's router, and routes traffic onto the global Internet backbone.

### 4. Core Communication Protocols & Addressing Systems:

TCP/IP Suite: IP (Internet Protocol) handles logical addressing and routing of packets; TCP
(Transmission Control Protocol) guarantees reliable, ordered, error-checked delivery of data
segments.
**IP Address:** Unique numerical network identifier assigned to every connected host—IPv4 (32-
bit, dotted-decimal like 192.168.1.10, ~4.3 billion addresses) or IPv6 (128-bit, hexadecimal
**like 2001:** 0db8::1, virtually inexhaustible).
**DNS (Domain Name System):** The "phonebook of the Internet"—translates human-readable
domain names (e.g., www.google.com) into numerical IP addresses (e.g., 142.250.190.4)
automatically before a browser connects.
**URL (Uniform Resource Locator):** Complete structured address identifying the exact
protocol, host, port, path, query parameters, and fragment of a web resource.
(A) End-to-End Hardware, Software & ISP Connection Path
Client Device
OS + Browser + NIC
Router / Modem
Signal & Packet Route
ISP Network
Fiber / 5G / DSL
DNS & Backbone
Domain → IP Lookup
Web Server
Hosts Web Pages
(B) Complete Structural Anatomy of a URL (Uniform Resource Locator)
https:// www.btech.edu.in :443 /notes/wt.html ?unit=1&v=2 #http

### 1. Scheme

(Protocol)

### 2. Host / Domain

(Sub + SLD + TLD)

### 3. Port

(Optional)

### 4. Resource Path

(File Location)

### 5. Query String

(Key=Value Pairs)

### 6. Fragment

(Page Anchor)
**Figure 3:** (A) Complete hardware, ISP, and DNS connection chain; (B) Six structural components of a standard
URL.
**Table 4:** Comparison of Internet Connectivity Technologies
Connection
Type
Transmission
Medium
Typical Speed
Range Key Characteristics
Dial-Up
(Legacy)
Analog telephone line Up to 56 Kbps Obsolete; ties up voice line; very high latency.
DSL / ADSL Existing copper
phone lines
5 – 100 Mbps Dedicated line to exchange; voice & data work
simultaneously.
Cable
Broadband
Coaxial TV cables 50 – 1,000
Mbps
High download speeds; bandwidth shared among
neighborhood.
Fiber Optic
(FTTH)
Glass fiber (light
pulses)
100 Mbps – 10
Gbps
Fastest, symmetrical upload/download, immune
to EM noise, low latency.
**Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes

Connection Type
Transmission
Medium
Typical Speed
Range Key Characteristics
Mobile (4G LTE /
5G)
Cellular radio
waves
20 Mbps – 2+
Gbps
Full mobility via cell towers; ultra-low latency on
5G.
Satellite
(GEO/LEO)
Orbital satellites 25 – 300 Mbps Global remote/rural coverage; weather-sensitive;
higher latency in GEO.

### 5. Web Browsers

**Definition:** A Web Browser is a client-side application software program used to locate, request,
retrieve, parse, and display resources (HTML documents, CSS stylesheets, JavaScript code,
images, videos) hosted on the World Wide Web.
Step-by-Step Working Mechanism of a Web Browser:

### 1. URL Entry: The user types a URL (or clicks a hyperlink) in the address bar.

2. **DNS Resolution:** Browser checks local cache and queries a DNS server to resolve the domain
name into a numeric IP address.
3. **Connection Establishment:** Opens a TCP connection (plus TLS handshake for HTTPS) to
the target Web Server's IP and port (80 or 443).
4. **HTTP Request:** Sends a formatted HTTP request (typically GET) asking for the resource.

### 5. HTTP Response Receipt: Receives HTML/CSS/JS/media payload from the server.

6. **Parsing & Rendering Pipeline:** Builds the DOM Tree (from HTML) and CSSOM Tree (from
CSS), merges them into a Render Tree, computes element geometry (Layout / Reflow), and
draws pixels on screen (Painting).
7. **Script Execution:** Executes embedded/linked JavaScript via the JS Engine to handle
interactivity.
Seven Core Architectural Components of a Modern Web Browser:
1. **User Interface (UI):** Address bar, back/forward/refresh buttons, tabs, and bookmarks—
everything except the main webpage viewport.

### 2. Browser Engine: Coordinates actions between the UI and the Rendering Engine.

3. **Rendering Engine:** Parses HTML and CSS and paints visual content on screen (e.g., Blink,
Gecko, WebKit).
4. **Networking Layer:** Handles HTTP/HTTPS requests, DNS lookups, TLS encryption, and
response caching.
5. **JavaScript Interpreter (JS Engine):** Parses and JIT-compiles JavaScript code (e.g., V8,
SpiderMonkey).

### 6. UI Backend: Draws native OS widgets (scrollbars, dropdowns, windows).

7. **Data Persistence (Storage):** Manages client-side data—Cookies (small server-linked key-
value pairs for sessions), Browser Cache (stores static files locally to speed up repeat visits),
LocalStorage, and IndexedDB.
**Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes