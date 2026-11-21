> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with Official 2026–27 Curriculum

Client Browser ➔ Local Host Cache ➔ Recursive DNS Resolver (ISP/8.8.8.8) ➔ Root Nameserver (`.`) ➔ TLD Nameserver (`.com`/`.edu`) ➔ Authoritative Nameserver ➔ IP Address Returned to Browser
<div class="pdf-figure-caption">Figure 1.2: 5-Tier Hierarchical DNS Resolution Pipeline Architecture</div>

HTTP
Method Purpose / Action Key Technical Properties (Exam Notes)
DELETE Removes the specified resource
from the server
Idempotent; deletes the resource identified by the target
URL.
HEAD Identical to GET but returns
headers only (no body)
Used to check file existence, size (Content-Length), or
last-modified timestamp quickly.

> 📊 **Table 8: Five HTTP Status Code Classes & Must-Know Exam Codes**

Class
Category
Meaning High-Yield Status Codes & Definitions
1xx Informational 100 Continue, 101 Switching Protocols (request received, continuing
process).
2xx Success 200 OK (standard success), 201 Created (new resource saved), 204 No
Content.
3xx Redirection 301 Moved Permanently, 302 Found (temporary redirect), 304 Not
Modified (use browser cache).
4xx Client Error 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not
Found (wrong URL).
5xx Server Error 500 Internal Server Error, 502 Bad Gateway, 503 Service
Unavailable, 504 Gateway Timeout.

### 7.4 HTTP vs. HTTPS & Evolution of HTTP Versions

- **HTTP vs. HTTPS (HTTP Secure):** Standard HTTP transmits headers, cookies, and passwords in
plain text (vulnerable to eavesdropping and Man-in-the-Middle attacks on public Wi-Fi). HTTPS
wraps HTTP inside TLS/SSL cryptographic encryption over TCP Port 443, guaranteeing three
- **security goals:** Confidentiality (encryption), Integrity (tamper detection), and Authentication
(verified SSL/TLS digital certificates issued by Certificate Authorities).
- **HTTP Version Evolution:** 
HTTP/1.0 (1996): Non-persistent TCP connection (1 connection per resource — slow).
HTTP/1.1 (1997): Persistent connections (Keep-Alive), Host header (virtual hosting),
chunked transfers, caching controls.
HTTP/2 (2015): Binary framing, multiplexing (multiple requests simultaneously over one TCP
connection), HPACK header compression.
HTTP/3 (2022): Replaces TCP with QUIC over UDP, eliminating TCP head-of-line blocking
and delivering faster mobile handshakes.
- **Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes


### 8. Searching and Web-Casting Techniques


### 8.1 Web Searching Techniques & Search Engine Architecture

- **Why Searching Techniques Matter:** With billions of web pages hosted worldwide, users rely on
Search Engines (Google, Bing, DuckDuckGo) to locate relevant documents within milliseconds.
Three Core Operational Stages of a Search Engine:

### 1. Stage 1 — Crawling (Web Crawlers / Spiders / Bots): Automated software agents

continuously browse the Web starting from seed URLs, downloading pages and recursively
following embedded hyperlinks to discover new or updated content (guided by each site's
robots.txt rules).

### 2. Stage 2 — Indexing (Inverted Index Construction): The indexer parses downloaded HTML

pages, removes stop words (the, is, of), stems keywords, and builds a massive Inverted Index
(like a book's back index mapping every keyword → list of matching URLs and positions) for
sub-second lookup.

### 3. Stage 3 — Query Processing & Ranking (Retrieval): When a user submits a query, the

retrieval engine looks up matching pages in the inverted index and sorts them by relevance
using ranking algorithms (e.g., keyword relevance, hyperlink authority such as PageRank,
freshness, and page quality).
Three Categories of Web Search Tools:
Crawler-Based Search Engines (Google, Bing): Automatically crawl and index pages via
bots; broadest coverage.
Web Directories (Human-Edited Catalogs, e.g., Curlie / early Yahoo Directory): Websites
manually reviewed and organized into hierarchical topic trees by human editors; smaller but
curated.
Meta-Search Engines (Dogpile, Startpage, SearX): Maintain no massive index of their own;
forward the user's query simultaneously to multiple search engines and aggregate/deduplicate
the combined results.

> 📊 **Table 9: Essential Boolean & Advanced Web Search Operators (Worked Examples)**

Operator Functional Meaning Worked Query Example & Expected Effect
AND (implicit
space)
- **Narrows results:** MUST contain
all terms
HTTP AND stateless → Pages discussing both
HTTP and statelessness.
- **OR Broadens results:** contains
either term
Apache OR Nginx → Pages covering Apache, Nginx,
or both.
- / NOT Excludes unwanted terms web server -IIS → Web server articles excluding
Microsoft IIS.
"exact
phrase"
Matches exact word sequence "Hypertext Transfer Protocol" → Only exact
phrase matches.
- **Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes

Operator Functional Meaning Worked Query Example & Expected Effect
- **site:** Restricts search to a specific
domain
- **site:** nptel.ac.in web technologies → Results
strictly inside NPTEL.
- **filetype:** Restricts results to a file
extension
- **HTTP notes filetype:** pdf → Returns downloadable
PDF documents only.

### 8.2 Web-Casting Techniques (Push vs. Pull Delivery)

- **Definition:** Web-Casting (Webcasting) is the technique of broadcasting live or pre-recorded
digital content (audio, video, news alerts, financial tickers, webinars) over the Internet
simultaneously to many geographically dispersed receivers—akin to traditional TV/radio
broadcasting delivered via IP networks.
Pull Technology vs. Push Technology (Core Exam Concept):
Pull Technology (Traditional Web Browsing): The client initiates every request whenever the
user actively clicks a link or refreshes a page (e.g., standard HTTP GET browsing).
Push Technology (Web-Casting Model): After an initial user subscription, the server
automatically pushes real-time updates, streams, or alerts to clients without requiring manual
page reloads (e.g., live webinar broadcasts, breaking news push notifications, stock tickers,
WebSockets, Server-Sent Events).
- **Two Delivery Modes of Web-Casting:** 

### 1. Live Webcasting (Real-Time Streaming): Captures audio/video from a live event (university

convocation, live lecture, sports match), encodes it into compressed packets, distributes via a
CDN (Content Delivery Network), and streams to viewers in real time.

### 2. On-Demand Webcasting (Pre-Recorded / VoD & Podcasting): Media files are recorded,

encoded, and stored on streaming servers so users can play, pause, and rewind at their
convenience (e.g., NPTEL lecture archives, podcasts).
Key Web-Casting Distribution & Syndication Methods:
- **Unicast Streaming:** Server sends a separate dedicated packet stream to each individual
viewer (simple and universally supported over standard HTTP/HLS/DASH, though server
bandwidth scales linearly with audience size—mitigated using CDNs).
- **IP Multicast Streaming:** Server transmits a single stream that network routers replicate only at
branching points for subscribed receivers (saves massive backbone bandwidth; common inside
enterprise/campus IPTV networks).
RSS / Atom Web Feeds (Really Simple Syndication): Standardized XML files published by
news sites and blogs; feed aggregators automatically poll and pull updated headlines/podcasts
to subscribers.
- **Streaming Protocols:** Modern adaptive webcasts use HLS (HTTP Live Streaming) and
MPEG-DASH (breaking video into small HTTP chunks that adapt quality dynamically to user
bandwidth), alongside RTMP (live ingest) and WebRTC (ultra-low-latency interactive video).
- **Unit-I:** Fundamentals of Web Technologies • B.Tech Exam-Ready Study Notes