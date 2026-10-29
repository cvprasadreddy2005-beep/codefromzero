# Code From Zero — Programming Education Platform

**Learn to Code From Zero**  
*Start with the basics, master programming step by step, build real-world projects, and prepare for your future career.*

---

## 🌟 Key Features

1. **Modern Responsive Homepage**
   - High-fidelity educational design system with blue & purple accents.
   - High-resolution, photorealistic hero workspace image (`/assets/images/hero-programming.jpg`).
   - 9 complete sections: Learning Categories, Popular Roadmaps, Featured Tutorials, 300 Practice Questions, Hands-on Projects, Career Guidance, Code From Zero AI, Progress Tracking, and CTA.

2. **Top Navigation & Authentication**
   - Responsive navbar with mobile drawer and keyboard accessibility.
   - User account system (Sign In, Sign Up with validation, Remember Me, and Password Reset simulation).
   - Profile modal with progress metrics, customizable target career role, and reset confirmation dialog.
   - Local persistence preserving progress across sessions.

3. **Curated 300 Practice Questions Bank**
   - **Exactly 300 questions across 19 categories**:
     - JavaScript (25)
     - Python (25)
     - Java (25)
     - SQL and Databases (20)
     - HTML (15)
     - CSS (15)
     - Git and GitHub (15)
     - Cybersecurity (15)
     - AI and Machine Learning (20)
     - Data Analysis (15)
     - Data Structures (20)
     - Algorithms (20)
     - C Programming (15)
     - C++ Programming (15)
     - Web Development (15)
     - Computer Networks (7)
     - Operating Systems (7)
     - Software Engineering and Testing (6)
     - Problem Solving and Aptitude (5)
   - Interactive answer verification: Radio-option validation for MCQs and Code Input with test simulator for coding tasks.
   - Step-by-step hint reveals and collapsible full explanations with time & space complexity.
   - Instant search and multi-criteria filters (category, difficulty, type, bookmarked, completed).

4. **8 Developer Learning Roadmaps**
   - Frontend Developer, Backend Developer, Full-Stack Developer, Java Developer, Python Developer, Data Analyst, AI & ML Engineer, Cybersecurity Specialist.
   - Month-by-month curriculums with topic duration, skills, exercises, and mini-projects.
   - Interactive checkboxes syncing to user progress and next recommended topic spotlight.
   - Capstone project guides and career salary/demand outlooks.

5. **Beginner Programming Tutorials**
   - Comprehensive interactive guides for HTML5, CSS3, JavaScript, Python, Java, SQL, C/C++, and Git.
   - Structured chapters: Introduction, Simple Explanation, Syntax, Code Example, Expected Output, Common Mistakes, Exercises, Summary.
   - Interactive code simulator with simulated output view and one-click copy buttons.

6. **8 Practical Hands-On Projects**
   - Personal Portfolio Website, Calculator, To-Do List, Quiz Application, Weather Application, Student Management System, Expense Tracker, Coding Practice Application.
   - Step-by-step guidance modal with code snippets and links to relevant tutorials.

7. **Career Guidance & Interview Preparation**
   - Future Job Opportunities overview across AI, Software Dev, Security, Business, Green Energy, and Healthcare.
   - 4 Pillars of choosing a career path.
   - Actionable 90-Day Developer Career Plan (Explore, Learn, Prepare, Apply).
   - STAR Method behavioral framework with 7 top questions, model answers, and smart questions to ask interviewers.

8. **Code From Zero AI Assistant**
   - **AI Programming Tutor**: Interactive chat with suggested questions.
   - **AI Code Debugger**: Diagnostic AST analysis, explanation of error, corrected code, fix explanation, and prevention tips.
   - **AI Roadmap Generator**: Tailored weekly curriculums based on skill level and study hours.
   - **AI Interview Coach**: Evaluates candidate answers using STAR criteria with scoring and follow-up questions.
   - **AI Career Advisor**: Personalized career diagnostics and project recommendations.
   - **AI Practice Question Generator**: Generates dynamic bonus practice problems without mutating the curated 300 question bank.
   - Powered by Gemini 3.8 Flash via backend Express proxy routes (`/api/ai/*`).

---

## 🚀 Running the Project

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env` (optional for local Gemini live integration):
```bash
cp .env.example .env
```
Add your `GEMINI_API_KEY` in `.env` to unlock live Gemini 3.8 Flash AI generation. (If unset, the platform runs in full Demo Mode with intelligent fallback responses).

### 3. Start Development Server
```bash
npm run dev
```
The server will start on `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 🧪 Testing Checklist

- [x] **Hero Image**: Natural photorealistic developer workspace image loads correctly with `.hero-image` styling.
- [x] **Navigation**: All top links navigate cleanly to their respective views. Mobile drawer works on small screens.
- [x] **Authentication**: Sign Up validates email, password strength, and matching passwords. Sign In supports password visibility toggle, remember me, and demo 1-click login.
- [x] **300 Questions Validation**: Verified 300 total questions across 19 categories with unique IDs 1..300.
- [x] **Practice Interface**: Category filter, difficulty filter, status filter, and live text search work simultaneously.
- [x] **Answer Evaluation**: Radio selections validate immediately; coding runner simulates test execution; hints reveal progressively.
- [x] **Progress Persistence**: Solved questions, bookmarks, and completed roadmap topics persist in localStorage.
- [x] **Reset Progress**: Confirmation dialog prevents accidental data deletion.
- [x] **8 Roadmaps**: Month-by-month accordions toggle cleanly; topics can be checked off.
- [x] **Tutorials**: Copy code button works; run simulator displays expected output.
- [x] **8 Projects**: Step-by-step guidance modal opens with code architecture.
- [x] **Career Guidance**: 90-day plan and STAR interview questions display full model responses.
- [x] **AI Assistant**: Tutor chat, Debugger, Roadmap generator, Interview coach, and Question generator connect to server endpoints.
- [x] **Responsive Design**: Clean layout verified across mobile, tablet, and desktop viewports.
