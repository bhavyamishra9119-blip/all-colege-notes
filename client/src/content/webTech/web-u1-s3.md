> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

(A) Internal Web Browser Architecture

### 1. User Interface (Address Bar, Tabs, Controls)


### 2. Browser Engine (Coordinator)


### 3. Rendering Engine (HTML / CSS Parser & Painter)


### 4. Networking

HTTP / TLS / DNS

### 5. JS Engine

V8 / SpiderMonkey

### 6. UI & Storage

Cookies / Cache
(B) Page Rendering Pipeline
HTML → DOM CSS → CSSOM
Construct Render Tree
Layout (Box Coordinates)
Paint Pixels to Screen



<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 BROWSER HTTP LIFECYCLE: FROM ENTERING URL TO DOM RENDERING</div>
</div>

```
HTTP REQUEST-RESPONSE NAVIGATION LIFECYCLE
[User Enters URL in Browser: https://example.com/index.html]
                             │
                             ▼
[Step 1: DNS Resolution Hierarchy]
Browser Cache ➔ OS Hosts Cache ➔ Router Cache ➔ ISP Recursive Resolver ➔ Authoritative DNS
(Resolves domain name into 32-bit IPv4 or 128-bit IPv6 Address)
                             │
                             ▼
[Step 2: TCP 3-Way Handshake + TLS Encryption]
Client SYN ➔ Server SYN-ACK ➔ Client ACK (Port 443 for HTTPS TLS handshake)
                             │
                             ▼
[Step 3: Client Issues HTTP Request]
GET /index.html HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 ...
                             │
                             ▼
[Step 4: Web Server Processes & Responds]
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 4096
                             │
                             ▼
[Step 5: Browser Critical Rendering Path]
Parse HTML ➔ Build DOM Tree
Parse CSS ➔ Build CSSOM Tree
Combine ➔ Render Tree ➔ Layout (Reflow) ➔ Paint (Rasterize) ➔ Composite Pixels to Screen
```

| HTTP Status Code Range | Category Name | Typical Status Codes & Meaning |
| :--- | :--- | :--- |
| **`1xx`** | **Informational** | `100 Continue`, `101 Switching Protocols` |
| **`2xx`** | **Success** | `200 OK`, `201 Created`, `204 No Content` |
| **`3xx`** | **Redirection** | `301 Moved Permanently`, `302 Found`, `304 Not Modified (Cached)` |
| **`4xx`** | **Client Errors** | `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found` |
| **`5xx`** | **Server Errors** | `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable` |


transforming HTML/CSS into screen pixels.

> 📊 **Table 5: Major Web Browsers, Developers & Core Engines**

Web Browser Developer Rendering Engine JavaScript Engine
Google Chrome Google Blink V8
Mozilla Firefox Mozilla Foundation Gecko SpiderMonkey
Apple Safari Apple Inc. WebKit JavaScriptCore (Nitro)
Microsoft Edge Microsoft (Chromium-based) Blink V8
Opera / Brave Opera / Brave Software Blink V8

### 6. Web Servers

- **Definition:** A Web Server refers to both (1) the hardware computer storing website files (HTML,
CSS, images, scripts) and connected 24×7 to the Internet, and (2) the server software daemon
that continuously listens on network ports (TCP Port 80 for HTTP, Port 443 for HTTPS),
processes incoming client HTTP requests, and returns formatted HTTP responses.
- **Core Functions of a Web Server:** 

- **### 1. Request Listening & Routing:** Accepts concurrent client connections and maps requested

URLs to files or server-side scripts.

### 2. Static & Dynamic Content Serving: Delivers pre-built files directly from disk or delegates

dynamic requests to application servers/databases.

- **### 3. Security & Access Control:** Enforces HTTPS/TLS encryption, authentication, and directory

permissions.

- **### 4. Virtual Hosting:** Hosts dozens of independent domain names (e.g., siteA.com, siteB.com)

on a single physical server using the HTTP Host header.

### 5. Logging & Bandwidth Management: Records access logs (IP, timestamp, URL, status code),

applies Gzip/Brotli compression, and performs reverse proxying / load balancing.
- **Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes

Static vs. Dynamic Web Server Behavior:
- **Static Web Server:** Consists solely of HTTP server software + file system. Sends stored files
(HTML, CSS, PNG, PDF) as-is to every user identically (fast, low CPU cost).
- **Dynamic Web Server:** Combines the HTTP server with an Application Server (PHP, Node.js,
Python/Django, Java Servlet/JSP) and a Database (MySQL, PostgreSQL). Generates
customized HTML/JSON responses on the fly (e.g., showing a logged-in student's personal
exam results).
Web Client
(Browser)
HTTP / HTTPS
HTTP Request
HTTP Response
Server-Side Infrastructure (Port 80 / 443)
Web Server
(Apache / Nginx / IIS)
TLS • Routing • Logs
Static Static File Storage
.html, .css, .jpg, .pdf (As-Is)
Dynamic
App Server
PHP / Node
Java / Python
Database
SQL /
NoSQL



