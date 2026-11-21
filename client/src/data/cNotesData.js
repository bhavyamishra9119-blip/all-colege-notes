// Auto-loaded from pure Markdown (.md) files in client/src/content/c/*.md
// Strictly aligned with 2026–27 B.Tech Curriculum from C:\Notes\B.Tech Notes 2026-27
import { getSectionMarkdown } from '../content/markdownLoader.js';

export const cSubjectDetails = {
  "id": "sub-c1",
  "semester": 1,
  "year": "1st Year",
  "name": "Computational and Problem Solving using C",
  "code": "BCSE-008",
  "credits": 2,
  "instructor": "Department of Computer Science & Engineering (MMDU)",
  "notesCount": "4 Units Comprehensive 2026\u201327 Notes & Solved Questions",
  "rating": 5,
  "description": "Official 2026\u201327 MMDU syllabus (BCSE-008): Problem solving techniques, logic paradigms, 4-stage compilation pipeline, memory segmentation, 9-tier operator precedence, typecasting, 2D array row-major addressing, 12-point storage classes matrix, Near/Far/Huge pointers, DMA, and file streams with solved examination questions.",
  "banner": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
};

const unitsMeta = [
  {
    "unitNum": 1,
    "title": "Programming Fundamentals, Compilation Pipeline & Problem Solving",
    "examWeightage": "24 - 28 Marks",
    "readingTime": "40 mins",
    "summary": "Computational problem classifications, Deductive vs Inductive reasoning, Top-down design & flowchart standards, Black-box vs White-box testing, 4 error tiers, Big-O complexity matrix, dry-run trace tables, translators comparison, 4-stage compilation pipeline, and virtual process memory layout.",
    "sections": [
      {
        "sectionId": "c-u1-s1",
        "title": "1. Computational Problem Classification & Logic Types"
      },
      {
        "sectionId": "c-u1-s2",
        "title": "2. Algorithmic Design, Flowcharts & Stepwise Refinement"
      },
      {
        "sectionId": "c-u1-s3",
        "title": "3. Flowcharts, Pseudocode & Decision Tables"
      },
      {
        "sectionId": "c-u1-s4",
        "title": "4. Verification, Testing & Program Defect Tiers"
      },
      {
        "sectionId": "c-u1-s5",
        "title": "5. Translators, 4-Stage Compilation Pipeline & Process Memory Layout"
      },
      {
        "sectionId": "c-u1-s6",
        "title": "6. University Examination Solved Questions (Unit 1)"
      }
    ]
  },
  {
    "unitNum": 2,
    "title": "Core Programming Concepts, Operators & Control Structures",
    "examWeightage": "26 - 30 Marks",
    "readingTime": "45 mins",
    "summary": "Tokens, Keywords, Identifiers & Primitive Data Types; Exhaustive 9-tier Operator Precedence and Associativity hierarchy; Implicit promotion vs Explicit typecasting; Standard Header Files; Decision control structures (if-else, else-if ladder, dangling else, switch); Loop control (while, for, do-while) & jump statements (break, continue, goto).",
    "sections": [
      {
        "sectionId": "c-u2-s1",
        "title": "1. Tokens, Keywords, Identifiers & Primitive Data Types"
      },
      {
        "sectionId": "c-u2-s2",
        "title": "2. Operators & Expressions: 9-Tier Precedence & Associativity"
      },
      {
        "sectionId": "c-u2-s3",
        "title": "3. Type Conversion (Implicit/Explicit) & Standard Header Files"
      },
      {
        "sectionId": "c-u2-s4",
        "title": "4. Decision Control Structures: if-else, else-if ladder & switch"
      },
      {
        "sectionId": "c-u2-s5",
        "title": "5. Loop Control Structures (while, for, do-while) & Jump Statements"
      },
      {
        "sectionId": "c-u2-s6",
        "title": "6. University Examination Solved Questions (Unit 2)"
      }
    ]
  },
  {
    "unitNum": 3,
    "title": "Arrays, Strings, Storage Classes, Functions & Modular Programming",
    "examWeightage": "24 - 28 Marks",
    "readingTime": "35 mins",
    "summary": "1D and 2D Arrays, Contiguous memory layout, Row-major and Column-major address calculation formulas; Linear & Binary Search, Bubble Sort; String handling with null terminator and string.h; 12-Point Master Storage Classes Matrix (auto, register, static, extern); Functions, Parameter Passing (Call by Value vs Reference), Recursion & Call Stack.",
    "sections": [
      {
        "sectionId": "c-u3-s1",
        "title": "1. 1D & 2D Arrays: Memory Mapping & Row-Major Formula"
      },
      {
        "sectionId": "c-u3-s2",
        "title": "2. Searching & Sorting Algorithms: Linear, Binary & Bubble Sort"
      },
      {
        "sectionId": "c-u3-s3",
        "title": "3. Strings & Character Arrays: string.h Library Functions"
      },
      {
        "sectionId": "c-u3-s4",
        "title": "4. Exhaustive 12-Point Master Storage Classes Matrix"
      },
      {
        "sectionId": "c-u3-s5",
        "title": "5. Functions, Parameter Passing (Value vs Reference) & Recursion"
      },
      {
        "sectionId": "c-u3-s6",
        "title": "6. University Examination Solved Questions (Unit 3)"
      }
    ]
  },
  {
    "unitNum": 4,
    "title": "Advanced Data Handling, Pointers, Structures, DMA & File Handling",
    "examWeightage": "24 - 28 Marks",
    "readingTime": "35 mins",
    "summary": "Pointer fundamentals, arithmetic & dereferencing; Pointer taxonomy: Wild, Dangling, Void, Function pointers, Near/Far/Huge pointers; Structures, Unions & Memory Alignment/Padding; Dynamic Memory Allocation (malloc, calloc, realloc, free); File streams, standard modes, and file I/O operations.",
    "sections": [
      {
        "sectionId": "c-u4-s1",
        "title": "1. Pointers Fundamentals & Arithmetic"
      },
      {
        "sectionId": "c-u4-s2",
        "title": "2. Pointer Taxonomy & Real-Mode 16-Bit Architecture (Near, Far, Huge)"
      },
      {
        "sectionId": "c-u4-s3",
        "title": "3. User-Defined Types: Structures, Unions & Memory Alignment"
      },
      {
        "sectionId": "c-u4-s4",
        "title": "4. Dynamic Memory Allocation (DMA) Complete Lifecycle"
      },
      {
        "sectionId": "c-u4-s5",
        "title": "5. File Handling Operations & Stream Modes"
      },
      {
        "sectionId": "c-u4-s6",
        "title": "6. University Examination Solved Questions (Unit 4)"
      }
    ]
  }
];

export const cUnitsData = unitsMeta.map(unit => ({
  ...unit,
  sections: unit.sections.map(sec => ({
    ...sec,
    content: getSectionMarkdown('c', sec.sectionId),
  })),
}));
