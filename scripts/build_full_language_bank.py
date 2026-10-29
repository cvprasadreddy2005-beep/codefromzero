#!/usr/bin/env python3
import json
import os
import sys

# Comprehensive Python script to build 2,480+ curated questions (310+ per language)
# Languages:
# 1. JavaScript (310)
# 2. Python (310)
# 3. Java (310)
# 4. C++ Programming (310)
# 5. C Programming (310)
# 6. SQL and Databases (310)
# 7. HTML & CSS (310)
# 8. Data Structures & Algorithms (310)

def main():
    questions = []
    qid = 1

    def add(cat, diff, topic, qtype, text, hints, solution, explanation, **kwargs):
        nonlocal qid
        item = {
            "id": qid,
            "category": cat,
            "difficulty": diff,
            "topic": topic,
            "type": qtype,
            "question": text,
            "hints": hints,
            "solution": solution,
            "explanation": explanation,
            "options": kwargs.get("options", []),
            "correctAnswer": kwargs.get("correctAnswer", None),
            "code": kwargs.get("code", ""),
            "examples": kwargs.get("examples", []),
            "constraints": kwargs.get("constraints", ["Standard limits apply"]),
            "timeComplexity": kwargs.get("timeComplexity", None),
            "spaceComplexity": kwargs.get("spaceComplexity", None),
            "tags": kwargs.get("tags", [cat.lower().replace(" ", "-"), topic.lower().replace(" ", "-")])
        }
        questions.append(item)
        qid += 1
        return item

    # Load generator modules or generate directly
    print("Building question bank...")
    
    # We will import our modules
    import scripts.lang_bank_js as js_gen
    import scripts.lang_bank_py as py_gen
    import scripts.lang_bank_java as java_gen
    import scripts.lang_bank_cpp as cpp_gen
    import scripts.lang_bank_c as c_gen
    import scripts.lang_bank_sql as sql_gen
    import scripts.lang_bank_htmlcss as htmlcss_gen
    import scripts.lang_bank_dsa as dsa_gen

    js_gen.generate(add)
    print(f"JS generated. Total: {len(questions)}")
    py_gen.generate(add)
    print(f"Python generated. Total: {len(questions)}")
    java_gen.generate(add)
    print(f"Java generated. Total: {len(questions)}")
    cpp_gen.generate(add)
    print(f"C++ generated. Total: {len(questions)}")
    c_gen.generate(add)
    print(f"C generated. Total: {len(questions)}")
    sql_gen.generate(add)
    print(f"SQL generated. Total: {len(questions)}")
    htmlcss_gen.generate(add)
    print(f"HTML/CSS generated. Total: {len(questions)}")
    dsa_gen.generate(add)
    print(f"DSA generated. Total: {len(questions)}")

    print(f"\nFinal question count: {len(questions)}")

    # Verify each category has at least 300
    counts = {}
    for q in questions:
        counts[q["category"]] = counts.get(q["category"], 0) + 1
    for cat, c in counts.items():
        print(f" - {cat}: {c} questions")
        assert c >= 300, f"Category {cat} has only {c} questions, expected >= 300!"

    categories_info = [
        {"name": "JavaScript", "count": counts["JavaScript"], "icon": "FileCode", "description": "ES6+, async/await, closures, prototypes, event loop & DOM APIs"},
        {"name": "Python", "count": counts["Python"], "icon": "Terminal", "description": "Comprehensions, OOP, dunder methods, generators, decorators & asyncio"},
        {"name": "Java", "count": counts["Java"], "icon": "Coffee", "description": "OOP, collections, streams, concurrency, generics & JVM architecture"},
        {"name": "C++ Programming", "count": counts["C++ Programming"], "icon": "Binary", "description": "STL, memory management, templates, pointers, RAII & modern move semantics"},
        {"name": "C Programming", "count": counts["C Programming"], "icon": "Code2", "description": "Pointers, dynamic memory, structs, memory safety, bitwise & file I/O"},
        {"name": "SQL and Databases", "count": counts["SQL and Databases"], "icon": "Database", "description": "Complex queries, joins, window functions, CTEs, indexing & ACID"},
        {"name": "HTML & CSS", "count": counts["HTML & CSS"], "icon": "Palette", "description": "Flexbox, CSS grid, accessibility, responsive design, semantic HTML & animations"},
        {"name": "Data Structures & Algorithms", "count": counts["Data Structures & Algorithms"], "icon": "Layers", "description": "Arrays, two pointers, sliding window, trees, graphs, heaps & DP"}
    ]

    out_ts = """// CODE FROM ZERO - 2,480+ QUESTIONS CURATED QUESTION BANK
// 300+ Practice Coding Questions for EVERY Language
import { Question, CategoryInfo } from '../types';

export const QUESTIONS_DATA: Question[] = """ + json.dumps(questions, indent=2) + """;

export const CATEGORIES_DATA: CategoryInfo[] = """ + json.dumps(categories_info, indent=2) + """;

export function verifyQuestionBank() {
  const count = QUESTIONS_DATA.length;
  const categoriesCount = new Set(QUESTIONS_DATA.map(q => q.category)).size;
  return {
    totalQuestions: count,
    isValidCount: count >= 2400,
    totalCategories: categoriesCount,
    isValidCategories: categoriesCount >= 8
  };
}
"""
    with open("src/data/questionsData.ts", "w", encoding="utf-8") as f:
        f.write(out_ts)
    print("Successfully wrote src/data/questionsData.ts!")

if __name__ == "__main__":
    main()
