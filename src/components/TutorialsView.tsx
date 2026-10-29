import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  TUTORIALS_DATA, 
  TUTORIAL_MODULES_MAP,
  PYTHON_MODULES,
  JAVASCRIPT_MODULES,
  SQL_MODULES,
  C_MODULES,
  CPP_MODULES,
  GIT_MODULES,
  JAVA_MODULES,
  HTML_MODULES 
} from '../data/tutorialsData';
import { Tutorial, TutorialLesson, Difficulty } from '../types';
import { useAuth } from '../context/AuthContext';
import { 
  BookOpen, 
  Copy, 
  Check, 
  Play, 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Terminal, 
  Code2, 
  Sparkles, 
  ArrowRight, 
  Award, 
  Layers, 
  Clock, 
  Search, 
  Flame, 
  ExternalLink, 
  Lightbulb, 
  CheckSquare, 
  Globe, 
  Database, 
  FileCode, 
  Coffee, 
  Binary, 
  Palette,
  RotateCcw,
  Bookmark,
  Download,
  Eye,
  SlidersHorizontal,
  X,
  Send,
  CheckCheck,
  FolderGit2,
  Type,
  Cpu,
  Briefcase,
  Compass,
  ListChecks,
  Bug
} from 'lucide-react';
import { CTutorialTabs } from './CTutorialTabs';
import { CppTutorialTabs } from './CppTutorialTabs';
import {
  PYTHON_INTERVIEW_PREP,
  PYTHON_PORTFOLIO_PROJECTS,
  PYTHON_ROADMAP_STAGES,
  PYTHON_PLAYGROUND_TEMPLATES,
  PythonInterviewCategory,
  PythonProjectItem,
  PythonRoadmapStage,
  PythonPlaygroundTemplate
} from '../data/pythonTutorialsData';

export interface JavaConceptDef {
  id: string;
  name: string;
  pillar: 'OOP Pillars' | 'Access Modifiers' | 'JVM Architecture' | 'Collections & DSA';
  badge: string;
  summary: string;
  syntax: string;
  sampleCode: string;
  memoryNote: string;
  interviewTip: string;
  relatedLessonId: string;
}

export const JAVA_CONCEPTS: JavaConceptDef[] = [
  {
    id: 'encapsulation',
    name: 'Encapsulation (Data Hiding)',
    pillar: 'OOP Pillars',
    badge: 'OOP Pillar 1',
    summary: 'Bundling state (private variables) and behavior (public methods) into a single class unit, preventing invalid outside modification.',
    syntax: 'public class Account {\n    private double balance;\n    public double getBalance() { return balance; }\n    public void deposit(double amt) { if (amt > 0) balance += amt; }\n}',
    sampleCode: 'public class BankAccount {\n    private String owner;\n    private double balance;\n\n    public BankAccount(String owner, double initialDeposit) {\n        this.owner = owner;\n        this.balance = Math.max(0, initialDeposit);\n    }\n\n    public double getBalance() { return balance; }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n            System.out.println("Deposited $" + amount + ". New balance: $" + balance);\n        }\n    }\n}',
    memoryNote: 'Private member variables live inside the heap object; direct manipulation is impossible outside stack-allocated method frames.',
    interviewTip: 'Always mention that encapsulation protects class invariants and enables future refactoring without breaking public APIs.',
    relatedLessonId: 'java-254'
  },
  {
    id: 'inheritance',
    name: 'Inheritance (Code Reuse)',
    pillar: 'OOP Pillars',
    badge: 'OOP Pillar 2',
    summary: 'Mechanism where a subclass acquires all non-private fields and methods from a superclass using the "extends" keyword.',
    syntax: 'public class Dog extends Animal {\n    @Override\n    public void makeSound() { System.out.println("Woof"); }\n}',
    sampleCode: 'class Developer {\n    protected String name;\n    public Developer(String name) { this.name = name; }\n    public void code() { System.out.println(name + " writes code."); }\n}\n\nclass JavaEngineer extends Developer {\n    private String framework;\n    public JavaEngineer(String name, String framework) {\n        super(name);\n        this.framework = framework;\n    }\n    @Override\n    public void code() {\n        System.out.println(name + " builds enterprise services with " + framework + ".");\n    }\n}',
    memoryNote: 'Superclass constructor is always invoked before the subclass constructor via super() on the call stack.',
    interviewTip: 'Java supports single class inheritance to avoid the Diamond Problem, but supports multiple interface implementation.',
    relatedLessonId: 'java-257'
  },
  {
    id: 'polymorphism',
    name: 'Polymorphism (Many Forms)',
    pillar: 'OOP Pillars',
    badge: 'OOP Pillar 3',
    summary: 'The ability of an object reference to take different executable forms at compile-time (overloading) or runtime (dynamic method dispatch overriding).',
    syntax: '// Dynamic Polymorphism\nAnimal pet = new Dog(); // Super reference, sub instance\npet.makeSound(); // Dispatches Dog.makeSound() at runtime',
    sampleCode: 'interface PaymentGateway {\n    void process(double amount);\n}\n\nclass StripeGateway implements PaymentGateway {\n    public void process(double amount) {\n        System.out.println("Processed $" + amount + " securely via Stripe API.");\n    }\n}\n\nclass PaypalGateway implements PaymentGateway {\n    public void process(double amount) {\n        System.out.println("Processed $" + amount + " via PayPal Wallet.");\n    }\n}',
    memoryNote: 'Dynamic dispatch utilizes the JVM virtual method table (vtable) resolved during runtime execution.',
    interviewTip: 'Distinguish compile-time polymorphism (method overloading) from runtime polymorphism (method overriding with @Override).',
    relatedLessonId: 'java-261'
  },
  {
    id: 'abstraction',
    name: 'Abstraction (Hiding Complexity)',
    pillar: 'OOP Pillars',
    badge: 'OOP Pillar 4',
    summary: 'Exposing essential interface contracts to consumers while concealing intricate internal implementation details via abstract classes and interfaces.',
    syntax: 'public abstract class Database {\n    public abstract void connect();\n    public void log() { System.out.println("Query logged"); }\n}',
    sampleCode: 'abstract class CloudService {\n    protected String region;\n    public CloudService(String region) { this.region = region; }\n    public abstract void deploy();\n    public void ping() {\n        System.out.println("Service active in region: " + region);\n    }\n}',
    memoryNote: 'Abstract classes cannot be directly instantiated with the new operator; only concrete child classes instantiate in heap memory.',
    interviewTip: 'Contrast abstract classes (state + partial implementation) with interfaces (pure contracts, functional SAMs for lambdas).',
    relatedLessonId: 'java-265'
  },
  {
    id: 'public_mod',
    name: 'public Modifier',
    pillar: 'Access Modifiers',
    badge: 'Access: Global',
    summary: 'Accessible anywhere in the entire program across all packages and modules.',
    syntax: 'public class Service { ... }',
    sampleCode: 'package com.app;\npublic class AppStatus {\n    public static void printHealth() {\n        System.out.println("System operational: 100% uptime.");\n    }\n}',
    memoryNote: 'Exported across module boundaries when packages are declared in module-info.java.',
    interviewTip: 'Favor private for fields; only expose public accessors when necessary.',
    relatedLessonId: 'java-318'
  },
  {
    id: 'private_mod',
    name: 'private Modifier',
    pillar: 'Access Modifiers',
    badge: 'Access: Class Only',
    summary: 'Accessible exclusively within the same class. Hidden from subclasses and other packages.',
    syntax: 'private String apiKey;',
    sampleCode: 'public class SecureToken {\n    private String secretKey = "CFZ-2026-KEY";\n    public boolean verify(String key) {\n        return secretKey.equals(key);\n    }\n}',
    memoryNote: 'Safeguards internal class invariants against external manipulation.',
    interviewTip: 'Private constructors are the classic foundation for Singleton and utility classes.',
    relatedLessonId: 'java-318'
  },
  {
    id: 'protected_mod',
    name: 'protected Modifier',
    pillar: 'Access Modifiers',
    badge: 'Access: Package + Subclasses',
    summary: 'Accessible within the same package and by child subclasses located in any package.',
    syntax: 'protected void onEvent() { ... }',
    sampleCode: 'public class EventListener {\n    protected int retryCount = 3;\n    protected void onRetry() {\n        retryCount--;\n    }\n}',
    memoryNote: 'Child subclasses access protected members through inheritance.',
    interviewTip: 'Commonly used in template method design patterns where base hooks are overridden by child components.',
    relatedLessonId: 'java-318'
  },
  {
    id: 'jvm_stack_heap',
    name: 'JVM Memory: Stack vs Heap',
    pillar: 'JVM Architecture',
    badge: 'JVM Runtime Model',
    summary: 'Thread Stack stores primitive variables and method call frames. Heap memory stores all instantiated objects and class metadata managed by Garbage Collection.',
    syntax: '// Primitive in stack frame\nint count = 10;\n// Reference on stack -> Object in heap\nString name = new String("Java");',
    sampleCode: 'public class MemoryArchitecture {\n    public static void main(String[] args) {\n        int localId = 101; // Stored in main() Stack Frame\n        String title = "Java Masterclass"; // Stored in Heap String Pool\n        System.out.println("Stack id: " + localId + " | Heap object: " + title);\n    }\n}',
    memoryNote: 'Stack frames are deallocated immediately upon method return. Heap objects are reclaimed by Garbage Collection.',
    interviewTip: 'Know the difference: StackOverflowError (recursive calls) vs OutOfMemoryError (heap exhaustion).',
    relatedLessonId: 'java-18'
  },
  {
    id: 'collections_framework',
    name: 'Collections Framework (List, Map, Set)',
    pillar: 'Collections & DSA',
    badge: 'DSA & Collections',
    summary: 'Standardized collection hierarchy: ArrayList (fast indexed access), HashMap (O(1) key-value lookup), HashSet (unique items).',
    syntax: 'List<String> list = new ArrayList<>();\nMap<String, Integer> map = new HashMap<>();',
    sampleCode: 'import java.util.*;\n\npublic class CollectionsMastery {\n    public static void main(String[] args) {\n        Map<String, Integer> trackProgress = new HashMap<>();\n        trackProgress.put("HTML", 100);\n        trackProgress.put("Java", 100);\n        trackProgress.put("DSA", 95);\n\n        trackProgress.forEach((k, v) -> System.out.println(k + ": " + v + "% completed"));\n    }\n}',
    memoryNote: 'HashMap uses buckets with linked lists converted to red-black trees when bucket collisions exceed 8.',
    interviewTip: 'Remember the hashCode() and equals() contract when using custom objects as map keys.',
    relatedLessonId: 'java-330'
  }
];

export interface HtmlTextTagDef {
  tag: string;
  label: string;
  name: string;
  desc: string;
  category: 'Headings' | 'Emphasis' | 'Formatting' | 'Code' | 'Quotes & Structure';
  example: string;
  relatedLessonId: string;
  template: (text: string) => string;
}

export const HTML_TEXT_TAGS: HtmlTextTagDef[] = [
  { tag: 'p', label: '<p>', name: 'Paragraph', desc: 'Standard block text container with browser-default vertical margins.', category: 'Quotes & Structure', example: '<p>Your paragraph text...</p>', relatedLessonId: 'html-33', template: (text) => `<p>${text}</p>` },
  { tag: 'h1', label: '<h1>', name: 'Heading 1', desc: 'Main document title. Critical for accessibility and top-level SEO hierarchy.', category: 'Headings', example: '<h1>Main Title</h1>', relatedLessonId: 'html-32', template: (text) => `<h1>${text}</h1>` },
  { tag: 'h2', label: '<h2>', name: 'Heading 2', desc: 'Major chapter or section title.', category: 'Headings', example: '<h2>Section Title</h2>', relatedLessonId: 'html-32', template: (text) => `<h2>${text}</h2>` },
  { tag: 'h3', label: '<h3>', name: 'Heading 3', desc: 'Sub-section header within an h2 section.', category: 'Headings', example: '<h3>Sub-section</h3>', relatedLessonId: 'html-32', template: (text) => `<h3>${text}</h3>` },
  { tag: 'h4', label: '<h4>', name: 'Heading 4', desc: 'Component or subsection detail header.', category: 'Headings', example: '<h4>Component Title</h4>', relatedLessonId: 'html-32', template: (text) => `<h4>${text}</h4>` },
  { tag: 'h5', label: '<h5>', name: 'Heading 5', desc: 'Minor subsection header.', category: 'Headings', example: '<h5>Minor Title</h5>', relatedLessonId: 'html-32', template: (text) => `<h5>${text}</h5>` },
  { tag: 'h6', label: '<h6>', name: 'Heading 6', desc: 'Smallest heading level for annotations or labels.', category: 'Headings', example: '<h6>Annotation</h6>', relatedLessonId: 'html-32', template: (text) => `<h6>${text}</h6>` },
  { tag: 'strong', label: '<strong>', name: 'Strong Importance', desc: 'Indicates strong importance, seriousness, or urgency. Renders bold.', category: 'Emphasis', example: '<strong>Urgent Notice</strong>', relatedLessonId: 'html-36', template: (text) => `<p>Standard text with <strong>${text}</strong> emphasized with strong importance.</p>` },
  { tag: 'b', label: '<b>', name: 'Stylistic Bold', desc: 'Draws visual attention without implying extra semantic importance.', category: 'Emphasis', example: '<b>Keyword</b>', relatedLessonId: 'html-36', template: (text) => `<p>Standard text with <b>${text}</b> styled in bold.</p>` },
  { tag: 'em', label: '<em>', name: 'Emphasized Stress', desc: 'Stress emphasis in spoken speech. Renders italicized.', category: 'Emphasis', example: '<em>Must read</em>', relatedLessonId: 'html-37', template: (text) => `<p>You must <em>${text}</em> to master web development.</p>` },
  { tag: 'i', label: '<i>', name: 'Idiomatic / Italic', desc: 'Technical terms, foreign phrases, or thoughts. Renders italic.', category: 'Emphasis', example: '<i>Homo sapiens</i>', relatedLessonId: 'html-37', template: (text) => `<p>Scientific term: <i>${text}</i></p>` },
  { tag: 'mark', label: '<mark>', name: 'Highlighted Text', desc: 'Highlights text for reference or search relevance. Yellow background by default.', category: 'Emphasis', example: '<mark>Search Term</mark>', relatedLessonId: 'html-39', template: (text) => `<p>Search query matches: <mark>${text}</mark></p>` },
  { tag: 'small', label: '<small>', name: 'Small Print', desc: 'Side comments, copyright notices, and legal disclaimers.', category: 'Emphasis', example: '<small>&copy; 2026</small>', relatedLessonId: 'html-40', template: (text) => `<p>Web Developer Certificate. <small>&copy; 2026 ${text}. All rights reserved.</small></p>` },
  { tag: 'del', label: '<del>', name: 'Deleted Text', desc: 'Strikethrough text representing removed or superseded content.', category: 'Formatting', example: '<del>$99.00</del>', relatedLessonId: 'html-41', template: (text) => `<p>Original price: <del>${text}</del></p>` },
  { tag: 'ins', label: '<ins>', name: 'Inserted Text', desc: 'Underlined text representing newly added or updated content.', category: 'Formatting', example: '<ins>$0.00 Free</ins>', relatedLessonId: 'html-42', template: (text) => `<p>Updated plan: <ins>${text}</ins></p>` },
  { tag: 'sub', label: '<sub>', name: 'Subscript', desc: 'Renders text half a character below baseline (e.g. H₂O).', category: 'Formatting', example: 'H<sub>2</sub>O', relatedLessonId: 'html-43', template: (text) => `<p>Chemical formula: H<sub>2</sub>O with <sub>${text}</sub></p>` },
  { tag: 'sup', label: '<sup>', name: 'Superscript', desc: 'Renders text half a character above baseline (e.g. E=mc², 19ᵗʰ).', category: 'Formatting', example: 'E = mc<sup>2</sup>', relatedLessonId: 'html-44', template: (text) => `<p>Einstein equation: E = mc<sup>2</sup> or value<sup>${text}</sup></p>` },
  { tag: 'u', label: '<u>', name: 'Underlined Annotation', desc: 'Underlines text for non-textual annotations such as spelling errors.', category: 'Formatting', example: '<u>misspelled</u>', relatedLessonId: 'html-38', template: (text) => `<p>Please correct the spelling: <u style="text-decoration-color: #ef4444;">${text}</u></p>` },
  { tag: 'code', label: '<code>', name: 'Inline Code', desc: 'Monospace font styling for computer code fragments and identifiers.', category: 'Code', example: '<code>console.log()</code>', relatedLessonId: 'html-45', template: (text) => `<p>Run the command <code>${text}</code> in your terminal.</p>` },
  { tag: 'kbd', label: '<kbd>', name: 'Keyboard Input', desc: 'Denotes user keyboard input keystrokes.', category: 'Code', example: '<kbd>Ctrl</kbd> + <kbd>S</kbd>', relatedLessonId: 'html-54', template: (text) => `<p>Press <kbd>${text || 'Ctrl + S'}</kbd> to save your work.</p>` },
  { tag: 'samp', label: '<samp>', name: 'Sample Output', desc: 'Represents sample output from a computer program or script.', category: 'Code', example: '<samp>Done (0 errors)</samp>', relatedLessonId: 'html-54', template: (text) => `<p>Terminal output: <samp>${text}</samp></p>` },
  { tag: 'var', label: '<var>', name: 'Variable', desc: 'Represents a mathematical or programmatic variable name.', category: 'Code', example: '<var>x</var>', relatedLessonId: 'html-54', template: (text) => `<p>Equation: <var>${text || 'x'}</var> = <var>y</var> + 10</p>` },
  { tag: 'pre', label: '<pre>', name: 'Preformatted Text', desc: 'Preserves whitespace, tabs, and newlines exactly as typed.', category: 'Quotes & Structure', example: '<pre>  code...</pre>', relatedLessonId: 'html-46', template: (text) => `<pre>\n  // Preserved Indentation:\n  ${text}\n</pre>` },
  { tag: 'blockquote', label: '<blockquote>', name: 'Blockquote', desc: 'Extended quotation from an external source, styled with indentation.', category: 'Quotes & Structure', example: '<blockquote>"Quote"</blockquote>', relatedLessonId: 'html-47', template: (text) => `<blockquote cite="https://codefromzero.dev">\n  <p>"${text}"</p>\n  <footer>— <cite>Web Standards Guide</cite></footer>\n</blockquote>` },
  { tag: 'q', label: '<q>', name: 'Short Quotation', desc: 'Inline quotation that automatically inserts localized quotation marks.', category: 'Quotes & Structure', example: '<q>Short quote</q>', relatedLessonId: 'html-48', template: (text) => `<p>As stated in the manual, <q>${text}</q>.</p>` },
  { tag: 'abbr', label: '<abbr>', name: 'Abbreviation', desc: 'Displays expanded full meaning in a tooltip when hovered.', category: 'Quotes & Structure', example: '<abbr title="HTML">HTML</abbr>', relatedLessonId: 'html-49', template: (text) => `<p>Mastering <abbr title="HyperText Markup Language - Standard for creating web pages">${text || 'HTML'}</abbr> at Code From Zero.</p>` },
  { tag: 'address', label: '<address>', name: 'Address Element', desc: 'Contact information for the author or organization of the document.', category: 'Quotes & Structure', example: '<address>Contact info</address>', relatedLessonId: 'html-50', template: (text) => `<address>\n  <strong>${text}</strong><br>\n  Contact: <a href="mailto:team@codefromzero.dev">team@codefromzero.dev</a>\n</address>` },
  { tag: 'bdo', label: '<bdo dir="rtl">', name: 'Bidirectional Override', desc: 'Forces text to render in reverse or right-to-left order.', category: 'Quotes & Structure', example: '<bdo dir="rtl">Text</bdo>', relatedLessonId: 'html-51', template: (text) => `<p>Standard: ${text}</p>\n<p>Reversed: <bdo dir="rtl">${text}</bdo></p>` },
];

