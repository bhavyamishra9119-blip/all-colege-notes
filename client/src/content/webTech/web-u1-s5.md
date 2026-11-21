### 5. University Solved Examination Questions (Unit 1)

> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

(A) Search Engine Three-Stage Pipeline
WWW Pages
Billions of URLs

### 1. Web Crawler

Spiders Fetch HTML

### 2. Indexer

Inverted Index DB

### 3. Rank Engine

PageRank & Score
SERP
User Results
(B) Web-Casting Architecture (Live Encoding → Streaming Server / CDN → Multi-Client Delivery)
Media Source
Camera / Mic /
News Publisher
Encoder
Compress (H.264)
RTMP Ingest
Streaming / CDN
HLS / DASH / Multicast
Push & Edge Caching
Viewer 1 (Desktop)
Viewer 2 (Mobile)
Viewer N (Smart TV)
**Figure 7:** (A) Search Engine three-stage indexing and retrieval pipeline; (B) Web-Casting media encoding and
multi-client CDN distribution architecture.
**Table 10:** Comparison Matrix — Pull Technology vs. Push Technology (Web-Casting)
Feature Pull Technology (Standard Browsing) Push Technology (Web-Casting)
Initiated By Client (user explicitly requests a URL) Server (automatically delivers updates to
subscribers)
User Effort Active searching, clicking, or manual
refreshing
One-time subscription; passive real-time
reception
Timeliness Data is fetched only when user checks Near real-time / instant delivery
Network
Examples
Standard HTTP GET webpage loading,
search queries
Live webinars, breaking news alerts, stock
tickers, WebSockets

### 9. High-Yield Quick-Revision Cheat Sheet

**Table 11:** Must-Memorize Web Protocols, Full Forms & Default TCP/UDP Port Numbers
Protocol Full Form Default Port Primary Role
HTTP Hypertext Transfer Protocol 80 (TCP) Unencrypted web page transfer
HTTPS Hypertext Transfer Protocol
Secure
443 (TCP/UDP) TLS-encrypted secure web transfer
DNS Domain Name System 53 (UDP/TCP) Translates domain names to IP
addresses
FTP File Transfer Protocol 20 / 21 (TCP) File upload & download between hosts
SMTP Simple Mail Transfer Protocol 25 / 587
(TCP)
Sending outgoing emails
POP3 /
IMAP
Post Office / Internet Message
Access
110 / 143 Retrieving emails from mail server
SSH Secure Shell 22 (TCP) Encrypted remote terminal login
**Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes


#### 9.1 Rapid-Fire Exam Facts & Key Anchors

**Key Pioneers & Years:** 1969 (ARPANET), 1983 (TCP/IP & DNS), 1989–1991 (Tim Berners-Lee
invents WWW, HTML, HTTP, URL at CERN), 1993 (NCSA Mosaic graphical browser), 1994 (W3C
founded).
**Core Acronyms:** URL (Uniform Resource Locator), ISP (Internet Service Provider), DNS
(Domain Name System), W3C (World Wide Web Consortium), DOM (Document Object Model),
SERP (Search Engine Results Page), CDN (Content Delivery Network), RSS (Really Simple
Syndication).
**HTTP Status Mnemonic:** 1xx = Info, 2xx = Success (200), 3xx = Redirect (301/302), 4xx =
Client's Fault (403/404), 5xx = Server's Fault (500/503).
**Search Engine Pipeline:** Crawling (Spiders) → Indexing (Inverted Index) → Ranking
(Relevance/PageRank) → SERP.
**Table 12:** Top 10 Unit-I University Exam Traps & Common Mistakes to Avoid
#
Common Mistake /
Exam Trap Why It Loses Marks Exam-Accurate Answer
1 Writing that Internet and
WWW are the same
Confuses physical network
infrastructure with one application
running on it.

$$Internet = global TCP/IP hardware$$

network; WWW = hypertext service over
it.
2 Crediting Tim Berners-
Lee with inventing the
Internet
Historically incorrect (ARPANET
existed 20 years earlier).
Berners-Lee invented the World Wide
Web (1989), not the Internet.
3 Confusing a Web
Browser with a Search
Engine
Chrome/Firefox are client software;
Google/Bing are remote websites.
Browser = software that renders URLs;
Search Engine = web service indexing
pages.
4 Calling HTTP a "stateful"
protocol because logins
work
HTTP itself is strictly stateless;
cookies/sessions maintain login
state.
Always state HTTP is stateless, using
cookies/sessions for state persistence.
5 Using HTTP GET for
passwords or sensitive
forms
GET exposes form values directly
in the URL bar and server logs!
Always use POST over HTTPS for
credentials and sensitive data.
6 Swapping 404 and
500 status code
meanings
4xx = client-side request problem;
5xx = server-side crash/failure.
404 Not Found (Client Error); 500
Internal Server Error (Server
Error).
7 Forgetting default HTTP
vs. HTTPS ports
Frequently tested in 2-mark MCQs
and viva questions.
HTTP = Port 80; HTTPS = Port 443;

$$DNS = Port 53.$$

8 Confusing a Web Server
with a Database Server
Web servers handle HTTP;
databases store/query structured
records.
Web server (Apache/Nginx) serves
HTTP; dynamic sites connect it to a DB
(MySQL).
**Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes

#
Common Mistake /
Exam Trap Why It Loses Marks Exam-Accurate Answer
9 Describing Web-Casting
as "Pull-only" browsing
Classic webcasting exemplifies
Push / Streaming broadcast
delivery.
Contrast traditional Pull browsing against
subscription/live Push webcasting.
10 Writing HTML/CSS/JS as
"server-only" languages
Standard HTML, CSS, and
browser JS are parsed and
rendered on the client.
Browser rendering engine parses
HTML/CSS; server runs
PHP/Node/Java/Python.
Exam Presentation Checklist (Full-Marks Strategy for Web Technologies)
Architecture Questions (Browsers, Web Servers, Search Engines, Web-Casting): Always sketch
the clean labeled block diagram (e.g., Client → DNS → Web Server → App Server/DB, or Crawler →
Indexer → Ranker) before listing bulleted explanations.
**HTTP Protocol Questions:** Explicitly write out a sample 4-line GET request and 200 OK response
message (showing the blank line!) and include a compact table of GET vs. POST and status code
classes (1xx–5xx).
Comparison Questions (Internet vs. WWW, Web 1.0–3.0, Push vs. Pull): Always present answers
in a crisp side-by-side tabular matrix with named comparison criteria rather than loose paragraphs.
**Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes