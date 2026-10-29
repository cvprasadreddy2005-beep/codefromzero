# scripts/data_part1.py
# Categories: JavaScript (25), Python (25), Java (25) = 75 questions

items_p1 = []

# --- JAVASCRIPT (25) ---
js_questions = [
    ("Beginner", "Variables", "Coding", "Write a JavaScript program to swap two numbers using a temporary variable.",
     ["Declare a variable `temp`.", "Swap values sequentially."],
     "let temp = a; a = b; b = temp;",
     "A temporary variable preserves the first value during assignment.",
     {"code": "let a = 10;\nlet b = 20;\nlet temp = a;\na = b;\nb = temp;\nconsole.log(a, b);", "timeComplexity": "O(1)", "spaceComplexity": "O(1)"}),

    ("Beginner", "Data Types", "Multiple-Choice", "What will `typeof NaN` return in JavaScript?",
     ["NaN is technically a special IEEE-754 numeric representation."],
     "'number'",
     "In JavaScript, typeof NaN evaluates to 'number'.",
     {"options": ["'number'", "'nan'", "'undefined'", "'object'"], "correctAnswer": "'number'"}),

    ("Beginner", "Conditionals", "Coding", "Write a function `isEven(num)` that returns `true` if a number is even, and `false` otherwise.",
     ["Use the modulus operator `%`.", "Even numbers have remainder 0."],
     "return num % 2 === 0;",
     "Modulo 2 gives 0 for even numbers.",
     {"code": "function isEven(num) {\n  return num % 2 === 0;\n}"}),

    ("Beginner", "Loops", "Coding", "Write a loop to calculate the factorial of a positive integer `n`.",
     ["Multiply numbers from 1 to n into an accumulator."],
     "Accumulate product from 1 to n.",
     "Factorial is the product of all positive integers <= n.",
     {"code": "function factorial(n) {\n  let res = 1;\n  for (let i = 2; i <= n; i++) res *= i;\n  return res;\n}"}),

    ("Beginner", "Scope", "Multiple-Choice", "What is the difference between `let` and `var` in terms of scoping?",
     ["`let` respects `{}` block boundaries.", "`var` is hoisted to enclosing function."],
     "`let` is block-scoped, while `var` is function-scoped",
     "`let` prevents leaking outside curly braces.",
     {"options": ["`let` is block-scoped, while `var` is function-scoped", "`var` is block-scoped, while `let` is function-scoped", "Both are block-scoped", "`let` can be redeclared, `var` cannot"], "correctAnswer": "`let` is block-scoped, while `var` is function-scoped"}),

    ("Beginner", "Strings", "Coding", "Write a function `reverseString(str)` that reverses any given string.",
     ["Split to array, reverse array, join."],
     "str.split('').reverse().join('')",
     "Reverses string character order.",
     {"code": "function reverseString(str) {\n  return str.split('').reverse().join('');\n}"}),

    ("Beginner", "Arrays", "Coding", "Write a function `findMax(arr)` that finds the largest number in an array.",
     ["Initialize with first element.", "Traverse and update maximum."],
     "Scan array tracking max value.",
     "Finds maximum in single linear pass.",
     {"code": "function findMax(arr) {\n  if (!arr.length) return null;\n  let max = arr[0];\n  for (let i = 1; i < arr.length; i++) if (arr[i] > max) max = arr[i];\n  return max;\n}"}),

    ("Beginner", "Arrays", "Multiple-Choice", "Which array method does NOT mutate the original array?",
     ["Methods like push and splice mutate in-place."],
     "`.concat()`",
     "`.concat()` creates a new array without modifying inputs.",
     {"options": ["`.concat()`", "`.push()`", "`.splice()`", "`.sort()`"], "correctAnswer": "`.concat()`"}),

    ("Beginner", "Objects", "Coding", "Create an object `person` with properties `name`, `age`, and a method `greet()` returning 'Hello, my name is [name]'.",
     ["Reference `this.name`."],
     "Object with method referencing this.",
     "Methods access object properties using `this`.",
     {"code": "const person = {\n  name: 'Alex',\n  age: 24,\n  greet() {\n    return `Hello, my name is ${this.name}`;\n  }\n};"}),

    ("Beginner", "Type Coercion", "Output-Prediction", "What is logged to the console?\n`console.log(1 + '2' + 3);`",
     ["Evaluates left to right.", "Number + string results in string."],
     "'123'",
     "1 + '2' makes '12', then '12' + 3 makes '123'.",
     {"options": ["'123'", "6", "'15'", "NaN"], "correctAnswer": "'123'"}),

    ("Intermediate", "Closures", "Multiple-Choice", "What is a closure in JavaScript?",
     ["Lexical scope persistence."],
     "A function that retains access to variables from its outer lexical scope even after that outer function has returned",
     "Functions bundle with their lexical references.",
     {"options": ["A function that retains access to variables from its outer lexical scope even after that outer function has returned", "A function with no return value", "A method closing a database", "A block of code inside a catch block"], "correctAnswer": "A function that retains access to variables from its outer lexical scope even after that outer function has returned"}),

    ("Intermediate", "Closures", "Coding", "Create a function `createCounter()` that returns an object with `increment()` and `getValue()` methods keeping `count` private.",
     ["Keep count inside outer function scope."],
     "Encapsulate state inside closure.",
     "Prevents outside direct mutation of counter state.",
     {"code": "function createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getValue: () => count\n  };\n}"}),

    ("Intermediate", "Event Loop", "Output-Prediction", "What is the output order of:\n`console.log('A'); setTimeout(() => console.log('B'), 0); Promise.resolve().then(() => console.log('C')); console.log('D');`",
     ["Sync code runs first, then microtasks, then macrotasks."],
     "A, D, C, B",
     "Sync A and D log first, Promise microtask C runs next, timer macrotask B runs last.",
     {"options": ["A, D, C, B", "A, B, C, D", "A, D, B, C", "A, C, D, B"], "correctAnswer": "A, D, C, B"}),

    ("Intermediate", "Promises", "Coding", "Write a function `fetchDataWithTimeout(promise, timeoutMs)` that rejects if the promise does not resolve within `timeoutMs`.",
     ["Use `Promise.race` with a rejection timer."],
     "Promise.race([promise, timeoutPromise])",
     "Promise.race settles with whichever settles first.",
     {"code": "function fetchDataWithTimeout(promise, timeoutMs) {\n  const timeout = new Promise((_, reject) => \n    setTimeout(() => reject(new Error('Operation timed out')), timeoutMs)\n  );\n  return Promise.race([promise, timeout]);\n}"}),

    ("Intermediate", "DOM", "Coding", "Write JavaScript to select all buttons with class `.tab-btn` and toggle an `.active` class when clicked.",
     ["Use `document.querySelectorAll` and `classList`."],
     "Toggle active classes on click.",
     "Ensures single active tab in interface.",
     {"code": "document.querySelectorAll('.tab-btn').forEach(btn => {\n  btn.addEventListener('click', () => {\n    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));\n    btn.classList.add('active');\n  });\n});"}),

    ("Intermediate", "Prototypes", "Multiple-Choice", "How does prototypical inheritance work when accessing a property on an object?",
     ["Walks up the `__proto__` chain."],
     "JavaScript searches the object itself; if missing, it traverses the `__proto__` chain until `null`",
     "Property resolution follows the prototype chain until found or null.",
     {"options": ["JavaScript searches the object itself; if missing, it traverses the `__proto__` chain until `null`", "Searches window first", "Copies properties on instantiation", "Only works with ES6 classes"], "correctAnswer": "JavaScript searches the object itself; if missing, it traverses the `__proto__` chain until `null`"}),

    ("Intermediate", "Array Methods", "Coding", "Implement a custom `myFilter(arr, callback)` function that behaves like `Array.prototype.filter`.",
     ["Iterate and push items where callback returns truthy."],
     "Custom filter implementation.",
     "Demonstrates predicate filtering.",
     {"code": "function myFilter(arr, callback) {\n  const res = [];\n  for (let i = 0; i < arr.length; i++) {\n    if (callback(arr[i], i, arr)) res.push(arr[i]);\n  }\n  return res;\n}"}),

    ("Intermediate", "Destructuring", "Multiple-Choice", "What will `const { a = 10, b = 20 } = { a: null };` produce for `a` and `b`?",
     ["Default values only trigger on strictly `undefined`."],
     "a = null, b = 20",
     "Because a is null, default 10 is not used.",
     {"options": ["a = null, b = 20", "a = 10, b = 20", "a = undefined, b = 20", "Throws TypeError"], "correctAnswer": "a = null, b = 20"}),

    ("Intermediate", "Events", "Multiple-Choice", "What method stops an event from bubbling up the DOM tree?",
     ["Propagation control."],
     "`e.stopPropagation()`",
     "Stops bubbling to parent elements.",
     {"options": ["`e.stopPropagation()`", "`e.preventDefault()`", "`e.stopImmediateBubbling()`", "`e.cancelBubble()`"], "correctAnswer": "`e.stopPropagation()`"}),

    ("Intermediate", "Debouncing", "Coding", "Write a simple `debounce(fn, delay)` utility function in JavaScript.",
     ["Use `setTimeout` and `clearTimeout`."],
     "Cancel timer on each call and schedule new execution.",
     "Prevents rapid successive executions.",
     {"code": "function debounce(fn, delay) {\n  let timer = null;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}"}),

    ("Advanced", "Event Loop", "Conceptual", "Explain the difference between Macrotasks and Microtasks in the Node.js / browser Event Loop.",
     ["Microtasks have higher priority."],
     "Microtasks execute immediately after synchronous code before the next macrotask.",
     "The engine empties the microtask queue between each macrotask execution.",
     {}),

    ("Advanced", "Deep Clone", "Coding", "Write a function `deepClone(obj)` that deeply clones an object handling nested objects and arrays without losing nested structures.",
     ["Use recursion and WeakMap for circular references."],
     "Recursive copy with WeakMap tracking.",
     "Safely handles arbitrary nested structures and cycles.",
     {"code": "function deepClone(obj, hash = new WeakMap()) {\n  if (Object(obj) !== obj) return obj;\n  if (hash.has(obj)) return hash.get(obj);\n  const res = Array.isArray(obj) ? [] : {};\n  hash.set(obj, res);\n  for (const k of Object.keys(obj)) {\n    res[k] = deepClone(obj[k], hash);\n  }\n  return res;\n}"}),

    ("Advanced", "Currying", "Coding", "Implement a generic `curry(fn)` function that transforms `fn(a, b, c)` into `curried(a)(b)(c)`.",
     ["Check arguments length against `fn.length`."],
     "Currying via arity check.",
     "Enables partial argument application.",
     {"code": "function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) return fn.apply(this, args);\n    return (...next) => curried.apply(this, args.concat(next));\n  };\n}"}),

    ("Advanced", "Memory", "Multiple-Choice", "Which of the following causes a common memory leak in single-page JavaScript applications?",
     ["Uncleaned references to detached DOM nodes."],
     "Uncleared event listeners or timers referencing detached DOM elements",
     "Callbacks prevent garbage collection of detached DOM elements.",
     {"options": ["Uncleared event listeners or timers referencing detached DOM elements", "Using const instead of let", "Freezing objects", "Using Promises"], "correctAnswer": "Uncleared event listeners or timers referencing detached DOM elements"}),

    ("Advanced", "Generators", "Coding", "Write a generator function `idGenerator()` that yields infinite incremental integers starting from 1.",
     ["Use `function*` and `yield`."],
     "Infinite incremental generator.",
     "Generators pause execution and yield values lazily.",
     {"code": "function* idGenerator() {\n  let id = 1;\n  while (true) yield id++;\n}"})
]

