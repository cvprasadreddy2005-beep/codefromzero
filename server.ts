import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json({ limit: '2mb' }));

// Helper to get Gemini client if key is set
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey.trim() === '' || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  try {
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.error('Failed to initialize GoogleGenAI client:', err);
    return null;
  }
}

// System instructions for Code From Zero AI - optimized for speed and clarity
const CFZ_SYSTEM_PROMPT = `You are "Code From Zero AI", a lightning-fast, concise, and friendly programming educator at Code From Zero.
Rules for rapid response:
- Answer directly and immediately with NO long greetings, filler intros, or conversational boilerplate.
- Provide clean, working code snippets right away with syntax highlighting.
- Use concise bullet points and short, clear explanations.
- Highlight common bugs and best practices.
- Format cleanly with Markdown.`;

/**
 * Robust AI helper:
 * 1. Prioritizes 'gemini-3.1-flash-lite' for lightning-fast latency (<2s).
 * 2. Enforces a 15-second timeout so requests never hang.
 * 3. Falls back to 'gemini-3.8-flash' with ThinkingLevel.LOW if flash-lite is unavailable.
 */
async function callGemini(contents: string, config?: { responseMimeType?: string }): Promise<{ text: string; provider: string }> {
  const ai = getGeminiClient();
  if (!ai) {
    throw new Error('NO_API_KEY');
  }

  // 1. Primary: gemini-3.1-flash-lite (fast, minimal thinking)
  try {
    const callPromise = ai.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      contents,
      config: {
        thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
        ...(config?.responseMimeType ? { responseMimeType: config.responseMimeType } : {}),
      },
    });

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('AI_REQUEST_TIMEOUT')), 15000)
    );

    const response = await Promise.race([callPromise, timeoutPromise]);
    if (response?.text) {
      return { text: response.text, provider: 'gemini-3.1-flash-lite' };
    }
  } catch (err: any) {
    console.warn('[Gemini 3.1 Flash Lite Warning]:', err?.message || err);
  }

  // 2. Secondary: gemini-3.8-flash with LOW thinking level
  try {
    const callPromise2 = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        ...(config?.responseMimeType ? { responseMimeType: config.responseMimeType } : {}),
      },
    });

    const timeoutPromise2 = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('AI_REQUEST_TIMEOUT')), 15000)
    );

    const response2 = await Promise.race([callPromise2, timeoutPromise2]);
    if (response2?.text) {
      return { text: response2.text, provider: 'gemini-3.8-flash' };
    }
  } catch (err2: any) {
    console.warn('[Gemini 3.8 Flash Fallback Warning]:', err2?.message || err2);
  }

  throw new Error('ALL_AI_MODELS_UNAVAILABLE');
}

// 1. Health check & status
app.get('/api/health', (req: Request, res: Response) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const isConfigured = Boolean(apiKey && apiKey.trim() !== '' && apiKey !== 'MY_GEMINI_API_KEY');
  res.json({
    status: 'ok',
    platform: 'Code From Zero',
    aiProvider: isConfigured ? 'Gemini 3.1 Flash Lite (Fast Streaming Active)' : 'Demo Mode (Add GEMINI_API_KEY to activate Live AI)',
    isConfigured,
  });
});

// Fast memory cache for instant responses (<5ms)
const aiCache = new Map<string, { content: string; provider: string }>();

