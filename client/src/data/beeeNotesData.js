// Auto-loaded from pure Markdown (.md) files in client/src/content/beee/*.md
// Strictly aligned with 2026–27 B.Tech Curriculum from C:\Notes\B.Tech Notes 2026-27
import { getSectionMarkdown } from '../content/markdownLoader.js';

export const beeeSubjectDetails = {
  "id": "sub-beee",
  "semester": 1,
  "year": "1st Year",
  "name": "Basic Electrical & Electronics Engineering (BEEE)",
  "code": "BELE-001",
  "credits": 4,
  "instructor": "Prof. S. K. Mukherjee & Faculty",
  "notesCount": "4 Units Comprehensive 2026\u201327 Notes & Solved Papers",
  "rating": 5,
  "description": "Official 2026\u201327 B.Tech Curriculum: DC & AC circuits, KCL/KVL, Thevenin/Norton/Max Power theorems, Single-phase transformers, OC/SC tests, DC & Induction machines, Semiconductor physics, Diodes, BJT, Number systems, Boolean algebra, and K-Maps with university solved questions.",
  "banner": "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=1200&q=80"
};

const unitsMeta = [
  {
    "unitNum": 1,
    "title": "DC Circuits & Single-Phase AC Circuits",
    "examWeightage": "24 - 28 Marks",
    "readingTime": "35 mins",
    "summary": "Circuit analysis from scratch: Active vs Passive elements, Ideal vs Practical sources, Kirchhoff's Laws (KCL & KVL), Superposition, Thevenin's, Norton's & Maximum Power Transfer theorems, AC sinusoidal waveforms, R-L-C series resonance, and Power Factor triangle.",
    "sections": [
      {
        "sectionId": "u1-s1",
        "title": "1. Voltage & Current Sources (Ideal vs Practical)"
      },
      {
        "sectionId": "u1-s2",
        "title": "2. Kirchhoff's Laws (KCL & KVL Made Rigorous)"
      },
      {
        "sectionId": "u1-s3",
        "title": "3. Network Theorems: Superposition, Thevenin, Norton & Max Power"
      },
      {
        "sectionId": "u1-s4",
        "title": "4. Fundamentals of AC & Single-Phase R-L-C Circuits"
      },
      {
        "sectionId": "u1-s5",
        "title": "5. Resonance, Power Factor & Industrial Applications"
      },
      {
        "sectionId": "beee-u1-solved-exam",
        "title": "University Solved Examination Questions (Unit 1)"
      }
    ]
  },
  {
    "unitNum": 2,
    "title": "Transformers & Electrical Machines",
    "examWeightage": "24 - 28 Marks",
    "readingTime": "35 mins",
    "summary": "Magnetic materials & B-H hysteresis loops; Ideal vs Practical Single-Phase Transformer, EMF equation derivation, Equivalent circuit, Losses (Hysteresis & Eddy Current), OC/SC tests, DC Motor principle, Speed control, and 3-Phase/1-Phase Induction Motors.",
    "sections": [
      {
        "sectionId": "u2-s1",
        "title": "1. Magnetic Materials, B-H Characteristics & Hysteresis"
      },
      {
        "sectionId": "u2-s2",
        "title": "2. Transformer Working Principle, EMF Equation & Equivalent Circuit"
      },
      {
        "sectionId": "u2-s3",
        "title": "3. Transformer Losses, Efficiency & The OC/SC Tests"
      },
      {
        "sectionId": "u2-s4",
        "title": "4. DC Motors, Speed Control & Induction Motors"
      },
      {
        "sectionId": "beee-u2-solved-exam",
        "title": "University Solved Examination Questions (Unit 2)"
      }
    ]
  },
  {
    "unitNum": 3,
    "title": "Semiconductor Devices, Diodes & Bipolar Junction Transistors (BJT)",
    "examWeightage": "26 - 30 Marks",
    "readingTime": "40 mins",
    "summary": "Energy band theory of solids, Intrinsic vs Extrinsic semiconductors, P-N junction diode under forward & reverse bias, Breakdown mechanisms (Zener vs Avalanche), Rectifiers (Half-wave, Full-wave, Bridge), Clippers & Clampers, and BJT modes, configurations (CB, CE, CC) & characteristics.",
    "sections": [
      {
        "sectionId": "u3-s1",
        "title": "1. Band Theory of Solids & Semiconductor Physics"
      },
      {
        "sectionId": "u3-s2",
        "title": "2. P-N Junction Diode & V-I Characteristics"
      },
      {
        "sectionId": "u3-s3",
        "title": "3. Rectifier Circuits, Filters, Clippers & Clampers"
      },
      {
        "sectionId": "u3-s4",
        "title": "4. Bipolar Junction Transistors (BJT) Architecture & Characteristics"
      },
      {
        "sectionId": "beee-u3-solved-exam",
        "title": "University Solved Examination Questions (Unit 3)"
      }
    ]
  },
  {
    "unitNum": 4,
    "title": "Number Systems, Boolean Algebra & Digital Logic Circuits",
    "examWeightage": "22 - 26 Marks",
    "readingTime": "35 mins",
    "summary": "Positional number systems (Decimal, Binary, Octal, Hexadecimal) and mutual conversions; 1's and 2's complement subtraction; Digital codes (BCD, Excess-3, Gray); Postulates and theorems of Boolean Algebra; Logic gates & Universal implementations; Karnaugh Maps (2, 3, 4-variable K-Maps).",
    "sections": [
      {
        "sectionId": "u4-s1",
        "title": "1. Number Systems & Mutual Conversions"
      },
      {
        "sectionId": "u4-s2",
        "title": "2. Binary Arithmetic & Complements (1's and 2's)"
      },
      {
        "sectionId": "u4-s3",
        "title": "3. Digital Number Codes: BCD, Excess-3 & Gray Code"
      },
      {
        "sectionId": "u4-s4",
        "title": "4. Boolean Algebra, Logic Gates & Karnaugh Maps (K-Maps)"
      },
      {
        "sectionId": "beee-u4-solved-exam",
        "title": "University Solved Examination Questions (Unit 4)"
      }
    ]
  }
];

export const beeeUnitsData = unitsMeta.map(unit => ({
  ...unit,
  sections: unit.sections.map(sec => ({
    ...sec,
    content: getSectionMarkdown('beee', sec.sectionId),
  })),
}));