<div class="visual-enrichment-card">
  <div class="visual-card-header">📊 ANATOMY OF A UNIFORM RESOURCE LOCATOR (URL)</div>
  <div class="visual-diagram-container">
    <svg width="100%" height="150" viewBox="0 0 760 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="720" height="110" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="380" y="42" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">URL Component Breakdown</text>
      <!-- Example URL segments -->
      <g transform="translate(40, 55)">
        <rect x="0" y="0" width="80" height="35" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="40" y="22" font-family="Courier, monospace" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">https://</text>
        <text x="40" y="50" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#1e40af" text-anchor="middle">Protocol</text>

        <rect x="85" y="0" width="160" height="35" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="165" y="22" font-family="Courier, monospace" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">www.college.edu</text>
        <text x="165" y="50" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#92400e" text-anchor="middle">Domain (Host)</text>

        <rect x="250" y="0" width="55" height="35" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="277" y="22" font-family="Courier, monospace" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">:443</text>
        <text x="277" y="50" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#991b1b" text-anchor="middle">Port</text>

        <rect x="310" y="0" width="165" height="35" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="392" y="22" font-family="Courier, monospace" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">/notes/beee/unit1</text>
        <text x="392" y="50" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#166534" text-anchor="middle">Resource Path</text>

        <rect x="480" y="0" width="120" height="35" rx="4" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.5"/>
        <text x="540" y="22" font-family="Courier, monospace" font-size="11" font-weight="bold" fill="#6b21a8" text-anchor="middle">?sem=1&amp;yr=26</text>
        <text x="540" y="50" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#6b21a8" text-anchor="middle">Query Parameters</text>

        <rect x="605" y="0" width="65" height="35" rx="4" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="637" y="22" font-family="Courier, monospace" font-size="12" font-weight="bold" fill="#c2410c" text-anchor="middle">#sec2</text>
        <text x="637" y="50" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#c2410c" text-anchor="middle">Fragment</text>
      </g>
    </svg>
  </div>
</div>

| Attribute | HTTP (HyperText Transfer Protocol) | HTTPS (HTTP Secure) |
| :--- | :--- | :--- |
| **Default Port** | **Port 80** | **Port 443** |
| **Security Layer** | Unencrypted Plaintext (Vulnerable to packet sniffing) | **TLS / SSL Cryptographic Handshake** |
| **Data Encryption** | None; credentials and data transmitted in the clear | **Asymmetric Public Key (RSA/ECC) + Symmetric AES** |
| **Digital Certificate**| No certificate required | **X.509 SSL Certificate** issued by Certificate Authority (CA) |


application-server + database processing.

> 📊 **Table 6: Widely Used Web Server Software Platforms**

Web Server Developer / License Primary Architecture & Strengths
Apache HTTP
Server
Apache Software
Foundation (Open
Source)
Highly modular (.htaccess, mod_rewrite); cross-platform;
cornerstone of the LAMP stack.
Nginx F5 / Open Source Asynchronous, event-driven architecture; handles tens of
thousands of concurrent connections; excels as reverse proxy &
load balancer.
Microsoft IIS Microsoft (Proprietary) Deeply integrated with Windows Server, ASP.NET, and enterprise
Active Directory authentication.
Apache
Tomcat
Apache Software
Foundation (Open
Source)
Java Servlet container & JSP execution engine for enterprise Java
web applications.
LiteSpeed
(LSWS)
LiteSpeed Technologies High-performance Apache drop-in replacement with native
HTTP/3 and built-in caching.
- **Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes


### 7. Hypertext Transfer Protocol (HTTP)


### 7.1 Definition & Fundamental Characteristics of HTTP

- **Definition:** HTTP (Hypertext Transfer Protocol) is an Application Layer client–server
communication protocol that defines the exact format of requests sent by web browsers and
responses returned by web servers across TCP/IP networks.
Four Core Properties of HTTP (Frequently Tested in Exams):

### 1. Client–Server (Request–Response) Model: Communication is always initiated by the client

(browser) sending a request; the server passively waits and sends back a matching response.

- **### 2. Stateless Protocol:** Each HTTP request is processed completely independently—the server

retains no memory of previous requests from the same user by default. (State such as logins
and shopping carts is simulated using Cookies, Sessions, or Tokens.)

- **### 3. Media-Independent:** Can transmit any type of payload (HTML, JSON, JPEG, MP4, PDF) as

long as both sides identify its format via the Content-Type MIME header (e.g., text/html,
application/json).

### 4. Connectionless / Persistent TCP Operation: HTTP runs over reliable TCP (default port 80).

