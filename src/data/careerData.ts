export interface CareerField {
  field: string;
  roles: string[];
  coreSkills: string[];
  description: string;
  typicalEducation: string;
  growthOutlook: string;
}

export const FUTURE_JOB_OPPORTUNITIES: CareerField[] = [
  {
    field: "AI and Data",
    roles: ["AI Engineer", "Data Scientist", "Data Analyst", "Machine Learning Specialist"],
    coreSkills: ["Python", "SQL", "Statistics", "Data Analysis", "Machine Learning", "Prompt Engineering"],
    description: "Build models, extract insights from big data, and integrate generative AI capabilities into modern applications.",
    typicalEducation: "Self-taught portfolio, technical degree, or coding bootcamp. Practical projects and demonstrated math/coding skills carry high weight.",
    growthOutlook: "Extremely High (Rapid industry adoption across healthcare, finance, tech, and retail)."
  },
  {
    field: "Software Development",
    roles: ["Software Developer", "Frontend Developer", "Backend Developer", "Full-Stack Engineer"],
    coreSkills: ["Java", "JavaScript / TypeScript", "Python", "Git", "REST APIs", "Databases"],
    description: "Design and implement software products, mobile applications, cloud services, and interactive web tools.",
    typicalEducation: "College degree, self-taught portfolio with deployed projects, or professional certificates.",
    growthOutlook: "Very High (Consistently strong demand across startups to Fortune 500 enterprises)."
  },
  {
    field: "Cybersecurity and Cloud",
    roles: ["Security Analyst", "Cloud Engineer", "DevOps Specialist", "Penetration Tester"],
    coreSkills: ["Networking", "Linux", "Cloud Platforms (AWS/GCP)", "Docker", "OWASP", "Wireshark"],
    description: "Protect critical enterprise data, secure network perimeters, and architect resilient cloud systems.",
    typicalEducation: "Industry certifications (CompTIA Security+, AWS Solutions Architect) and hands-on lab experience (TryHackMe, HackTheBox).",
    growthOutlook: "Critical High (Global shortage of qualified cybersecurity personnel)."
  },
  {
    field: "Finance and Business",
    roles: ["Business Analyst", "Financial Analyst", "Operations Manager", "Product Owner"],
    coreSkills: ["Excel / Spreadsheets", "SQL", "Analytical Thinking", "Communication", "Data Storytelling"],
    description: "Bridge the gap between business strategy, revenue data, market trends, and technical engineering teams.",
    typicalEducation: "Business, finance, or analytics background with strong technical spreadsheet and SQL skills.",
    growthOutlook: "Stable & Strong (High value placed on data-literate business professionals)."
  },
  {
    field: "Green Energy & Clean Tech",
    roles: ["Solar Systems Consultant", "Renewable Energy Engineer", "Sustainability Analyst", "Smart Grid Technician"],
    coreSkills: ["Technical Knowledge", "Project Management", "Data Modeling", "Regulatory Standards"],
    description: "Drive the global transition to renewable solar, wind, and smart energy infrastructure.",
    typicalEducation: "Technical vocational training, engineering degrees, or specialized sustainability certifications.",
    growthOutlook: "Fast Growing (Heavy global investments in decarbonization and clean energy)."
  },
  {
    field: "Healthcare and People-Focused Careers",
    roles: ["Health Informatics Analyst", "Nurse", "Counselor", "Healthcare IT Specialist"],
    coreSkills: ["Empathy", "Communication", "Professional Healthcare Qualifications", "Health Data Systems"],
    description: "Support patient well-being, optimize medical records software, and deliver compassionate human care.",
    typicalEducation: "Accredited clinical degrees, nursing licenses, or specialized medical informatics training.",
    growthOutlook: "Consistently High (Essential human-centric careers that cannot be replaced by automation)."
  }
];

