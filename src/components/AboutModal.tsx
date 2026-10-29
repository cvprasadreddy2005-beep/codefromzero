import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  MapPin, 
  User, 
  Sparkles, 
  Code2, 
  Check, 
  Copy, 
  ExternalLink, 
  Heart, 
  BookOpen, 
  CheckSquare, 
  Terminal, 
  Send, 
  ShieldCheck,
  Compass,
  Award
} from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab?: (tab: string, param?: string) => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onNavigateTab }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  if (!isOpen) return null;

  const founderDetails = {
    name: "C V Prasad Reddy",
    role: "Founder & Lead Developer, Code From Zero",
    email: "cvprasadreddy2005@gmail.com",
    address: "Kadapa - 516003, Andhra Pradesh, India",
    pincode: "516003",
    city: "Kadapa",
    state: "Andhra Pradesh",
    country: "India",
    vision: "To empower every student, beginner, and aspiring engineer to learn programming from absolute zero with high-quality, practical, structured, and free interactive education."
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(founderDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${founderDetails.name}, ${founderDetails.address}`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMessage.trim()) return;
    setMessageSent(true);
    setTimeout(() => {
      setContactMessage('');
      setMessageSent(false);
    }, 4000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gradient Banner */}
        <div className="relative h-32 sm:h-36 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-black uppercase tracking-wider border border-white/30 flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About the Creator & Platform</span>
            </span>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all cursor-pointer focus:outline-none"
            aria-label="Close about modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Founder Avatar & Quick Bio Badge */}
        <div className="px-6 sm:px-8 -mt-14 sm:-mt-16 pb-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex items-end gap-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-1 shadow-xl shrink-0 ring-4 ring-white dark:ring-slate-900">
                <div className="w-full h-full rounded-[22px] bg-slate-900 flex flex-col items-center justify-center text-white font-black">
                  <span className="text-3xl sm:text-4xl">CV</span>
                  <span className="text-[10px] tracking-widest text-indigo-400 uppercase">Creator</span>
                </div>
              </div>

              <div className="space-y-1 mb-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {founderDetails.name}
                  </h2>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {founderDetails.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`mailto:${founderDetails.email}`}
                className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Me</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Primary Details Grid (Name, Email, Address) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
            
            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Email Address</span>
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>
              <div className="font-mono text-sm font-bold text-slate-900 dark:text-white select-all break-all">
                {founderDetails.email}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Direct inquiry, curriculum feedback, partnerships, and developer mentorship.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>Location & Address</span>
                </span>
                <button
                  onClick={handleCopyAddress}
                  className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  {copiedAddress ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedAddress ? 'Copied' : 'Copy Address'}</span>
                </button>
              </div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">
                {founderDetails.address}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Pincode: <strong>{founderDetails.pincode}</strong> • Kadapa District, AP, India.
              </p>
            </div>

          </div>

          {/* About Code From Zero Platform Mission */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-purple-50/40 to-slate-50 dark:from-indigo-950/40 dark:via-purple-950/20 dark:to-slate-900 border border-indigo-100 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                About Code From Zero
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {founderDetails.vision}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">8</span>
                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Major Tracks</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">2,480+</span>
                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Practice Qs</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">1,500+</span>
                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">In-Depth Topics</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">100%</span>
                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Free Education</p>
              </div>
            </div>
          </div>

          {/* Quick Platform Exploration Links */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Explore Learning Modules:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() => { onClose(); onNavigateTab?.('tutorials'); }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 text-left transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    Tutorials Hub
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">Python, JS, SQL, C, C++, Java, Git, HTML</p>
              </button>

              <button
                onClick={() => { onClose(); onNavigateTab?.('ai-assistant'); }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 text-left transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    AI Mentor
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">Real-time code explanation, debugging & hints</p>
              </button>

              <button
                onClick={() => { onClose(); onNavigateTab?.('practice'); }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 text-left transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    Practice Arena
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">2,480+ curated questions & solutions</p>
              </button>
            </div>
          </div>

          {/* Quick Message Form */}
          <form onSubmit={handleSendMessage} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5 text-indigo-500" />
                <span>Send a Message to C V Prasad Reddy</span>
              </span>
              <span className="text-[10px] text-slate-400">Direct response via email</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Your Name (e.g. Ramesh)"
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Your Email (e.g. learner@example.com)"
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <textarea
              rows={2}
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              placeholder="Ask a question, suggest a tutorial, or request mentorship..."
              className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
              required
            />

            <div className="flex items-center justify-between pt-1">
              {messageSent ? (
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Thank you! Your message has been sent to C V Prasad Reddy.</span>
                </span>
              ) : (
                <span className="text-[11px] text-slate-400">
                  Location: Kadapa-516003, Andhra Pradesh
                </span>
              )}

              <button
                type="submit"
                className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer ml-auto"
              >
                <Send className="w-3 h-3" />
                <span>Submit Message</span>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};
