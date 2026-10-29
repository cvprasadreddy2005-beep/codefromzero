import { UserProfile, SuitrateInfo, PerformanceLevel } from '../types';

/**
 * Calculates the Account Suitrate (Suitability Rate) for a user profile.
 * Suitrate represents the candidate's account readiness and qualification level
 * for entry/junior software engineering positions, determined by:
 * - Practice questions solved vs targeted curriculum
 * - Step-by-step tutorial lessons completed
 * - First-time accuracy vs incorrect attempts
 * - Consistency and study streak days
 */
export function calculateAccountSuitrate(user: UserProfile | null): SuitrateInfo {
  if (!user) {
    return {
      rate: 55,
      level: 'average',
      label: 'Initial Suitrate',
      badgeColor: 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
      textColor: 'text-indigo-600 dark:text-indigo-400',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      summary: 'Baseline account suitability for new visitors. Create an account and complete practices to boost it.'
    };
  }

  const solvedCount = user.completedQuestionIds?.length || 0;
  const lessonsCount = user.completedLessons?.length || 0;
  const incorrectCount = user.incorrectAttemptsCount || 0;
  const streak = user.studyStreakDays || 1;

  // Total attempt events
  const totalEvents = solvedCount + incorrectCount;
  const accuracy = totalEvents > 0 ? (solvedCount / totalEvents) : 0.85;

  // Formula components:
  // 1. Solved factor (up to 35 points: 15 questions = ~30 pts)
  const questionFactor = Math.min(35, solvedCount * 3.5);

  // 2. Lesson completion factor (up to 25 points: 8 lessons = ~24 pts)
  const lessonFactor = Math.min(25, lessonsCount * 4.0);

  // 3. Accuracy factor (up to 25 points: 100% accuracy = 25 pts)
  const accuracyFactor = Math.round(accuracy * 25);

  // 4. Streak consistency factor (up to 15 points: 5 days = 15 pts)
  const streakFactor = Math.min(15, streak * 3);

  // Base onboarding score of 20 points
  const rawScore = Math.round(20 + questionFactor + lessonFactor + accuracyFactor + streakFactor);
  const rate = Math.max(15, Math.min(100, rawScore));

  let level: PerformanceLevel = 'average';
  let label = 'Moderate Suitrate';
  let badgeColor = 'bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800';
  let textColor = 'text-amber-600 dark:text-amber-400';
  let borderColor = 'border-amber-200 dark:border-amber-800';
  let summary = 'Developing baseline suitability. Practice in weak categories to elevate to Good standing.';

  if (rate >= 70) {
    level = 'good';
    label = 'Good / Strong Suitrate';
    badgeColor = 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
    textColor = 'text-emerald-600 dark:text-emerald-400';
    borderColor = 'border-emerald-200 dark:border-emerald-800';
    summary = 'Outstanding account suitrate! Your problem-solving volume and accuracy indicate high job readiness.';
  } else if (rate < 45) {
    level = 'poor';
    label = 'Poor / Needs Attention';
    badgeColor = 'bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800';
    textColor = 'text-rose-600 dark:text-rose-400';
    borderColor = 'border-rose-200 dark:border-rose-800';
    summary = 'Account suitrate is below recommended threshold. Review tutorials and complete foundational challenges.';
  }

  return {
    rate,
    level,
    label,
    badgeColor,
    textColor,
    borderColor,
    summary
  };
}

export function getPerformanceBadge(level: PerformanceLevel) {
  switch (level) {
    case 'good':
      return {
        label: 'Good Performance',
        badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800',
        dot: 'bg-emerald-500',
        color: 'text-emerald-600 dark:text-emerald-400'
      };
    case 'average':
      return {
        label: 'Average Performance',
        badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800',
        dot: 'bg-indigo-500',
        color: 'text-indigo-600 dark:text-indigo-400'
      };
    case 'poor':
      return {
        label: 'Poor Performance',
        badge: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-300 dark:border-rose-800',
        dot: 'bg-rose-500',
        color: 'text-rose-600 dark:text-rose-400'
      };
  }
}