for q in js_questions:
    items_p1.append(("JavaScript", *q))

assert len(js_questions) == 25

# --- PYTHON (25) ---
python_questions = [
    ("Beginner", "Conditionals", "Coding", "Write a Python program to check if a number is positive, negative, or zero.",
     ["Use `if`, `elif`, and `else`."],
     "Check num > 0, num < 0, and num == 0.",
     "Standard numeric branching.",
     {"code": "def check_number(num):\n    if num > 0: return 'Positive'\n    elif num < 0: return 'Negative'\n    return 'Zero'"}),

    ("Beginner", "Variables", "Multiple-Choice", "Which of the following is an invalid variable name in Python?",
     ["Identifiers cannot start with a digit."],
     "`2nd_number`",
     "Variable names cannot begin with numbers.",
     {"options": ["`2nd_number`", "`_total_count`", "`user_name`", "`myVar2`"], "correctAnswer": "`2nd_number`"}),

    ("Beginner", "Lists", "Coding", "Write a function `sum_list(numbers)` that returns the sum of all elements in a list without using `sum()`.",
     ["Loop through elements and accumulate."],
     "Iterate and accumulate total.",
     "Calculates sum in O(n) time.",
     {"code": "def sum_list(numbers):\n    total = 0\n    for n in numbers: total += n\n    return total"}),

    ("Beginner", "Strings", "Coding", "Write a function `count_vowels(s)` that counts vowels (a, e, i, o, u) in a string case-insensitively.",
     ["Lower string and check against vowel set."],
     "Count characters in vowel set.",
     "Vowel counting with case normalization.",
     {"code": "def count_vowels(s):\n    vowels = set('aeiou')\n    return sum(1 for c in s.lower() if c in vowels)"}),

    ("Beginner", "Dictionaries", "Multiple-Choice", "How do you access the value associated with key `'age'` in `d = {'name': 'Sam', 'age': 21}` safely without KeyError?",
     ["`.get()` returns None on missing key."],
     "`d.get('age')`",
     "`.get()` provides safe lookup without throwing exception.",
     {"options": ["`d.get('age')`", "`d['age']`", "`d.find('age')`", "`d.value('age')`"], "correctAnswer": "`d.get('age')`"}),

    ("Beginner", "Tuples", "Multiple-Choice", "What is the primary difference between a Python list and a Python tuple?",
     ["Lists are mutable, tuples cannot change."],
     "Lists are mutable; tuples are immutable",
     "Tuples cannot be modified after instantiation.",
     {"options": ["Lists are mutable; tuples are immutable", "Tuples are mutable; lists are immutable", "Lists can store strings, tuples only numbers", "Tuples use curly braces"], "correctAnswer": "Lists are mutable; tuples are immutable"}),

    ("Beginner", "Loops", "Coding", "Write a Python program to print the multiplication table of a given number `n` from 1 to 10.",
     ["Use `range(1, 11)`."],
     "Loop 1 to 10 with formatted output.",
     "Outputs standard multiplication table.",
     {"code": "def print_table(n):\n    for i in range(1, 11):\n        print(f'{n} x {i} = {n * i}')"}),

    ("Beginner", "Slicing", "Coding", "Given list `nums = [10, 20, 30, 40, 50, 60]`, use Python slicing to get `[50, 30, 10]`.",
     ["Slice with negative step `-2`."],
     "nums[-2::-2]",
     "Negative step traverses backwards.",
     {"code": "nums = [10, 20, 30, 40, 50, 60]\nresult = nums[-2::-2]"}),

    ("Beginner", "Strings", "Coding", "Write a function `is_palindrome(s)` that returns True if a string is a palindrome, ignoring spaces and capitalization.",
     ["Filter alphanumeric characters and compare to reversed."],
     "Clean string and compare with `[::-1]`.",
     "Checks symmetric reading.",
     {"code": "def is_palindrome(s):\n    cleaned = ''.join(c.lower() for c in s if c.isalnum())\n    return cleaned == cleaned[::-1]"}),

    ("Beginner", "Sets", "Multiple-Choice", "What will `len(set([1, 2, 2, 3, 4, 4, 4]))` return?",
     ["Sets deduplicate entries."],
     "4",
     "The set contains unique elements {1, 2, 3, 4}.",
     {"options": ["4", "7", "3", "5"], "correctAnswer": "4"}),

    ("Intermediate", "Comprehensions", "Coding", "Write a list comprehension to produce squares of all even numbers from 1 to 20.",
     ["Use `x**2` and `if x % 2 == 0`."],
     "[x**2 for x in range(1, 21) if x % 2 == 0]",
     "Concise list filtering and transformation.",
     {"code": "squares = [x**2 for x in range(1, 21) if x % 2 == 0]"}),

    ("Intermediate", "OOP", "Coding", "Create a Python class `BankAccount` with `balance`, methods `deposit(amount)` and `withdraw(amount)` validating funds.",
     ["Validate positive amounts and sufficient balance."],
     "BankAccount class with encapsulated balance.",
     "Object-oriented state management with guards.",
     {"code": "class BankAccount:\n    def __init__(self, balance=0):\n        self.balance = balance\n    def deposit(self, amt):\n        if amt <= 0: raise ValueError('Invalid')\n        self.balance += amt\n    def withdraw(self, amt):\n        if amt > self.balance: raise ValueError('Insufficient')\n        self.balance -= amt"}),

    ("Intermediate", "File I/O", "Multiple-Choice", "Why is `with open('file.txt', 'r') as f:` preferred over `f = open('file.txt', 'r')`?",
     ["Context manager ensures cleanup."],
     "It automatically guarantees file descriptor closure even if exceptions occur",
     "The `with` statement calls `__exit__` to close resources safely.",
     {"options": ["It automatically guarantees file descriptor closure even if exceptions occur", "Loads into GPU memory", "Encrypts file contents", "Allows simultaneous write locks"], "correctAnswer": "It automatically guarantees file descriptor closure even if exceptions occur"}),

    ("Intermediate", "Decorators", "Coding", "Write a simple timing decorator `@timer` that logs how long a function takes to execute.",
     ["Use `time.perf_counter()` and `functools.wraps`."],
     "Timing decorator returning wrapper.",
     "Wraps function to profile execution time.",
     {"code": "import time\nfrom functools import wraps\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kw):\n        start = time.perf_counter()\n        res = func(*args, **kw)\n        print(f'{func.__name__} ran in {time.perf_counter() - start:.4f}s')\n        return res\n    return wrapper"}),

    ("Intermediate", "Error Handling", "Coding", "Write a function `safe_divide(a, b)` catching ZeroDivisionError and TypeError gracefully.",
     ["Use `try-except` blocks."],
     "Handle ZeroDivisionError and TypeError returning None.",
     "Isolates runtime division issues.",
     {"code": "def safe_divide(a, b):\n    try: return a / b\n    except (ZeroDivisionError, TypeError): return None"}),

    ("Intermediate", "Lambda", "Coding", "Sort a list of tuples `students = [('Alice', 88), ('Bob', 95), ('Charlie', 78)]` by grade descending.",
     ["Use `sorted(students, key=lambda s: s[1], reverse=True)`."],
     "Sorted with lambda key descending.",
     "Custom sort criterion via key function.",
     {"code": "students = [('Alice', 88), ('Bob', 95), ('Charlie', 78)]\nsorted_students = sorted(students, key=lambda s: s[1], reverse=True)"}),

    ("Intermediate", "Generators", "Coding", "Write a generator function `fibonacci_gen(limit)` that yields Fibonacci numbers up to `limit`.",
     ["Use `yield` with `a, b = b, a + b`."],
     "Fibonacci generator function.",
     "Generates numbers lazily in O(1) space.",
     {"code": "def fibonacci_gen(limit):\n    a, b = 0, 1\n    while a <= limit:\n        yield a\n        a, b = b, a + b"}),

    ("Intermediate", "Args Kwargs", "Multiple-Choice", "What is the purpose of `*args` and `**kwargs` in a Python function definition?",
     ["Positional tuple and keyword dict."],
     "`*args` accepts variable positional arguments as a tuple; `**kwargs` accepts keyword arguments as a dictionary",
     "Unpacks variable quantities of arguments flexibly.",
     {"options": ["`*args` accepts variable positional arguments as a tuple; `**kwargs` accepts keyword arguments as a dictionary", "`*args` forces ints; `**kwargs` forces strings", "Only used in constructors", "For C pointers"], "correctAnswer": "`*args` accepts variable positional arguments as a tuple; `**kwargs` accepts keyword arguments as a dictionary"}),

    ("Intermediate", "Collections", "Coding", "Use Python's `collections.Counter` to find the most frequent word in a sentence.",
     ["Import Counter, split words, call `.most_common(1)`."],
     "Counter(words).most_common(1)[0][0]",
     "Tallies word frequencies in O(n) time.",
     {"code": "from collections import Counter\ndef most_frequent(sentence):\n    counts = Counter(sentence.lower().split())\n    return counts.most_common(1)[0][0]"}),

    ("Intermediate", "Dunder Methods", "Multiple-Choice", "Which special method in Python is called by the `len()` built-in function on a custom object?",
     ["Standard dunder length method."],
     "`__len__(self)`",
     "`__len__` implements the len protocol.",
     {"options": ["`__len__(self)`", "`__size__(self)`", "`__length__(self)`", "`__count__(self)`"], "correctAnswer": "`__len__(self)`"}),

    ("Advanced", "GIL", "Conceptual", "What is the Global Interpreter Lock (GIL) in CPython and how does it affect CPU-bound multithreading?",
     ["CPython mutex preventing simultaneous bytecode execution."],
     "GIL prevents multiple native threads from executing Python bytecodes concurrently.",
     "CPython reference counting requires GIL, so CPU-bound parallelism requires `multiprocessing`.",
     {}),

    ("Advanced", "Asyncio", "Coding", "Write an asynchronous function `fetch_all_urls(urls)` using `asyncio.gather` simulating async network requests.",
     ["Use `async def` and `asyncio.gather`."],
     "Asynchronous concurrent fetching.",
     "Leverages event loop concurrency for I/O bound tasks.",
     {"code": "import asyncio\nasync def mock_fetch(url):\n    await asyncio.sleep(0.05)\n    return f'Data from {url}'\nasync def fetch_all(urls):\n    return await asyncio.gather(*(mock_fetch(u) for u in urls))"}),

    ("Advanced", "Metaclasses", "Multiple-Choice", "In Python, what is the default metaclass responsible for creating standard classes?",
     ["Classes are instances of `type`."],
     "`type`",
     "`type` is the metaclass for standard Python classes.",
     {"options": ["`type`", "`object`", "`class`", "`Meta`"], "correctAnswer": "`type`"}),

    ("Advanced", "Context Managers", "Coding", "Implement a custom context manager class `TimerContext` using `__enter__` and `__exit__`.",
     ["Implement `__enter__` and `__exit__` with `time.perf_counter()`."],
     "Custom context manager class.",
     "Executes setup on enter and teardown on exit.",
     {"code": "import time\nclass TimerContext:\n    def __enter__(self):\n        self.t0 = time.perf_counter()\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.elapsed = time.perf_counter() - self.t0\n        print(f'Elapsed: {self.elapsed:.4f}s')"}),

    ("Advanced", "Memory", "Multiple-Choice", "What is the primary benefit of declaring `__slots__ = ('x', 'y')` in a Python class?",
     ["Avoids creating `__dict__` for each instance."],
     "Significantly reduces memory footprint by replacing the instance `__dict__` with a fixed-size array",
     "Replaces dictionary overhead with compact struct attributes.",
     {"options": ["Significantly reduces memory footprint by replacing the instance `__dict__` with a fixed-size array", "Prevents subclasses", "Serializes to JSON", "Executes on GPU"], "correctAnswer": "Significantly reduces memory footprint by replacing the instance `__dict__` with a fixed-size array"})
]

