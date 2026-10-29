import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  CheckCircle2, 
  Code2, 
  Layers, 
  BarChart3,
  Flame,
  Terminal,
  Database,
  Coffee,
  Binary,
  FileCode,
  Palette,
  Maximize2,
  X,
  Eye,
  Download
} from 'lucide-react';

interface HeroProps {
  onStartLearning: () => void;
  onExploreRoadmaps: () => void;
  onPracticeCoding: () => void;
  onTryAiAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartLearning,
  onExploreRoadmaps,
  onPracticeCoding,
  onTryAiAssistant,
}) => {
  const { user, isAuthenticated, suitrateInfo } = useAuth();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const languageBadges = [
    { name: 'JavaScript', count: '310 Qs', icon: FileCode },
    { name: 'Python', count: '310 Qs', icon: Terminal },
    { name: 'Java', count: '310 Qs', icon: Coffee },
    { name: 'C++', count: '310 Qs', icon: Binary },
    { name: 'C', count: '310 Qs', icon: Code2 },
    { name: 'SQL', count: '310 Qs', icon: Database },
    { name: 'HTML & CSS', count: '310 Qs', icon: Palette },
    { name: 'DSA', count: '310 Qs', icon: Layers },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#070A10] dark:text-white min-h-[660px] lg:min-h-[760px] flex items-center pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        
        {/* Full-bleed Cinematic Photographic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/codefromzero-cinematic-bg.svg"
            alt="Young Indian programmer coding on laptop atop a scenic rocky viewpoint by a lake at golden hour sunset"
            className="w-full h-full object-cover object-right lg:object-center select-none opacity-25 dark:opacity-100 transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />

          {/* Left-side Gradient Overlay: keeps text crisp and readable in both light and dark mode */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 via-40% to-transparent dark:from-[#070A10] dark:via-[#070A10]/90 dark:via-40% dark:to-transparent pointer-events-none" />
          
          {/* Bottom Vignette Overlay to blend seamlessly into the rest of the page */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-50 via-slate-50/70 to-transparent dark:from-[#0B0F17] dark:via-[#0B0F17]/70 dark:to-transparent pointer-events-none" />
          
          {/* Top Vignette Overlay under Navbar */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50/80 to-transparent dark:from-[#070A10]/80 dark:to-transparent pointer-events-none" />
        </div>

        {/* Foreground Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (lg:col-span-7): Heading, Subtitle, Actions, Trust badges */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badges Row: Practice Badge & Background Wallpaper Download */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-700/80 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-bold tracking-wide shadow-xs dark:shadow-lg backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  <span>Over 2,480+ Practice Questions · 300+ in Every Language</span>
                </div>

                <button
                  onClick={() => setLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 hover:bg-amber-100 dark:bg-amber-500/20 dark:hover:bg-amber-500/30 border border-amber-300 dark:border-amber-400/40 text-amber-800 dark:text-amber-300 text-xs font-bold transition-all cursor-pointer shadow-xs dark:shadow-lg backdrop-blur-md hover:scale-105 active:scale-95"
                  title="View and download the 16:9 ultra-realistic cinematic background image"
                >
                  <Download className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Get 16:9 Background Image</span>
                </button>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                {isAuthenticated && user ? (
                  <>
                    Welcome to <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
                      CodeFromZero, {user.name.split(' ')[0]}
                    </span>
                  </>
                ) : (
                  <>
                    Learn to Code <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 dark:from-indigo-400 dark:via-purple-300 dark:to-amber-300 bg-clip-text text-transparent">
                      From Zero to Hired
                    </span>
                  </>
                )}
              </h1>

              {/* Account Suitrate Pill if user is signed in */}
              {isAuthenticated && user && (
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 shadow-md backdrop-blur-md">
                    <BarChart3 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Account Suitrate:</span>
                    <span className={`text-xs font-black px-2 py-0.5 rounded-md border ${suitrateInfo.badgeColor}`}>
                      {suitrateInfo.rate}% • {suitrateInfo.label}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-700/60 text-amber-800 dark:text-amber-300 text-xs font-bold backdrop-blur-md">
                    <Flame className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                    <span>{user.studyStreakDays || 3}-Day Streak</span>
                  </div>
                </div>
              )}

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Master Java, Python, JavaScript, C++, C, SQL, HTML/CSS, and DSA with structured roadmaps, full beginner tutorials, real-world portfolio projects, and an interactive coding IDE with 300+ challenges per language.
              </p>

              {/* Language Quick Pills Bar */}
              <div className="pt-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  300+ Practice Coding Challenges In:
                </span>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5">
                  {languageBadges.map((lang) => {
                    const Icon = lang.icon;
                    return (
                      <button
                        key={lang.name}
                        onClick={onPracticeCoding}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all cursor-pointer shadow-2xs backdrop-blur-sm"
                      >
                        <Icon className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                        <span>{lang.name}</span>
                        <span className="text-[10px] font-black text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-1.5 py-0.2 rounded border border-indigo-200 dark:border-indigo-800/60">
                          {lang.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={onPracticeCoding}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <span>Practice 2,480+ Questions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onStartLearning}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-base border border-slate-200 dark:border-slate-700 shadow-md transition-all duration-200 cursor-pointer active:scale-95 backdrop-blur-sm"
                >
                  <span>Start Tutorials</span>
                </button>

                <button
                  onClick={onExploreRoadmaps}
                  className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-700/70 transition-colors cursor-pointer backdrop-blur-sm shadow-xs"
                >
                  <Compass className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  <span>Roadmaps</span>
                </button>

                <button
                  onClick={onTryAiAssistant}
                  className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-semibold text-sm border border-purple-200 dark:border-purple-800/70 transition-colors cursor-pointer backdrop-blur-sm shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                  <span>AI Mentor</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-3 text-left">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white">300+ Qs Each</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">8 major languages</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white">Hands-On Projects</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">8 real applications</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white">Interactive IDE</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Test runner & solutions</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (lg:col-span-5): CodeFromZero Philosophy Card & Viewport Callout */}
            <div className="lg:col-span-5 relative flex flex-col justify-end space-y-4 pt-12 lg:pt-0">
              
              {/* CodeFromZero Philosophy Floating Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white/95 dark:bg-slate-950/70 backdrop-blur-xl border border-slate-200 dark:border-white/15 p-6 shadow-xl dark:shadow-2xl transition-all duration-300 hover:border-indigo-400/40 text-slate-900 dark:text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-300/90 font-mono">
                      CodeFromZero Philosophy
                    </span>
                  </div>
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-[11px] font-bold text-slate-800 dark:text-white border border-slate-200 dark:border-white/15 transition-all cursor-pointer"
                    title="View Full 16:9 Cinematic Landscape Wallpaper"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-500 dark:text-amber-300" />
                    <span>View 16:9 Scene</span>
                  </button>
                </div>

                <blockquote className="text-base sm:text-lg font-bold text-slate-800 dark:text-white leading-relaxed italic mb-4">
                  "Start from zero, learn step by step, and build something extraordinary."
                </blockquote>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center font-black text-white text-xs">
                      CFZ
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 dark:text-white">Sunset Mountain Studio</span>
                      <span className="block text-[10px] text-slate-500 dark:text-slate-400">Calm & Focused Coding</span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold">
                    300+ Practice / Track
                  </span>
                </div>
              </div>

              {/* Sub-card: Quick Java & Practice Preview */}
              <div className="rounded-2xl bg-white/95 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-white/10 p-4 flex items-center justify-between text-xs shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/40 text-amber-700 dark:text-amber-300 flex items-center justify-center font-black text-sm">
                    <Coffee className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 dark:text-white">Full Java SE Masterclass</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">32 Comprehensive Modules & JVM IDE</span>
                  </div>
                </div>

                <button
                  onClick={onStartLearning}
                  className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Explore Java →
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Fullscreen 16:9 Cinematic Wallpaper Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-6xl w-full bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
            
            {/* Modal Header Bar */}
            <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white">
                    CodeFromZero Cinematic Background (16:9 Ultra HD)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Peaceful programmer working on a laptop at a rocky mountain overlook at golden hour sunset
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/assets/images/codefromzero-cinematic-bg.svg"
                  download="codefromzero-cinematic-bg.svg"
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 border border-slate-700"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download SVG</span>
                </a>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Pristine 16:9 Image Display Without Text */}
            <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
              <img
                src="/assets/images/codefromzero-cinematic-bg.svg"
                alt="CodeFromZero 16:9 Cinematic Landscape - Peaceful Indian programmer at sunset over mountain lake"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer Caption */}
            <div className="p-4 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="font-mono text-amber-400">
                Resolution: 1920 × 1080 (16:9 Scalable Vector Graphics) · 4K Ready
              </span>
              <span className="italic text-slate-300">
                "Start from zero, learn step by step, and build something extraordinary."
              </span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

