import { Career } from "@/types";

export const careers: Career[] = [
  {
    slug: "software-engineer",
    title: "Software Engineer",
    tagline: "Build products used by millions",
    icon: "Code",
    color: "#6366F1",
    overview: "Software engineers design, build, and maintain computer software and systems. They solve complex problems using code and work at the intersection of logic and creativity.",
    dailyWorkflow: [
      "Morning standup meeting with the team",
      "Writing and reviewing code",
      "Debugging and fixing system issues",
      "Designing new features and architecture",
      "Collaborating with designers and product managers"
    ],
    skills: {
      technical: ["Data Structures", "Algorithms", "React", "Node.js", "System Design"],
      soft: ["Problem solving", "Analytical thinking", "Teamwork", "Continuous learning"]
    },
    roadmap: [
      { stage: "Class 11–12", duration: "2 years", description: "PCM with Computer Science" },
      { stage: "Undergraduate", duration: "4 years", description: "B.Tech in CS or BCA + MCA" },
      { stage: "Specialization", duration: "Ongoing", description: "Internships and projects" }
    ],
    salary: [
      { level: "Fresher", amount: 600000 },
      { level: "Mid (3–5 yrs)", amount: 1500000 },
      { level: "Senior (8+ yrs)", amount: 3500000 }
    ],
    futureScope: "AI, cloud computing, and SaaS are booming. Demand for skilled engineers remains at an all-time high.",
    workLifeBalance: "Moderate to Good. Startups may demand more hours, but big tech companies offer great balance."
  },
  {
    slug: "doctor",
    title: "Doctor (MBBS/MD)",
    tagline: "Save lives and heal communities",
    icon: "Stethoscope",
    color: "#EF4444",
    overview: "Doctors diagnose illnesses, treat injuries, and provide medical care. It is a highly respected and noble profession requiring deep empathy and scientific knowledge.",
    dailyWorkflow: [
      "Patient consultations and check-ups",
      "Performing surgeries or medical procedures",
      "Reviewing lab reports and test results",
      "Prescribing medicines and treatment plans",
      "Continuing medical education and research"
    ],
    skills: {
      technical: ["Anatomy", "Pharmacology", "Surgical Skills", "Diagnostic Logic"],
      soft: ["Empathy", "Patience", "Resilience", "Ethical judgment"]
    },
    roadmap: [
      { stage: "Class 11–12", duration: "2 years", description: "Physics, Chemistry, Biology (PCB)" },
      { stage: "MBBS", duration: "5.5 years", description: "Undergraduate medical degree" },
      { stage: "MD/MS", duration: "3 years", description: "Specialization (e.g., Cardiology, Surgery)" }
    ],
    salary: [
      { level: "Resident", amount: 800000 },
      { level: "Specialist", amount: 2000000 },
      { level: "Senior Consultant", amount: 5000000 }
    ],
    futureScope: "The healthcare sector is growing rapidly. Telemedicine and personalized medicine are the future.",
    workLifeBalance: "Challenging. Long hours and emergency calls are common, especially in early years."
  },
  {
    slug: "ias-officer",
    title: "IAS Officer",
    tagline: "Shape the nation's policies",
    icon: "Shield",
    color: "#F59E0B",
    overview: "Indian Administrative Service (IAS) officers are the backbone of India's administration. They manage government policies and work for public welfare.",
    dailyWorkflow: [
      "Overseeing government department functions",
      "Implementing policies at the district level",
      "Public meetings and grievance redressal",
      "Coordinating with political leadership",
      "Crisis management and disaster relief"
    ],
    skills: {
      technical: ["Law", "Governance", "Public Policy", "Crisis Management"],
      soft: ["Leadership", "Integrity", "Decision making", "Public speaking"]
    },
    roadmap: [
      { stage: "Graduation", duration: "3-4 years", description: "Any stream (Science, Commerce, Arts)" },
      { stage: "UPSC CSE", duration: "1-2 years", description: "Preparation and 3-stage exam" },
      { stage: "LBSNAA Training", duration: "2 years", description: "Professional training for officers" }
    ],
    salary: [
      { level: "SDM", amount: 700000 },
      { level: "Collector", amount: 1200000 },
      { level: "Chief Secretary", amount: 3000000 }
    ],
    futureScope: "Eternal relevance. IAS officers play a critical role in India's development journey.",
    workLifeBalance: "Demanding. High responsibility and public scrutiny mean work is often 24/7."
  },
  {
    slug: "chartered-accountant",
    title: "Chartered Accountant (CA)",
    tagline: "The financial guardians of business",
    icon: "Calculator",
    color: "#10B981",
    overview: "CAs are financial experts who handle audits, taxation, and corporate finance. They are the most trusted advisors for any business enterprise.",
    dailyWorkflow: [
      "Auditing financial statements",
      "Planning and filing taxes for clients",
      "Financial consultancy and investment advice",
      "Corporate law compliance checks",
      "Budgeting and cost analysis"
    ],
    skills: {
      technical: ["Accounting", "Taxation", "Auditing", "Financial Reporting"],
      soft: ["Attention to detail", "Analytical mind", "Ethical integrity"]
    },
    roadmap: [
      { stage: "CA Foundation", duration: "6 months", description: "Entry level exam after Class 12" },
      { stage: "CA Intermediate", duration: "1 year", description: "Second level after Foundation" },
      { stage: "Articleship", duration: "2 years", description: "Practical training under a CA" },
      { stage: "CA Final", duration: "1 year", description: "Final exam and membership" }
    ],
    salary: [
      { level: "Fresher", amount: 750000 },
      { level: "Manager", amount: 1800000 },
      { level: "Partner", amount: 4500000 }
    ],
    futureScope: "GST and complex financial regulations make CAs indispensable for modern business.",
    workLifeBalance: "Cyclical. Extremely busy during tax and audit seasons; balanced otherwise."
  },
  {
    slug: "mba-manager",
    title: "MBA Manager",
    tagline: "Lead teams and scale businesses",
    icon: "Briefcase",
    color: "#3B82F6",
    overview: "MBA graduates manage various business functions like Marketing, Finance, HR, and Operations. They are strategic leaders who drive organizational growth.",
    dailyWorkflow: [
      "Strategic planning and goal setting",
      "Leading team meetings and brainstorming",
      "Data-driven performance reviews",
      "Client relationship management",
      "Budgeting and P&L management"
    ],
    skills: {
      technical: ["Marketing", "Finance", "Strategy", "Operations"],
      soft: ["Leadership", "Negotiation", "Communication", "Adaptability"]
    },
    roadmap: [
      { stage: "Graduation", duration: "3-4 years", description: "Any stream (Engineering/Commerce common)" },
      { stage: "MBA Entrance", duration: "1 year", description: "CAT, GMAT, XAT exams" },
      { stage: "MBA/PGDM", duration: "2 years", description: "Degree from a top B-School" }
    ],
    salary: [
      { level: "Management Trainee", amount: 1000000 },
      { level: "Senior Manager", amount: 2500000 },
      { level: "VP / Director", amount: 6000000 }
    ],
    futureScope: "High demand across all industries, especially in tech and management consulting.",
    workLifeBalance: "Moderate. High-pressure roles but usually within structured corporate hours."
  }
];