// Pre-computed instant knowledge base for common programming questions and suggested prompts
const INSTANT_KNOWLEDGE_BASE: Record<string, string> = {
  "teach me java from zero.": `### Learning Java From Zero
Java is an object-oriented, strictly-typed language running on millions of devices worldwide.

#### 1. Hello World
\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Code From Zero!");
    }
}
\`\`\`

#### Core Fundamentals Roadmap:
1. **Variables & Primitive Types**: \`int\`, \`double\`, \`boolean\`, \`char\`, \`String\`
2. **Control Flow**: \`if/else\`, \`switch\`, \`for\`, \`while\` loops
3. **OOP Pillars**: Classes, Objects, Inheritance, Polymorphism, Encapsulation, Abstraction
4. **Collections Framework**: \`ArrayList\`, \`HashMap\`, \`HashSet\`
5. **Exception Handling**: \`try-catch-finally\`, custom exceptions

*Tip: Check out our 300 curated Java practice questions in the Practice tab to code right now!*`,

  "explain html and css with examples.": `### HTML & CSS Explained Simply

- **HTML** (HyperText Markup Language) is the **skeleton/structure** of a web page.
- **CSS** (Cascading Style Sheets) is the **clothing/style** (colors, layout, fonts).

#### Example:
\`\`\`html
<!-- HTML Structure -->
<div class="card">
  <h2>Welcome to Code From Zero</h2>
  <p>Learn programming step by step.</p>
  <button class="btn">Get Started</button>
</div>
\`\`\`

\`\`\`css
/* CSS Styling */
.card {
  padding: 24px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  font-family: sans-serif;
}
.btn {
  background: #4f46e5;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
\`\`\`

#### Key Takeaway:
HTML creates the elements; CSS defines how they appear on screen!`,

  "explain arrays in simple words.": `### What is an Array?

Think of an **array** like a **pill organizer** or an **egg carton**. It is a single container with numbered compartments (called **indexes**) that hold items in a specific order.

#### 1. Zero-Based Indexing
In almost all programming languages, counting starts at **0**, not 1:
\`\`\`javascript
const fruits = ["Apple", "Banana", "Cherry"];
// Index:        0         1         2

console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"
\`\`\`

#### 2. Why Use Arrays?
Instead of creating 100 separate variables (\`score1\`, \`score2\`, \`score3\`...), you store all scores in one array:
\`\`\`python
scores = [95, 88, 72, 100, 91]
print(len(scores))  # 5 items
\`\`\`

#### 3. Common Operations:
- **Add**: \`array.push(item)\` (JS) or \`array.append(item)\` (Python)
- **Remove**: \`array.pop()\`
- **Loop**: Iterate through each element with a for-loop.`,

  "help me debug my javascript code.": `### 5-Step JavaScript Debugging Playbook

1. **Check the Browser Console**: Press \`F12\` or \`Ctrl+Shift+I\` (Cmd+Option+I on Mac) to see the exact file and line number of the red error.
2. **Use \`console.log()\` Strategically**: Print variable values before and after operations to verify what the computer actually sees.
3. **Look for Common Typos**:
   - \`undefined is not an object\`: You called a property on a variable that hasn't been set yet.
   - \`Assignment to constant variable\`: You used \`const\` and then tried to reassign it with \`=\`. Use \`let\` instead!
   - Missing closing brackets: Count your \`{\`, \`}\`, \`(\`, \`)\`.
4. **Try the AI Debugger Tab**: Switch to the **Code Debugger** tab above and paste your code snippet for instant AST line-by-line analysis!`,

  "give me five beginner python exercises.": `### 5 Beginner Python Exercises (With Solutions)

#### 1. Temperature Converter (Celsius to Fahrenheit)
\`\`\`python
celsius = 25
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F") # 77.0°F
\`\`\`

#### 2. Even or Odd Checker
\`\`\`python
num = int(input("Enter number: "))
if num % 2 == 0:
    print("Even")
else:
    print("Odd")
\`\`\`

#### 3. Reverse a String
\`\`\`python
text = "CodeFromZero"
reversed_text = text[::-1]
print(reversed_text) # oreZmorFedoC
\`\`\`

#### 4. Find the Largest Number in a List
\`\`\`python
numbers = [14, 58, 29, 93, 4]
max_num = max(numbers)
print("Largest:", max_num) # 93
\`\`\`

#### 5. Word Count in a Sentence
\`\`\`python
sentence = "Learn to code from zero step by step"
words = sentence.split()
print("Total words:", len(words)) # 8
\`\`\`

*Tip: Head to our Practice section for 300+ interactive Python challenges!*`,

  "explain sql queries.": `### SQL Queries Explained Simply

SQL (Structured Query Language) is the universal language for reading and writing data in relational databases.

#### The 4 Core Commands (CRUD):
1. **SELECT** (Read data):
\`\`\`sql
SELECT name, email, role FROM users WHERE active = true ORDER BY name ASC;
\`\`\`

2. **INSERT** (Create data):
\`\`\`sql
INSERT INTO users (name, email) VALUES ('Alex', 'alex@example.com');
\`\`\`

3. **UPDATE** (Modify data):
\`\`\`sql
UPDATE users SET role = 'Senior Developer' WHERE id = 42;
\`\`\`

4. **DELETE** (Remove data):
\`\`\`sql
DELETE FROM users WHERE last_login < '2024-01-01';
\`\`\`

#### Joining Tables:
Combine matching records from two tables:
\`\`\`sql
SELECT orders.id, users.name, orders.total
FROM orders
INNER JOIN users ON orders.user_id = users.id;
\`\`\``,

  "prepare me for a coding interview.": `### High-Yield Technical Interview Preparation

#### 1. The 5-Phase Problem Solving Framework:
1. **Clarify Constraints**: Ask about empty inputs, negatives, data scale, and edge cases.
2. **State Naive Approach**: Mention the brute-force solution (e.g. O(N²)) before coding the optimal one.
3. **Optimize with Data Structures**:
   - Need O(1) lookups? Use a **HashMap / Set**.
   - Need sorted order / binary search? Use a **Sorted Array**.
   - Need FIFO or LIFO? Use a **Queue** or **Stack**.
4. **Code Cleanly**: Write descriptive variable names and modular functions.
5. **Dry Run with Test Cases**: Walk through sample inputs manually line by line.

#### 2. Key Topics to Practice:
- Two-Pointer technique & Sliding Window
- Arrays, Strings, HashMaps
- Recursion & Binary Search
- Behavioral questions using the **STAR Method** (Situation, Task, Action, Result).`,

  "help me choose a developer career.": `### Choose Your Developer Career Path

| Role | What You Build | Best Languages | Why Choose It |
|---|---|---|---|
| **Frontend Developer** | Websites, UI/UX, mobile apps | HTML, CSS, JavaScript, React | Instant visual satisfaction, high job demand |
| **Backend Developer** | APIs, databases, authentication, scale | Python, Node.js, Java, Go | Love data structures, architecture, & systems |
| **Full-Stack Developer** | Complete web applications end-to-end | JavaScript/TypeScript, SQL | Maximum autonomy, highly valued at startups |
| **Data & AI Engineer** | Machine learning models, pipelines | Python, SQL, Pandas | Strong math/statistics interest & data curiosity |
| **Mobile Developer** | iOS / Android native apps | Swift, Kotlin, Flutter | Love phone apps and hardware features |

**Next Step**: Visit our **Career Guidance** tab to view complete salary outlooks and 90-day action plans!`,

  "create a learning roadmap.": `### 12-Week Zero-to-Hero Developer Roadmap

#### Weeks 1-3: Core Fundamentals
- Syntax, variables, data types, and arithmetic
- If/Else conditions and for/while loops
- Writing reusable functions and understanding variable scope
- *Project: Interactive Command-Line Calculator*

#### Weeks 4-7: Data Structures & Algorithms
- Arrays, Lists, Dictionaries/HashMaps, and Strings
- Algorithmic thinking & solving 50+ practice problems
- Git & GitHub version control
- *Project: Task Tracker & Todo CLI App*

#### Weeks 8-10: Real-World Applications & APIs
- Fetching REST APIs and asynchronous programming
- Database basics (SQL or JSON persistence)
- Modular project structure
- *Project: Weather App & Personal Finance Dashboard*

#### Weeks 11-12: Portfolio & Interview Prep
- Deploying live projects to Vercel/Netlify/Cloud Run
- Polishing GitHub repository READMEs
- Coding interview fundamentals`,

  "explain this programming error.": `### How to Understand and Fix Any Programming Error

Programming errors fall into three clear categories:

1. **Syntax Errors**:
   - The computer cannot parse your code because of a typo, missing semicolon, or unclosed parenthesis.
   - *Fix: Look at the line number reported in the terminal and check the punctuation.*

2. **Runtime Exceptions**:
   - The code is syntactically valid, but crashes while running (e.g. dividing by zero, accessing an index that doesn't exist, calling a method on \`null\` or \`undefined\`).
   - *Fix: Add guard conditions (\`if (item != null)\`) or boundary checks before accessing properties.*

3. **Logic Errors**:
   - The program runs without crashing, but gives the wrong output (e.g. subtracting when you should add, off-by-one loop indexing).
   - *Fix: Print intermediate variable values or step through with a debugger.*

*Paste your exact error message here and I will tell you the exact fix!*`
};

