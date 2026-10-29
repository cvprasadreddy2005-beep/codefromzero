import json

categories_spec = [
    ("JavaScript", 25),
    ("Python", 25),
    ("Java", 25),
    ("SQL and Databases", 20),
    ("HTML", 15),
    ("CSS", 15),
    ("Git and GitHub", 15),
    ("Cybersecurity", 15),
    ("AI and Machine Learning", 20),
    ("Data Analysis", 15),
    ("Data Structures", 20),
    ("Algorithms", 20),
    ("C Programming", 15),
    ("C++ Programming", 15),
    ("Web Development", 15),
    ("Computer Networks", 7),
    ("Operating Systems", 7),
    ("Software Engineering and Testing", 6),
    ("Problem Solving and Aptitude", 5),
]

assert sum(c[1] for c in categories_spec) == 300, f"Total must be 300, got {sum(c[1] for c in categories_spec)}"
assert len(categories_spec) == 19, f"Categories count must be 19, got {len(categories_spec)}"

print("Category count verification: 19 categories, 300 questions total.")
