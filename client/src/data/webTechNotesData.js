// Auto-loaded from pure Markdown (.md) files in client/src/content/webTech/*.md
// Strictly aligned with 2026–27 B.Tech Curriculum from C:\Notes\B.Tech Notes 2026-27
import { getSectionMarkdown } from '../content/markdownLoader.js';

export const webTechSubjectDetails = {
  "id": "sub-webtech",
  "semester": 1,
  "year": "1st Year",
  "name": "Fundamentals of Web Technologies",
  "code": "BCSE-012",
  "credits": 2,
  "instructor": "Department of Computer Science & Engineering (MMDU)",
  "notesCount": "4 Units Comprehensive 2026\u201327 Notes & Solved Papers",
  "rating": 5,
  "description": "Official 2026\u201327 MMDU syllabus (BCSE-012): Internet & WWW Architecture, DNS 5-tier resolution, HTTP transaction cycles, HTML5 Semantic page blueprints, Client-side image maps, Multimedia APIs, Canvas 2D graphics, Web Storage, and CSS architecture with solved university questions.",
  "banner": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80"
};

const unitsMeta = [
  {
    "unitNum": 1,
    "title": "Internet & World Wide Web Architecture",
    "examWeightage": "24 - 28 Marks",
    "readingTime": "35 mins",
    "summary": "Technical foundations of global networking; 12-point Internet vs WWW comparative matrix; Historical progression from ARPANET to Web 3.0; Browser subsystems & HTTP transaction cycles; 5-tier DNS resolution sequence; Web search crawler indexing pipeline and Web-casting push technology.",
    "sections": [
      {
        "sectionId": "web-u1-s1",
        "title": "1. Technical Definitions & 12-Point Internet vs. WWW Analysis"
      },
      {
        "sectionId": "web-u1-s2",
        "title": "2. Historical Evolution: ARPANET to Web 3.0 & Application Domains"
      },
      {
        "sectionId": "web-u1-s3",
        "title": "3. Web Browsers, Servers & Search Engines"
      },
      {
        "sectionId": "web-u1-s4",
        "title": "4. HTTP/HTTPS Protocol & 5-Tier DNS Resolution"
      },
      {
        "sectionId": "web-u1-s5",
        "title": "5. University Solved Examination Questions (Unit 1)"
      }
    ]
  },
  {
    "unitNum": 2,
    "title": "Basics of HTML: Website Development, Tags, Layouts, Images & Frames",
    "examWeightage": "24 - 28 Marks",
    "readingTime": "35 mins",
    "summary": "7-Stage Website Development Lifecycle; Web publishing and hosting procedures (Domain, DNS, Web host, SSL); Static vs Dynamic websites 12-point matrix; HTML document anatomy, container vs empty tags; Headings, paragraphs, ordered/unordered lists, hyperlinks; HTML Tables, Images, Client-side Image Maps, and IFrames.",
    "sections": [
      {
        "sectionId": "web-u2-s1",
        "title": "1. Website Development Lifecycle & Hosting"
      },
      {
        "sectionId": "web-u2-s2",
        "title": "2. Static vs Dynamic Sites & HTML Document Structure"
      },
      {
        "sectionId": "web-u2-s3",
        "title": "3. Text Formatting, Lists & Hyperlinks"
      },
      {
        "sectionId": "web-u2-s4",
        "title": "4. Tables, Images, Image Mapping & IFrames"
      },
      {
        "sectionId": "web-u2-s5",
        "title": "5. University Solved Examination Questions (Unit 2)"
      }
    ]
  },
  {
    "unitNum": 3,
    "title": "HTML5: Semantic Web, Multimedia, Canvas, Storage & Forms",
    "examWeightage": "26 - 30 Marks",
    "readingTime": "35 mins",
    "summary": "HTML5 introduction & advantages over HTML4; Semantic structural layout tags (<header>, <nav>, <section>, <article>, <aside>, <footer>); Native audio and video playback; Canvas 2D graphics rendering; Web Storage (localStorage vs sessionStorage vs Cookies); HTML5 smart forms and native validation.",
    "sections": [
      {
        "sectionId": "web-u3-s1",
        "title": "1. Evolution & Advantages of HTML5 over HTML4"
      },
      {
        "sectionId": "web-u3-s2",
        "title": "2. Semantic Structural Elements Layout Blueprint"
      },
      {
        "sectionId": "web-u3-s3",
        "title": "3. Native Multimedia (Audio & Video) & Modern Form Controls"
      },
      {
        "sectionId": "web-u3-s4",
        "title": "4. Canvas 2D Graphics API & Web Storage (localStorage vs Cookies)"
      },
      {
        "sectionId": "web-u3-s5",
        "title": "5. HTML5 Smart Forms, Validation & Solved Exam Questions"
      }
    ]
  },
  {
    "unitNum": 4,
    "title": "Cascading Style Sheets (CSS) Architecture",
    "examWeightage": "26 - 30 Marks",
    "readingTime": "35 mins",
    "summary": "CSS fundamentals, rule-set syntax anatomy, and 3 inclusion methods (Inline, Embedded, External); Cascade rules, Inheritance, and Specificity weight matrix; Core CSS selectors and combinators; Typography, Fonts, Colors & Gradients; The Standard CSS Box Model (box-sizing reset); 5 Positioning schemes, Floats, Clearfix, and Navigation Bars.",
    "sections": [
      {
        "sectionId": "web-u4-s1",
        "title": "1. CSS Fundamentals, Anatomy & 3 Inclusion Methods"
      },
      {
        "sectionId": "web-u4-s2",
        "title": "2. The Cascade, Inheritance & Specificity Weight Matrix"
      },
      {
        "sectionId": "web-u4-s3",
        "title": "3. CSS Selectors, Typography & Color Systems"
      },
      {
        "sectionId": "web-u4-s4",
        "title": "4. The Standard CSS Box Model & 5 Positioning Schemes"
      },
      {
        "sectionId": "web-u4-s5",
        "title": "5. Element Layouts, Navigation Bars & Solved Exam Questions"
      }
    ]
  }
];

export const webTechUnitsData = unitsMeta.map(unit => ({
  ...unit,
  sections: unit.sections.map(sec => ({
    ...sec,
    content: getSectionMarkdown('webTech', sec.sectionId),
  })),
}));
