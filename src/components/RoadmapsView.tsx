import React, { useState } from 'react';
import { ROADMAPS_DATA } from '../data/roadmapsData';
import { Roadmap, RoadmapTopic } from '../types';
import { useAuth } from '../context/AuthContext';
import { 
  Compass, 
  Clock, 
  CheckCircle2, 
  Bookmark, 
  Award, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  FolderGit2, 
  Briefcase,
  Share2
} from 'lucide-react';

export const RoadmapsView: React.FC = () => {
  const { user, toggleCompleteRoadmapTopic, toggleSaveRoadmap } = useAuth();
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string>('frontend-developer');
  const [expandedMonth, setExpandedMonth] = useState<number | null>(1);

  const activeRoadmap = ROADMAPS_DATA.find(r => r.id === selectedRoadmapId) || ROADMAPS_DATA[0];

  // Calculate completed topics in this roadmap
  const allTopicIds = activeRoadmap.months.flatMap(m => m.topics.map(t => t.id));
  const completedTopicCount = allTopicIds.filter(id => user?.completedRoadmapTopics.includes(id)).length;
  const progressPercent = Math.round((completedTopicCount / (allTopicIds.length || 1)) * 100);

  // Find next recommended topic
  const nextTopicId = allTopicIds.find(id => !user?.completedRoadmapTopics.includes(id));
  const nextTopic = activeRoadmap.months
    .flatMap(m => m.topics)
    .find(t => t.id === nextTopicId);

  const isSaved = Boolean(user?.savedRoadmapIds.includes(activeRoadmap.id));

  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Structured Developer Curriculums</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Developer Learning Roadmaps
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Step-by-step month-by-month learning paths designed to guide complete beginners to professional software engineering competence.
          </p>
        </div>

        {/* Roadmap Selection Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {ROADMAPS_DATA.map((rm) => {
            const isSelected = rm.id === selectedRoadmapId;
            return (
              <button
                key={rm.id}
                onClick={() => {
                  setSelectedRoadmapId(rm.id);
                  setExpandedMonth(1);
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {rm.title}
              </button>
            );
          })}
        </div>

        {/* Active Roadmap Hero Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                  {activeRoadmap.category}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {activeRoadmap.difficulty} Level
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeRoadmap.estimatedDuration}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {activeRoadmap.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm max-w-2xl leading-relaxed">
                {activeRoadmap.careerDescription}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleSaveRoadmap(activeRoadmap.id)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                  isSaved
                    ? 'bg-indigo-50 dark:bg-indigo-950/80 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300'
                    : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                <span>{isSaved ? 'Saved to Profile' : 'Save Roadmap'}</span>
              </button>
            </div>
          </div>

          {/* Progress & Next Topic Alert */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700 dark:text-slate-300">Roadmap Progress</span>
                <span className="text-indigo-600 dark:text-indigo-400">{completedTopicCount} / {allTopicIds.length} Topics ({progressPercent}%)</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(progressPercent, 2)}%` }}
                ></div>
              </div>
            </div>

            <div className="md:col-span-7">
              {nextTopic ? (
                <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">Recommended Next Topic</span>
                    <span className="font-bold text-slate-900 dark:text-white">{nextTopic.title} ({nextTopic.duration})</span>
                  </div>
                  <button
                    onClick={() => toggleCompleteRoadmapTopic(nextTopic.id)}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors cursor-pointer shrink-0 ml-3"
                  >
                    Mark Done
                  </button>
                </div>
              ) : (
                <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Congratulations! You have completed all topics in this roadmap!</span>
                </div>
              )}
            </div>
          </div>

          {/* Languages & Tools Badges */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1.5 uppercase text-[11px] tracking-wider">Languages & Frameworks:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeRoadmap.languagesAndTech.map(tech => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border border-transparent dark:border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1.5 uppercase text-[11px] tracking-wider">Industry Tools:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeRoadmap.tools.map(tool => (
                  <span key={tool} className="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 font-semibold border border-purple-100 dark:border-purple-800">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Month-by-Month Curated Timeline */}
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>Month-by-Month Learning Timeline</span>
          </h3>

          <div className="space-y-4">
            {activeRoadmap.months.map((month) => {
              const isExpanded = expandedMonth === month.month;
              const monthTopicIds = month.topics.map(t => t.id);
              const monthDone = monthTopicIds.filter(id => user?.completedRoadmapTopics.includes(id)).length;
              const isMonthCompleted = monthDone === monthTopicIds.length && monthTopicIds.length > 0;

              return (
                <div
                  key={month.month}
                  className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden transition-all"
                >
                  {/* Month Accordion Header */}
                  <button
                    onClick={() => setExpandedMonth(isExpanded ? null : month.month)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 ${
                        isMonthCompleted
                          ? 'bg-emerald-600 text-white'
                          : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                      }`}>
                        {isMonthCompleted ? <Check className="w-5 h-5" /> : `M${month.month}`}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                            Month {month.month}
                          </span>
                          <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">• {monthDone}/{monthTopicIds.length} Done</span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{month.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{month.focus}</p>
                      </div>
                    </div>

                    <div className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Month Topics Detail */}
                  {isExpanded && (
                    <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {month.topics.map((topic) => {
                          const isTopicDone = user?.completedRoadmapTopics.includes(topic.id);
                          return (
                            <div
                              key={topic.id}
                              className={`p-5 rounded-2xl border transition-all ${
                                isTopicDone
                                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60'
                                  : 'bg-slate-50/70 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/80 hover:bg-white dark:hover:bg-slate-800'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <h5 className="font-bold text-sm text-slate-900 dark:text-white">{topic.title}</h5>
                                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">{topic.duration}</span>
                                </div>
                                <button
                                  onClick={() => toggleCompleteRoadmapTopic(topic.id)}
                                  className={`p-1.5 rounded-lg border transition-colors cursor-pointer shrink-0 ${
                                    isTopicDone
                                      ? 'bg-emerald-600 border-emerald-600 text-white'
                                      : 'border-slate-300 dark:border-slate-600 text-transparent hover:text-slate-300'
                                  }`}
                                  title="Toggle Completed"
                                >
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </button>
                              </div>

                              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                                {topic.description}
                              </p>

                              {/* Skills */}
                              <div className="flex flex-wrap gap-1 mt-3">
                                {topic.skills.map((s, idx) => (
                                  <span key={idx} className="text-[10px] font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md">
                                    {s}
                                  </span>
                                ))}
                              </div>

                              {/* Practice tasks */}
                              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 text-xs space-y-1">
                                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Hands-on Exercises:</span>
                                {topic.practiceTasks.map((task, i) => (
                                  <div key={i} className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                                    <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
                                    <span>{task}</span>
                                  </div>
                                ))}
                              </div>

                              {topic.miniProject && (
                                <div className="mt-3 p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-transparent dark:border-purple-800/60 text-purple-900 dark:text-purple-300 text-xs font-semibold flex items-center gap-2">
                                  <FolderGit2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                                  <span>Mini-Project: {topic.miniProject}</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Capstone Projects & Career Outlook */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Capstones */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Recommended Capstone Projects</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Build these full-featured applications to prove your readiness on your portfolio.
            </p>
            <div className="space-y-3 pt-2">
              {activeRoadmap.finalProjects.map((p, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-750 space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{p.name}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{p.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {p.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span>Target Career Roles & Demand</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Realistic roles and compensation benchmarks achievable after mastering this roadmap.
            </p>
            <div className="space-y-3 pt-2">
              {activeRoadmap.careerOpportunities.map((c, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-750 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{c.role}</h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{c.salaryRange} (Estimated)</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                    {c.demand} Demand
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 italic pt-2">
              *Note: Compensation benchmarks vary depending on geographical location, local cost of living, and individual employer tier.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
