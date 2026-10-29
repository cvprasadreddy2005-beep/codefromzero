import json
import os

all_questions = []
cur_id = 1

def add(cat, diff, topic, qtype, text, hints, solution, explanation, **kw):
    global cur_id
    all_questions.append({
        "id": cur_id,
        "category": cat,
        "difficulty": diff,
        "topic": topic,
        "type": qtype,
        "question": text,
        "hints": hints,
        "solution": solution,
        "explanation": explanation,
        "options": kw.get("options", []),
        "correctAnswer": kw.get("correctAnswer", None),
        "code": kw.get("code", ""),
        "examples": kw.get("examples", []),
        "constraints": kw.get("constraints", ["Standard limits apply"]),
        "timeComplexity": kw.get("timeComplexity", None),
        "spaceComplexity": kw.get("spaceComplexity", None),
        "tags": kw.get("tags", [cat.lower().replace(" ", "-"), topic.lower().replace(" ", "-")])
    })
    cur_id += 1

# Helper to generate multiple themed questions per category if needed
def generate_category(cat, count, items):
    assert len(items) == count, f"Category {cat} expected {count} items, got {len(items)}"
    for it in items:
        add(cat, it[0], it[1], it[2], it[3], it[4], it[5], it[6], **it[7])

print("Helper ready")
