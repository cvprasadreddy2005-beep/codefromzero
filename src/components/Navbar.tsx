import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { QUESTIONS_DATA, CATEGORIES_DATA } from '../data/questionsData';
import { 
  Code2, 
  Compass, 
  BookOpen, 
  CheckSquare, 
  FolderGit2, 
  Briefcase, 
  Sparkles, 
  User, 
  LogOut, 
  Bookmark, 
  CheckCircle2, 
  X, 
  ChevronDown,
  Moon,
  Sun,
  BarChart3,
  Search,
  Flame,
  ArrowRight,
  Terminal,
  Layers,
  Database,
  FileCode,
  Coffee,
  Binary,
  Palette,
  GitBranch,
  Home,
  Info
} from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string, param?: string) => void;
  openAuthModal: (mode?: 'signin' | 'signup') => void;
  openProfileModal: () => void;
  openAboutModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  openAuthModal,
  openProfileModal,
  openAboutModal,
}) => {
  const { user, isAuthenticated, logout, suitrateInfo } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  // Mega Menu (Hamburger menu dropdown for desktop & mobile)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut Cmd+K / Ctrl+K for search, Escape to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        setSearchModalOpen(false);
        setMegaMenuOpen(false);
        setProfileDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (searchModalOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchModalOpen]);

  const programmingTutorialTracks = [
    { id: 'python', name: 'Python Tutorials', desc: 'Syntax, Data Types, Loops, OOP, Modules & 30 Projects', icon: Terminal, modules: '25 Modules', badge: 'Popular' },
    { id: 'javascript', name: 'JavaScript Tutorials', desc: 'Variables, Functions, DOM, Async/Await & 16 Projects', icon: FileCode, modules: '16 Modules', badge: 'Web Core' },
    { id: 'sql', name: 'SQL & Databases Tutorials', desc: 'CRUD, Queries, Joins, Transactions & Schema Design', icon: Database, modules: '15 Modules', badge: 'Data' },
    { id: 'c', name: 'C Programming Tutorials', desc: 'Pointers, Memory, Structures, Files & Low-Level Foundations', icon: Code2, modules: '16 Modules', badge: 'Systems' },
    { id: 'cpp', name: 'C++ Programming Tutorials', desc: 'OOP, STL Containers, Smart Pointers, Templates & DSA', icon: Binary, modules: '13 Modules', badge: 'High Perf' },
    { id: 'git', name: 'Git & GitHub Tutorials', desc: 'Version Control, Branching, Pull Requests & Security', icon: GitBranch, modules: '12 Modules', badge: 'Workflow' },
    { id: 'java', name: 'Java Masterclass', desc: 'JVM Architecture, OOP Pillars, Collections, Spring & 664 Lessons', icon: Coffee, modules: '32 Modules', badge: '664 Lessons' },
    { id: 'html', name: 'HTML5 Masterclass', desc: 'Semantic Elements, Forms, Audio/Video, Canvas & 378 Units', icon: Palette, modules: '20 Modules', badge: '378 Units' }
  ];

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

  const handleNavClick = (id: string, param?: string) => {
    if (id === 'about') {
      if (openAboutModal) {
        openAboutModal();
        setMegaMenuOpen(false);
        return;
      }
    }
    setCurrentTab(id, param);
    setMegaMenuOpen(false);
    setSearchModalOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Search results for command palette
  const searchResults = searchQuery.trim() ? QUESTIONS_DATA.filter(q => {
    const qText = q.question.toLowerCase();
    const qTopic = q.topic.toLowerCase();
    const qCat = q.category.toLowerCase();
    const qStr = searchQuery.toLowerCase();
    return qText.includes(qStr) || qTopic.includes(qStr) || qCat.includes(qStr);
  }).slice(0, 8) : [];

  const completedQuestionsCount = user?.completedQuestionIds.length || 0;
  const totalQuestions = QUESTIONS_DATA.length; // 2480

  const isModuleActive = ['ai-assistant', 'tutorials', 'practice', 'roadmaps', 'projects', 'career', 'dashboard'].includes(currentTab);

  return (
    <>
      {/* Top Menu Bar with Crisp Viewability, High Contrast & Solid Backing */}
      <header className="sticky top-0 z-40 relative backdrop-blur-2xl border-b border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-[#070A10]/95 shadow-sm transition-all duration-200">
        
        {/* Subtle Brand Accent Line */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent pointer-events-none" />

        {/* Main Navigation Bar Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4 min-w-0">
            
            {/* Zone 1 (Left): Brand Logo & Home Shortcut */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2 group cursor-pointer focus:outline-none min-w-0"
                aria-label="Code From Zero Home"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-sm shadow-indigo-500/25 group-hover:scale-105 transition-all duration-200 ring-1 ring-indigo-400/30 shrink-0">
                  <Code2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.5]" />
                </div>
                <div className="text-left min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-sm sm:text-base tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 dark:from-white dark:via-indigo-100 dark:to-purple-200 bg-clip-text text-transparent truncate">
                      Code From Zero
                    </span>
                    <span className="hidden xs:inline-flex items-center px-1.5 py-0.2 rounded-md text-[9px] font-black bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xs shrink-0">
                      PRO
                    </span>
                  </div>
                  <span className="hidden lg:block text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate -mt-0.5">
                    Learn Programming From Zero to Advanced
                  </span>
                </div>
              </button>

              {/* Direct Top Bar Button: HOME */}
              <button
                onClick={() => handleNavClick('home')}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                  currentTab === 'home'
                    ? 'text-white bg-indigo-600 border border-indigo-500 shadow-sm shadow-indigo-600/25'
                    : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-transparent hover:border-slate-200 dark:hover:border-white/10'
                }`}
                title="Return to Home Page"
                aria-label="Home"
              >
                <Home className={`w-3.5 h-3.5 shrink-0 ${currentTab === 'home' ? 'text-white' : 'text-indigo-500 dark:text-indigo-400'}`} />
                <span className="text-xs font-semibold">Home</span>
              </button>
            </div>

            {/* Zone 2 (Right): Search, Theme Toggle, Sign In / Profile, and All Features */}
            <div className="flex items-center gap-1.5 sm:gap-2 ml-auto shrink-0">

              {/* 1. SEARCH BUTTON */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all cursor-pointer shadow-xs group shrink-0"
                title="Search questions, roadmaps, and tutorials (⌘K)"
                aria-label="Search"
              >
                <Search className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors shrink-0" />
                <span className="hidden sm:inline text-xs font-medium">Search</span>
                <kbd className="hidden md:inline-flex pointer-events-none h-4 select-none items-center gap-0.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-1 font-mono text-[9px] font-semibold text-slate-500 dark:text-slate-400">
                  ⌘K
                </kbd>
              </button>

              {/* 2. DIRECT THEME TOGGLE BUTTON (LIGHT / DARK SWITCH) */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg bg-white/90 dark:bg-slate-900/80 hover:bg-amber-50 dark:hover:bg-indigo-950/70 border border-slate-200/90 dark:border-slate-800 hover:border-amber-400 dark:hover:border-indigo-400 transition-all cursor-pointer shadow-xs active:scale-95 group shrink-0"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300 group-hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 hover:text-indigo-600 group-hover:-rotate-12 transition-transform" />
                )}
              </button>

              {/* 3. SIGN IN / SIGN UP (PROFILE ICON) */}
              {!isAuthenticated ? (
                <button
                  onClick={() => openAuthModal('signin')}
                  className="flex items-center justify-center w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg bg-white/90 dark:bg-slate-900/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/70 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-white transition-all cursor-pointer shadow-xs active:scale-95 group shrink-0"
                  title="Sign In / Sign Up"
                  aria-label="Sign In or Sign Up"
                >
                  <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
              ) : (
                <div className="relative" ref={profileDropdownRef}>
                  <button
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    className="flex items-center justify-center w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-black text-xs hover:ring-2 hover:ring-indigo-400/50 transition-all cursor-pointer shadow-xs relative group active:scale-95"
                    title={`Account Profile: ${user?.name} (${suitrateInfo.rate}% Suitrate)`}
                    aria-label="User Account Profile"
                  >
                    <span>{user?.name.charAt(0).toUpperCase()}</span>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-[#0c1017]" />
                  </button>

                  {/* Compact Profile Options Dropdown for Symbol */}
                  {profileDropdownOpen && (
                    <div 
                      className="absolute right-0 mt-2 w-72 bg-white/98 dark:bg-[#0B0F17]/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200 dark:border-indigo-500/30 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-slate-900 dark:text-slate-100"
                    >
                      <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                        <p className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Signed in as</p>
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{user?.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user?.email}</p>
                      </div>

                      {/* Suitrate Info */}
                      <div className="px-4 py-3 bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 dark:from-indigo-950/40 dark:via-purple-950/20 dark:to-slate-900 border-b border-slate-100 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Account Suitrate</span>
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${suitrateInfo.badgeColor}`}>
                            {suitrateInfo.rate}% • {suitrateInfo.label}
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mt-1.5">
                          <div 
                            className={`h-full transition-all duration-500 ${suitrateInfo.level === 'good' ? 'bg-emerald-500' : suitrateInfo.level === 'poor' ? 'bg-rose-500' : 'bg-amber-500'}`}
                            style={{ width: `${suitrateInfo.rate}%` }}
                          />
                        </div>
                      </div>

                      <div className="py-1">
                        <button
                          onClick={() => { setProfileDropdownOpen(false); openProfileModal(); }}
                          className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 text-left cursor-pointer"
                        >
                          <User className="w-4 h-4 text-slate-400" />
                          <span>My Profile & Progress</span>
                        </button>

                        <button
                          onClick={() => { setProfileDropdownOpen(false); handleNavClick('dashboard'); }}
                          className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 text-left cursor-pointer"
                        >
                          <span className="flex items-center gap-2.5">
                            <BarChart3 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                            <span>Performance Dashboard</span>
                          </span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 rounded-md border border-indigo-200 dark:border-indigo-800">
                            Live
                          </span>
                        </button>
                      </div>

                      <div className="border-t border-slate-100 dark:border-slate-800 pt-1">
                        <button
                          onClick={() => { setProfileDropdownOpen(false); logout(); }}
                          className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 text-left cursor-pointer"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 4. ALL FEATURES BUTTON (☰ Symbol as requested by user)
                  Houses all separated modules: AI Mentor, Programming Tutorials (8 tracks), Practice, Roadmaps, Projects, Career, Dashboard */}
              <div className="relative" ref={megaMenuRef}>
                <button
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border shrink-0 ${
                    megaMenuOpen || isModuleActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-sm shadow-indigo-600/25 ring-1 ring-indigo-400/40'
                      : 'text-slate-800 dark:text-white bg-white/90 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800/90 border-slate-200/90 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 shadow-xs'
                  }`}
                  title="Open Tutorials, Practice, AI Mentor & Learning Modules"
                  aria-label="Open Navigation Menu"
                  aria-expanded={megaMenuOpen}
                >
                  {/* The exact 3-horizontal-bars photo symbol */}
                  <span className="flex flex-col justify-center items-center w-4 sm:w-5 h-3.5 sm:h-4 gap-[2.5px] sm:gap-[3.5px] shrink-0" aria-hidden="true">
                    <span className="w-3.5 sm:w-4.5 h-[2px] sm:h-[2.5px] rounded-full bg-current transition-all" />
                    <span className="w-3.5 sm:w-4.5 h-[2px] sm:h-[2.5px] rounded-full bg-current transition-all" />
                    <span className="w-3.5 sm:w-4.5 h-[2px] sm:h-[2.5px] rounded-full bg-current transition-all" />
                  </span>
                  
                  <span className="hidden xs:inline text-xs sm:text-sm font-bold tracking-tight">
                    All Features
                  </span>
                  <span className="xs:hidden text-xs font-bold tracking-tight">
                    Features
                  </span>
                  
                  <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-black bg-white/20 text-current">
                    8 Tracks
                  </span>

                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Backdrop Overlay when All Features Menu is Open */}
                {megaMenuOpen && (
                  <div 
                    className="fixed inset-0 z-40 bg-black/60 dark:bg-black/75 backdrop-blur-md transition-opacity" 
                    onClick={() => setMegaMenuOpen(false)}
                    aria-hidden="true"
                  />
                )}

                {/* THE ALL FEATURES MODAL DRAWER */}
                {megaMenuOpen && (
                  <div 
                    className="fixed top-20 left-2.5 right-2.5 sm:left-auto sm:right-4 md:right-6 lg:right-8 w-auto sm:w-[660px] md:w-[720px] lg:w-[760px] max-w-[calc(100vw-1.25rem)] bg-white/98 dark:bg-[#0B0F17]/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200 dark:border-indigo-500/30 py-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-6rem)] overflow-y-auto relative text-slate-900 dark:text-slate-100"
                  >
                    {/* Background Subtle Gradient Glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

                    <div className="relative z-10">
                      {/* Header: All Features Title, Streak, Theme Toggle, & Quick Close */}
                      <div className="px-5 pb-3 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="flex flex-col justify-center items-center w-4 h-3 gap-[2.5px] text-indigo-600 dark:text-indigo-400">
                            <span className="w-3.5 h-[2px] rounded-full bg-current" />
                            <span className="w-3.5 h-[2px] rounded-full bg-current" />
                            <span className="w-3.5 h-[2px] rounded-full bg-current" />
                          </span>
                          <div>
                            <p className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                              Code From Zero Learning Hub
                            </p>
                            <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                              All Features & Navigation
                            </h3>
                          </div>
                        </div>

                        {/* Top Controls inside Drawer: Streak + Theme Toggle + Close */}
                        <div className="flex items-center gap-2">
                          {/* Study Streak Badge */}
                          <div 
                            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-300 text-xs font-bold shadow-xs"
                            title="Daily Study Streak: 3 Days Active!"
                          >
                            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
                            <span>{user?.studyStreakDays || 3}d</span>
                          </div>

                          {/* Theme Toggle Button in Drawer */}
                          <button
                            onClick={toggleTheme}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 transition-all cursor-pointer shadow-xs active:scale-95"
                            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            aria-label="Toggle dark mode"
                          >
                            {isDark ? (
                              <>
                                <Sun className="w-3.5 h-3.5 text-amber-400" />
                                <span className="hidden sm:inline text-[11px]">Light Mode</span>
                              </>
                            ) : (
                              <>
                                <Moon className="w-3.5 h-3.5 text-slate-700" />
                                <span className="hidden sm:inline text-[11px]">Dark Mode</span>
                              </>
                            )}
                          </button>

                          {/* Close X */}
                          <button
                            onClick={() => setMegaMenuOpen(false)}
                            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition-colors"
                            aria-label="Close menu"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 space-y-4">
                        
                        {/* FEATURED: YOUR PROFILE & PROGRESS OR GUEST SIGN-IN CARD */}
                        {isAuthenticated ? (
                          <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-slate-50 dark:from-indigo-950/50 dark:via-purple-950/40 dark:to-slate-900/70 border border-indigo-200 dark:border-indigo-500/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm dark:shadow-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                                {user?.name.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                                    {user?.name}
                                  </h4>
                                  <span className={`text-[10px] font-black px-2 py-0.2 rounded-full border ${suitrateInfo.badgeColor}`}>
                                    {suitrateInfo.rate}% Suitrate
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-600 dark:text-slate-300">
                                  {user?.email} • {completedQuestionsCount} Solved • {user?.studyStreakDays || 3}d Streak
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  setMegaMenuOpen(false);
                                  openProfileModal();
                                }}
                                className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                              >
                                <User className="w-3.5 h-3.5" />
                                <span>My Profile</span>
                              </button>
                              <button
                                onClick={() => {
                                  setMegaMenuOpen(false);
                                  logout();
                                }}
                                className="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/70 hover:bg-rose-100 dark:hover:bg-rose-900/80 border border-rose-200 dark:border-rose-700/60 text-rose-700 dark:text-rose-300 hover:text-rose-800 dark:hover:text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
                                title="Sign Out"
                              >
                                <LogOut className="w-3.5 h-3.5" />
                                <span>Sign Out</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-slate-50 dark:from-indigo-950/50 dark:via-purple-950/40 dark:to-slate-900/70 border border-indigo-200 dark:border-indigo-500/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm dark:shadow-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-600/30 border border-indigo-200 dark:border-indigo-500/50 text-indigo-700 dark:text-indigo-300 flex items-center justify-center shrink-0">
                                <User className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                                  Join Code From Zero PRO
                                </h4>
                                <p className="text-[11px] text-slate-600 dark:text-slate-300">
                                  Save coding solutions, track streaks & view real-time Account Suitrate.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  setMegaMenuOpen(false);
                                  openAuthModal('signin');
                                }}
                                className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-bold transition-all border border-slate-200 dark:border-slate-700 cursor-pointer"
                              >
                                Sign In
                              </button>
                              <button
                                onClick={() => {
                                  setMegaMenuOpen(false);
                                  openAuthModal('signup');
                                }}
                                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/30 cursor-pointer"
                              >
                                Sign Up (Free)
                              </button>
                            </div>
                          </div>
                        )}

                        {/* SECTION: ABOUT FOUNDER & LEAD DEVELOPER (C V Prasad Reddy) */}
                        <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-rose-50 via-purple-50 to-slate-50 dark:from-rose-950/40 dark:via-purple-950/30 dark:to-slate-900/60 border border-rose-200 dark:border-rose-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-rose-500/30">
                              <Info className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                                  About Founder & Lead Developer
                                </h4>
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-rose-100 dark:bg-rose-900/70 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-500/50">
                                  Creator
                                </span>
                              </div>
                              <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
                                <strong className="text-slate-900 dark:text-white">C V Prasad Reddy</strong> • Kadapa-516003, Andhra Pradesh, India • <span className="text-indigo-600 dark:text-indigo-300 font-mono text-[11px]">cvprasadreddy2005@gmail.com</span>
                              </p>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                                Empowers beginners from absolute zero to advanced software engineers.
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setMegaMenuOpen(false);
                              handleNavClick('about');
                            }}
                            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all shadow-md shadow-rose-600/30 flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                          >
                            <Info className="w-3.5 h-3.5" />
                            <span>View Founder Story</span>
                          </button>
                        </div>

                        {/* SECTION 1: AI MENTOR (Top Highlight Feature) */}
                        <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50 to-slate-50 dark:from-purple-500/20 dark:via-indigo-500/15 dark:to-slate-900/40 border border-purple-200 dark:border-purple-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/30">
                              <Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                                  Code From Zero AI Mentor
                                </h4>
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-500/50">
                                  24/7 AI Code Help
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                                Real-time code explanation, error debugging, and step-by-step interview coaching.
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleNavClick('ai-assistant')}
                            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/30 flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Launch AI Mentor</span>
                          </button>
                        </div>

                        {/* SECTION 2: PROGRAMMING TUTORIALS (8 Dedicated Tracks) */}
                        <div>
                          <div className="flex items-center justify-between mb-2.5">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                                Programming Tutorials (8 Tracks)
                              </h4>
                            </div>
                            <button
                              onClick={() => handleNavClick('tutorials')}
                              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline cursor-pointer flex items-center gap-1"
                            >
                              <span>Browse All 8 Tracks</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {programmingTutorialTracks.map((trk) => {
                              const TrkIcon = trk.icon;
                              return (
                                <button
                                  key={trk.id}
                                  onClick={() => handleNavClick('tutorials', trk.id)}
                                  className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/60 transition-all text-left cursor-pointer group"
                                >
                                  <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 group-hover:bg-indigo-600 text-slate-600 dark:text-slate-300 group-hover:text-white flex items-center justify-center transition-colors shadow-2xs border border-slate-200/60 dark:border-transparent">
                                      <TrkIcon className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <div className="font-bold text-xs text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 flex items-center gap-1.5">
                                        <span>{trk.name}</span>
                                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-indigo-100 dark:bg-indigo-900/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700/50">
                                          {trk.badge}
                                        </span>
                                      </div>
                                      <div className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                                        {trk.desc}
                                      </div>
                                    </div>
                                  </div>
                                  <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 shrink-0 ml-1">
                                    {trk.modules}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* SECTION 3: PRACTICE ARENA (2,480+ Practice Questions) */}
                        <div>
                          <div className="flex items-center justify-between mb-2.5">
                            <div className="flex items-center gap-2">
                              <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                                Practice Coding Arena (2,480+ Questions)
                              </h4>
                            </div>
                            <button
                              onClick={() => handleNavClick('practice')}
                              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline cursor-pointer flex items-center gap-1"
                            >
                              <span>Open Practice Arena</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {CATEGORIES_DATA.map((cat) => {
                              const CatIcon = languageIcons[cat.name] || Code2;
                              return (
                                <button
                                  key={cat.name}
                                  onClick={() => handleNavClick('practice', cat.name)}
                                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/60 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-500/60 transition-all text-left cursor-pointer group"
                                >
                                  <div className="flex items-center justify-between mb-1">
                                    <CatIcon className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                                    <span className="text-[10px] font-black px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                                      {cat.count} Qs
                                    </span>
                                  </div>
                                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 truncate">
                                    {cat.name.replace(' Programming', '')}
                                  </p>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* SECTION 4: OTHER LEARNING & CAREER MODULES */}
                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                            Learning Paths & Career Tools
                          </h4>
                          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                            <button
                              onClick={() => handleNavClick('home')}
                              className="p-3 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 hover:bg-indigo-100/80 dark:hover:bg-indigo-900/60 border border-indigo-200/80 dark:border-indigo-800/80 text-left transition-all cursor-pointer group"
                            >
                              <Home className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mb-1" />
                              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
                                Home
                              </div>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Start & Overview</p>
                            </button>

                            <button
                              onClick={() => handleNavClick('roadmaps')}
                              className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500/50 text-left transition-all cursor-pointer group"
                            >
                              <Compass className="w-4 h-4 text-sky-500 dark:text-sky-400 mb-1" />
                              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-300">
                                Roadmaps
                              </div>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Frontend, Backend, AI</p>
                            </button>

                            <button
                              onClick={() => handleNavClick('projects')}
                              className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-500/50 text-left transition-all cursor-pointer group"
                            >
                              <FolderGit2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mb-1" />
                              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-300">
                                Projects
                              </div>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Real-world code builds</p>
                            </button>

                            <button
                              onClick={() => handleNavClick('career')}
                              className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500/50 text-left transition-all cursor-pointer group"
                            >
                              <Briefcase className="w-4 h-4 text-amber-500 dark:text-amber-400 mb-1" />
                              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-300">
                                Career
                              </div>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Interview preparation</p>
                            </button>

                            <button
                              onClick={() => handleNavClick('dashboard')}
                              className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/50 text-left transition-all cursor-pointer group"
                            >
                              <BarChart3 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 mb-1" />
                              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
                                Dashboard
                              </div>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Live analytics & stats</p>
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Global Quick Search / Command Palette Modal */}
      {searchModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 dark:bg-black/75 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setSearchModalOpen(false)}
        >
          <div 
            className="w-full max-w-2xl bg-white/98 dark:bg-[#0B0F17]/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200 dark:border-indigo-500/30 overflow-hidden relative text-slate-900 dark:text-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 dark:border-slate-800">
              <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across 2,480+ questions, topics, languages... (e.g. closures, recursion, binary search)"
                className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
              />
              <button 
                onClick={() => setSearchModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Language Filter Pills in Search Modal */}
            <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto text-xs">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                Filter:
              </span>
              {CATEGORIES_DATA.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    handleNavClick('practice', cat.name);
                    setSearchModalOpen(false);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-indigo-400 font-semibold text-[11px] shrink-0 cursor-pointer shadow-2xs"
                >
                  {cat.name.replace(' Programming', '')} ({cat.count})
                </button>
              ))}
            </div>

            {/* Search Results List */}
            <div className="max-h-96 overflow-y-auto p-2">
              {searchQuery.trim() === '' ? (
                <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                  <Terminal className="w-8 h-8 text-indigo-500 dark:text-indigo-400 mx-auto mb-2 opacity-60" />
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Search over 2,480+ Curated Practice Questions
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Type any keyword, algorithm name, or language to jump directly into coding.
                  </p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                  <p className="text-sm font-semibold">No questions matching "{searchQuery}"</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Try another keyword or select a language above.</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {searchResults.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => {
                        handleNavClick('practice', q.category);
                        setSearchModalOpen(false);
                      }}
                      className="w-full p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/80 text-left transition-colors flex items-start justify-between gap-3 cursor-pointer group"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                            {q.category}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                            {q.topic}
                          </span>
                          <span className={`text-[10px] font-bold ${
                            q.difficulty === 'Beginner' ? 'text-emerald-600 dark:text-emerald-400' :
                            q.difficulty === 'Intermediate' ? 'text-indigo-600 dark:text-indigo-400' : 'text-purple-600 dark:text-purple-400'
                          }`}>
                            {q.difficulty}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors line-clamp-1">
                          #{q.id}. {q.question}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span>Press <kbd className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-slate-200 dark:border-slate-700">Esc</kbd> to exit</span>
              <span>2,480 questions indexed</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