export const CAREER_PILLARS = [
  {
    title: "1. Discover Your Genuine Interest",
    detail: "Coding requires curiosity and persistence. Do you enjoy visual design (Frontend), building underlying engines (Backend), analyzing numbers (Data), or breaking into systems to fix them (Cybersecurity)?"
  },
  {
    title: "2. Build Practical, Demonstrable Skills",
    detail: "Theory alone won't land a tech job. Employers care most about what you have actually built. Work through code practice questions, tutorials, and finish 3-5 real projects."
  },
  {
    title: "3. Understand Realistic Market Opportunities",
    detail: "Salaries and hiring volumes differ widely across cities, countries, and remote markets. Research current local job boards, understand required stacks, and tailor your learning roadmap accordingly."
  },
  {
    title: "4. Continuous Education & Adaptability",
    detail: "Technology moves fast. Top developers aren't those who know everything today, but those who have mastered the ability to learn new tools from zero without fear."
  }
];

export const NINETY_DAY_PLAN = [
  {
    phase: "Phase 1: Weeks 1–2",
    title: "Explore & Target",
    goals: [
      "Research developer career options (Frontend, Backend, Data, etc.).",
      "Read 15-20 live job postings on LinkedIn and Indeed in your target area.",
      "Identify the core 3-4 required technologies and choose your Code From Zero roadmap.",
      "Set up your developer workspace: VS Code, Git CLI, and GitHub account."
    ]
  },
  {
    phase: "Phase 2: Weeks 3–6",
    title: "Learn & Build Fundamentals",
    goals: [
      "Complete the foundation tutorials (HTML, CSS, JavaScript or Python).",
      "Solve at least 50 beginner & intermediate questions in the Code From Zero question bank.",
      "Build your first two standalone projects: a Calculator and a To-Do List.",
      "Push every project to GitHub with clean commit messages and descriptive README files."
    ]
  },
  {
    phase: "Phase 3: Weeks 7–9",
    title: "Portfolio & Professional Profile",
    goals: [
      "Build your third major project (e.g. Weather Forecast App or Student Management System).",
      "Build and deploy your Personal Developer Portfolio website showcasing your projects.",
      "Revamp your resume: emphasize projects, technologies, and quantified problem-solving.",
      "Update your LinkedIn and GitHub profiles with clean professional headlines and project links."
    ]
  },
  {
    phase: "Phase 4: Weeks 10–12",
    title: "Apply, Network & Rehearse Interviews",
    goals: [
      "Apply to 5-10 tailored junior developer roles or internships weekly.",
      "Practice the STAR interview framework for technical and behavioral questions.",
      "Use the Code From Zero AI Interview Coach to rehearse real technical interviews.",
      "Iterate your resume and answers based on interviewer feedback and keep building."
    ]
  }
];

