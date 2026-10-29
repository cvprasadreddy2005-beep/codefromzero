import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Code2, Compass, BookOpen, CheckSquare, FolderGit2, Briefcase, Sparkles, Heart, Sun, Moon, Home } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <footer className="bg-slate-100/80 dark:bg-[#060911] text-slate-600 dark:text-slate-400 border-t border-slate-200/90 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Code From Zero</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Start with the basics, master programming step by step, build real-world projects, and prepare for your future career. Dedicated to students, self-learners, and aspiring software engineers.
            </p>

            {/* Quick Theme Mode Toggle in Footer */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-colors cursor-pointer shadow-2xs"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Dark Theme</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-slate-700" />
                    <span>Light Theme</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Code From Zero. All rights reserved.
            </div>
          </div>

          {/* Col 1: Learning */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Curriculum</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateTab('roadmaps')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  Frontend Developer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('roadmaps')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  Backend Developer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('roadmaps')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  Full-Stack Engineer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('roadmaps')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  AI & Machine Learning
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('roadmaps')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  Cybersecurity Specialist
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Practice & Tutorials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Practice & Learn</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateTab('practice')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  2,480+ Practice Questions (300+ Each)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('tutorials')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  HTML & CSS Tutorials
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('tutorials')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  JavaScript & Python
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('tutorials')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  SQL & Databases
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('projects')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  8 Hands-on Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Career & AI */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Career & Tools</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateTab('career')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  90-Day Career Plan
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('career')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  STAR Interview Prep
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('ai-assistant')} className="hover:text-purple-600 dark:hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-purple-600 dark:text-purple-400 font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>Code From Zero AI</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('ai-assistant')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  AI Code Debugger
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('ai-assistant')} className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer">
                  AI Interview Coach
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Built with passion by <strong className="text-slate-800 dark:text-slate-300 font-bold">C V Prasad Reddy</strong> (Kadapa-516003) for learners starting from zero.</span>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button 
              onClick={() => {
                onNavigateTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-bold transition-all cursor-pointer border border-indigo-200/60 dark:border-indigo-800/60 shadow-2xs"
            >
              <Home className="w-3.5 h-3.5 shrink-0" />
              <span>Home</span>
            </button>
            <button onClick={() => onNavigateTab('about')} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-bold cursor-pointer">About Creator</button>
            <button onClick={() => onNavigateTab('practice')} className="hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer">Question Bank</button>
            <button onClick={() => onNavigateTab('roadmaps')} className="hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer">Roadmaps</button>
            <button onClick={() => onNavigateTab('career')} className="hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer">Careers</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
