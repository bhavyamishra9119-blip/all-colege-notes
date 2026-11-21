### 1. Website Development Lifecycle & Hosting

> 🟢 **EXAM WEIGHTAGE:** 24 - 28 Marks | Strictly Aligned with 2026–27 B.Tech Curriculum

FUNDAMENTALS OF WEB TECHNOLOGIES • UNIT–2 (6 HOURS) • COMPLETE POINT-WISE
STUDY NOTES
**Basics of HTML:** Website Development, Tags,
Formatting, Layouts, Images & Frames
**Strictly Syllabus-Aligned Notes:** Built from scratch for B.Tech 1st Year — covering Steps for Developing a
Website, Web Publishing & Hosting, Static vs. Dynamic Websites, Webpage Structure, HTML Features, Tags
(Header, Title, Body, Paragraph), Lists, Links, Text Styles/Colors/Formatting, Page Layouts, Images &
Attributes, Image Mapping, and Frames.
**UNIT–2:** BASICS OF HTML ROADMAP

## PART I: Web Foundations


### 1. Website Dev. Steps


### 2. Publishing & Hosting


### 3. Static vs. Dynamic


### 4. Webpage Structure

- HTML Core Features

## PART II: Core Markup


### 5. HTML Tags & Core

(Head, Title, Body, P)

### 6. Lists (OL, UL, DL)


### 7. Creating Links (<a>)


### 8. Text Styles & Colors


## PART III: Visual & Frames


### 9. Page Layouts


### 10. Images & Attributes


### 11. Image Mapping


### 12. Frames & Iframes


### 13. Exam Cheat Sheet

**Figure 1:** Complete Syllabus Roadmap of Unit–2 (Basics of HTML)

## PART I: WEBSITE DEVELOPMENT, PUBLISHING, HOSTING & CORE

STRUCTURE

### 1. Steps for Developing a Website


#### 1.1 Starting From Scratch: The 7-Stage Website Development Lifecycle

Step 1 — Requirement Analysis & Goal Definition: Identify the exact purpose of the website
(informational blog, e-commerce store, college portal), define the target audience, and list core
features and budget.
Step 2 — Planning & Sitemap Creation: Organize the site hierarchy (Home → About →
Courses → Contact), plan URL routes, and select the technology stack (HTML, CSS, JavaScript,
backend/database if dynamic).
Step 3 — UI/UX Design & Wireframing: Sketch low-fidelity page wireframes (header, menu,
content blocks, footer), choose color palettes, typography, and ensure responsive layouts for both
desktop and mobile screens.
Step 4 — Content Creation & Asset Preparation: Write clear text copy, headings, and prepare
optimized images, icons, logos, and videos with descriptive alt text.
**Step 5 — Coding & Development:** Build front-end web pages using HTML (structure), CSS
(presentation), and JavaScript (interactivity), plus server-side scripts and databases if required.
Fundamentals of Web Technologies • UNIT–2: Basics of HTML

Step 6 — Testing & Quality Assurance (QA): Check every hyperlink (no broken 404 links),
verify cross-browser compatibility (Chrome, Firefox, Edge, Safari), check mobile responsiveness,
validate markup syntax, and test loading speed.
Step 7 — Deployment (Publishing) & Ongoing Maintenance: Register a domain, upload files
to a web host, verify live HTTPS security, and continuously update content, backups, and security
patches.

### 1. Analysis

Goal & Audience

### 2. Planning

Sitemap & Stack

### 3. UI Design

Wireframes & UX

### 4. Content

Copy & Images

### 5. Coding & Development

HTML, CSS, JS & Backend

### 6. Testing & QA

Links, Browsers, Speed

### 7. Deploy & Maintain

Publish, Backup, Update
**Figure 2:** Seven-Stage Website Development Lifecycle Flowchart

### 2. Web Publishing and Hosting a Site


#### 2.1 Key Concepts: Publishing vs. Hosting

**Web Publishing:** The complete process of uploading locally created web files (index.html,
stylesheets, images, scripts) onto a live Internet-connected web server so anyone worldwide can
open the site via a browser.
**Web Hosting:** A paid or free service provided by a Web Host that rents 24/7 storage space,
processing power, and high-speed Internet bandwidth on a dedicated computer called a Web
Server (e.g., Apache, Nginx).

#### 2.2 Step-by-Step Procedure to Publish and Host a Website

1. **Step 1 — Register a Domain Name:** Purchase a unique human-friendly web address (e.g.,
www.mycollege.edu) through a Domain Registrar; extensions like .com, .org, .in, .edu
are Top-Level Domains (TLDs).
2. **Step 2 — Choose a Web Hosting Plan:** Select a hosting provider matching expected traffic,
storage, and database needs.
3. Step 3 — Configure DNS (Domain Name System): Point the domain’s Nameservers / A-Record
to the Web Server’s numeric IP Address so browsers know which server hosts the files.
4. **Step 4 — Upload Website Files:** Transfer your project folder (with homepage strictly named
index.html) to the server’s root folder (public_html) using FTP/SFTP (e.g., FileZilla), a web
File Manager (cPanel), or Git auto-deployment (GitHub Pages / Netlify).
5. Step 5 — Enable SSL/HTTPS & Verify Live Site: Install an SSL/TLS certificate so the site loads
**securely over https:** // (padlock icon) and verify all pages load cleanly online.
Fundamentals of Web Technologies • UNIT–2: Basics of HTML


### 1. Developer PC

index.html + imgs
FTP / Git 2. Web Host Server
24/7 Storage + IP
HTTPS 3. DNS Lookup
Domain → IP

### 4. End User

Web Browser
Publishing = Upload Files to Server | Hosting = 24/7 Online Server Space | DNS = Internet Phonebook
**Figure 3:** End-to-End Web Publishing, DNS Resolution, and Web Hosting Architecture

#### 2.3 Types of Web Hosting Services

Hosting Type How Server Resources Work Cost Best Used For
Shared
Hosting
Multiple websites share one physical
server’s CPU & RAM
Lowest Personal portfolios, small blogs,
student projects
VPS Hosting One server partitioned into isolated
virtual private slices
Medium Growing business sites & custom
web apps
Dedicated
Hosting
Entire physical server rented exclusively
to one organization
High Heavy enterprise portals & high-
security banks
Cloud Hosting Site runs across a scalable cluster of
networked cloud servers
Pay-as-
you-go
High-traffic e-commerce & global
apps (AWS, Azure)

### 3. Static vs. Dynamic Website


#### 3.1 Core Architectural Difference


**Static Website:**

Consists of fixed, pre-written .html files stored directly on the server.
Every visitor receives the exact same webpage; changing content requires editing the source
HTML file manually and re-uploading it.
**Examples:** Personal resume/portfolio sites, college syllabus pages, product brochures,
documentation sites.

**Dynamic Website:**

Generates customized HTML pages on the fly at request time using server-side scripts (PHP,
Python, Node.js, Java) querying a live Database (MySQL, MongoDB).
Content changes automatically per user, login session, search query, or real-time updates
without manually rewriting HTML!
**Examples:** Amazon, Instagram, YouTube, online banking portals, university result portals.
Fundamentals of Web Technologies • UNIT–2: Basics of HTML