import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { UserProfile, Difficulty, QuestionCompletionRecord, LessonCompletionRecord, UserActivityLog, PerformanceLevel, SuitrateInfo } from '../types';
import { calculateAccountSuitrate } from '../utils/suitrate';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  suitrateInfo: SuitrateInfo;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  changePassword: (currentPassword: string, newPassword: string) => Promise<{ success: boolean; error?: string }>;
  toggleBookmarkQuestion: (questionId: number) => void;
  toggleCompleteQuestion: (questionId: number, category?: string, difficulty?: Difficulty) => void;
  markQuestionComplete: (questionId: number, isCompleted: boolean, category?: string, difficulty?: Difficulty) => void;
  toggleCompleteRoadmapTopic: (topicId: string) => void;
  toggleCompleteLesson: (lessonId: string, tutorialId?: string) => void;
  markLessonComplete: (lessonId: string, isCompleted: boolean, tutorialId?: string) => void;
  toggleSaveRoadmap: (roadmapId: string) => void;
  resetAllProgress: () => void;
  getQuestionProgress: (questionId: number) => { isCompleted: boolean; isBookmarked: boolean; completedAt?: string };
  getLessonProgress: (lessonId: string) => { isCompleted: boolean; completedAt?: string };
  logActivity: (activity: Omit<UserActivityLog, 'id' | 'timestamp'>) => void;
  recordIncorrectAttempt: (questionId: number, category?: string, difficulty?: Difficulty, details?: string) => void;
  completeDailyChallenge: (questionId: number) => { streakUpdated: boolean; newStreak: number };
}

const STORAGE_KEY_USER = 'cfz_current_user_v1';
const STORAGE_KEY_USERS_DB = 'cfz_registered_users_v1';

const getInitialActivities = (now: string): UserActivityLog[] => [
  {
    id: 'act-init-1',
    type: 'question_solved',
    title: 'Solved Question #1: HTML5 Document Structure',
    category: 'HTML',
    difficulty: 'Beginner',
    timestamp: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
    status: 'good',
    details: 'Answered correctly on first attempt with 100% precision.'
  },
  {
    id: 'act-init-2',
    type: 'lesson_completed',
    title: 'Completed Lesson: HTML5 & Page Structure',
    category: 'html',
    timestamp: new Date(Date.now() - 3600000 * 24 * 2 + 1800000).toISOString(),
    status: 'good',
    details: 'Mastered tags, syntax rules, and hands-on exercises.'
  },
  {
    id: 'act-init-3',
    type: 'quiz_incorrect',
    title: 'Practice Check: JavaScript Array Mutation vs Non-mutation',
    category: 'JavaScript',
    difficulty: 'Intermediate',
    timestamp: new Date(Date.now() - 3600000 * 18).toISOString(),
    status: 'poor',
    details: 'Incorrect option chosen. Splice() vs Slice() concept needs revision.'
  },
  {
    id: 'act-init-4',
    type: 'code_tested',
    title: 'Tested Code Simulator: Two Sum Algorithm',
    category: 'Algorithms',
    difficulty: 'Beginner',
    timestamp: new Date(Date.now() - 3600000 * 6).toISOString(),
    status: 'average',
    details: 'Passed basic test cases. Time complexity O(N^2) can be optimized to O(N).'
  },
  {
    id: 'act-init-5',
    type: 'question_solved',
    title: 'Solved Question #76: JavaScript Arrow Functions & Scope',
    category: 'JavaScript',
    difficulty: 'Beginner',
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: 'good',
    details: 'Understood lexical `this` binding and concise syntax.'
  }
];

