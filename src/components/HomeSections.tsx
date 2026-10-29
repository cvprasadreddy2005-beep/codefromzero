import React, { useState } from 'react';
import { 
  CATEGORIES_DATA,
  QUESTIONS_DATA 
} from '../data/questionsData';
import { ROADMAPS_DATA } from '../data/roadmapsData';
import { TUTORIALS_DATA } from '../data/tutorialsData';
import { PROJECTS_DATA } from '../data/projectsData';
import { useAuth } from '../context/AuthContext';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  CheckSquare, 
  FolderGit2, 
  Briefcase, 
  CheckCircle2, 
  Code2, 
  Terminal, 
  Cpu, 
  Shield, 
  Database, 
  FileCode, 
  BarChart, 
  Layers, 
  Activity, 
  Globe, 
  Palette, 
  GitBranch, 
  Wifi, 
  HardDrive, 
  Zap, 
  Coffee, 
  Server, 
  Binary, 
  Play, 
  Bookmark, 
  Award, 
  Bot,
  BarChart3,
  Search,
  BookOpen,
  ChevronDown,
  ChevronUp,
  User,
  Lock,
  Key,
  Clock,
  Check,
  Filter,
  ExternalLink,
  X,
  Home
} from 'lucide-react';

interface HomeSectionsProps {
  onNavigateTab: (tab: string, filterParam?: string) => void;
  onOpenAuth: (mode?: 'signin' | 'signup') => void;
  onOpenProfile?: () => void;
}

// Map category names to icons safely
const iconMap: Record<string, any> = {
  "JavaScript": FileCode,
  "Python": Terminal,
  "Java": Coffee,
  "SQL and Databases": Database,
  "SQL & Databases": Database,
  "SQL": Database,
  "HTML & CSS": Palette,
  "HTML": Palette,
  "HTML5": Palette,
  "Data Structures & Algorithms": Layers,
  "C Programming": Code2,
  "C": Code2,
  "C++ Programming": Binary,
  "C++": Binary,
  "Git": GitBranch,
  "Git & GitHub": GitBranch,
  "React": Code2
};