for q in python_questions:
    items_p1.append(("Python", *q))

assert len(python_questions) == 25

# --- JAVA (25) ---
java_questions = [
    ("Beginner", "Basics", "Coding", "Write a complete Java `main` method that prints 'Hello, Code From Zero!'.",
     ["Standard entry point `public static void main`."],
     "System.out.println in main method.",
     "Entry point for Java application execution on JVM.",
     {"code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Code From Zero!\");\n    }\n}"}),

    ("Beginner", "Data Types", "Multiple-Choice", "What is the size of an `int` primitive in Java across all platforms?",
     ["Fixed 32-bit two's complement."],
     "32 bits (4 bytes)",
     "Java guarantees 32-bit signed integer across all architectures.",
     {"options": ["32 bits (4 bytes)", "16 bits (2 bytes)", "64 bits (8 bytes)", "Platform dependent"], "correctAnswer": "32 bits (4 bytes)"}),

    ("Beginner", "Math", "Coding", "Write a Java method `int sumOfN(int n)` to return the sum of first `n` natural numbers in O(1) time.",
     ["Use Gauss formula `n * (n + 1) / 2`."],
     "return n * (n + 1) / 2;",
     "Direct arithmetic sum formula.",
     {"code": "public static int sumOfN(int n) {\n    return n * (n + 1) / 2;\n}"}),

    ("Beginner", "Arrays", "Coding", "Write a Java method to reverse an integer array in-place.",
     ["Use two pointers swapping ends."],
     "Two-pointer in-place swap.",
     "Reverses array with O(1) extra space.",
     {"code": "public static void reverse(int[] arr) {\n    int i = 0, j = arr.length - 1;\n    while (i < j) {\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n        i++; j--;\n    }\n}"}),

    ("Beginner", "Strings", "Multiple-Choice", "Why are Java `String` objects immutable?",
     ["String Pool caching and thread safety."],
     "For security, synchronization thread-safety, and String Pool caching",
     "Immutability allows sharing string instances without risk of corruption.",
     {"options": ["For security, synchronization thread-safety, and String Pool caching", "JVM cannot allocate memory", "Strings are primitives", "Prevents inheritance from Object"], "correctAnswer": "For security, synchronization thread-safety, and String Pool caching"}),

    ("Beginner", "OOP", "Coding", "Create a Java class `Rectangle` with `width` and `height`, a constructor, and `double getArea()`.",
     ["Encapsulate fields with private access modifier."],
     "Encapsulated Rectangle class.",
     "Standard Java OOP model.",
     {"code": "public class Rectangle {\n    private double w, h;\n    public Rectangle(double w, double h) { this.w = w; this.h = h; }\n    public double getArea() { return w * h; }\n}"}),

    ("Beginner", "Conditionals", "Coding", "Write a method `boolean isLeapYear(int year)` in Java.",
     ["Check divisible by 4, not 100, or divisible by 400."],
     "(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)",
     "Calendar leap year logic.",
     {"code": "public static boolean isLeapYear(int y) {\n    return (y % 4 == 0 && y % 100 != 0) || (y % 400 == 0);\n}"}),

    ("Beginner", "Methods", "Multiple-Choice", "What is method overloading in Java?",
     ["Compile-time polymorphism."],
     "Multiple methods in the same class with the same name but different parameter lists",
     "Resolved at compile time by signature matching.",
     {"options": ["Multiple methods in the same class with the same name but different parameter lists", "Child overriding parent method", "StackOverflow recursion", "Static and private simultaneously"], "correctAnswer": "Multiple methods in the same class with the same name but different parameter lists"}),

    ("Beginner", "Collections", "Coding", "Write code to iterate through an `ArrayList<String>` using an enhanced for-loop.",
     ["Use `for (String s : list)`."],
     "Enhanced for loop.",
     "Uses underlying Iterator cleanly.",
     {"code": "List<String> list = Arrays.asList(\"Java\", \"Python\");\nfor (String s : list) System.out.println(s);"}),

    ("Beginner", "Keywords", "Multiple-Choice", "What keyword is used to allocate memory on the heap for a new object in Java?",
     ["Instantiates object on heap."],
     "`new`",
     "Calls constructor and returns heap reference.",
     {"options": ["`new`", "`malloc`", "`create`", "`instance`"], "correctAnswer": "`new`"}),

    ("Intermediate", "Inheritance", "Coding", "Demonstrate inheritance: Create a class `Animal` with method `sound()` and a subclass `Dog` that overrides `sound()`.",
     ["Use `extends` and `@Override`."],
     "Subclass overriding superclass method.",
     "Runtime polymorphism dynamically binds dog implementation.",
     {"code": "class Animal { public void sound() { System.out.println(\"Sound\"); } }\nclass Dog extends Animal { @Override public void sound() { System.out.println(\"Bark\"); } }"}),

    ("Intermediate", "Interfaces", "Multiple-Choice", "Which statement about Java interfaces (from Java 8+) is TRUE?",
     ["Interfaces can provide default method implementations."],
     "Interfaces can have `default` and `static` methods with implementations",
     "Added in Java 8 for backward-compatible API evolution.",
     {"options": ["Interfaces can have `default` and `static` methods with implementations", "Cannot declare constants", "Class can only implement one interface", "Can have private non-static instance fields"], "correctAnswer": "Interfaces can have `default` and `static` methods with implementations"}),

    ("Intermediate", "Exceptions", "Coding", "Write a method that reads a file using `try-with-resources`.",
     ["Resource must implement AutoCloseable."],
     "try-with-resources statement.",
     "Automatically closes stream on block exit.",
     {"code": "public static void read(String path) {\n    try (BufferedReader br = new BufferedReader(new FileReader(path))) {\n        String l; while ((l = br.readLine()) != null) System.out.println(l);\n    } catch (IOException e) { e.printStackTrace(); }\n}"}),

    ("Intermediate", "Generics", "Coding", "Write a generic method `public static <T> void printArray(T[] array)` that prints any object array.",
     ["Parameterize with `<T>`."],
     "Generic print method.",
     "Ensures type safety across any object type.",
     {"code": "public static <T> void printArray(T[] arr) {\n    for (T item : arr) System.out.print(item + \" \");\n    System.out.println();\n}"}),

    ("Intermediate", "HashMap", "Coding", "Count character frequencies in a string using `HashMap<Character, Integer>`.",
     ["Use `map.put(c, map.getOrDefault(c, 0) + 1)`."],
     "Character frequency tallying.",
     "O(1) average lookup and update.",
     {"code": "public static Map<Character, Integer> counts(String s) {\n    Map<Character, Integer> m = new HashMap<>();\n    for (char c : s.toCharArray()) m.put(c, m.getOrDefault(c, 0) + 1);\n    return m;\n}"}),

    ("Intermediate", "Streams", "Coding", "Filter even numbers, square them, and collect into a list using Java Streams.",
     ["Use `.stream().filter(...).map(...).collect(...)`."],
     "Stream pipeline for mapping evens.",
     "Declarative functional pipeline.",
     {"code": "List<Integer> nums = Arrays.asList(1, 2, 3, 4);\nList<Integer> res = nums.stream().filter(n -> n % 2 == 0).map(n -> n * n).collect(Collectors.toList());"}),

    ("Intermediate", "Contract", "Multiple-Choice", "Why must you override `hashCode()` whenever you override `equals()` in Java?",
     ["Hash table bucket placement contract."],
     "Equal objects according to `equals()` must have identical hash codes to function properly in hash-based collections",
     "Ensures objects map to the same hash bucket in HashMap/HashSet.",
     {"options": ["Equal objects according to `equals()` must have identical hash codes to function properly in hash-based collections", "GC crashes otherwise", "Required for Comparable", "Allows serialization"], "correctAnswer": "Equal objects according to `equals()` must have identical hash codes to function properly in hash-based collections"}),

    ("Intermediate", "Abstract Classes", "Multiple-Choice", "What is a key difference between an `abstract class` and an `interface` in Java?",
     ["Abstract classes hold instance state/fields and constructors."],
     "An abstract class can maintain mutable instance state/fields and constructors; interfaces cannot have instance fields",
     "Classes support single inheritance with state; interfaces specify contracts.",
     {"options": ["An abstract class can maintain mutable instance state/fields and constructors; interfaces cannot have instance fields", "Abstract classes cannot implement methods", "Multiple abstract classes can be extended", "Interfaces cannot declare methods"], "correctAnswer": "An abstract class can maintain mutable instance state/fields and constructors; interfaces cannot have instance fields"}),

    ("Intermediate", "Sorting", "Coding", "Implement `Comparator<Student>` to sort students by grade descending, then name alphabetically.",
     ["Use `Integer.compare(s2.grade, s1.grade)`."],
     "Multi-level comparator.",
     "Custom chained sorting logic.",
     {"code": "public class Comp implements Comparator<Student> {\n    public int compare(Student a, Student b) {\n        int g = Integer.compare(b.getGrade(), a.getGrade());\n        return g != 0 ? g : a.getName().compareTo(b.getName());\n    }\n}"}),

    ("Intermediate", "Threads", "Coding", "Start a thread using a lambda and the `Runnable` functional interface.",
     ["Pass lambda to `new Thread(...)` and call `.start()`."],
     "Thread creation via Runnable lambda.",
     "Spawns asynchronous thread execution.",
     {"code": "new Thread(() -> System.out.println(\"Running in: \" + Thread.currentThread().getName())).start();"}),

    ("Advanced", "Memory", "Multiple-Choice", "Which JVM memory area stores object instances and is managed by the Garbage Collector?",
     ["Heap vs stack distinction."],
     "Heap Memory",
     "All Java object instances reside on the Heap.",
     {"options": ["Heap Memory", "Stack Memory", "Metaspace", "Program Counter Register"], "correctAnswer": "Heap Memory"}),

    ("Advanced", "Concurrency", "Multiple-Choice", "What guarantee does the `volatile` keyword provide in Java multi-threading?",
     ["Memory visibility across CPU caches."],
     "Visibility guarantee (reads and writes go directly to main memory) and prevents instruction reordering",
     "Flushes writes to main memory so other threads observe updates immediately.",
     {"options": ["Visibility guarantee (reads and writes go directly to main memory) and prevents instruction reordering", "Mutual exclusion lock", "Prevents GC", "Locks CPU forever"], "correctAnswer": "Visibility guarantee (reads and writes go directly to main memory) and prevents instruction reordering"}),

    ("Advanced", "Concurrency", "Conceptual", "What are the four necessary Coffman conditions for Deadlock to occur in Java?",
     ["Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait."],
     "Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.",
     "Breaking any one of these conditions (especially enforcing linear lock acquisition order) prevents deadlocks.",
     {}),

    ("Advanced", "Async", "Coding", "Write an asynchronous pipeline using `CompletableFuture.supplyAsync` with `.thenApply` and `.exceptionally`.",
     ["Chain async stages on CompletableFuture."],
     "CompletableFuture pipeline.",
     "Non-blocking asynchronous task chaining.",
     {"code": "CompletableFuture.supplyAsync(() -> \"Data\")\n    .thenApply(s -> s + \" processed\")\n    .exceptionally(ex -> \"Fallback\")\n    .thenAccept(System.out::println);"}),

    ("Advanced", "JVM", "Multiple-Choice", "What is the order of the classic Java ClassLoader hierarchy from top to bottom?",
     ["Bootstrap -> Platform/Extension -> Application/System."],
     "Bootstrap ClassLoader -> Extension / Platform ClassLoader -> Application / System ClassLoader",
     "Follows the Parent Delegation Model.",
     {"options": ["Bootstrap ClassLoader -> Extension / Platform ClassLoader -> Application / System ClassLoader", "Application -> Bootstrap -> Extension", "System -> Network -> Kernel", "Runtime -> Compiler -> Bytecode"], "correctAnswer": "Bootstrap ClassLoader -> Extension / Platform ClassLoader -> Application / System ClassLoader"})
]

for q in java_questions:
    items_p1.append(("Java", *q))

assert len(java_questions) == 25
assert len(items_p1) == 75
print("Part 1 complete: 75 questions.")
