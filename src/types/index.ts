export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type QuestionType =
  | 'Multiple-Choice'
  | 'Coding'
  | 'Output-Prediction'
  | 'Find-The-Error'
  | 'SQL'
  | 'Conceptual'
  | 'Algorithm'
  | 'Debugging';

export interface CodeExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface Question {
  id: number;
  category: string;
  difficulty: Difficulty;
  topic: string;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer?: string | number | null;
  hints: string[];
  solution: string;
  code?: string;
  explanation: string;
  examples?: CodeExample[];
  constraints?: string[];
  timeComplexity?: string | null;
  spaceComplexity?: string | null;
  tags: string[];
}

export interface CategoryInfo {
  name: string;
  count: number;
  icon: string;
  description: string;
}

export interface RoadmapTopic {
  id: string;
  title: string;
  description: string;
  skills: string[];
  duration: string;
  practiceTasks: string[];
  miniProject?: string;
}

export interface RoadmapMonth {
  month: number;
  title: string;
  focus: string;
  topics: RoadmapTopic[];
}

export interface Roadmap {
  id: string;
  title: string;
  category: string;
  difficulty: Difficulty;
  estimatedDuration: string;
  careerDescription: string;
  requiredSkills: string[];
  languagesAndTech: string[];
  tools: string[];
  months: RoadmapMonth[];
  finalProjects: { name: string; description: string; tech: string[] }[];
  careerOpportunities: { role: string; salaryRange: string; demand: string }[];
}

export interface LessonExercise {
  title?: string;
  difficulty?: Difficulty;
  task?: string;
  question?: string;
  instructions?: string;
  hint: string;
  solution?: string;
  explanation?: string;
}

export interface LessonQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed index of correct option
  explanation: string;
}

export interface TutorialLesson {
  id: string;
  title: string;
  section: string;
  introduction?: string;
  simpleExplanation?: string;
  syntax: string;
  syntaxExplanation?: string;
  codeExample: string;
  expectedOutput: string;
  commonMistakes: string[];
  practiceExercises: LessonExercise[];
  summary?: string;
  relatedLessons?: string[];
  difficulty?: Difficulty;
  duration?: string;
  keyConcepts?: string[];

  // Master Curriculum Extended Fields
  moduleNumber?: number;
  moduleTitle?: string;
  meaning?: string;
  definition?: string;
  whyUseIt?: string;
  codeExplanation?: string[];
  realWorldApplications?: string[];
  bestPractices?: string[];
  exercises?: LessonExercise[];
  quiz?: LessonQuizQuestion[];
  cssExample?: string;
  jsExample?: string;
  isProject?: boolean;
  interviewQuestions?: {
    question: string;
    answer: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced';
    codeExample?: string;
    followUp?: string;
    followUpAnswer?: string;
  }[];
  codingChallenges?: {
    title: string;
    description?: string;
    task?: string;
    solution: string;
    hint?: string;
    difficulty?: Difficulty | string;
  }[];
  multipleExamples?: {
    title: string;
    description: string;
    code: string;
    output?: string;
  }[];
}

export interface Tutorial {
  id: string;
  name: string;
  language: string;
  tagline: string;
  lessons: TutorialLesson[];
}

export interface ProjectItem {
  id: string;
  title: string;
  difficulty: Difficulty;
  category: string;
  description: string;
  requiredTech: string[];
  skillsLearned: string[];
  objectives: string[];
  steps: { stepNumber: number; title: string; detail: string; codeSnippet?: string }[];
  relatedTutorials: string[];
  relatedRoadmaps: string[];
}

export interface QuestionCompletionRecord {
  questionId: number;
  completedAt: string;
  category?: string;
  difficulty?: Difficulty;
}

export interface LessonCompletionRecord {
  lessonId: string;
  tutorialId: string;
  completedAt: string;
}

export type PerformanceLevel = 'good' | 'average' | 'poor';

export interface UserActivityLog {
  id: string;
  type: 'question_solved' | 'question_unmarked' | 'lesson_completed' | 'lesson_unmarked' | 'quiz_incorrect' | 'code_tested';
  title: string;
  category?: string;
  difficulty?: Difficulty;
  timestamp: string;
  status: PerformanceLevel;
  details?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinedAt: string;
  lastActiveDate?: string;
  bookmarkedQuestionIds: number[];
  completedQuestionIds: number[];
  completedQuestionDetails?: Record<number, QuestionCompletionRecord>;
  completedLessons: string[]; // lesson ids
  completedLessonDetails?: Record<string, LessonCompletionRecord>;
  completedRoadmapTopics: string[]; // topic ids
  savedRoadmapIds: string[];
  currentRoleTarget?: string;
  activities?: UserActivityLog[];
  incorrectAttemptsCount?: number;
  studyStreakDays?: number;
  lastDailyChallengeDate?: string;
  completedDailyChallengeDates?: string[];
  accountSuitrate?: number;
}

export interface SuitrateInfo {
  rate: number;
  level: PerformanceLevel;
  label: string;
  badgeColor: string;
  textColor: string;
  borderColor: string;
  summary: string;
}


