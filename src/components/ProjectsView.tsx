import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectItem } from '../types';
import { 
  FolderGit2, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  Compass, 
  ExternalLink, 
  BookOpen, 
  Sparkles,
  X,
  Clock
} from 'lucide-react';

interface ProjectsViewProps {
  onNavigateTab: (tab: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onNavigateTab }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS_DATA.filter(p => {
    if (selectedDifficulty !== 'ALL' && p.difficulty !== selectedDifficulty) return false;
    return true;
  });

  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <FolderGit2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Practical Project Library</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Hands-On Coding Projects
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Build real-world software applications step by step to reinforce learning, demonstrate competence to recruiters, and build an impressive portfolio.
          </p>
        </div>

        {/* Difficulty Filter Pills */}
        <div className="flex justify-center gap-2">
          {['ALL', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-5 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedDifficulty === diff
                  ? 'bg-slate-900 dark:bg-indigo-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {diff === 'ALL' ? 'All 8 Projects' : diff}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                    proj.difficulty === 'Beginner' ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300' :
                    proj.difficulty === 'Intermediate' ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300' :
                    'bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300'
                  }`}>
                    {proj.difficulty}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                {/* Tech Badges */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">Required Stack:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.requiredTech.map((tech) => (
                      <span key={tech} className="text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-0.5 rounded-lg border border-transparent dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills Learned */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">Skills Learned:</span>
                  <div className="flex flex-wrap gap-1">
                    {proj.skillsLearned.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setActiveProjectModal(proj)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>View Step-by-Step Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Project Guidance Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-800/40">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                      activeProjectModal.difficulty === 'Beginner' ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300' :
                      activeProjectModal.difficulty === 'Intermediate' ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300' :
                      'bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300'
                    }`}>
                      {activeProjectModal.difficulty}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">{activeProjectModal.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{activeProjectModal.title}</h3>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">Overview</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{activeProjectModal.description}</p>
                </div>

                {/* Objectives */}
                <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 space-y-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-indigo-900 dark:text-indigo-300">
                    Project Objectives
                  </h4>
                  <div className="space-y-1.5">
                    {activeProjectModal.objectives.map((obj, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-indigo-950 dark:text-indigo-200 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step-by-Step Implementation */}
                <div className="space-y-4">
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                    Step-by-Step Implementation Guide
                  </h4>
                  
                  <div className="space-y-4">
                    {activeProjectModal.steps.map((st) => (
                      <div key={st.stepNumber} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                            {st.stepNumber}
                          </span>
                          <h5 className="font-bold text-sm text-slate-900 dark:text-white">{st.title}</h5>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-8">{st.detail}</p>
                        
                        {st.codeSnippet && (
                          <div className="pl-8 pt-1">
                            <pre className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
                              <code>{st.codeSnippet}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Links */}
                <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    <span>Explore relevant roadmaps to build this project:</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => { setActiveProjectModal(null); onNavigateTab('tutorials'); }}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer"
                    >
                      Tutorials
                    </button>
                    <button
                      onClick={() => { setActiveProjectModal(null); onNavigateTab('roadmaps'); }}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold cursor-pointer"
                    >
                      Roadmaps
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