// Default guest profile if not logged in
const createDefaultGuestProfile = (): UserProfile => {
  const now = new Date().toISOString();
  return {
    id: 'guest',
    name: 'Guest Learner',
    email: 'guest@codefromzero.dev',
    joinedAt: now,
    lastActiveDate: now,
    bookmarkedQuestionIds: [2, 15],
    completedQuestionIds: [1, 76],
    completedQuestionDetails: {
      1: { questionId: 1, completedAt: new Date(Date.now() - 3600000 * 48).toISOString(), category: 'HTML', difficulty: 'Beginner' },
      76: { questionId: 76, completedAt: new Date(Date.now() - 3600000 * 2).toISOString(), category: 'JavaScript', difficulty: 'Beginner' }
    },
    completedRoadmapTopics: ['fe-m1-1'],
    completedLessons: ['html-1'],
    completedLessonDetails: {
      'html-1': { lessonId: 'html-1', tutorialId: 'html', completedAt: new Date(Date.now() - 3600000 * 48).toISOString() }
    },
    savedRoadmapIds: ['frontend-developer'],
    currentRoleTarget: 'Frontend Developer',
    activities: getInitialActivities(now),
    incorrectAttemptsCount: 1,
    studyStreakDays: 3
  };
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_USER);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object' && Array.isArray(parsed.completedQuestionIds)) {
          const now = new Date().toISOString();
          return {
            ...parsed,
            completedQuestionDetails: parsed.completedQuestionDetails || {},
            completedLessonDetails: parsed.completedLessonDetails || {},
            lastActiveDate: parsed.lastActiveDate || now,
            activities: Array.isArray(parsed.activities) && parsed.activities.length > 0 
              ? parsed.activities 
              : getInitialActivities(now),
            incorrectAttemptsCount: typeof parsed.incorrectAttemptsCount === 'number' ? parsed.incorrectAttemptsCount : 1,
            studyStreakDays: typeof parsed.studyStreakDays === 'number' ? parsed.studyStreakDays : 3
          };
        }
      }
    } catch (e) {
      console.warn('Failed to parse stored user, initializing fresh session:', e);
    }
    return createDefaultGuestProfile();
  });

  // Sync current user state to localStorage
  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
        
        // Also update the user in the registered users DB if not guest
        if (user.id !== 'guest') {
          const rawDb = localStorage.getItem(STORAGE_KEY_USERS_DB);
          const usersDb: Record<string, any> = rawDb ? JSON.parse(rawDb) : {};
          if (usersDb[user.email]) {
            usersDb[user.email].profile = user;
            localStorage.setItem(STORAGE_KEY_USERS_DB, JSON.stringify(usersDb));
          }
        }
      } catch (err) {
        console.error('Failed to sync user state to localStorage:', err);
      }
    }
  }, [user]);

  const login = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !pass) {
      return { success: false, error: 'Please enter both email and password.' };
    }

    try {
      const rawDb = localStorage.getItem(STORAGE_KEY_USERS_DB);
      const usersDb: Record<string, any> = rawDb ? JSON.parse(rawDb) : {};
      
      const record = usersDb[cleanEmail];
      if (!record) {
        // Allow instant demo login for demo credentials or offer registration
        if (cleanEmail === 'demo@codefromzero.dev' || cleanEmail === 'cvprasadreddy2005@gmail.com') {
          const now = new Date().toISOString();
          const demoUser: UserProfile = {
            id: 'user_' + Date.now(),
            name: cleanEmail.split('@')[0],
            email: cleanEmail,
            joinedAt: now,
            lastActiveDate: now,
            bookmarkedQuestionIds: [1, 2, 76, 156],
            completedQuestionIds: [1, 3, 4, 76, 96],
            completedQuestionDetails: {
              1: { questionId: 1, completedAt: now, category: 'HTML', difficulty: 'Beginner' },
              3: { questionId: 3, completedAt: now, category: 'HTML', difficulty: 'Beginner' },
              4: { questionId: 4, completedAt: now, category: 'HTML', difficulty: 'Beginner' },
              76: { questionId: 76, completedAt: now, category: 'JavaScript', difficulty: 'Beginner' },
              96: { questionId: 96, completedAt: now, category: 'JavaScript', difficulty: 'Intermediate' }
            },
            completedRoadmapTopics: ['fe-m1-1', 'fe-m1-2'],
            completedLessons: ['html-1', 'css-1'],
            completedLessonDetails: {
              'html-1': { lessonId: 'html-1', tutorialId: 'html', completedAt: now },
              'css-1': { lessonId: 'css-1', tutorialId: 'css', completedAt: now }
            },
            savedRoadmapIds: ['frontend-developer', 'fullstack-developer'],
            currentRoleTarget: 'Full-Stack Developer',
            activities: getInitialActivities(now),
            incorrectAttemptsCount: 2,
            studyStreakDays: 5
          };
          setUser(demoUser);
          return { success: true };
        }
        return { success: false, error: 'No account found with this email. Please sign up first!' };
      }

      if (record.password !== pass) {
        return { success: false, error: 'Incorrect password. Please try again.' };
      }

      const restoredProfile: UserProfile = {
        ...record.profile,
        completedQuestionDetails: record.profile.completedQuestionDetails || {},
        completedLessonDetails: record.profile.completedLessonDetails || {},
        lastActiveDate: new Date().toISOString(),
        activities: record.profile.activities || getInitialActivities(new Date().toISOString()),
        incorrectAttemptsCount: record.profile.incorrectAttemptsCount || 0,
        studyStreakDays: record.profile.studyStreakDays || 3
      };

      setUser(restoredProfile);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Login failed.' };
    }
  };

  const register = async (name: string, email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    if (!cleanName || cleanName.length < 2) {
      return { success: false, error: 'Please enter a valid full name (at least 2 characters).' };
    }
    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return { success: false, error: 'Please provide a valid email address.' };
    }
    if (!pass || pass.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters long.' };
    }

    try {
      const rawDb = localStorage.getItem(STORAGE_KEY_USERS_DB);
      const usersDb: Record<string, any> = rawDb ? JSON.parse(rawDb) : {};

      if (usersDb[cleanEmail]) {
        return { success: false, error: 'An account with this email address already exists. Please sign in instead.' };
      }

      // Preserve guest progress if user was practicing before signing up!
      const currentCompletedQ = user ? user.completedQuestionIds : [];
      const currentQDetails = user?.completedQuestionDetails || {};
      const currentBookmarkedQ = user ? user.bookmarkedQuestionIds : [];
      const currentTopics = user ? user.completedRoadmapTopics : [];
      const currentLessons = user ? user.completedLessons : [];
      const currentLessonDetails = user?.completedLessonDetails || {};
      const now = new Date().toISOString();

      const newProfile: UserProfile = {
        id: 'usr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        name: cleanName,
        email: cleanEmail,
        joinedAt: now,
        lastActiveDate: now,
        bookmarkedQuestionIds: currentBookmarkedQ,
        completedQuestionIds: currentCompletedQ,
        completedQuestionDetails: currentQDetails,
        completedRoadmapTopics: currentTopics,
        completedLessons: currentLessons,
        completedLessonDetails: currentLessonDetails,
        savedRoadmapIds: ['frontend-developer'],
        currentRoleTarget: 'Frontend Developer',
        activities: user?.activities || getInitialActivities(now),
        incorrectAttemptsCount: user?.incorrectAttemptsCount || 0,
        studyStreakDays: 1,
        accountSuitrate: 65
      };

      const calculatedRate = calculateAccountSuitrate(newProfile).rate;
      newProfile.accountSuitrate = calculatedRate;

      usersDb[cleanEmail] = {
        password: pass,
        profile: newProfile
      };

      localStorage.setItem(STORAGE_KEY_USERS_DB, JSON.stringify(usersDb));
      setUser(newProfile);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Account registration failed.' };
    }
  };

  const logout = () => {
    const guest = createDefaultGuestProfile();
    setUser(guest);
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(guest));
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    setUser(prev => prev ? { ...prev, ...updates, lastActiveDate: new Date().toISOString() } : null);
  };

  const changePassword = async (currentPass: string, newPass: string): Promise<{ success: boolean; error?: string }> => {
    if (!newPass || newPass.length < 6) {
      return { success: false, error: 'New password must be at least 6 characters long.' };
    }

    try {
      const rawDb = localStorage.getItem(STORAGE_KEY_USERS_DB);
      const usersDb: Record<string, any> = rawDb ? JSON.parse(rawDb) : {};
      const email = user?.email.toLowerCase() || '';

      if (usersDb[email]) {
        // If password is set in DB and user provided current password, verify it
        if (usersDb[email].password && currentPass && usersDb[email].password !== currentPass) {
          return { success: false, error: 'Current password does not match.' };
        }
        usersDb[email].password = newPass;
        localStorage.setItem(STORAGE_KEY_USERS_DB, JSON.stringify(usersDb));
      } else {
        // Create user entry in DB with new password
        usersDb[email] = {
          password: newPass,
          profile: user
        };
        localStorage.setItem(STORAGE_KEY_USERS_DB, JSON.stringify(usersDb));
      }

      logActivity({
        type: 'question_solved',
        title: 'Account Security: Password successfully updated',
        status: 'good',
        details: 'Updated account authentication credentials.'
      });

      return { success: true };
    } catch (e: any) {
      return { success: false, error: e.message || 'Failed to update password.' };
    }
  };

  const logActivity = (activity: Omit<UserActivityLog, 'id' | 'timestamp'>) => {
    setUser(prev => {
      if (!prev) return null;
      const newEntry: UserActivityLog = {
        ...activity,
        id: 'act_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        timestamp: new Date().toISOString()
      };
      const updatedList = [newEntry, ...(prev.activities || [])].slice(0, 50); // keep recent 50
      return {
        ...prev,
        activities: updatedList,
        lastActiveDate: new Date().toISOString()
      };
    });
  };

  const recordIncorrectAttempt = (questionId: number, category?: string, difficulty?: Difficulty, details?: string) => {
    setUser(prev => {
      if (!prev) return null;
      const newEntry: UserActivityLog = {
        id: 'act_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        type: 'quiz_incorrect',
        title: `Incorrect Attempt: Question #${questionId}`,
        category,
        difficulty,
        timestamp: new Date().toISOString(),
        status: 'poor',
        details: details || `Missed question #${questionId} in ${category || 'Practice'}. Recommended to review explanation and retry.`
      };
      const updatedList = [newEntry, ...(prev.activities || [])].slice(0, 50);
      return {
        ...prev,
        activities: updatedList,
        incorrectAttemptsCount: (prev.incorrectAttemptsCount || 0) + 1,
        lastActiveDate: new Date().toISOString()
      };
    });
  };

  const toggleBookmarkQuestion = (questionId: number) => {
    setUser(prev => {
      if (!prev) return null;
      const isBookmarked = prev.bookmarkedQuestionIds.includes(questionId);
      const updated = isBookmarked
        ? prev.bookmarkedQuestionIds.filter(id => id !== questionId)
        : [...prev.bookmarkedQuestionIds, questionId];
      return { ...prev, bookmarkedQuestionIds: updated, lastActiveDate: new Date().toISOString() };
    });
  };

  const toggleCompleteQuestion = (questionId: number, category?: string, difficulty?: Difficulty) => {
    setUser(prev => {
      if (!prev) return null;
      const isCompleted = prev.completedQuestionIds.includes(questionId);
      const now = new Date().toISOString();

      const updatedIds = isCompleted
        ? prev.completedQuestionIds.filter(id => id !== questionId)
        : [...prev.completedQuestionIds, questionId];

      const currentDetails = { ...(prev.completedQuestionDetails || {}) };
      if (isCompleted) {
        delete currentDetails[questionId];
      } else {
        currentDetails[questionId] = {
          questionId,
          completedAt: now,
          category,
          difficulty
        };
      }

      // Add activity entry
      const actEntry: UserActivityLog = {
        id: 'act_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        type: isCompleted ? 'question_unmarked' : 'question_solved',
        title: isCompleted ? `Unmarked Question #${questionId}` : `Solved Question #${questionId} (${difficulty || 'Practice'})`,
        category,
        difficulty,
        timestamp: now,
        status: isCompleted ? 'average' : 'good',
        details: isCompleted 
          ? `Question #${questionId} removed from solved list.`
          : `Successfully answered ${difficulty || 'Beginner'} problem in ${category || 'Programming'}.`
      };

      const updatedActivities = [actEntry, ...(prev.activities || [])].slice(0, 50);

      return {
        ...prev,
        completedQuestionIds: updatedIds,
        completedQuestionDetails: currentDetails,
        activities: updatedActivities,
        lastActiveDate: now
      };
    });
  };

  const markQuestionComplete = (questionId: number, isCompleted: boolean, category?: string, difficulty?: Difficulty) => {
    setUser(prev => {
      if (!prev) return null;
      const currentlyHas = prev.completedQuestionIds.includes(questionId);
      if (currentlyHas === isCompleted) return prev;

      const now = new Date().toISOString();
      const updatedIds = isCompleted
        ? [...prev.completedQuestionIds, questionId]
        : prev.completedQuestionIds.filter(id => id !== questionId);

      const currentDetails = { ...(prev.completedQuestionDetails || {}) };
      if (isCompleted) {
        currentDetails[questionId] = {
          questionId,
          completedAt: now,
          category,
          difficulty
        };
      } else {
        delete currentDetails[questionId];
      }

      const actEntry: UserActivityLog = {
        id: 'act_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        type: isCompleted ? 'question_solved' : 'question_unmarked',
        title: isCompleted ? `Solved Question #${questionId}` : `Unmarked Question #${questionId}`,
        category,
        difficulty,
        timestamp: now,
        status: isCompleted ? 'good' : 'average',
        details: isCompleted ? `Solved question in ${category || 'Practice'}.` : `Unmarked question.`
      };

      return {
        ...prev,
        completedQuestionIds: updatedIds,
        completedQuestionDetails: currentDetails,
        activities: [actEntry, ...(prev.activities || [])].slice(0, 50),
        lastActiveDate: now
      };
    });
  };

  const toggleCompleteRoadmapTopic = (topicId: string) => {
    setUser(prev => {
      if (!prev) return null;
      const isCompleted = prev.completedRoadmapTopics.includes(topicId);
      const updated = isCompleted
        ? prev.completedRoadmapTopics.filter(id => id !== topicId)
        : [...prev.completedRoadmapTopics, topicId];
      return { ...prev, completedRoadmapTopics: updated, lastActiveDate: new Date().toISOString() };
    });
  };

  const toggleCompleteLesson = (lessonId: string, tutorialId?: string) => {
    setUser(prev => {
      if (!prev) return null;
      const isCompleted = prev.completedLessons.includes(lessonId);
      const now = new Date().toISOString();

      const updatedIds = isCompleted
        ? prev.completedLessons.filter(id => id !== lessonId)
        : [...prev.completedLessons, lessonId];

      const currentDetails = { ...(prev.completedLessonDetails || {}) };
      if (isCompleted) {
        delete currentDetails[lessonId];
      } else {
        currentDetails[lessonId] = {
          lessonId,
          tutorialId: tutorialId || lessonId.split('-')[0] || 'general',
          completedAt: now
        };
      }

      const actEntry: UserActivityLog = {
        id: 'act_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        type: isCompleted ? 'lesson_unmarked' : 'lesson_completed',
        title: isCompleted ? `Unmarked Lesson: ${lessonId}` : `Completed Lesson: ${lessonId}`,
        category: tutorialId,
        timestamp: now,
        status: isCompleted ? 'average' : 'good',
        details: isCompleted ? `Lesson ${lessonId} unmarked.` : `Finished lesson in ${tutorialId || 'tutorial'} curriculum.`
      };

      return {
        ...prev,
        completedLessons: updatedIds,
        completedLessonDetails: currentDetails,
        activities: [actEntry, ...(prev.activities || [])].slice(0, 50),
        lastActiveDate: now
      };
    });
  };

  const markLessonComplete = (lessonId: string, isCompleted: boolean, tutorialId?: string) => {
    setUser(prev => {
      if (!prev) return null;
      const currentlyHas = prev.completedLessons.includes(lessonId);
      if (currentlyHas === isCompleted) return prev;

      const now = new Date().toISOString();
      const updatedIds = isCompleted
        ? [...prev.completedLessons, lessonId]
        : prev.completedLessons.filter(id => id !== lessonId);

      const currentDetails = { ...(prev.completedLessonDetails || {}) };
      if (isCompleted) {
        currentDetails[lessonId] = {
          lessonId,
          tutorialId: tutorialId || lessonId.split('-')[0] || 'general',
          completedAt: now
        };
      } else {
        delete currentDetails[lessonId];
      }

      const actEntry: UserActivityLog = {
        id: 'act_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        type: isCompleted ? 'lesson_completed' : 'lesson_unmarked',
        title: isCompleted ? `Completed Lesson: ${lessonId}` : `Unmarked Lesson: ${lessonId}`,
        category: tutorialId,
        timestamp: now,
        status: isCompleted ? 'good' : 'average',
        details: isCompleted ? `Lesson completed in ${tutorialId || 'tutorial'}.` : `Lesson unmarked.`
      };

      return {
        ...prev,
        completedLessons: updatedIds,
        completedLessonDetails: currentDetails,
        activities: [actEntry, ...(prev.activities || [])].slice(0, 50),
        lastActiveDate: now
      };
    });
  };

  const toggleSaveRoadmap = (roadmapId: string) => {
    setUser(prev => {
      if (!prev) return null;
      const isSaved = prev.savedRoadmapIds.includes(roadmapId);
      const updated = isSaved
        ? prev.savedRoadmapIds.filter(id => id !== roadmapId)
        : [...prev.savedRoadmapIds, roadmapId];
      return { ...prev, savedRoadmapIds: updated, lastActiveDate: new Date().toISOString() };
    });
  };

  const resetAllProgress = () => {
    setUser(prev => {
      if (!prev) return null;
      return {
        ...prev,
        completedQuestionIds: [],
        completedQuestionDetails: {},
        bookmarkedQuestionIds: [],
        completedRoadmapTopics: [],
        completedLessons: [],
        completedLessonDetails: {},
        activities: [],
        incorrectAttemptsCount: 0,
        studyStreakDays: 0,
        lastActiveDate: new Date().toISOString()
      };
    });
  };

  const getQuestionProgress = (questionId: number) => {
    const isCompleted = Boolean(user?.completedQuestionIds.includes(questionId));
    const isBookmarked = Boolean(user?.bookmarkedQuestionIds.includes(questionId));
    const detail = user?.completedQuestionDetails?.[questionId];
    return {
      isCompleted,
      isBookmarked,
      completedAt: detail?.completedAt
    };
  };

  const getLessonProgress = (lessonId: string) => {
    const isCompleted = Boolean(user?.completedLessons.includes(lessonId));
    const detail = user?.completedLessonDetails?.[lessonId];
    return {
      isCompleted,
      completedAt: detail?.completedAt
    };
  };

  const completeDailyChallenge = (questionId: number): { streakUpdated: boolean; newStreak: number } => {
    let streakUpdated = false;
    let newStreak = user?.studyStreakDays || 1;

    setUser(prev => {
      if (!prev) return null;
      const todayStr = new Date().toISOString().split('T')[0];
      const hasCompletedToday = prev.lastDailyChallengeDate === todayStr || (prev.completedDailyChallengeDates || []).includes(todayStr);

      const alreadySolvedQ = prev.completedQuestionIds.includes(questionId);
      const nextCompletedQ = alreadySolvedQ ? prev.completedQuestionIds : [...prev.completedQuestionIds, questionId];

      const currentDetails = { ...(prev.completedQuestionDetails || {}) };
      if (!alreadySolvedQ) {
        currentDetails[questionId] = {
          questionId,
          completedAt: new Date().toISOString(),
          category: 'Daily Challenge',
          difficulty: 'Intermediate'
        };
      }

      if (!hasCompletedToday) {
        streakUpdated = true;
        newStreak = (prev.studyStreakDays || 0) + 1;
      } else {
        newStreak = prev.studyStreakDays || 1;
      }

      const completedDates = Array.from(new Set([...(prev.completedDailyChallengeDates || []), todayStr]));

      const actEntry: UserActivityLog = {
        id: 'act_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        type: 'question_solved',
        title: `Completed Daily Coding Challenge: Question #${questionId}`,
        category: 'Daily Challenge',
        difficulty: 'Intermediate',
        timestamp: new Date().toISOString(),
        status: 'good',
        details: streakUpdated 
          ? `Daily streak increased to ${newStreak} days! Keep the momentum going.`
          : `Re-evaluated and solved today's daily coding challenge.`
      };

      return {
        ...prev,
        studyStreakDays: newStreak,
        lastDailyChallengeDate: todayStr,
        completedDailyChallengeDates: completedDates,
        completedQuestionIds: nextCompletedQ,
        completedQuestionDetails: currentDetails,
        activities: [actEntry, ...(prev.activities || [])].slice(0, 50),
        lastActiveDate: new Date().toISOString()
      };
    });

    return { streakUpdated, newStreak };
  };

  const isAuthenticated = Boolean(user && user.id !== 'guest');
  const suitrateInfo = useMemo(() => calculateAccountSuitrate(user), [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        suitrateInfo,
        login,
        register,
        logout,
        updateProfile,
        changePassword,
        toggleBookmarkQuestion,
        toggleCompleteQuestion,
        markQuestionComplete,
        toggleCompleteRoadmapTopic,
        toggleCompleteLesson,
        markLessonComplete,
        toggleSaveRoadmap,
        resetAllProgress,
        getQuestionProgress,
        getLessonProgress,
        logActivity,
        recordIncorrectAttempt,
        completeDailyChallenge
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
};