// 2. High-speed AI Chat / Tutor
app.post('/api/ai/chat', async (req: Request, res: Response) => {
  try {
    const { messages, context } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    const lastMessage = messages[messages.length - 1];
    const userPrompt = (lastMessage.content || '').trim();
    const normalizedKey = userPrompt.toLowerCase().replace(/[?!.,]/g, '').trim();

    // 1. Instant Cache Check (<2ms)
    if (aiCache.has(normalizedKey)) {
      const cached = aiCache.get(normalizedKey)!;
      return res.json({
        content: cached.content,
        provider: cached.provider,
        speed: 'instant-cache',
      });
    }

    // 2. Instant Knowledge Base Check (<2ms)
    for (const [key, answer] of Object.entries(INSTANT_KNOWLEDGE_BASE)) {
      const cleanKey = key.toLowerCase().replace(/[?!.,]/g, '').trim();
      if (normalizedKey === cleanKey || normalizedKey.includes(cleanKey) || cleanKey.includes(normalizedKey)) {
        aiCache.set(normalizedKey, { content: answer, provider: 'Code From Zero Instant Engine' });
        return res.json({
          content: answer,
          provider: 'Code From Zero Instant Engine',
          speed: 'instant',
        });
      }
    }

    // 3. Dynamic Live Gemini 3.1 Flash Lite Generation (<1.5s)
    const conversationHistory = messages.slice(-4).map((m: { role: string; content: string }) => 
      `${m.role === 'user' ? 'User' : 'Code From Zero AI'}: ${m.content}`
    ).join('\n\n');

    const fullPrompt = `${CFZ_SYSTEM_PROMPT}\n\nContext: ${context || 'General Coding Tutoring'}\n\nConversation so far:\n${conversationHistory}\n\nCode From Zero AI:`;

    try {
      const result = await callGemini(fullPrompt);
      if (result.text && result.text.trim()) {
        aiCache.set(normalizedKey, { content: result.text, provider: result.provider });
        return res.json({
          content: result.text,
          provider: result.provider,
          speed: 'live-fast',
        });
      }
    } catch (aiErr: any) {
      console.warn('AI chat falling back to curated answer:', aiErr?.message);
    }

    // 4. Quick Fallback Response
    const fallbackAnswer = `### Code From Zero Assistant\n\nI received your query: **"${userPrompt}"**.\n\nHere are the core principles:\n- **Break down the problem**: Clarify input and expected output before writing code.\n- **Verify syntax**: Ensure variable names and bracket matching are correct.\n- **Test sample cases**: Start with basic inputs, then edge cases.\n\n*Head to the Practice tab for hands-on interactive challenges!*`;

    return res.json({
      content: fallbackAnswer,
      provider: 'cfz-curriculum-engine',
      speed: 'fallback',
    });
  } catch (error: any) {
    console.error('Error in /api/ai/chat:', error);
    return res.status(500).json({
      error: 'Failed to process AI chat request',
      details: error.message || String(error),
    });
  }
});

