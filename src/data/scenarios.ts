import { Scenario } from "@/types";

export const scenarios: Scenario[] = [
  // SOFTWARE ENGINEER
  {
    id: "se-1",
    career: "software-engineer",
    situation: "SCENE: Late Friday night. Your team's core API is experiencing a memory leak. If it crashes, thousands of users will lose data. Do you stay to fix it or automate a restart script?",
    difficulty: "medium",
    skillTested: "System Reliability",
    decisions: [
      {
        id: "se-1-a",
        text: "Write a quick cron job to restart the server every hour.",
        isCorrect: false,
        explanation: "This is a 'band-aid' solution that hides the real problem. Memory leaks can accelerate and crash the system between restarts."
      },
      {
        id: "se-1-b",
        text: "Stay late, profile the memory usage, and find the root cause.",
        isCorrect: true,
        explanation: "Identifying the root cause ensures long-term stability and prevents data loss. Good engineers prioritize stability over temporary fixes."
      }
    ]
  },
  {
    id: "se-2",
    career: "software-engineer",
    situation: "The Product Manager wants to ship a feature in 2 days that usually takes 2 weeks. They suggest skipping unit tests to meet the deadline. What's your move?",
    difficulty: "hard",
    skillTested: "Quality Assurance",
    decisions: [
      {
        id: "se-2-a",
        text: "Agree to skip tests but promise to write them later.",
        isCorrect: false,
        explanation: "Tests written 'later' often never happen. This technical debt leads to bugs that are harder to fix in production."
      },
      {
        id: "se-2-b",
        text: "Negotiate to ship a 'Minimum Viable Product' (MVP) with tests instead of the full feature.",
        isCorrect: true,
        explanation: "Reducing scope while maintaining quality is the hallmark of a senior engineer. It delivers value without risking the codebase."
      }
    ]
  },

  // DOCTOR
  {
    id: "doc-1",
    career: "doctor",
    situation: "SCENE: Emergency Room. A patient is allergic to penicillin but requires immediate antibiotics for a severe infection. The alternative medicine is currently out of stock. What do you do?",
    difficulty: "hard",
    skillTested: "Medical Ethics",
    decisions: [
      {
        id: "doc-1-a",
        text: "Administer the penicillin and keep the crash cart nearby just in case.",
        isCorrect: false,
        explanation: "Intentionally inducing an allergic reaction is extremely dangerous and violates the 'First, do no harm' principle."
      },
      {
        id: "doc-1-b",
        text: "Stabilize the patient and urgently request the alternative from a nearby hospital.",
        isCorrect: true,
        explanation: "Safety first. While it takes time, getting the correct non-allergenic medication is the only safe path."
      }
    ]
  },
  {
    id: "doc-2",
    career: "doctor",
    situation: "You notice a senior surgeon making a minor but visible error during a procedure. How do you handle it?",
    difficulty: "medium",
    skillTested: "Professional Integrity",
    decisions: [
      {
        id: "doc-2-a",
        text: "Stay silent to avoid offending a senior and risking your career.",
        isCorrect: false,
        explanation: "In medicine, hierarchy should never come before patient safety. Silence can lead to complications."
      },
      {
        id: "doc-2-b",
        text: "Politely point out the observation immediately to allow for correction.",
        isCorrect: true,
        explanation: "Patient safety is paramount. Speaking up respectfully is a core duty of every medical professional."
      }
    ]
  },

  // IAS OFFICER
  {
    id: "ias-1",
    career: "ias-officer",
    situation: "SCENE: District Collector's Office. A powerful local politician is pressuring you to approve a project that violates environmental laws. Thousands of jobs are at stake, but the local river will be polluted.",
    difficulty: "hard",
    skillTested: "Governance",
    decisions: [
      {
        id: "ias-1-a",
        text: "Approve the project to ensure economic growth and jobs for the district.",
        isCorrect: false,
        explanation: "IAS officers must uphold the law. Ignoring environmental regulations for short-term gain is a violation of public trust."
      },
      {
        id: "ias-1-b",
        text: "Reject the project and suggest a modified plan that complies with environmental standards.",
        isCorrect: true,
        explanation: "Upholding the law while facilitating development is the core role of an administrator."
      }
    ]
  },
  {
    id: "ias-2",
    career: "ias-officer",
    situation: "A major flood has hit your district. Resources are limited. Do you focus on the urban center or the remote villages first?",
    difficulty: "medium",
    skillTested: "Crisis Management",
    decisions: [
      {
        id: "ias-2-a",
        text: "Focus on the urban center where the population density is higher.",
        isCorrect: false,
        explanation: "Remote areas are often more vulnerable and lose communication faster. Triage must be based on need, not just density."
      },
      {
        id: "ias-2-b",
        text: "Deploy a distributed response team to both, prioritizing the most vulnerable and cut-off zones.",
        isCorrect: true,
        explanation: "Effective crisis management involves balancing resources to ensure no area is completely neglected."
      }
    ]
  },

  // CHARTERED ACCOUNTANT
  {
    id: "ca-1",
    career: "chartered-accountant",
    situation: "SCENE: Audit Meeting. You find a discrepancy in a major client's tax filings. The client offers a 'consultancy fee' to look the other way. What's your move?",
    difficulty: "hard",
    skillTested: "Professional Ethics",
    decisions: [
      {
        id: "ca-1-a",
        text: "Accept the fee and classify the discrepancy as a 'clerical error'.",
        isCorrect: false,
        explanation: "Professional misconduct can lead to the loss of your license and criminal charges. Integrity is a CA's greatest asset."
      },
      {
        id: "ca-1-b",
        text: "Report the discrepancy and advise the client on the legal path to rectify it.",
        isCorrect: true,
        explanation: "A CA's duty is to ensure financial transparency and legal compliance. Honesty protects both you and the profession."
      }
    ]
  },
  {
    id: "ca-2",
    career: "chartered-accountant",
    situation: "A client wants to invest heavily in a high-risk venture. Their current cash flow is unstable. Do you support the move?",
    difficulty: "medium",
    skillTested: "Financial Planning",
    decisions: [
      {
        id: "ca-2-a",
        text: "Yes, because the potential returns could solve their cash flow issues.",
        isCorrect: false,
        explanation: "Gambling with unstable cash flow is poor financial advice. Sustainability must come before high-risk growth."
      },
      {
        id: "ca-2-b",
        text: "No, advise them to stabilize their core business first and build a reserve.",
        isCorrect: true,
        explanation: "Prudent financial management involves mitigating risk and ensuring solvency before expansion."
      }
    ]
  },

  // MBA MANAGER
  {
    id: "mba-1",
    career: "mba-manager",
    situation: "SCENE: Boardroom. Your team has missed its quarterly sales target. You need to present the results to the CEO. Do you blame market conditions or take responsibility?",
    difficulty: "medium",
    skillTested: "Leadership",
    decisions: [
      {
        id: "mba-1-a",
        text: "Prepare a presentation showing how external market factors caused the failure.",
        isCorrect: false,
        explanation: "Passing the blame shows a lack of leadership and accountability. It fails to address internal weaknesses."
      },
      {
        id: "mba-1-b",
        text: "Accept responsibility, present the internal gaps, and provide a clear turnaround plan.",
        isCorrect: true,
        explanation: "Great managers own the results. Proposing a solution builds confidence and shows strategic thinking."
      }
    ]
  },
  {
    id: "mba-2",
    career: "mba-manager",
    situation: "Two of your top performers are having a personal conflict that is affecting the team's morale. How do you intervene?",
    difficulty: "medium",
    skillTested: "Conflict Resolution",
    decisions: [
      {
        id: "mba-2-a",
        text: "Tell them to keep their personal issues out of the office or face consequences.",
        isCorrect: false,
        explanation: "Threats don't solve underlying conflicts. They often lead to resentment and further loss of productivity."
      },
      {
        id: "mba-2-b",
        text: "Hold a mediated session to understand their concerns and find a professional middle ground.",
        isCorrect: true,
        explanation: "Conflict resolution through communication fosters a healthier work culture and retains talent."
      }
    ]
  }
];
