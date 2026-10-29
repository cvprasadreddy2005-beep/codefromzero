import React, { useState, useMemo, useEffect } from 'react';
import { 
  Flame, 
  Calendar, 
  Clock, 
  Zap, 
  CheckCircle2, 
  Code2, 
  ArrowRight, 
  Sparkles, 
  RotateCw, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  Terminal, 
  FileCode, 
  Coffee, 
  Binary, 
  Database, 
  Palette,
  Check,
  Play
} from 'lucide-react';
import { QUESTIONS_DATA } from '../data/questionsData';
import { Question } from '../types';
import { useAuth } from '../context/AuthContext';
import { InteractiveCodeEditor } from './InteractiveCodeEditor';

interface DailyCodingChallengeProps {
  onNavigateTab: (tab: string, param?: string) => void;
}

// Simple deterministic string hash for daily seed
function hashDateString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export const DailyCodingChallenge: React.FC<DailyCodingChallengeProps> = ({ onNavigateTab }) => {
  const { user, completeDailyChallenge } = useAuth();

  // Current date string YYYY-MM-DD
  const todayDate = useMemo(() => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  }, []);

  const formattedDate = useMemo(() => {
    return new Date().toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }, []);

  // Filter viable coding/algorithm/debugging questions
  const codingQuestions = useMemo(() => {
    return QUESTIONS_DATA.filter(q => 
      q.type === 'Coding' || 
      q.type === 'Algorithm' || 
      q.type === 'Debugging' || 
      Boolean(q.code && q.code.length > 10)
    );
  }, []);

  // Manual roll offset if user wants another challenge
  const [randomOffset, setRandomOffset] = useState<number>(0);
  const [editorExpanded, setEditorExpanded] = useState<boolean>(false);
  const [celebrationStreak, setCelebrationStreak] = useState<number | null>(null);

  // Time remaining today countdown
  const [timeLeft, setTimeLeft] = useState<string>('');
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const diffMs = Math.max(0, endOfDay.getTime() - now.getTime());
      
      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diffMs % (1000 * 60)) / 1000);
      
      setTimeLeft(`${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Compute daily question
  const dailyQuestion: Question = useMemo(() => {
    if (codingQuestions.length === 0) return QUESTIONS_DATA[0];
    const seed = hashDateString(todayDate) + randomOffset;
    const index = seed % codingQuestions.length;
    return codingQuestions[index];
  }, [codingQuestions, todayDate, randomOffset]);

  // Check if today's daily challenge is completed
  const isCompletedToday = useMemo(() => {
    const completedDates = user?.completedDailyChallengeDates || [];
    const isDateRecorded = user?.lastDailyChallengeDate === todayDate || completedDates.includes(todayDate);
    const isQuestionMarked = Boolean(dailyQuestion && user?.completedQuestionIds.includes(dailyQuestion.id));
    return isDateRecorded || isQuestionMarked;
  }, [user, todayDate, dailyQuestion]);

  // Handle challenge completion
  const handleSolvedChallenge = () => {
    if (!dailyQuestion) return;
    const result = completeDailyChallenge(dailyQuestion.id);
    setCelebrationStreak(result.newStreak);
  };

  const currentStreak = user?.studyStreakDays || 1;

  // Language icon mapping
  const languageIcon = useMemo(() => {
    const cat = dailyQuestion.category.toLowerCase();
    if (cat.includes('javascript')) return FileCode;
    if (cat.includes('python')) return Terminal;
    if (cat.includes('java')) return Coffee;
    if (cat.includes('c++')) return Binary;
    if (cat.includes('c programming')) return Code2;
    if (cat.includes('sql')) return Database;
    if (cat.includes('html')) return Palette;
    return Code2;
  }, [dailyQuestion.category]);

  const LangIcon = languageIcon;

  // 7-day streak status (Mon-Sun of current week)
  const weekDays = useMemo(() => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday
    const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
    const days = [];
    const completedDates = user?.completedDailyChallengeDates || [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + mondayOffset + i);
      const dStr = d.toISOString().split('T')[0];
      const isPastOrToday = d <= now || dStr === todayDate;
      const isToday = dStr === todayDate;
      const isDone = completedDates.includes(dStr) || (isToday && isCompletedToday);

      days.push({
        name: d.toLocaleDateString(undefined, { weekday: 'narrow' }),
        dateStr: dStr,
        isToday,
        isPastOrToday,
        isDone
      });
    }
    return days;
  }, [user, todayDate, isCompletedToday]);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white via-slate-50/80 to-white dark:from-slate-900/90 dark:via-[#0c1017] dark:to-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all duration-200">
      
      {/* Subtle Premium Ambient Accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left: Challenge Title & Date */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-[11px] font-bold tracking-tight">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
              <span>Daily Coding Challenge</span>
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {formattedDate}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <span>{dailyQuestion.question}</span>
          </h3>

          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 pt-0.5">
            <span className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
              <LangIcon className="w-3.5 h-3.5 text-indigo-500" />
              <span>{dailyQuestion.category}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{dailyQuestion.topic}</span>
            <span aria-hidden="true">·</span>
            <span className={`font-bold px-2 py-0.2 rounded-md ${
              dailyQuestion.difficulty === 'Beginner' ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60' :
              dailyQuestion.difficulty === 'Intermediate' ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60' :
              'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60'
            }`}>
              {dailyQuestion.difficulty}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-amber-600 dark:text-amber-400 font-bold">+25 XP Streak Reward</span>
          </div>
        </div>

        {/* Right: Streak Flame Counter & Time Left */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Flame Streak Widget */}
          <div className="flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 shrink-0">
              <Flame className="w-5 h-5 fill-white stroke-none" />
            </div>
            <div>
              <div className="flex items-center gap-1 font-mono font-black text-amber-900 dark:text-amber-200 text-sm">
                <span>{currentStreak} Day{currentStreak === 1 ? '' : 's'}</span>
                {isCompletedToday && <span className="text-emerald-600 text-xs">✓ Active</span>}
              </div>
              <div className="text-[10px] font-semibold text-amber-700/80 dark:text-amber-400">
                {isCompletedToday ? 'Streak Protected Today!' : 'Solve today to maintain'}
              </div>
            </div>
          </div>

          {/* Time Remaining Widget */}
          <div className="hidden sm:flex flex-col items-end px-3 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 text-right">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              <Clock className="w-3 h-3 text-indigo-500" />
              <span>Resets In</span>
            </div>
            <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 tabular-nums">
              {timeLeft || '23h 59m'}
            </span>
          </div>

          {/* Roll Another Challenge button */}
          <button
            onClick={() => setRandomOffset(prev => prev + 1)}
            className="p-2 rounded-xl border border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
            title="Roll Another Challenge for Today"
            aria-label="Roll Another Challenge"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Middle: Weekly Calendar Dots Strip */}
      <div className="relative z-10 px-5 sm:px-6 py-2.5 bg-slate-50/50 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-700 dark:text-slate-300">This Week's Momentum:</span>
        </div>

        {/* 7 Day Indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {weekDays.map((d, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-all ${
                d.isToday 
                  ? 'bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700 font-bold text-amber-900 dark:text-amber-200 shadow-xs' 
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <span className="text-[10px] uppercase font-bold">{d.name}</span>
              <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] ${
                d.isDone 
                  ? 'bg-emerald-500 text-white font-bold' 
                  : d.isToday 
                  ? 'bg-amber-500 text-white animate-pulse font-bold' 
                  : 'bg-slate-200 dark:bg-slate-700'
              }`}>
                {d.isDone ? '✓' : d.isToday ? '•' : ''}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Celebration Banner when just solved */}
      {celebrationStreak && (
        <div className="relative z-10 p-4 m-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-emerald-500/15 border border-amber-500/30 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black shadow-md shadow-amber-500/30 shrink-0">
              <Flame className="w-6 h-6 fill-white stroke-none animate-bounce" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 dark:text-white">
                Daily Challenge Completed! Streak Increased to {celebrationStreak} Days! 🔥
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                You've earned +25 XP and strengthened your algorithmic consistency for today.
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-xl bg-amber-500 text-white text-xs font-bold shrink-0 shadow-sm">
            Streak Saved!
          </span>
        </div>
      )}

      {/* Problem Examples Preview & Quick Actions */}
      <div className="relative z-10 p-5 sm:p-6 space-y-4">
        
        {/* Test Cases preview pills */}
        {dailyQuestion.examples && dailyQuestion.examples.length > 0 && (
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Example Test Vector
            </span>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 font-mono text-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-bold">Input:</span>
                <span className="text-slate-800 dark:text-slate-200">{dailyQuestion.examples[0].input}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-bold">Expected Output:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">{dailyQuestion.examples[0].output}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons: Expand Code Editor or Open Full Page */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setEditorExpanded(!editorExpanded)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition-all cursor-pointer active:scale-95"
            >
              <Code2 className="w-4 h-4" />
              <span>{editorExpanded ? 'Close In-Browser Editor' : 'Solve Challenge Directly Here'}</span>
              {editorExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => onNavigateTab('practice', String(dailyQuestion.id))}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition-colors cursor-pointer"
            >
              <span>Open in Full Practice IDE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {isCompletedToday ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Completed for Today</span>
            </span>
          ) : (
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Not solved yet today
            </span>
          )}
        </div>

        {/* Embedded Interactive Code Editor Drawer */}
        {editorExpanded && (
          <div className="pt-4 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="p-1 rounded-3xl bg-slate-900 border border-slate-800">
              <InteractiveCodeEditor
                question={dailyQuestion}
                starterCode={dailyQuestion.code}
                solutionCode={dailyQuestion.solution}
                isCompleted={isCompletedToday}
                onSolved={handleSolvedChallenge}
              />
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
