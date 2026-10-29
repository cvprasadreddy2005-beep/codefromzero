import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Sparkles, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  BookOpen, 
  CheckSquare, 
  BarChart3, 
  Zap,
  UserPlus
} from 'lucide-react';

interface WelcomeBannerProps {
  onNavigateTab: (tab: string) => void;
  onOpenAuth: (mode?: 'signin' | 'signup') => void;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ onNavigateTab, onOpenAuth }) => {
  const { user, isAuthenticated, suitrateInfo } = useAuth();
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if previously dismissed in this browser session
  useEffect(() => {
    const dismissed = sessionStorage.getItem('cfz_welcome_banner_dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('cfz_welcome_banner_dismissed', 'true');
  };

  const handleReopen = () => {
    setIsVisible(true);
    setIsDismissed(false);
    sessionStorage.removeItem('cfz_welcome_banner_dismissed');
  };

  if (!isVisible) {
    return (
      <aside aria-label="Welcome announcement" className="bg-slate-900/95 backdrop-blur-md text-white text-xs py-1.5 px-4 border-b border-indigo-900/50 transition-all z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-indigo-100 text-xs">
              Welcome to Code From Zero
            </span>
            {isAuthenticated && user && (
              <span className="hidden sm:inline text-indigo-300">
                — {user.name} (Suitrate: {suitrateInfo.rate}%)
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReopen}
              className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px] shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Show full welcome banner"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Show Welcome Banner</span>
            </button>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white shadow-lg border-b border-indigo-500/40 animate-in fade-in slide-in-from-top-4 duration-300">
      {/* Background visual accents */}
      <div className="absolute top-0 right-1/4 w-80 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-60 h-32 bg-purple-500/20 rounded-full blur-xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Left: Greeting and Highlights */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-inner mt-0.5">
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                  Welcome to CodeFromZero! 👋
                </span>
                
                {isAuthenticated && user ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold backdrop-blur-sm">
                    <span>{user.name}</span>
                    <span>•</span>
                    <span className="text-emerald-300">Suitrate: {suitrateInfo.rate}% ({suitrateInfo.label})</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-400/20 border border-emerald-300/30 text-emerald-200 text-[11px] font-bold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                    <span>Free Beginner Coding Platform</span>
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-indigo-100 max-w-3xl leading-relaxed">
                {isAuthenticated && user ? (
                  <>
                    Great to have you back! Your account performance is tracked with your live <strong>Account Suitrate ({suitrateInfo.rate}%)</strong>. Practice over 2,480+ questions (300+ per language), finish tutorials, and check your performance dashboard to reach 100% job-readiness.
                  </>
                ) : (
                  <>
                    Your complete developer ecosystem: structured career roadmaps, 2,480+ practice challenges (300+ in each programming language) with instant test runners, curated tutorials, and AI mentorship.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Right: Quick Action Buttons & Dismiss */}
          <div className="flex items-center gap-2 sm:gap-3 self-end lg:self-center shrink-0">
            {isAuthenticated ? (
              <button
                onClick={() => onNavigateTab('dashboard')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer active:scale-95"
              >
                <BarChart3 className="w-4 h-4 text-indigo-600" />
                <span>View Dashboard</span>
              </button>
            ) : (
              <button
                onClick={() => onOpenAuth('signup')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer active:scale-95"
              >
                <UserPlus className="w-4 h-4 text-indigo-600" />
                <span>Create Free Account</span>
              </button>
            )}

            <button
              onClick={() => onNavigateTab('practice')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              <CheckSquare className="w-4 h-4" />
              <span>Practice (2,480+)</span>
            </button>

            {/* Explicit Remove Banner Button */}
            <button
              onClick={handleDismiss}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs transition-all cursor-pointer shadow-2xs active:scale-95"
              title="Remove welcome banner"
              aria-label="Remove welcome banner"
            >
              <X className="w-3.5 h-3.5 text-white" />
              <span>Remove Banner</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
