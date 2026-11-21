// Auto-loaded from pure Markdown (.md) files in client/src/content/aiml/*.md
// Strictly aligned with 2026–27 B.Tech Curriculum from C:\Notes\B.Tech Notes 2026-27
import { getSectionMarkdown } from '../content/markdownLoader.js';

export const aimlSubjectDetails = {
  "id": "sub-aiml",
  "semester": 1,
  "year": "1st Year",
  "name": "Fundamentals of AI & ML",
  "code": "BCSE-011",
  "credits": 3,
  "instructor": "AI & ML Department Faculty",
  "notesCount": "4 Units Comprehensive 2026\u201327 Notes & Solved Papers",
  "rating": 5,
  "description": "Official 2026\u201327 Syllabus: Foundations of AI, Turing Test, Intelligent Agents & PEAS, State-space search, BFS/DFS, Heuristic search & A*, FOPL, CNF conversion, Resolution refutation, Expert Systems architecture, Knowledge engineering, Supervised ML (Decision Trees, SVM), Unsupervised ML (k-Means), and Apriori Association Rules.",
  "banner": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
};

const unitsMeta = [
  {
    "unitNum": 1,
    "title": "Foundations of Artificial Intelligence & Intelligent Agents",
    "examWeightage": "24 - 28 Marks",
    "readingTime": "35 mins",
    "summary": "Evolution & Definition of AI, Turing Test imitation game, Russell & Norvig 4 Approaches; AI vs ML vs Deep Learning concentric circles; Key domains (NLP, Computer Vision, Robotics); Intelligent Agents architecture and the PEAS framework for autonomous systems; Task environment dimensions.",
    "sections": [
      {
        "sectionId": "aiml-u1-s1",
        "title": "1. Evolution, Definition & Taxonomies of AI"
      },
      {
        "sectionId": "aiml-u1-s2",
        "title": "2. Key Domains of AI & Intelligent Agents (PEAS Framework)"
      },
      {
        "sectionId": "aiml-u1-s3",
        "title": "3. Real-World Applications & How Modern LLMs Work"
      },
      {
        "sectionId": "aiml-u1-solved-exam",
        "title": "University Solved Examination Questions (Unit 1)"
      }
    ]
  },
  {
    "unitNum": 2,
    "title": "Searching Algorithms & Knowledge Representation",
    "examWeightage": "26 - 30 Marks",
    "readingTime": "35 mins",
    "summary": "Problem formulation & state-space search; Uninformed search (BFS & DFS) completeness & complexity; Heuristic search & A* algorithm with admissibility proof; Data-driven vs Goal-driven reasoning; Logical KR: Propositional & Predicate logic, 8-step CNF conversion, and Resolution Refutation; Structured KR: Semantic Nets, Frames & Scripts.",
    "sections": [
      {
        "sectionId": "aiml-u2-s1",
        "title": "1. Problem Formulation & Uninformed Search (BFS vs DFS)"
      },
      {
        "sectionId": "aiml-u2-s2",
        "title": "2. Heuristic Search & The A* Algorithm"
      },
      {
        "sectionId": "aiml-u2-s3",
        "title": "3. Logical Knowledge Representation & Resolution Refutation"
      },
      {
        "sectionId": "aiml-u2-s4",
        "title": "4. Structured Knowledge: Semantic Nets, Frames & Scripts"
      },
      {
        "sectionId": "aiml-u2-solved-exam",
        "title": "University Solved Examination Questions (Unit 2)"
      }
    ]
  },
  {
    "unitNum": 3,
    "title": "Expert Systems Architecture & Knowledge Engineering",
    "examWeightage": "24 - 28 Marks",
    "readingTime": "35 mins",
    "summary": "Expert Systems definition, characteristics, and comparison with conventional programs; Core Architecture: Knowledge Base, Inference Engine (Forward vs Backward chaining), Working Memory, and Explanation Engine (HOW & WHY); Expert System Triad (Expert, Engineer, User); Feigenbaum's Knowledge Acquisition Bottleneck and elicitation techniques.",
    "sections": [
      {
        "sectionId": "aiml-u3-s1",
        "title": "1. Expert Systems Architecture & The HOW/WHY Explanation Engine"
      },
      {
        "sectionId": "aiml-u3-s2",
        "title": "2. The Expert System Triad & Human Collaboration"
      },
      {
        "sectionId": "aiml-u3-s3",
        "title": "3. Feigenbaum's Knowledge Acquisition Bottleneck"
      },
      {
        "sectionId": "aiml-u3-solved-exam",
        "title": "University Solved Examination Questions (Unit 3)"
      }
    ]
  },
  {
    "unitNum": 4,
    "title": "Introduction to Machine Learning Concepts",
    "examWeightage": "26 - 30 Marks",
    "readingTime": "35 mins",
    "summary": "Machine Learning overview and Tom Mitchell's (T, P, E) formulation; Traditional programming vs ML; 6-Stage ML lifecycle; Supervised learning: Classification (Decision Trees, ID3, Information Gain, SVM) & Regression; Unsupervised learning: Clustering (k-Means, Elbow method) and Association Rule Mining (Apriori algorithm, Support, Confidence, Lift).",
    "sections": [
      {
        "sectionId": "aiml-u4-s1",
        "title": "1. Machine Learning Foundations & Workflow Lifecycle"
      },
      {
        "sectionId": "aiml-u4-s2",
        "title": "2. Supervised Learning: Classification & Regression"
      },
      {
        "sectionId": "aiml-u4-s3",
        "title": "3. Unsupervised Clustering: k-Means & The Elbow Method"
      },
      {
        "sectionId": "aiml-u4-s4",
        "title": "4. Association Rule Mining & Apriori Algorithm"
      },
      {
        "sectionId": "aiml-u4-solved-exam",
        "title": "University Solved Examination Questions (Unit 4)"
      }
    ]
  }
];

export const aimlUnitsData = unitsMeta.map(unit => ({
  ...unit,
  sections: unit.sections.map(sec => ({
    ...sec,
    content: getSectionMarkdown('aiml', sec.sectionId),
  })),
}));