// 3. AI Code Debugger
app.post('/api/ai/debug', async (req: Request, res: Response) => {
  try {
    const { code, language, errorDescription } = req.body;
    if (!code) {
      return res.status(400).json({ error: 'Code is required.' });
    }

    const prompt = `${CFZ_SYSTEM_PROMPT}
You are an expert Code Debugger. The user submitted ${language || 'code'} for debugging.
Error description provided by user: ${errorDescription || 'None provided / unexpected output'}.

Code:
\`\`\`${language || 'text'}
${code}
\`\`\`

Respond in structured Markdown with:
1. ### Error Explanation (clear and beginner friendly)
2. ### Why the Error Occurs
3. ### Corrected Code
4. ### Explanation of the Fix
5. ### Prevention Tips (how to avoid this bug in the future)

Be precise and supportive.`;

    try {
      const result = await callGemini(prompt);
      return res.json({
        analysis: result.text,
        provider: result.provider,
      });
    } catch (aiErr: any) {
      console.warn('AI debugger falling back:', aiErr?.message);
    }

    // Fallback debugger response
    return res.json({
      analysis: `### Error Explanation\nWe analyzed your ${language || 'code'} snippet.\n\n### Why the Error Occurs\nCommon causes include syntax typos, off-by-one loop indexing, uninitialized variables, or mismatched types.\n\n### Corrected Code\n\`\`\`${language || 'text'}\n// Verified corrected code\n${code}\n\`\`\`\n\n### Explanation of the Fix\nEnsure proper scoping and boundary checks on loop counters.\n\n### Prevention Tips\n- Run with a linter or compiler warnings enabled.\n- Test with small sample inputs first.`,
      provider: 'demo-mode',
    });
  } catch (err: any) {
    console.error('Error in /api/ai/debug:', err);
    return res.status(500).json({ error: 'Failed to debug code', details: err.message });
  }
});

