import React, { useState, useMemo, useEffect } from 'react';
import { QUESTIONS_DATA, CATEGORIES_DATA } from '../data/questionsData';
import { Question, Difficulty, QuestionType } from '../types';
import { useAuth } from '../context/AuthContext';
import { InteractiveCodeEditor } from './InteractiveCodeEditor';
import { 
  CheckSquare, 
  Search, 
  Bookmark, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Code2, 
  Sparkles, 
  Terminal, 
  Play, 
  Check, 
  X, 
  ChevronDown,
  Layers,
  Database,
  FileCode,
  Coffee,
  Binary,
  Palette,
  Lightbulb,
  Copy,
  CheckCheck,
  Send,
  SlidersHorizontal,
  ChevronUp
} from 'lucide-react';

interface PracticeViewProps {
  initialCategory?: string;
}

export const PracticeView: React.FC<PracticeViewProps> = ({ initialCategory }) => {
  const { user, toggleBookmarkQuestion, toggleCompleteQuestion, resetAllProgress, recordIncorrectAttempt } = useAuth();
  
  // Filters & Search
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'BOOKMARKED' | 'COMPLETED' | 'UNSOLVED'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Pagination inside questions list
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 25; // 25 questions per page

  // Active Question
  const [activeQuestionId, setActiveQuestionId] = useState<number>(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Question interaction state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [checkedMcqResult, setCheckedMcqResult] = useState<boolean | null>(null);
  const [revealedHintIndex, setRevealedHintIndex] = useState<number>(-1);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [confirmResetOpen, setConfirmResetOpen] = useState<boolean>(false);

  // Update category when initialCategory prop changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      setCurrentPage(1);
    }
  }, [initialCategory]);

  // Filtered Questions Memo
  const filteredQuestions = useMemo(() => {
    return QUESTIONS_DATA.filter((q) => {
      // Category filter
      if (selectedCategory !== 'ALL' && q.category !== selectedCategory) return false;
      
      // Difficulty filter
      if (selectedDifficulty !== 'ALL' && q.difficulty !== selectedDifficulty) return false;

      // Type filter
      if (selectedType !== 'ALL' && q.type !== selectedType) return false;

      // Status filter
      if (filterStatus === 'BOOKMARKED') {
        if (!user?.bookmarkedQuestionIds.includes(q.id)) return false;
      } else if (filterStatus === 'COMPLETED') {
        if (!user?.completedQuestionIds.includes(q.id)) return false;
      } else if (filterStatus === 'UNSOLVED') {
        if (user?.completedQuestionIds.includes(q.id)) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inQuestion = q.question.toLowerCase().includes(query);
        const inTopic = q.topic.toLowerCase().includes(query);
        const inTags = q.tags.some(t => t.toLowerCase().includes(query));
        const inId = String(q.id) === query;
        if (!inQuestion && !inTopic && !inTags && !inId) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedDifficulty, selectedType, filterStatus, searchQuery, user]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedDifficulty, selectedType, filterStatus, searchQuery]);

  // Current active question
  const currentQuestion: Question | undefined = useMemo(() => {
    const found = filteredQuestions.find(q => q.id === activeQuestionId);
    if (found) return found;
    return filteredQuestions[0] || QUESTIONS_DATA[0];
  }, [filteredQuestions, activeQuestionId]);

  // Sync state when active question changes
  const handleSelectQuestion = (q: Question) => {
    setActiveQuestionId(q.id);
    setSelectedOption(null);
    setCheckedMcqResult(null);
    setRevealedHintIndex(-1);
    setShowSolution(false);
  };

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / pageSize));
  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredQuestions.slice(start, start + pageSize);
  }, [filteredQuestions, currentPage, pageSize]);

  // Navigate to previous question in filtered set
  const handlePrev = () => {
    const currentIndex = filteredQuestions.findIndex(q => q.id === currentQuestion?.id);
    if (currentIndex > 0) {
      const prevQ = filteredQuestions[currentIndex - 1];
      handleSelectQuestion(prevQ);
      // Ensure target page is visible
      const targetPage = Math.floor((currentIndex - 1) / pageSize) + 1;
      if (targetPage !== currentPage) setCurrentPage(targetPage);
    }
  };

  // Navigate to next question in filtered set
  const handleNext = () => {
    const currentIndex = filteredQuestions.findIndex(q => q.id === currentQuestion?.id);
    if (currentIndex < filteredQuestions.length - 1) {
      const nextQ = filteredQuestions[currentIndex + 1];
      handleSelectQuestion(nextQ);
      // Ensure target page is visible
      const targetPage = Math.floor((currentIndex + 1) / pageSize) + 1;
      if (targetPage !== currentPage) setCurrentPage(targetPage);
    }
  };

  // Handle MCQ check
  const handleCheckMCQ = () => {
    if (!selectedOption || !currentQuestion) return;
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setCheckedMcqResult(isCorrect);
    if (isCorrect && !user?.completedQuestionIds.includes(currentQuestion.id)) {
      toggleCompleteQuestion(currentQuestion.id, currentQuestion.category, currentQuestion.difficulty);
    } else if (!isCorrect) {
      recordIncorrectAttempt(
        currentQuestion.id,
        currentQuestion.category,
        currentQuestion.difficulty,
        `Selected "${selectedOption}" instead of the correct answer.`
      );
    }
  };

  // Global question stats
  const totalQuestions = QUESTIONS_DATA.length; // 2480
  const completedCount = user?.completedQuestionIds.length || 0;
  const remainingCount = totalQuestions - completedCount;
  const overallPercentage = Math.round((completedCount / totalQuestions) * 100);

  // Difficulty stats
  const beginnerTotal = QUESTIONS_DATA.filter(q => q.difficulty === 'Beginner').length;
  const beginnerCompleted = QUESTIONS_DATA.filter(q => q.difficulty === 'Beginner' && user?.completedQuestionIds.includes(q.id)).length;

  const intermediateTotal = QUESTIONS_DATA.filter(q => q.difficulty === 'Intermediate').length;
  const intermediateCompleted = QUESTIONS_DATA.filter(q => q.difficulty === 'Intermediate' && user?.completedQuestionIds.includes(q.id)).length;

  const advancedTotal = QUESTIONS_DATA.filter(q => q.difficulty === 'Advanced').length;
  const advancedCompleted = QUESTIONS_DATA.filter(q => q.difficulty === 'Advanced' && user?.completedQuestionIds.includes(q.id)).length;

  const isBookmarked = Boolean(currentQuestion && user?.bookmarkedQuestionIds.includes(currentQuestion.id));
  const isCompleted = Boolean(currentQuestion && user?.completedQuestionIds.includes(currentQuestion.id));

  const languageIcons: Record<string, any> = {
    'JavaScript': FileCode,
    'Python': Terminal,
    'Java': Coffee,
    'C++ Programming': Binary,
    'C Programming': Code2,
    'SQL and Databases': Database,
    'HTML & CSS': Palette,
    'Data Structures & Algorithms': Layers,
  };

  return (
    <div className="bg-transparent dark:bg-[#0B0F17] min-h-screen py-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Section */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Subtle ambient background glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200/60 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <CheckSquare className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Massive Question Bank · 300+ Per Language</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Master Coding Through 2,480+ Practice Questions
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Each major programming language features over 300+ curated problems, test cases, interactive code testing, multiple-choice quizzes, debugging challenges, and step-by-step solutions.
            </p>
          </div>

          {/* Quick Statistics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto shrink-0 relative z-10">
            <div className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200/70 dark:border-slate-700/80 text-center">
              <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 tabular-nums">2,480+</span>
              <span className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Total Questions</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200/70 dark:border-slate-700/80 text-center">
              <span className="text-2xl font-black text-purple-600 dark:text-purple-400 tabular-nums">300+</span>
              <span className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Per Language</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200/70 dark:border-slate-700/80 text-center">
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums">8</span>
              <span className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Core Tracks</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200/70 dark:border-slate-700/80 text-center">
              <span className="text-2xl font-black text-amber-600 dark:text-amber-400 tabular-nums">{completedCount}</span>
              <span className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mt-0.5">Solved</span>
            </div>
          </div>
        </div>

        {/* Language Category Selector Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
            <span className="uppercase tracking-wider">Select Programming Language (300+ Practice Questions Each)</span>
            <span className="hidden sm:inline text-indigo-600 dark:text-indigo-400 font-bold">
              Showing {filteredQuestions.length} matching questions
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {/* All Languages Tab */}
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer border ${
                selectedCategory === 'ALL'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-600/30'
                  : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>All Tracks</span>
              <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-md ${selectedCategory === 'ALL' ? 'bg-indigo-700 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                {QUESTIONS_DATA.length}
              </span>
            </button>

            {/* Language Tabs */}
            {CATEGORIES_DATA.map((cat) => {
              const Icon = languageIcons[cat.name] || Code2;
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-600/30'
                      : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name.replace(' Programming', '')}</span>
                  <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-md ${isActive ? 'bg-indigo-700 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Toolbar (Difficulty, Type, Status, Search) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword, or problem title (e.g. pointers, recursion, flexbox)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              <option value="ALL">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              <option value="ALL">All Question Types</option>
              <option value="Coding">Coding Challenges</option>
              <option value="Multiple-Choice">Multiple Choice</option>
              <option value="Output-Prediction">Output Prediction</option>
              <option value="Debugging">Find The Error</option>
              <option value="SQL">SQL Queries</option>
            </select>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              <option value="ALL">All Status</option>
              <option value="UNSOLVED">Unsolved Only</option>
              <option value="COMPLETED">Completed Only</option>
              <option value="BOOKMARKED">Bookmarked Only</option>
            </select>

            {/* Toggle Sidebar Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                sidebarOpen 
                  ? 'bg-indigo-50 dark:bg-indigo-950/80 border-indigo-200 text-indigo-700 dark:text-indigo-300' 
                  : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300'
              }`}
              title={sidebarOpen ? 'Hide Question List' : 'Show Question List'}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">{sidebarOpen ? 'Hide List' : 'Show List'}</span>
            </button>
          </div>
        </div>

        {/* Main Split Layout: Question Explorer + Interactive IDE Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Question List Sidebar (Collapsible) */}
          {sidebarOpen && (
            <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col h-[760px] overflow-hidden">
              {/* Sidebar Header with Page Info */}
              <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Questions List
                  </span>
                  <p className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    {filteredQuestions.length} Total · Page {currentPage} of {totalPages}
                  </p>
                </div>
                
                {/* Pagination Controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    title="Previous page"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono font-bold px-2 text-slate-700 dark:text-slate-300 tabular-nums">
                    {currentPage}/{totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    title="Next page"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Question Items */}
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {paginatedQuestions.length === 0 ? (
                  <div className="p-8 text-center text-slate-400 text-xs">
                    No questions found matching your filter criteria.
                  </div>
                ) : (
                  paginatedQuestions.map((q) => {
                    const isQActive = currentQuestion?.id === q.id;
                    const isQCompleted = user?.completedQuestionIds.includes(q.id);
                    const isQBookmarked = user?.bookmarkedQuestionIds.includes(q.id);

                    return (
                      <button
                        key={q.id}
                        onClick={() => handleSelectQuestion(q)}
                        className={`w-full p-3 rounded-2xl text-left transition-all flex items-start gap-3 cursor-pointer group ${
                          isQActive
                            ? 'bg-indigo-50/90 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 shadow-xs'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-transparent'
                        }`}
                      >
                        {/* Status Icon */}
                        <div className="mt-0.5 shrink-0">
                          {isQCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          ) : isQBookmarked ? (
                            <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
                          ) : (
                            <span className="font-mono text-[10px] text-slate-400 w-4 block text-center">
                              #{q.id}
                            </span>
                          )}
                        </div>

                        {/* Title & Metadata */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-0.5">
                            <span className="font-semibold text-slate-600 dark:text-slate-300 truncate">
                              {q.category}
                            </span>
                            <span>·</span>
                            <span className="truncate">{q.topic}</span>
                            <span>·</span>
                            <span className={`font-bold ${
                              q.difficulty === 'Beginner' ? 'text-emerald-600' :
                              q.difficulty === 'Intermediate' ? 'text-indigo-600' : 'text-purple-600'
                            }`}>
                              {q.difficulty}
                            </span>
                          </div>

                          <p className={`text-xs font-bold line-clamp-2 leading-relaxed ${
                            isQActive
                              ? 'text-indigo-900 dark:text-indigo-100'
                              : 'text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
                          }`}>
                            {q.question}
                          </p>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Sidebar Quick Footer */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Jump to page:</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].filter(p => p <= totalPages).map(p => (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`w-6 h-6 rounded-md font-mono text-[10px] font-bold transition-colors cursor-pointer ${
                        currentPage === p 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  {totalPages > 5 && (
                    <button
                      onClick={() => setCurrentPage(totalPages)}
                      className="px-1 text-[10px] font-bold text-slate-500 hover:text-indigo-600 cursor-pointer"
                    >
                      ...{totalPages}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Main Question & Code Playground Deck */}
          <div className={`${sidebarOpen ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-6`}>
            {currentQuestion ? (
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
                
                {/* Question Top Navigation Strip */}
                <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-800/30">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black px-2 py-0.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                      Problem #{currentQuestion.id}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      {currentQuestion.category} · {currentQuestion.topic}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                      currentQuestion.difficulty === 'Beginner' ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400' :
                      currentQuestion.difficulty === 'Intermediate' ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400' :
                      'bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400'
                    }`}>
                      {currentQuestion.difficulty}
                    </span>
                  </div>

                  {/* Actions: Prev / Next / Bookmark / Mark Solved */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                      title="Previous Question"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                      title="Next Question"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => toggleBookmarkQuestion(currentQuestion.id)}
                      className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                        isBookmarked 
                          ? 'bg-amber-50 dark:bg-amber-950/80 border-amber-300 dark:border-amber-700 text-amber-600'
                          : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                    </button>

                    <button
                      onClick={() => toggleCompleteQuestion(currentQuestion.id, currentQuestion.category, currentQuestion.difficulty)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        isCompleted
                          ? 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                          : 'bg-indigo-600 hover:bg-indigo-700 border-indigo-600 text-white'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{isCompleted ? 'Solved' : 'Mark as Solved'}</span>
                    </button>
                  </div>
                </div>

                {/* Problem Statement Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {currentQuestion.question}
                    </h2>
                    
                    {/* Constraints & Complexity Meta */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-1">
                      {currentQuestion.timeComplexity && (
                        <span>Time: <strong className="font-mono text-slate-700 dark:text-slate-200">{currentQuestion.timeComplexity}</strong></span>
                      )}
                      {currentQuestion.spaceComplexity && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>Space: <strong className="font-mono text-slate-700 dark:text-slate-200">{currentQuestion.spaceComplexity}</strong></span>
                        </>
                      )}
                      {currentQuestion.tags && currentQuestion.tags.length > 0 && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>Tags: {currentQuestion.tags.slice(0, 3).join(', ')}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Examples Section if available */}
                  {currentQuestion.examples && currentQuestion.examples.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Example Test Cases
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentQuestion.examples.map((ex, idx) => (
                          <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800 font-mono text-xs space-y-1">
                            <div>
                              <span className="text-slate-400 font-bold">Input: </span>
                              <span className="text-slate-800 dark:text-slate-200">{ex.input}</span>
                            </div>
                            <div>
                              <span className="text-slate-400 font-bold">Output: </span>
                              <span className="text-emerald-600 dark:text-emerald-400 font-bold">{ex.output}</span>
                            </div>
                            {ex.explanation && (
                              <p className="text-[11px] font-sans text-slate-500 dark:text-slate-400 pt-1">
                                {ex.explanation}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Multiple Choice Question UI */}
                  {currentQuestion.options && currentQuestion.options.length > 0 && (
                    <div className="space-y-4 pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Choose the correct answer:
                      </span>
                      <div className="space-y-2">
                        {currentQuestion.options.map((opt, idx) => {
                          const isSelected = selectedOption === opt;
                          const isCorrect = opt === currentQuestion.correctAnswer;
                          const showResult = checkedMcqResult !== null;

                          let borderStyle = 'border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-400';
                          let bgStyle = 'bg-white dark:bg-slate-800/70';

                          if (showResult) {
                            if (isCorrect) {
                              borderStyle = 'border-emerald-500 dark:border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/60';
                            } else if (isSelected && !isCorrect) {
                              borderStyle = 'border-rose-500 dark:border-rose-500 bg-rose-50/80 dark:bg-rose-950/60';
                            }
                          } else if (isSelected) {
                            borderStyle = 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/60';
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                setSelectedOption(opt);
                                setCheckedMcqResult(null);
                              }}
                              className={`w-full p-4 rounded-2xl border text-left font-medium text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer ${borderStyle} ${bgStyle}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs flex items-center justify-center shrink-0">
                                  {String.fromCharCode(65 + idx)}
                                </span>
                                <span className="text-slate-800 dark:text-slate-100">{opt}</span>
                              </div>
                              {showResult && isCorrect && (
                                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                              )}
                              {showResult && isSelected && !isCorrect && (
                                <X className="w-5 h-5 text-rose-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          onClick={handleCheckMCQ}
                          disabled={!selectedOption}
                          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all cursor-pointer"
                        >
                          Check Answer
                        </button>
                        {checkedMcqResult !== null && (
                          <span className={`text-xs font-bold ${checkedMcqResult ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {checkedMcqResult ? '✓ Correct Answer!' : '✗ Incorrect. Try again or check the hints below.'}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Interactive Code Playground (For Coding, Debugging, SQL, Output-Prediction, etc.) */}
                  {(currentQuestion.type === 'Coding' || currentQuestion.type === 'Debugging' || currentQuestion.type === 'SQL' || currentQuestion.type === 'Algorithm' || currentQuestion.code) && (
                    <div className="pt-2">
                      <InteractiveCodeEditor
                        question={currentQuestion}
                        starterCode={currentQuestion.code}
                        solutionCode={currentQuestion.solution}
                        isCompleted={isCompleted}
                        onSolved={() => {
                          if (!user?.completedQuestionIds.includes(currentQuestion.id)) {
                            toggleCompleteQuestion(currentQuestion.id, currentQuestion.category, currentQuestion.difficulty);
                          }
                        }}
                      />
                    </div>
                  )}

                  {/* Progressive Hints Accordion */}
                  {currentQuestion.hints && currentQuestion.hints.length > 0 && (
                    <div className="pt-2 space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <Lightbulb className="w-4 h-4 text-amber-500" />
                          <span>Need Guidance? ({currentQuestion.hints.length} Hints Available)</span>
                        </span>
                      </div>

                      <div className="space-y-2">
                        {currentQuestion.hints.map((hint, idx) => {
                          const isRevealed = revealedHintIndex >= idx;
                          return (
                            <div key={idx} className="rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden bg-slate-50/70 dark:bg-slate-800/40">
                              <button
                                onClick={() => setRevealedHintIndex(isRevealed ? idx - 1 : idx)}
                                className="w-full p-3 px-4 text-left flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
                              >
                                <span>Hint #{idx + 1}</span>
                                <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                                  {isRevealed ? 'Hide Hint' : 'Reveal Hint'}
                                </span>
                              </button>
                              {isRevealed && (
                                <div className="px-4 pb-3 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/80 pt-2 animate-in fade-in duration-150">
                                  {hint}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Complete Solution & Conceptual Explanation Toggle */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => setShowSolution(!showSolution)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 cursor-pointer"
                    >
                      {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      <span>{showSolution ? 'Hide Official Solution' : 'View Complete Solution & Explanation'}</span>
                    </button>

                    {showSolution && (
                      <div className="mt-4 p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-4 animate-in fade-in duration-200">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Reference Solution
                          </span>
                          <div className="mt-1.5 p-4 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto">
                            <pre className="whitespace-pre-wrap">{currentQuestion.solution}</pre>
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Conceptual Explanation
                          </span>
                          <p className="mt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {currentQuestion.explanation}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center text-slate-400 border border-slate-200/80 dark:border-slate-800">
                <Code2 className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">No Question Selected</h3>
                <p className="text-xs text-slate-400 mt-1">Select any problem from the sidebar list to start practicing.</p>
              </div>
            )}
          </div>

        </div>

        {/* Global Progress Strip Banner */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Total Progress
            </span>
            <p className="text-sm font-extrabold text-slate-800 dark:text-slate-200">
              {completedCount} of {totalQuestions} Questions Solved ({overallPercentage}%)
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-full md:w-64 bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-200/80 dark:border-slate-700">
              <div 
                className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(overallPercentage, 1)}%` }}
              />
            </div>

            <button
              onClick={() => setConfirmResetOpen(true)}
              className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline shrink-0 cursor-pointer"
            >
              Reset Progress
            </button>
          </div>
        </div>

        {/* Reset Confirmation Modal */}
        {confirmResetOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-sm w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                Reset All Practice Progress?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                This will clear all your completed questions, bookmarked items, and reset your practice statistics back to zero.
              </p>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setConfirmResetOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    resetAllProgress();
                    setConfirmResetOpen(false);
                  }}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold cursor-pointer"
                >
                  Confirm Reset
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
