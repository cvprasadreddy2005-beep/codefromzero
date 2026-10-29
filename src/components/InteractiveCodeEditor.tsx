import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Play, 
  RotateCcw, 
  Copy, 
  CheckCheck, 
  Check, 
  X, 
  Terminal, 
  Sparkles, 
  Maximize2, 
  Minimize2, 
  FileCode, 
  Code2, 
  CheckCircle2, 
  Clock, 
  Cpu, 
  Trash2, 
  Lightbulb, 
  Send,
  Eye,
  Sliders,
  AlertTriangle
} from 'lucide-react';
import { Question } from '../types';
import { executeCode, ExecutionResult } from '../utils/codeRunner';
import { useTheme } from '../context/ThemeContext';

interface InteractiveCodeEditorProps {
  question: Question;
  starterCode?: string;
  solutionCode?: string;
  onSolved?: () => void;
  isCompleted?: boolean;
}

export const InteractiveCodeEditor: React.FC<InteractiveCodeEditorProps> = ({
  question,
  starterCode,
  solutionCode,
  onSolved,
  isCompleted = false,
}) => {
  const { isDark } = useTheme();

  // Code state
  const initialCode = starterCode || question.code || '';
  const [code, setCode] = useState<string>(initialCode);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [showingSolution, setShowingSolution] = useState<boolean>(false);
  const [customInput, setCustomInput] = useState<string>('');

  // Cursor position tracking
  const [cursorPos, setCursorPos] = useState<{ line: number; col: number }>({ line: 1, col: 1 });

  // Execution state
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [activeTab, setActiveTab] = useState<'tests' | 'console' | 'custom' | 'preview'>('tests');
  const [solvedCelebration, setSolvedCelebration] = useState<boolean>(false);

  // References for synchronized scrolling
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineGutterRef = useRef<HTMLDivElement>(null);

  // Reset code when question changes
  useEffect(() => {
    const nextCode = starterCode || question.code || '';
    setCode(nextCode);
    setExecutionResult(null);
    setShowingSolution(false);
    setSolvedCelebration(false);
    setCustomInput('');
    setActiveTab(question.category.toLowerCase().includes('html') ? 'preview' : 'tests');
  }, [question.id, starterCode]);

  // Sync line numbers scroll with textarea scroll
  const handleScroll = () => {
    if (textareaRef.current && lineGutterRef.current) {
      lineGutterRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  // Determine file name & extension based on category
  const fileMeta = useMemo(() => {
    const cat = question.category.toLowerCase();
    if (cat.includes('javascript') || cat.includes('algorithm')) {
      return { name: 'solution.js', lang: 'JavaScript', ext: 'js', tabSize: 2 };
    }
    if (cat.includes('python')) {
      return { name: 'solution.py', lang: 'Python', ext: 'py', tabSize: 4 };
    }
    if (cat.includes('java')) {
      return { name: 'Solution.java', lang: 'Java', ext: 'java', tabSize: 4 };
    }
    if (cat.includes('c++')) {
      return { name: 'solution.cpp', lang: 'C++', ext: 'cpp', tabSize: 4 };
    }
    if (cat.includes('c programming') || cat === 'c') {
      return { name: 'solution.c', lang: 'C', ext: 'c', tabSize: 4 };
    }
    if (cat.includes('sql') || cat.includes('database')) {
      return { name: 'query.sql', lang: 'SQL', ext: 'sql', tabSize: 2 };
    }
    if (cat.includes('html') || cat.includes('css')) {
      return { name: 'index.html', lang: 'HTML/CSS', ext: 'html', tabSize: 2 };
    }
    return { name: 'solution.js', lang: 'JavaScript', ext: 'js', tabSize: 2 };
  }, [question.category]);

  // Compute line count
  const lines = useMemo(() => {
    return code.split('\n');
  }, [code]);

  // Update cursor position
  const updateCursorPosition = () => {
    if (!textareaRef.current) return;
    const pos = textareaRef.current.selectionStart;
    const textBefore = code.substring(0, pos);
    const lineIndex = textBefore.split('\n').length;
    const lastNewline = textBefore.lastIndexOf('\n');
    const colIndex = lastNewline === -1 ? pos + 1 : pos - lastNewline;
    setCursorPos({ line: lineIndex, col: colIndex });
  };

  // Enhanced keyboard handler: Tab, auto-closing brackets, Enter indent, Ctrl+Enter to run
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = e.currentTarget;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    // Ctrl/Cmd + Enter to Run
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRunCode();
      return;
    }

    // Tab key indent
    if (e.key === 'Tab') {
      e.preventDefault();
      const spaces = ' '.repeat(fileMeta.tabSize);
      
      if (!e.shiftKey) {
        // Simple insert or multi-line indent
        const newCode = code.substring(0, start) + spaces + code.substring(end);
        setCode(newCode);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + fileMeta.tabSize;
          updateCursorPosition();
        }, 0);
      } else {
        // Shift+Tab: unindent
        const linesBefore = code.substring(0, start).split('\n');
        const currentLineIndex = linesBefore.length - 1;
        const allLines = code.split('\n');
        const currentLine = allLines[currentLineIndex];

        if (currentLine.startsWith('  ')) {
          allLines[currentLineIndex] = currentLine.replace(/^ {1,2}/, '');
          setCode(allLines.join('\n'));
          setTimeout(() => {
            textarea.selectionStart = textarea.selectionEnd = Math.max(0, start - 2);
            updateCursorPosition();
          }, 0);
        }
      }
      return;
    }

    // Auto-closing brackets & quotes
    const pairs: Record<string, string> = {
      '(': ')',
      '[': ']',
      '{': '}',
      '"': '"',
      "'": "'",
      '`': '`'
    };

    if (pairs[e.key] && start === end) {
      e.preventDefault();
      const openChar = e.key;
      const closeChar = pairs[e.key];
      const newCode = code.substring(0, start) + openChar + closeChar + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        updateCursorPosition();
      }, 0);
      return;
    }

    // Smart Enter key preserving indentation
    if (e.key === 'Enter') {
      e.preventDefault();
      const currentLineText = code.substring(0, start).split('\n').pop() || '';
      const matchIndent = currentLineText.match(/^(\s+)/);
      let indent = matchIndent ? matchIndent[1] : '';

      // If line ends with { or : increase indent
      if (currentLineText.trim().endsWith('{') || currentLineText.trim().endsWith(':')) {
        indent += ' '.repeat(fileMeta.tabSize);
      }

      const newCode = code.substring(0, start) + '\n' + indent + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1 + indent.length;
        updateCursorPosition();
      }, 0);
      return;
    }
  };

  // Run Code Execution
  const handleRunCode = () => {
    setIsRunning(true);
    setSolvedCelebration(false);

    setTimeout(() => {
      try {
        const result = executeCode(
          question.category,
          code,
          question.examples,
          customInput
        );

        setExecutionResult(result);

        // Switch to preview if HTML
        if (result.htmlPreview) {
          setActiveTab('preview');
        } else if (result.testCaseResults.length > 0) {
          setActiveTab('tests');
        } else {
          setActiveTab('console');
        }
      } catch (err: any) {
        setExecutionResult({
          status: 'error',
          logs: [{
            type: 'error',
            message: `Unexpected Execution Error: ${err.message || String(err)}`,
            timestamp: new Date().toLocaleTimeString()
          }],
          testCaseResults: [],
          allPassed: false,
          totalTimeMs: 0,
          memoryMb: 12,
          summary: 'Failed to execute code'
        });
        setActiveTab('console');
      } finally {
        setIsRunning(false);
      }
    }, 280);
  };

  // Submit Solution
  const handleSubmit = () => {
    setIsRunning(true);

    setTimeout(() => {
      try {
        const result = executeCode(
          question.category,
          code,
          question.examples,
          customInput
        );

        setExecutionResult(result);

        if (result.allPassed) {
          setSolvedCelebration(true);
          if (onSolved) {
            onSolved();
          }
        }
      } catch (err: any) {
        // Error handling
      } finally {
        setIsRunning(false);
      }
    }, 350);
  };

  // Reset to starter code
  const handleReset = () => {
    const initial = starterCode || question.code || '';
    setCode(initial);
    setExecutionResult(null);
    setShowingSolution(false);
    setSolvedCelebration(false);
  };

  // Load official solution
  const handleToggleSolution = () => {
    if (!showingSolution) {
      if (solutionCode || question.solution) {
        setCode(solutionCode || question.solution);
        setShowingSolution(true);
      }
    } else {
      setCode(starterCode || question.code || '');
      setShowingSolution(false);
    }
  };

  // Copy code
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Beautify / Format code
  const handleFormatCode = () => {
    const formatted = code
      .split('\n')
      .map(l => l.replace(/\s+$/, ''))
      .join('\n');
    setCode(formatted);
  };

  return (
    <div className={`space-y-4 ${isFullscreen ? 'fixed inset-0 z-50 p-6 bg-slate-950/90 backdrop-blur-xl overflow-y-auto flex flex-col' : 'relative'}`}>
      
      {/* Editor Main Container */}
      <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-950 shadow-xl flex flex-col flex-1">
        
        {/* Editor Top Bar */}
        <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          
          {/* File Tab & Language Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>

            <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-200 font-mono text-[11px] border border-slate-700/60">
              <FileCode className="w-3.5 h-3.5 text-indigo-400" />
              <span className="font-semibold">{fileMeta.name}</span>
            </div>

            <span className="hidden sm:inline text-[11px] font-medium text-slate-400">
              {fileMeta.lang} · Tab Size: {fileMeta.tabSize}
            </span>

            {isCompleted && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                <Check className="w-3 h-3" /> Solved
              </span>
            )}
          </div>

          {/* Quick Actions Toolbar */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleSolution}
              className={`px-2.5 py-1 rounded-lg font-mono text-[11px] font-semibold transition-colors cursor-pointer flex items-center gap-1.5 border ${
                showingSolution
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                  : 'bg-slate-800/70 hover:bg-slate-800 border-slate-700/60 text-slate-300 hover:text-white'
              }`}
              title="Toggle Official Reference Solution"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>{showingSolution ? 'Back to Starter' : 'Show Solution'}</span>
            </button>

            <button
              onClick={handleFormatCode}
              className="p-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white cursor-pointer transition-colors"
              title="Format Indentation"
            >
              <Sliders className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white cursor-pointer transition-colors"
              title="Reset Code to Default"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white cursor-pointer transition-colors"
              title="Copy Code"
            >
              {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white cursor-pointer transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'Focus Fullscreen'}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Code Canvas Area (Line Numbers + Textarea) */}
        <div className="relative flex flex-1 bg-slate-950 font-mono text-[13px] leading-6 min-h-[260px] max-h-[520px]">
          {/* Synchronized Line Numbers Gutter */}
          <div
            ref={lineGutterRef}
            aria-hidden="true"
            className="w-12 select-none py-4 text-right pr-3 text-slate-600 bg-slate-900/60 border-r border-slate-800/80 overflow-hidden font-mono text-xs tabular-nums"
          >
            {lines.map((_, i) => {
              const lineNum = i + 1;
              const isActive = cursorPos.line === lineNum;
              return (
                <div
                  key={lineNum}
                  className={`${isActive ? 'text-indigo-400 font-bold bg-indigo-500/10' : ''}`}
                >
                  {lineNum}
                </div>
              );
            })}
          </div>

          {/* Interactive Code Textarea */}
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              updateCursorPosition();
            }}
            onKeyDown={handleKeyDown}
            onKeyUp={updateCursorPosition}
            onClick={updateCursorPosition}
            onScroll={handleScroll}
            rows={12}
            className="flex-1 w-full bg-transparent text-slate-200 p-4 font-mono text-[13px] leading-6 focus:outline-none resize-none selection:bg-indigo-600 selection:text-white overflow-auto whitespace-pre tab-4"
            placeholder={`// Write your ${fileMeta.lang} solution here...`}
            spellCheck={false}
          />
        </div>

        {/* Editor Bottom Status Bar */}
        <div className="bg-slate-900/95 px-4 py-1.5 border-t border-slate-800/90 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-4">
            <span>
              Ln {cursorPos.line}, Col {cursorPos.col}
            </span>
            <span className="hidden sm:inline">
              {lines.length} lines · {code.length} chars
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-slate-500">
              Shortcut: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[10px]">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[10px]">Enter</kbd> to Run
            </span>
            <span className="text-emerald-400 font-semibold">● Ready</span>
          </div>
        </div>
      </div>

      {/* Action Strip: Run & Submit */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-bold text-xs transition-all shadow-sm cursor-pointer disabled:opacity-50 active:scale-95"
          >
            <Play className={`w-3.5 h-3.5 text-indigo-500 fill-indigo-500 ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Running Snippet...' : 'Run Code'}</span>
          </button>

          <button
            onClick={handleSubmit}
            disabled={isRunning}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition-all cursor-pointer disabled:opacity-50 active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Solution</span>
          </button>
        </div>

        {/* Runtime Performance Counters */}
        {executionResult && (
          <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>{executionResult.totalTimeMs}ms</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>{executionResult.memoryMb}MB</span>
            </span>
          </div>
        )}
      </div>

      {/* Solved Celebration Alert */}
      {solvedCelebration && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-500/30 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-emerald-800 dark:text-emerald-300">
                Challenge Solved Successfully!
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                All test cases evaluated and verified against the problem requirements. Progress recorded!
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold shrink-0">
            +10 XP
          </span>
        </div>
      )}

      {/* Interactive Output Console Deck */}
      <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-950 overflow-hidden text-xs font-mono">
        
        {/* Terminal Header & Navigation Tabs */}
        <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-bold text-slate-300 text-[11px] uppercase tracking-wider">
              Terminal & Test Suite
            </span>
          </div>

          {/* Console Tabs */}
          <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800/80">
            {question.examples && question.examples.length > 0 && (
              <button
                onClick={() => setActiveTab('tests')}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'tests'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>Test Cases</span>
                {executionResult && executionResult.testCaseResults.length > 0 && (
                  <span className={`w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold ${
                    executionResult.allPassed ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                  }`}>
                    {executionResult.allPassed ? '✓' : '!'}
                  </span>
                )}
              </button>
            )}

            <button
              onClick={() => setActiveTab('console')}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'console'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Stdout / Logs</span>
              {executionResult && executionResult.logs.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 text-[9px]">
                  {executionResult.logs.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('custom')}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                activeTab === 'custom'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Custom Input</span>
            </button>

            {question.category.toLowerCase().includes('html') && (
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  activeTab === 'preview'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Eye className="w-3 h-3" />
                <span>Live Preview</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Content Panes */}
        <div className="p-4 bg-slate-950/80 min-h-[140px] max-h-[320px] overflow-y-auto">
          
          {/* TAB 1: Test Cases */}
          {activeTab === 'tests' && (
            <div className="space-y-3">
              {!executionResult || executionResult.testCaseResults.length === 0 ? (
                <div className="space-y-2">
                  <div className="text-slate-500 text-[11px] flex items-center justify-between">
                    <span>Default Problem Test Vectors ({question.examples?.length || 0})</span>
                    <span>Click "Run Code" to evaluate against these cases</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {question.examples?.map((ex, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-1">
                          <span>Case {idx + 1}</span>
                          <span className="text-slate-500 font-normal">Pending</span>
                        </div>
                        <div className="text-slate-300">
                          <span className="text-slate-500">Input: </span>
                          <span className="text-indigo-300">{ex.input}</span>
                        </div>
                        <div className="text-slate-300">
                          <span className="text-slate-500">Expected: </span>
                          <span className="text-emerald-400 font-semibold">{ex.output}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-800/80">
                    <span className={`font-bold ${executionResult.allPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {executionResult.summary}
                    </span>
                    <span className="text-slate-500">
                      Evaluated in {executionResult.totalTimeMs}ms
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {executionResult.testCaseResults.map((t) => (
                      <div
                        key={t.id}
                        className={`p-3.5 rounded-xl border transition-all ${
                          t.passed
                            ? 'bg-emerald-950/20 border-emerald-800/50 text-slate-200'
                            : 'bg-rose-950/20 border-rose-800/50 text-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px] font-bold mb-1.5">
                          <span>Test Case #{t.id}</span>
                          <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${
                            t.passed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                          }`}>
                            {t.passed ? 'PASSED ✓' : 'FAILED ✗'}
                          </span>
                        </div>

                        <div className="space-y-1 text-[11px]">
                          <div>
                            <span className="text-slate-500">Input: </span>
                            <span className="text-slate-300">{t.input}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">Expected: </span>
                            <span className="text-emerald-400 font-semibold">{t.expected}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">Actual: </span>
                            <span className={t.passed ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                              {t.actual}
                            </span>
                          </div>
                          {t.timeMs !== undefined && (
                            <div className="text-[10px] text-slate-500 pt-1">
                              Duration: {t.timeMs}ms
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Console Stdout / Logs */}
          {activeTab === 'console' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-500 pb-1 border-b border-slate-800/80">
                <span>Standard Output & Debugging Stream</span>
                {executionResult && executionResult.logs.length > 0 && (
                  <button
                    onClick={() => setExecutionResult(prev => prev ? { ...prev, logs: [] } : null)}
                    className="flex items-center gap-1 text-slate-500 hover:text-slate-300 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear</span>
                  </button>
                )}
              </div>

              {!executionResult || executionResult.logs.length === 0 ? (
                <div className="text-slate-600 italic py-4 text-center">
                  Console output is empty. Run your code or call console.log() to print messages.
                </div>
              ) : (
                <div className="space-y-1 font-mono text-[12px] leading-relaxed">
                  {executionResult.logs.map((log, idx) => {
                    let color = 'text-slate-300';
                    let badge = '[LOG]';
                    if (log.type === 'error') {
                      color = 'text-rose-400 bg-rose-950/20 px-2 py-0.5 rounded';
                      badge = '[ERROR]';
                    } else if (log.type === 'warn') {
                      color = 'text-amber-400';
                      badge = '[WARN]';
                    } else if (log.type === 'info') {
                      color = 'text-cyan-400';
                      badge = '[INFO]';
                    } else if (log.type === 'system') {
                      color = 'text-indigo-400';
                      badge = '[SYS]';
                    }

                    return (
                      <div key={idx} className={`whitespace-pre-wrap flex items-start gap-2 ${color}`}>
                        <span className="text-slate-600 text-[10px] select-none shrink-0 font-mono">
                          {log.timestamp} {badge}
                        </span>
                        <div className="flex-1">{log.message}</div>
                      </div>
                    );
                  })}
                  {executionResult.returnValue !== undefined && (
                    <div className="pt-2 text-emerald-400 font-semibold border-t border-slate-800/60 mt-2">
                      <span className="text-slate-500 font-normal">Return Value: </span>
                      {executionResult.returnValue}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Custom Input */}
          {activeTab === 'custom' && (
            <div className="space-y-3">
              <div className="text-[11px] text-slate-400">
                Test any custom expression or function call against your currently loaded code.
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder={`e.g. ${question.examples?.[0]?.input || 'swap(10, 20)'}`}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs focus:outline-none focus:border-indigo-500"
                />
                <button
                  onClick={handleRunCode}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer transition-colors"
                >
                  Test Expression
                </button>
              </div>
              <div className="text-[10px] text-slate-500">
                Tip: The return value and stdout generated by this call will be recorded in the Stdout / Logs tab.
              </div>
            </div>
          )}

          {/* TAB 4: Live HTML/CSS Preview */}
          {activeTab === 'preview' && (
            <div className="space-y-2">
              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span>Sandboxed DOM Viewport</span>
                <span className="text-emerald-400">Isolated & Secure Iframe</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-white min-h-[220px]">
                <iframe
                  title="live-preview"
                  srcDoc={executionResult?.htmlPreview || code}
                  sandbox="allow-scripts"
                  className="w-full h-[220px] border-none"
                />
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};