export const INTERVIEW_QUESTIONS = [
  {
    id: "q1",
    question: "Tell me about yourself.",
    category: "Behavioral & Introductory",
    goodAnswer: "Structure your answer in 3 parts: Past (your background and what brought you to coding), Present (what you've built recently, languages mastered, and recent projects), and Future (why you're excited about this specific role).",
    sampleAnswer: "'I started my journey with a deep curiosity for how web platforms work. Over the past year, I've dedicated myself to mastering modern frontend development with JavaScript, React, and TypeScript, building production-ready projects like an interactive finance tracker and API-backed weather app. I love the balance of problem-solving and user empathy in software engineering, and I'm eager to bring that dedication to your team as a junior developer.'",
    tips: "Keep it under 90 seconds. Don't recite your entire life story—focus on your coding passion, accomplishments, and value."
  },
  {
    id: "q2",
    question: "Why do you want to work at this company?",
    category: "Motivation & Company Fit",
    goodAnswer: "Demonstrate that you researched their actual product, engineering culture, or mission. Connect their challenges to what you want to learn and contribute.",
    sampleAnswer: "'I've been following your team's work on simplifying education tools for students. I love that your platform focuses on accessibility and clean UX. Coming from a self-taught background where clear tools made all the difference, contributing to your mission resonates with me deeply.'",
    tips: "Never say 'because I need a job' or give a generic answer that could apply to any company."
  },
  {
    id: "q3",
    question: "Describe a challenging bug or problem you solved.",
    category: "Technical Problem-Solving (STAR)",
    goodAnswer: "Use the STAR method: Situation (the project), Task (what was broken), Action (how you debugged step-by-step), Result (the successful outcome and what you learned).",
    sampleAnswer: "'In my expense tracker app (Situation), transactions were duplicating randomly upon rapid clicks (Task). I used Chrome DevTools and network throttling to replicate the race condition (Action). I realized the submit button wasn't debounced or disabled during asynchronous writes. I implemented an isSubmitting state guard and added request deduplication. As a result, the bug was eliminated and the UX felt noticeably snappier (Result).'",
    tips: "Focus on YOUR specific reasoning and debugging strategy, not just the code fix."
  },
  {
    id: "q4",
    question: "What are your greatest strengths and weaknesses?",
    category: "Self-Awareness",
    goodAnswer: "Strength: a genuine developer asset with proof. Weakness: an authentic technical area you are actively improving with tangible steps.",
    sampleAnswer: "'My greatest strength is tenacity when debugging unfamiliar problems—I break issues down into isolated test cases methodically. My area of improvement has been backend system architecture; because I started on frontend, complex database indexing was initially daunting. To address this, I've been taking dedicated courses on PostgreSQL and completing SQL exercises on Code From Zero.'",
    tips: "Avoid fake weaknesses like 'I work too hard' or 'I'm a perfectionist'."
  },
  {
    id: "q5",
    question: "What did you learn from a mistake you made?",
    category: "Resilience & Growth Mindset",
    goodAnswer: "Choose a real mistake, take full ownership, explain how you corrected it, and explain the preventative system you put in place.",
    sampleAnswer: "'Early on, I accidentally committed an API key to a public GitHub repository. Within minutes of an automated alert, I revoked the key, rotated credentials, and learned how to properly use .env files and .gitignore. More importantly, I installed git pre-commit hooks to automatically block secret leaks in the future.'",
    tips: "Do not blame others or external tools. Ownership shows maturity."
  },
  {
    id: "q6",
    question: "Where do you see yourself in 3 to 5 years?",
    category: "Career Vision",
    goodAnswer: "Express enthusiasm for growing from a capable junior to an autonomous, reliable mid-level engineer who mentors newcomers.",
    sampleAnswer: "'In 3 to 5 years, I see myself as a seasoned full-stack engineer who has taken major features from concept to production. I want to have deepened my knowledge of distributed systems and cloud architecture, while helping onboard and mentor newer junior developers.'",
    tips: "Align your vision with continuous engineering craftsmanship."
  },
  {
    id: "q7",
    question: "Why should we hire you over other candidates?",
    category: "Value Proposition",
    goodAnswer: "Highlight your hunger to learn, proven track record of shipping projects independently, strong communication skills, and positive attitude.",
    sampleAnswer: "'While there may be candidates with more years of formal schooling, I bring an exceptionally high rate of learning, deep self-motivation, and hands-on proof: I've built, debugged, and shipped multiple full-stack projects independently. I communicate clearly, welcome constructive critique, and will work relentlessly to deliver value to your team from day one.'",
    tips: "Remain confident yet humble."
  }
];

export const QUESTIONS_TO_ASK_INTERVIEWERS = [
  "What does a typical day or sprint look like for a junior developer on your team?",
  "How does your engineering team handle code reviews, mentorship, and knowledge sharing?",
  "What are the most challenging technical problems the team is currently solving?",
  "What would success look like in this role during the first 90 days?",
  "What tech stack migrations or architectural improvements are planned for the upcoming year?"
];