export const HomeSections: React.FC<HomeSectionsProps> = ({
  onNavigateTab,
  onOpenAuth,
  onOpenProfile,
}) => {
  const { user, isAuthenticated, suitrateInfo } = useAuth();
  const [expandedTutorialId, setExpandedTutorialId] = useState<string | null>(null);
  const [topicSearchQuery, setTopicSearchQuery] = useState<string>('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('ALL');
  const completedCount = user?.completedQuestionIds.length || 0;
  const completedLessonsCount = user?.completedLessons.length || 0;
  const totalLessons = TUTORIALS_DATA.flatMap(t => t.lessons).length;
  const totalQuestions = QUESTIONS_DATA.length; // 2480
  const progressPercent = Math.round((completedCount / (totalQuestions || 1)) * 100);
  const lessonPercent = Math.round((completedLessonsCount / (totalLessons || 1)) * 100);

  return (
    <div className="space-y-24 py-16">
      
      {/* PERSONAL LEARNING PROGRESS SNAPSHOT */}
      {(completedCount > 0 || completedLessonsCount > 0) && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-purple-950 text-white shadow-xl border border-indigo-800/60 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Your Profile Progress</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Welcome to CodeFromZero, {user?.name}!
              </h2>
              <p className="text-sm text-indigo-200 leading-relaxed">
                Your current <strong>Account Suitrate is {suitrateInfo.rate}% ({suitrateInfo.label})</strong>. You have completed <strong className="text-white font-bold">{completedCount} practice questions</strong> and <strong className="text-white font-bold">{completedLessonsCount} tutorial lessons</strong> toward becoming a {user?.currentRoleTarget || 'Developer'}.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center min-w-[110px] flex-1 sm:flex-initial">
                <span className="text-2xl font-black text-amber-300">{suitrateInfo.rate}%</span>
                <span className="block text-[10px] text-indigo-200 font-bold uppercase mt-0.5">Suitrate</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center min-w-[110px] flex-1 sm:flex-initial">
                <span className="text-2xl font-black text-amber-400">{completedCount} / {totalQuestions}</span>
                <span className="block text-[10px] text-indigo-200 font-semibold uppercase mt-0.5">Solved</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center min-w-[110px] flex-1 sm:flex-initial">
                <span className="text-2xl font-black text-emerald-400">{completedLessonsCount} / {totalLessons}</span>
                <span className="block text-[10px] text-indigo-200 font-semibold uppercase mt-0.5">Lessons</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-auto">
                <button
                  onClick={() => onOpenProfile ? onOpenProfile() : onNavigateTab('profile')}
                  className="px-4 py-3 rounded-2xl bg-indigo-500/30 hover:bg-indigo-500/40 border border-indigo-400/40 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                  title="View user information (name, email) and change password"
                >
                  <User className="w-4 h-4 text-amber-300" />
                  <span>My Profile & Progress</span>
                </button>

                <button
                  onClick={() => onNavigateTab('dashboard')}
                  className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <BarChart3 className="w-4 h-4 text-amber-400" />
                  <span>Performance Dashboard</span>
                </button>

                <button
                  onClick={() => onNavigateTab('practice')}
                  className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-100 text-indigo-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shrink-0 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Continue Practice</span>
                  <ArrowRight className="w-4 h-4 text-indigo-600" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 1. LEARNING CATEGORIES (8 Language Tracks with 300+ Qs each) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
              Practice Disciplines
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              8 Core Programming Tracks
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-xl">
              Each language track features over 300+ curated practice questions from fundamentals to advanced algorithmic mastery.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('practice')}
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 cursor-pointer"
          >
            <span>View All 2,480+ Practice Questions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {CATEGORIES_DATA.map((cat) => {
            const Icon = iconMap[cat.name] || Code2;
            return (
              <button
                key={cat.name}
                onClick={() => onNavigateTab('practice', cat.name)}
                className="group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md hover:shadow-indigo-500/5 transition-all text-left flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center transition-colors mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5 line-clamp-1">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">{cat.count}</span>
                  <span className="text-slate-400 dark:text-slate-500 group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. POPULAR ROADMAPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/80 border border-purple-100 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">
              Career Trajectories
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Popular Career Roadmaps
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-xl">
              Month-by-month curriculums tailored from absolute zero to job-ready competence.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('roadmaps')}
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 cursor-pointer"
          >
            <span>See All 8 Roadmaps</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAPS_DATA.slice(0, 4).map((roadmap) => (
            <div
              key={roadmap.id}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                    {roadmap.difficulty}
                  </span>
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                    {roadmap.months.length} Months
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {roadmap.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {roadmap.careerDescription}
                </p>

                {/* Required Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {roadmap.requiredSkills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md">
                      {skill}
                    </span>
                  ))}
                  {roadmap.requiredSkills.length > 3 && (
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 self-center">
                      +{roadmap.requiredSkills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {roadmap.finalProjects.length} Capstones
                </span>
                <button
                  onClick={() => onNavigateTab('roadmaps')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 cursor-pointer"
                >
                  <span>View Plan</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED TUTORIALS */}
      <section className="bg-slate-100/70 dark:bg-slate-900/60 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                Step-by-Step Lessons
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Featured Programming Tutorials
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-xl">
                Structured explanations, clear syntax, code examples, expected outputs, common mistakes, and practice.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('tutorials')}
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 cursor-pointer"
            >
              <span>Explore All Tutorials</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Language Quick Switcher Filter Bar */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-indigo-500" />
              <span>Languages:</span>
            </span>
            {TUTORIALS_DATA.map((tut) => {
              const isSelected = expandedTutorialId === tut.id;
              const completedInTut = tut.lessons.filter(l => user?.completedLessons.includes(l.id)).length;
              return (
                <button
                  key={tut.id}
                  onClick={() => {
                    setExpandedTutorialId(expandedTutorialId === tut.id ? null : tut.id);
                    setTopicSearchQuery('');
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/25 ring-2 ring-indigo-400/40'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500'
                  }`}
                >
                  <span>{tut.name}</span>
                  <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-black ${
                    isSelected 
                      ? 'bg-white/20 text-white' 
                      : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                  }`}>
                    {tut.lessons.length}
                  </span>
                  {completedInTut > 0 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title={`${completedInTut} completed`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Languages Grid: Only shows lesson count/number by default; clicking expands all lesson topics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {TUTORIALS_DATA.map((tut) => {
              const isExpanded = expandedTutorialId === tut.id;
              const totalLessonsCount = tut.lessons.length;
              const completedInTut = tut.lessons.filter(l => user?.completedLessons.includes(l.id)).length;
              const completionPct = Math.round((completedInTut / (totalLessonsCount || 1)) * 100);
              
              // Extract unique modules / sections
              const uniqueSections = Array.from(new Set(tut.lessons.map(l => l.section || 'Core Topics'))).filter(Boolean);
              const Icon = iconMap[tut.name] || iconMap[tut.language] || Code2;

              // Filtered lessons for expanded view
              const filteredLessons = tut.lessons.filter(l => {
                const matchesSearch = topicSearchQuery.trim() === '' || 
                  l.title.toLowerCase().includes(topicSearchQuery.toLowerCase()) ||
                  (l.section && l.section.toLowerCase().includes(topicSearchQuery.toLowerCase())) ||
                  (l.keyConcepts && l.keyConcepts.some(k => k.toLowerCase().includes(topicSearchQuery.toLowerCase())));
                
                const matchesDiff = difficultyFilter === 'ALL' || l.difficulty === difficultyFilter;
                return matchesSearch && matchesDiff;
              });

              return (
                <div
                  key={tut.id}
                  className={`rounded-3xl border transition-all duration-200 bg-white dark:bg-slate-900 shadow-sm ${
                    isExpanded 
                      ? 'col-span-1 md:col-span-2 lg:col-span-4 p-6 sm:p-8 border-indigo-500/80 dark:border-indigo-500 shadow-xl shadow-indigo-500/10 ring-1 ring-indigo-500/30' 
                      : 'p-6 border-slate-200/90 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/5'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-black flex items-center justify-center text-sm shrink-0 border border-indigo-100 dark:border-indigo-800 shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{tut.name}</h3>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase">
                            {tut.language}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                          {tut.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Toggle Button in Header */}
                    <button
                      onClick={() => {
                        setExpandedTutorialId(isExpanded ? null : tut.id);
                        setTopicSearchQuery('');
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
                        isExpanded
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900'
                      }`}
                      title={isExpanded ? "Collapse topics" : `Click to view all ${totalLessonsCount} lesson topics`}
                    >
                      <span>{isExpanded ? 'Collapse Topics' : 'Show Topics'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* 1. COLLAPSED VIEW: ONLY SHOW THE NUMBERS! (How many have) */}
                  {!isExpanded ? (
                    <div className="mt-5 space-y-4">
                      {/* Prominent Number Display Banner */}
                      <div 
                        onClick={() => {
                          setExpandedTutorialId(tut.id);
                          setTopicSearchQuery('');
                        }}
                        className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-slate-50/50 to-purple-50/40 dark:from-indigo-950/40 dark:via-slate-800/40 dark:to-purple-950/20 border border-indigo-100/80 dark:border-slate-800 cursor-pointer group hover:border-indigo-300 dark:hover:border-indigo-600 transition-all text-center"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                          Curriculum Volume
                        </span>
                        
                        <div className="flex items-baseline justify-center gap-1.5 my-1">
                          <span className="text-4xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight tabular-nums group-hover:scale-105 transition-transform">
                            {totalLessonsCount}
                          </span>
                          <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200 uppercase">
                            Lessons
                          </span>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 mt-2">
                          <span className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-[11px] font-bold text-slate-700 dark:text-slate-300 shadow-2xs">
                            {uniqueSections.length} Structured Modules
                          </span>
                        </div>
                      </div>

                      {/* Progress Stats Pill */}
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 px-1">
                        <span>Progress: {completedInTut} / {totalLessonsCount} Completed</span>
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">{completionPct}%</span>
                      </div>
                      
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500" 
                          style={{ width: `${completionPct}%` }}
                        />
                      </div>

                      {/* Clear Interactive Trigger Button */}
                      <button
                        onClick={() => {
                          setExpandedTutorialId(tut.id);
                          setTopicSearchQuery('');
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-indigo-600 hover:text-white dark:bg-slate-800 dark:hover:bg-indigo-600 text-slate-700 dark:text-slate-200 font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 group"
                      >
                        <span>Click to View All {totalLessonsCount} Topics</span>
                        <ChevronDown className="w-3.5 h-3.5 text-indigo-500 group-hover:text-white group-hover:translate-y-0.5 transition-all" />
                      </button>
                    </div>
                  ) : (
                    /* 2. EXPANDED VIEW: SHOW ALL LESSONS TOPICS FOR CLICKED LANGUAGE (e.g. HTML, Java, etc.) */
                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-5 animate-in fade-in duration-200">
                      
                      {/* Search & Topic Filters Bar */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700">
                        <div className="relative flex-1">
                          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={topicSearchQuery}
                            onChange={(e) => setTopicSearchQuery(e.target.value)}
                            placeholder={`Search through ${totalLessonsCount} ${tut.name} lesson topics (e.g. syntax, loops, OOP, forms)...`}
                            className="w-full pl-9 pr-8 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                          {topicSearchQuery && (
                            <button
                              onClick={() => setTopicSearchQuery('')}
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {/* Difficulty Filter */}
                        <div className="flex items-center gap-1.5 shrink-0 text-xs">
                          <span className="text-[11px] font-bold text-slate-400 mr-1">Level:</span>
                          {(['ALL', 'Beginner', 'Intermediate', 'Advanced'] as const).map((diff) => (
                            <button
                              key={diff}
                              onClick={() => setDifficultyFilter(diff)}
                              className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-colors cursor-pointer ${
                                difficultyFilter === diff
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              {diff}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Header Summary info */}
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 px-1">
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4 text-indigo-500" />
                          <span>
                            Showing {filteredLessons.length} of {totalLessonsCount} {tut.name} Lesson Topics
                          </span>
                        </span>
                        <span>
                          {completedInTut} Completed ({completionPct}%)
                        </span>
                      </div>

                      {/* Scrollable Lesson Topics Deck */}
                      <div className="max-h-[460px] overflow-y-auto space-y-2.5 pr-1.5 rounded-2xl">
                        {filteredLessons.length === 0 ? (
                          <div className="p-8 text-center text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                            <Search className="w-6 h-6 mx-auto mb-2 opacity-60 text-slate-400" />
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">No lesson topics matching "{topicSearchQuery}"</p>
                            <button
                              onClick={() => { setTopicSearchQuery(''); setDifficultyFilter('ALL'); }}
                              className="mt-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                            >
                              Reset Search Filter
                            </button>
                          </div>
                        ) : (
                          filteredLessons.map((lesson, idx) => {
                            const isCompleted = user?.completedLessons.includes(lesson.id);
                            return (
                              <div
                                key={lesson.id}
                                className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                                  isCompleted
                                    ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200/80 dark:border-emerald-900/60'
                                    : 'bg-slate-50/80 dark:bg-slate-800/60 border-slate-200/70 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-white dark:hover:bg-slate-800'
                                }`}
                              >
                                <div className="space-y-1 max-w-2xl">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                                      Topic #{idx + 1}
                                    </span>
                                    {lesson.section && (
                                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                                        {lesson.section}
                                      </span>
                                    )}
                                    <span className={`text-[10px] font-bold px-2 py-0.2 rounded-full ${
                                      lesson.difficulty === 'Beginner' ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400' :
                                      lesson.difficulty === 'Intermediate' ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400' :
                                      'bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400'
                                    }`}>
                                      {lesson.difficulty}
                                    </span>
                                    {lesson.duration && (
                                      <span className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{lesson.duration}</span>
                                      </span>
                                    )}
                                  </div>
                                  
                                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                                    {lesson.title}
                                  </h4>

                                  {lesson.keyConcepts && lesson.keyConcepts.length > 0 && (
                                    <div className="flex flex-wrap gap-1 pt-0.5">
                                      {lesson.keyConcepts.slice(0, 4).map((concept, cIdx) => (
                                        <span key={cIdx} className="text-[10px] font-medium text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-700/60 px-1.5 py-0.2 rounded">
                                          {concept}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>

                                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                                  {isCompleted && (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded-lg bg-emerald-100/70 dark:bg-emerald-950">
                                      <Check className="w-3 h-3 stroke-[3]" />
                                      <span>Done</span>
                                    </span>
                                  )}
                                  <button
                                    onClick={() => onNavigateTab('tutorials', lesson.id)}
                                    className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                                  >
                                    <span>Open Lesson</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>

                      {/* Footer controls for expanded language */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                        <button
                          onClick={() => {
                            setExpandedTutorialId(null);
                            setTopicSearchQuery('');
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                        >
                          <ChevronUp className="w-4 h-4" />
                          <span>Collapse Topics for {tut.name}</span>
                        </button>

                        <button
                          onClick={() => onNavigateTab('tutorials')}
                          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          <span>Launch Full {tut.name} Interactive Masterclass</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PRACTICE QUESTIONS PREVIEW (2,480+ QUESTIONS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <CheckSquare className="w-4 h-4 text-indigo-400" />
              <span>2,480+ Curated Question Bank · 300+ Per Language</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Master Coding Through 2,480+ Practice Challenges
            </h2>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every major language track includes 300+ problems from basic syntax to advanced algorithms. Strengthen your logic and prepare for technical interviews with progressive hints, runnable test cases, and solutions.
            </p>

            {/* Quick stats pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-indigo-400 tabular-nums">2,480+</span>
                <span className="block text-xs text-slate-400 font-medium">Curated Questions</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-purple-400 tabular-nums">300+</span>
                <span className="block text-xs text-slate-400 font-medium">Each Language</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-emerald-400 tabular-nums">8</span>
                <span className="block text-xs text-slate-400 font-medium">Core Tracks</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-amber-400 tabular-nums">100%</span>
                <span className="block text-xs text-slate-400 font-medium">With Test Cases</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigateTab('practice')}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 cursor-pointer"
              >
                Launch Practice Playground (2,480+ Qs)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HANDS-ON PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              Portfolio Builders
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              8 Real-World Projects
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-xl">
              Step-by-step implementation roadmaps with code architecture and objectives.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('projects')}
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS_DATA.slice(0, 4).map((proj) => (
            <div
              key={proj.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors group"
            >
              <div>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                  proj.difficulty === 'Beginner' ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300' :
                  proj.difficulty === 'Intermediate' ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300' :
                  'bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300'
                }`}>
                  {proj.difficulty}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {proj.requiredTech.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigateTab('projects')}
                className="mt-6 w-full py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-700 dark:hover:text-indigo-300 font-bold text-xs text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
              >
                Inspect Steps ({proj.steps.length})
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CAREER GUIDANCE & INTERVIEW PREP */}
      <section className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900/40 dark:to-slate-950 py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
                Career Roadmap
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Your Journey to Becoming a Developer
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Learn concepts, practice your skills, build projects, and prepare for your future career. Includes our structured 90-Day Career Plan and STAR interview framework.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    01
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">90-Day Actionable Career Plan</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Explore, Learn, Prepare, and Apply with bi-weekly milestone targets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    02
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">STAR Method Interview Training</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Situation, Task, Action, Result framework for behavioral and technical screens.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigateTab('career')}
                  className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 text-white font-bold text-sm shadow-md cursor-pointer"
                >
                  Read Career Guidance
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Future Job Opportunities</span>
                </h3>
                
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">AI & Data</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">AI Engineer, Data Scientist, Data Analyst</span>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 rounded-full">Python • SQL</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Software Development</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">Frontend, Backend, Full-Stack Engineer</span>
                    </div>
                    <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/80 px-2 py-0.5 rounded-full">React • Node • Java</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Cybersecurity & Cloud</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">Security Analyst, Cloud Engineer</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full">Linux • AWS • Docker</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 dark:text-slate-500 italic text-center pt-1">
                  *Opportunities and salaries vary by location, credentials, and employer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CODE FROM ZERO AI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-purple-900 via-indigo-900 to-indigo-950 text-white shadow-2xl relative overflow-hidden border border-purple-800/50">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Bot className="w-4 h-4 text-purple-400" />
                <span>AI Programming Tutor</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Code From Zero AI Assistant
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Connect directly with our AI programming assistant powered by Gemini 3.8 Flash. Debug code errors, generate custom study plans, practice mock interviews, and receive step-by-step guidance.
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AI Code Debugger</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AI Learning Roadmap Builder</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AI Mock Interview Coach</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AI Dynamic Question Generator</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigateTab('ai-assistant')}
                  className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-bold text-sm shadow-lg shadow-purple-600/30 cursor-pointer"
                >
                  Open AI Assistant
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 space-y-3">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center font-bold text-xs">
                  AI
                </div>
                <div>
                  <span className="text-xs font-bold block">Code From Zero AI</span>
                  <span className="text-[10px] text-purple-300">Live Gemini Intelligence</span>
                </div>
              </div>
              
              <div className="p-3 rounded-xl bg-black/30 text-xs font-mono text-slate-200">
                "Hi! I'm Code From Zero AI, your personal coding tutor. Ask me anything about programming, debug your code, practice interview questions, or explore your future career."
              </div>

              <div className="text-[11px] text-slate-300 flex items-center justify-between">
                <span>Suggested: "Teach me Java from zero"</span>
                <span className="text-purple-300 font-bold">Ask →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LEARNING PROGRESS SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-50/80 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xs">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Track Your Personal Progress
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg">
              {isAuthenticated ? `Welcome, ${user?.name}! Your progress is automatically synced.` : 'Sign up or sign in to save your roadmaps, completed questions, and custom study plans permanently.'}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <span className="text-3xl font-black text-indigo-600 dark:text-indigo-400 tabular-nums">{completedCount}</span>
              <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Solved / {totalQuestions}</span>
            </div>
            
            <div className="w-px h-10 bg-slate-200 dark:bg-slate-800"></div>

            <button
              onClick={() => {
                if (isAuthenticated) onNavigateTab('practice');
                else onOpenAuth('signup');
              }}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
            >
              {isAuthenticated ? 'Continue Practicing' : 'Create Account'}
            </button>
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION (HOME BOTTOM) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="relative overflow-hidden text-center p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-700 dark:from-[#0B152D] dark:via-[#0F1E3D] dark:to-[#080D1A] text-white border border-indigo-400/40 dark:border-indigo-500/30 shadow-2xl shadow-indigo-600/20 dark:shadow-black/60 space-y-6">
          {/* Ambient background decorative light flares with modern cyan & sapphire hues */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-400/25 dark:bg-cyan-500/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-blue-400/25 dark:bg-indigo-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 dark:bg-indigo-500/20 backdrop-blur-md border border-white/25 dark:border-indigo-400/30 text-xs font-bold uppercase tracking-wider text-white dark:text-indigo-200 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Zero Experience Required · Completely Free to Learn</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Start Your Coding Journey Today
            </h2>
            <p className="text-indigo-100/95 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              You don't need a computer science degree to learn programming. With structured roadmaps, 2,480+ curated questions (300+ per language), 20 real-world C++ & Python projects, and AI coaching, you have everything needed to succeed.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigateTab('practice')}
                className="px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-indigo-700 dark:text-indigo-950 font-black text-base shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                Start Learning Now →
              </button>
              <button
                onClick={() => onNavigateTab('roadmaps')}
                className="px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-base border border-white/25 backdrop-blur-sm transition-all cursor-pointer"
              >
                Browse Roadmaps
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