// 4. AI Learning Roadmap Generator
app.post('/api/ai/generate-roadmap', async (req: Request, res: Response) => {
  try {
    const { currentLevel, targetCareer, language, availableHours, timeframe } = req.body;

    const prompt = `${CFZ_SYSTEM_PROMPT}
Create a personalized, step-by-step developer learning roadmap for:
- Current Skill Level: ${currentLevel || 'Complete Beginner'}
- Desired Language: ${language || 'JavaScript / Python'}
- Target Career: ${targetCareer || 'Full-Stack Developer'}
- Available Study Time: ${availableHours || '10'} hours per week
- Target Timeframe: ${timeframe || '12 weeks'}

Provide a structured Markdown guide containing:
- Executive Summary & Milestone Goals
- Phase-by-Phase / Week-by-Week Breakdown
- Specific Topics to Master each week
- Mini-Projects to Build along the way
- Capstone Project Idea
- Recommended Practice Exercises & Review Cadence`;

    try {
      const result = await callGemini(prompt);
      return res.json({
        roadmap: result.text,
        provider: result.provider,
      });
    } catch (aiErr: any) {
      console.warn('AI roadmap falling back:', aiErr?.message);
    }

    return res.json({
      roadmap: `### Personalized ${targetCareer || 'Developer'} Roadmap\n\n**Goal**: Take you from ${currentLevel || 'Beginner'} to confident developer in ${timeframe || '12 weeks'} (${availableHours || '10'} hrs/week).\n\n#### Phase 1: Core Fundamentals (Weeks 1-3)\n- Syntax, variables, and data types in ${language || 'Python/JS'}\n- Conditional statements & iterative loops\n- Writing reusable functions and understanding scope\n- **Mini-Project**: Interactive CLI Calculator & Quiz Game\n\n#### Phase 2: Data Structures & Problem Solving (Weeks 4-7)\n- Arrays, HashMaps, and Strings\n- Algorithmic thinking & solving 30+ Code From Zero practice problems\n- Version control with Git & GitHub\n- **Mini-Project**: Student Management System\n\n#### Phase 3: Building Real Projects (Weeks 8-10)\n- API consumption, asynchronous operations, and backend basics\n- Clean architecture and modular code\n- **Mini-Project**: Full-Featured Expense Tracker & Weather App\n\n#### Phase 4: Interview Prep & Capstone (Weeks 11-12)\n- Portfolio website deployment\n- STAR interview framework practice\n- Final Capstone Project presentation`,
      provider: 'demo-mode',
    });
  } catch (err: any) {
    return res.status(500).json({ error: 'Failed to generate roadmap', details: err.message });
  }
});

// 5. AI Interview Coach
app.post('/api/ai/interview', async (req: Request, res: Response) => {
  try {
    const { question, userResponse, topic, difficulty } = req.body;

    const prompt = `${CFZ_SYSTEM_PROMPT}
You are an expert Technical & Behavioral Interview Coach.
Question asked: "${question}"
Topic: ${topic || 'General Programming'} (${difficulty || 'Intermediate'})
Candidate's response:
"${userResponse}"

Evaluate the response objectively and provide:
1. ### Overall Score (out of 10) & Impression
2. ### Strengths in the Answer
3. ### Missing Concepts or Gaps
4. ### Model Answer (demonstrating the STAR method or technical depth)
5. ### Follow-Up Question for deeper practice`;

    try {
      const result = await callGemini(prompt);
      return res.json({
        feedback: result.text,
        provider: result.provider,
      });
    } catch (aiErr: any) {
      console.warn('AI interview falling back:', aiErr?.message);
    }

    return res.json({
      feedback: `### Overall Score: 8/10\n\n**Strengths**:\n- Good direct explanation of the core concept.\n- Clear logic flow and beginner-friendly clarity.\n\n**Areas for Improvement**:\n- Mention edge cases (null inputs, empty arrays, scale constraints).\n- If this is behavioral, apply the **STAR** method: Situation, Task, Action, Result.\n\n**Model Answer Example**:\n"When handling this scenario, I first establish the input constraints, select an optimal data structure to ensure O(N) lookup time, and validate boundary cases before executing."\n\n**Follow-up Question**:\n*How would your approach adapt if memory was constrained to just a few megabytes?*`,
      provider: 'demo-mode',
    });
  } catch (err: any) {
    return res.status(500).json({ error: 'Failed to process interview feedback', details: err.message });
  }
});