HTTP/1.0 closed the TCP connection after every single file (non-persistent), whereas HTTP/1.1
introduced persistent connections (Keep-Alive) by default to reuse one TCP socket for
multiple assets.

### 7.2 Structure of HTTP Request and Response Messages

HTTP Request Message Anatomy (4 Parts):

- **### 1. Request Line:** Method <SP> Request-URI <SP> HTTP-Version (e.g., GET

/notes/unit1.html HTTP/1.1).

- **### 2. Request Headers:** Key–value metadata lines (Host, User-Agent, Accept, Cookie).


- **### 3. Blank Line (CRLF):** Mandatory empty line separating headers from the message body.


- **### 4. Message Body (Optional):** Carries form data or JSON payload (used in POST / PUT; empty

in GET).
HTTP Response Message Anatomy (4 Parts):

- **### 1. Status Line:** HTTP-Version <SP> Status-Code <SP> Reason-Phrase (e.g., HTTP/1.1 200

OK).

- **### 2. Response Headers:** Server metadata (Content-Type, Content-Length, Server, Set-

Cookie, Cache-Control).

- **### 3. Blank Line (CRLF):** Mandatory separator before body.


- **### 4. Response Body:** The actual requested resource (HTML markup, image bytes, JSON data).

- **Worked Trace:** Real HTTP/1.1 Request & Response Exchange
- **Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes

/* --- CLIENT HTTP REQUEST --- */
GET /unit1/index.html HTTP/1.1
- **Host:** www.college-portal.edu
- **User-Agent:** Mozilla/5.0 (Chrome)
- **Accept:** text/html
<-- Mandatory Blank Line
/* --- SERVER HTTP RESPONSE --- */
HTTP/1.1 200 OK
- **Date:** Fri, 20 Nov 2026 10:15:00 GMT
- **Server:** Nginx/1.26
- **Content-Type:** text/html; charset=UTF-8
- **Content-Length:** 45
<-- Mandatory Blank Line
<html><body><h1>Unit-I Notes</h1></body></html>
Web Browser DNS Server Web Server

- **### 1. DNS Query:** www.site.edu?


- **### 2. IP Address:** 93.184.216.34


### 3. TCP 3-Way Handshake (SYN / SYN-ACK / ACK)


- **### 4. HTTP Request:** GET /index.html HTTP/1.1


- **### 5. HTTP Response:** HTTP/1.1 200 OK + HTML Body


### 6. Render HTML/CSS


> 🖼️ **Figure 6: Complete end-to-end sequence from DNS resolution and TCP handshake through HTTP**

Request/Response exchange to webpage rendering.

### 7.3 HTTP Request Methods & Status Codes


> 📊 **Table 7: Standard HTTP Methods & Key Differences Between GET and POST**

HTTP
Method Purpose / Action Key Technical Properties (Exam Notes)
GET Retrieves/reads a resource
from the server
Parameters appended in URL query string (?a=1); visible in
browser history; bookmarkable; cacheable; length-limited; must
NOT modify server state (safe & idempotent).
POST Submits data to create a new
resource or process forms
Data sent inside the HTTP request body (not visible in URL); no
practical size limit; supports binary file uploads; not
cached/bookmarked; used for logins & form submissions.
PUT Replaces/updates an entire
existing resource at a URI
Idempotent (repeating the exact same PUT yields the same server
state).
- **Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes

---

#### 💻 Written Code Example & Layout: DNS Resolution Simulation & Fetch API

<!-- DNS Resolution Simulation & Fetch API -->
```html
<button id="fetchBtn">Fetch Server Data</button>
<div id="outputArea">Waiting for server response...</div>
```
```css
#outputArea { padding: 10px; margin-top: 8px; background: #eff6ff; border: 1px solid #3b82f6; border-radius: 4px; }
```
```javascript
document.getElementById('fetchBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        document.getElementById('outputArea').innerText = JSON.stringify(data);
    } catch (err) {
        document.getElementById('outputArea').innerText = 'Network request failed: ' + err;
    }
});
```

**Visual Rendered Behavior:**
<div class='pdf-callout' style='background: #f0fdf4; border-left-color: #16a34a;'>🌐 <strong>Browser Output:</strong> Clicking the button initiates an asynchronous TCP/HTTP fetch to the server and dynamically updates the DOM without full page refresh.</div>

> 📌 **IMPORTANT NOTES & EXAM HIGHLIGHTS:**
> 
- **Modern browsers use a multi-process architecture (Browser, Renderer, GPU).**
- **DNS hierarchy: Root -> TLD (.com/.edu) -> Authoritative Nameservers.**

> ⚠️ **MISTAKES TO AVOID:**
> 
- **Blocking the main UI thread with synchronous XMLHttpRequest.**
- **Failing to handle network fetch Promise rejections.**

