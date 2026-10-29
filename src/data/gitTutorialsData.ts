// CODE FROM ZERO - COMPLETE GIT & GITHUB TUTORIALS CURRICULUM
// 12 Comprehensive Modules covering Version Control, Commands, Branching, PRs, Security & 10 projects
import { TutorialLesson } from '../types';

export interface GitModuleInfo {
  number: number;
  title: string;
  lessonCount: number;
  startLessonId: string;
  description: string;
}

export const GIT_MODULES: GitModuleInfo[] = [
  { number: 1, title: "Introduction to Version Control", lessonCount: 12, startLessonId: "git-mod1-1", description: "What version control is, Git vs GitHub, repositories, staging area, commit history, and branches." },
  { number: 2, title: "Installation and Setup", lessonCount: 12, startLessonId: "git-mod2-1", description: "Installing Git on Windows/Mac/Linux, git config user.name/email, SSH keys, and VS Code integration." },
  { number: 3, title: "Essential Git Commands", lessonCount: 15, startLessonId: "git-mod3-1", description: "git init, status, add, commit, log, diff, show, restore, rm, and writing good commit messages." },
  { number: 4, title: "GitHub Basics & Remote Repos", lessonCount: 16, startLessonId: "git-mod4-1", description: "GitHub repos, README, git remote add, push, pull, fetch, clone, and HTTPS vs SSH." },
  { number: 5, title: "Branching & Merging", lessonCount: 15, startLessonId: "git-mod5-1", description: "git switch, checkout, branch creation/deletion, fast-forward merges, and merge conflicts." },
  { number: 6, title: "Undoing Changes & Recovery", lessonCount: 12, startLessonId: "git-mod6-1", description: "git restore, git reset (soft/mixed/hard), git revert, reflog, and safe recovery practices." },
  { number: 7, title: "Collaboration & Pull Requests", lessonCount: 12, startLessonId: "git-mod7-1", description: "Forks, pull requests (PRs), code reviews, requesting changes, and open source contributions." },
  { number: 8, title: "Advanced Git", lessonCount: 14, startLessonId: "git-mod8-1", description: "git stash, git rebase, cherry-pick, git tag, interactive rebase, and squash commits." },
  { number: 9, title: "GitHub Features & Hosting", lessonCount: 14, startLessonId: "git-mod9-1", description: "GitHub Pages static hosting, GitHub Actions CI/CD basics, Issues, Releases, and Project Boards." },
  { number: 10, title: "Git & GitHub Security", lessonCount: 12, startLessonId: "git-mod10-1", description: ".gitignore rules, protecting API keys & .env, secret scanning, and removing exposed secrets." },
  { number: 11, title: "Practical Git Workflows", lessonCount: 12, startLessonId: "git-mod11-1", description: "Feature branch workflow, GitFlow, trunk-based development, and team collaboration." },
  { number: 12, title: "Git & GitHub Projects", lessonCount: 10, startLessonId: "git-mod12-1", description: "10 Hands-on projects: Portfolio Repository, Resolving Real Merge Conflicts, and Open Source PR." }
];