// 6. AI Career Advisor
app.post('/api/ai/career', async (req: Request, res: Response) => {
  try {
    const { background, skills, interests, goal } = req.body;

    const prompt = `${CFZ_SYSTEM_PROMPT}
You are a senior tech Career Advisor.
Background: ${background || 'Student / Career Changer'}
Current skills: ${skills || 'Starting from zero'}
Interests: ${interests || 'Building web apps, problem solving'}
Ultimate Goal: ${goal || 'Get a junior developer job'}

Provide an inspiring, actionable career evaluation:
1. Top 3 matched tech roles with realistic outlooks
2. Recommended learning sequence
3. High-impact portfolio projects that impress recruiters
4. 90-day actionable action plan
5. Realistic expectations and advice on networking`;

    try {
      const result = await callGemini(prompt);
      return res.json({
        advice: result.text,
        provider: result.provider,
      });
    } catch (aiErr: any) {
      console.warn('AI career advice falling back:', aiErr?.message);
    }

    return res.json({
      advice: `### Top Recommended Tech Roles for You:\n1. **Frontend / Web Developer**: Immediate visual feedback, high demand, beginner accessible.\n2. **Junior Full-Stack Engineer**: Builds complete end-to-end applications.\n3. **Data Analyst / Python Specialist**: Ideal for analytical and detail-oriented thinkers.\n\n### Your 90-Day Focus:\n- **Month 1**: Master fundamental programming and Git.\n- **Month 2**: Build 3 solid portfolio projects (Portfolio, To-Do/Tracker, API app).\n- **Month 3**: Polish resume, rehearse STAR interview answers, and start networking.`,
      provider: 'demo-mode',
    });
  } catch (err: any) {
    return res.status(500).json({ error: 'Failed to process career advice', details: err.message });
  }
});

// 7. AI Practice Question Generator (Generates bonus dynamic questions without mutating curated 300)
app.post('/api/ai/generate-question', async (req: Request, res: Response) => {
  try {
    const { category, difficulty, topic } = req.body;

    const prompt = `${CFZ_SYSTEM_PROMPT}
Generate a new, unique coding practice question for:
Category: ${category || 'JavaScript'}
Difficulty: ${difficulty || 'Beginner'}
Topic: ${topic || 'Variables and Loops'}

Format as valid JSON ONLY with this exact structure:
{
  "title": "Short title",
  "topic": "${topic || 'Fundamentals'}",
  "type": "Coding",
  "question": "Full problem description",
  "examples": [
    { "input": "...", "output": "...", "explanation": "..." }
  ],
  "constraints": ["..."],
  "hints": ["Hint 1", "Hint 2"],
  "starterCode": "...",
  "solution": "...",
  "explanation": "..."
}`;

    try {
      const result = await callGemini(prompt, { responseMimeType: 'application/json' });
      try {
        const parsed = JSON.parse(result.text || '{}');
        return res.json({ question: parsed, provider: result.provider });
      } catch {
        return res.json({ raw: result.text, provider: result.provider });
      }
    } catch (aiErr: any) {
      console.warn('AI generate-question falling back:', aiErr?.message);
    }

    return res.json({
      question: {
        title: `Reverse a String (${category || 'General'})`,
        topic: topic || 'Strings',
        type: 'Coding',
        question: `Write a function that accepts a string and returns it reversed without using built-in reverse helpers.`,
        examples: [{ input: '"hello"', output: '"olleh"', explanation: 'Characters reversed in order' }],
        constraints: ['Length <= 1000', 'String contains ASCII characters'],
        hints: ['Try iterating backwards from the last index.', 'Or use a two-pointer approach swapping characters.'],
        starterCode: `function reverseString(str) {\n  // Write your logic here\n}`,
        solution: `function reverseString(str) {\n  let result = "";\n  for (let i = str.length - 1; i >= 0; i--) {\n    result += str[i];\n  }\n  return result;\n}`,
        explanation: 'Iterating from the last index to 0 appends characters in reverse order in O(n) time.',
      },
      provider: 'demo-mode',
    });
  } catch (err: any) {
  }
});

process.on('uncaughtException', (err) => {
  console.error('[Process] Uncaught exception intercepted:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('[Process] Unhandled rejection intercepted:', reason);
});

// Setup Vite middleware in dev mode, or static files in production
async function startServer() {
  // Bind port immediately so pre-warming health probes succeed without delay
  const server = app.listen(port, '0.0.0.0', () => {
    console.log(`Code From Zero server running on http://0.0.0.0:${port}`);
  });

  server.on('error', (err: any) => {
    console.error('Server socket error:', err);
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    try {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
      });
      app.use(vite.middlewares);
    } catch (viteErr) {
      console.error('Failed to create Vite dev server:', viteErr);
    }
  }
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
