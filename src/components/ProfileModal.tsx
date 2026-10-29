import React, { useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme, ThemeMode } from '../context/ThemeContext';
import { TUTORIALS_DATA } from '../data/tutorialsData';
import { QUESTIONS_DATA, CATEGORIES_DATA } from '../data/questionsData';
import { 
  X, 
  User, 
  CheckCircle2, 
  Bookmark, 
  Compass, 
  BookOpen, 
  Trash2, 
  ShieldAlert, 
  Award,
  Sun,
  Moon,
  Laptop,
  Check,
  ChevronRight,
  ChevronDown,
  Layers,
  ArrowRight,
  Code2,
  Sparkles,
  Flame,
  CheckSquare,
  BarChart3,
  Lock,
  Key,
  Eye,
  EyeOff,
  Mail,
  ShieldCheck,
  Save,
  AlertCircle,
  Activity,
  History,
  TrendingUp,
  Clock,
  Target,
  Zap,
  Terminal,
  Database,
  FileCode,
  Coffee,
  Binary,
  Palette,
  GitBranch
} from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: string, param?: string) => void;
}

type ProfileTab = 'profile' | 'performance' | 'activities' | 'tutorials' | 'practice' | 'settings';

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab
}) => {
  const { 
    user, 
    resetAllProgress, 
    updateProfile, 
    changePassword,
    toggleCompleteQuestion, 
    toggleCompleteLesson,
    suitrateInfo
  } = useAuth();
  const { themeMode, setThemeMode, isDark } = useTheme();
  
  const [activeTab, setActiveTab] = useState<ProfileTab>('profile');
  const [activityFilter, setActivityFilter] = useState<'all' | 'question_solved' | 'lesson_completed' | 'quiz_incorrect' | 'code_tested'>('all');
  const [expandedTutorialId, setExpandedTutorialId] = useState<string | null>(null);
  const [confirmResetOpen, setConfirmResetOpen] = useState(false);
  const [targetRole, setTargetRole] = useState(user?.currentRoleTarget || 'Frontend Developer');

  // User Information Form State
  const [nameInput, setNameInput] = useState(user?.name || '');
  const [emailInput, setEmailInput] = useState(user?.email || '');
  const [profileSuccessMsg, setProfileSuccessMsg] = useState<string | null>(null);

  // Change Password Form State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [passwordLoading, setPasswordLoading] = useState(false);

  // Sync inputs when user changes
  React.useEffect(() => {
    if (user) {
      setNameInput(user.name);
      setEmailInput(user.email);
      setTargetRole(user.currentRoleTarget || 'Frontend Developer');
    }
  }, [user]);

  if (!isOpen || !user) return null;

  const handleUpdateUserInfo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    updateProfile({
      name: nameInput.trim(),
      email: emailInput.trim().toLowerCase(),
      currentRoleTarget: targetRole
    });
    setProfileSuccessMsg('User information updated successfully!');
    setTimeout(() => setProfileSuccessMsg(null), 3000);
  };

  const handleChangePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);
    setPasswordSuccess(null);

    if (!newPassword || newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('New password and confirmation do not match.');
      return;
    }

    setPasswordLoading(true);
    const res = await changePassword(currentPassword, newPassword);
    setPasswordLoading(false);

    if (res.success) {
      setPasswordSuccess('Password successfully changed! Your account credentials are secure.');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setPasswordSuccess(null), 4000);
    } else {
      setPasswordError(res.error || 'Failed to change password. Please verify current password.');
    }
  };

  // Global calculations for questions
  const totalQuestions = QUESTIONS_DATA.length; // 2480
  const completedQuestionsCount = user.completedQuestionIds.length;
  const questionPercentage = Math.round((completedQuestionsCount / (totalQuestions || 1)) * 100);

  // Global calculations for tutorials
  const allLessons = TUTORIALS_DATA.flatMap(t => t.lessons);
  const totalLessons = allLessons.length;
  const completedLessonsCount = user.completedLessons.length;
  const lessonPercentage = Math.round((completedLessonsCount / (totalLessons || 1)) * 100);

  // Overall Combined Progress
  const totalTrackableItems = totalQuestions + totalLessons;
  const totalCompletedItems = completedQuestionsCount + completedLessonsCount;
  const overallPercentage = Math.round((totalCompletedItems / (totalTrackableItems || 1)) * 100);

  // Difficulty breakdowns
  const beginnerTotal = QUESTIONS_DATA.filter(q => q.difficulty === 'Beginner').length;
  const beginnerCompleted = QUESTIONS_DATA.filter(q => q.difficulty === 'Beginner' && user.completedQuestionIds.includes(q.id)).length;

  const intermediateTotal = QUESTIONS_DATA.filter(q => q.difficulty === 'Intermediate').length;
  const intermediateCompleted = QUESTIONS_DATA.filter(q => q.difficulty === 'Intermediate' && user.completedQuestionIds.includes(q.id)).length;

  const advancedTotal = QUESTIONS_DATA.filter(q => q.difficulty === 'Advanced').length;
  const advancedCompleted = QUESTIONS_DATA.filter(q => q.difficulty === 'Advanced' && user.completedQuestionIds.includes(q.id)).length;

  // Categories completion stats
  const categoryStats = useMemo(() => {
    return CATEGORIES_DATA.map(cat => {
      const inCat = QUESTIONS_DATA.filter(q => q.category === cat.name);
      const completed = inCat.filter(q => user.completedQuestionIds.includes(q.id)).length;
      const pct = Math.round((completed / (inCat.length || 1)) * 100);
      return {
        name: cat.name,
        icon: cat.icon,
        total: inCat.length,
        completed,
        percentage: pct
      };
    });
  }, [user.completedQuestionIds]);

  // Tutorials breakdown stats
  const tutorialStats = useMemo(() => {
    return TUTORIALS_DATA.map(tut => {
      const totalInTut = tut.lessons.length;
      const completedInTut = tut.lessons.filter(l => user.completedLessons.includes(l.id)).length;
      const pct = Math.round((completedInTut / (totalInTut || 1)) * 100);
      const isComplete = totalInTut > 0 && completedInTut === totalInTut;
      return {
        ...tut,
        totalLessons: totalInTut,
        completedLessons: completedInTut,
        percentage: pct,
        isComplete
      };
    });
  }, [user.completedLessons]);

  // 8 Core Tutorial Tracks Progress Data
  const coreTracksProgress = [
    { id: 'python', name: 'Python Tutorials', modules: '25 Modules', icon: Terminal, color: 'text-amber-500', lessonsCompleted: user.completedLessons.filter(l => l.startsWith('py-') || l.includes('python')).length, totalLessons: 25 },
    { id: 'javascript', name: 'JavaScript Tutorials', modules: '16 Modules', icon: FileCode, color: 'text-yellow-400', lessonsCompleted: user.completedLessons.filter(l => l.startsWith('js-') || l.includes('javascript')).length, totalLessons: 16 },
    { id: 'sql', name: 'SQL & Databases', modules: '15 Modules', icon: Database, color: 'text-cyan-500', lessonsCompleted: user.completedLessons.filter(l => l.startsWith('sql-')).length, totalLessons: 15 },
    { id: 'c', name: 'C Programming', modules: '16 Modules', icon: Code2, color: 'text-blue-500', lessonsCompleted: user.completedLessons.filter(l => l.startsWith('c-')).length, totalLessons: 16 },
    { id: 'cpp', name: 'C++ Programming', modules: '13 Modules', icon: Binary, color: 'text-indigo-400', lessonsCompleted: user.completedLessons.filter(l => l.startsWith('cpp-')).length, totalLessons: 13 },
    { id: 'git', name: 'Git & GitHub', modules: '12 Modules', icon: GitBranch, color: 'text-rose-400', lessonsCompleted: user.completedLessons.filter(l => l.startsWith('git-')).length, totalLessons: 12 },
    { id: 'java', name: 'Java Masterclass', modules: '32 Modules', icon: Coffee, color: 'text-amber-600', lessonsCompleted: user.completedLessons.filter(l => l.startsWith('java-')).length, totalLessons: 32 },
    { id: 'html', name: 'HTML5 Masterclass', modules: '20 Modules', icon: Palette, color: 'text-orange-500', lessonsCompleted: user.completedLessons.filter(l => l.startsWith('html-')).length, totalLessons: 20 },
  ];

  // Filtered User Activities
  const userActivities = useMemo(() => {
    const list = user.activities || [];
    if (activityFilter === 'all') return list;
    return list.filter(a => a.type === activityFilter);
  }, [user.activities, activityFilter]);

  const handleConfirmReset = () => {
    resetAllProgress();
    setConfirmResetOpen(false);
  };

  const formatDate = (isoString?: string) => {
    if (!isoString) return 'Recently';
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return 'Recently';
    }
  };

  const formatTimeAgo = (isoString?: string) => {
    if (!isoString) return 'Just now';
    try {
      const diffMs = Date.now() - new Date(isoString).getTime();
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMins / 60);
      const diffDays = Math.floor(diffHours / 24);

      if (diffMins < 1) return 'Just now';
      if (diffMins < 60) return `${diffMins}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      if (diffDays === 1) return 'Yesterday';
      return `${diffDays}d ago`;
    } catch {
      return 'Recently';
    }
  };

  const themeOptions: { id: ThemeMode; label: string; desc: string; icon: any }[] = [
    { id: 'light', label: 'Light Mode', desc: 'Clean & high-contrast bright theme', icon: Sun },
    { id: 'dark', label: 'Dark Mode', desc: 'Easy on the eyes for night coding', icon: Moon },
    { id: 'system', label: 'System Preference', desc: 'Automatically matches your device', icon: Laptop }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 dark:bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-[#0c1017] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header: User Information Banner */}
        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-900/60">
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-indigo-500/25 shrink-0 ring-2 ring-indigo-400/30">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                  {user.name}
                </h3>
                <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${suitrateInfo.badgeColor}`}>
                  Suitrate: {suitrateInfo.rate}% • {suitrateInfo.label}
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  {user.currentRoleTarget || 'Frontend Developer'}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{user.id === 'guest' ? 'Guest Profile' : 'Verified Learner'}</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                <span className="truncate">{user.email}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  <Flame className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{user.studyStreakDays || 3} Days Streak</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Joined {formatDate(user.joinedAt)}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Master Progress Summary Banner */}
        <div className="px-5 sm:px-6 pt-4 pb-2 bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-indigo-950/20 dark:to-transparent">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-indigo-100 dark:border-slate-800 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Overall Curriculum Completion
                  </span>
                  <span className="text-sm font-black text-slate-900 dark:text-white">
                    {totalCompletedItems} of {totalTrackableItems} Milestones Completed ({overallPercentage}%)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => { onClose(); onNavigateTab('dashboard'); }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Performance Dashboard</span>
                </button>
              </div>
            </div>

            {/* Overall Progress Bar */}
            <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(overallPercentage, 2)}%` }}
              />
            </div>

            {/* 4-column quick stats */}
            <div className="grid grid-cols-4 gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
              <div>
                <span className="text-[11px] text-slate-400 block font-semibold">Tutorials</span>
                <span className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  {completedLessonsCount} / {totalLessons} ({lessonPercentage}%)
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-semibold">Practice Solved</span>
                <span className="text-xs sm:text-sm font-bold text-purple-600 dark:text-purple-400">
                  {completedQuestionsCount} / {totalQuestions}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-semibold">Study Streak</span>
                <span className="text-xs sm:text-sm font-bold text-amber-500 flex items-center justify-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{user.studyStreakDays || 3} Days</span>
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-semibold">Bookmarked</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  {user.bookmarkedQuestionIds.length} Saved
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation: Profile, Performance, Activities, Tutorials, Practice, Settings */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-5 sm:px-6 pt-2 bg-white dark:bg-[#0c1017] gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-1.5 pb-3 pt-2 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'profile'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            <span>User Information</span>
          </button>

          <button
            onClick={() => setActiveTab('performance')}
            className={`flex items-center gap-1.5 pb-3 pt-2 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'performance'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Performance & Suitrate</span>
          </button>

          <button
            onClick={() => setActiveTab('activities')}
            className={`flex items-center gap-1.5 pb-3 pt-2 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'activities'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Activities ({user.activities?.length || 5})</span>
          </button>

          <button
            onClick={() => setActiveTab('tutorials')}
            className={`flex items-center gap-1.5 pb-3 pt-2 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'tutorials'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Tutorials Progress</span>
          </button>

          <button
            onClick={() => setActiveTab('practice')}
            className={`flex items-center gap-1.5 pb-3 pt-2 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'practice'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>Practice ({completedQuestionsCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-1.5 pb-3 pt-2 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'settings'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: USER INFORMATION & CHANGE PASSWORD */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* 1. User Information Card */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 dark:text-white">User Information</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">View and update your personal details and career target.</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    Active Account
                  </span>
                </div>

                {profileSuccessMsg && (
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{profileSuccessMsg}</span>
                  </div>
                )}

                <form onSubmit={handleUpdateUserInfo} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* User Full Name Input */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={nameInput}
                          onChange={(e) => setNameInput(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    {/* User Email Address Input */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={emailInput}
                          onChange={(e) => setEmailInput(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Career Goal Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Career Target Goal
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={targetRole}
                        onChange={(e) => setTargetRole(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Full-Stack Developer">Full-Stack Developer</option>
                        <option value="Java Developer">Java Developer</option>
                        <option value="Python Developer">Python Developer</option>
                        <option value="Data Analyst">Data Analyst</option>
                        <option value="AI & Machine Learning Engineer">AI & Machine Learning Engineer</option>
                        <option value="Cybersecurity Specialist">Cybersecurity Specialist</option>
                      </select>
                      <button
                        type="submit"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Save Info</span>
                      </button>
                    </div>
                  </div>
                </form>

                {/* Account Metadata Summary */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-slate-400 block text-[10px] font-semibold uppercase">Joined Date</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{formatDate(user.joinedAt)}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-slate-400 block text-[10px] font-semibold uppercase">Account Type</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">
                      {user.id === 'guest' ? 'Guest Profile' : 'Verified Learner'}
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-slate-400 block text-[10px] font-semibold uppercase">Study Streak</span>
                    <span className="font-bold text-amber-500 flex items-center gap-1">
                      <Flame className="w-3 h-3 fill-amber-500" />
                      <span>{user.studyStreakDays || 3} Days</span>
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-slate-400 block text-[10px] font-semibold uppercase">Account Suitrate</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{suitrateInfo.rate}%</span>
                  </div>
                </div>
              </div>

              {/* 2. Change Password Option Card */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 dark:text-white">Change Password</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Update your login security credentials.</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    Security Option
                  </span>
                </div>

                {passwordSuccess && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold">{passwordSuccess}</span>
                  </div>
                )}

                {passwordError && (
                  <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs flex items-center gap-2 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span className="font-semibold">{passwordError}</span>
                  </div>
                )}

                <form onSubmit={handleChangePasswordSubmit} className="space-y-3.5">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                        Current Password
                      </label>
                      <span className="text-[10px] text-slate-400">Leave blank if setting first password</span>
                    </div>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type={showCurrentPass ? 'text' : 'password'}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full pl-9 pr-10 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPass(!showCurrentPass)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                        title={showCurrentPass ? 'Hide Password' : 'Show Password'}
                      >
                        {showCurrentPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                          New Password
                        </label>
                        <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">Min 6 chars</span>
                      </div>
                      <div className="relative">
                        <Key className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type={showNewPass ? 'text' : 'password'}
                          required
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full pl-9 pr-10 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="New secure password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPass(!showNewPass)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                          title={showNewPass ? 'Hide Password' : 'Show Password'}
                        >
                          {showNewPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <Key className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type={showNewPass ? 'text' : 'password'}
                          required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Re-type new password"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Credentials are encrypted and safely stored in your browser session.
                    </span>
                    <button
                      type="submit"
                      disabled={passwordLoading}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                    >
                      <Key className="w-3.5 h-3.5" />
                      <span>{passwordLoading ? 'Updating Password...' : 'Change Password'}</span>
                    </button>
                  </div>
                </form>
              </div>

            </div>
          )}

          {/* TAB 2: PERFORMANCE & SUITRATE ANALYTICS */}
          {activeTab === 'performance' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Performance & Suitrate Hero Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/60 border border-indigo-500/30 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span>AI Suitrate & Performance Index</span>
                    </span>
                    <h3 className="text-xl font-black text-white mt-0.5">
                      {suitrateInfo.rate}% • {suitrateInfo.label} Performance
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Calculated dynamically based on question accuracy, tutorial lessons, study streak, and correct first attempts.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="text-center px-4 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-700">
                      <span className="text-[10px] text-slate-400 font-bold block">Status</span>
                      <span className={`text-sm font-black ${suitrateInfo.level === 'good' ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {suitrateInfo.level.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      suitrateInfo.level === 'good' 
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-400' 
                        : 'bg-gradient-to-r from-amber-500 to-indigo-500'
                    }`}
                    style={{ width: `${suitrateInfo.rate}%` }}
                  />
                </div>

                {/* Performance Pillars Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Total Solved</span>
                    <span className="text-base font-black text-white">{completedQuestionsCount}</span>
                    <span className="text-[10px] text-slate-500 block">of 2,480 questions</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Accuracy Rate</span>
                    <span className="text-base font-black text-emerald-400">
                      {Math.max(88, 100 - (user.incorrectAttemptsCount || 1) * 3)}%
                    </span>
                    <span className="text-[10px] text-slate-500 block">first-try accuracy</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Study Streak</span>
                    <span className="text-base font-black text-amber-400">{user.studyStreakDays || 3} Days</span>
                    <span className="text-[10px] text-slate-500 block">daily consistency</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Total Lessons</span>
                    <span className="text-base font-black text-indigo-400">{completedLessonsCount}</span>
                    <span className="text-[10px] text-slate-500 block">modules completed</span>
                  </div>
                </div>
              </div>

              {/* 8 Core Programming Tutorial Tracks Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white">
                      8 Programming Tutorial Tracks Progress
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Progress tracked across Python, JavaScript, SQL, C, C++, Git, Java, and HTML.
                    </p>
                  </div>
                  <button
                    onClick={() => { onClose(); onNavigateTab('tutorials'); }}
                    className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>All Tutorials</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {coreTracksProgress.map((track) => {
                    const TrackIcon = track.icon;
                    const pct = Math.min(100, Math.round((track.lessonsCompleted / (track.totalLessons || 1)) * 100));
                    return (
                      <div
                        key={track.id}
                        onClick={() => { onClose(); onNavigateTab('tutorials', track.id); }}
                        className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-indigo-50/20 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                              <TrackIcon className={`w-4 h-4 ${track.color}`} />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors block">
                                {track.name}
                              </span>
                              <span className="text-[10px] text-slate-400">{track.modules}</span>
                            </div>
                          </div>
                          <span className="text-xs font-black text-indigo-600 dark:text-indigo-400">
                            {pct}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${Math.max(pct, 4)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Practice Questions Difficulty Breakdown */}
              <div className="space-y-3">
                <h4 className="text-sm font-black text-slate-900 dark:text-white">
                  Practice Questions by Difficulty
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl border border-emerald-200/80 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">Beginner</span>
                      <span className="text-xs font-black text-emerald-700 dark:text-emerald-300">
                        {beginnerCompleted} / {beginnerTotal}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-emerald-200/60 dark:bg-emerald-950 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${Math.round((beginnerCompleted / (beginnerTotal || 1)) * 100)}%` }} />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/20">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-indigo-800 dark:text-indigo-300">Intermediate</span>
                      <span className="text-xs font-black text-indigo-700 dark:text-indigo-300">
                        {intermediateCompleted} / {intermediateTotal}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-indigo-200/60 dark:bg-indigo-950 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${Math.round((intermediateCompleted / (intermediateTotal || 1)) * 100)}%` }} />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl border border-purple-200/80 dark:border-purple-900/60 bg-purple-50/50 dark:bg-purple-950/20">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-purple-800 dark:text-purple-300">Advanced</span>
                      <span className="text-xs font-black text-purple-700 dark:text-purple-300">
                        {advancedCompleted} / {advancedTotal}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-purple-200/60 dark:bg-purple-950 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: `${Math.round((advancedCompleted / (advancedTotal || 1)) * 100)}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestones & Badges Unlocked */}
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 space-y-2.5">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Earned Milestones & Badges
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                    <Sparkles className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">First Code Run</span>
                    <span className="text-[10px] text-emerald-500 font-bold">Unlocked</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                    <Flame className="w-5 h-5 text-amber-500 fill-amber-500 mx-auto mb-1" />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">3-Day Streak</span>
                    <span className="text-[10px] text-emerald-500 font-bold">Active 🔥</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                    <ShieldCheck className="w-5 h-5 text-indigo-500 mx-auto mb-1" />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Suitrate Pioneer</span>
                    <span className="text-[10px] text-indigo-400 font-bold">92% Rating</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                    <Award className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">Full-Stack Aspirant</span>
                    <span className="text-[10px] text-purple-400 font-bold">In Progress</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: ACTIVITIES & LEARNING HISTORY EVERYTHING */}
          {activeTab === 'activities' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-indigo-500" />
                    <span>Learning Activities & History Log</span>
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Chronological activity log of questions solved, lessons completed, quizzes, and streak updates.
                  </p>
                </div>
                <div className="text-xs font-bold text-slate-400 shrink-0">
                  Total Logged: {user.activities?.length || 5} events
                </div>
              </div>

              {/* Activity Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                <button
                  onClick={() => setActivityFilter('all')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer shrink-0 ${
                    activityFilter === 'all'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  All Activities ({user.activities?.length || 5})
                </button>
                <button
                  onClick={() => setActivityFilter('question_solved')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer shrink-0 ${
                    activityFilter === 'question_solved'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  Questions Solved
                </button>
                <button
                  onClick={() => setActivityFilter('lesson_completed')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer shrink-0 ${
                    activityFilter === 'lesson_completed'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  Lessons Completed
                </button>
                <button
                  onClick={() => setActivityFilter('quiz_incorrect')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer shrink-0 ${
                    activityFilter === 'quiz_incorrect'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  Needs Revision
                </button>
              </div>

              {/* Activities Timeline List */}
              <div className="space-y-2.5">
                {userActivities.length === 0 ? (
                  <div className="p-8 text-center text-slate-400">
                    <History className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-50" />
                    <p className="text-xs font-semibold">No activities found in this filter category.</p>
                  </div>
                ) : (
                  userActivities.map((act) => {
                    const isSolved = act.type === 'question_solved';
                    const isLesson = act.type === 'lesson_completed';
                    const isQuiz = act.type === 'quiz_incorrect';

                    return (
                      <div
                        key={act.id}
                        className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex items-start justify-between gap-3 shadow-2xs hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                            isSolved 
                              ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' 
                              : isLesson 
                              ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800' 
                              : 'bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                          }`}>
                            {isSolved ? <CheckCircle2 className="w-4 h-4" /> : isLesson ? <BookOpen className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="text-xs font-bold text-slate-900 dark:text-white">
                                {act.title}
                              </span>
                              {act.category && (
                                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                  {act.category}
                                </span>
                              )}
                              {act.difficulty && (
                                <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                                  act.difficulty === 'Beginner' ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600' : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600'
                                }`}>
                                  {act.difficulty}
                                </span>
                              )}
                            </div>
                            {act.details && (
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                {act.details}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-right shrink-0 flex flex-col items-end gap-1">
                          <span className="text-[10px] text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{formatTimeAgo(act.timestamp)}</span>
                          </span>
                          <button
                            onClick={() => {
                              onClose();
                              if (isSolved || isQuiz) {
                                onNavigateTab('practice', act.category);
                              } else {
                                onNavigateTab('tutorials');
                              }
                            }}
                            className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                          >
                            {isSolved ? 'Practice Again →' : isLesson ? 'Open Lesson →' : 'Review Concept →'}
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* TAB 4: TUTORIALS BREAKDOWN */}
          {activeTab === 'tutorials' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white">Tutorial Courses Progress</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Track lesson completion across each core programming track.
                  </p>
                </div>
                <button
                  onClick={() => { onClose(); onNavigateTab('tutorials'); }}
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Go to Tutorials</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-3">
                {tutorialStats.map((tut) => {
                  const isExpanded = expandedTutorialId === tut.id;
                  return (
                    <div 
                      key={tut.id}
                      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden shadow-xs transition-colors"
                    >
                      <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                            tut.isComplete 
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700' 
                              : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                          }`}>
                            {tut.isComplete ? <Check className="w-5 h-5 text-emerald-600 stroke-[3]" /> : tut.language.slice(0, 3)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="font-bold text-sm text-slate-900 dark:text-white">{tut.name}</h5>
                              {tut.isComplete ? (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/70 text-emerald-700 dark:text-emerald-300">
                                  Completed
                                </span>
                              ) : tut.completedLessons > 0 ? (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/70 text-amber-700 dark:text-amber-300">
                                  In Progress
                                </span>
                              ) : (
                                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                  Not Started
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {tut.completedLessons} of {tut.totalLessons} lessons finished ({tut.percentage}%)
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                          <div className="w-full sm:w-28 bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-300 ${tut.isComplete ? 'bg-emerald-500' : 'bg-indigo-600'}`}
                              style={{ width: `${tut.percentage}%` }}
                            />
                          </div>
                          <button
                            onClick={() => setExpandedTutorialId(isExpanded ? null : tut.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="px-4 pb-4 pt-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-1.5">
                          {tut.lessons.map(lesson => {
                            const isDone = user.completedLessons.includes(lesson.id);
                            return (
                              <div 
                                key={lesson.id}
                                className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-850 dark:bg-slate-800 text-xs border border-slate-100 dark:border-slate-750"
                              >
                                <div className="flex items-center gap-2 truncate">
                                  <button
                                    onClick={() => toggleCompleteLesson(lesson.id, tut.id)}
                                    className={`w-4 h-4 rounded flex items-center justify-center cursor-pointer transition-colors ${
                                      isDone ? 'bg-emerald-500 text-white' : 'border border-slate-300 dark:border-slate-600 hover:border-indigo-500'
                                    }`}
                                  >
                                    {isDone && <Check className="w-3 h-3 stroke-[3]" />}
                                  </button>
                                  <span className={`font-medium truncate ${isDone ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-200'}`}>
                                    {lesson.title}
                                  </span>
                                </div>
                                <button
                                  onClick={() => { onClose(); onNavigateTab('tutorials', tut.id); }}
                                  className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline shrink-0 cursor-pointer"
                                >
                                  Read →
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: PRACTICE QUESTIONS BREAKDOWN */}
          {activeTab === 'practice' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white">
                    Practice Arena Progress (2,480+ Questions)
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Track questions solved across each programming language and track.
                  </p>
                </div>
                <button
                  onClick={() => { onClose(); onNavigateTab('practice'); }}
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Open Practice Arena</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Category-by-Category Progress Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
                {categoryStats.map(cat => (
                  <div
                    key={cat.name}
                    onClick={() => {
                      onClose();
                      onNavigateTab('practice', cat.name);
                    }}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-indigo-50/20 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                        {cat.name}
                      </span>
                      <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 shrink-0">
                        {cat.completed} / {cat.total}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        style={{ width: `${cat.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Solved Questions History */}
              {user.completedQuestionIds.length > 0 && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                    Recently Solved Questions ({user.completedQuestionIds.length})
                  </span>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                    {user.completedQuestionIds.slice(-10).reverse().map(id => {
                      const q = QUESTIONS_DATA.find(item => item.id === id);
                      if (!q) return null;
                      return (
                        <div
                          key={id}
                          className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 text-xs border border-slate-100 dark:border-slate-700/80"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                              #{q.id} {q.question}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                              {q.category}
                            </span>
                            <button
                              onClick={() => toggleCompleteQuestion(q.id)}
                              className="text-[10px] text-rose-500 hover:underline cursor-pointer"
                              title="Unmark question"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 6: SETTINGS & PREFERENCES */}
          {activeTab === 'settings' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Appearance & Theme */}
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Appearance & Theme
                  </label>
                  <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                    Current: {themeMode === 'system' ? `System (${isDark ? 'Dark' : 'Light'})` : themeMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {themeOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = themeMode === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setThemeMode(opt.id)}
                        className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/60 ring-2 ring-indigo-500/20'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1.5">
                          <div className={`p-1.5 rounded-lg ${
                            isSelected 
                              ? 'bg-indigo-600 text-white' 
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          {isSelected && (
                            <div className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          )}
                        </div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">
                          {opt.label}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                          {opt.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Danger Zone: Reset Progress */}
              <div className="pt-2">
                {!confirmResetOpen ? (
                  <button
                    type="button"
                    onClick={() => setConfirmResetOpen(true)}
                    className="flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Reset All Learning Progress</span>
                  </button>
                ) : (
                  <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 space-y-3">
                    <div className="flex items-start gap-2.5 text-rose-800 dark:text-rose-300">
                      <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <p className="font-bold">Are you sure you want to clear all progress?</p>
                        <p className="text-rose-600 dark:text-rose-400 mt-0.5">
                          This will reset your {completedQuestionsCount} solved questions, {completedLessonsCount} finished lessons, and bookmarks. This action cannot be undone.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleConfirmReset}
                        className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        Yes, Reset Everything
                      </button>
                      <button
                        type="button"
                        onClick={() => setConfirmResetOpen(false)}
                        className="px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 flex items-center justify-between text-xs">
          <span className="text-slate-500 dark:text-slate-400">
            Progress and activities automatically synchronize with your profile.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors cursor-pointer shadow-sm"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
