import { TutorialLesson } from '../types';

export const PYTHON_MODULES_6_TO_13_LESSONS: TutorialLesson[] = [
  // MODULE 6: Strings
  {
    id: "py-mod6-1",
    title: "6. Strings: Indexing, Slicing, Immutability & Methods",
    section: "Module 6: Strings",
    moduleNumber: 6,
    moduleTitle: "Strings",
    difficulty: "Beginner",
    duration: "12 min",
    keyConcepts: ["Strings", "Indexing", "Slicing", "Immutability", "Methods", "f-strings", "Palindromes"],
    meaning: "A string in Python is a sequence of characters enclosed in single, double, or triple quotes used to store and manipulate text.",
    definition: "In Python, the `str` class represents an ordered, immutable sequence of Unicode characters. Once created, individual characters cannot be changed in-place.",
    whyUseIt: "Text processing is required in almost every program: user authentication, search engines, URLs, database queries, and natural language communication.",
    introduction: "In this lesson, you will master string creation, positive and negative indexing, step slicing, essential methods (.upper(), .lower(), .strip(), .split(), .join(), .replace()), and common interview algorithms like palindrome checking.",
    simpleExplanation: "Think of a string as a train of character carts numbered starting at 0 from the front, or -1 from the caboose. You can inspect any cart or slice off a section of carts, but you cannot repaint an individual cart—you must build a new train.",
    syntax: "# String Indexing & Slicing:\ntext = \"Code From Zero\"\nprint(text[0])       # 'C' (First character)\nprint(text[-1])      # 'o' (Last character)\nprint(text[0:4])     # 'Code' (Slice: start:stop)\nprint(text[::-1])    # Reverse string with step -1\n\n# Common Methods:\nprint(text.upper())\nprint(text.replace(\"Zero\", \"Hero\"))",
    codeExample: `# Complete String Processing & Palindrome Program
phrase = "  A man a plan a canal Panama  "

# 1. Clean whitespace & normalize
cleaned = phrase.strip().lower().replace(" ", "")
print(f"Original: '{phrase}'")
print(f"Cleaned:  '{cleaned}'")

# 2. Check for Palindrome using slicing [::-1]
is_palindrome = cleaned == cleaned[::-1]
print(f"Is Palindrome? {is_palindrome}")

# 3. String Splitting and Joining
skills_csv = "Python,JavaScript,SQL,C++"
skills_list = skills_csv.split(",")
formatted_skills = " -> ".join(skills_list)
print(f"Parsed List: {skills_list}")
print(f"Pipeline: {formatted_skills}")`,
    codeExplanation: [
      "phrase.strip(): Removes leading and trailing whitespace from both ends.",
      ".lower(): Converts all characters to lowercase for case-insensitive processing.",
      ".replace(' ', ''): Replaces all spaces with empty strings.",
      "cleaned[::-1]: Slices the string with a step of -1, producing a reversed string.",
      "skills_csv.split(','): Splits the text on comma delimiters into a Python list of strings.",
      "' -> '.join(...): Concatenates list elements using the arrow separator."
    ],
    expectedOutput: `Original: '  A man a plan a canal Panama  '
Cleaned:  'amanaplanacanalpanama'
Is Palindrome? True
Parsed List: ['Python', 'JavaScript', 'SQL', 'C++']
Pipeline: Python -> JavaScript -> SQL -> C++`,
    multipleExamples: [
      {
        title: "Basic String Slicing",
        description: "Extracting substrings using start, stop, and step indices",
        code: `s = "PYTHON"
print("First 3:", s[:3])     # PYT
print("Last 3:", s[-3:])     # HON
print("Every 2nd:", s[::2])  # PTO
print("Reversed:", s[::-1])  # NOHTYP`,
        output: "First 3: PYT\nLast 3: HON\nEvery 2nd: PTO\nReversed: NOHTYP"
      },
      {
        title: "Practical String Cleaning",
        description: "Sanitizing user form inputs before storage",
        code: `email_input = "  User.Name@CodeFromZero.DEV  \\n"
sanitized = email_input.strip().lower()
domain = sanitized.split("@")[-1]
print(f"Cleaned: {sanitized}")
print(f"Domain: {domain}")`,
        output: "Cleaned: user.name@codefromzero.dev\nDomain: codefromzero.dev"
      },
      {
        title: "Real-World URL Slug Generator",
        description: "Converting blog article titles into web-safe URL slugs",
        code: `title = "Learn Python From Zero to Hero in 2026!"
slug = title.lower().replace("!", "").replace(" ", "-")
print(f"Article: {title}")
print(f"Slug URL: https://codefromzero.dev/articles/{slug}")`,
        output: "Article: Learn Python From Zero to Hero in 2026!\nSlug URL: https://codefromzero.dev/articles/learn-python-from-zero-to-hero-in-2026"
      }
    ],
    commonMistakes: [
      "Attempting to modify an index directly: s = 'cat'; s[0] = 'b' causes TypeError: 'str' object does not support item assignment. Instead, use 'b' + s[1:].",
      "Confusing .find() and .index(). When a substring is missing, .find() returns -1, while .index() raises a ValueError.",
      "Using == for case-sensitive equality when comparing user inputs. Always use .lower() or .casefold() first."
    ],
    interviewQuestions: [
      {
        question: "1. Why are strings immutable in Python?",
        answer: "Strings are immutable for: (1) Security and safety in networking and file paths, (2) Hashability so they can safely serve as dictionary keys and set elements, and (3) Memory optimization via string interning (reusing identical string literals).",
        level: "Intermediate"
      },
      {
        question: "2. What is the time complexity of reversing a string using slicing s[::-1]?",
        answer: "Reversing an N-character string with s[::-1] has O(N) time complexity and O(N) space complexity because it creates a new string object in memory.",
        level: "Beginner"
      },
      {
        question: "3. What is the difference between .split() and .split(' ') in Python?",
        answer: ".split() without arguments splits by any consecutive whitespace (including tabs and newlines) and discards empty strings. .split(' ') splits strictly by single space characters, preserving empty strings if consecutive spaces exist.",
        level: "Intermediate",
        codeExample: "print('a   b'.split())    # ['a', 'b']\nprint('a   b'.split(' ')) # ['a', '', '', 'b']"
      },
      {
        question: "4. What is string interning in Python?",
        answer: "CPython interns certain string literals (typically ASCII identifiers without spaces) into a global table. If two variables reference the identical literal, both point to the exact same memory address (a is b returns True).",
        level: "Advanced"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Title Case Converter",
        difficulty: "Beginner",
        task: "Convert raw_title = 'the quick brown fox' into title case using .title().",
        hint: "raw_title.title()",
        solution: "raw_title = 'the quick brown fox'\nprint(raw_title.title())"
      },
      {
        title: "Exercise 2: Count Specific Characters",
        difficulty: "Beginner",
        task: "Count how many times letter 'a' appears in text = 'Banana and papaya salad'.",
        hint: "text.lower().count('a')",
        solution: "text = 'Banana and papaya salad'\nprint('Count:', text.lower().count('a'))"
      },
      {
        title: "Exercise 3: Extract Domain Extension",
        difficulty: "Intermediate",
        task: "Given filename = 'report_2026.final.pdf', extract and print the file extension.",
        hint: "filename.split('.')[-1]",
        solution: "filename = 'report_2026.final.pdf'\next = filename.split('.')[-1]\nprint('Extension:', ext)"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Anagram Detector",
        description: "Given two words s1 = 'listen' and s2 = 'silent', return True if they are anagrams (same characters in different order).",
        hint: "sorted(s1.lower()) == sorted(s2.lower())",
        solution: "s1, s2 = 'listen', 'silent'\nis_anagram = sorted(s1.lower()) == sorted(s2.lower())\nprint(f'{s1} & {s2} are anagrams? {is_anagram}')"
      },
      {
        title: "Challenge 2: Run-Length Compression Preview",
        description: "Count total vowels and consonants in text = 'Engineering Excellence'.",
        hint: "Loop through characters checking c.isalpha() and c in 'aeiou'",
        solution: "text = 'Engineering Excellence'\nvowels = sum(1 for c in text.lower() if c in 'aeiou')\nconsonants = sum(1 for c in text.lower() if c.isalpha() and c not in 'aeiou')\nprint(f'Vowels: {vowels}, Consonants: {consonants}')"
      }
    ],
    quiz: [
      {
        question: "What is the output of 'Python'[1:4]?",
        options: ["'Pyt'", "'yth'", "'ytho'", "'Pyth'"],
        correctAnswer: 1,
        explanation: "Slice [1:4] starts at index 1 ('y') and ends before index 4 ('h'), giving 'yth'."
      },
      {
        question: "Can you change an individual character of a string in-place with str[0] = 'x'?",
        options: ["Yes, Python strings are mutable", "No, strings are immutable and raise a TypeError", "Only if the string is empty", "Only inside a function"],
        correctAnswer: 1,
        explanation: "Python strings are strictly immutable; modifying an index raises a TypeError."
      }
    ],
    summary: "Strings are immutable sequences of Unicode characters. Slicing with [start:stop:step] extracts substrings, and methods like .strip(), .split(), .join(), and .replace() provide powerful text manipulation.",
    relatedLessons: ["py-mod2-1", "py-mod7-1"]
  },

  // MODULE 7: Lists
  {
    id: "py-mod7-1",
    title: "7. Lists: Ordered, Mutable Collections & Comprehensions",
    section: "Module 7: Lists",
    moduleNumber: 7,
    moduleTitle: "Lists",
    difficulty: "Beginner",
    duration: "14 min",
    keyConcepts: ["Lists", "Mutable", "append()", "extend()", "insert()", "pop()", "remove()", "List Comprehensions"],
    meaning: "A list is an ordered, changeable collection of items enclosed in square brackets [ ] that can hold elements of any data type.",
    definition: "A Python list is a dynamic array backed by contiguous memory pointers. It supports indexed access in O(1) time and dynamic resizing via geometric memory reallocation.",
    whyUseIt: "Lists are Python's workhorse collection for storing sequences of data: shopping carts, quiz scores, customer orders, and algorithm outputs.",
    introduction: "In this lesson, you will master list creation, adding elements (.append, .insert, .extend), removing items (.pop, .remove, del), sorting, reversing, copying, and writing elegant list comprehensions.",
    simpleExplanation: "A list is like an expandable notebook where each line has a page number (index). You can read any page instantly, erase or rewrite any line, tear pages out, or tape new pages at the bottom.",
    syntax: "# List Operations:\nnums = [10, 20, 30]\nnums.append(40)        # Adds 40 to end\nnums.insert(1, 15)     # Inserts 15 at index 1\npopped = nums.pop()    # Removes & returns last item\nnums.sort(reverse=True)# In-place descending sort\n\n# List Comprehension:\nsquares = [x**2 for x in range(1, 6) if x % 2 == 0]",
    codeExample: `# Complete List Operations Demonstration
students = ["Priya", "Rahul", "Ananya"]

# 1. Add elements
students.append("Vikram")            # Adds to end
students.insert(1, "Deepa")           # Inserts at index 1
print("After Additions:", students)

# 2. Remove elements
removed_first = students.pop(0)      # Removes by index
students.remove("Rahul")             # Removes first matching value
print(f"Popped '{removed_first}', After removals:", students)

# 3. List Comprehensions (Square numbers & filter evens)
scores = [65, 82, 90, 45, 98, 77]
distinctions = [s for s in scores if s >= 80]
curved_scores = [min(100, s + 5) for s in scores]

print("Original Scores:", scores)
print("Distinctions (>= 80):", distinctions)
print("Curved (+5):", curved_scores)`,
    codeExplanation: [
      "students.append('Vikram'): Appends an item to the end in amortized O(1) time.",
      "students.insert(1, 'Deepa'): Inserts at position 1; shifts subsequent elements right in O(N) time.",
      "students.pop(0): Removes and returns the element at index 0.",
      "students.remove('Rahul'): Searches for the first occurrence of 'Rahul' and deletes it.",
      "[s for s in scores if s >= 80]: List comprehension filtering elements meeting the predicate."
    ],
    expectedOutput: `After Additions: ['Priya', 'Deepa', 'Rahul', 'Ananya', 'Vikram']
Popped 'Priya', After removals: ['Deepa', 'Ananya', 'Vikram']
Original Scores: [65, 82, 90, 45, 98, 77]
Distinctions (>= 80): [82, 90, 98]
Curved (+5): [70, 87, 95, 50, 100, 82]`,
    multipleExamples: [
      {
        title: "append() vs extend()",
        description: "Adding a single item vs flattening and appending an entire iterable",
        code: `a = [1, 2]
a.append([3, 4])  # Adds nested list
print("append:", a)

b = [1, 2]
b.extend([3, 4])  # Unpacks and extends
print("extend:", b)`,
        output: "append: [1, 2, [3, 4]]\nextend: [1, 2, 3, 4]"
      },
      {
        title: "Sorting vs sorted()",
        description: "In-place modification with .sort() vs returning a new sorted list with sorted()",
        code: `nums = [42, 12, 89, 5]
new_nums = sorted(nums)
print("Original:", nums)
print("Sorted Copy:", new_nums)
nums.sort()
print("After in-place .sort():", nums)`,
        output: "Original: [42, 12, 89, 5]\nSorted Copy: [5, 12, 42, 89]\nAfter in-place .sort(): [5, 12, 42, 89]"
      },
      {
        title: "Real-World Task Manager",
        description: "Prioritized queue simulator using lists",
        code: `tasks = [
    {"id": 1, "task": "Debug API", "priority": 1},
    {"id": 2, "task": "Write Unit Tests", "priority": 3},
    {"id": 3, "task": "Update Readme", "priority": 2}
]
tasks.sort(key=lambda x: x["priority"])
for t in tasks:
    print(f"[P{t['priority']}] {t['task']}")`,
        output: "[P1] Debug API\n[P2] Update Readme\n[P3] Write Unit Tests"
      }
    ],
    commonMistakes: [
      "Aliasing lists with assignment: list_b = list_a does not make a copy! Changes to list_b modify list_a. Use list_b = list_a.copy() or list_a[:].",
      "Assigning the return value of .sort(): x = my_list.sort() sets x to None because .sort() sorts in-place. Use sorted(my_list) if you want a new list.",
      "Modifying a list while iterating over it with a for loop, which skips elements due to index shifting."
    ],
    interviewQuestions: [
      {
        question: "1. What is the difference between append() and extend()?",
        answer: "append(x) adds 'x' as a single element at the end of the list (even if x is another list). extend(iterable) iterates over the argument and appends each element individually to the list.",
        level: "Beginner"
      },
      {
        question: "2. What is the time complexity of list operations in Python?",
        answer: "Access by index: O(1). Append/pop at end: O(1) amortized. Insert/pop at beginning (index 0): O(N) due to element shifting. Search ('x in list'): O(N). Sort (.sort()): O(N log N) using Timsort.",
        level: "Intermediate"
      },
      {
        question: "3. How does Python implement dynamic lists under the hood?",
        answer: "Python lists are variable-length array pointers. When memory is full, CPython allocates extra capacity using an over-allocation formula (size += size >> 3 + (size < 9 ? 3 : 6)), ensuring amortized O(1) append time.",
        level: "Advanced"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Remove Duplicates Preserving Order",
        difficulty: "Intermediate",
        task: "Given raw = [1, 2, 2, 3, 4, 3, 5], remove duplicates while maintaining the original sequence order.",
        hint: "Use a seen set or dict.fromkeys()",
        solution: "raw = [1, 2, 2, 3, 4, 3, 5]\nunique = list(dict.fromkeys(raw))\nprint('Unique:', unique)"
      },
      {
        title: "Exercise 2: Flatten 2D Matrix",
        difficulty: "Intermediate",
        task: "Flatten matrix = [[1, 2], [3, 4], [5, 6]] into a single list [1, 2, 3, 4, 5, 6] using a comprehension.",
        hint: "[num for row in matrix for num in row]",
        solution: "matrix = [[1, 2], [3, 4], [5, 6]]\nflat = [n for row in matrix for n in row]\nprint('Flattened:', flat)"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Rotate List by K Positions",
        difficulty: "Intermediate",
        task: "Given nums = [1, 2, 3, 4, 5] and k = 2, rotate the list to the right so it becomes [4, 5, 1, 2, 3].",
        hint: "k = k % len(nums); nums[-k:] + nums[:-k]",
        solution: "nums = [1, 2, 3, 4, 5]\nk = 2\nk %= len(nums)\nrotated = nums[-k:] + nums[:-k]\nprint('Rotated:', rotated)"
      }
    ],
    quiz: [
      {
        question: "What does [x * 2 for x in [1, 2, 3]] produce?",
        options: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "TypeError"],
        correctAnswer: 1,
        explanation: "The comprehension multiplies each item by 2, yielding [2, 4, 6]."
      },
      {
        question: "What is the return value of my_list.sort()?",
        options: ["The sorted list", "None", "True", "A new copy"],
        correctAnswer: 1,
        explanation: ".sort() sorts in-place and returns None to signal that it mutated the original object."
      }
    ],
    summary: "Lists are versatile mutable arrays in Python. They support fast O(1) indexed lookups, comprehensions for transformation and filtering, and in-place methods like append, pop, and sort.",
    relatedLessons: ["py-mod6-1", "py-mod8-1"]
  },

  // MODULE 8: Tuples, Sets, and Dictionaries
  {
    id: "py-mod8-1",
    title: "8. Tuples, Sets & Dictionaries: The Non-Linear Collections",
    section: "Module 8: Tuples, Sets, and Dictionaries",
    moduleNumber: 8,
    moduleTitle: "Tuples, Sets, and Dictionaries",
    difficulty: "Intermediate",
    duration: "15 min",
    keyConcepts: ["Tuples", "Sets", "Dictionaries", "Hash Tables", "Set Operations", "Key-Value", "Unpacking"],
    meaning: "Tuples are immutable lists. Sets are unordered groups of unique elements. Dictionaries are fast key-value lookup tables.",
    definition: "Python provides three specialized collection types: `tuple` (immutable sequence), `set` (unique collection backed by hash table), and `dict` (associative mapping from hashable keys to arbitrary values).",
    whyUseIt: "Tuples prevent accidental data changes; sets eliminate duplicates and perform mathematical unions/intersections; dictionaries power APIs, databases, and O(1) lookups.",
    introduction: "In this lesson, you will master the distinct properties, syntax, operations, and performance trade-offs of Tuples (), Sets {}, and Dictionaries {key: val}.",
    simpleExplanation: "A tuple is a sealed envelope you cannot edit; a set is a bag of unique items that ignores duplicates; a dictionary is a phonebook where you look up a name (key) to instantly find their number (value).",
    syntax: "# Tuples (Immutable):\npoint = (10, 20)\nx, y = point  # Tuple unpacking\n\n# Sets (Unique items & Math):\nskills = {\"Python\", \"SQL\", \"Python\"} # {'Python', 'SQL'}\nunion = skills | {\"Docker\"}\n\n# Dictionaries (Key-Value):\nuser = {\"name\": \"Alex\", \"role\": \"Engineer\"}\nprint(user.get(\"name\", \"Guest\"))",
    codeExample: `# Demonstration of Tuples, Sets, and Dictionaries
# 1. Tuples: Coordinates & Unpacking
gps_coordinate = (14.4673, 78.8242)
lat, lon = gps_coordinate
print(f"Latitude: {lat}, Longitude: {lon}")

# 2. Sets: Deduplication & Set Math
backend_skills = {"Python", "SQL", "Docker", "Git"}
data_skills = {"Python", "SQL", "Pandas", "Tableau"}

shared_skills = backend_skills & data_skills       # Intersection
all_skills = backend_skills | data_skills          # Union
unique_to_backend = backend_skills - data_skills   # Difference

print(f"Shared (Intersection): {shared_skills}")
print(f"Total Unique (Union): {all_skills}")
print(f"Only Backend: {unique_to_backend}")

# 3. Dictionaries: Frequency Counter
words = ["python", "code", "python", "zero", "code", "python"]
freq = {}
for w in words:
    freq[w] = freq.get(w, 0) + 1
print("Word Frequencies:", freq)`,
    codeExplanation: [
      "lat, lon = gps_coordinate: Unpacks the 2-element tuple into two variables.",
      "backend_skills & data_skills: Computes set intersection; elements present in both sets.",
      "backend_skills | data_skills: Computes set union; combined distinct elements.",
      "backend_skills - data_skills: Computes set difference; elements in backend but not in data.",
      "freq.get(w, 0): Returns existing count or defaults to 0 if key is missing, avoiding KeyError."
    ],
    expectedOutput: `Latitude: 14.4673, Longitude: 78.8242
Shared (Intersection): {'SQL', 'Python'}
Total Unique (Union): {'SQL', 'Tableau', 'Docker', 'Python', 'Pandas', 'Git'}
Only Backend: {'Docker', 'Git'}
Word Frequencies: {'python': 3, 'code': 2, 'zero': 1}`,
    multipleExamples: [
      {
        title: "Single Element Tuple Trap",
        description: "A single item in parentheses is NOT a tuple without a trailing comma",
        code: `not_a_tuple = ("hello")
print(type(not_a_tuple)) # <class 'str'>

is_a_tuple = ("hello",)
print(type(is_a_tuple))  # <class 'tuple'>`,
        output: "<class 'str'>\n<class 'tuple'>"
      },
      {
        title: "Dictionary Comprehension",
        description: "Creating key-value mappings concisely",
        code: `names = ["Alice", "Bob", "Charlie"]
lengths = {name: len(name) for name in names}
print("Name Lengths:", lengths)`,
        output: "Name Lengths: {'Alice': 5, 'Bob': 3, 'Charlie': 7}"
      },
      {
        title: "Real-World User Database Simulator",
        description: "Storing records indexed by unique ID for O(1) retrieval",
        code: `users_db = {
    101: {"name": "Pooja", "email": "pooja@codefromzero.dev", "plan": "PRO"},
    102: {"name": "Suresh", "email": "suresh@codefromzero.dev", "plan": "FREE"}
}
user = users_db.get(101)
print(f"Found User #{101}: {user['name']} [{user['plan']}]")`,
        output: "Found User #101: Pooja [PRO]"
      }
    ],
    commonMistakes: [
      "Creating a single element tuple without a comma: t = (5) is an int, not a tuple! Write t = (5,).",
      "Using mutable items (like lists) as dictionary keys or set members. Keys must be hashable and immutable.",
      "Accessing missing dict keys with dict[key] which raises KeyError. Prefer dict.get(key, default)."
    ],
    interviewQuestions: [
      {
        question: "1. Why are dictionary lookups O(1) average time complexity?",
        answer: "Dictionaries are implemented as hash tables. Python computes the hash of the key via hash(key) to directly locate the memory bucket in constant O(1) time.",
        level: "Intermediate"
      },
      {
        question: "2. Can a list be used as a dictionary key in Python?",
        answer: "No. A dictionary key must be hashable and immutable. Because lists are mutable, their contents can change, which would corrupt the hash bucket location. Tuples of immutable objects can be keys.",
        level: "Beginner"
      },
      {
        question: "3. What is a frozenset in Python?",
        answer: "A frozenset is an immutable version of a Python set. Because it is immutable, it is hashable and can be used as a dictionary key or as an element of another set.",
        level: "Intermediate"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Merge Two Dictionaries",
        difficulty: "Beginner",
        task: "Merge dict1 = {'a': 1, 'b': 2} and dict2 = {'b': 99, 'c': 3} using the modern | merge operator (Python 3.9+).",
        hint: "merged = dict1 | dict2",
        solution: "dict1 = {'a': 1, 'b': 2}\ndict2 = {'b': 99, 'c': 3}\nmerged = dict1 | dict2\nprint('Merged:', merged)"
      },
      {
        title: "Exercise 2: Find Symmetric Difference",
        difficulty: "Intermediate",
        task: "Given set_a = {1, 2, 3} and set_b = {3, 4, 5}, find items in either set but NOT in both using ^.",
        hint: "set_a ^ set_b",
        solution: "set_a = {1, 2, 3}\nset_b = {3, 4, 5}\nprint('Symmetric Diff:', set_a ^ set_b)"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Invert a Dictionary",
        difficulty: "Intermediate",
        task: "Given d = {'US': 'Washington', 'IN': 'New Delhi', 'FR': 'Paris'}, invert it so capitals are keys and country codes are values.",
        hint: "{v: k for k, v in d.items()}",
        solution: "d = {'US': 'Washington', 'IN': 'New Delhi', 'FR': 'Paris'}\ninverted = {v: k for k, v in d.items()}\nprint('Inverted:', inverted)"
      }
    ],
    quiz: [
      {
        question: "Which collection type automatically discards duplicate values?",
        options: ["List", "Tuple", "Set", "Dictionary Values"],
        correctAnswer: 2,
        explanation: "Sets store only unique elements; any duplicates are automatically discarded."
      },
      {
        question: "What happens when you run my_dict.get('missing_key', 42)?",
        options: ["Raises a KeyError", "Returns 42 without error", "Adds 'missing_key': 42 to dict", "Returns None"],
        correctAnswer: 1,
        explanation: "dict.get(key, default) safely returns the fallback default value (42) when the key does not exist."
      }
    ],
    summary: "Tuples provide immutable ordered records. Sets enforce uniqueness and support mathematical set operations. Dictionaries map hashable keys to values with fast O(1) lookups.",
    relatedLessons: ["py-mod7-1", "py-mod9-1"]
  },

  // MODULE 9: Functions
  {
    id: "py-mod9-1",
    title: "9. Functions: def, Parameters, *args, **kwargs, Scope & Lambdas",
    section: "Module 9: Functions",
    moduleNumber: 9,
    moduleTitle: "Functions",
    difficulty: "Beginner",
    duration: "13 min",
    keyConcepts: ["Functions", "def", "*args", "**kwargs", "return", "Scope", "LEGB", "lambda", "Recursion"],
    meaning: "A function is a reusable, named block of code that takes inputs (arguments), performs specific actions, and can return an output.",
    definition: "Functions in Python are first-class citizens: they can be assigned to variables, passed as arguments to other functions, returned from functions, and nested.",
    whyUseIt: "Functions enforce the DRY principle (Don't Repeat Yourself), make programs modular, testable, clean, and enable recursion and higher-order composition.",
    introduction: "In this lesson, you will master defining functions with def, positional and keyword arguments, default parameters, variable-length arguments (*args, **kwargs), local vs global scope (LEGB rule), anonymous lambda functions, and recursive problem solving.",
    simpleExplanation: "A function is like a kitchen appliance (e.g. a blender). You put ingredients (arguments) into it, press start, and it produces a smoothie (return value). You can use it as many times as you want without rebuilding the blender.",
    syntax: "# Standard Function with Type Hints & Docstring:\ndef calculate_total(price: float, tax_rate: float = 0.05) -> float:\n    \"\"\"Calculates total price including tax.\"\"\"\n    return price * (1 + tax_rate)\n\n# Variable-Length Arguments:\ndef log_event(event_name, *args, **kwargs):\n    print(f\"Event: {event_name}, Data: {args}, Metadata: {kwargs}\")",
    codeExample: `# Comprehensive Functions Demonstration
# 1. Flexible Pricing Function with *args & **kwargs
def invoice(client: str, *items: float, discount: float = 0.0, **metadata) -> dict:
    subtotal = sum(items)
    discount_amount = subtotal * discount
    final_total = subtotal - discount_amount
    
    return {
        "client": client,
        "items_count": len(items),
        "subtotal": round(subtotal, 2),
        "total": round(final_total, 2),
        "details": metadata
    }

bill = invoice("Acme Corp", 120.50, 45.00, 299.99, discount=0.10, po_number="PO-2026", terms="Net 30")
print("Invoice Summary:", bill)

# 2. Lambda Functions & Higher-Order Functions
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))
squared = list(map(lambda x: x ** 2, evens))
print("Evens:", evens)
print("Squared Evens:", squared)

# 3. Recursive Factorial
def factorial(n: int) -> int:
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(f"5! = {factorial(5)}")`,
    codeExplanation: [
      "def invoice(client, *items, ...): Declares the function signature with positional and variable arguments.",
      "*items: Collects any number of positional item prices into a tuple.",
      "**metadata: Collects arbitrary keyword arguments (po_number, terms) into a dictionary.",
      "lambda x: x % 2 == 0: Anonymous inline predicate used by filter().",
      "factorial(n): Recursive function with base case (n <= 1) and recursive call n * factorial(n - 1)."
    ],
    expectedOutput: `Invoice Summary: {'client': 'Acme Corp', 'items_count': 3, 'subtotal': 465.49, 'total': 418.94, 'details': {'po_number': 'PO-2026', 'terms': 'Net 30'}}
Evens: [2, 4, 6]
Squared Evens: [4, 16, 36]
5! = 120`,
    multipleExamples: [
      {
        title: "Default Argument Trap",
        description: "Never use mutable defaults (like [] or {}) in Python functions!",
        code: `# BAD: Shared mutable default list across all calls!
def add_bad(item, lst=[]):
    lst.append(item)
    return lst

# GOOD: Use None and assign inside function
def add_good(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst

print("Bad call 1:", add_bad(1))
print("Bad call 2:", add_bad(2)) # Retains 1!
print("Good call 1:", add_good(1))
print("Good call 2:", add_good(2))`,
        output: "Bad call 1: [1]\nBad call 2: [1, 2]\nGood call 1: [1]\nGood call 2: [2]"
      },
      {
        title: "Scope & The LEGB Rule",
        description: "Local, Enclosing, Global, and Built-in variable resolution",
        code: `x = "GLOBAL"

def outer():
    x = "ENCLOSING"
    def inner():
        x = "LOCAL"
        return x
    return inner()

print("Resolved:", outer())
print("Global remains:", x)`,
        output: "Resolved: LOCAL\nGlobal remains: GLOBAL"
      },
      {
        title: "Real-World Auth Token Generator",
        description: "Simulating API token hashing with keyword configuration",
        code: `import hashlib

def generate_token(user_id: int, secret_salt: str = "CodeFromZero2026") -> str:
    raw = f"{user_id}-{secret_salt}".encode("utf-8")
    return hashlib.sha256(raw).hexdigest()[:16]

token = generate_token(1042)
print(f"Generated Session Token: {token}")`,
        output: "Generated Session Token: 7a8c3d9b4f2e105a"
      }
    ],
    commonMistakes: [
      "Using a mutable object (like a list or dict) as a default parameter: def func(a, items=[]). Default values are evaluated ONCE at function definition, leading to shared state bugs. Always use default=None.",
      "Forgetting to write a base case in recursive functions, triggering a RecursionError (maximum recursion depth exceeded).",
      "Attempting to modify a global variable without the 'global' keyword."
    ],
    interviewQuestions: [
      {
        question: "1. What is the LEGB rule in Python?",
        answer: "LEGB defines Python's variable lookup order: Local (inside current function), Enclosing (in outer enclosing functions), Global (module level), and Built-in (built-in namespace like len, range, print).",
        level: "Intermediate"
      },
      {
        question: "2. What is the difference between *args and **kwargs?",
        answer: "*args collects excess positional arguments into a tuple. **kwargs collects excess keyword arguments into a dictionary.",
        level: "Beginner"
      },
      {
        question: "3. What are first-class functions?",
        answer: "In Python, functions are first-class citizens, meaning they can be passed as arguments to other functions, returned as values, assigned to variables, and stored in data structures.",
        level: "Intermediate"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Palindrome Check Function",
        difficulty: "Beginner",
        task: "Write a function is_palindrome(text) that returns True if the text reads the same forward and backwards.",
        hint: "cleaned = text.lower(); return cleaned == cleaned[::-1]",
        solution: "def is_palindrome(s: str) -> bool:\n    c = ''.join(ch.lower() for ch in s if ch.isalnum())\n    return c == c[::-1]\nprint(is_palindrome('Radar'))"
      },
      {
        title: "Exercise 2: Variable Multiplication with *args",
        difficulty: "Beginner",
        task: "Write multiply_all(*args) that multiplies all passed numbers together and returns the result.",
        hint: "res = 1; for n in args: res *= n",
        solution: "def multiply_all(*args):\n    res = 1\n    for n in args:\n        res *= n\n    return res\nprint(multiply_all(2, 3, 4))"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Memoized Fibonacci",
        difficulty: "Advanced",
        task: "Write a recursive fibonacci function using an internal dictionary memo to achieve O(N) linear time complexity.",
        hint: "if n in memo: return memo[n]",
        solution: "def fib(n, memo={}):\n    if n <= 1: return n\n    if n not in memo:\n        memo[n] = fib(n-1, memo) + fib(n-2, memo)\n    return memo[n]\nprint('Fib(30):', fib(30))"
      }
    ],
    quiz: [
      {
        question: "What does *args receive inside a function?",
        options: ["A list", "A tuple", "A dictionary", "A set"],
        correctAnswer: 1,
        explanation: "*args packs positional arguments into an immutable tuple."
      },
      {
        question: "Why should you avoid def f(x, my_list=[]):?",
        options: ["Syntax error in Python", "The list is shared across all function calls", "Python doesn't allow lists as defaults", "It crashes the computer"],
        correctAnswer: 1,
        explanation: "Default parameters are evaluated once when the function is defined, causing mutable defaults to share state across subsequent calls."
      }
    ],
    summary: "Functions modularize code. Python supports positional/keyword arguments, variable-length *args/**kwargs, first-class function passing, and recursion.",
    relatedLessons: ["py-mod8-1", "py-mod10-1"]
  },

  // MODULE 10: Comprehensions and Functional Programming
  {
    id: "py-mod10-1",
    title: "10. Comprehensions & Functional Programming: map, filter, reduce, zip",
    section: "Module 10: Comprehensions and Functional Programming",
    moduleNumber: 10,
    moduleTitle: "Comprehensions and Functional Programming",
    difficulty: "Intermediate",
    duration: "13 min",
    keyConcepts: ["List Comprehension", "Dict Comprehension", "Set Comprehension", "map()", "filter()", "functools.reduce()", "zip()", "enumerate()"],
    meaning: "Comprehensions provide a concise syntax to construct lists, dictionaries, and sets from existing iterables. Functional programming treats computation as the evaluation of mathematical functions.",
    definition: "Comprehensions are syntactic sugar in Python that combine loops and optional conditional filtering into a single expressive line. Built-ins like map, filter, zip, and reduce enable declarative data transformation pipelines.",
    whyUseIt: "They replace clunky 5-line for-loops with clear 1-line expressions, execute faster at C-speed in CPython, and prevent accidental variable leaks.",
    introduction: "In this lesson, you will master list, dictionary, and set comprehensions, generator expressions, map(), filter(), functools.reduce(), zip(), and enumerate().",
    simpleExplanation: "Instead of taking a basket, writing a loop, checking an if-condition, and appending items one by one, a comprehension lets you order: 'Give me a list of squares for all even numbers from 1 to 20' in a single command.",
    syntax: "# List Comprehension:\n[expression for item in iterable if condition]\n\n# Dict Comprehension:\n{key_expr: val_expr for item in iterable if condition}\n\n# Functional Built-ins:\nlist(map(func, iterable))\nlist(filter(predicate, iterable))\nlist(zip(list_a, list_b))\nfor idx, val in enumerate(iterable): ...",
    codeExample: `# Comprehensive Comprehensions & Functional Pipelines
from functools import reduce

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 1. List Comprehensions with Conditionals
even_cubes = [x**3 for x in numbers if x % 2 == 0]
print("Even Cubes:", even_cubes)

# 2. Dictionary Comprehensions
names = ["Alice", "Bob", "Charlie", "David"]
name_scores = [88, 92, 79, 95]
student_map = {name: score for name, score in zip(names, name_scores) if score >= 80}
print("Honors Students (>80):", student_map)

# 3. Functional: map, filter, reduce
# Multiply all numbers together using reduce
product = reduce(lambda acc, x: acc * x, [1, 2, 3, 4, 5])
print("Product of 1..5:", product)

# 4. zip and enumerate
ranks = ["First", "Second", "Third"]
podium = [f"{rank}: {name}" for rank, name in zip(ranks, names)]
print("Podium:", podium)`,
    codeExplanation: [
      "[x**3 for x in numbers if x % 2 == 0]: Computes cube of evens only.",
      "zip(names, name_scores): Pairs corresponding elements from two lists into tuples (name, score).",
      "{name: score ... if score >= 80}: Constructs a dictionary filtering by score.",
      "reduce(lambda acc, x: acc * x, ...): Aggregates the list into a single accumulated product.",
      "enumerate(): Generates (index, item) pairs sequentially."
    ],
    expectedOutput: `Even Cubes: [8, 64, 216, 512, 1000]
Honors Students (>80): {'Alice': 88, 'Bob': 92, 'David': 95}
Product of 1..5: 120
Podium: ['First: Alice', 'Second: Bob', 'Third: Charlie']`,
    multipleExamples: [
      {
        title: "Generator Expressions vs List Comprehensions",
        description: "List comprehensions create full lists in RAM; generator expressions compute lazily",
        code: `import sys
# List comprehension [ ] allocates full memory
list_comp = [x for x in range(10000)]
# Generator expression ( ) allocates constant minimal bytes
gen_expr = (x for x in range(10000))

print("List Size (bytes):", sys.getsizeof(list_comp))
print("Generator Size (bytes):", sys.getsizeof(gen_expr))`,
        output: "List Size (bytes): 85176\nGenerator Size (bytes): 104"
      },
      {
        title: "Matrix Transposition with Comprehensions",
        description: "Transposing rows into columns with nested comprehensions",
        code: `matrix = [
    [1, 2, 3],
    [4, 5, 6]
]
transposed = [[row[i] for row in matrix] for i in range(3)]
print("Transposed:", transposed)`,
        output: "Transposed: [[1, 4], [2, 5], [3, 6]]"
      }
    ],
    commonMistakes: [
      "Overcomplicating comprehensions: Writing 3+ nested loops inside one comprehension reduces readability drastically. Use standard loops if it spans multiple lines.",
      "Forgetting that map() and filter() in Python 3 return iterators, not lists. Wrap them with list() to view or index.",
      "Confusing [x for x in ...] with (x for x in ...). Parentheses create a lazy generator, not a tuple comprehension."
    ],
    interviewQuestions: [
      {
        question: "1. What is the difference between a list comprehension and a generator expression?",
        answer: "A list comprehension evaluates eagerly, building the entire list in memory immediately. A generator expression evaluates lazily on-demand using the iterator protocol, consuming minimal constant memory.",
        level: "Intermediate"
      },
      {
        question: "2. Why is there no tuple comprehension in Python?",
        answer: "Parentheses syntax (x for x in iterable) was reserved for generator expressions. To create a tuple via comprehension, use tuple(x for x in iterable).",
        level: "Intermediate"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Convert Temperatures with map",
        difficulty: "Beginner",
        task: "Given celsius = [0, 20, 37, 100], compute fahrenheit list (F = C * 9/5 + 32) using map() or a comprehension.",
        hint: "[c * 9/5 + 32 for c in celsius]",
        solution: "celsius = [0, 20, 37, 100]\nfahrenheit = [round(c * 9/5 + 32, 1) for c in celsius]\nprint('Fahrenheit:', fahrenheit)"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Word Length Filter",
        difficulty: "Beginner",
        task: "Given text = 'The quick brown fox jumps over the lazy dog', return a dict of {word: len(word)} for words with length > 3.",
        hint: "{w: len(w) for w in text.split() if len(w) > 3}",
        solution: "text = 'The quick brown fox jumps over the lazy dog'\nres = {w: len(w) for w in text.split() if len(w) > 3}\nprint(res)"
      }
    ],
    quiz: [
      {
        question: "What does list(zip([1, 2], ['a', 'b'])) return?",
        options: ["[(1, 'a'), (2, 'b')]", "[1, 2, 'a', 'b']", "{1: 'a', 2: 'b'}", "([1, 2], ['a', 'b'])"],
        correctAnswer: 0,
        explanation: "zip pairs corresponding elements into tuples: [(1, 'a'), (2, 'b')]."
      }
    ],
    summary: "Comprehensions provide declarative creation of lists, sets, and dictionaries. Built-ins like map, filter, reduce, zip, and enumerate enable expressive functional workflows.",
    relatedLessons: ["py-mod7-1", "py-mod9-1", "py-mod11-1"]
  },

  // MODULE 11: Modules, Packages, and Libraries
  {
    id: "py-mod11-1",
    title: "11. Modules, Packages, Pip & Virtual Environments",
    section: "Module 11: Modules, Packages, and Libraries",
    moduleNumber: 11,
    moduleTitle: "Modules, Packages, and Libraries",
    difficulty: "Intermediate",
    duration: "13 min",
    keyConcepts: ["Module", "Package", "__name__ == '__main__'", "import", "math", "random", "datetime", "pip", "venv"],
    meaning: "A module is a Python file (.py) containing code. A package is a directory of modules. A library is a collection of packages.",
    definition: "Python modules organize code into separate namespaces. The `import` statement loads modules into the current namespace. `pip` installs third-party packages from PyPI into isolated virtual environments (`venv`).",
    whyUseIt: "No programmer writes everything from scratch. Python's 'batteries-included' standard library and the PyPI ecosystem provide battle-tested solutions for math, dates, networking, cryptography, and databases.",
    introduction: "In this lesson, you will master importing modules, creating custom modules, the __name__ == '__main__' pattern, exploring math/random/datetime/os/sys, using pip, and creating virtual environments.",
    simpleExplanation: "Modules are like specialized toolboxes (one for woodworking, one for electrical). When you need electrical tools, you write 'import electrical'. You keep your workshop organized by only bringing in the tools you need.",
    syntax: "# Import syntax:\nimport math\nfrom datetime import datetime, timezone\nimport random as rnd\n\n# Standard Module Execution Guard:\nif __name__ == \"__main__\":\n    # Runs only when executed directly, NOT when imported\n    print(\"Script executing as main!\")",
    codeExample: `# Demonstrating Core Standard Library Modules
import math
import random
from datetime import datetime, timedelta

# 1. Math Module
radius = 5.0
area = math.pi * math.pow(radius, 2)
hypot = math.hypot(3, 4)
print(f"Circle Area (r=5): {area:.2f}")
print(f"Hypotenuse (3, 4): {hypot}")

# 2. Random Module
dice_roll = random.randint(1, 6)
lottery = random.sample(range(1, 50), 5)
print(f"Dice Roll: {dice_roll}")
print(f"Lottery Numbers: {sorted(lottery)}")

# 3. Datetime Module
now = datetime.now()
expiry = now + timedelta(days=30)
print(f"Current Date: {now.strftime('%Y-%m-%d %H:%M')}")
print(f"Subscription Expiry: {expiry.strftime('%Y-%m-%d')}")`,
    codeExplanation: [
      "import math: Imports the built-in C-optimized mathematics module.",
      "math.pi: Mathematical constant 3.141592653589793.",
      "random.randint(1, 6): Returns a pseudo-random integer between 1 and 6 inclusive.",
      "random.sample(range, 5): Picks 5 unique random numbers without replacement.",
      "datetime.now(): Fetches current system timestamp.",
      "timedelta(days=30): Performs exact calendar date arithmetic."
    ],
    expectedOutput: `Circle Area (r=5): 78.54
Hypotenuse (3, 4): 5.0
Dice Roll: 4
Lottery Numbers: [7, 14, 22, 38, 45]
Current Date: 2026-10-22 17:45
Subscription Expiry: 2026-11-21`,
    multipleExamples: [
      {
        title: "Understanding if __name__ == '__main__'",
        description: "Preventing code from auto-running when imported into other files",
        code: `# my_math.py
def add(a, b):
    return a + b

# Guard block:
if __name__ == "__main__":
    print("Testing add:", add(10, 20))
# When imported via 'import my_math', __name__ is 'my_math', so the print doesn't run!`,
        output: "Testing add: 30"
      },
      {
        title: "Virtual Environment Terminal Workflow",
        description: "Commands to create and isolate project dependencies",
        code: `# Terminal commands for virtual environment setup:
# 1. Create virtual environment named '.venv'
# python -m venv .venv

# 2. Activate on Windows:
# .venv\\Scripts\\activate
# Activate on macOS/Linux:
# source .venv/bin/activate

# 3. Install packages safely
# pip install requests fastapi
# pip freeze > requirements.txt
print("Virtual environment protects system Python from version conflicts.")`,
        output: "Virtual environment protects system Python from version conflicts."
      }
    ],
    commonMistakes: [
      "Naming your file the same as a Python standard library module (e.g. naming your file 'math.py' or 'random.py'). When you do 'import math', Python imports your file instead of the real module, breaking your program!",
      "Installing packages globally without a virtual environment, causing version conflicts across projects.",
      "Using 'from module import *' which pollutes the namespace and can silently overwrite variables."
    ],
    interviewQuestions: [
      {
        question: "1. What is the purpose of if __name__ == '__main__'?",
        answer: "When a Python file is run directly from the terminal, Python assigns the special string '__main__' to its __name__ attribute. If the file is imported by another module, __name__ is set to the file's module name. This guard allows a file to act both as an importable module and as a runnable script.",
        level: "Beginner"
      },
      {
        question: "2. What is the difference between a module and a package?",
        answer: "A module is a single Python file (.py). A package is a directory containing multiple modules along with an optional __init__.py file that designates it as a package namespace.",
        level: "Beginner"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Date Days Difference",
        difficulty: "Beginner",
        task: "Use datetime to calculate how many days remain between today and New Year 2027 (2027-01-01).",
        hint: "target - now; diff.days",
        solution: "from datetime import date\ntarget = date(2027, 1, 1)\ntoday = date(2026, 10, 22)\nprint('Days remaining:', (target - today).days)"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Secure Password Generator",
        difficulty: "Intermediate",
        task: "Use the 'secrets' module (cryptographically secure) to generate a random 12-character alphanumeric password.",
        hint: "import secrets, string; alphabet = string.ascii_letters + string.digits",
        solution: "import secrets, string\nalphabet = string.ascii_letters + string.digits + '!@#$%'\npwd = ''.join(secrets.choice(alphabet) for _ in range(12))\nprint('Secure Password:', pwd)"
      }
    ],
    quiz: [
      {
        question: "What value does __name__ have when a Python script is executed directly?",
        options: ["'__main__'", "'__file__'", "'root'", "None"],
        correctAnswer: 0,
        explanation: "Python assigns '__main__' to __name__ when executed directly as the entry point."
      }
    ],
    summary: "Modules and packages organize code into modular namespaces. Standard modules like math, random, and datetime offer powerful utilities, while pip and venv manage external dependencies safely.",
    relatedLessons: ["py-mod9-1", "py-mod12-1"]
  },

  // MODULE 12: Exception Handling
  {
    id: "py-mod12-1",
    title: "12. Exception Handling: try, except, else, finally & Custom Errors",
    section: "Module 12: Exception Handling",
    moduleNumber: 12,
    moduleTitle: "Exception Handling",
    difficulty: "Intermediate",
    duration: "13 min",
    keyConcepts: ["Exceptions", "try", "except", "else", "finally", "raise", "Custom Exceptions", "assert"],
    meaning: "Exception handling is a mechanism that catches runtime errors gracefully so your program doesn't crash unexpectedly.",
    definition: "Exceptions are events triggered by runtime errors (e.g., ZeroDivisionError, FileNotFoundError, KeyError). The `try-except-else-finally` construct intercepts these errors, enabling controlled recovery.",
    whyUseIt: "Real-world programs encounter invalid user input, broken network connections, and missing files. Defensive exception handling keeps servers running 24/7 without crashing.",
    introduction: "In this lesson, you will master handling errors with try and except, catching specific exceptions, using else and finally blocks, raising exceptions with raise, creating custom exception classes, and debugging assertions.",
    simpleExplanation: "Think of try-except like a stunt performer wearing safety gear. In the 'try' block, you attempt a daring move. If you slip (an exception occurs), the 'except' safety net catches you gracefully without injury.",
    syntax: "# Full Exception Structure:\ntry:\n    # Risky code that may fail\n    result = 10 / divisor\nexcept ZeroDivisionError as e:\n    # Handles division by zero\n    print(f\"Caught error: {e}\")\nexcept (ValueError, TypeError) as e:\n    # Handles multiple specific types\n    print(f\"Invalid data: {e}\")\nelse:\n    # Runs ONLY if NO exception was raised\n    print(\"Success! Result:\", result)\nfinally:\n    # ALWAYS runs (cleanup: close files, connections)\n    print(\"Cleanup completed.\")",
    codeExample: `# Comprehensive Exception Handling & Custom Errors
class InsufficientFundsError(Exception):
    """Raised when an account withdrawal exceeds available balance."""
    def __init__(self, balance: float, amount: float):
        self.balance = balance
        self.amount = amount
        super().__init__(f"Attempted to withdraw USD {amount:.2f}, but only USD {balance:.2f} available.")

def withdraw_money(balance: float, amount: float) -> float:
    if amount <= 0:
        raise ValueError("Withdrawal amount must be strictly positive.")
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount

# Test safe handling
accounts = [(500.0, 150.0), (200.0, 350.0), (100.0, -25.0)]

for bal, amt in accounts:
    try:
        new_bal = withdraw_money(bal, amt)
    except InsufficientFundsError as err:
        print(f"[REJECTED] {err}")
    except ValueError as err:
        print(f"[INVALID] {err}")
    else:
        print(f"[SUCCESS] Withdrew USD {amt:.2f}. Remaining balance: USD {new_bal:.2f}")
    finally:
        print("--- Transaction logged ---\n")`,
    codeExplanation: [
      "class InsufficientFundsError(Exception): Creates a custom application-specific exception class inheriting from Exception.",
      "raise ValueError(...): Explicitly throws a ValueError when business validation fails.",
      "except InsufficientFundsError as err: Catches the domain error and accesses its custom message.",
      "else: Executes only when the withdrawal completed without errors.",
      "finally: Guarantees execution of cleanup/logging regardless of whether errors occurred."
    ],
    expectedOutput: `[SUCCESS] Withdrew $150.00. Remaining balance: $350.00
--- Transaction logged ---

[REJECTED] Attempted to withdraw $350.00, but only $200.00 available.
--- Transaction logged ---

[INVALID] Withdrawal amount must be strictly positive.
--- Transaction logged ---`,
    multipleExamples: [
      {
        title: "Bare Except Anti-pattern",
        description: "Why you should never use bare 'except:' without specifying an exception type",
        code: `# BAD: Catches KeyboardInterrupt, SystemExit, and masks bugs!
# try: ... except: print("error")

# GOOD: Catch specific exception or Exception
try:
    val = int("not_a_number")
except ValueError as e:
    print("Caught specific error:", e)`,
        output: "Caught specific error: invalid literal for int() with base 10: 'not_a_number'"
      },
      {
        title: "File Cleanup with finally",
        description: "Guaranteeing resource cleanup using the finally block",
        code: `resource_open = True
try:
    print("Working with critical resource...")
    # Simulate operation
except Exception as e:
    print("Error:", e)
finally:
    resource_open = False
    print("Resource closed safely. State:", resource_open)`,
        output: "Working with critical resource...\nResource closed safely. State: False"
      }
    ],
    commonMistakes: [
      "Using a bare 'except:' clause. This catches KeyboardInterrupt (Ctrl+C) and SystemExit, making it impossible to stop your script in the terminal! Always specify 'except Exception:' or specific error classes.",
      "Silencing errors silently with 'except: pass'. This hides severe bugs and makes troubleshooting impossible.",
      "Catching exceptions that should be prevented with simple logic (e.g. using try-except for checking dictionary keys instead of dict.get())."
    ],
    interviewQuestions: [
      {
        question: "1. What is the difference between Exception and BaseException in Python?",
        answer: "BaseException is the root of all Python exceptions. Exception inherits from BaseException and is the base class for all non-system-exiting exceptions. System-exiting exceptions like KeyboardInterrupt, SystemExit, and GeneratorExit inherit directly from BaseException so that 'except Exception:' will not intercept them.",
        level: "Advanced"
      },
      {
        question: "2. When does the else block run in a try-except structure?",
        answer: "The 'else' block runs if and only if the code in the 'try' block completed successfully without raising any exceptions.",
        level: "Beginner"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Safe Division Function",
        difficulty: "Beginner",
        task: "Write safe_divide(a, b) that returns a / b or returns None if b is zero.",
        hint: "try: return a / b except ZeroDivisionError: return None",
        solution: "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return None\nprint(safe_divide(10, 0))"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Integer Input Validator",
        difficulty: "Intermediate",
        task: "Write a function parse_positive_int(s) that raises ValueError if s is not an integer or is <= 0.",
        hint: "val = int(s); if val <= 0: raise ValueError()",
        solution: "def parse_positive_int(s):\n    val = int(s)\n    if val <= 0:\n        raise ValueError('Must be positive')\n    return val\nprint(parse_positive_int('42'))"
      }
    ],
    quiz: [
      {
        question: "Which block in a try-except statement ALWAYS executes, regardless of errors?",
        options: ["try", "except", "else", "finally"],
        correctAnswer: 3,
        explanation: "The 'finally' block always executes, making it ideal for closing files and network sockets."
      }
    ],
    summary: "Exception handling with try, except, else, and finally protects software from unexpected crashes. Catch specific exceptions, use finally for cleanup, and define custom exception classes for domain errors.",
    relatedLessons: ["py-mod11-1", "py-mod13-1"]
  },

  // MODULE 13: File Handling
  {
    id: "py-mod13-1",
    title: "13. File Handling: open(), with Context Managers, CSV & JSON",
    section: "Module 13: File Handling",
    moduleNumber: 13,
    moduleTitle: "File Handling",
    difficulty: "Intermediate",
    duration: "14 min",
    keyConcepts: ["File I/O", "open()", "with statement", "Context Manager", "CSV", "JSON", "read()", "write()"],
    meaning: "File handling allows Python programs to read data stored on your hard drive and write data permanently into files.",
    definition: "Python provides built-in file streams via `open(filename, mode)`. The recommended idiom is using the `with` statement (context manager), which automatically closes the file handle when finished, preventing file descriptor leaks.",
    whyUseIt: "Data in RAM vanishes when a program exits. Files allow long-term data persistence: saving user reports, reading CSV data sheets, and serializing JSON web configurations.",
    introduction: "In this lesson, you will master file modes ('r', 'w', 'a', 'x'), reading lines with readlines(), writing text, using the with statement, reading and writing CSV files, and serializing structured JSON data.",
    simpleExplanation: "Opening a file in Python is like opening a book on your desk. You open it in read mode to study the pages, or in write mode to write new notes. The 'with' statement is like a helpful assistant who automatically puts the book back on the shelf the moment you look away.",
    syntax: "# Text File with Context Manager:\nwith open(\"data.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello Code From Zero!\\n\")\n\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n\n# JSON Handling:\nimport json\njson_str = json.dumps({\"user\": \"Alex\", \"score\": 95})\ndata = json.loads(json_str)",
    codeExample: `# Demonstrating File I/O, CSV, and JSON Serialization
import json
import csv

# 1. JSON Persistence
student_profile = {
    "name": "C V Prasad Reddy",
    "location": "Kadapa-516003",
    "courses": ["Python", "SQL", "Full-Stack"],
    "enrolled": True
}

# Serialize to JSON string
json_data = json.dumps(student_profile, indent=2)
print("=== Serialized JSON ===")
print(json_data)

# Deserialize back to Python dict
loaded_profile = json.loads(json_data)
print(f"\\nDeserialized Name: {loaded_profile['name']}")

# 2. In-Memory CSV Processing Simulation
csv_rows = [
    ["ID", "Name", "Score"],
    ["101", "Priya", "95"],
    ["102", "Rahul", "88"],
    ["103", "Ananya", "92"]
]

print("\\n=== Formatted CSV Output ===")
for row in csv_rows:
    print(f"{row[0]:<5} | {row[1]:<10} | {row[2]:>5}")`,
    codeExplanation: [
      "json.dumps(obj, indent=2): Serializes a Python dictionary into a formatted JSON string with 2-space indentation.",
      "json.loads(str): Parses a JSON string back into native Python dictionaries and lists.",
      "with open(..., 'w') as f: Automatically calls f.__enter__() and guarantees f.__exit__() closes the stream.",
      "encoding='utf-8': Explicitly specifies UTF-8 encoding to prevent cross-platform character corruption.",
      "csv.reader / csv.writer: Built-in library handling quoting, commas, and multiline CSV fields safely."
    ],
    expectedOutput: `=== Serialized JSON ===
{
  "name": "C V Prasad Reddy",
  "location": "Kadapa-516003",
  "courses": [
    "Python",
    "SQL",
    "Full-Stack"
  ],
  "enrolled": true
}

Deserialized Name: C V Prasad Reddy

=== Formatted CSV Output ===
ID    | Name       | Score
101   | Priya      |    95
102   | Rahul      |    88
103   | Ananya     |    92`,
    multipleExamples: [
      {
        title: "File Modes Overview",
        description: "'r' (read), 'w' (overwrite), 'a' (append), 'x' (exclusive create)",
        code: `# Summary of modes:
# 'r'  -> Read only (default). Fails if file doesn't exist.
# 'w'  -> Write only. Creates file or OVERWRITES existing contents!
# 'a'  -> Append only. Adds new content to end of file.
# 'x'  -> Exclusive creation. Fails if file already exists.
# 'r+' -> Read and write.
print("Always prefer 'with open()' over manual f.open() and f.close().")`,
        output: "Always prefer 'with open()' over manual f.open() and f.close()."
      },
      {
        title: "Reading Line by Line Memory-Efficiently",
        description: "Iterating directly over the file object to avoid loading gigabytes into RAM",
        code: `# Simulating file iteration:
lines = ["Line 1: Initialize server\\n", "Line 2: Connected DB\\n", "Line 3: Listening on 3000\\n"]
for line in lines:
    print(line.strip())`,
        output: "Line 1: Initialize server\nLine 2: Connected DB\nLine 3: Listening on 3000"
      }
    ],
    commonMistakes: [
      "Using open('file.txt', 'w') without the 'with' statement. If an exception occurs before f.close(), the file descriptor stays locked in the OS.",
      "Assuming 'w' mode appends text. 'w' truncates (erases) the entire file immediately! Use 'a' to append.",
      "Forgetting to specify encoding='utf-8'. On Windows, Python defaults to CP-1252, causing UnicodeDecodeError on international characters."
    ],
    interviewQuestions: [
      {
        question: "1. Why should you always use the 'with' statement when opening files in Python?",
        answer: "The 'with' statement implements the Context Manager protocol (__enter__ and __exit__). It guarantees that the file stream is closed immediately when the block exits, even if an unhandled exception or return statement occurs.",
        level: "Beginner"
      },
      {
        question: "2. What is the difference between json.dump() and json.dumps()?",
        answer: "json.dump(obj, file_stream) writes JSON directly to an open file stream. json.dumps(obj) (dump string) serializes the object into a Python string.",
        level: "Beginner"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Word Counter from File Content",
        difficulty: "Beginner",
        task: "Given text = 'Python is fun and Python is powerful', count the total number of words.",
        hint: "len(text.split())",
        solution: "text = 'Python is fun and Python is powerful'\nwords = text.split()\nprint('Word count:', len(words))"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: JSON Config Merger",
        difficulty: "Intermediate",
        task: "Given default_config = {'theme': 'dark', 'font': 14} and user_config = {'font': 16, 'auto_save': True}, merge them using dict unpack.",
        hint: "{**default_config, **user_config}",
        solution: "default_config = {'theme': 'dark', 'font': 14}\nuser_config = {'font': 16, 'auto_save': True}\nmerged = {**default_config, **user_config}\nprint('Merged Config:', merged)"
      }
    ],
    quiz: [
      {
        question: "Which file mode opens a file for appending without overwriting existing data?",
        options: ["'r'", "'w'", "'a'", "'x'"],
        correctAnswer: 2,
        explanation: "'a' mode appends new data to the end of the file, preserving all existing content."
      }
    ],
    summary: "File handling persists data to disk. Always use 'with open(..., encoding=\"utf-8\")' to guarantee resource cleanup. Built-in modules json and csv handle structured data formats effortlessly.",
    relatedLessons: ["py-mod12-1", "py-mod14-1"]
  }
];
