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

> 🖼️ **Figure 4: (A) Layered internal architecture of a modern Web Browser; (B) Step-by-step Critical Rendering Path**

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

> 🖼️ **Figure 5: Web server request handling architecture distinguishing direct static file delivery from dynamic**

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