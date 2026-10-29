import json
import os
import sys

def main():
    questions = []
    qid = 1

    def make_q(cat, diff, topic, qtype, text, hints, solution, explanation, **kwargs):
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
            "constraints": kwargs.get("constraints", ["Standard language runtime limits apply"]),
            "timeComplexity": kwargs.get("timeComplexity", None),
            "spaceComplexity": kwargs.get("spaceComplexity", None),
            "tags": kwargs.get("tags", [cat.lower().replace(" ", "-"), topic.lower().replace(" ", "-")])
        }
        questions.append(item)
        qid += 1
        return item

    # 1. JAVASCRIPT (310 questions)
    from scripts.lang_generators import (
        generate_js_questions,
        generate_py_questions,
        generate_java_questions,
        generate_cpp_questions,
        generate_c_questions,
        generate_sql_questions,
        generate_html_css_questions,
        generate_dsa_questions
    )

    print("Generating JS...")
    generate_js_questions(make_q)
    print(f"Total after JS: {len(questions)}")

    print("Generating Python...")
    generate_py_questions(make_q)
    print(f"Total after Python: {len(questions)}")

    print("Generating Java...")
    generate_java_questions(make_q)
    print(f"Total after Java: {len(questions)}")

    print("Generating C++...")
    generate_cpp_questions(make_q)
    print(f"Total after C++: {len(questions)}")

    print("Generating C...")
    generate_c_questions(make_q)
    print(f"Total after C: {len(questions)}")

    print("Generating SQL...")
    generate_sql_questions(make_q)
    print(f"Total after SQL: {len(questions)}")

    print("Generating HTML & CSS...")
    generate_html_css_questions(make_q)
    print(f"Total after HTML & CSS: {len(questions)}")

    print("Generating DSA...")
    generate_dsa_questions(make_q)
    print(f"Total after DSA: {len(questions)}")

    print(f"All generated! Total count = {len(questions)}")

if __name__ == "__main__":
    main()
