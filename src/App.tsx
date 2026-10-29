import React, { useState, Suspense, lazy } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeSections } from './components/HomeSections';
import { Footer } from './components/Footer';
import { Loader2 } from 'lucide-react';

// Lazy-load heavier views to keep the initial page bundle lightweight and prevent memory pressure
const RoadmapsView = lazy(() => import('./components/RoadmapsView').then(m => ({ default: m.RoadmapsView })));
const TutorialsView = lazy(() => import('./components/TutorialsView').then(m => ({ default: m.TutorialsView })));
const PracticeView = lazy(() => import('./components/PracticeView').then(m => ({ default: m.PracticeView })));
const ProjectsView = lazy(() => import('./components/ProjectsView').then(m => ({ default: m.ProjectsView })));
const CareerView = lazy(() => import('./components/CareerView').then(m => ({ default: m.CareerView })));
const AiAssistantView = lazy(() => import('./components/AiAssistantView').then(m => ({ default: m.AiAssistantView })));
const DashboardView = lazy(() => import('./components/DashboardView').then(m => ({ default: m.DashboardView })));
const AuthModal = lazy(() => import('./components/AuthModal').then(m => ({ default: m.AuthModal })));
const ProfileModal = lazy(() => import('./components/ProfileModal').then(m => ({ default: m.ProfileModal })));
const AboutModal = lazy(() => import('./components/AboutModal').then(m => ({ default: m.AboutModal })));

function ViewLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center space-y-3">
      <Loader2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-spin" />
      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Loading module...</span>
    </div>
  );
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [practiceCategoryParam, setPracticeCategoryParam] = useState<string | undefined>(undefined);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup'>('signin');
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [bgIntensity, setBgIntensity] = useState<'subtle' | 'vibrant' | 'cinema'>('vibrant');

  const [tutorialTrackParam, setTutorialTrackParam] = useState<string | undefined>(undefined);

  const handleNavigateTab = (tab: string, param?: string) => {
    if (tab === 'profile') {
      setProfileModalOpen(true);
      return;
    }
    if (tab === 'about') {
      setAboutModalOpen(true);
      return;
    }
    if (tab === 'practice' && param) {
      setPracticeCategoryParam(param);
    }
    if (tab === 'tutorials' && param) {
      setTutorialTrackParam(param);
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAuth = (mode: 'signin' | 'signup' = 'signin') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
        <div className="relative min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-slate-50 text-slate-900 dark:bg-[#070A10] dark:text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-200">
          
          {/* First Page Background Image Applied Across the Website */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
            <img
              src="/assets/images/codefromzero-cinematic-bg.svg"
              alt="CodeFromZero Cinematic Background"
              className={`w-full h-full object-cover object-right lg:object-center transition-opacity duration-700 ${
                bgIntensity === 'subtle' ? 'opacity-10 dark:opacity-30' :
                bgIntensity === 'vibrant' ? 'opacity-25 dark:opacity-60' :
                'opacity-40 dark:opacity-85'
              }`}
              referrerPolicy="no-referrer"
            />
            {/* Cinematic background gradients: light tint in light mode, dark tint in dark mode */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 via-50% to-slate-50/40 dark:from-[#070A10]/95 dark:via-[#070A10]/85 dark:via-50% dark:to-[#070A10]/35 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-transparent to-slate-50/95 dark:from-[#070A10]/75 dark:via-transparent dark:to-[#070A10]/90 pointer-events-none" />
          </div>

          <div className="relative z-10 flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">

            {/* Top Sticky Navigation */}
            <Navbar
              currentTab={currentTab}
              setCurrentTab={handleNavigateTab}
              openAuthModal={handleOpenAuth}
              openProfileModal={() => setProfileModalOpen(true)}
              openAboutModal={() => setAboutModalOpen(true)}
            />

            {/* Main Content Router */}
            <main className="flex-1">
              {currentTab === 'home' && (
                <div>
                  <Hero
                    onStartLearning={() => handleNavigateTab('tutorials')}
                    onExploreRoadmaps={() => handleNavigateTab('roadmaps')}
                    onPracticeCoding={() => handleNavigateTab('practice')}
                    onTryAiAssistant={() => handleNavigateTab('ai-assistant')}
                  />
                  <HomeSections
                    onNavigateTab={handleNavigateTab}
                    onOpenAuth={handleOpenAuth}
                    onOpenProfile={() => setProfileModalOpen(true)}
                  />
                </div>
              )}

            <Suspense fallback={<ViewLoadingFallback />}>
              {currentTab === 'roadmaps' && <RoadmapsView />}

              {currentTab === 'tutorials' && (
                <TutorialsView
                  onNavigateTab={handleNavigateTab}
                  initialTutorialId={tutorialTrackParam}
                />
              )}

              {currentTab === 'practice' && (
                <PracticeView initialCategory={practiceCategoryParam} />
              )}

              {currentTab === 'projects' && (
                <ProjectsView onNavigateTab={handleNavigateTab} />
              )}

              {currentTab === 'career' && (
                <CareerView onNavigateTab={handleNavigateTab} />
              )}

              {currentTab === 'dashboard' && (
                <DashboardView onNavigateTab={handleNavigateTab} />
              )}

              {currentTab === 'ai-assistant' && <AiAssistantView />}
            </Suspense>
          </main>

          {/* Global Footer */}
          <Footer onNavigateTab={handleNavigateTab} />

          <Suspense fallback={null}>
            {/* Authentication Modal */}
            {authModalOpen && (
              <AuthModal
                isOpen={authModalOpen}
                onClose={() => setAuthModalOpen(false)}
                initialMode={authModalMode}
                onOpenProfile={() => setProfileModalOpen(true)}
              />
            )}

            {/* User Profile & Progress Modal */}
            {profileModalOpen && (
              <ProfileModal
                isOpen={profileModalOpen}
                onClose={() => setProfileModalOpen(false)}
                onNavigateTab={handleNavigateTab}
              />
            )}

            {/* About Creator & Platform Modal */}
            {aboutModalOpen && (
              <AboutModal
                isOpen={aboutModalOpen}
                onClose={() => setAboutModalOpen(false)}
                onNavigateTab={handleNavigateTab}
              />
            )}
          </Suspense>

          </div>
        </div>
      </AuthProvider>
    </ThemeProvider>
    </ErrorBoundary>
  );
}
