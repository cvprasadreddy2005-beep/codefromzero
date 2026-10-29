import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Trash2, 
  RotateCcw, 
  Bug, 
  Compass, 
  Award, 
  Briefcase, 
  HelpCircle, 
  Play, 
  CheckCircle2, 
  Copy, 
  Check, 
  ChevronRight, 
  Terminal, 
  MessageSquare,
  ShieldCheck,
  AlertCircle,
  Plus
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  provider?: string;
  isStreaming?: boolean;
}

interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  updatedAt: string;
}

const STORAGE_KEY_AI_SESSIONS = 'cfz_ai_sessions_v1';

const SUGGESTED_QUESTIONS = [
  "Teach me Java from zero.",
  "Explain HTML and CSS with examples.",
  "Help me debug my JavaScript code.",
  "Explain arrays in simple words.",
  "Give me five beginner Python exercises.",
  "Explain SQL queries.",
  "Prepare me for a coding interview.",
  "Help me choose a developer career.",
  "Create a learning roadmap.",
  "Explain this programming error."
];

export const AiAssistantView: React.FC = () => {
  const { user } = useAuth();
  const [activeSubTab, setActiveSubTab] = useState<'tutor' | 'debugger' | 'roadmap' | 'interview' | 'career' | 'question_gen'>('tutor');

  // Chat sessions state
  const [sessions, setSessions] = useState<ChatSession[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_AI_SESSIONS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return [
      {
        id: 'session-default',
        title: 'New Conversation',
        messages: [
          {
            id: 'm1',
            role: 'assistant',
            content: "Hi! I'm Code From Zero AI, your personal coding tutor. Ask me anything about programming, debug your code, practice interview questions, or explore your future career.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ],
        updatedAt: new Date().toISOString()
      }
    ];
  });

  const [currentSessionId, setCurrentSessionId] = useState<string>('session-default');
  const [inputMessage, setInputMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Debugger state
  const [debugLanguage, setDebugLanguage] = useState('JavaScript');
  const [debugCode, setDebugCode] = useState('function calculateTotal(items) {\n  let total;\n  for (let i = 0; i <= items.length; i++) {\n    total += items[i].price;\n  }\n  return total;\n}');
  const [debugErrorDesc, setDebugErrorDesc] = useState('Returns NaN and throws Cannot read property of undefined');
  const [debugResult, setDebugResult] = useState<string | null>(null);
  const [isDebugRunning, setIsDebugRunning] = useState(false);

  // Roadmap generator state
  const [roadmapLevel, setRoadmapLevel] = useState('Complete Beginner');
  const [roadmapCareer, setRoadmapCareer] = useState('Frontend Developer');
  const [roadmapLang, setRoadmapLang] = useState('JavaScript / React');
  const [roadmapHours, setRoadmapHours] = useState('10');
  const [roadmapTimeframe, setRoadmapTimeframe] = useState('12 weeks');
  const [generatedRoadmap, setGeneratedRoadmap] = useState<string | null>(null);
  const [isRoadmapRunning, setIsRoadmapRunning] = useState(false);

  // Interview coach state
  const [interviewTopic, setInterviewTopic] = useState('JavaScript & Web');
  const [interviewDiff, setInterviewDiff] = useState('Beginner');
  const [interviewQuestion, setInterviewQuestion] = useState('Can you explain what happens when you type a URL into a web browser and press Enter?');
  const [interviewUserAnswer, setInterviewUserAnswer] = useState('');
  const [interviewFeedback, setInterviewFeedback] = useState<string | null>(null);
  const [isInterviewRunning, setIsInterviewRunning] = useState(false);

  // Career advisor state
  const [careerBackground, setCareerBackground] = useState('College student studying non-CS major');
  const [careerInterests, setCareerInterests] = useState('Building visually appealing websites and learning how web apps function');
  const [careerSkills, setCareerSkills] = useState('Basic HTML and started learning JavaScript');
  const [careerGoal, setCareerGoal] = useState('Become a Junior Frontend Developer within 6 months');
  const [careerAdvice, setCareerAdvice] = useState<string | null>(null);
  const [isCareerRunning, setIsCareerRunning] = useState(false);

  // Dynamic Question Generator state
  const [genQCategory, setGenQCategory] = useState('JavaScript');
  const [genQDiff, setGenQDiff] = useState('Beginner');
  const [genQTopic, setGenQTopic] = useState('Arrays & Loops');
  const [generatedBonusQuestion, setGeneratedBonusQuestion] = useState<any | null>(null);
  const [isQGenRunning, setIsQGenRunning] = useState(false);

  // Active session object
  const currentSession = sessions.find(s => s.id === currentSessionId) || sessions[0];

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentSession?.messages, isSending]);

  // Persist sessions
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_AI_SESSIONS, JSON.stringify(sessions));
    } catch {}
  }, [sessions]);

  // Create new chat
  const handleNewChat = () => {
    const newId = 'session_' + Date.now();
    const newSession: ChatSession = {
      id: newId,
      title: 'New Conversation',
      messages: [
        {
          id: 'm1',
          role: 'assistant',
          content: "Hi! I'm Code From Zero AI, your personal coding tutor. Ask me anything about programming, debug your code, practice interview questions, or explore your future career.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ],
      updatedAt: new Date().toISOString()
    };
    setSessions([newSession, ...sessions]);
    setCurrentSessionId(newId);
  };

  // Clear current chat
  const handleClearChat = () => {
    setSessions(prev => prev.map(s => {
      if (s.id === currentSessionId) {
        return {
          ...s,
          messages: [
            {
              id: 'm1',
              role: 'assistant',
              content: "Hi! I'm Code From Zero AI, your personal coding tutor. Ask me anything about programming, debug your code, practice interview questions, or explore your future career.",
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]
        };
      }
      return s;
    }));
  };

  // Send message with real-time token streaming for instant response
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isSending) return;

    setInputMessage('');
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMsg: ChatMessage = {
      id: 'usr_' + Date.now(),
      role: 'user',
      content: text,
      timestamp: nowTime
    };

    const aiMsgId = 'ai_' + (Date.now() + 1);
    const initialAiMsg: ChatMessage = {
      id: aiMsgId,
      role: 'assistant',
      content: '',
      timestamp: nowTime,
      isStreaming: true,
      provider: 'gemini-3.1-flash-lite'
    };

    const updatedMessagesWithUser = [...currentSession.messages, userMsg];
    const updatedMessagesWithAi = [...updatedMessagesWithUser, initialAiMsg];

    // Update session title if first user message
    const updatedTitle = currentSession.title === 'New Conversation' ? text.slice(0, 30) + '...' : currentSession.title;

    setSessions(prev => prev.map(s => {
      if (s.id === currentSessionId) {
        return { ...s, title: updatedTitle, messages: updatedMessagesWithAi, updatedAt: new Date().toISOString() };
      }
      return s;
    }));

    setIsSending(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessagesWithUser.map(m => ({ role: m.role, content: m.content })),
          context: `Code From Zero student: ${user?.name || 'Guest'}. Career target: ${user?.currentRoleTarget || 'Software Developer'}`
        })
      });

      const data = await response.json();
      const fullText = data.content || data.reply || 'I processed your question. Keep practicing step by step!';
      const provider = data.provider || 'gemini-3.1-flash-lite';

      // Rapid smooth typewriter effect (progressive words every 16ms)
      const words = fullText.split(' ');
      let revealed = '';
      const step = Math.max(3, Math.ceil(words.length / 25));

      for (let i = 0; i < words.length; i += step) {
        revealed = words.slice(0, i + step).join(' ');
        setSessions(prev => prev.map(s => {
          if (s.id === currentSessionId) {
            return {
              ...s,
              messages: s.messages.map(m => m.id === aiMsgId ? { ...m, content: revealed, isStreaming: true, provider } : m)
            };
          }
          return s;
        }));
        await new Promise(r => setTimeout(r, 16));
      }

      // Final complete state
      setSessions(prev => prev.map(s => {
        if (s.id === currentSessionId) {
          return {
            ...s,
            messages: s.messages.map(m => m.id === aiMsgId ? { ...m, content: fullText, isStreaming: false, provider } : m)
          };
        }
        return s;
      }));
    } catch (err) {
      setSessions(prev => prev.map(s => {
        if (s.id === currentSessionId) {
          return {
            ...s,
            messages: s.messages.map(m => m.id === aiMsgId ? { 
              ...m, 
              content: "I encountered a network issue communicating with the AI service. Please try asking again.", 
              isStreaming: false 
            } : m)
          };
        }
        return s;
      }));
    } finally {
      setIsSending(false);
    }
  };

  // Run AI Debugger
  const handleRunDebugger = async () => {
    if (!debugCode.trim() || isDebugRunning) return;
    setIsDebugRunning(true);
    setDebugResult(null);

    try {
      const res = await fetch('/api/ai/debug', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: debugCode,
          language: debugLanguage,
          errorDescription: debugErrorDesc
        })
      });
      const data = await res.json();
      setDebugResult(data.analysis || 'Analysis complete.');
    } catch (err: any) {
      setDebugResult(`Error connecting to AI code debugger: ${err.message}`);
    } finally {
      setIsDebugRunning(false);
    }
  };

  // Run AI Roadmap Generator
  const handleGenerateRoadmap = async () => {
    setIsRoadmapRunning(true);
    setGeneratedRoadmap(null);

    try {
      const res = await fetch('/api/ai/generate-roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentLevel: roadmapLevel,
          targetCareer: roadmapCareer,
          language: roadmapLang,
          availableHours: roadmapHours,
          timeframe: roadmapTimeframe
        })
      });
      const data = await res.json();
      setGeneratedRoadmap(data.roadmap || 'Generated Roadmap.');
    } catch (err: any) {
      setGeneratedRoadmap(`Error generating roadmap: ${err.message}`);
    } finally {
      setIsRoadmapRunning(false);
    }
  };

  // Run AI Interview Coach
  const handleSubmitInterviewAnswer = async () => {
    if (!interviewUserAnswer.trim() || isInterviewRunning) return;
    setIsInterviewRunning(true);
    setInterviewFeedback(null);

    try {
      const res = await fetch('/api/ai/interview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: interviewQuestion,
          userResponse: interviewUserAnswer,
          topic: interviewTopic,
          difficulty: interviewDiff
        })
      });
      const data = await res.json();
      setInterviewFeedback(data.feedback || 'Evaluation complete.');
    } catch (err: any) {
      setInterviewFeedback(`Error: ${err.message}`);
    } finally {
      setIsInterviewRunning(false);
    }
  };

  // Run AI Career Advisor
  const handleRunCareerAdvisor = async () => {
    setIsCareerRunning(true);
    setCareerAdvice(null);

    try {
      const res = await fetch('/api/ai/career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          background: careerBackground,
          interests: careerInterests,
          skills: careerSkills,
          goal: careerGoal
        })
      });
      const data = await res.json();
      setCareerAdvice(data.advice || 'Career advice generated.');
    } catch (err: any) {
      setCareerAdvice(`Error: ${err.message}`);
    } finally {
      setIsCareerRunning(false);
    }
  };

  // Run AI Question Generator
  const handleGenerateBonusQuestion = async () => {
    setIsQGenRunning(true);
    setGeneratedBonusQuestion(null);

    try {
      const res = await fetch('/api/ai/generate-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: genQCategory,
          difficulty: genQDiff,
          topic: genQTopic
        })
      });
      const data = await res.json();
      setGeneratedBonusQuestion(data.question || null);
    } catch (err: any) {
      setGeneratedBonusQuestion({ error: err.message });
    } finally {
      setIsQGenRunning(false);
    }
  };

  const copyText = (txt: string, id: string) => {
    navigator.clipboard.writeText(txt);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-gradient-to-tr from-slate-900 via-indigo-950 to-purple-950 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Bot className="w-4 h-4 text-purple-400" />
              <span>Personal AI Programming Assistant</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Code From Zero AI
            </h1>
            <p className="text-sm text-slate-300 max-w-xl">
              Tutor, debug code, generate customized study roadmaps, practice technical interviews, and receive personalized career advice with Gemini intelligence.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live AI Service
            </span>
          </div>
        </div>

        {/* Specialized Feature Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'tutor', label: 'AI Tutor Chat', icon: MessageSquare },
            { id: 'debugger', label: 'AI Code Debugger', icon: Bug },
            { id: 'roadmap', label: 'AI Roadmap Generator', icon: Compass },
            { id: 'interview', label: 'AI Interview Coach', icon: Award },
            { id: 'career', label: 'AI Career Advisor', icon: Briefcase },
            { id: 'question_gen', label: 'AI Practice Generator', icon: HelpCircle },
          ].map(tab => {
            const Icon = tab.icon;
            const isSelected = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: AI TUTOR CHAT */}
        {activeSubTab === 'tutor' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Chat Sessions History & Suggested Questions */}
            <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-5 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Conversations</span>
                <button
                  onClick={handleNewChat}
                  className="flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Chat</span>
                </button>
              </div>

              {/* Sessions List */}
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {sessions.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSessionId(s.id)}
                    className={`w-full p-2.5 rounded-xl text-left text-xs font-medium transition-colors truncate flex items-center justify-between cursor-pointer ${
                      s.id === currentSessionId
                        ? 'bg-purple-50 dark:bg-purple-950/80 text-purple-900 dark:text-purple-300 font-bold border border-purple-200 dark:border-purple-800'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="truncate">{s.title}</span>
                  </button>
                ))}
              </div>

              {/* Suggested Questions */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                  Suggested Prompts
                </span>
                <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(q)}
                      className="w-full text-left p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/80 hover:text-indigo-700 dark:hover:text-indigo-300 text-xs text-slate-700 dark:text-slate-300 transition-colors cursor-pointer border border-slate-100 dark:border-slate-750 block"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <button
                  onClick={handleClearChat}
                  className="text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Conversation</span>
                </button>
              </div>
            </div>

            {/* Right Column: Chat Window */}
            <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col h-[650px] overflow-hidden">
              
              {/* Chat Header */}
              <div className="p-4 px-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    CFZ
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Code From Zero AI Tutor</h3>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Real-time Fast Streaming • Gemini 3.1 Flash Lite</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 p-6 overflow-y-auto space-y-5">
                {currentSession.messages.map((m) => {
                  const isUser = m.role === 'user';
                  return (
                    <div key={m.id} className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
                      {!isUser && (
                        <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-1 shadow-sm">
                          AI
                        </div>
                      )}

                      <div className={`max-w-[85%] rounded-3xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed ${
                        isUser
                          ? 'bg-indigo-600 text-white rounded-tr-none'
                          : 'bg-slate-100/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/60 dark:border-slate-700 shadow-sm'
                      }`}>
                        {m.content ? (
                          <div className="whitespace-pre-wrap">
                            {m.content}
                            {m.isStreaming && <span className="inline-block w-1.5 h-3.5 ml-1 bg-purple-500 animate-pulse align-middle"></span>}
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 py-1 text-slate-500 dark:text-slate-400">
                            <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping"></span>
                            <span className="text-xs font-medium">Generating instant answer...</span>
                          </div>
                        )}
                        <div className={`text-[10px] mt-2 flex items-center justify-between opacity-70 ${isUser ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}`}>
                          <span>{m.timestamp}</span>
                          {!isUser && m.content && (
                            <button
                              onClick={() => copyText(m.content, m.id)}
                              className="hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              {copiedIndex === m.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copiedIndex === m.id ? 'Copied' : 'Copy'}</span>
                            </button>
                          )}
                        </div>
                      </div>

                      {isUser && (
                        <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center font-black text-xs shrink-0 mt-1">
                          U
                        </div>
                      )}
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Footer */}
              <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask about programming concepts, debug errors, or request examples..."
                    disabled={isSending}
                    className="flex-1 px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                  <button
                    type="submit"
                    disabled={isSending || !inputMessage.trim()}
                    className="px-5 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md transition-colors cursor-pointer disabled:opacity-40"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: AI CODE DEBUGGER */}
        {activeSubTab === 'debugger' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Bug className="w-6 h-6 text-rose-500" />
                <span>AI Code Debugger</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Paste your code, describe the error or unexpected behavior, and our AI will provide an Error Explanation, Why It Occurs, Corrected Code, Explanation of the Fix, and Prevention Tips.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Programming Language
                  </label>
                  <select
                    value={debugLanguage}
                    onChange={(e) => setDebugLanguage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="SQL">SQL</option>
                    <option value="HTML/CSS">HTML / CSS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Problem Code
                  </label>
                  <textarea
                    rows={8}
                    value={debugCode}
                    onChange={(e) => setDebugCode(e.target.value)}
                    placeholder="Paste the code snippet you want analyzed..."
                    className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Error Description / Observed Behavior
                  </label>
                  <input
                    type="text"
                    value={debugErrorDesc}
                    onChange={(e) => setDebugErrorDesc(e.target.value)}
                    placeholder="e.g. Off by one error, TypeError, unexpected output..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <button
                  onClick={handleRunDebugger}
                  disabled={isDebugRunning || !debugCode.trim()}
                  className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md transition-colors cursor-pointer disabled:opacity-40"
                >
                  {isDebugRunning ? 'Analyzing Code AST & Diagnostics...' : 'Analyze & Fix with AI'}
                </button>
              </div>

              {/* Debug Result Panel */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Diagnostic Analysis
                  </span>
                  
                  {debugResult ? (
                    <div className="prose prose-sm dark:prose-invert text-xs leading-relaxed max-w-none text-slate-800 dark:text-slate-200 whitespace-pre-wrap font-sans">
                      {debugResult}
                    </div>
                  ) : (
                    <div className="text-center py-16 text-slate-400 dark:text-slate-500 space-y-2">
                      <Bug className="w-8 h-8 mx-auto stroke-1" />
                      <p className="text-xs">Submit code on the left to view diagnosis and corrected code here.</p>
                    </div>
                  )}
                </div>

                {debugResult && (
                  <button
                    onClick={() => copyText(debugResult, 'debug')}
                    className="mt-4 self-end text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Analysis</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: AI LEARNING ROADMAP GENERATOR */}
        {activeSubTab === 'roadmap' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Compass className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <span>AI Personalized Learning Roadmap Generator</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Tell us your background, target career, and weekly availability. The AI will generate a tailored schedule with weekly milestones and project deliverables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Current Skill Level
                    </label>
                    <select
                      value={roadmapLevel}
                      onChange={(e) => setRoadmapLevel(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none"
                    >
                      <option value="Complete Beginner">Complete Beginner</option>
                      <option value="Knows Basics">Knows Basics</option>
                      <option value="Intermediate">Intermediate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Target Career
                    </label>
                    <input
                      type="text"
                      value={roadmapCareer}
                      onChange={(e) => setRoadmapCareer(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none"
                      placeholder="e.g. Frontend Developer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Language
                    </label>
                    <input
                      type="text"
                      value={roadmapLang}
                      onChange={(e) => setRoadmapLang(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none"
                      placeholder="e.g. Python"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Hours / Week
                    </label>
                    <input
                      type="number"
                      value={roadmapHours}
                      onChange={(e) => setRoadmapHours(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none"
                      min="2"
                      max="40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Timeframe
                    </label>
                    <input
                      type="text"
                      value={roadmapTimeframe}
                      onChange={(e) => setRoadmapTimeframe(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none"
                      placeholder="e.g. 12 weeks"
                    />
                  </div>
                </div>

                <button
                  onClick={handleGenerateRoadmap}
                  disabled={isRoadmapRunning}
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-colors cursor-pointer disabled:opacity-40"
                >
                  {isRoadmapRunning ? 'Generating Custom Curriculum...' : 'Generate Personalized Roadmap'}
                </button>
              </div>

              {/* Output Panel */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 max-h-[450px] overflow-y-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                  Generated Study Plan
                </span>
                {generatedRoadmap ? (
                  <div className="prose prose-sm dark:prose-invert text-xs leading-relaxed max-w-none text-slate-800 dark:text-slate-200 whitespace-pre-wrap">
                    {generatedRoadmap}
                  </div>
                ) : (
                  <div className="text-center py-16 text-slate-400 dark:text-slate-500 space-y-2">
                    <Compass className="w-8 h-8 mx-auto stroke-1" />
                    <p className="text-xs">Click generate to build your personalized plan.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: AI INTERVIEW COACH */}
        {activeSubTab === 'interview' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <span>AI Mock Interview Coach</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Answer technical and behavioral questions one by one. The AI will score your response, identify missing concepts, provide a STAR-model answer, and ask follow-up questions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 space-y-1">
                <span className="text-[10px] font-extrabold text-purple-800 dark:text-purple-300 uppercase tracking-wider">Interview Question</span>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{interviewQuestion}</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Answer (Use the STAR framework where relevant):
                </label>
                <textarea
                  rows={5}
                  value={interviewUserAnswer}
                  onChange={(e) => setInterviewUserAnswer(e.target.value)}
                  placeholder="Explain your approach, thoughts, and technical reasoning..."
                  className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSubmitInterviewAnswer}
                  disabled={isInterviewRunning || !interviewUserAnswer.trim()}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer disabled:opacity-40"
                >
                  {isInterviewRunning ? 'Evaluating with STAR Criteria...' : 'Submit Answer for Feedback'}
                </button>
              </div>

              {interviewFeedback && (
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed animate-in fade-in">
                  {interviewFeedback}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 5: AI CAREER ADVISOR */}
        {activeSubTab === 'career' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <span>AI Career Advisor</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Share your education, current skills, and ambitions. Our AI will analyze high-demand tech paths and recommend suitable roles, project ideas, and realistic hiring expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Background & Education
                </label>
                <input
                  type="text"
                  value={careerBackground}
                  onChange={(e) => setCareerBackground(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Target Goal
                </label>
                <input
                  type="text"
                  value={careerGoal}
                  onChange={(e) => setCareerGoal(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Interests & Current Skills
                </label>
                <input
                  type="text"
                  value={careerInterests}
                  onChange={(e) => setCareerInterests(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
                />
              </div>
            </div>

            <button
              onClick={handleRunCareerAdvisor}
              disabled={isCareerRunning}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer disabled:opacity-40"
            >
              {isCareerRunning ? 'Analyzing Market & Skills...' : 'Get Career Diagnostic'}
            </button>

            {careerAdvice && (
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed animate-in fade-in">
                {careerAdvice}
              </div>
            )}
          </div>
        )}

        {/* TAB 6: AI PRACTICE QUESTION GENERATOR */}
        {activeSubTab === 'question_gen' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <span>AI Practice Question Generator</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Generate bonus dynamic practice questions for any language, topic, or difficulty level. Note: AI-generated questions do not mutate your curated 300 question bank.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Category
                </label>
                <select
                  value={genQCategory}
                  onChange={(e) => setGenQCategory(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
                >
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="SQL and Databases">SQL and Databases</option>
                  <option value="Algorithms">Algorithms</option>
                  <option value="Data Structures">Data Structures</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Difficulty
                </label>
                <select
                  value={genQDiff}
                  onChange={(e) => setGenQDiff(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Topic Keyword
                </label>
                <input
                  type="text"
                  value={genQTopic}
                  onChange={(e) => setGenQTopic(e.target.value)}
                  placeholder="e.g. Recursion, HashMaps"
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
                />
              </div>
            </div>

            <button
              onClick={handleGenerateBonusQuestion}
              disabled={isQGenRunning}
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer disabled:opacity-40"
            >
              {isQGenRunning ? 'Crafting New Problem with AI...' : 'Generate New Coding Question'}
            </button>

            {generatedBonusQuestion && (
              <div className="p-6 rounded-2xl bg-purple-50/50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 space-y-4 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/80 text-purple-800 dark:text-purple-300">
                    AI-Generated Bonus Question • {genQCategory} ({genQDiff})
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{generatedBonusQuestion.title}</h3>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">{generatedBonusQuestion.question}</p>

                {generatedBonusQuestion.starterCode && (
                  <div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Starter Code:</span>
                    <pre className="p-3.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
                      <code>{generatedBonusQuestion.starterCode}</code>
                    </pre>
                  </div>
                )}

                {generatedBonusQuestion.solution && (
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800/60 space-y-2">
                    <span className="text-xs font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider block">Solution:</span>
                    <pre className="p-3 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
                      <code>{generatedBonusQuestion.solution}</code>
                    </pre>
                    <p className="text-xs text-slate-700 dark:text-slate-300">{generatedBonusQuestion.explanation}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
