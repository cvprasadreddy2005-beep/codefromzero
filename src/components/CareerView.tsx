import React, { useState } from 'react';
import { 
  FUTURE_JOB_OPPORTUNITIES, 
  CAREER_PILLARS, 
  NINETY_DAY_PLAN, 
  INTERVIEW_QUESTIONS, 
  QUESTIONS_TO_ASK_INTERVIEWERS 
} from '../data/careerData';
import { 
  Briefcase, 
  Calendar, 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  MessageSquare, 
  Sparkles, 
  Compass, 
  FolderGit2, 
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface CareerViewProps {
  onNavigateTab: (tab: string) => void;
}

export const CareerView: React.FC<CareerViewProps> = ({ onNavigateTab }) => {
  const [activeQuestionId, setActiveQuestionId] = useState<string>('q1');
  const [expandedInterviewQ, setExpandedInterviewQ] = useState<string | null>('q1');

  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Career Acceleration Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Your Journey to Becoming a Developer
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Learn concepts, practice your skills, build projects, and prepare for your future career.
          </p>
        </div>

        {/* Section A: Future Job Opportunities */}
        <section className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              A. Future Job Opportunities
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1">
              Explore high-growth technical and data-driven fields, required skillsets, and typical qualifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FUTURE_JOB_OPPORTUNITIES.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                      {item.field}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full">
                      {item.growthOutlook.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.roles.slice(0, 2).join(' & ')}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">Core Skills:</span>
                    <div className="flex flex-wrap gap-1">
                      {item.coreSkills.map(skill => (
                        <span key={skill} className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md border border-transparent dark:border-slate-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 space-y-1 border-t border-slate-100 dark:border-slate-800">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 block">Typical Training & Path:</span>
                    <p className="leading-snug">{item.typicalEducation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 dark:text-slate-500 text-center italic">
            *Note: Job opportunities, credential requirements, and compensation vary substantially by geographical region, local labor market, and employer standards.
          </p>
        </section>

        {/* Section B: Choosing a Career */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              B. Choosing the Right Career Path
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1">
              Four fundamental pillars to align your natural curiosity with market demand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAREER_PILLARS.map((pillar, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 space-y-2">
                <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center">
                  0{i + 1}
                </span>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">{pillar.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section C: 90-Day Career Plan */}
        <section className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2 justify-center md:justify-start">
              <Calendar className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <span>C. The 90-Day Developer Career Plan</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1">
              A structured, sprint-based approach from initial exploration to receiving interview offers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {NINETY_DAY_PLAN.map((phase, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
                    {phase.phase}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-3">{phase.title}</h3>
                  <div className="space-y-2">
                    {phase.goals.map((goal, gIdx) => (
                      <div key={gIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section D: Interview Preparation & STAR Method */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">
                Interview Mastery
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                D. Technical & Behavioral Interview Preparation
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1">
                Master the STAR behavioral framework and study model responses to classic technical questions.
              </p>
            </div>

            <button
              onClick={() => onNavigateTab('ai-assistant')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors cursor-pointer shrink-0 shadow-md shadow-purple-600/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch AI Interview Coach</span>
            </button>
          </div>

          {/* STAR Framework Explainer Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-100/80 dark:border-indigo-900/60 space-y-4">
            <h3 className="text-sm font-extrabold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider">
              The STAR Method Framework
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
              When asked about a past challenge, bug, or project, structured storytelling impresses hiring managers. Use the STAR formula to keep your answers concise and compelling:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/50">
                <span className="font-black text-indigo-600 dark:text-indigo-400 block mb-1">S — Situation</span>
                <span className="text-slate-600 dark:text-slate-300">Set the scene and provide necessary context for the project or bug.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/50">
                <span className="font-black text-indigo-600 dark:text-indigo-400 block mb-1">T — Task</span>
                <span className="text-slate-600 dark:text-slate-300">Describe your specific responsibility or the exact challenge that occurred.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/50">
                <span className="font-black text-indigo-600 dark:text-indigo-400 block mb-1">A — Action</span>
                <span className="text-slate-600 dark:text-slate-300">Explain the precise steps and code decisions YOU took to overcome it.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/50">
                <span className="font-black text-indigo-600 dark:text-indigo-400 block mb-1">R — Result</span>
                <span className="text-slate-600 dark:text-slate-300">Quantify the successful outcome and share what you learned from the experience.</span>
              </div>
            </div>
          </div>

          {/* Top 7 Questions Accordion */}
          <div className="space-y-4 pt-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Top 7 Standard Developer Interview Questions
            </h3>

            <div className="space-y-3">
              {INTERVIEW_QUESTIONS.map((q) => {
                const isExpanded = expandedInterviewQ === q.id;
                return (
                  <div
                    key={q.id}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all bg-white dark:bg-slate-900"
                  >
                    <button
                      onClick={() => setExpandedInterviewQ(isExpanded ? null : q.id)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0">
                          {q.id.replace('q', '')}
                        </span>
                        <div>
                          <span className="font-bold text-sm text-slate-900 dark:text-white block">{q.question}</span>
                          <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">{q.category}</span>
                        </div>
                      </div>

                      <div className="p-1 text-slate-400">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800 space-y-3 text-xs">
                        <div className="mt-3">
                          <span className="font-bold text-indigo-900 dark:text-indigo-300 block uppercase text-[10px] tracking-wider mb-1">
                            Strategy & Formula:
                          </span>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{q.goodAnswer}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700">
                          <span className="font-bold text-slate-900 dark:text-white block uppercase text-[10px] tracking-wider mb-1">
                            Model Candidate Response:
                          </span>
                          <p className="text-slate-800 dark:text-slate-200 italic leading-relaxed">{q.sampleAnswer}</p>
                        </div>

                        <div className="text-[11px] text-amber-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/60 p-2.5 rounded-lg border border-amber-200 dark:border-amber-900/60">
                          <span className="font-bold">Pro Tip: </span>{q.tips}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Smart Questions to Ask Interviewers */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Smart Questions You Should Ask Interviewers</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              At the end of an interview, asking thoughtful questions demonstrates passion, curiosity, and professionalism:
            </p>
            <div className="space-y-2 pt-1 text-xs">
              {QUESTIONS_TO_ASK_INTERVIEWERS.map((askQ, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-800 dark:text-slate-200">
                  <span className="text-indigo-600 dark:text-indigo-400 font-black">•</span>
                  <span>"{askQ}"</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links to Roadmaps and Projects */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
              Ready to start your 90-day journey? Choose a roadmap and start building.
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => onNavigateTab('roadmaps')}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                Explore Roadmaps
              </button>
              <button
                onClick={() => onNavigateTab('projects')}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors cursor-pointer"
              >
                Browse 8 Projects
              </button>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};
