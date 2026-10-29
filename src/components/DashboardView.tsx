import React, { useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { TUTORIALS_DATA } from '../data/tutorialsData';
import { QUESTIONS_DATA, CATEGORIES_DATA } from '../data/questionsData';
import { PerformanceLevel, UserActivityLog } from '../types';
import { LearningVelocityChart } from './LearningVelocityChart';
import { DailyCodingChallenge } from './DailyCodingChallenge';
import { 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  Flame, 
  ArrowRight, 
  Clock, 
  Target, 
  Compass, 
  BookOpen, 
  CheckSquare, 
  Code2, 
  Sparkles, 
  Filter, 
  BarChart3, 
  Zap, 
  RotateCcw, 
  HelpCircle, 
  ShieldCheck, 
  ThumbsUp, 
  ThumbsDown,
  ChevronRight,
  ExternalLink,
  Layers,
  AlertTriangle,
  User,
  Lock,
  Key,
  Eye,
  EyeOff,
  Save,
  Check,
  ChevronDown,
  ChevronUp,
  Mail
} from 'lucide-react';

interface DashboardViewProps {
  onNavigateTab: (tab: string, param?: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onNavigateTab }) => {
  const { user, suitrateInfo, logActivity, recordIncorrectAttempt, updateProfile, changePassword } = useAuth();
  const [activityFilter, setActivityFilter] = useState<'ALL' | 'good' | 'poor' | 'question' | 'lesson'>('ALL');
  const [selectedPerformanceTab, setSelectedPerformanceTab] = useState<'all' | 'good' | 'poor'>('all');

  // User Profile & Change Password State
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [passError, setPassError] = useState<string | null>(null);
  const [passSuccess, setPassSuccess] = useState<string | null>(null);
  const [passLoading, setPassLoading] = useState(false);

  // Edit User Information state (Name & Email details)
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [editName, setEditName] = useState(user?.name || '');
  const [editEmail, setEditEmail] = useState(user?.email || '');
  const [infoSuccess, setInfoSuccess] = useState<string | null>(null);

  React.useEffect(() => {
    if (user) {
      setEditName(user.name);
      setEditEmail(user.email);
    }
  }, [user]);

  const handleUpdateUserInfo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editName.trim()) return;
    updateProfile({
      name: editName.trim(),
      email: editEmail.trim().toLowerCase()
    });
    setInfoSuccess('User details updated successfully!');
    setIsEditingInfo(false);
    setTimeout(() => setInfoSuccess(null), 3000);
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPassError(null);
    setPassSuccess(null);

    if (!newPassword || newPassword.length < 6) {
      setPassError('New password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPassError('New password and confirmation do not match.');
      return;
    }

    setPassLoading(true);
    const res = await changePassword(currentPassword, newPassword);
    setPassLoading(false);

    if (res.success) {
      setPassSuccess('Password successfully changed!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setPassSuccess(null), 4000);
    } else {
      setPassError(res.error || 'Failed to change password. Please check your current password.');
    }
  };

  const handleSimulateGoodActivity = () => {
    logActivity({
      type: 'question_solved',
      title: 'Practice Challenge: JavaScript Promise Chaining & Error Handling',
      category: 'JavaScript',
      difficulty: 'Intermediate',
      status: 'good',
      details: 'Correctly implemented promise chain with .catch fallback on first run.'
    });
  };

  const handleSimulatePoorActivity = () => {
    recordIncorrectAttempt(
      105,
      'Data Structures',
      'Intermediate',
      'Failed edge case on Stack pop underflow. Review LIFO concept.'
    );
  };

  // Completed metrics
  const completedQCount = user?.completedQuestionIds.length || 0;
  const totalQuestions = QUESTIONS_DATA.length; // 300
  const questionPct = Math.round((completedQCount / (totalQuestions || 1)) * 100);

  const allLessons = TUTORIALS_DATA.flatMap(t => t.lessons);
  const totalLessons = allLessons.length;
  const completedLessonsCount = user?.completedLessons.length || 0;
  const lessonPct = Math.round((completedLessonsCount / (totalLessons || 1)) * 100);

  const incorrectCount = user?.incorrectAttemptsCount || 0;
  const totalAttemptEvents = completedQCount + incorrectCount;
  const accuracyRate = totalAttemptEvents > 0 
    ? Math.round((completedQCount / totalAttemptEvents) * 100) 
    : 100;

  // Composite Performance Score (0 - 100)
  const compositeScore = useMemo(() => {
    // Weightings: Questions solved (40%), Lessons (30%), Accuracy (20%), Consistency/Streak (10%)
    const qScore = Math.min(questionPct * 2.5, 100);
    const lScore = Math.min(lessonPct * 2.5, 100);
    const accScore = accuracyRate;
    const streakScore = Math.min((user?.studyStreakDays || 1) * 20, 100);

    const weighted = Math.round(qScore * 0.4 + lScore * 0.3 + accScore * 0.2 + streakScore * 0.1);
    return Math.max(12, Math.min(weighted, 100)); // baseline minimum
  }, [questionPct, lessonPct, accuracyRate, user?.studyStreakDays]);

  // Performance classification
  const performanceStatus: { label: string; level: PerformanceLevel; desc: string; color: string } = useMemo(() => {
    if (compositeScore >= 70) {
      return {
        label: 'Strong / Good Performance',
        level: 'good',
        desc: 'Consistent problem solving, high accuracy, and steady progression through tracks.',
        color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800'
      };
    } else if (compositeScore >= 40) {
      return {
        label: 'Moderate / Developing Performance',
        level: 'average',
        desc: 'Steady foundation formed. Targeting weak categories will rapidly push you into top tier.',
        color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800'
      };
    } else {
      return {
        label: 'Early Stage / Needs Attention',
        level: 'poor',
        desc: 'Several foundational tracks have zero or low completions. Follow the recommended plan below.',
        color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800'
      };
    }
  }, [compositeScore]);

  // Categorize each category into Good vs Poor performance
  const categoryEvaluations = useMemo(() => {
    return CATEGORIES_DATA.map(cat => {
      const inCat = QUESTIONS_DATA.filter(q => q.category === cat.name);
      const solvedInCat = inCat.filter(q => user?.completedQuestionIds.includes(q.id)).length;
      const pct = Math.round((solvedInCat / (inCat.length || 1)) * 100);
      
      let level: PerformanceLevel = 'poor';
      let statusLabel = 'Needs Improvement';
      
      if (pct >= 40) {
        level = 'good';
        statusLabel = 'Good Performance';
      } else if (pct >= 15) {
        level = 'average';
        statusLabel = 'Developing';
      } else {
        level = 'poor';
        statusLabel = 'Weak / Untapped';
      }

      return {
        name: cat.name,
        icon: cat.icon,
        description: cat.description,
        total: inCat.length,
        solved: solvedInCat,
        percentage: pct,
        level,
        statusLabel
      };
    });
  }, [user?.completedQuestionIds]);

  const goodCategories = useMemo(() => categoryEvaluations.filter(c => c.level === 'good'), [categoryEvaluations]);
  const averageCategories = useMemo(() => categoryEvaluations.filter(c => c.level === 'average'), [categoryEvaluations]);
  const poorCategories = useMemo(() => categoryEvaluations.filter(c => c.level === 'poor'), [categoryEvaluations]);

  // Difficulty evaluations
  const difficultyStats = useMemo(() => {
    const calc = (diff: 'Beginner' | 'Intermediate' | 'Advanced') => {
      const total = QUESTIONS_DATA.filter(q => q.difficulty === diff).length;
      const solved = QUESTIONS_DATA.filter(q => q.difficulty === diff && user?.completedQuestionIds.includes(q.id)).length;
      const pct = Math.round((solved / (total || 1)) * 100);
      const level: PerformanceLevel = pct >= 35 ? 'good' : pct >= 15 ? 'average' : 'poor';
      return { diff, total, solved, pct, level };
    };

    return [
      calc('Beginner'),
      calc('Intermediate'),
      calc('Advanced'),
    ];
  }, [user?.completedQuestionIds]);

  // Filter activities
  const userActivities: UserActivityLog[] = user?.activities || [];
  const filteredActivities = useMemo(() => {
    return userActivities.filter(act => {
      if (activityFilter === 'good') return act.status === 'good';
      if (activityFilter === 'poor') return act.status === 'poor';
      if (activityFilter === 'question') return act.type.startsWith('question') || act.type === 'quiz_incorrect';
      if (activityFilter === 'lesson') return act.type.startsWith('lesson');
      return true;
    });
  }, [userActivities, activityFilter]);

  // Format activity timestamp
  const formatTimeAgo = (isoString: string) => {
    try {
      const now = Date.now();
      const past = new Date(isoString).getTime();
      const diffMs = now - past;
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffHours / 24);

      if (diffHours < 1) return 'Just now';
      if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
      if (diffDays === 1) return 'Yesterday';
      if (diffDays < 7) return `${diffDays} days ago`;
      return new Date(isoString).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    } catch {
      return 'Recently';
    }
  };

  // 28-Day Punchcard Heatmap generator (4 weeks x 7 days)
  const heatmapDays = useMemo(() => {
    const days = [];
    const now = new Date();
    for (let i = 27; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      
      // Count activities on this date
      const count = userActivities.filter(a => a.timestamp.startsWith(dateStr)).length;
      days.push({
        date: dateStr,
        dayName: d.toLocaleDateString(undefined, { weekday: 'narrow' }),
        count
      });
    }
    return days;
  }, [userActivities]);

  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <BarChart3 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Learner Performance & Activity Analytics</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Performance & Activity Dashboard
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Real-time analytics evaluating your programming strengths, identifying poor/weak performance areas, and tracking your daily study activities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex items-center gap-3 shadow-xs">
              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-500">
                <Flame className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Study Streak</span>
                <span className="text-base font-black text-slate-900 dark:text-white">
                  {user?.studyStreakDays || 3} Days Active
                </span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex items-center gap-3 shadow-xs">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Career Target</span>
                <span className="text-base font-black text-slate-900 dark:text-white truncate max-w-[130px] block">
                  {user?.currentRoleTarget || 'Frontend Dev'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* DAILY CODING CHALLENGE (STREAK BOOSTER) */}
        <DailyCodingChallenge onNavigateTab={onNavigateTab} />

        {/* USER PROFILE INFORMATION & CHANGE PASSWORD SECTION */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-black text-lg flex items-center justify-center shadow-md shrink-0">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                    {user?.name}
                  </h2>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    {user?.id === 'guest' ? 'Guest Profile' : 'Verified Learner'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  User Account & Security Management • Email: <span className="font-semibold text-slate-700 dark:text-slate-300">{user?.email}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setIsEditingInfo(!isEditingInfo)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                  isEditingInfo 
                    ? 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white border-transparent' 
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                }`}
              >
                <User className="w-3.5 h-3.5 text-indigo-500" />
                <span>{isEditingInfo ? 'Cancel Edit' : 'Edit Details'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowPasswordSection(!showPasswordSection)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                  showPasswordSection
                    ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                    : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/80 hover:bg-amber-100 dark:hover:bg-amber-900/60'
                }`}
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{showPasswordSection ? 'Hide Password Form' : 'Change Password'}</span>
                {showPasswordSection ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab('profile')}
                className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
              >
                <span>Full Profile Modal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* User Information Display / Edit Form */}
          {infoSuccess && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{infoSuccess}</span>
            </div>
          )}

          {isEditingInfo ? (
            <form onSubmit={handleUpdateUserInfo} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Update User Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save User Information</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingInfo(false)}
                  className="px-3 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                  Full Name
                </span>
                <span className="text-sm font-black text-slate-900 dark:text-white block truncate">
                  {user?.name}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                  Email Address
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white block truncate">
                  {user?.email}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                  Target Career Role
                </span>
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 block truncate">
                  {user?.currentRoleTarget || 'Frontend Developer'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                  Security Status
                </span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Password Protected</span>
                </span>
              </div>
            </div>
          )}

          {/* CHANGE PASSWORD OPTION FORM (Interactive Accordion) */}
          {showPasswordSection && (
            <div className="p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-2 border-b border-amber-200/60 dark:border-amber-900/40">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber-500 text-white">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 dark:text-white">Change Account Password</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Update your login password securely.</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">Min 6 characters</span>
              </div>

              {passSuccess && (
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{passSuccess}</span>
                </div>
              )}

              {passError && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs flex items-center gap-2 animate-in fade-in">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{passError}</span>
                </div>
              )}

              <form onSubmit={handleChangePassword} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Current Password
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type={showPass ? 'text' : 'password'}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-8 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      New Password
                    </label>
                    <div className="relative">
                      <Key className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type={showPass ? 'text' : 'password'}
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Min 6 chars"
                        className="w-full pl-9 pr-8 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                      >
                        {showPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <Key className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type={showPass ? 'text' : 'password'}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-type new password"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowPasswordSection(false)}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={passLoading}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer active:scale-95 disabled:opacity-50 flex items-center gap-1.5"
                  >
                    <Key className="w-3.5 h-3.5" />
                    <span>{passLoading ? 'Saving...' : 'Update Password'}</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Account Suitrate & Candidate Readiness Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-indigo-700/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-indigo-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Account Suitrate • Candidate Readiness</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {user?.name ? `${user.name}'s Account Suitrate` : 'Your Account Suitrate'}
              </h2>
              
              <p className="text-sm text-indigo-200 leading-relaxed">
                {suitrateInfo.summary} Account Suitrate evaluates your overall preparation and qualification level for <strong>{user?.currentRoleTarget || 'Frontend Developer'}</strong> positions based on your problem-solving volume, accuracy rate, and consistency.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="px-3 py-1.5 rounded-xl bg-white/10 text-xs">
                  <span className="text-indigo-300">Practice factor:</span> <strong className="text-white">+{Math.min(35, completedQCount * 3.5).toFixed(0)} pts</strong>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/10 text-xs">
                  <span className="text-indigo-300">Lessons factor:</span> <strong className="text-white">+{Math.min(25, completedLessonsCount * 4).toFixed(0)} pts</strong>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/10 text-xs">
                  <span className="text-indigo-300">Accuracy factor:</span> <strong className="text-white">+{Math.round((accuracyRate / 100) * 25)} pts</strong>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/10 text-xs">
                  <span className="text-indigo-300">Streak factor:</span> <strong className="text-white">+{Math.min(15, (user?.studyStreakDays || 1) * 3)} pts</strong>
                </div>
              </div>
            </div>

            {/* Suitrate Gauge Box */}
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center min-w-[240px] text-center shadow-inner">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">Account Suitrate</span>
              <div className="text-5xl font-black tracking-tight text-white my-1 flex items-baseline justify-center gap-1">
                <span>{suitrateInfo.rate}%</span>
              </div>
              <span className={`inline-block text-xs font-extrabold px-3 py-0.5 rounded-full mt-1 border ${
                suitrateInfo.level === 'good' ? 'bg-emerald-500/30 text-emerald-300 border-emerald-400/40' :
                suitrateInfo.level === 'poor' ? 'bg-rose-500/30 text-rose-300 border-rose-400/40' :
                'bg-amber-500/30 text-amber-300 border-amber-400/40'
              }`}>
                {suitrateInfo.label}
              </span>
              
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mt-3">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ${
                    suitrateInfo.level === 'good' ? 'bg-emerald-400' :
                    suitrateInfo.level === 'poor' ? 'bg-rose-400' :
                    'bg-amber-400'
                  }`}
                  style={{ width: `${suitrateInfo.rate}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 1. TOP PERFORMANCE OVERVIEW CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Composite Performance Index */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Performance Score
              </span>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${performanceStatus.color}`}>
                {performanceStatus.level === 'good' ? 'Good' : performanceStatus.level === 'average' ? 'Average' : 'Needs Work'}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-slate-900 dark:text-white">{compositeScore}</span>
                <span className="text-sm font-bold text-slate-400">/ 100</span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ${
                    compositeScore >= 70 ? 'bg-emerald-500' : compositeScore >= 40 ? 'bg-indigo-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${compositeScore}%` }}
                ></div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug pt-1">
                {performanceStatus.desc}
              </p>
            </div>
          </div>

          {/* Card 2: Accuracy & Test Ratio */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Problem Accuracy
              </span>
              <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400">
                <Zap className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-emerald-600 dark:text-emerald-400">{accuracyRate}%</span>
                <span className="text-xs font-semibold text-slate-400">precision</span>
              </div>
              <div className="flex items-center gap-3 text-xs pt-1">
                <span className="flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{completedQCount} Good</span>
                </span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="flex items-center gap-1 font-bold text-rose-500">
                  <ThumbsDown className="w-3.5 h-3.5" />
                  <span>{incorrectCount} Poor / Misses</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                Ratio of first-attempt solutions to questions requiring revision.
              </p>
            </div>
          </div>

          {/* Card 3: 300 Questions Bank Solved */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Practice Questions
              </span>
              <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
                <CheckSquare className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-slate-900 dark:text-white font-mono tabular-nums">{completedQCount}</span>
                <span className="text-sm font-bold text-slate-400 font-mono tabular-nums">/ {totalQuestions}</span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-700"
                  style={{ width: `${Math.max(questionPct, 2)}%` }}
                ></div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug pt-1">
                {totalQuestions - completedQCount} unsolved questions remaining across 8 core tracks.
              </p>
            </div>
          </div>

          {/* Card 4: Curriculum Lessons Completed */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Curriculum Lessons
              </span>
              <div className="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-purple-600 dark:text-purple-400">{completedLessonsCount}</span>
                <span className="text-sm font-bold text-slate-400">/ {totalLessons}</span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-600 rounded-full transition-all duration-700"
                  style={{ width: `${Math.max(lessonPct, 2)}%` }}
                ></div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug pt-1">
                Finished modules across HTML, CSS, JS, Python, React, Java & SQL.
              </p>
            </div>
          </div>
        </div>

        {/* 2. LEARNING VELOCITY RECHARTS CHART */}
        <LearningVelocityChart
          user={user}
          userActivities={userActivities}
          onNavigateTab={onNavigateTab}
          onQuickPractice={handleSimulateGoodActivity}
        />

        {/* 3. GOOD PERFORMANCE VS POOR PERFORMANCE SPOTLIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT: GOOD PERFORMANCE (STRENGTHS) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-950/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span>Good Performance Areas</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                      {goodCategories.length} Topics
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Disciplines where you demonstrate high accuracy and strong concept mastery.
                  </p>
                </div>
              </div>
            </div>

            {goodCategories.length > 0 ? (
              <div className="space-y-3">
                {goodCategories.map(cat => (
                  <div 
                    key={cat.name}
                    className="p-4 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white">{cat.name}</h4>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">
                        {cat.solved} of {cat.total} questions solved ({cat.percentage}%)
                      </span>
                    </div>

                    <button
                      onClick={() => onNavigateTab('practice', cat.name)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                    >
                      Continue
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto" />
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Solve 40% of questions in any category to unlock your first "Good Performance" mastery badge!
                </p>
                <button
                  onClick={() => onNavigateTab('practice', 'HTML')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold cursor-pointer"
                >
                  <span>Practice HTML to Earn First Badge</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Strengths summary checklist */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-800 text-xs space-y-2">
              <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px] block">
                Confirmed Competencies
              </span>
              <div className="grid grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>HTML5 Page Layouts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>JS Scope & Syntax</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Git Terminal Commits</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Algorithmic Thinking</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: POOR / WEAK PERFORMANCE (AREAS NEEDING IMPROVEMENT) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-rose-950/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
                  <TrendingDown className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span>Areas Needing Work (Poor Performance)</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                      {poorCategories.length} Tracks
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Topics with low completion or recorded mistakes that need targeted practice.
                  </p>
                </div>
              </div>
            </div>

            {/* Actionable items to fix poor performance */}
            <div className="space-y-3">
              {poorCategories.slice(0, 3).map(cat => (
                <div 
                  key={cat.name}
                  className="p-4 rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-500" />
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">{cat.name}</h4>
                    </div>
                    <span className="text-xs text-rose-600 dark:text-rose-400 font-medium block">
                      {cat.solved} / {cat.total} Solved ({cat.percentage}%) • Weak track
                    </span>
                  </div>

                  <button
                    onClick={() => onNavigateTab('practice', cat.name)}
                    className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                  >
                    Fix Track
                  </button>
                </div>
              ))}
            </div>

            {/* Targeted Remediation Advice Box */}
            <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 space-y-2">
              <span className="font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 text-[10px] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Prescription to Elevate Performance</span>
              </span>
              <p className="text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                Prioritize the <strong>SQL and Databases</strong> and <strong>Data Structures</strong> tracks this week. Solving 5 questions in each will convert them from Poor to Good performance.
              </p>
            </div>
          </div>

        </div>

        {/* 3. CATEGORY PERFORMANCE MATRIX (ALL 19 DISCIPLINES) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Discipline Performance Matrix
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Evaluates every programming track based on completed question volume and accuracy.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 self-start sm:self-auto">
              <button
                onClick={() => setSelectedPerformanceTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedPerformanceTab === 'all' 
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs' 
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All (19)
              </button>
              <button
                onClick={() => setSelectedPerformanceTab('good')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  selectedPerformanceTab === 'good' 
                    ? 'bg-emerald-600 text-white shadow-xs' 
                    : 'text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/60'
                }`}
              >
                <CheckCircle2 className="w-3 h-3" />
                <span>Good ({goodCategories.length})</span>
              </button>
              <button
                onClick={() => setSelectedPerformanceTab('poor')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  selectedPerformanceTab === 'poor' 
                    ? 'bg-rose-600 text-white shadow-xs' 
                    : 'text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/60'
                }`}
              >
                <AlertCircle className="w-3 h-3" />
                <span>Needs Work ({poorCategories.length})</span>
              </button>
            </div>
          </div>

          {/* Matrix Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {categoryEvaluations
              .filter(cat => {
                if (selectedPerformanceTab === 'good') return cat.level === 'good';
                if (selectedPerformanceTab === 'poor') return cat.level === 'poor';
                return true;
              })
              .map(cat => (
                <div 
                  key={cat.name}
                  className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                        {cat.name}
                      </h4>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block line-clamp-1">
                        {cat.description}
                      </span>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                      cat.level === 'good' 
                        ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300' 
                        : cat.level === 'average' 
                        ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300'
                        : 'bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300'
                    }`}>
                      {cat.statusLabel}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-500 dark:text-slate-400">Completion</span>
                      <span className="text-slate-800 dark:text-slate-200">{cat.solved} / {cat.total} ({cat.percentage}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          cat.level === 'good' ? 'bg-emerald-500' : cat.level === 'average' ? 'bg-indigo-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${Math.max(cat.percentage, 2)}%` }}
                      ></div>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigateTab('practice', cat.name)}
                    className="w-full py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Practice Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* 4. ACTIVITY TIMELINE & 28-DAY PUNCHCARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 28-Day Activity Punchcard Heatmap */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Activity Frequency (Last 4 Weeks)</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Daily activity density tracking your learning momentum.
              </p>
            </div>

            {/* Heatmap Grid */}
            <div className="space-y-2">
              <div className="grid grid-cols-7 gap-1.5">
                {heatmapDays.map((d, i) => (
                  <div
                    key={i}
                    title={`${d.date}: ${d.count} activities`}
                    className={`h-8 rounded-lg flex items-center justify-center text-[10px] font-bold transition-all cursor-pointer ${
                      d.count >= 3 
                        ? 'bg-emerald-600 text-white shadow-xs' 
                        : d.count >= 1 
                        ? 'bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                    }`}
                  >
                    {d.dayName}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>4 Weeks Ago</span>
                <span className="flex items-center gap-1">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded bg-slate-100 dark:bg-slate-800 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded bg-emerald-200 dark:bg-emerald-800 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded bg-emerald-600 inline-block"></span>
                  <span>More</span>
                </span>
                <span>Today</span>
              </div>
            </div>

            {/* Difficulty Mastery Tiers */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Difficulty Mastery Status
              </span>
              <div className="space-y-2.5">
                {difficultyStats.map(ds => (
                  <div key={ds.diff} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-800 dark:text-slate-200">{ds.diff}</span>
                      <span className={ds.level === 'good' ? 'text-emerald-600' : ds.level === 'average' ? 'text-indigo-600' : 'text-slate-500'}>
                        {ds.solved} / {ds.total} ({ds.pct}%)
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${ds.level === 'good' ? 'bg-emerald-500' : ds.level === 'average' ? 'bg-indigo-500' : 'bg-slate-400'}`}
                        style={{ width: `${Math.max(ds.pct, 2)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Activities Feed */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span>Recent Learning Activities</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Chronological log of solved questions, completed lessons, and test attempts.
                </p>
              </div>

              {/* Activity filter pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {(['ALL', 'good', 'poor', 'question', 'lesson'] as const).map(f => (
                  <button
                    key={f}
                    onClick={() => setActivityFilter(f)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activityFilter === f
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {f === 'ALL' ? 'All' : f === 'good' ? 'Good Performance' : f === 'poor' ? 'Poor / Misses' : f === 'question' ? 'Questions' : 'Lessons'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick interactive test buttons */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-xs">
              <span className="font-semibold text-slate-500 dark:text-slate-400">
                Test Live Activity Logging & Watch Performance Update:
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSimulateGoodActivity}
                  className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                  title="Logs a correct solution on an intermediate challenge"
                >
                  <ThumbsUp className="w-3 h-3 text-emerald-600" />
                  <span>+ Log Good Challenge</span>
                </button>
                <button
                  onClick={handleSimulatePoorActivity}
                  className="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 hover:bg-rose-200 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                  title="Logs an incorrect challenge attempt needing review"
                >
                  <ThumbsDown className="w-3 h-3 text-rose-600" />
                  <span>+ Log Review Needed</span>
                </button>
              </div>
            </div>

            {/* Activities list */}
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {filteredActivities.length > 0 ? (
                filteredActivities.map((act) => {
                  const isGood = act.status === 'good';
                  const isPoor = act.status === 'poor';

                  return (
                    <div
                      key={act.id}
                      className={`p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                        isGood 
                          ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/20' 
                          : isPoor
                          ? 'border-rose-200 dark:border-rose-900/60 bg-rose-50/20 dark:bg-rose-950/20'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-850'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                          isGood 
                            ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400' 
                            : isPoor
                            ? 'bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400'
                            : 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400'
                        }`}>
                          {isGood ? (
                            <ThumbsUp className="w-4 h-4" />
                          ) : isPoor ? (
                            <AlertCircle className="w-4 h-4" />
                          ) : (
                            <Code2 className="w-4 h-4" />
                          )}
                        </div>

                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                              {act.title}
                            </h4>
                            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                              isGood 
                                ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300' 
                                : isPoor
                                ? 'bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-300'
                                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                            }`}>
                              {isGood ? 'Good Performance' : isPoor ? 'Poor / Review Needed' : 'Completed'}
                            </span>
                          </div>

                          {act.details && (
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                              {act.details}
                            </p>
                          )}

                          <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-1">
                            {act.category && <span>Category: {act.category}</span>}
                            {act.difficulty && <span>• {act.difficulty}</span>}
                            <span>• {formatTimeAgo(act.timestamp)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Shortcut action button */}
                      {act.category && (
                        <button
                          onClick={() => onNavigateTab('practice', act.category)}
                          className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline shrink-0 flex items-center gap-1 cursor-pointer pt-1"
                        >
                          <span>Practice</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 text-slate-400 space-y-2">
                  <Activity className="w-8 h-8 mx-auto text-slate-300 dark:text-slate-600" />
                  <p className="text-xs">No activities recorded matching this filter.</p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
