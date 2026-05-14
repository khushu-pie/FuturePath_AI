export interface Salary {
  level: string;
  amount: number;
}

export interface RoadmapStep {
  stage: string;
  duration: string;
  description: string;
}

export interface Career {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  color: string;
  overview: string;
  dailyWorkflow: string[];
  skills: {
    technical: string[];
    soft: string[];
  };
  roadmap: RoadmapStep[];
  salary: Salary[];
  futureScope: string;
  workLifeBalance: string;
}

export interface Decision {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface Scenario {
  id: string;
  career: string;
  situation: string;
  decisions: Decision[];
  difficulty: "easy" | "medium" | "hard";
  skillTested: string;
}

export interface UserScore {
  career: string;
  score: number;
  traits: {
    analytical: number;
    creativity: number;
    leadership: number;
    ethics: number;
    communication: number;
  };
  timestamp: number;
}