export const GIT_TUTORIAL_LESSONS: TutorialLesson[] = [
  // Module 1: Introduction
  {
    id: "git-mod1-1",
    title: "Introduction to Version Control: What is Git vs GitHub?",
    section: "Module 1: Introduction to Version Control",
    moduleNumber: 1,
    moduleTitle: "Introduction to Version Control",
    difficulty: "Beginner",
    duration: "7 min",
    keyConcepts: ["Version Control (VCS)", "Git", "GitHub", "Working Directory", "Staging Area", "Repository"],
    meaning: "Version control is a system that records changes to files over time so you can recall specific versions, compare updates, and collaborate seamlessly with other engineers.",
    definition: "Git is a free, open-source distributed version control system (VCS) created by Linus Torvalds in 2005. GitHub is a cloud-based hosting service and collaboration platform for Git repositories.",
    whyUseIt: "Without version control, developers resort to chaotic file naming like 'final_v2_really_final.zip'. Git gives you a time machine for your codebase: every commit is an immutable checkpoint.",
    introduction: "Welcome to Git & GitHub! In professional software engineering, Git is as essential as the programming language itself. Every tech company on Earth uses Git to track changes and collaborate.",
    simpleExplanation: "Git is like a video game save system: before you enter a dangerous boss fight (refactoring code), you save your game (make a commit). If everything breaks, you simply reload your checkpoint.",
    syntax: "# The 3 States of Git:\n# 1. Working Directory (Modified files)\n# 2. Staging Area (Files queued for snapshot via 'git add')\n# 3. Repository (.git directory with permanent commits)",
    codeExample: "# Initializing a new repository and creating our first snapshot\n# 1. Initialize local repository\ngit init\n\n# 2. Check current status\ngit status\n\n# 3. Stage our source files\ngit add index.html style.css app.js\n\n# 4. Commit with a meaningful conventional message\ngit commit -m \"feat: initialize project with responsive layout and theme toggle\"\n\n# 5. View permanent history log\ngit log --oneline",
    codeExplanation: [
      "git init: Creates a hidden '.git' directory inside your project folder to start tracking changes.",
      "git status: Displays which files are modified, staged, or untracked.",
      "git add ...: Moves files from the Working Directory into the Staging Area.",
      "git commit -m '...': Creates a permanent cryptographic snapshot (SHA-1/SHA-256 hash) with author and timestamp.",
      "git log --oneline: Displays a concise one-line-per-commit history of the project."
    ],
    expectedOutput: "Initialized empty Git repository in /workspace/project/.git/\nOn branch main\nChanges to be committed:\n  (use \"git rm --cached <file>...\" to unstage)\n\tnew file:   index.html\n\tnew file:   style.css\n\tnew file:   app.js\n\n[main (root-commit) 7a2b9c1] feat: initialize project with responsive layout and theme toggle\n 3 files changed, 142 insertions(+)\n7a2b9c1 feat: initialize project with responsive layout and theme toggle",
    realWorldApplications: [
      "Over 100 million developers collaborate on open-source and proprietary software via GitHub.",
      "Automated CI/CD deployment pipelines that build and deploy applications automatically whenever code is pushed."
    ],
    commonMistakes: [
      "Thinking Git and GitHub are the same thing: Git is the offline command-line tool; GitHub is the online cloud hosting platform.",
      "Writing vague commit messages like 'fixed stuff' or 'update'. Always use descriptive messages like 'fix: resolve navbar dropdown z-index bug'."
    ],
    practiceExercises: [
      {
        title: "Repository Initialization",
        difficulty: "Beginner",
        task: "Type the commands to initialize a repository, stage all files, and create a commit.",
        hint: "git init && git add . && git commit -m 'initial commit'",
        solution: "git init\ngit add .\ngit commit -m 'chore: initial project setup'"
      }
    ],
    quiz: [
      {
        question: "What is the primary difference between Git and GitHub?",
        options: [
          "Git is the distributed version control tool on your computer; GitHub is a cloud hosting service for Git repositories",
          "Git is for Python; GitHub is for JavaScript",
          "GitHub is the compiler; Git is the editor",
          "There is no difference; they are identical"
        ],
        correctAnswer: 0,
        explanation: "Git is the local command-line version control software. GitHub is a cloud-based web service that hosts remote Git repositories and provides collaboration tools like Pull Requests and Issues."
      }
    ],
    summary: "Git is a distributed version control system that records codebase checkpoints. Code moves from Working Directory -> Staging Area -> Committed History.",
    relatedLessons: ["git-mod2-1", "git-mod3-1"]
  },

  // Module 3: Essential Commands
  {
    id: "git-mod3-1",
    title: "Essential Git Commands: status, add, commit, log & diff",
    section: "Module 3: Essential Git Commands",
    moduleNumber: 3,
    moduleTitle: "Essential Git Commands",
    difficulty: "Beginner",
    duration: "10 min",
    keyConcepts: ["git status", "git add", "git commit", "git log", "git diff"],
    meaning: "The essential daily commands are the tools developers use every few minutes while writing code to stage changes, view differences, and record snapshots.",
    definition: "`git status` inspects working tree state; `git add` stages changes; `git commit` records staged changes; `git diff` shows line-by-line differences; and `git log` displays commit history.",
    whyUseIt: "Understanding the staging area gives you fine-grained control: you can make 5 different edits across files, but stage only the relevant ones for a single clean commit.",
    introduction: "In this lesson, you will master the day-to-day commands that professional software engineers type hundreds of times each week.",
    simpleExplanation: "Think of `git diff` as a magnifying glass that highlights exact changes in green (+) and red (-); `git add` is packing items into a cardboard box; and `git commit` is taping the box shut with a label.",
    syntax: "git status                  # Check current state\ngit diff                    # Inspect unstaged changes\ngit add <file>              # Stage specific file\ngit commit -m \"message\"     # Record snapshot\ngit log --graph --oneline   # Visual branch history",
    codeExample: "# Daily Developer Workflow Script\n# 1. Modify a file\necho \"/* Added responsive media queries */\" >> style.css\n\n# 2. Inspect exact line differences\ngit diff style.css\n\n# 3. Stage the changed stylesheet\ngit add style.css\n\n# 4. Commit with descriptive summary\ngit commit -m \"style: add mobile tablet responsive media queries\"\n\n# 5. Check formatted history\ngit log -n 2 --oneline",
    codeExplanation: [
      "git diff style.css: Shows line-by-line additions (+) and removals (-) in color.",
      "git add style.css: Moves style.css into the staging area (index).",
      "git commit -m '...': Permanently stores the snapshot with a commit hash.",
      "git log -n 2 --oneline: Displays the last 2 commits in clean single-line format."
    ],
    expectedOutput: "diff --git a/style.css b/style.css\n--- a/style.css\n+++ b/style.css\n@@ -10,3 +10,4 @@\n+/* Added responsive media queries */\n\n[main 4f8a12e] style: add mobile tablet responsive media queries\n 1 file changed, 1 insertion(+)\n\n4f8a12e style: add mobile tablet responsive media queries\n7a2b9c1 feat: initialize project with responsive layout",
    realWorldApplications: [
      "Every software engineering team tracks bug fixes, feature releases, and refactorings using these core commands."
    ],
    commonMistakes: [
      "Blindly running 'git add .' and accidentally committing sensitive passwords, API keys, or large node_modules directories. Always use a .gitignore file!",
      "Writing commit messages without the -m flag in terminals, which opens Vim or Nano and confuses beginners."
    ],
    practiceExercises: [
      {
        title: "Stage and Commit Workflow",
        difficulty: "Beginner",
        task: "Write the command to stage only 'README.md' and commit it with message 'docs: add setup instructions'.",
        hint: "git add README.md && git commit -m 'docs: add setup instructions'",
        solution: "git add README.md\ngit commit -m \"docs: add setup instructions\""
      }
    ],
    quiz: [
      {
        question: "What does the command 'git diff' show?",
        options: [
          "Differences between your working directory and the staging area",
          "Differences between your local computer and GitHub cloud",
          "A list of deleted files only",
          "The list of installed Git versions"
        ],
        correctAnswer: 0,
        explanation: "'git diff' displays the line-by-line differences between modified files in your working directory and what is currently staged in Git."
      }
    ],
    summary: "The daily cycle is: modify files -> inspect with git status & git diff -> stage with git add -> commit with git commit -m.",
    relatedLessons: ["git-mod1-1", "git-mod5-1"]
  },

  // Module 5: Branching & Merging
  {
    id: "git-mod5-1",
    title: "Branching, Merging & Resolving Merge Conflicts",
    section: "Module 5: Branching & Merging",
    moduleNumber: 5,
    moduleTitle: "Branching & Merging",
    difficulty: "Intermediate",
    duration: "13 min",
    keyConcepts: ["git switch", "git branch", "git merge", "Merge Conflicts", "Fast-Forward"],
    meaning: "Branches represent independent lines of development. They allow you to build new features or experiment without touching the stable production code on the `main` branch.",
    definition: "A Git branch is a lightweight movable pointer to a commit. Merging combines two branch histories together. A merge conflict occurs when two commits modify the same lines of code in different ways.",
    whyUseIt: "In team environments, multiple engineers work on different features simultaneously. Branches isolate work so one developer's unfinished code never breaks another developer's work.",
    introduction: "In this lesson, you will master creating feature branches using modern `git switch`, merging branches back into main, and calmly resolving merge conflicts like a senior engineer.",
    simpleExplanation: "A branch is a parallel universe: you can try out crazy ideas, add new features, and test them. If they work, you merge that universe into reality. If they fail, you simply delete the branch.",
    syntax: "# Modern Branch Management (Git 2.23+)\ngit switch -c feature/dark-mode    # Create and switch to new branch\ngit switch main                    # Switch back to main branch\ngit merge feature/dark-mode        # Merge branch into current branch\ngit branch -d feature/dark-mode    # Delete branch after merge",
    codeExample: "# Feature Branch and Merge Workflow\n# 1. Start a new isolated feature branch\ngit switch -c feature/user-profile\n\n# 2. Make changes on feature branch and commit\necho \"<div class='profile'>Profile Card</div>\" >> profile.html\ngit add profile.html\ngit commit -m \"feat: create user profile card component\"\n\n# 3. Switch back to production branch (main)\ngit switch main\n\n# 4. Merge tested feature branch into main\ngit merge feature/user-profile\n\n# 5. Clean up merged branch\ngit branch -d feature/user-profile",
    codeExplanation: [
      "git switch -c feature/user-profile: Creates the branch and switches your working directory to it in one command.",
      "git commit on feature branch: Advances the feature branch pointer while leaving 'main' untouched at its previous state.",
      "git switch main: Re-points HEAD to the main branch.",
      "git merge feature/user-profile: Incorporates the feature commits into main (fast-forward or 3-way merge).",
      "git branch -d ...: Deletes the branch pointer safely after changes are integrated."
    ],
    expectedOutput: "Switched to a new branch 'feature/user-profile'\n[feature/user-profile 9e3c1a4] feat: create user profile card component\n 1 file changed, 1 insertion(+)\n create mode 100644 profile.html\n\nSwitched to branch 'main'\nUpdating 4f8a12e..9e3c1a4\nFast-forward\n profile.html | 1 +\n 1 file changed, 1 insertion(+)\nDeleted branch feature/user-profile (was 9e3c1a4).",
    realWorldApplications: [
      "Feature branch workflows used by engineering teams at Google, Meta, Amazon, and Microsoft.",
      "Hotfix branches used to deploy emergency security patches to live production servers."
    ],
    commonMistakes: [
      "Panicking when a Merge Conflict occurs! Conflicts are normal: Git inserts markers (<<<<<<< HEAD, =======, >>>>>>>). Simply choose the right code, delete the markers, and commit.",
      "Working directly on 'main' in shared repositories, which disrupts colleagues."
    ],
    practiceExercises: [
      {
        title: "Create and Switch Branch",
        difficulty: "Intermediate",
        task: "Write the command to create and switch to a branch named 'feature/auth-modal'.",
        hint: "git switch -c feature/auth-modal",
        solution: "git switch -c feature/auth-modal"
      }
    ],
    quiz: [
      {
        question: "What does Git do when two branches modify the exact same line of code in different ways and you try to merge them?",
        options: [
          "It pauses the merge and flags a Merge Conflict for the developer to resolve",
          "It automatically deletes both files",
          "It crashes the repository permanently",
          "It picks the newest file and deletes the older file without warning"
        ],
        correctAnswer: 0,
        explanation: "When overlapping changes conflict on the same lines, Git marks the conflict in the file and asks the developer to decide which version to keep."
      }
    ],
    summary: "Use branches to isolate feature work. Create branches with 'git switch -c', merge when ready, and resolve any conflicts systematically.",
    relatedLessons: ["git-mod3-1", "git-mod7-1", "git-mod10-1"]
  },

  // Module 10: Security & Secrets
  {
    id: "git-mod10-1",
    title: "Git Security: .gitignore, Protecting API Keys & Secrets",
    section: "Module 10: Git and GitHub Security",
    moduleNumber: 10,
    moduleTitle: "Git and GitHub Security",
    difficulty: "Advanced",
    duration: "11 min",
    keyConcepts: [".gitignore", "API Keys", "Environment Variables (.env)", "Secret Scanning", "History Cleaning"],
    meaning: "Git security means ensuring sensitive data—such as database passwords, cloud API keys, and private credentials—never enters your Git repository or public GitHub history.",
    definition: "A `.gitignore` file specifies intentionally untracked files that Git should ignore. Secrets committed to a repository remain permanently in the `.git` commit history even if deleted in a later commit unless purged with tools like git-filter-repo.",
    whyUseIt: "Automated bot scrapers continuously monitor public GitHub repositories for leaked AWS, OpenAI, or database keys to abuse computing resources within seconds.",
    introduction: "In this critical security lesson, you will learn how to configure `.gitignore`, use `.env` files for environment variables, and what to do if a secret is ever accidentally committed.",
    simpleExplanation: "A `.gitignore` file is like a 'Do Not Pack' checklist for a flight: it ensures you don't accidentally pack dirty laundry (cache files) or secret personal documents (API keys) into your shared luggage.",
    syntax: "# Sample .gitignore rules\n.env\n.env.local\nnode_modules/\n*.log\n.DS_Store\n__pycache__/",
    codeExample: "# 1. Inspecting a safe .gitignore configuration\ncat << 'EOF' > .gitignore\n# Secrets & Environment variables\n.env\n.env.*.local\n*.pem\n*.key\n\n# Dependencies\nnode_modules/\n__pycache__/\n*.pyc\n\n# Build outputs\ndist/\nbuild/\n*.exe\nEOF\n\n# 2. Verify Git ignores the secret file\ntouch .env\ngit status\n# Notice: .env will NOT appear in untracked files!\n\n# 3. Safe development: provide .env.example with fake placeholders\ncat << 'EOF' > .env.example\nDATABASE_URL=postgresql://user:password@localhost:5432/dbname\nAPI_KEY=your_secret_key_here\nEOF\n\ngit add .gitignore .env.example\ngit commit -m \"chore: configure .gitignore to prevent secret leaks\"",
    codeExplanation: [
      ".gitignore: Placed at the root of the repository; tells Git to ignore matching patterns.",
      "node_modules/ and dist/: Prevents giant generated vendor and build files from bloating the repo.",
      ".env.example: Best practice: commit an example file with dummy values so teammates know which keys are required without exposing real secrets.",
      "Critical warning: Removing a secret in commit 2 does NOT remove it from commit 1! You must immediately revoke and regenerate leaked keys."
    ],
    expectedOutput: "On branch main\nChanges to be committed:\n\tnew file:   .gitignore\n\tnew file:   .env.example\n\n[main 8c2d10f] chore: configure .gitignore to prevent secret leaks\n 2 files changed, 14 insertions(+)",
    realWorldApplications: [
      "Preventing multi-million dollar cloud billing abuse caused by leaked AWS or OpenAI credentials.",
      "Compliance with SOC2, ISO27001, and enterprise data privacy regulations."
    ],
    commonMistakes: [
      "Committing a file, realizing it contains a password, and thinking 'git rm' fixes it. The secret is still accessible in the previous commit history! Revoke the key immediately.",
      "Committing node_modules (thousands of files) or Python virtual environments (venv)."
    ],
    practiceExercises: [
      {
        title: "Create Standard .gitignore",
        difficulty: "Intermediate",
        task: "Write the lines needed in a .gitignore file to ignore all .env files, the node_modules folder, and all .log files.",
        hint: ".env, node_modules/, *.log",
        solution: ".env\n.env.local\nnode_modules/\n*.log"
      }
    ],
    quiz: [
      {
        question: "If an API key was committed to Git in a previous commit, does deleting it in the latest commit secure it?",
        options: [
          "No, the secret is permanently stored in the .git commit history and must be revoked immediately",
          "Yes, Git only stores the latest version of files",
          "Yes, Git encrypts old commits automatically",
          "No, but only GitHub administrators can see old commits"
        ],
        correctAnswer: 0,
        explanation: "Git preserves every historical snapshot. Anyone who clones the repository can inspect past commits and read the secret. Leaked credentials must be revoked immediately."
      }
    ],
    summary: "Always add sensitive files to .gitignore before your first commit. Never commit passwords or API keys, and immediately revoke any key that is exposed.",
    relatedLessons: ["git-mod3-1", "git-mod4-1", "git-mod12-1"]
  },

  // Module 12: Projects
  {
    id: "git-mod12-1",
    title: "Project 1: Build a Professional GitHub Developer Portfolio & Repository",
    section: "Module 12: Git & GitHub Projects",
    moduleNumber: 12,
    moduleTitle: "Git & GitHub Projects",
    difficulty: "Intermediate",
    duration: "20 min",
    isProject: true,
    keyConcepts: ["GitHub Profile README", "Markdown Badges", "Repository Structure", "Showcase"],
    meaning: "A complete professional developer portfolio repository showcasing your programming projects, tech stack badges, GitHub stats, and coding achievements.",
    definition: "An industry-standard developer portfolio repository featuring a formatted README.md with shields.io badges, architecture documentation, license, and live demo links.",
    whyUseIt: "Tech recruiters and engineering hiring managers evaluate candidates based on their GitHub profile and the quality of their project repositories.",
    introduction: "In this capstone project, you will create a high-converting, professional GitHub portfolio repository.",
    simpleExplanation: "Your GitHub profile is your living developer resume. A clean, well-documented repository proves to employers that you know how to write clean code and document it professionally.",
    syntax: "# Professional README.md with Markdown and Badges",
    codeExample: "# Complete GitHub Portfolio README.md Template\ncat << 'EOF' > README.md\n# 🚀 Code From Zero — Full-Stack Developer Portfolio\n\n[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)\n[![Language: Python](https://img.shields.io/badge/Python-3.12-3776AB.svg?logo=python&logoColor=white)](https://python.org)\n[![Language: TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6.svg?logo=typescript&logoColor=white)](https://typescriptlang.org)\n[![Database: PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1.svg?logo=postgresql&logoColor=white)](https://postgresql.org)\n\n## 🌟 Overview\nWelcome to my developer portfolio! This repository showcases real-world projects built while mastering full-stack software engineering on **Code From Zero**.\n\n## 🛠️ Tech Stack & Skills\n- **Languages**: Python, JavaScript, TypeScript, C++, C, SQL\n- **Web Frameworks**: React, Node.js, Express, Tailwind CSS\n- **Databases**: PostgreSQL, MySQL, SQLite, Redis\n- **Tools & DevOps**: Git, GitHub Actions, Docker, VS Code\n\n## 📂 Featured Projects\n1. **[E-Commerce Microservices Engine](#)** — Scalable inventory and ordering backend with PostgreSQL.\n2. **[Algorithms & DSA Interactive Visualizer](#)** — High-performance algorithmic simulator built in C++.\n3. **[Modern Task & Milestone Tracker](#)** — React application with local persistence.\n\n## 📬 Contact & Connect\n- GitHub: [@yourusername](https://github.com)\n- LinkedIn: [in/yourprofile](https://linkedin.com)\n- Portfolio: [https://codefromzero.dev](https://codefromzero.dev)\nEOF\n\ngit add README.md\ngit commit -m \"docs: publish professional GitHub developer portfolio README\"",
    codeExplanation: [
      "Shields.io Badges: Visual technology indicators showing active languages and licenses.",
      "Featured Projects Section: Highlights completed projects with direct links and tech summaries.",
      "Markdown Headings & Formatting: Clean hierarchical typography ensuring effortless scannability."
    ],
    expectedOutput: "[README.md Formatted & Published]\nRepository initialized with MIT License, badges, and professional portfolio structure.\nCommit: docs: publish professional GitHub developer portfolio README",
    realWorldApplications: [
      "Job applications and technical interviews where recruiters evaluate code quality and documentation."
    ],
    commonMistakes: [
      "Leaving repositories without a README.md file: an empty repository looks abandoned and unprofessional."
    ],
    practiceExercises: [
      {
        title: "Add License and Contributing Guide",
        difficulty: "Intermediate",
        task: "Create a LICENSE file (MIT) and CONTRIBUTING.md file explaining how other developers can submit pull requests.",
        hint: "echo 'MIT License' > LICENSE && touch CONTRIBUTING.md",
        solution: "touch LICENSE CONTRIBUTING.md\ngit add LICENSE CONTRIBUTING.md\ngit commit -m \"docs: add MIT license and contributing guide\""
      }
    ],
    quiz: [
      {
        question: "Why is a well-formatted README.md file crucial for open-source repositories?",
        options: [
          "It is the first document visitors see, explaining what the project is, how to install it, and how to use it",
          "It compiles the code into executable binaries",
          "It is required by the Linux kernel",
          "It automatically encrypts the repository"
        ],
        correctAnswer: 0,
        explanation: "The README.md serves as the front door of your project, providing essential instructions on installation, features, usage, and contributing guidelines."
      }
    ],
    summary: "This portfolio capstone project equips you with an industry-standard GitHub repository layout, badges, project highlights, and clean documentation.",
    relatedLessons: ["git-mod4-1", "git-mod7-1", "git-mod10-1"]
  }
];