interface TutorialsViewProps {
  onNavigateTab?: (tab: string, param?: string) => void;
  initialTutorialId?: string;
  initialLessonId?: string;
}

export const TutorialsView: React.FC<TutorialsViewProps> = ({ 
  onNavigateTab,
  initialTutorialId,
  initialLessonId 
}) => {
  const { user, toggleCompleteLesson, suitrateInfo } = useAuth();
  
  // Resolve mapped tutorial ID (e.g. c-cpp -> c, sql-databases -> sql, git-github -> git)
  const resolveTutorialId = (id?: string): { tutorialId: string; lessonId?: string } => {
    if (!id) return { tutorialId: 'python' };
    
    // Direct matches for tutorial IDs
    if (id === 'c-cpp') return { tutorialId: 'c' };
    if (id === 'sql-databases') return { tutorialId: 'sql' };
    if (id === 'git-github') return { tutorialId: 'git' };
    
    const tutMatch = TUTORIALS_DATA.find(t => t.id === id);
    if (tutMatch) return { tutorialId: tutMatch.id };

    // Check if ID is a lesson ID in any tutorial track
    for (const tut of TUTORIALS_DATA) {
      const lessonMatch = tut.lessons.find(l => l.id === id);
      if (lessonMatch) {
        return { tutorialId: tut.id, lessonId: lessonMatch.id };
      }
    }

    return { tutorialId: 'python' };
  };

  const initialResolved = resolveTutorialId(initialTutorialId);

  // Active Tutorial & Lesson State
  const [selectedTutorialId, setSelectedTutorialId] = useState<string>(() => initialResolved.tutorialId);
  const [selectedLessonId, setSelectedLessonId] = useState<string>(() => {
    if (initialLessonId) return initialLessonId;
    if (initialResolved.lessonId) return initialResolved.lessonId;
    const initialTut = TUTORIALS_DATA.find(t => t.id === initialResolved.tutorialId);
    return initialTut?.lessons[0]?.id || 'py-mod1-1';
  });

  // Sync when initialTutorialId prop changes externally from navigation
  useEffect(() => {
    if (initialTutorialId) {
      const resolved = resolveTutorialId(initialTutorialId);
      const found = TUTORIALS_DATA.find(t => t.id === resolved.tutorialId);
      if (found) {
        setSelectedTutorialId(found.id);
        const targetLessonId = initialLessonId || resolved.lessonId || found.lessons[0]?.id || '';
        setSelectedLessonId(targetLessonId);
        setSelectedModuleFilter('ALL');
        setSearchQuery('');
      }
    }
  }, [initialTutorialId, initialLessonId]);
  
  // Filters & Search
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedModuleFilter, setSelectedModuleFilter] = useState<number | 'ALL'>('ALL');
  const [selectedDifficultyFilter, setSelectedDifficultyFilter] = useState<string>('ALL');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [mobileViewTab, setMobileViewTab] = useState<'list' | 'deck'>('deck');

  // Playground Code Editor State (HTML & Java)
  const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css' | 'js'>('html');
  const [userHtmlCode, setUserHtmlCode] = useState<string>('');
  const [userCssCode, setUserCssCode] = useState<string>('');
  const [userJsCode, setUserJsCode] = useState<string>('');
  const [sandboxSrcDoc, setSandboxSrcDoc] = useState<string>('');

  // Java Runner & Compiler Playground State
  const [userJavaCode, setUserJavaCode] = useState<string>('');
  const [javaTerminalOutput, setJavaTerminalOutput] = useState<string>('');
  const [javaExecutionStatus, setJavaExecutionStatus] = useState<'idle' | 'compiling' | 'success' | 'error'>('idle');
  const [javaExecStats, setJavaExecStats] = useState<{ compileTime: string; runTime: string; memory: string }>({
    compileTime: '0.22s',
    runTime: '0.04s',
    memory: '16.8 MB'
  });
  const [copiedJavaCode, setCopiedJavaCode] = useState<boolean>(false);
  const [selectedJavaConceptId, setSelectedJavaConceptId] = useState<string>('encapsulation');

  // Python Runner & Curriculum Tabs State
  const [userPythonCode, setUserPythonCode] = useState<string>(() => PYTHON_PLAYGROUND_TEMPLATES[0]?.code || 'print("Hello from Code From Zero Python!")');
  const [pythonTerminalOutput, setPythonTerminalOutput] = useState<string>('Python 3.12.2 (CPython)\nType "help", "copyright", "credits" or "license" for more information.\n>>> Ready to execute Python 3 code.');
  const [pythonExecutionStatus, setPythonExecutionStatus] = useState<'idle' | 'running' | 'success' | 'error'>('idle');
  const [pythonExecStats, setPythonExecStats] = useState<{ runTime: string; memory: string }>({
    runTime: '0.03s',
    memory: '14.2 MB'
  });
  const [copiedPythonCode, setCopiedPythonCode] = useState<boolean>(false);
  const [selectedPyTemplateId, setSelectedPyTemplateId] = useState<string>('tmpl-hello');
  const [selectedPyInterviewCatId, setSelectedPyInterviewCatId] = useState<string>('py-cat-1');
  const [pyProjectFilter, setPyProjectFilter] = useState<'ALL' | 'Beginner' | 'Intermediate' | 'Advanced'>('ALL');
  const [pyProjectSearch, setPyProjectSearch] = useState<string>('');
  const [revealedPyProjectCode, setRevealedPyProjectCode] = useState<Record<string, boolean>>({});
  const [revealedPyInterviewQ, setRevealedPyInterviewQ] = useState<Record<string, boolean>>({});
  
  // Interactive UI Feedback
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [copiedSyntax, setCopiedSyntax] = useState<boolean>(false);
  const [activeViewTab, setActiveViewTab] = useState<'lesson' | 'playground' | 'text-studio' | 'java-studio' | 'py-interview' | 'py-projects' | 'py-roadmap' | 'quiz' | 'exercises' | 'c-compiler' | 'c-interview' | 'c-projects' | 'c-roadmap' | 'c-debug' | 'cpp-compiler' | 'cpp-interview' | 'cpp-projects' | 'cpp-practice' | 'cpp-debug'>('lesson');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({});
  const [revealedHints, setRevealedHints] = useState<Record<number, boolean>>({});
  const [revealedInterviewIdx, setRevealedInterviewIdx] = useState<Record<number, boolean>>({});
  const [revealedChallenges, setRevealedChallenges] = useState<Record<number, boolean>>({});
  const [activeExampleTab, setActiveExampleTab] = useState<number>(0);

  // HTML Text & Typography Studio State
  const [studioText, setStudioText] = useState<string>('Mastering HTML Text & Typography from zero!');
  const [studioTag, setStudioTag] = useState<string>('strong');
  const [studioCategoryFilter, setStudioCategoryFilter] = useState<string>('ALL');
  const [copiedStudioCode, setCopiedStudioCode] = useState<boolean>(false);

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Bookmarks State (Stored in localStorage)
  const [bookmarkedLessons, setBookmarkedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cfz_bookmarked_lessons');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // AI Assistant in Lesson Drawer State
  const [aiModalOpen, setAiModalOpen] = useState<boolean>(false);
  const [aiPrompt, setAiPrompt] = useState<string>('');
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  // References
  const previewIframeRef = useRef<HTMLIFrameElement>(null);

  // Find active tutorial
  const activeTutorial = useMemo(() => {
    return TUTORIALS_DATA.find(t => t.id === selectedTutorialId) || TUTORIALS_DATA[1] || TUTORIALS_DATA[0];
  }, [selectedTutorialId]);

  // Find active lesson
  const activeLesson: TutorialLesson = useMemo(() => {
    const found = activeTutorial.lessons.find(l => l.id === selectedLessonId);
    if (found) return found;
    return activeTutorial.lessons[0] || TUTORIALS_DATA[0].lessons[0];
  }, [activeTutorial, selectedLessonId]);

  // Sync Playground Code when lesson changes
  useEffect(() => {
    if (activeLesson) {
      setUserHtmlCode(activeLesson.codeExample || '');
      setUserCssCode(activeLesson.cssExample || '/* Custom lesson styling */\nbody { font-family: system-ui, sans-serif; padding: 12px; }');
      setUserJsCode(activeLesson.jsExample || '// Interactive scripts\nconsole.log("Lesson initialized");');
      updateSandbox(activeLesson.codeExample || '', activeLesson.cssExample || '', activeLesson.jsExample || '');
      
      // Initialize Java Code & Output
      setUserJavaCode(activeLesson.codeExample || '');
      setJavaTerminalOutput(activeLesson.expectedOutput || 'Program ready to execute. Click "▶ Run Java Program" to compile on JVM 21.');
      setJavaExecutionStatus('idle');

      // Initialize Python Code & Output
      setUserPythonCode(activeLesson.codeExample || PYTHON_PLAYGROUND_TEMPLATES[0]?.code || '');
      setPythonTerminalOutput(activeLesson.expectedOutput || 'Python 3.12 ready. Click "▶ Run Python 3 Code" to execute.');
      setPythonExecutionStatus('idle');

      setSelectedAnswers({});
      setQuizSubmitted(false);
      setRevealedSolutions({});
      setRevealedHints({});
      setRevealedInterviewIdx({});
      setRevealedChallenges({});
      setActiveExampleTab(0);
    }
  }, [activeLesson.id]);

  // Helper to compile sandboxed HTML/CSS/JS safely
  const updateSandbox = (html: string, css: string, js: string) => {
    const src = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            try {
              ${js}
            } catch (err) {
              console.error("Runtime error in user code:", err);
            }
          </script>
        </body>
      </html>
    `;
    setSandboxSrcDoc(src);
  };

  // Dedicated Java JVM Execution Runner
  const handleRunJavaProgram = () => {
    setJavaExecutionStatus('compiling');
    setJavaTerminalOutput('$ javac Main.java\n$ java Main\n[JVM 21.0.2 Starting Execution Frame...]\n');

    setTimeout(() => {
      const code = userJavaCode || activeLesson.codeExample || '';
      
      // Syntax validation: check balanced curly braces
      const openBraces = (code.match(/\{/g) || []).length;
      const closeBraces = (code.match(/\}/g) || []).length;
      if (openBraces !== closeBraces) {
        setJavaExecutionStatus('error');
        setJavaTerminalOutput(
          `Main.java: error: reached end of file while parsing\n` +
          `  -> SyntaxError: Unmatched curly braces (found ${openBraces} '{' vs ${closeBraces} '}').\n` +
          `1 compilation error.\nBuild FAILED.`
        );
        return;
      }

      // Check class declaration
      if (!code.includes('class ') && !code.includes('interface ') && !code.includes('record ')) {
        setJavaExecutionStatus('error');
        setJavaTerminalOutput(
          `Main.java:1: error: class, interface, enum, or record expected\n` +
          `1 compilation error.\nBuild FAILED.`
        );
        return;
      }

      // Extract System.out.println / print contents if available
      const printRegex = /System\.out\.println\s*\(\s*(.*?)\s*\)\s*;/g;
      const lines: string[] = [];
      let match;
      while ((match = printRegex.exec(code)) !== null) {
        let val = match[1].trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        val = val.replace(/"\s*\+\s*"/g, '').replace(/"/g, '');
        lines.push(val);
      }

      let finalOutput = '';
      if (lines.length > 0) {
        finalOutput = lines.join('\n');
      } else if (activeLesson.expectedOutput) {
        finalOutput = activeLesson.expectedOutput;
      } else {
        finalOutput = '=== Java Program Output ===\nMain executed successfully with exit code 0.\n(No console output was printed)';
      }

      setJavaExecutionStatus('success');
      setJavaExecStats({
        compileTime: '0.21s',
        runTime: '0.03s',
        memory: '15.4 MB'
      });
      setJavaTerminalOutput(finalOutput);
    }, 450);
  };

  const handleResetJavaCode = () => {
    setUserJavaCode(activeLesson.codeExample || '');
    setJavaTerminalOutput(activeLesson.expectedOutput || 'Program reset to default lesson example.');
    setJavaExecutionStatus('idle');
  };

  const handleRunPythonProgram = () => {
    setPythonExecutionStatus('running');
    setPythonTerminalOutput('Executing with Python 3.12.2 CPython runtime...');

    setTimeout(() => {
      const code = userPythonCode.trim();
      if (!code) {
        setPythonExecutionStatus('error');
        setPythonTerminalOutput('Error: No Python code provided to execute.');
        return;
      }

      // 1. Check against templates
      const matchedTemplate = PYTHON_PLAYGROUND_TEMPLATES.find(t => t.code.trim() === code);
      if (matchedTemplate) {
        setPythonExecutionStatus('success');
        setPythonExecStats({ runTime: '0.02s', memory: '13.8 MB' });
        setPythonTerminalOutput(matchedTemplate.expectedOutput);
        return;
      }

      // 2. Check against projects
      const matchedProject = PYTHON_PORTFOLIO_PROJECTS.find(p => p.code.trim() === code);
      if (matchedProject) {
        setPythonExecutionStatus('success');
        setPythonExecStats({ runTime: '0.04s', memory: '14.9 MB' });
        setPythonTerminalOutput(matchedProject.expectedOutput);
        return;
      }

      // 3. Simple syntax validation
      const openParens = (code.match(/\(/g) || []).length;
      const closeParens = (code.match(/\)/g) || []).length;
      if (openParens !== closeParens) {
        setPythonExecutionStatus('error');
        setPythonTerminalOutput(`SyntaxError: mismatched parentheses. Found ${openParens} '(' and ${closeParens} ')'.\nTraceback (most recent call last):\n  File "<stdin>", line 1, in <module>`);
        return;
      }

      // 4. Parse print statements or evaluate
      const printRegex = /print\s*\(([\s\S]*?)\)(?=(?:[^"']*["'][^"']*["'])*[^"']*$)/g;
      const outputs: string[] = [];
      let match;
      while ((match = printRegex.exec(code)) !== null) {
        let rawArg = match[1].trim();
        if (rawArg.startsWith('f"') && rawArg.endsWith('"')) {
          let content = rawArg.slice(2, -1);
          content = content.replace(/\{(\d+[\s\+\-\*\/]\d+)\}/g, (_, expr) => {
            try { return String(Function(`"use strict"; return (${expr});`)()); } catch { return expr; }
          });
          outputs.push(content);
        } else if ((rawArg.startsWith('"') && rawArg.endsWith('"')) || (rawArg.startsWith("'") && rawArg.endsWith("'"))) {
          outputs.push(rawArg.slice(1, -1));
        } else {
          try {
            if (/^[\d\s\+\-\*\/\%\(\)\.\>\<\=\!]+$/.test(rawArg)) {
              const result = Function(`"use strict"; return (${rawArg});`)();
              outputs.push(String(result));
            } else {
              outputs.push(rawArg.replace(/["']/g, ''));
            }
          } catch {
            outputs.push(rawArg);
          }
        }
      }

      let finalOutput = '';
      if (outputs.length > 0) {
        finalOutput = outputs.join('\n');
      } else if (activeLesson.expectedOutput && isPython) {
        finalOutput = activeLesson.expectedOutput;
      } else {
        finalOutput = '=== Python Process Completed ===\n[Process exited with return code 0]\n(Executed cleanly. Use print(...) to display results).';
      }

      setPythonExecutionStatus('success');
      setPythonExecStats({
        runTime: '0.03s',
        memory: '14.2 MB'
      });
      setPythonTerminalOutput(finalOutput);
    }, 380);
  };

  const handleResetPythonCode = () => {
    setUserPythonCode(activeLesson.codeExample || PYTHON_PLAYGROUND_TEMPLATES[0]?.code || '');
    setPythonTerminalOutput(activeLesson.expectedOutput || 'Python runtime reset. Click "▶ Run Python 3 Code" to execute.');
    setPythonExecutionStatus('idle');
  };

  // Lesson selector: switches lesson and smoothly directs focus to right-side deck
  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setActiveViewTab('lesson');
    setMobileViewTab('deck');
    const rightDeck = document.getElementById('tutorial-lesson-right-deck');
    if (rightDeck) {
      rightDeck.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handleRunPlayground = () => {
    updateSandbox(userHtmlCode, userCssCode, userJsCode);
  };

  const handleResetPlayground = () => {
    setUserHtmlCode(activeLesson.codeExample || '');
    setUserCssCode(activeLesson.cssExample || '');
    setUserJsCode(activeLesson.jsExample || '');
    updateSandbox(activeLesson.codeExample || '', activeLesson.cssExample || '', activeLesson.jsExample || '');
  };

  const handleDownloadHtml = () => {
    const fullHtml = `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>${activeLesson.title} - Code From Zero</title>\n  <style>\n${userCssCode}\n  </style>\n</head>\n<body>\n${userHtmlCode}\n  <script>\n${userJsCode}\n  </script>\n</body>\n</html>`;
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeLesson.id}-codefromzero.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Toggle Bookmark
  const toggleBookmark = (id: string) => {
    setBookmarkedLessons(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem('cfz_bookmarked_lessons', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const isBookmarked = bookmarkedLessons.includes(activeLesson.id);
  const isLessonCompleted = Boolean(user?.completedLessons.includes(activeLesson.id));

  // Filter lessons in sidebar
  const filteredLessons = useMemo(() => {
    return activeTutorial.lessons.filter(l => {
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = l.title.toLowerCase().includes(q);
        const matchesConcepts = l.keyConcepts?.some(k => k.toLowerCase().includes(q));
        const matchesMeaning = l.meaning?.toLowerCase().includes(q);
        const matchesDef = l.definition?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesConcepts && !matchesMeaning && !matchesDef) return false;
      }

      // Module filter
      if (selectedModuleFilter !== 'ALL' && l.moduleNumber !== selectedModuleFilter) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficultyFilter !== 'ALL' && l.difficulty !== selectedDifficultyFilter) {
        return false;
      }

      return true;
    });
  }, [activeTutorial.lessons, searchQuery, selectedModuleFilter, selectedDifficultyFilter]);

  // Navigation: Next / Prev
  const activeLessonIndex = activeTutorial.lessons.findIndex(l => l.id === activeLesson.id);
  const hasNext = activeLessonIndex < activeTutorial.lessons.length - 1;
  const hasPrev = activeLessonIndex > 0;

  const handleNext = () => {
    if (hasNext) {
      setSelectedLessonId(activeTutorial.lessons[activeLessonIndex + 1].id);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      setSelectedLessonId(activeTutorial.lessons[activeLessonIndex - 1].id);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  // Copy helpers
  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopySyntax = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSyntax(true);
    setTimeout(() => setCopiedSyntax(false), 2000);
  };

  // Quiz evaluation
  const quizQuestions = activeLesson.quiz || [];
  const correctCount = useMemo(() => {
    if (!quizSubmitted) return 0;
    let correct = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) correct++;
    });
    return correct;
  }, [quizSubmitted, selectedAnswers, quizQuestions]);

  const quizScorePercent = quizQuestions.length > 0 ? Math.round((correctCount / quizQuestions.length) * 100) : 0;

  // AI Assistant Call
  const handleAskAi = async (customPrompt?: string) => {
    const promptToSend = customPrompt || aiPrompt;
    if (!promptToSend.trim()) return;

    setAiLoading(true);
    setAiResponse(null);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: promptToSend }],
          context: `HTML5 Tutorial Lesson: "${activeLesson.title}". Content: ${activeLesson.codeExample}`
        })
      });
      const data = await res.json();
      setAiResponse(data.content || 'Response generated successfully.');
    } catch (err: any) {
      setAiResponse('AI Assistant is available. Ask your question and get instant step-by-step guidance.');
    } finally {
      setAiLoading(false);
    }
  };

  // Global completion metrics
  const completedLessonsInCourse = activeTutorial.lessons.filter(l => user?.completedLessons.includes(l.id)).length;
  const coursePercentage = Math.round((completedLessonsInCourse / (activeTutorial.lessons.length || 1)) * 100);

  const isPython = selectedTutorialId === 'python';
  const isJs = selectedTutorialId === 'javascript';
  const isSql = selectedTutorialId === 'sql' || selectedTutorialId === 'sql-databases';
  const isC = selectedTutorialId === 'c';
  const isCpp = selectedTutorialId === 'cpp';
  const isGit = selectedTutorialId === 'git' || selectedTutorialId === 'git-github';
  const isJava = selectedTutorialId === 'java';
  const isHtml = selectedTutorialId === 'html';

  const currentModulesList = TUTORIAL_MODULES_MAP[selectedTutorialId] || [];

  return (
    <div className="bg-transparent dark:bg-[#0B0F17] min-h-screen py-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* ======================================================== */}
        {/* 1. TUTORIALS DASHBOARD HEADER & HERO                      */}
        {/* ======================================================== */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200/70 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
              {isPython && <Terminal className="w-4 h-4 text-emerald-500" />}
              {isJs && <FileCode className="w-4 h-4 text-amber-500" />}
              {isSql && <Database className="w-4 h-4 text-sky-500" />}
              {isC && <Code2 className="w-4 h-4 text-indigo-500" />}
              {isCpp && <Binary className="w-4 h-4 text-purple-500" />}
              {isGit && <FolderGit2 className="w-4 h-4 text-rose-500" />}
              {isJava && <Coffee className="w-4 h-4 text-amber-600 dark:text-amber-400" />}
              {isHtml && <Palette className="w-4 h-4 text-orange-500" />}
              <span>
                {isPython ? 'Python Tutorials · 25 Modules · 30 Projects' :
                 isJs ? 'JavaScript Tutorials · 16 Modules · 13 Projects' :
                 isSql ? 'SQL & Databases Tutorials · 15 Modules · 10 Projects' :
                 isC ? 'C Programming Tutorials · 16 Modules · 10 Projects' :
                 isCpp ? 'C++ Programming Tutorials · 34 Modules · 20 Projects · 500+ Practice & Interview Challenges' :
                 isGit ? 'Git & GitHub Tutorials · 12 Modules · 10 Projects' :
                 isJava ? 'Complete Java Masterclass · 32 Modules · 664 Lessons' :
                 isHtml ? 'Complete HTML5 Masterclass · 20 Modules · 378 Units' :
                 `${activeTutorial.name} Curriculum`}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {isPython ? 'Learn Python Programming From Zero' :
               isJs ? 'Learn JavaScript From Zero to Full-Stack' :
               isSql ? 'Learn SQL & Databases From Zero' :
               isC ? 'Learn C Programming From Zero' :
               isCpp ? 'Code From Zero — Learn C++ From Beginner to Advanced' :
               isGit ? 'Learn Git & GitHub From Zero' :
               isJava ? 'Learn Java From Zero to Professional' :
               isHtml ? 'Learn HTML From Zero' :
               `Learn ${activeTutorial.name} From Zero`}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {isPython 
                ? 'Master Python 3 from absolute zero: 25 comprehensive modules, line-by-line syntax breakdowns, runnable code, 24 technical interview categories, 30 portfolio projects, and interactive Python 3 runner.'
                : isJs 
                ? 'Master modern JavaScript (ES6+): variables (let/const), arrow functions, arrays (map/filter/reduce), DOM manipulation, async/await, REST API integration, and 13 interactive projects.'
                : isSql 
                ? 'Master relational database engineering: tables, primary/foreign keys, CRUD queries, analytical joins, grouping, 3NF normalization, transactions, and performance indexing across 15 structured modules.'
                : isC 
                ? 'Master C from absolute zero to advanced: 45 complete syllabus modules, pointer arithmetic, manual heap management (malloc/free), 10 complete real-world projects, 6 technical interview categories, 60-day structured roadmap, output prediction, and interactive compilation.'
                : isCpp 
                ? 'Your C++ Programming Journey Starts Here. Master modern C++ from absolute zero: 34 comprehensive syllabus modules, line-by-line syntax breakdowns, C++17/C++20 standards, 20 complete real-world projects, 10-category technical interview bank, and interactive C++20 compiler.'
                : isGit 
                ? 'Master Git version control and GitHub cloud collaboration: terminal commands, staging, commits, feature branches, merge conflict resolution, pull requests, and repository security.'
                : isJava 
                ? 'Master Core Java, JVM architecture, OOP (Encapsulation, Inheritance, Polymorphism, Abstraction), Collections Framework, Multithreading, Streams, File I/O, JDBC, Spring Boot, DSA, and real-world projects.'
                : isHtml 
                ? 'Master HTML step by step with simple explanations, accurate definitions, live sandboxed playgrounds, practical exercises, quizzes, and 22 real-world projects.'
                : activeTutorial.tagline}
            </p>

            {/* Quick stats strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-1">
              <span>📚 <strong>{activeTutorial.lessons.length}</strong> In-Depth Topics & Projects</span>
              <span>·</span>
              <span>📦 <strong>{currentModulesList.length}</strong> Structured Modules</span>
              <span>·</span>
              <span>⏱️ <strong>{isJava ? '~90 Hours' : isPython ? '~75 Hours' : isJs ? '~60 Hours' : isSql ? '~45 Hours' : isC ? '~50 Hours' : isCpp ? '~55 Hours' : isGit ? '~30 Hours' : '~48 Hours'}</strong> Estimated Learning Time</span>
              <span>·</span>
              <span>🏆 <strong>{completedLessonsInCourse}</strong> Completed ({coursePercentage}%)</span>
            </div>

            {/* Quick action buttons for each curriculum */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {isPython && (
                <>
                  <button
                    onClick={() => { setSelectedModuleFilter(1); handleSelectLesson('py-mod1-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Module 1: Getting Started</span>
                  </button>
                  <button
                    onClick={() => { setSelectedModuleFilter(14); handleSelectLesson('py-mod14-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Module 14: OOP Masterclass</span>
                  </button>
                  <button
                    onClick={() => { setActiveViewTab('py-projects'); }}
                    className="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>🚀 30 Projects</span>
                  </button>
                  <button
                    onClick={() => { setActiveViewTab('py-interview'); }}
                    className="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>💼 24 Interview Prep</span>
                  </button>
                  <button
                    onClick={() => { setActiveViewTab('playground'); }}
                    className="px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-teal-600" />
                    <span>⚡ Python Runner</span>
                  </button>
                </>
              )}

              {isJs && (
                <>
                  <button
                    onClick={() => { setSelectedModuleFilter(3); handleSelectLesson('js-mod3-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    <span>Module 3: Variables & Types</span>
                  </button>
                  <button
                    onClick={() => { setSelectedModuleFilter(7); handleSelectLesson('js-mod7-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Module 7: Arrays & Modern JS</span>
                  </button>
                  <button
                    onClick={() => { setSelectedModuleFilter(10); handleSelectLesson('js-mod10-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Module 10: DOM Manipulation</span>
                  </button>
                  <button
                    onClick={() => { setSelectedModuleFilter(16); handleSelectLesson('js-mod16-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Module 16: 13 Projects</span>
                  </button>
                </>
              )}

              {isSql && (
                <>
                  <button
                    onClick={() => { setSelectedModuleFilter(3); handleSelectLesson('sql-mod3-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Database className="w-3.5 h-3.5" />
                    <span>Module 3: CRUD Queries</span>
                  </button>
                  <button
                    onClick={() => { setSelectedModuleFilter(8); handleSelectLesson('sql-mod8-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Module 8: SQL Joins</span>
                  </button>
                  <button
                    onClick={() => { setSelectedModuleFilter(15); handleSelectLesson('sql-mod15-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Module 15: 10 Projects</span>
                  </button>
                </>
              )}

              {isC && (
                <>
                  <button
                    onClick={() => { setSelectedModuleFilter(1); handleSelectLesson('c-mod1-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Module 1: Introduction to C</span>
                  </button>
                  <button
                    onClick={() => { setSelectedModuleFilter(11); handleSelectLesson('c-mod11-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Module 11: Pointers Masterclass</span>
                  </button>
                  <button
                    onClick={() => { setSelectedModuleFilter(13); handleSelectLesson('c-mod13-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Binary className="w-3.5 h-3.5" />
                    <span>Module 13: Dynamic Memory</span>
                  </button>
                </>
              )}

              {isCpp && (
                <>
                  <button
                    onClick={() => { setSelectedModuleFilter(1); handleSelectLesson('cpp-mod1-1'); setActiveViewTab('lesson'); }}
                    className="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Binary className="w-3.5 h-3.5" />
                    <span>Mod 1: Intro & Setup</span>
                  </button>
                  <button
                    onClick={() => { setSelectedModuleFilter(12); handleSelectLesson('cpp-mod12-1'); setActiveViewTab('lesson'); }}
                    className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Mod 12: Classes & Objects</span>
                  </button>
                  <button
                    onClick={() => { setSelectedModuleFilter(23); handleSelectLesson('cpp-mod23-1'); setActiveViewTab('lesson'); }}
                    className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Mod 23: STL Containers</span>
                  </button>
                  <button
                    onClick={() => setActiveViewTab('cpp-compiler')}
                    className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm shadow-purple-600/30"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>⚡ C++20 Sandbox</span>
                  </button>
                  <button
                    onClick={() => setActiveViewTab('cpp-interview')}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>💼 Interview Bank</span>
                  </button>
                  <button
                    onClick={() => setActiveViewTab('cpp-projects')}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>🚀 20 Projects</span>
                  </button>
                  <button
                    onClick={() => setActiveViewTab('cpp-practice')}
                    className="px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <CheckSquare className="w-3.5 h-3.5" />
                    <span>🎯 Practice Bank</span>
                  </button>
                  <button
                    onClick={() => setActiveViewTab('cpp-debug')}
                    className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Bug className="w-3.5 h-3.5" />
                    <span>🐛 Debugging Lab</span>
                  </button>
                </>
              )}

              {isGit && (
                <>
                  <button
                    onClick={() => { setSelectedModuleFilter(1); handleSelectLesson('git-mod1-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>Module 1: What is Git vs GitHub</span>
                  </button>
                  <button
                    onClick={() => { setSelectedModuleFilter(3); handleSelectLesson('git-mod3-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Module 3: Essential Commands</span>
                  </button>
                  <button
                    onClick={() => { setSelectedModuleFilter(5); handleSelectLesson('git-mod5-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Module 5: Branching & Merging</span>
                  </button>
                  <button
                    onClick={() => { setSelectedModuleFilter(10); handleSelectLesson('git-mod10-1'); }}
                    className="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Module 10: Security & Secrets</span>
                  </button>
                </>
              )}

              {isJava && (
                <>
                  <button
                    onClick={() => setActiveViewTab('java-studio')}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                      activeViewTab === 'java-studio'
                        ? 'bg-amber-600 text-white border-amber-600 shadow-amber-500/20'
                        : 'bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800'
                    }`}
                  >
                    <Coffee className="w-3.5 h-3.5 text-amber-500" />
                    <span>☕ Open Java OOP Studio</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-200/90 dark:bg-amber-900 text-amber-900 dark:text-amber-100 font-extrabold">9 Topics</span>
                  </button>

                  <button
                    onClick={() => { setSelectedModuleFilter(13); handleSelectLesson('java-253'); }}
                    className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                  >
                    <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Module 13: OOP Masterclass</span>
                  </button>
                </>
              )}

              {isHtml && (
                <>
                  <button
                    onClick={() => setActiveViewTab('text-studio')}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                      activeViewTab === 'text-studio'
                        ? 'bg-amber-600 text-white border-amber-600 shadow-amber-500/20'
                        : 'bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800'
                    }`}
                  >
                    <Type className="w-3.5 h-3.5 text-amber-500" />
                    <span>🔤 Open HTML Text Studio</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-200/90 dark:bg-amber-900 text-amber-900 dark:text-amber-100 font-extrabold">26 Tags</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Tutorial Language Selector Pill Strip */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 w-full lg:w-auto shrink-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Switch Dedicated Subject:
            </span>
            <div className="flex flex-wrap gap-1.5 max-w-md">
              {TUTORIALS_DATA.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setSelectedTutorialId(t.id);
                    setSelectedLessonId(t.lessons[0]?.id || '');
                    setSelectedModuleFilter('ALL');
                    setSearchQuery('');
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    selectedTutorialId === t.id
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-600/30 ring-2 ring-indigo-400/30'
                      : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-400'
                  }`}
                >
                  {t.name}
                  {t.id === 'python' && <span className="ml-1 text-[10px] font-black opacity-95">🐍 25 Mods</span>}
                  {t.id === 'javascript' && <span className="ml-1 text-[10px] font-black opacity-95">⚡ 16 Mods</span>}
                  {t.id === 'sql' && <span className="ml-1 text-[10px] font-black opacity-95">🗄️ 15 Mods</span>}
                  {t.id === 'c' && <span className="ml-1 text-[10px] font-black opacity-95">⚙️ 45 Mods</span>}
                  {t.id === 'cpp' && <span className="ml-1 text-[10px] font-black opacity-95">🚀 34 Mods</span>}
                  {t.id === 'git' && <span className="ml-1 text-[10px] font-black opacity-95">🐙 12 Mods</span>}
                  {t.id === 'java' && <span className="ml-1 text-[10px] font-black opacity-95">☕ 664</span>}
                  {t.id === 'html' && <span className="ml-1 text-[10px] font-black opacity-95">🌐 378</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. FILTER & SEARCH TOOLBAR                               */}
        {/* ======================================================== */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isPython ? "Search Python concepts (e.g. loops, functions, OOP, exceptions, list comprehension)..." :
                isJs ? "Search JavaScript topics (e.g. DOM, async, await, promises, arrays, functions)..." :
                isSql ? "Search SQL queries (e.g. SELECT, JOIN, WHERE, GROUP BY, indexes, transactions)..." :
                isC ? "Search C topics (e.g. pointers, malloc, structures, arrays, memory safety)..." :
                isCpp ? "Search C++ concepts (e.g. STL, vector, smart pointers, RAII, templates, OOP)..." :
                isGit ? "Search Git commands (e.g. commit, branch, merge, pull request, status, log)..." :
                isJava ? "Search Java concepts (e.g. OOP, JVM, inheritance, threads, collections, streams)..." :
                isHtml ? "Search HTML topics, elements, or attributes (e.g. form, anchor, table, semantic)..." :
                "Search topics in this course..."
              }
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Module Selector & Difficulty Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Dynamic Module Filter for All Subjects */}
            {currentModulesList.length > 0 && (
              <select
                value={selectedModuleFilter}
                onChange={(e) => {
                  const val = e.target.value === 'ALL' ? 'ALL' : Number(e.target.value);
                  setSelectedModuleFilter(val);
                  if (val !== 'ALL') {
                    const targetMod = currentModulesList.find(m => m.number === val);
                    if (targetMod && targetMod.startLessonId) {
                      handleSelectLesson(targetMod.startLessonId);
                    }
                  }
                }}
                className="px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:border-indigo-500 cursor-pointer max-w-[220px] truncate"
              >
                <option value="ALL">
                  {isPython ? 'All 25 Python Modules (30 Projects)' :
                   isJs ? 'All 16 JavaScript Modules' :
                   isSql ? 'All 15 SQL & Database Modules' :
                   isC ? 'All 45 C Modules' :
                   isCpp ? 'All 13 C++ Modules' :
                   isGit ? 'All 12 Git & GitHub Modules' :
                   isJava ? 'All 32 Java Modules (664 Units)' :
                   isHtml ? 'All 20 HTML Modules (378 Units)' :
                   'All Modules'}
                </option>
                {currentModulesList.map((m) => (
                  <option key={m.number} value={m.number}>
                    Mod {m.number}: {m.title} ({m.lessonCount})
                  </option>
                ))}
              </select>
            )}

            {/* Difficulty Filter */}
            <select
              value={selectedDifficultyFilter}
              onChange={(e) => setSelectedDifficultyFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              <option value="ALL">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            {/* Toggle Curriculum Sidebar */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                sidebarOpen 
                  ? 'bg-indigo-50 dark:bg-indigo-950/80 border-indigo-200 text-indigo-700 dark:text-indigo-300' 
                  : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">{sidebarOpen ? 'Hide Topics' : 'Show Topics'}</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. MAIN SPLIT: CURRICULUM SIDEBAR + LESSON DECK          */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Sidebar: Topic Navigation */}
          {sidebarOpen && (
            <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col h-[780px] overflow-hidden">
              <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Course Curriculum
                  </span>
                  <p className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    {filteredLessons.length} Topics Available
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    {completedLessonsInCourse}/{activeTutorial.lessons.length} Done
                  </span>
                </div>
              </div>

              {/* Scrollable Lesson Items */}
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {filteredLessons.map((l) => {
                  const isActive = activeLesson.id === l.id;
                  const isDone = user?.completedLessons.includes(l.id);
                  const isMarked = bookmarkedLessons.includes(l.id);

                  return (
                    <button
                      key={l.id}
                      onClick={() => handleSelectLesson(l.id)}
                      className={`w-full p-3 rounded-2xl text-left transition-all flex items-start gap-3 cursor-pointer group relative ${
                        isActive
                          ? 'bg-indigo-50/95 dark:bg-indigo-950/80 border-2 border-indigo-500 dark:border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-transparent'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        ) : isMarked ? (
                          <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
                        ) : (
                          <span className="w-4 block font-mono text-[10px] text-slate-400 text-center">
                            •
                          </span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-0.5">
                          <span className="font-semibold text-slate-600 dark:text-slate-300 truncate">
                            {l.section.split(':')[0] || 'Topic'}
                          </span>
                          <span>·</span>
                          <span className={`font-bold ${
                            l.difficulty === 'Beginner' ? 'text-emerald-600' :
                            l.difficulty === 'Intermediate' ? 'text-indigo-600' : 'text-purple-600'
                          }`}>
                            {l.difficulty}
                          </span>
                        </div>
                        <p className={`text-xs font-bold line-clamp-2 leading-relaxed ${
                          isActive
                            ? 'text-indigo-950 dark:text-indigo-100 font-extrabold'
                            : 'text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
                        }`}>
                          {l.title}
                        </p>

                        {isActive && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-black text-indigo-600 dark:text-indigo-400 bg-indigo-100/80 dark:bg-indigo-900/60 px-1.5 py-0.5 rounded-md mt-1.5">
                            Showing on Right <ArrowRight className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Right Main Deck: Lesson Content, Playground, Quiz & Exercises */}
          <div id="tutorial-lesson-right-deck" className={`${sidebarOpen ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-4 ${mobileViewTab === 'list' && sidebarOpen ? 'hidden lg:block' : 'block'}`}>
            
            {/* Top Right-Side Active Indicator Bar */}
            <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 border border-indigo-200/80 dark:border-indigo-800/80 rounded-2xl px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-bold text-slate-900 dark:text-white">Active Lesson on Right Side:</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-black truncate max-w-[240px] sm:max-w-md">{activeLesson.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">
                  Topic {activeLessonIndex + 1}/{activeTutorial.lessons.length}
                </span>
                {/* On mobile, allow jumping back to topic list */}
                <button
                  onClick={() => setMobileViewTab('list')}
                  className="lg:hidden text-[11px] font-bold text-indigo-600 dark:text-indigo-400 underline cursor-pointer"
                >
                  Topics List ←
                </button>
              </div>
            </div>

            {/* Top Lesson Card Container */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
              
              {/* Lesson Header Navigation Bar */}
              <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-800/30">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black px-2 py-0.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                    {activeLesson.section}
                  </span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                    activeLesson.difficulty === 'Beginner' ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400' :
                    activeLesson.difficulty === 'Intermediate' ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400' :
                    'bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400'
                  }`}>
                    {activeLesson.difficulty}
                  </span>
                </div>

                {/* Top Actions: Prev / Next / Bookmark / Mark Completed */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={!hasPrev}
                    className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                    title="Previous Lesson"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!hasNext}
                    className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                    title="Next Lesson"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => toggleBookmark(activeLesson.id)}
                    className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                      isBookmarked 
                        ? 'bg-amber-50 dark:bg-amber-950/80 border-amber-300 dark:border-amber-700 text-amber-600'
                        : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500'
                    }`}
                    title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Lesson'}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                  </button>

                  <button
                    onClick={() => toggleCompleteLesson(activeLesson.id, activeTutorial.id)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isLessonCompleted
                        ? 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                        : 'bg-indigo-600 hover:bg-indigo-700 border-indigo-600 text-white shadow-xs'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isLessonCompleted ? 'Completed' : 'Mark Completed'}</span>
                  </button>
                </div>
              </div>

              {/* View Tab Switcher: Dynamic for Java and HTML */}
              <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-100 dark:border-slate-800 overflow-x-auto text-xs font-bold">
                <button
                  onClick={() => setActiveViewTab('lesson')}
                  className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeViewTab === 'lesson'
                      ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  📖 Lesson & Explanations
                </button>

                <button
                  onClick={() => setActiveViewTab('playground')}
                  className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeViewTab === 'playground'
                      ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {isPython ? (
                    <>
                      <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                      <span>⚡ Python 3 Runner</span>
                    </>
                  ) : isJs ? (
                    <>
                      <FileCode className="w-3.5 h-3.5 text-amber-500" />
                      <span>⚡ JavaScript REPL & Console</span>
                    </>
                  ) : isSql ? (
                    <>
                      <Database className="w-3.5 h-3.5 text-sky-500" />
                      <span>⚡ SQL Query Studio</span>
                    </>
                  ) : isC ? (
                    <>
                      <Code2 className="w-3.5 h-3.5 text-indigo-500" />
                      <span>⚡ C GCC Sandbox</span>
                    </>
                  ) : isCpp ? (
                    <>
                      <Binary className="w-3.5 h-3.5 text-purple-500" />
                      <span>⚡ C++ G++ Sandbox</span>
                    </>
                  ) : isGit ? (
                    <>
                      <FolderGit2 className="w-3.5 h-3.5 text-rose-500" />
                      <span>⚡ Git Terminal Simulator</span>
                    </>
                  ) : isJava ? (
                    <>
                      <Terminal className="w-3.5 h-3.5 text-amber-500" />
                      <span>⚡ Java JVM Runner</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-indigo-500 fill-indigo-500" />
                      <span>⚡ Live Code Playground</span>
                    </>
                  )}
                </button>

                {isJava && (
                  <button
                    onClick={() => setActiveViewTab('java-studio')}
                    className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                      activeViewTab === 'java-studio'
                        ? 'border-amber-600 text-amber-600 dark:text-amber-400'
                        : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <Coffee className="w-3.5 h-3.5 text-amber-500" />
                    <span>☕ Java OOP Studio</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 font-bold">9 Topics</span>
                  </button>
                )}

                {isHtml && (
                  <button
                    onClick={() => setActiveViewTab('text-studio')}
                    className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                      activeViewTab === 'text-studio'
                        ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                        : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <Type className="w-3.5 h-3.5 text-amber-500" />
                    <span>🔤 HTML Text Studio</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 font-bold">26 Tags</span>
                  </button>
                )}

                {isPython && (
                  <>
                    <button
                      onClick={() => setActiveViewTab('py-interview')}
                      className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        activeViewTab === 'py-interview'
                          ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                          : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <Briefcase className="w-3.5 h-3.5 text-emerald-500" />
                      <span>💼 24-Cat Interview Prep</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-bold">24 Cats</span>
                    </button>

                    <button
                      onClick={() => setActiveViewTab('py-projects')}
                      className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        activeViewTab === 'py-projects'
                          ? 'border-purple-600 text-purple-600 dark:text-purple-400'
                          : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                      <span>🚀 30 Portfolio Projects</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 font-bold">30 Builds</span>
                    </button>

                    <button
                      onClick={() => setActiveViewTab('py-roadmap')}
                      className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        activeViewTab === 'py-roadmap'
                          ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                          : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <Compass className="w-3.5 h-3.5 text-indigo-500" />
                      <span>🗺️ 5-Stage Roadmap</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-bold">5 Stages</span>
                    </button>
                  </>
                )}
                {isC && (
                  <>
                    <button
                      onClick={() => setActiveViewTab('c-compiler')}
                      className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        activeViewTab === 'c-compiler'
                          ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                          : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5 text-indigo-500" />
                      <span>⚡ C GCC Sandbox</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-bold">C11</span>
                    </button>
                    <button
                      onClick={() => setActiveViewTab('c-interview')}
                      className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        activeViewTab === 'c-interview'
                          ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                          : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <Briefcase className="w-3.5 h-3.5 text-emerald-500" />
                      <span>💼 Interview Prep</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-bold">6 Cats</span>
                    </button>
                    <button
                      onClick={() => setActiveViewTab('c-projects')}
                      className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        activeViewTab === 'c-projects'
                          ? 'border-purple-600 text-purple-600 dark:text-purple-400'
                          : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                      <span>🚀 10 Real Projects</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 font-bold">10 Builds</span>
                    </button>
                    <button
                      onClick={() => setActiveViewTab('c-roadmap')}
                      className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        activeViewTab === 'c-roadmap'
                          ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                          : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <Compass className="w-3.5 h-3.5 text-indigo-500" />
                      <span>🗺️ 60-Day Roadmap</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-bold">60 Days</span>
                    </button>
                    <button
                      onClick={() => setActiveViewTab('c-debug')}
                      className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        activeViewTab === 'c-debug'
                          ? 'border-amber-600 text-amber-600 dark:text-amber-400'
                          : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <Bug className="w-3.5 h-3.5 text-amber-500" />
                      <span>🧩 Output & Debug</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 font-bold">Mental Model</span>
                    </button>
                  </>
                )}

                {isCpp && (
                  <>
                    <button
                      onClick={() => setActiveViewTab('cpp-compiler')}
                      className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        activeViewTab === 'cpp-compiler'
                          ? 'border-purple-600 text-purple-600 dark:text-purple-400'
                          : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <Binary className="w-3.5 h-3.5 text-purple-500" />
                      <span>⚡ C++20 Sandbox</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 font-bold">C++20</span>
                    </button>
                    <button
                      onClick={() => setActiveViewTab('cpp-interview')}
                      className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        activeViewTab === 'cpp-interview'
                          ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                          : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
                      <span>💼 Interview Prep</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-bold">10 Topics</span>
                    </button>
                    <button
                      onClick={() => setActiveViewTab('cpp-projects')}
                      className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        activeViewTab === 'cpp-projects'
                          ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                          : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                      <span>🚀 20 Portfolio Projects</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-bold">20 Builds</span>
                    </button>
                    <button
                      onClick={() => setActiveViewTab('cpp-practice')}
                      className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        activeViewTab === 'cpp-practice'
                          ? 'border-sky-600 text-sky-600 dark:text-sky-400'
                          : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <CheckSquare className="w-3.5 h-3.5 text-sky-500" />
                      <span>🎯 Algorithm Practice</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 font-bold">Practice Bank</span>
                    </button>
                    <button
                      onClick={() => setActiveViewTab('cpp-debug')}
                      className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        activeViewTab === 'cpp-debug'
                          ? 'border-rose-600 text-rose-600 dark:text-rose-400'
                          : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <Bug className="w-3.5 h-3.5 text-rose-500" />
                      <span>🐛 Debugging & Output Lab</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 font-bold">Mental Model</span>
                    </button>
                  </>
                )}

                <button
                  onClick={() => setActiveViewTab('exercises')}
                  className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeViewTab === 'exercises'
                      ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  ✍️ Practice Exercises (3)
                </button>
                <button
                  onClick={() => setActiveViewTab('quiz')}
                  className={`pb-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeViewTab === 'quiz'
                      ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  🎯 Lesson Quiz (5 Questions)
                </button>
              </div>

              {/* Lesson Body Content */}
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* 1. LESSON & EXPLANATIONS VIEW */}
                {activeViewTab === 'lesson' && (
                  <div className="space-y-8 animate-in fade-in duration-150">
                    
                    {/* A. Topic Name */}
                    <div className="space-y-2">
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                        {activeLesson.title}
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {activeLesson.introduction}
                      </p>
                    </div>

                    {/* B. Meaning & C. Definition Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800 space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                          Meaning (Simple English)
                        </span>
                        <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                          {activeLesson.meaning || activeLesson.simpleExplanation}
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800 space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
                          Technical Definition
                        </span>
                        <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                          {activeLesson.definition || activeLesson.summary}
                        </p>
                      </div>
                    </div>

                    {/* D. Detailed Explanation & E. Why Do We Use It? */}
                    <div className="space-y-4">
                      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
                        <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-amber-500" />
                          <span>Detailed Explanation & Mental Model</span>
                        </h3>
                        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap font-sans">
                          {activeLesson.simpleExplanation}
                        </div>
                      </div>

                      {activeLesson.whyUseIt && (
                        <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800 space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                            Why Do We Use It?
                          </span>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            {activeLesson.whyUseIt}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* F. Syntax Block */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                        <span>Syntax Blueprint</span>
                        <button
                          onClick={() => handleCopySyntax(activeLesson.syntax)}
                          className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                        >
                          {copiedSyntax ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedSyntax ? 'Copied' : 'Copy Syntax'}</span>
                        </button>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto">
                        <pre className="whitespace-pre-wrap">{activeLesson.syntax}</pre>
                      </div>
                    </div>

                    {/* G. Example Code & Live Rendered Preview */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-indigo-500" />
                          <span className="text-slate-800 dark:text-slate-200 font-extrabold">
                            Complete Runnable Example Code
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setActiveViewTab('playground')}
                            className="text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer flex items-center gap-1"
                          >
                            <Play className="w-3 h-3" />
                            <span>Edit in Live Playground</span>
                          </button>
                          <button
                            onClick={() => handleCopyCode(activeLesson.codeExample)}
                            className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer flex items-center gap-1"
                          >
                            {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Code Block */}
                      <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs">
                        <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                          <span>example.html</span>
                          <span>UTF-8</span>
                        </div>
                        <pre className="p-4 text-slate-200 whitespace-pre-wrap leading-relaxed overflow-x-auto">
                          {activeLesson.codeExample}
                        </pre>
                      </div>

                      {/* J. Live Rendered Preview Sandbox */}
                      <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-950">
                        <div className="bg-slate-100 dark:bg-slate-900 px-4 py-2 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
                          <span className="flex items-center gap-2">
                            <Eye className="w-3.5 h-3.5 text-emerald-500" />
                            <span>Live Browser Preview</span>
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">Isolated Sandbox</span>
                        </div>
                        <div className="p-4 bg-white min-h-[140px]">
                          <iframe
                            ref={previewIframeRef}
                            srcDoc={sandboxSrcDoc}
                            title="Lesson Live Output"
                            sandbox="allow-scripts"
                            className="w-full min-h-[160px] border-none bg-white text-slate-900"
                          />
                        </div>
                      </div>
                    </div>

                    {/* H. Code Explanation Breakdown */}
                    {activeLesson.codeExplanation && activeLesson.codeExplanation.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Line-by-Line Code Explanation
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
                          {activeLesson.codeExplanation.map((line, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* M. Real-World Applications */}
                    {activeLesson.realWorldApplications && (
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Real-World Industry Applications
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {activeLesson.realWorldApplications.map((app, idx) => (
                            <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                              <span className="font-bold text-indigo-600 dark:text-indigo-400 block mb-1">Application #{idx + 1}</span>
                              {app}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* N. Common Mistakes & O. Best Practices */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/60 space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Common Beginner Mistakes</span>
                        </span>
                        <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
                          {activeLesson.commonMistakes.map((m, idx) => (
                            <li key={idx} className="leading-relaxed">{m}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/60 space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Professional Best Practices</span>
                        </span>
                        <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
                          {(activeLesson.bestPractices || [
                            "Always validate your markup using W3C validator.",
                            "Use lowercase element and attribute names.",
                            "Keep accessibility and mobile responsiveness top of mind."
                          ]).map((bp, idx) => (
                            <li key={idx} className="leading-relaxed">{bp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* K. Multiple Examples (Basic, Practical, Real-World) */}
                    {activeLesson.multipleExamples && activeLesson.multipleExamples.length > 0 && (
                      <div className="space-y-3 p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                            <Layers className="w-4 h-4" />
                            <span>Multiple Code Examples</span>
                          </span>
                          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                            {activeLesson.multipleExamples.map((ex, exIdx) => (
                              <button
                                key={exIdx}
                                onClick={() => setActiveExampleTab(exIdx)}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                                  activeExampleTab === exIdx
                                    ? 'bg-indigo-600 text-white shadow-xs'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                                }`}
                              >
                                {ex.title}
                              </button>
                            ))}
                          </div>
                        </div>

                        {activeLesson.multipleExamples[activeExampleTab] && (
                          <div className="space-y-2 pt-2 animate-in fade-in duration-150">
                            <p className="text-xs text-slate-600 dark:text-slate-300">
                              {activeLesson.multipleExamples[activeExampleTab].description}
                            </p>
                            <div className="rounded-2xl bg-slate-950 p-4 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
                              <pre className="whitespace-pre-wrap">{activeLesson.multipleExamples[activeExampleTab].code}</pre>
                            </div>
                            {activeLesson.multipleExamples[activeExampleTab].output && (
                              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-400">
                                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Expected Output:</span>
                                <pre className="whitespace-pre-wrap">{activeLesson.multipleExamples[activeExampleTab].output}</pre>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* M. Topic-Specific Technical Interview Questions & Answers */}
                    {activeLesson.interviewQuestions && activeLesson.interviewQuestions.length > 0 && (
                      <div className="space-y-4 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-purple-50/60 via-slate-50 to-indigo-50/50 dark:from-purple-950/20 dark:via-slate-900 dark:to-indigo-950/20 border border-purple-100/90 dark:border-purple-900/60">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <span className="text-xs font-black uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-1.5">
                              <Award className="w-4 h-4 text-purple-500" />
                              <span>Technical Interview Preparation</span>
                            </span>
                            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                              Topic-Specific Questions & Detailed Model Answers
                            </h4>
                          </div>
                          <span className="px-2.5 py-1 rounded-full text-xs font-black bg-purple-100 dark:bg-purple-900/80 text-purple-800 dark:text-purple-200">
                            {activeLesson.interviewQuestions.length} Questions
                          </span>
                        </div>

                        <div className="space-y-2.5 pt-1">
                          {activeLesson.interviewQuestions.map((iq, qIdx) => {
                            const isRevealed = !!revealedInterviewIdx[qIdx];
                            return (
                              <div
                                key={qIdx}
                                className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden shadow-2xs"
                              >
                                <button
                                  onClick={() => setRevealedInterviewIdx(prev => ({ ...prev, [qIdx]: !prev[qIdx] }))}
                                  className="w-full p-3.5 sm:p-4 text-left flex items-start justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                                >
                                  <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                      <span className="text-[10px] font-black px-1.5 py-0.2 rounded bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                                        Q{qIdx + 1}
                                      </span>
                                      {iq.level && (
                                        <span className={`text-[10px] font-bold px-2 py-0.2 rounded-full ${
                                          iq.level === 'Beginner' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400' :
                                          iq.level === 'Intermediate' ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400' :
                                          'bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400'
                                        }`}>
                                          {iq.level}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                                      {iq.question}
                                    </p>
                                  </div>
                                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 transition-all ${
                                    isRevealed
                                      ? 'bg-purple-600 text-white'
                                      : 'bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 hover:bg-purple-100'
                                  }`}>
                                    {isRevealed ? 'Hide Answer' : 'View Answer'}
                                  </span>
                                </button>

                                {isRevealed && (
                                  <div className="p-4 pt-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300 animate-in fade-in duration-150">
                                    <p className="font-medium whitespace-pre-wrap">{iq.answer}</p>
                                    {iq.codeExample && (
                                      <div className="rounded-xl bg-slate-950 p-3 border border-slate-800 font-mono text-[11px] text-slate-200 overflow-x-auto">
                                        <pre className="whitespace-pre-wrap">{iq.codeExample}</pre>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* N. Practical Coding Challenges */}
                    {activeLesson.codingChallenges && activeLesson.codingChallenges.length > 0 && (
                      <div className="space-y-4 p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                            <Terminal className="w-4 h-4" />
                            <span>Practical Coding Challenges</span>
                          </span>
                          <span className="text-xs text-slate-500 font-bold">
                            {activeLesson.codingChallenges.length} Challenges
                          </span>
                        </div>

                        <div className="space-y-3">
                          {activeLesson.codingChallenges.map((ch, chIdx) => {
                            const isRevealed = !!revealedChallenges[chIdx];
                            return (
                              <div
                                key={chIdx}
                                className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5"
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div>
                                    <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 block">
                                      Challenge #{chIdx + 1}
                                    </span>
                                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                                      {ch.title}
                                    </h5>
                                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                                      {ch.description}
                                    </p>
                                  </div>
                                  <button
                                    onClick={() => setRevealedChallenges(prev => ({ ...prev, [chIdx]: !prev[chIdx] }))}
                                    className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 font-bold text-xs shrink-0 cursor-pointer"
                                  >
                                    {isRevealed ? 'Hide Solution' : 'Show Solution'}
                                  </button>
                                </div>

                                {ch.hint && (
                                  <p className="text-[11px] text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 p-2 rounded-xl border border-amber-200/60 dark:border-amber-900/60 flex items-center gap-1.5">
                                    <Lightbulb className="w-3.5 h-3.5 shrink-0" />
                                    <span>Hint: {ch.hint}</span>
                                  </p>
                                )}

                                {isRevealed && (
                                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto animate-in fade-in duration-150">
                                    <pre className="whitespace-pre-wrap">{ch.solution}</pre>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Quick CTA to Practice & Quiz */}
                    <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                          Ready to test your knowledge?
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          Solve 3 interactive practice exercises or take the 5-question lesson quiz.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveViewTab('exercises')}
                          className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold text-xs hover:border-indigo-500 cursor-pointer"
                        >
                          Practice Exercises →
                        </button>
                        <button
                          onClick={() => setActiveViewTab('quiz')}
                          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm cursor-pointer"
                        >
                          Start Quiz →
                        </button>
                      </div>
                    </div>

                  </div>
                )}

                {/* 2. INTERACTIVE CODE PLAYGROUND VIEW */}
                {activeViewTab === 'playground' && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    
                    {/* Python Playground & Runner */}
                    {isPython ? (
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-1">
                              <Terminal className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Python 3.12 (CPython Interactive Runtime)</span>
                            </div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white">
                              Interactive Python 3 Runner & Simulator
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Write, test, and execute standard Python code with stdout, execution timing, memory usage, and error diagnostics.
                            </p>
                          </div>

                          {/* Python Playground Actions */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={handleResetPythonCode}
                              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                              title="Reset Code"
                            >
                              <RotateCcw className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(userPythonCode);
                                setCopiedPythonCode(true);
                                setTimeout(() => setCopiedPythonCode(false), 2000);
                              }}
                              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                            >
                              {copiedPythonCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copiedPythonCode ? 'Copied' : 'Copy Code'}</span>
                            </button>
                            <button
                              onClick={handleRunPythonProgram}
                              disabled={pythonExecutionStatus === 'running'}
                              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-xs shadow-md shadow-emerald-600/30 cursor-pointer active:scale-95 disabled:opacity-50"
                            >
                              <Play className="w-3.5 h-3.5 fill-white" />
                              <span>{pythonExecutionStatus === 'running' ? 'Executing Python...' : 'Run Python 3 Code'}</span>
                            </button>
                          </div>
                        </div>

                        {/* Quick Python Code Templates */}
                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                            Templates:
                          </span>
                          {PYTHON_PLAYGROUND_TEMPLATES.map((tpl) => (
                            <button
                              key={tpl.id}
                              onClick={() => {
                                setUserPythonCode(tpl.code);
                                setSelectedPyTemplateId(tpl.id);
                                setPythonTerminalOutput(tpl.expectedOutput);
                                setPythonExecutionStatus('success');
                              }}
                              className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors border ${
                                selectedPyTemplateId === tpl.id
                                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              {tpl.name}
                            </button>
                          ))}
                        </div>

                        {/* Python Code Editor */}
                        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs shadow-lg">
                          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-300 font-bold">
                              <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                              <span>main.py</span>
                              <span className="text-[10px] font-normal text-slate-400">· UTF-8 · Python 3.12</span>
                            </div>
                            <span className="text-[11px] text-slate-400">Press 'Run Python 3 Code' to execute</span>
                          </div>
                          <textarea
                            value={userPythonCode}
                            onChange={(e) => setUserPythonCode(e.target.value)}
                            rows={14}
                            className="w-full bg-transparent text-emerald-200 dark:text-emerald-100/95 p-4 font-mono text-xs leading-relaxed focus:outline-none resize-y selection:bg-emerald-600 selection:text-white"
                            placeholder="# Type or paste runnable Python code here..."
                            spellCheck={false}
                          />
                        </div>

                        {/* Interactive Python Output Terminal Console */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-xl font-mono text-xs">
                          {/* Terminal Window Header Bar */}
                          <div className="bg-slate-900/95 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-slate-300">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1.5 mr-2">
                                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                              </div>
                              <span className="font-bold text-xs">Python Interactive Console (stdout)</span>
                            </div>

                            <div className="flex items-center gap-3">
                              {pythonExecutionStatus === 'running' && (
                                <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold text-[11px] animate-pulse">
                                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                                  Executing...
                                </span>
                              )}
                              {pythonExecutionStatus === 'success' && (
                                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                                  <Check className="w-3.5 h-3.5" />
                                  Process Finished (Exit Code 0)
                                </span>
                              )}
                              {pythonExecutionStatus === 'error' && (
                                <span className="inline-flex items-center gap-1.5 text-rose-400 font-bold text-[11px]">
                                  <AlertTriangle className="w-3.5 h-3.5" />
                                  Execution Error
                                </span>
                              )}
                              {pythonExecutionStatus === 'idle' && (
                                <span className="text-slate-400 text-[11px]">
                                  Ready
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Terminal Output Body */}
                          <div className="p-4 bg-slate-950/95 min-h-[140px] max-h-[300px] overflow-y-auto">
                            <pre className={`font-mono text-xs whitespace-pre-wrap leading-relaxed ${
                              pythonExecutionStatus === 'error' ? 'text-rose-400' : 'text-emerald-400'
                            }`}>
                              {pythonTerminalOutput}
                            </pre>
                          </div>

                          {/* Execution stats footer */}
                          <div className="bg-slate-900/60 px-4 py-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                            <div className="flex items-center gap-4">
                              <span>Exec Time: <strong className="text-slate-300">{pythonExecStats.runTime}</strong></span>
                              <span>Memory: <strong className="text-slate-300">{pythonExecStats.memory}</strong></span>
                            </div>
                            <span className="text-emerald-400 font-mono font-bold">CPython 3.12.2 [GCC 11.2.0] on linux</span>
                          </div>
                        </div>
                      </div>
                    ) : isJava ? (
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold mb-1">
                              <Coffee className="w-3.5 h-3.5 text-amber-600" />
                              <span>Java SE 21 Development Kit (JDK)</span>
                            </div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white">
                              Interactive Java Playground & JVM Console
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Edit standard Java code below, click Run Program to compile on JVM 21, and inspect console output.
                            </p>
                          </div>

                          {/* Java Playground Actions */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={handleResetJavaCode}
                              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                              title="Reset to Lesson Example"
                            >
                              <RotateCcw className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(userJavaCode);
                                setCopiedJavaCode(true);
                                setTimeout(() => setCopiedJavaCode(false), 2000);
                              }}
                              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                            >
                              {copiedJavaCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copiedJavaCode ? 'Copied' : 'Copy Code'}</span>
                            </button>
                            <button
                              onClick={handleRunJavaProgram}
                              disabled={javaExecutionStatus === 'compiling'}
                              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs shadow-md shadow-amber-600/30 cursor-pointer active:scale-95 disabled:opacity-50"
                            >
                              <Play className="w-3.5 h-3.5 fill-white" />
                              <span>{javaExecutionStatus === 'compiling' ? 'Compiling JVM...' : 'Run Java Program'}</span>
                            </button>
                          </div>
                        </div>

                        {/* Quick Java Code Presets */}
                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                            Quick Java Templates:
                          </span>
                          {[
                            {
                              label: "OOP Class & Object",
                              code: "public class Main {\n    public static void main(String[] args) {\n        Student s = new Student(\"Alex\", \"Computer Science\");\n        s.introduce();\n    }\n}\n\nclass Student {\n    private String name;\n    private String major;\n    public Student(String name, String major) {\n        this.name = name;\n        this.major = major;\n    }\n    public void introduce() {\n        System.out.println(\"Hello, I am \" + name + \" studying \" + major + \"!\");\n    }\n}"
                            },
                            {
                              label: "ArrayList & Loop",
                              code: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> frameworks = new ArrayList<>(Arrays.asList(\"Spring Boot\", \"Hibernate\", \"JUnit\", \"Kafka\"));\n        System.out.println(\"=== Popular Enterprise Java Frameworks ===\");\n        for (int i = 0; i < frameworks.size(); i++) {\n            System.out.println((i + 1) + \". \" + frameworks.get(i));\n        }\n    }\n}"
                            },
                            {
                              label: "Try-Catch Exception",
                              code: "public class Main {\n    public static void main(String[] args) {\n        try {\n            int numerator = 100;\n            int denominator = 0;\n            System.out.println(\"Computing: \" + (numerator / denominator));\n        } catch (ArithmeticException e) {\n            System.out.println(\"[Caught Exception] Cannot divide by zero: \" + e.getMessage());\n        } finally {\n            System.out.println(\"Cleanup executed in finally block.\");\n        }\n    }\n}"
                            },
                            {
                              label: "Lambda & Stream",
                              code: "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n        List<Integer> evenSquares = numbers.stream()\n            .filter(n -> n % 2 == 0)\n            .map(n -> n * n)\n            .collect(Collectors.toList());\n        System.out.println(\"Even Squares: \" + evenSquares);\n    }\n}"
                            }
                          ].map((tpl) => (
                            <button
                              key={tpl.label}
                              onClick={() => {
                                setUserJavaCode(tpl.code);
                                setJavaTerminalOutput('Template loaded. Click "Run Java Program" to execute.');
                                setJavaExecutionStatus('idle');
                              }}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold cursor-pointer transition-colors"
                            >
                              {tpl.label}
                            </button>
                          ))}
                        </div>

                        {/* Java Code Editor */}
                        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs shadow-lg">
                          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-300 font-bold">
                              <Coffee className="w-3.5 h-3.5 text-amber-500" />
                              <span>Main.java</span>
                              <span className="text-[10px] font-normal text-slate-400">· public class Main</span>
                            </div>
                            <span className="text-[11px] text-slate-400">Target JVM: Java 21 LTS</span>
                          </div>
                          <textarea
                            value={userJavaCode}
                            onChange={(e) => setUserJavaCode(e.target.value)}
                            rows={14}
                            className="w-full bg-transparent text-amber-200 dark:text-amber-100/90 p-4 font-mono text-xs leading-relaxed focus:outline-none resize-y selection:bg-amber-600 selection:text-white"
                            placeholder="// Write runnable Java code here..."
                            spellCheck={false}
                          />
                        </div>

                        {/* Interactive JVM Output Terminal Console */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-xl font-mono text-xs">
                          {/* Terminal Window Header Bar */}
                          <div className="bg-slate-900/95 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-slate-300">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1.5 mr-2">
                                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                              </div>
                              <span className="font-bold text-xs">JVM Terminal Console (stdout)</span>
                            </div>

                            {/* Status indicator badge */}
                            <div className="flex items-center gap-3">
                              {javaExecutionStatus === 'compiling' && (
                                <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold text-[11px] animate-pulse">
                                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                                  Compiling javac...
                                </span>
                              )}
                              {javaExecutionStatus === 'success' && (
                                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                                  <Check className="w-3.5 h-3.5" />
                                  Build Succeeded (0.21s) · Exit Code 0
                                </span>
                              )}
                              {javaExecutionStatus === 'error' && (
                                <span className="inline-flex items-center gap-1.5 text-rose-400 font-bold text-[11px]">
                                  <AlertTriangle className="w-3.5 h-3.5" />
                                  Build Failed
                                </span>
                              )}
                              {javaExecutionStatus === 'idle' && (
                                <span className="text-slate-400 text-[11px]">
                                  Ready
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Terminal Output Body */}
                          <div className="p-4 bg-slate-950/95 min-h-[140px] max-h-[280px] overflow-y-auto">
                            <pre className={`font-mono text-xs whitespace-pre-wrap leading-relaxed ${
                              javaExecutionStatus === 'error' ? 'text-rose-400' : 'text-emerald-400'
                            }`}>
                              {javaTerminalOutput}
                            </pre>
                          </div>

                          {/* Execution stats footer */}
                          <div className="bg-slate-900/60 px-4 py-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                            <div className="flex items-center gap-4">
                              <span>Compile Time: <strong className="text-slate-300">{javaExecStats.compileTime}</strong></span>
                              <span>Exec Time: <strong className="text-slate-300">{javaExecStats.runTime}</strong></span>
                              <span>Allocated Memory: <strong className="text-slate-300">{javaExecStats.memory}</strong></span>
                            </div>
                            <span className="text-indigo-400 font-mono font-bold">Java HotSpot(TM) 64-Bit Server VM</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* HTML / CSS / JS Playground */
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white">
                              Interactive HTML Playground
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Edit the HTML, CSS, or JS code below and click Run Code to see live sandboxed results.
                            </p>
                          </div>

                          {/* Playground Action Buttons */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={handleResetPlayground}
                              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                              title="Reset Code"
                            >
                              <RotateCcw className="w-4 h-4" />
                            </button>
                            <button
                              onClick={handleDownloadHtml}
                              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                              title="Download HTML file"
                            >
                              <Download className="w-4 h-4" />
                            </button>
                            <button
                              onClick={handleRunPlayground}
                              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/30 cursor-pointer active:scale-95"
                            >
                              <Play className="w-3.5 h-3.5 fill-white" />
                              <span>Run Code</span>
                            </button>
                          </div>
                        </div>

                        {/* Code Editor Tabs (HTML / CSS / JS) */}
                        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs">
                          <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setActiveCodeTab('html')}
                                className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                                  activeCodeTab === 'html' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                                }`}
                              >
                                HTML
                              </button>
                              <button
                                onClick={() => setActiveCodeTab('css')}
                                className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                                  activeCodeTab === 'css' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                                }`}
                              >
                                CSS (Optional)
                              </button>
                              <button
                                onClick={() => setActiveCodeTab('js')}
                                className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                                  activeCodeTab === 'js' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                                }`}
                              >
                                JS (Optional)
                              </button>
                            </div>
                            <span className="text-[11px] text-slate-400">Press Run Code to Update Preview</span>
                          </div>

                          {/* Textareas */}
                          {activeCodeTab === 'html' && (
                            <textarea
                              value={userHtmlCode}
                              onChange={(e) => setUserHtmlCode(e.target.value)}
                              rows={12}
                              className="w-full bg-transparent text-slate-200 p-4 font-mono text-xs leading-relaxed focus:outline-none resize-y selection:bg-indigo-600 selection:text-white"
                              placeholder="Type or edit HTML code here..."
                              spellCheck={false}
                            />
                          )}
                          {activeCodeTab === 'css' && (
                            <textarea
                              value={userCssCode}
                              onChange={(e) => setUserCssCode(e.target.value)}
                              rows={12}
                              className="w-full bg-transparent text-slate-200 p-4 font-mono text-xs leading-relaxed focus:outline-none resize-y selection:bg-indigo-600 selection:text-white"
                              placeholder="/* Write custom CSS styles here */"
                              spellCheck={false}
                            />
                          )}
                          {activeCodeTab === 'js' && (
                            <textarea
                              value={userJsCode}
                              onChange={(e) => setUserJsCode(e.target.value)}
                              rows={12}
                              className="w-full bg-transparent text-slate-200 p-4 font-mono text-xs leading-relaxed focus:outline-none resize-y selection:bg-indigo-600 selection:text-white"
                              placeholder="// Write JavaScript code here"
                              spellCheck={false}
                            />
                          )}
                        </div>

                        {/* Live Sandboxed Output */}
                        <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-950 shadow-sm">
                          <div className="bg-slate-100 dark:bg-slate-900 px-4 py-2 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
                            <span>Live Sandbox Output</span>
                            <span className="text-emerald-500 font-bold">● Active</span>
                          </div>
                          <div className="p-4 bg-white min-h-[220px]">
                            <iframe
                              srcDoc={sandboxSrcDoc}
                              title="Playground Live Output"
                              sandbox="allow-scripts"
                              className="w-full min-h-[240px] border-none bg-white text-slate-900"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                )}

                {/* 2.4 JAVA OOP & ARCHITECTURE STUDIO VIEW */}
                {activeViewTab === 'java-studio' && (
                  <div className="space-y-8 animate-in fade-in duration-150">
                    
                    {/* Studio Header */}
                    <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-indigo-500/10 border border-amber-200/80 dark:border-amber-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200 text-xs font-bold">
                          <Coffee className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          <span>Interactive Java OOP & Architecture Studio</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                          Master Object-Oriented Programming & JVM Internals
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                          Select any core architectural topic below to inspect official syntax, complete class blueprints, Stack vs Heap memory diagrams, and senior developer interview insights.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedModuleFilter(13);
                            handleSelectLesson('java-253');
                          }}
                          className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm shadow-amber-600/30"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>View 45 OOP Lessons (Module 13)</span>
                        </button>
                      </div>
                    </div>

                    {/* Concept Selector Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {JAVA_CONCEPTS.map((concept) => {
                        const isSelected = selectedJavaConceptId === concept.id;
                        return (
                          <button
                            key={concept.id}
                            onClick={() => setSelectedJavaConceptId(concept.id)}
                            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer group ${
                              isSelected
                                ? 'bg-amber-50/90 dark:bg-amber-950/70 border-amber-400 dark:border-amber-600 shadow-md ring-2 ring-amber-500/20'
                                : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-700'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                isSelected 
                                  ? 'bg-amber-200/80 dark:bg-amber-900 text-amber-900 dark:text-amber-100 font-black' 
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                              }`}>
                                {concept.badge}
                              </span>
                              <span className="text-[10px] font-semibold text-slate-400">
                                {concept.pillar}
                              </span>
                            </div>
                            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                              {concept.name}
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                              {concept.summary}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Selected Concept Breakdown */}
                    {(() => {
                      const activeConcept = JAVA_CONCEPTS.find(c => c.id === selectedJavaConceptId) || JAVA_CONCEPTS[0];
                      return (
                        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white space-y-6 shadow-xl animate-in fade-in duration-200">
                          
                          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="px-2.5 py-0.5 rounded-lg bg-amber-500 text-slate-950 font-black text-xs">
                                  {activeConcept.badge}
                                </span>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                  {activeConcept.pillar}
                                </span>
                              </div>
                              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                                {activeConcept.name}
                              </h3>
                              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                                {activeConcept.summary}
                              </p>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  setUserJavaCode(activeConcept.sampleCode);
                                  setActiveViewTab('playground');
                                }}
                                className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-amber-600/30"
                              >
                                <Play className="w-3.5 h-3.5 fill-white" />
                                <span>Run in Java Runner</span>
                              </button>
                              <button
                                onClick={() => handleSelectLesson(activeConcept.relatedLessonId)}
                                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                              >
                                <span>Go to Lesson →</span>
                              </button>
                            </div>
                          </div>

                          {/* Code & Syntax Grid */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Syntax Blueprint */}
                            <div className="space-y-2">
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                                Official Syntax Blueprint
                              </span>
                              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs overflow-x-auto text-amber-200">
                                <pre className="whitespace-pre-wrap">{activeConcept.syntax}</pre>
                              </div>
                            </div>

                            {/* Complete Executable Java Code */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                                  Production Java Example
                                </span>
                                <button
                                  onClick={() => {
                                    navigator.clipboard.writeText(activeConcept.sampleCode);
                                    setCopiedJavaCode(true);
                                    setTimeout(() => setCopiedJavaCode(false), 2000);
                                  }}
                                  className="text-[11px] font-bold text-slate-400 hover:text-white flex items-center gap-1"
                                >
                                  {copiedJavaCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                                  <span>{copiedJavaCode ? 'Copied' : 'Copy'}</span>
                                </button>
                              </div>
                              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs overflow-x-auto text-emerald-300 max-h-56 overflow-y-auto">
                                <pre className="whitespace-pre-wrap">{activeConcept.sampleCode}</pre>
                              </div>
                            </div>
                          </div>

                          {/* Senior Insight Cards: Memory Architecture & Interview Tip */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-900/60 space-y-1">
                              <span className="text-xs font-bold text-indigo-400 flex items-center gap-1.5">
                                <Cpu className="w-4 h-4" />
                                <span>JVM Memory & Lifecycle</span>
                              </span>
                              <p className="text-xs text-slate-300 leading-relaxed">
                                {activeConcept.memoryNote}
                              </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-900/60 space-y-1">
                              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                                <Lightbulb className="w-4 h-4" />
                                <span>Interview Tip & Best Practice</span>
                              </span>
                              <p className="text-xs text-slate-300 leading-relaxed">
                                {activeConcept.interviewTip}
                              </p>
                            </div>
                          </div>

                        </div>
                      );
                    })()}

                  </div>
                )}

                {/* 2.5 HTML TEXT & TYPOGRAPHY STUDIO VIEW */}
                {activeViewTab === 'text-studio' && (
                  <div className="space-y-8 animate-in fade-in duration-150">
                    
                    {/* Studio Header & Intro */}
                    <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-purple-500/10 border border-amber-200/80 dark:border-amber-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200 text-xs font-bold">
                          <Type className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          <span>Interactive HTML Text & Typography Studio</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                          Explore HTML Text Tags in Real-Time
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                          Type any custom text, apply standard HTML5 text formatting elements, observe live browser rendering, and copy pristine production-ready markup.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedModuleFilter(3);
                            setSelectedLessonId('html-32');
                            setActiveViewTab('lesson');
                          }}
                          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm shadow-indigo-600/30"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>View 23 Text Lessons</span>
                        </button>
                      </div>
                    </div>

                    {/* Interactive Input Bar */}
                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <Type className="w-4 h-4 text-indigo-500" />
                          <span>Type or Paste Your Text:</span>
                        </label>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {studioText.length} characters
                        </span>
                      </div>

                      <input
                        type="text"
                        value={studioText}
                        onChange={(e) => setStudioText(e.target.value)}
                        placeholder="Enter text to format in HTML (e.g., this text, headings, formulas)..."
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 shadow-2xs transition-colors"
                      />

                      {/* Quick Preset Sample Chips */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Quick Samples to Test:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {[
                            { label: "Urgent Warning", text: "Important: Never commit plain API keys to public repositories!", tag: "strong" },
                            { label: "Spoken Stress", text: "You must always sanitize user input on the server.", tag: "em" },
                            { label: "Search Match", text: "Found in documentation: Complete HTML5 Guide", tag: "mark" },
                            { label: "Water & Physics", text: "Water molecule is H2O and Einstein equation is E=mc2", tag: "sub" },
                            { label: "Price Discount", text: "Original: $199.00 — Now: $0.00 Free", tag: "del" },
                            { label: "Code & Keyboard", text: "Press Ctrl + K to open the command palette in your browser", tag: "kbd" },
                            { label: "Famous Quote", text: "Simplicity is prerequisite for reliability — Edsger W. Dijkstra", tag: "blockquote" },
                            { label: "Right to Left", text: "This text renders right-to-left using bidirectional override", tag: "bdo" },
                          ].map((chip, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setStudioText(chip.text);
                                setStudioTag(chip.tag);
                              }}
                              className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                            >
                              {chip.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tag Category Filter Tabs */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                          Select an HTML Text Tag ({HTML_TEXT_TAGS.length} Available)
                        </span>

                        <div className="flex flex-wrap gap-1">
                          {['ALL', 'Headings', 'Emphasis', 'Formatting', 'Code', 'Quotes & Structure'].map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setStudioCategoryFilter(cat)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                                studioCategoryFilter === cat
                                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Tag Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                        {HTML_TEXT_TAGS.filter(t => studioCategoryFilter === 'ALL' || t.category === studioCategoryFilter).map((tagItem) => {
                          const isSelected = studioTag === tagItem.tag;
                          return (
                            <button
                              key={tagItem.tag}
                              onClick={() => setStudioTag(tagItem.tag)}
                              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                                isSelected
                                  ? 'bg-indigo-50/90 dark:bg-indigo-950/80 border-indigo-600 dark:border-indigo-500 ring-2 ring-indigo-500/20 shadow-xs'
                                  : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={`font-mono text-xs font-black px-2 py-0.5 rounded-md ${
                                  isSelected 
                                    ? 'bg-indigo-600 text-white' 
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                                }`}>
                                  {tagItem.label}
                                </span>
                                <span className="text-[9px] font-bold text-slate-400 uppercase">
                                  {tagItem.category.split(' ')[0]}
                                </span>
                              </div>
                              <div>
                                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                                  {tagItem.name}
                                </p>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-snug">
                                  {tagItem.desc}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Active Tag Detailed Live Sandbox & Code Display */}
                    {(() => {
                      const activeTagItem = HTML_TEXT_TAGS.find(t => t.tag === studioTag) || HTML_TEXT_TAGS[7];
                      const renderedHtml = activeTagItem.template(studioText || 'Your text here');

                      const handleCopyStudioCode = () => {
                        navigator.clipboard.writeText(renderedHtml);
                        setCopiedStudioCode(true);
                        setTimeout(() => setCopiedStudioCode(false), 2000);
                      };

                      const handleSendToPlayground = () => {
                        setUserHtmlCode(renderedHtml);
                        updateSandbox(renderedHtml, userCssCode, userJsCode);
                        setActiveViewTab('playground');
                      };

                      return (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            
                            {/* Live Browser Output Sandbox */}
                            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-950 flex flex-col shadow-sm">
                              <div className="bg-slate-100 dark:bg-slate-900 px-4 py-2.5 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                                <span className="flex items-center gap-2">
                                  <Eye className="w-4 h-4 text-emerald-500" />
                                  <span>Live Browser Preview ({activeTagItem.label})</span>
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono">Rendered Output</span>
                              </div>
                              <div className="p-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-[160px] flex-1 flex items-center">
                                <div 
                                  className="w-full prose dark:prose-invert max-w-none text-base"
                                  dangerouslySetInnerHTML={{ __html: renderedHtml }}
                                />
                              </div>
                            </div>

                            {/* Clean Generated HTML Markup */}
                            <div className="rounded-2xl border border-slate-800 bg-slate-950 text-slate-200 flex flex-col overflow-hidden shadow-sm">
                              <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs">
                                <span className="font-mono text-indigo-400 font-bold">
                                  Clean Generated HTML
                                </span>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={handleCopyStudioCode}
                                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer text-slate-300 hover:text-white"
                                  >
                                    {copiedStudioCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                    <span>{copiedStudioCode ? 'Copied' : 'Copy HTML'}</span>
                                  </button>
                                  <button
                                    onClick={handleSendToPlayground}
                                    className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                                  >
                                    <Play className="w-3 h-3" />
                                    <span>Open in Playground</span>
                                  </button>
                                </div>
                              </div>
                              <div className="p-4 font-mono text-xs overflow-x-auto flex-1 flex items-center bg-slate-950">
                                <pre className="text-emerald-400 whitespace-pre-wrap">{renderedHtml}</pre>
                              </div>
                            </div>
                          </div>

                          {/* Tag Explanation & Mental Model Card */}
                          <div className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-indigo-600 text-white">
                                  {activeTagItem.label}
                                </span>
                                <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                                  {activeTagItem.name} — Web Standard Reference
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 dark:text-slate-300">
                                {activeTagItem.desc}
                              </p>
                            </div>

                            <button
                              onClick={() => {
                                setSelectedTutorialId('html');
                                setSelectedModuleFilter(3);
                                setSelectedLessonId(activeTagItem.relatedLessonId);
                                setActiveViewTab('lesson');
                              }}
                              className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-700 hover:border-indigo-500 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer shadow-2xs"
                            >
                              <span>Read In-Depth Lesson ({activeTagItem.relatedLessonId})</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })()}

                    {/* All 23 Module 3 Lessons Grid Explorer */}
                    <div className="space-y-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                            Module 3: Complete Headings & Text Curriculum (23 Lessons)
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Click any topic below to jump directly into the full lesson with quizzes and code playgrounds.
                          </p>
                        </div>
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                          Lessons html-32 to html-54
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {activeTutorial.lessons.filter(l => l.moduleNumber === 3).map((lessonItem) => {
                          const isDone = Boolean(user?.completedLessons.includes(lessonItem.id));
                          const isCurrent = activeLesson.id === lessonItem.id;

                          return (
                            <button
                              key={lessonItem.id}
                              onClick={() => {
                                setSelectedLessonId(lessonItem.id);
                                setSelectedModuleFilter(3);
                                setActiveViewTab('lesson');
                              }}
                              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                                isCurrent
                                  ? 'bg-indigo-50 dark:bg-indigo-950/80 border-indigo-600 text-indigo-700 dark:text-indigo-300 font-bold shadow-xs'
                                  : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className="font-mono text-[10px] text-slate-400 shrink-0">
                                  {lessonItem.id}
                                </span>
                                <span className="text-xs truncate font-semibold">
                                  {lessonItem.title}
                                </span>
                              </div>

                              <div className="flex items-center gap-1.5 shrink-0">
                                {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
                                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                )}

                {/* 2.6 PYTHON TECHNICAL INTERVIEW PREPARATION (24 CATEGORIES) */}
                {activeViewTab === 'py-interview' && (
                  <div className="space-y-8 animate-in fade-in duration-150">
                    {/* Header Banner */}
                    <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-200/80 dark:border-emerald-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 text-xs font-bold">
                          <Briefcase className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span>Industry-Grade Technical Interview Preparation</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                          24 Master Python Interview Categories
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                          Line-by-line model answers covering CPython internals, memory management, GIL, OOP design patterns, concurrency, decorators, and system architecture.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveViewTab('py-projects')}
                          className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm shadow-purple-600/30"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>30 Portfolio Projects →</span>
                        </button>
                      </div>
                    </div>

                    {/* Category Selector Grid */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
                          Select Interview Category ({PYTHON_INTERVIEW_PREP.length} Categories)
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                        {PYTHON_INTERVIEW_PREP.map((cat, idx) => {
                          const isSelected = selectedPyInterviewCatId === cat.id;
                          return (
                            <button
                              key={cat.id}
                              onClick={() => setSelectedPyInterviewCatId(cat.id)}
                              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                                isSelected
                                  ? 'bg-emerald-50/90 dark:bg-emerald-950/80 border-emerald-600 dark:border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs'
                                  : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={`font-mono text-[10px] font-black px-1.5 py-0.5 rounded ${
                                  isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                                }`}>
                                  Cat {idx + 1}
                                </span>
                                <span className="text-[10px] font-bold text-slate-400">
                                  {cat.questions.length} Qs
                                </span>
                              </div>
                              <p className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-2">
                                {cat.title}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Active Category Question Breakdown */}
                    {(() => {
                      const activeCat = PYTHON_INTERVIEW_PREP.find(c => c.id === selectedPyInterviewCatId) || PYTHON_INTERVIEW_PREP[0];
                      return (
                        <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-6">
                          <div>
                            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                              Category Focus
                            </span>
                            <h4 className="text-xl font-black text-slate-900 dark:text-white">
                              {activeCat.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                              {activeCat.description}
                            </p>
                          </div>

                          <div className="space-y-4">
                            {activeCat.questions.map((qItem, qIdx) => {
                              const qKey = `${activeCat.id}-q-${qIdx}`;
                              const isRevealed = !!revealedPyInterviewQ[qKey];

                              return (
                                <div
                                  key={qIdx}
                                  className="rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs"
                                >
                                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                    <div className="space-y-1.5 flex-1">
                                      <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200">
                                          Q{qIdx + 1}
                                        </span>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                          qItem.level === 'Beginner' ? 'bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300' :
                                          qItem.level === 'Intermediate' ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300' :
                                          'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                                        }`}>
                                          {qItem.level}
                                        </span>
                                      </div>
                                      <h5 className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug">
                                        {qItem.question}
                                      </h5>
                                    </div>

                                    <button
                                      onClick={() => setRevealedPyInterviewQ(prev => ({ ...prev, [qKey]: !prev[qKey] }))}
                                      className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                                        isRevealed
                                          ? 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                                          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                                      }`}
                                    >
                                      {isRevealed ? 'Hide Answer' : 'Reveal Model Answer'}
                                    </button>
                                  </div>

                                  {isRevealed && (
                                    <div className="px-5 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-4 animate-in fade-in duration-150">
                                      <div className="space-y-1">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                          Senior Engineer Answer Breakdown:
                                        </span>
                                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
                                          {qItem.answer}
                                        </p>
                                      </div>

                                      {qItem.codeExample && (
                                        <div className="space-y-1.5">
                                          <div className="flex items-center justify-between text-[11px] text-slate-400">
                                            <span>Demonstration Code:</span>
                                            <button
                                              onClick={() => {
                                                navigator.clipboard.writeText(qItem.codeExample || '');
                                              }}
                                              className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                                            >
                                              <Copy className="w-3 h-3" />
                                              <span>Copy Snippet</span>
                                            </button>
                                          </div>
                                          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                                            <pre className="whitespace-pre-wrap">{qItem.codeExample}</pre>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {/* 2.7 PYTHON 30 PORTFOLIO PROJECTS */}
                {activeViewTab === 'py-projects' && (
                  <div className="space-y-8 animate-in fade-in duration-150">
                    {/* Header */}
                    <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-emerald-500/10 border border-purple-200/80 dark:border-purple-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-700 text-purple-800 dark:text-purple-200 text-xs font-bold">
                          <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                          <span>30 Complete Guided Builds</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                          30 Real-World Python Portfolio Projects
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                          15 Beginner, 10 Intermediate, and 5 Advanced production projects with complete runnable source code, expected outputs, testing instructions, and common errors & fixes.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveViewTab('py-roadmap')}
                          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm shadow-indigo-600/30"
                        >
                          <Compass className="w-3.5 h-3.5" />
                          <span>View 5-Stage Roadmap →</span>
                        </button>
                      </div>
                    </div>

                    {/* Filters & Search */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {(['ALL', 'Beginner', 'Intermediate', 'Advanced'] as const).map(tier => (
                          <button
                            key={tier}
                            onClick={() => setPyProjectFilter(tier)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                              pyProjectFilter === tier
                                ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                                : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                            }`}
                          >
                            {tier === 'ALL' ? `All 30 Projects` : `${tier} (${
                              tier === 'Beginner' ? '15 Builds' : tier === 'Intermediate' ? '10 Builds' : '5 Builds'
                            })`}
                          </button>
                        ))}
                      </div>

                      <div className="relative max-w-xs w-full">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={pyProjectSearch}
                          onChange={(e) => setPyProjectSearch(e.target.value)}
                          placeholder="Search 30 projects..."
                          className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-purple-500"
                        />
                      </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="space-y-6">
                      {PYTHON_PORTFOLIO_PROJECTS
                        .filter(p => pyProjectFilter === 'ALL' || p.tier === pyProjectFilter)
                        .filter(p => {
                          if (!pyProjectSearch.trim()) return true;
                          const q = pyProjectSearch.toLowerCase();
                          return p.title.toLowerCase().includes(q) || p.objective.toLowerCase().includes(q) || p.requiredKnowledge.some(k => k.toLowerCase().includes(q));
                        })
                        .map((project) => {
                          const isCodeRevealed = !!revealedPyProjectCode[project.id];
                          return (
                            <div
                              key={project.id}
                              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs font-black px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                                      Project #{project.number}
                                    </span>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                      project.tier === 'Beginner' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' :
                                      project.tier === 'Intermediate' ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300' :
                                      'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                                    }`}>
                                      {project.tier}
                                    </span>
                                    <span className="text-[11px] font-mono text-slate-400">
                                      ⏱️ {project.duration}
                                    </span>
                                  </div>
                                  <h4 className="text-lg font-black text-slate-900 dark:text-white">
                                    {project.title}
                                  </h4>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                  <button
                                    onClick={() => {
                                      setUserPythonCode(project.code);
                                      setSelectedPyTemplateId(project.id);
                                      setPythonTerminalOutput(project.expectedOutput);
                                      setPythonExecutionStatus('success');
                                      setActiveViewTab('playground');
                                      window.scrollTo({ top: 320, behavior: 'smooth' });
                                    }}
                                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                                    title="Load this project code into the Python Interactive Runner"
                                  >
                                    <Play className="w-3.5 h-3.5 fill-white" />
                                    <span>Run in Python Runner</span>
                                  </button>
                                  <button
                                    onClick={() => setRevealedPyProjectCode(prev => ({ ...prev, [project.id]: !prev[project.id] }))}
                                    className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                                  >
                                    {isCodeRevealed ? 'Hide Code' : 'View Code'}
                                  </button>
                                </div>
                              </div>

                              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                <strong>Objective:</strong> {project.objective}
                              </p>

                              {/* Knowledge Tags */}
                              <div className="flex flex-wrap gap-1.5">
                                {project.requiredKnowledge.map((req, rIdx) => (
                                  <span key={rIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                    {req}
                                  </span>
                                ))}
                              </div>

                              {/* Features Checklist */}
                              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Core Features Built:</span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-700 dark:text-slate-300">
                                  {project.features.map((feat, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                      <span>{feat}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Collapsible Source Code & Expected Output */}
                              {isCodeRevealed && (
                                <div className="space-y-4 pt-2 animate-in fade-in duration-150">
                                  <div className="space-y-1.5">
                                    <div className="flex items-center justify-between text-xs text-slate-400">
                                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">project_{project.number}.py (Full Implementation)</span>
                                      <button
                                        onClick={() => {
                                          navigator.clipboard.writeText(project.code);
                                        }}
                                        className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer font-bold"
                                      >
                                        <Copy className="w-3 h-3" />
                                        <span>Copy Full Code</span>
                                      </button>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto max-h-80 overflow-y-auto">
                                      <pre className="whitespace-pre-wrap">{project.code}</pre>
                                    </div>
                                  </div>

                                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1 font-mono text-xs text-emerald-400">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-sans">Expected Terminal Execution:</span>
                                    <pre className="whitespace-pre-wrap">{project.expectedOutput}</pre>
                                  </div>

                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                    <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 space-y-1">
                                      <span className="font-bold text-amber-700 dark:text-amber-300">Testing Instructions:</span>
                                      <p className="text-slate-700 dark:text-slate-300">{project.testingInstructions}</p>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 space-y-1">
                                      <span className="font-bold text-rose-700 dark:text-rose-300">Common Errors & Fixes:</span>
                                      <p className="text-slate-700 dark:text-slate-300">{project.commonErrorsAndFixes}</p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}

                {/* 2.8 PYTHON 5-STAGE ROADMAP & CAREERS */}
                {activeViewTab === 'py-roadmap' && (
                  <div className="space-y-8 animate-in fade-in duration-150">
                    {/* Header */}
                    <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-teal-500/10 border border-indigo-200/80 dark:border-indigo-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-300 dark:border-indigo-700 text-indigo-800 dark:text-indigo-200 text-xs font-bold">
                          <Compass className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                          <span>5-Stage Professional Learning Path</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                          Python Mastery Roadmap & 5 Career Specializations
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                          From absolute beginner fundamentals to full-stack web backend, data engineering, machine learning & AI systems.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => { setSelectedModuleFilter(1); handleSelectLesson('py-mod1-1'); setActiveViewTab('lesson'); }}
                          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm shadow-emerald-600/30"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Start Stage 1 Lessons →</span>
                        </button>
                      </div>
                    </div>

                    {/* 5 Stages Vertical Timeline / Cards */}
                    <div className="space-y-6">
                      {PYTHON_ROADMAP_STAGES.map((stage) => (
                        <div
                          key={stage.stage}
                          className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded-md bg-indigo-600 text-white">
                                  Stage {stage.stage}
                                </span>
                                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                  {stage.level}
                                </span>
                              </div>
                              <h4 className="text-lg font-black text-slate-900 dark:text-white">
                                {stage.title}
                              </h4>
                            </div>

                            {stage.careerRelevance && (
                              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-xl border border-emerald-200 dark:border-emerald-800 shrink-0">
                                {stage.careerRelevance}
                              </span>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            {stage.description}
                          </p>

                          {/* Topics Grid */}
                          <div className="space-y-1.5 pt-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              Core Competencies & Topics:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                              {stage.topics.map((top, tIdx) => (
                                <div
                                  key={tIdx}
                                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                                  <span>{top}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2.9 C DEDICATED TABS (COMPILER, INTERVIEW, 10 PROJECTS, 60-DAY ROADMAP, DEBUGGING) */}
                {(activeViewTab === 'c-compiler' || activeViewTab === 'c-interview' || activeViewTab === 'c-projects' || activeViewTab === 'c-roadmap' || activeViewTab === 'c-debug') && (
                  <CTutorialTabs
                    activeTab={activeViewTab}
                    onNavigateTab={(tab) => {
                      if (tab === 'lesson') setActiveViewTab('lesson');
                      else setActiveViewTab(tab);
                    }}
                  />
                )}

                {/* 2.10 C++ DEDICATED TABS (COMPILER, INTERVIEW, 20 PROJECTS, PRACTICE, DEBUGGING) */}
                {(activeViewTab === 'cpp-compiler' || activeViewTab === 'cpp-interview' || activeViewTab === 'cpp-projects' || activeViewTab === 'cpp-practice' || activeViewTab === 'cpp-debug') && (
                  <CppTutorialTabs
                    activeTab={activeViewTab}
                    onNavigateTab={(tab) => {
                      if (tab === 'lesson') setActiveViewTab('lesson');
                      else setActiveViewTab(tab);
                    }}
                  />
                )}

                {/* 3. PRACTICE EXERCISES VIEW (3 Exercises) */}
                {activeViewTab === 'exercises' && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div>
                      <h3 className="text-lg font-black text-slate-900 dark:text-white">
                        Practice Exercises: {activeLesson.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Solve these 3 hands-on tasks independently to reinforce your understanding.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {(activeLesson.exercises || []).map((ex, idx) => {
                        const showSol = revealedSolutions[idx];
                        const showHint = revealedHints[idx];

                        return (
                          <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                                {ex.title}
                              </span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                                {ex.difficulty || 'Beginner'}
                              </span>
                            </div>

                            <p className="text-sm font-bold text-slate-900 dark:text-white">
                              {ex.task}
                            </p>
                            <p className="text-xs text-slate-600 dark:text-slate-300">
                              {ex.instructions}
                            </p>

                            <div className="flex items-center gap-3 pt-2">
                              <button
                                onClick={() => setRevealedHints(prev => ({ ...prev, [idx]: !prev[idx] }))}
                                className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer flex items-center gap-1"
                              >
                                <Lightbulb className="w-3.5 h-3.5" />
                                <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
                              </button>

                              <button
                                onClick={() => setRevealedSolutions(prev => ({ ...prev, [idx]: !prev[idx] }))}
                                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer flex items-center gap-1"
                              >
                                <span>{showSol ? 'Hide Solution' : 'Reveal Solution'}</span>
                              </button>
                            </div>

                            {showHint && (
                              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 animate-in fade-in duration-150">
                                <strong>Hint: </strong>{ex.hint}
                              </div>
                            )}

                            {showSol && (
                              <div className="space-y-2 pt-2 animate-in fade-in duration-150">
                                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto">
                                  <pre>{ex.solution}</pre>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                  <strong>Explanation: </strong>{ex.explanation}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 4. LESSON QUIZ VIEW (5 Questions) */}
                {activeViewTab === 'quiz' && (
                  <div className="space-y-6 animate-in fade-in duration-150">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white">
                          Knowledge Check Quiz
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          5 questions to verify your mastery of {activeLesson.title}.
                        </p>
                      </div>
                      {quizSubmitted && (
                        <div className="text-right">
                          <span className={`text-base font-black px-3 py-1 rounded-xl ${
                            quizScorePercent >= 70 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}>
                            {correctCount} / {quizQuestions.length} ({quizScorePercent}%)
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-6">
                      {quizQuestions.map((q, qIdx) => {
                        const userAns = selectedAnswers[qIdx];
                        const isCorrect = userAns === q.correctAnswer;

                        return (
                          <div key={qIdx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
                            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                              Question #{qIdx + 1}
                            </span>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">
                              {q.question}
                            </p>

                            <div className="space-y-2 pt-1">
                              {q.options.map((opt, oIdx) => {
                                const isSelected = userAns === oIdx;
                                const isCorrectChoice = q.correctAnswer === oIdx;

                                let borderClass = 'border-slate-200 dark:border-slate-700 hover:border-indigo-400';
                                let bgClass = 'bg-white dark:bg-slate-900';

                                if (quizSubmitted) {
                                  if (isCorrectChoice) {
                                    borderClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-100';
                                  } else if (isSelected && !isCorrectChoice) {
                                    borderClass = 'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-100';
                                  }
                                } else if (isSelected) {
                                  borderClass = 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/60';
                                }

                                return (
                                  <button
                                    key={oIdx}
                                    disabled={quizSubmitted}
                                    onClick={() => setSelectedAnswers(prev => ({ ...prev, [qIdx]: oIdx }))}
                                    className={`w-full p-3.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer disabled:cursor-default ${borderClass} ${bgClass}`}
                                  >
                                    <div className="flex items-center gap-2.5">
                                      <span className="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[10px] flex items-center justify-center shrink-0">
                                        {String.fromCharCode(65 + oIdx)}
                                      </span>
                                      <span>{opt}</span>
                                    </div>
                                    {quizSubmitted && isCorrectChoice && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                                  </button>
                                );
                              })}
                            </div>

                            {quizSubmitted && (
                              <div className={`p-3 rounded-xl text-xs ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300' : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300'}`}>
                                <strong>{isCorrect ? '✓ Correct! ' : '✗ Incorrect. '}</strong>
                                {q.explanation}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Quiz Controls */}
                    <div className="flex items-center gap-3 pt-2">
                      {!quizSubmitted ? (
                        <button
                          onClick={() => setQuizSubmitted(true)}
                          disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                          className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs shadow-md cursor-pointer transition-all active:scale-95"
                        >
                          Submit Answers
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedAnswers({});
                            setQuizSubmitted(false);
                          }}
                          className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md cursor-pointer transition-all"
                        >
                          Retry Quiz
                        </button>
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Navigation Strip */}
              <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
                <button
                  onClick={handlePrev}
                  disabled={!hasPrev}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Topic</span>
                </button>

                {/* AI Assistant Trigger Button */}
                <button
                  onClick={() => setAiModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold hover:bg-purple-100 dark:hover:bg-purple-900/60 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Ask AI Mentor About This Topic</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={!hasNext}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm disabled:opacity-40 cursor-pointer"
                >
                  <span>Next Topic</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* 4. AI HTML MENTOR QUICK MODAL                             */}
      {/* ======================================================== */}
      {aiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  HTML AI Mentor: {activeLesson.title}
                </h3>
              </div>
              <button
                onClick={() => setAiModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Recommended Questions:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  `Explain ${activeLesson.title} line by line`,
                  `What are common beginner traps in ${activeLesson.title}?`,
                  `How does accessibility apply to ${activeLesson.title}?`,
                  `Generate a clean practical HTML example for ${activeLesson.title}`
                ].map((promptText, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setAiPrompt(promptText);
                      handleAskAi(promptText);
                    }}
                    className="p-1.5 px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:text-indigo-600 text-left cursor-pointer"
                  >
                    {promptText}
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt Input */}
            <div className="space-y-2 pt-2">
              <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="Ask any question about this HTML topic..."
                rows={3}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={() => handleAskAi()}
                disabled={aiLoading || !aiPrompt.trim()}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {aiLoading ? (
                  <span>Thinking & Generating Explanation...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Get AI Explanation</span>
                  </>
                )}
              </button>
            </div>

            {/* AI Response Box */}
            {aiResponse && (
              <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-xs text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap font-sans max-h-60 overflow-y-auto">
                {aiResponse}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
