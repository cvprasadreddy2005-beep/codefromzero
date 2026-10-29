import fs from 'fs';
import path from 'path';

// Definition of 19 categories with required distribution summing to exactly 300
// 1. JavaScript (25)
// 2. Python (25)
// 3. Java (25)
// 4. SQL and Databases (20)
// 5. HTML (15)
// 6. CSS (15)
// 7. Git and GitHub (15)
// 8. Cybersecurity (15)
// 9. AI and Machine Learning (20)
// 10. Data Analysis (15)
// 11. Data Structures (20)
// 12. Algorithms (20)
// 13. C Programming (15)
// 14. C++ Programming (15)
// 15. Web Development (15)
// 16. Computer Networks (7)
// 17. Operating Systems (7)
// 18. Software Engineering and Testing (6)
// 19. Problem Solving and Aptitude (5)
// Total = 300

const questions = [];
let currentId = 1;

function addQ(category, difficulty, topic, type, question, details = {}) {
  questions.push({
    id: currentId++,
    category,
    difficulty,
    topic,
    type,
    question,
    options: details.options || [],
    correctAnswer: details.correctAnswer !== undefined ? details.correctAnswer : null,
    hints: details.hints || ["Review core syntax.", "Break down into sub-problems."],
    solution: details.solution || "Refer to explanation and code snippet.",
    code: details.code || "",
    explanation: details.explanation || "This follows standard language specifications and algorithmic efficiency.",
    examples: details.examples || [],
    constraints: details.constraints || ["Standard memory & execution limits apply"],
    timeComplexity: details.timeComplexity || null,
    spaceComplexity: details.spaceComplexity || null,
    tags: details.tags || [category.toLowerCase().replace(/\s+/g, '-'), topic.toLowerCase().replace(/\s+/g, '-')]
  });
}

// ==========================================
// 1. JAVASCRIPT (25 Questions)
// ==========================================
addQ("JavaScript", "Beginner", "Variables", "Coding", "Write a JavaScript program to swap two numbers using a temporary variable.", {
  code: "let a = 10;\nlet b = 20;\n// Swap a and b\nlet temp = a;\na = b;\nb = temp;\nconsole.log(a, b);",
  hints: ["Declare a third variable named temp.", "Store the value of 'a' in 'temp'.", "Assign 'b' to 'a', then 'temp' to 'b'."],
  solution: "let temp = a; a = b; b = temp;",
  explanation: "Using a temporary variable holds the original value of the first variable so it is not overwritten.",
  examples: [{ input: "a = 5, b = 9", output: "a = 9, b = 5" }],
  timeComplexity: "O(1)", spaceComplexity: "O(1)", tags: ["variables", "basics"]
});
addQ("JavaScript", "Beginner", "Data Types", "Multiple-Choice", "What will `typeof NaN` return in JavaScript?", {
  options: ["'number'", "'nan'", "'undefined'", "'object'"],
  correctAnswer: "'number'",
  hints: ["In IEEE-754 floating point arithmetic, NaN is considered a numeric value.", "Check typeof 0/0."],
  solution: "'number'",
  explanation: "Although NaN stands for 'Not a Number', its technical type representation in the JavaScript engine is primitive 'number'.",
  tags: ["types", "typeof"]
});
addQ("JavaScript", "Beginner", "Conditionals", "Coding", "Write a function `isEven(num)` that returns `true` if a number is even, and `false` otherwise.", {
  code: "function isEven(num) {\n  return num % 2 === 0;\n}",
  hints: ["Use the modulus operator `%`.", "Even numbers leave zero remainder when divided by 2."],
  solution: "return num % 2 === 0;",
  explanation: "The modulo operator `%` calculates the remainder. When remainder is 0 with 2, the number is divisible by 2.",
  examples: [{ input: "4", output: "true" }, { input: "7", output: "false" }],
  timeComplexity: "O(1)", spaceComplexity: "O(1)", tags: ["conditionals", "operators"]
});
addQ("JavaScript", "Beginner", "Loops", "Coding", "Write a loop to calculate the factorial of a positive integer `n`.", {
  code: "function factorial(n) {\n  let res = 1;\n  for (let i = 2; i <= n; i++) {\n    res *= i;\n  }\n  return res;\n}",
  hints: ["Initialize accumulator variable to 1.", "Loop from 1 or 2 up to n multiplying accumulator."],
  solution: "Accumulate multiplication from 1 up to n.",
  explanation: "Factorial of n is the product of all positive integers less than or equal to n.",
  examples: [{ input: "5", output: "120" }],
  timeComplexity: "O(n)", spaceComplexity: "O(1)", tags: ["loops", "math"]
});
addQ("JavaScript", "Beginner", "Functions", "Multiple-Choice", "What is the difference between `let` and `var` in terms of scoping?", {
  options: [
    "`let` is block-scoped, while `var` is function-scoped",
    "`var` is block-scoped, while `let` is function-scoped",
    "Both are strictly block-scoped",
    "`let` can be redeclared in the same scope, `var` cannot"
  ],
  correctAnswer: "`let` is block-scoped, while `var` is function-scoped",
  hints: ["Think about what happens inside an `if` block with `{ ... }`.", "`let` was introduced in ES6 to avoid hoisting bugs."],
  solution: "`let` is block-scoped, while `var` is function-scoped",
  explanation: "`let` respects the nearest curly brace `{}` block scope, while `var` is hoisted to the enclosing function or global scope.",
  tags: ["es6", "scope", "var-vs-let"]
});
addQ("JavaScript", "Beginner", "Strings", "Coding", "Write a function `reverseString(str)` that reverses any given string.", {
  code: "function reverseString(str) {\n  return str.split('').reverse().join('');\n}",
  hints: ["Convert string to array of characters with `.split('')`.", "Reverse array and join back with `''`."],
  solution: "str.split('').reverse().join('')",
  explanation: "Splitting converts the string to an array, the Array `.reverse()` method reverses it in place, and `.join('')` reconstructs the string.",
  examples: [{ input: "'hello'", output: "'olleh'" }],
  timeComplexity: "O(n)", spaceComplexity: "O(n)", tags: ["strings", "methods"]
});
addQ("JavaScript", "Beginner", "Arrays", "Coding", "Write a function `findMax(arr)` that finds the largest number in an array.", {
  code: "function findMax(arr) {\n  if (!arr.length) return null;\n  let max = arr[0];\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] > max) max = arr[i];\n  }\n  return max;\n}",
  hints: ["Initialize max to the first element.", "Iterate through remaining elements and update max."],
  solution: "Math.max(...arr) or linear scan tracking maximum value.",
  explanation: "Scanning through the array elements once guarantees finding the maximum in O(n) linear time.",
  examples: [{ input: "[3, 7, 2, 9, 1]", output: "9" }],
  timeComplexity: "O(n)", spaceComplexity: "O(1)", tags: ["arrays", "search"]
});
addQ("JavaScript", "Beginner", "Arrays", "Multiple-Choice", "Which array method does NOT mutate the original array?", {
  options: ["`.concat()`", "`.push()`", "`.splice()`", "`.sort()`"],
  correctAnswer: "`.concat()`",
  hints: ["Think about immutable operations.", "Push, splice, and sort all modify the original array."],
  solution: "`.concat()` returns a new array copy without mutating the original.",
  explanation: "Methods like `concat`, `slice`, `map`, and `filter` create new arrays, whereas `push`, `pop`, `shift`, `unshift`, `splice`, and `sort` mutate in place.",
  tags: ["arrays", "immutability"]
});
addQ("JavaScript", "Beginner", "Objects", "Coding", "Create an object `person` with properties `name`, `age`, and a method `greet()` returning 'Hello, my name is [name]'.", {
  code: "const person = {\n  name: 'Alex',\n  age: 24,\n  greet() {\n    return `Hello, my name is ${this.name}`;\n  }\n};",
  hints: ["Use `this.name` inside the object method.", "Use template literals backticks."],
  solution: "Object with properties and method referencing `this`.",
  explanation: "In standard object methods, `this` refers to the object instance invoking the method.",
  tags: ["objects", "this"]
});
addQ("JavaScript", "Beginner", "Output-Prediction", "Output-Prediction", "What is logged to the console?\n`console.log(1 + '2' + 3);`", {
  options: ["'123'", "6", "'15'", "NaN"],
  correctAnswer: "'123'",
  hints: ["JavaScript evaluates left to right.", "Number + String triggers string concatenation."],
  solution: "'123'",
  explanation: "1 + '2' evaluates to '12' (string concatenation). Then '12' + 3 evaluates to '123'.",
  tags: ["coercion", "operators"]
});
addQ("JavaScript", "Intermediate", "Closures", "Multiple-Choice", "What is a closure in JavaScript?", {
  options: [
    "A function that remembers variables from its outer lexical scope even after the outer function has finished executing",
    "A function that has no return value",
    "A method that closes network sockets automatically",
    "A block of code inside a try-catch-finally block"
  ],
  correctAnswer: "A function that remembers variables from its outer lexical scope even after the outer function has finished executing",
  hints: ["Lexical scope binding.", "Enables data privacy and factory functions."],
  solution: "A function combined with its lexical environment references.",
  explanation: "Closures give an inner function access to an outer function's scope even after the outer function has executed.",
  tags: ["closures", "scope"]
});
addQ("JavaScript", "Intermediate", "Closures", "Coding", "Create a function `createCounter()` that returns an object with `increment()` and `getValue()` methods keeping `count` private.", {
  code: "function createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getValue: () => count\n  };\n}",
  hints: ["Declare `let count = 0` inside outer function.", "Return functions that read and update `count`."],
  solution: "Encapsulation via closure.",
  explanation: "`count` cannot be directly modified from the outside, achieving true data privacy.",
  tags: ["closures", "design-patterns"]
});
addQ("JavaScript", "Intermediate", "Asynchronous", "Multiple-Choice", "What is the output order of:\n`console.log('A'); setTimeout(() => console.log('B'), 0); Promise.resolve().then(() => console.log('C')); console.log('D');`", {
  options: ["A, D, C, B", "A, B, C, D", "A, D, B, C", "A, C, D, B"],
  correctAnswer: "A, D, C, B",
  hints: ["Synchronous code runs first.", "Microtasks (Promises) run before macrotasks (setTimeout)."],
  solution: "A, D, C, B",
  explanation: "Synchronous 'A' and 'D' execute immediately. The microtask queue (Promise 'C') runs next, followed by macrotask queue (setTimeout 'B').",
  tags: ["event-loop", "promises"]
});
addQ("JavaScript", "Intermediate", "Promises", "Coding", "Write a function `fetchDataWithTimeout(promise, timeoutMs)` that rejects if the promise does not resolve within `timeoutMs`.", {
  code: "function fetchDataWithTimeout(promise, timeoutMs) {\n  const timeout = new Promise((_, reject) => \n    setTimeout(() => reject(new Error('Operation timed out')), timeoutMs)\n  );\n  return Promise.race([promise, timeout]);\n}",
  hints: ["Use `Promise.race`.", "Create a second promise that calls `reject` after `timeoutMs`."],
  solution: "Promise.race([promise, timeoutPromise])",
  explanation: "`Promise.race` settles as soon as any of the promises resolves or rejects first.",
  tags: ["promises", "async"]
});
addQ("JavaScript", "Intermediate", "DOM", "Coding", "Write JavaScript to select all buttons with class `.tab-btn` and toggle an `.active` class when clicked.", {
  code: "document.querySelectorAll('.tab-btn').forEach(btn => {\n  btn.addEventListener('click', () => {\n    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));\n    btn.classList.add('active');\n  });\n});",
  hints: ["Use `document.querySelectorAll`.", "Use `classList.remove` and `classList.add`."],
  solution: "Iterate with forEach and add click event listeners.",
  explanation: "Clearing `.active` from siblings before adding to current clicked item ensures single-active tab state.",
  tags: ["dom", "events"]
});
addQ("JavaScript", "Intermediate", "Prototypes", "Multiple-Choice", "How does prototypical inheritance work when accessing a property on an object?", {
  options: [
    "JavaScript searches the object itself; if not found, it traverses the `__proto__` chain until `null`",
    "JavaScript searches the global object first, then the local object",
    "Properties are copied into every child object at creation time",
    "Inheritance is only supported using ES6 class keywords"
  ],
  correctAnswer: "JavaScript searches the object itself; if not found, it traverses the `__proto__` chain until `null`",
  hints: ["Prototype delegation chain.", "Stops at `Object.prototype.__proto__` which is null."],
  solution: "Property delegation up the prototype chain.",
  explanation: "If a property is missing on an object, the JS engine walks up its prototype chain until found or reaches null.",
  tags: ["prototypes", "oop"]
});
addQ("JavaScript", "Intermediate", "Array Methods", "Coding", "Implement a custom `myFilter(arr, callback)` function that behaves like `Array.prototype.filter`.", {
  code: "function myFilter(arr, callback) {\n  const result = [];\n  for (let i = 0; i < arr.length; i++) {\n    if (callback(arr[i], i, arr)) {\n      result.push(arr[i]);\n    }\n  }\n  return result;\n}",
  hints: ["Loop over the input array.", "Test each element with `callback(item, index, array)`."],
  solution: "Iterate and conditionally push truthy results to output array.",
  explanation: "Replicating native filter demonstrates foundational higher-order function mechanics.",
  examples: [{ input: "[1, 2, 3, 4], x => x % 2 === 0", output: "[2, 4]" }],
  timeComplexity: "O(n)", spaceComplexity: "O(n)", tags: ["arrays", "higher-order-functions"]
});
addQ("JavaScript", "Intermediate", "Destructuring", "Multiple-Choice", "What will `const { a = 10, b = 20 } = { a: null };` produce for `a` and `b`?", {
  options: ["a = null, b = 20", "a = 10, b = 20", "a = undefined, b = 20", "Throws TypeError"],
  correctAnswer: "a = null, b = 20",
  hints: ["Default values in destructuring only apply when the value is strictly `undefined`.", "`null` is a defined primitive value."],
  solution: "a = null, b = 20",
  explanation: "Default parameters trigger only on `undefined`. Since `a` is explicitly `null`, it remains `null`.",
  tags: ["destructuring", "es6"]
});
addQ("JavaScript", "Intermediate", "Event Bubbling", "Multiple-Choice", "What method stops an event from bubbling up the DOM tree?", {
  options: ["`e.stopPropagation()`", "`e.preventDefault()`", "`e.stopImmediateBubbling()`", "`e.cancelBubble()`"],
  correctAnswer: "`e.stopPropagation()`",
  hints: ["`preventDefault()` stops default browser behavior, not propagation.", "Propagation refers to bubbling and capturing."],
  solution: "`e.stopPropagation()`",
  explanation: "`e.stopPropagation()` prevents the event from ascending to parent DOM elements.",
  tags: ["events", "dom"]
});
addQ("JavaScript", "Intermediate", "Debouncing", "Coding", "Write a simple `debounce(fn, delay)` utility function in JavaScript.", {
  code: "function debounce(fn, delay) {\n  let timer = null;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}",
  hints: ["Use `setTimeout` and `clearTimeout`.", "Capture timer variable in closure."],
  solution: "Clear previous timeout on every call and set a new one.",
  explanation: "Debouncing ensures that a function is not called again until a specified delay has elapsed since its last invocation.",
  tags: ["debounce", "performance"]
});
addQ("JavaScript", "Advanced", "Event Loop", "Conceptual", "Explain the difference between Macrotasks and Microtasks in the Node.js / browser Event Loop.", {
  hints: ["Microtasks include `process.nextTick`, `Promise.then`, `MutationObserver`.", "Macrotasks include `setTimeout`, `setInterval`, `setImmediate`, I/O."],
  solution: "Microtasks execute immediately after the current script finishes and before the next macrotask is dequeued.",
  explanation: "The event loop drains the entire microtask queue after every single macrotask before picking up the next macrotask. Starvation can occur if microtasks keep enqueuing microtasks.",
  tags: ["event-loop", "advanced"]
});
addQ("JavaScript", "Advanced", "Deep Clone", "Coding", "Write a function `deepClone(obj)` that deeply clones an object handling nested objects and arrays without losing nested structures.", {
  code: "function deepClone(obj, hash = new WeakMap()) {\n  if (Object(obj) !== obj) return obj;\n  if (hash.has(obj)) return hash.get(obj);\n  const result = Array.isArray(obj) ? [] : {};\n  hash.set(obj, result);\n  for (const key of Object.keys(obj)) {\n    result[key] = deepClone(obj[key], hash);\n  }\n  return result;\n}",
  hints: ["Check if primitive first.", "Handle circular references using WeakMap."],
  solution: "Recursive cloning with circular reference tracking using WeakMap.",
  explanation: "Deep cloning requires recursively duplicating nested objects/arrays while caching visited objects in a WeakMap to prevent infinite recursion on circular graphs.",
  timeComplexity: "O(n)", spaceComplexity: "O(n)", tags: ["deep-clone", "recursion"]
});
addQ("JavaScript", "Advanced", "Currying", "Coding", "Implement a generic `curry(fn)` function that transforms `fn(a, b, c)` into `curried(a)(b)(c)`.", {
  code: "function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    }\n    return function(...nextArgs) {\n      return curried.apply(this, args.concat(nextArgs));\n    };\n  };\n}",
  hints: ["Compare `args.length` with `fn.length`.", "Return a new function accumulating arguments if length is less."],
  solution: "Currying via recursion on function arity.",
  explanation: "When collected arguments match or exceed `fn.length`, invoke the original function; otherwise return a partially applied function.",
  tags: ["currying", "functional-programming"]
});
addQ("JavaScript", "Advanced", "Memory Management", "Multiple-Choice", "Which of the following causes a common memory leak in single-page JavaScript applications?", {
  options: [
    "Uncleared event listeners or timers referencing detached DOM elements",
    "Using `const` instead of `let`",
    "Freezing objects with `Object.freeze()`",
    "Using Promises instead of async/await"
  ],
  correctAnswer: "Uncleared event listeners or timers referencing detached DOM elements",
  hints: ["Garbage collector cannot free objects still referenced in active callbacks.", "Component unmounting."],
  solution: "Uncleared event listeners referencing detached DOM elements.",
  explanation: "Detached DOM trees cannot be reclaimed by the garbage collector if closures or event handlers still hold references to them.",
  tags: ["memory", "performance"]
});
addQ("JavaScript", "Advanced", "Generators", "Coding", "Write a generator function `idGenerator()` that yields infinite incremental integers starting from 1.", {
  code: "function* idGenerator() {\n  let id = 1;\n  while (true) {\n    yield id++;\n  }\n}",
  hints: ["Use `function*` syntax.", "Use `yield` inside an infinite loop."],
  solution: "Generator yielding sequential IDs.",
  explanation: "Generators pause execution at each `yield` statement, allowing lazy infinite sequence generation without infinite memory consumption.",
  tags: ["generators", "es6"]
});

console.log(`Added ${questions.length} JS questions.`);

// ==========================================
// 2. PYTHON (25 Questions)
// ==========================================
addQ("Python", "Beginner", "Syntax", "Coding", "Write a Python program to check if a number is positive, negative, or zero.", {
  code: "def check_number(num):\n    if num > 0:\n        return 'Positive'\n    elif num < 0:\n        return 'Negative'\n    else:\n        return 'Zero'",
  hints: ["Use `if`, `elif`, and `else`.", "Compare `num` to 0."],
  solution: "Check `num > 0`, `num < 0`, and `num == 0`.",
  explanation: "Conditional branching with `if/elif/else` allows handling all three mathematical categories of real numbers.",
  examples: [{ input: "5", output: "'Positive'" }, { input: "-2", output: "'Negative'" }],
  tags: ["syntax", "conditionals"]
});
addQ("Python", "Beginner", "Variables", "Multiple-Choice", "Which of the following is an invalid variable name in Python?", {
  options: ["`2nd_number`", "`_total_count`", "`user_name`", "`myVar2`"],
  correctAnswer: "`2nd_number`",
  hints: ["Variable names cannot start with a digit.", "Underscores and letters are valid initial characters."],
  solution: "`2nd_number` is invalid because it starts with a numeral.",
  explanation: "Python identifier rules specify that variable names must begin with a letter (a-z, A-Z) or an underscore (_), not a number.",
  tags: ["variables", "syntax"]
});
addQ("Python", "Beginner", "Lists", "Coding", "Write a function `sum_list(numbers)` that returns the sum of all elements in a list without using `sum()`.", {
  code: "def sum_list(numbers):\n    total = 0\n    for n in numbers:\n        total += n\n    return total",
  hints: ["Initialize `total = 0`.", "Iterate over numbers and accumulate."],
  solution: "Iterate and accumulate into a total variable.",
  explanation: "Linear traversal across list elements accumulating values provides an O(n) sum.",
  examples: [{ input: "[1, 2, 3, 4]", output: "10" }],
  timeComplexity: "O(n)", spaceComplexity: "O(1)", tags: ["lists", "loops"]
});
addQ("Python", "Beginner", "Strings", "Coding", "Write a function `count_vowels(s)` that counts vowels (a, e, i, o, u) in a string case-insensitively.", {
  code: "def count_vowels(s):\n    vowels = set('aeiou')\n    return sum(1 for char in s.lower() if char in vowels)",
  hints: ["Convert string to lowercase with `.lower()`.", "Check if character is in `'aeiou'`."],
  solution: "Filter characters present in vowel set and count.",
  explanation: "Lowercasing normalizes the input, and checking membership against a set is O(1) per character.",
  examples: [{ input: "'Code From Zero'", output: "5" }],
  timeComplexity: "O(n)", spaceComplexity: "O(1)", tags: ["strings", "vowels"]
});
addQ("Python", "Beginner", "Dictionaries", "Multiple-Choice", "How do you access the value associated with key `'age'` in `d = {'name': 'Sam', 'age': 21}` safely without throwing KeyError if missing?", {
  options: ["`d.get('age')`", "`d['age']`", "`d.find('age')`", "`d.value('age')`"],
  correctAnswer: "`d.get('age')`",
  hints: ["Square bracket lookup throws KeyError if key is missing.", "`.get()` returns `None` or a default."],
  solution: "`d.get('age')`",
  explanation: "The `.get(key, default)` method retrieves the value safely and returns `None` (or specified default) if key does not exist.",
  tags: ["dictionaries", "methods"]
});
addQ("Python", "Beginner", "Tuples", "Multiple-Choice", "What is the primary difference between a Python list and a Python tuple?", {
  options: [
    "Lists are mutable; tuples are immutable",
    "Tuples are mutable; lists are immutable",
    "Lists can store strings, tuples can only store numbers",
    "Tuples use curly braces, lists use square brackets"
  ],
  correctAnswer: "Lists are mutable; tuples are immutable",
  hints: ["You cannot modify a tuple after creation.", "Lists use `[]`, tuples use `()`."],
  solution: "Lists are mutable; tuples are immutable.",
  explanation: "Once created, elements in a tuple cannot be reassigned, added, or removed, making tuples hashable if all contents are hashable.",
  tags: ["tuples", "immutability"]
});
addQ("Python", "Beginner", "Loops", "Coding", "Write a Python program to print the multiplication table of a given number `n` from 1 to 10.", {
  code: "def print_table(n):\n    for i in range(1, 11):\n        print(f'{n} x {i} = {n * i}')",
  hints: ["Use `range(1, 11)`.", "Format output using f-strings."],
  solution: "Loop from 1 to 10 with formatted output.",
  explanation: "`range(1, 11)` produces numbers 1 through 10 inclusive.",
  tags: ["loops", "io"]
});
addQ("Python", "Beginner", "Slicing", "Coding", "Given list `nums = [10, 20, 30, 40, 50, 60]`, use Python slicing to get `[50, 30, 10]`.", {
  code: "nums = [10, 20, 30, 40, 50, 60]\nresult = nums[-2::-2]\n# Or nums[4::-2]",
  hints: ["Start index is 4 (or -2).", "Step is -2 to move backwards skipping one element."],
  solution: "nums[-2::-2] or nums[4::-2]",
  explanation: "Slice syntax `[start:stop:step]` with negative step iterates backwards.",
  tags: ["slicing", "lists"]
});
addQ("Python", "Beginner", "Functions", "Coding", "Write a function `is_palindrome(s)` that returns True if a string is a palindrome, ignoring spaces and capitalization.", {
  code: "def is_palindrome(s):\n    cleaned = ''.join(c.lower() for c in s if c.isalnum())\n    return cleaned == cleaned[::-1]",
  hints: ["Filter out non-alphanumeric characters with `c.isalnum()`.", "Compare cleaned string with `cleaned[::-1]`."],
  solution: "Clean string and compare with reversed slice.",
  explanation: "A palindrome reads identically forwards and backwards. Slicing with `[::-1]` yields the reversed string.",
  examples: [{ input: "'Race a car'", output: "False" }, { input: "'A man a plan a canal Panama'", output: "True" }],
  tags: ["palindrome", "strings"]
});
addQ("Python", "Beginner", "Sets", "Multiple-Choice", "What will `len(set([1, 2, 2, 3, 4, 4, 4]))` return?", {
  options: ["4", "7", "3", "5"],
  correctAnswer: "4",
  hints: ["Sets only store unique elements.", "Duplicates are automatically eliminated."],
  solution: "4 (unique elements are 1, 2, 3, 4).",
  explanation: "Converting an iterable to a set de-duplicates values. The set contains {1, 2, 3, 4}, so length is 4.",
  tags: ["sets", "collections"]
});
addQ("Python", "Intermediate", "List Comprehensions", "Coding", "Write a list comprehension to produce squares of all even numbers from 1 to 20.", {
  code: "squares = [x**2 for x in range(1, 21) if x % 2 == 0]",
  hints: ["Use `x**2` for squaring.", "Include `if x % 2 == 0` filtering condition."],
  solution: "[x**2 for x in range(1, 21) if x % 2 == 0]",
  explanation: "List comprehensions combine expression, loop, and optional predicate into concise Pythonic syntax.",
  tags: ["list-comprehension", "pythonic"]
});
addQ("Python", "Intermediate", "OOP", "Coding", "Create a Python class `BankAccount` with `balance`, methods `deposit(amount)` and `withdraw(amount)` validating sufficient funds.", {
  code: "class BankAccount:\n    def __init__(self, initial_balance=0):\n        self.balance = initial_balance\n    def deposit(self, amount):\n        if amount <= 0: raise ValueError('Amount must be positive')\n        self.balance += amount\n        return self.balance\n    def withdraw(self, amount):\n        if amount > self.balance: raise ValueError('Insufficient funds')\n        self.balance -= amount\n        return self.balance",
  hints: ["Use `__init__` constructor.", "Check `amount > self.balance` before decrementing."],
  solution: "Class with encapsulation and balance validation.",
  explanation: "Encapsulating state within class attributes and guarding state transitions prevents illegal account states.",
  tags: ["oop", "classes"]
});
addQ("Python", "Intermediate", "File I/O", "Multiple-Choice", "Why is `with open('file.txt', 'r') as f:` preferred over `f = open('file.txt', 'r')`?", {
  options: [
    "It automatically guarantees file descriptor closure even if exceptions occur",
    "It loads the file into GPU memory for faster reading",
    "It encrypts the contents while reading",
    "It allows simultaneous write locks across processes"
  ],
  correctAnswer: "It automatically guarantees file descriptor closure even if exceptions occur",
  hints: ["Context manager protocol `__enter__` and `__exit__`.", "Prevents resource leaks."],
  solution: "Automatic resource cleanup via context management.",
  explanation: "The `with` statement leverages context managers to execute `f.close()` reliably upon exit or unhandled error.",
  tags: ["file-io", "context-managers"]
});
addQ("Python", "Intermediate", "Decorators", "Coding", "Write a simple timing decorator `@timer` that logs how long a function takes to execute.", {
  code: "import time\nfrom functools import wraps\n\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        duration = time.perf_counter() - start\n        print(f'{func.__name__} executed in {duration:.4f}s')\n        return result\n    return wrapper",
  hints: ["Use `functools.wraps` to preserve function metadata.", "Measure `time.perf_counter()` before and after calling `func`."],
  solution: "Decorator returning a timed wrapper function.",
  explanation: "Decorators wrap functions using higher-order closures to augment behavior without modifying the original source.",
  tags: ["decorators", "meta-programming"]
});
addQ("Python", "Intermediate", "Error Handling", "Coding", "Write a function `safe_divide(a, b)` that catches `ZeroDivisionError` and `TypeError` gracefully returning `None` and printing an error.", {
  code: "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        print('Error: Cannot divide by zero')\n        return None\n    except TypeError:\n        print('Error: Inputs must be numeric')\n        return None",
  hints: ["Use `try-except` blocks.", "Catch specific exception classes."],
  solution: "Exception handling with multiple except clauses.",
  explanation: "Explicit exception trapping avoids crashing the application and isolates runtime error logic.",
  tags: ["exceptions", "error-handling"]
});
addQ("Python", "Intermediate", "Lambda", "Coding", "Sort a list of tuples `students = [('Alice', 88), ('Bob', 95), ('Charlie', 78)]` by grade descending using `sorted()` and `lambda`.", {
  code: "students = [('Alice', 88), ('Bob', 95), ('Charlie', 78)]\nsorted_students = sorted(students, key=lambda s: s[1], reverse=True)",
  hints: ["Pass `key=lambda s: s[1]`.", "Pass `reverse=True` for descending order."],
  solution: "sorted(students, key=lambda s: s[1], reverse=True)",
  explanation: "The key function extracts the comparison criterion from each tuple item.",
  examples: [{ input: "[('Alice', 88), ('Bob', 95), ('Charlie', 78)]", output: "[('Bob', 95), ('Alice', 88), ('Charlie', 78)]" }],
  tags: ["lambda", "sorting"]
});
addQ("Python", "Intermediate", "Generators", "Coding", "Write a generator function `fibonacci_gen(limit)` that yields Fibonacci numbers up to `limit`.", {
  code: "def fibonacci_gen(limit):\n    a, b = 0, 1\n    while a <= limit:\n        yield a\n        a, b = b, a + b",
  hints: ["Use `yield` keyword.", "Maintain two variables `a, b = 0, 1`."],
  solution: "Generator function yielding terms lazily.",
  explanation: "Yielding preserves execution context and produces numbers one-by-one with O(1) auxiliary space.",
  tags: ["generators", "fibonacci"]
});
addQ("Python", "Intermediate", "*args and **kwargs", "Multiple-Choice", "What is the purpose of `*args` and `**kwargs` in a Python function definition?", {
  options: [
    "`*args` accepts variable positional arguments as a tuple; `**kwargs` accepts keyword arguments as a dictionary",
    "`*args` forces integer arguments; `**kwargs` forces string arguments",
    "They are used only in class constructors to inherit multiple parent classes",
    "`*args` is for pointers and `**kwargs` is for double pointers"
  ],
  correctAnswer: "`*args` accepts variable positional arguments as a tuple; `**kwargs` accepts keyword arguments as a dictionary",
  hints: ["Positional unpacking vs keyword unpacking.", "Tuple vs Dict."],
  solution: "`*args` for variable positional tuple, `**kwargs` for keyword dict.",
  explanation: "The asterisk unpacking operators allow functions to accept dynamic quantities of arguments flexibly.",
  tags: ["args-kwargs", "functions"]
});
addQ("Python", "Intermediate", "Collections", "Coding", "Use Python's `collections.Counter` to find the most frequent word in a sentence.", {
  code: "from collections import Counter\n\ndef most_frequent_word(sentence):\n    words = sentence.lower().split()\n    counts = Counter(words)\n    return counts.most_common(1)[0][0]",
  hints: ["Import `Counter` from `collections`.", "Use `.most_common(1)`."],
  solution: "Counter(words).most_common(1)[0][0]",
  explanation: "`Counter` efficiently tallies hashable elements in O(n) time.",
  tags: ["collections", "counter"]
});
addQ("Python", "Intermediate", "Dunder Methods", "Multiple-Choice", "Which special method in Python is called by the `len()` built-in function on a custom object?", {
  options: ["`__len__(self)`", "`__size__(self)`", "`__length__(self)`", "`__count__(self)`"],
  correctAnswer: "`__len__(self)`",
  hints: ["Standard dunder naming.", "Matches name of the built-in."],
  solution: "`__len__(self)`",
  explanation: "The Python data model defines `__len__` to return non-negative integer container size.",
  tags: ["dunder", "data-model"]
});
addQ("Python", "Advanced", "GIL", "Conceptual", "What is the Global Interpreter Lock (GIL) in CPython and how does it affect CPU-bound multithreading?", {
  hints: ["Mutex protecting Python object memory management.", "Only one native thread can execute Python bytecode at a time."],
  solution: "The GIL prevents multiple native threads from executing Python bytecodes simultaneously in CPython.",
  explanation: "CPython uses reference counting for garbage collection which is not thread-safe without the GIL. For CPU-bound tasks, multithreading does not achieve parallel speedups; `multiprocessing` or native C-extensions must be used instead.",
  tags: ["gil", "concurrency"]
});
addQ("Python", "Advanced", "Asyncio", "Coding", "Write an asynchronous function `fetch_all_urls(urls)` using `asyncio.gather` simulating async network requests with `asyncio.sleep`.", {
  code: "import asyncio\n\nasync def mock_fetch(url):\n    await asyncio.sleep(0.1)\n    return f'Data from {url}'\n\nasync def fetch_all_urls(urls):\n    tasks = [mock_fetch(u) for u in urls]\n    return await asyncio.gather(*tasks)",
  hints: ["Define async coroutines with `async def`.", "Use `asyncio.gather(*tasks)` to run concurrently."],
  solution: "Concurrent I/O execution via asyncio.gather.",
  explanation: "The asyncio event loop switches tasks during `await`, enabling cooperative multitasking without thread context-switching overhead.",
  tags: ["asyncio", "concurrency"]
});
addQ("Python", "Advanced", "Metaclasses", "Multiple-Choice", "In Python, what is the default metaclass responsible for creating standard classes?", {
  options: ["`type`", "`object`", "`class`", "`Meta`"],
  correctAnswer: "`type`",
  hints: ["In Python, everything is an object, and classes are instances of something.", "`type` can be called with 3 arguments to define a class."],
  solution: "`type`",
  explanation: "`type` is the built-in metaclass that constructs class objects (`type(name, bases, dict)`).",
  tags: ["metaclasses", "internals"]
});
addQ("Python", "Advanced", "Context Managers", "Coding", "Implement a custom context manager class `TimerContext` using `__enter__` and `__exit__` to measure elapsed block time.", {
  code: "import time\n\nclass TimerContext:\n    def __enter__(self):\n        self.start = time.perf_counter()\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.elapsed = time.perf_counter() - self.start\n        print(f'Elapsed: {self.elapsed:.4f}s')\n        return False",
  hints: ["Implement `__enter__` returning self or resource.", "Implement `__exit__` receiving exception arguments."],
  solution: "Class with `__enter__` and `__exit__` methods.",
  explanation: "Context manager protocol executes `__enter__` when entering the `with` block and guarantees `__exit__` on exit.",
  tags: ["context-managers", "oop"]
});
addQ("Python", "Advanced", "Memory / __slots__", "Multiple-Choice", "What is the primary benefit of declaring `__slots__ = ('x', 'y')` in a Python class?", {
  options: [
    "Significantly reduces memory footprint by replacing the instance `__dict__` with a fixed-size array",
    "Prevents subclasses from inheriting methods",
    "Automatically serializes instances to JSON",
    "Makes the class execute on GPU"
  ],
  correctAnswer: "Significantly reduces memory footprint by replacing the instance `__dict__` with a fixed-size array",
  hints: ["Bypasses dynamic dictionary creation for every instance.", "Useful when instantiating millions of small objects."],
  solution: "Eliminates `__dict__` overhead for memory optimization.",
  explanation: "By defining `__slots__`, Python reserves space for attributes in a compact struct rather than a dynamic hash table `__dict__`.",
  tags: ["optimization", "memory", "slots"]
});

console.log(`Added ${questions.length} JS+Python questions.`);

// ==========================================
// 3. JAVA (25 Questions)
// ==========================================
addQ("Java", "Beginner", "Basics", "Coding", "Write a complete Java `main` method that prints 'Hello, Code From Zero!'.", {
  code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Code From Zero!\");\n    }\n}",
  hints: ["Entry point signature: `public static void main(String[] args)`.", "Use `System.out.println()`."],
  solution: "Standard Java main method with console output.",
  explanation: "The JVM looks for the `public static void main(String[] args)` signature as the application entry point.",
  tags: ["basics", "syntax"]
});
addQ("Java", "Beginner", "Data Types", "Multiple-Choice", "What is the size of an `int` primitive in Java across all platforms?", {
  options: ["32 bits (4 bytes)", "16 bits (2 bytes)", "64 bits (8 bytes)", "Platform dependent (16 or 32 bits)"],
  correctAnswer: "32 bits (4 bytes)",
  hints: ["Java guarantees write-once-run-anywhere data type sizes.", "Signed two's complement integer."],
  solution: "32 bits (4 bytes).",
  explanation: "Unlike C/C++, Java specifies exact primitive sizes across all platforms: `int` is strictly 32-bit signed two's complement.",
  tags: ["primitives", "jvm"]
});
addQ("Java", "Beginner", "Loops", "Coding", "Write a Java method `int sumOfN(int n)` to return the sum of first `n` natural numbers.", {
  code: "public static int sumOfN(int n) {\n    return n * (n + 1) / 2;\n}",
  hints: ["You can use a loop or Gauss's formula `n * (n + 1) / 2`.", "Ensure no integer overflow for large numbers."],
  solution: "return n * (n + 1) / 2;",
  explanation: "Gauss formula computes sum of consecutive integers in O(1) arithmetic time.",
  examples: [{ input: "10", output: "55" }],
  timeComplexity: "O(1)", spaceComplexity: "O(1)", tags: ["math", "methods"]
});
addQ("Java", "Beginner", "Arrays", "Coding", "Write a Java method to reverse an integer array in-place.", {
  code: "public static void reverseArray(int[] arr) {\n    int i = 0, j = arr.length - 1;\n    while (i < j) {\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n        i++;\n        j--;\n    }\n}",
  hints: ["Use two pointers: one at start (0) and one at end (`length - 1`).", "Swap elements and increment/decrement pointers."],
  solution: "Two-pointer in-place swap.",
  explanation: "Swapping from the ends inwards reverses the array in O(n/2) iterations with O(1) additional memory.",
  timeComplexity: "O(n)", spaceComplexity: "O(1)", tags: ["arrays", "two-pointer"]
});
addQ("Java", "Beginner", "Strings", "Multiple-Choice", "Why are Java `String` objects immutable?", {
  options: [
    "For security, synchronization thread-safety, and String Pool caching",
    "Because the JVM cannot reallocate heap memory",
    "Because Strings are primitive types in Java",
    "To prevent inheritance from Object class"
  ],
  correctAnswer: "For security, synchronization thread-safety, and String Pool caching",
  hints: ["String pool optimization.", "Security when strings are used as database connection URLs or file paths."],
  solution: "Immutability enables String Pool caching, thread safety, and security.",
  explanation: "Strings cannot be modified once instantiated. This allows safe reuse from the String Constant Pool and prevents race conditions.",
  tags: ["strings", "immutability"]
});
addQ("Java", "Beginner", "OOP", "Coding", "Create a Java class `Rectangle` with `width` and `height`, a constructor, and a method `double getArea()`.", {
  code: "public class Rectangle {\n    private double width;\n    private double height;\n\n    public Rectangle(double width, double height) {\n        this.width = width;\n        this.height = height;\n    }\n\n    public double getArea() {\n        return this.width * this.height;\n    }\n}",
  hints: ["Make instance variables private.", "Provide a public constructor with `this`."],
  solution: "Encapsulated Rectangle class with area calculator.",
  explanation: "Encapsulation safeguards instance fields while exposing public interfaces.",
  tags: ["oop", "encapsulation"]
});
addQ("Java", "Beginner", "Conditionals", "Coding", "Write a method `boolean isLeapYear(int year)` in Java.", {
  code: "public static boolean isLeapYear(int year) {\n    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);\n}",
  hints: ["Divisible by 4 AND NOT divisible by 100, OR divisible by 400."],
  solution: "(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)",
  explanation: "Gregorian calendar rules state leap years occur every 4 years, skip century years unless divisible by 400.",
  examples: [{ input: "2024", output: "true" }, { input: "1900", output: "false" }, { input: "2000", output: "true" }],
  tags: ["conditionals", "math"]
});
addQ("Java", "Beginner", "Methods", "Multiple-Choice", "What is method overloading in Java?", {
  options: [
    "Multiple methods in the same class with the same name but different parameter lists",
    "A child class redefining a method of a parent class",
    "Running a method with too many recursive calls causing StackOverflow",
    "Making a method static and private at the same time"
  ],
  correctAnswer: "Multiple methods in the same class with the same name but different parameter lists",
  hints: ["Compile-time polymorphism.", "Parameters vary in type, count, or order."],
  solution: "Same method name, differing signature/parameters in the same class.",
  explanation: "Method overloading is resolved at compile time based on method signatures.",
  tags: ["polymorphism", "methods"]
});
addQ("Java", "Beginner", "Collections", "Coding", "Write code to iterate through an `ArrayList<String>` using an enhanced for-loop.", {
  code: "List<String> list = Arrays.asList(\"Java\", \"Python\", \"C++\");\nfor (String lang : list) {\n    System.out.println(lang);\n}",
  hints: ["Use `for (ElementType var : collection)`."],
  solution: "Enhanced for-each loop over Iterable.",
  explanation: "The enhanced for-loop uses the underlying `Iterator` for clean, safe traversal.",
  tags: ["collections", "arraylist"]
});
addQ("Java", "Beginner", "Classes vs Objects", "Multiple-Choice", "What keyword is used to allocate memory on the heap for a new object in Java?", {
  options: ["`new`", "`malloc`", "`create`", "`instance`"],
  correctAnswer: "`new`",
  hints: ["Standard object instantiation.", "`Dog d = new Dog();`"],
  solution: "`new` operator instantiates objects on the heap.",
  explanation: "The `new` keyword dynamically allocates heap memory for the class instance and invokes its constructor.",
  tags: ["oop", "keywords"]
});
addQ("Java", "Intermediate", "Inheritance", "Coding", "Demonstrate inheritance: Create a class `Animal` with method `sound()` and a subclass `Dog` that overrides `sound()`.", {
  code: "class Animal {\n    public void sound() {\n        System.out.println(\"Animal makes a sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    public void sound() {\n        System.out.println(\"Dog barks: Woof!\");\n    }\n}",
  hints: ["Use `extends` keyword.", "Annotate with `@Override`."],
  solution: "Subclass using `extends` and overriding superclass method.",
  explanation: "Runtime polymorphism enables the JVM to invoke the overridden method of the concrete runtime type.",
  tags: ["inheritance", "polymorphism"]
});
addQ("Java", "Intermediate", "Interfaces", "Multiple-Choice", "Which statement about Java interfaces (from Java 8+) is TRUE?", {
  options: [
    "Interfaces can have `default` and `static` methods with implementations",
    "Interfaces cannot declare any constants",
    "A class can only implement a single interface",
    "Interfaces can declare private non-static instance variables"
  ],
  correctAnswer: "Interfaces can have `default` and `static` methods with implementations",
  hints: ["Default methods were added in Java 8 for backward compatibility with Lambdas.", "Keyword `default`."],
  solution: "Interfaces can contain default and static methods with concrete bodies.",
  explanation: "Java 8 introduced `default` methods allowing API evolution without breaking existing interface implementations.",
  tags: ["interfaces", "java8"]
});
addQ("Java", "Intermediate", "Exceptions", "Coding", "Write a method that handles `FileNotFoundException` using a `try-with-resources` statement to read a file.", {
  code: "import java.io.*;\n\npublic static void readFile(String path) {\n    try (BufferedReader br = new BufferedReader(new FileReader(path))) {\n        String line;\n        while ((line = br.readLine()) != null) {\n            System.out.println(line);\n        }\n    } catch (IOException e) {\n        System.err.println(\"Error reading file: \" + e.getMessage());\n    }\n}",
  hints: ["Use `try (ResourceType resource = ...) { ... }`.", "Resource must implement `AutoCloseable`."],
  solution: "try-with-resources automatically closes streams upon exit.",
  explanation: "Try-with-resources prevents resource leaks by guaranteeing closure of any object implementing AutoCloseable.",
  tags: ["exceptions", "io"]
});
addQ("Java", "Intermediate", "Generics", "Coding", "Write a generic method `public static <T> void printArray(T[] array)` that prints any object array.", {
  code: "public static <T> void printArray(T[] array) {\n    for (T element : array) {\n        System.out.print(element + \" \");\n    }\n    System.out.println();\n}",
  hints: ["Place `<T>` before return type.", "Use `T[]` as parameter."],
  solution: "Generic method parameterized by type T.",
  explanation: "Generics ensure compile-time type safety and code reusability without raw casting.",
  tags: ["generics", "type-safety"]
});
addQ("Java", "Intermediate", "HashMap", "Coding", "Write a Java program to count frequencies of characters in a string using `HashMap<Character, Integer>`.", {
  code: "public static Map<Character, Integer> charFrequencies(String s) {\n    Map<Character, Integer> map = new HashMap<>();\n    for (char c : s.toCharArray()) {\n        map.put(c, map.getOrDefault(c, 0) + 1);\n    }\n    return map;\n}",
  hints: ["Use `map.getOrDefault(c, 0) + 1`.", "Iterate with `s.toCharArray()`."],
  solution: "HashMap with getOrDefault for frequency counting.",
  explanation: "`getOrDefault` provides concise one-line frequency updates with average O(1) time per character.",
  tags: ["hashmap", "collections"]
});
addQ("Java", "Intermediate", "Streams", "Coding", "Use Java Stream API to filter even numbers from a `List<Integer>`, square them, and collect into a new List.", {
  code: "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);\nList<Integer> squaredEvens = numbers.stream()\n    .filter(n -> n % 2 == 0)\n    .map(n -> n * n)\n    .collect(Collectors.toList());",
  hints: ["Use `.stream()`.", "Chain `.filter()`, `.map()`, and `.collect()`."],
  solution: "stream().filter(...).map(...).collect(...) pipeline.",
  explanation: "Streams enable functional, declarative data pipelines with lazy evaluation.",
  tags: ["streams", "lambdas"]
});
addQ("Java", "Intermediate", "Equals and HashCode", "Multiple-Choice", "Why must you override `hashCode()` whenever you override `equals()` in Java?", {
  options: [
    "Equal objects according to `equals()` must have identical hash codes to function properly in hash-based collections like `HashSet` and `HashMap`",
    "The garbage collector crashes if `hashCode()` is not overridden",
    "`hashCode()` is required for sorting using `Comparable`",
    "To allow serialization across network sockets"
  ],
  correctAnswer: "Equal objects according to `equals()` must have identical hash codes to function properly in hash-based collections like `HashSet` and `HashMap`",
  hints: ["Hash contract between equals and hashCode.", "Bucket placement in HashMap."],
  solution: "The hashCode/equals contract guarantees hash table bucket lookup correctness.",
  explanation: "If two objects are equal by `equals()`, their `hashCode()` values MUST be equal; otherwise hash collections cannot find or deduplicate them.",
  tags: ["equals-hashcode", "contract"]
});
addQ("Java", "Intermediate", "Abstract Classes", "Multiple-Choice", "What is a key difference between an `abstract class` and an `interface` in Java?", {
  options: [
    "An abstract class can maintain mutable instance state/fields and constructors; interfaces cannot have instance fields",
    "An abstract class cannot implement any methods",
    "A class can extend multiple abstract classes",
    "Interfaces cannot declare any methods"
  ],
  correctAnswer: "An abstract class can maintain mutable instance state/fields and constructors; interfaces cannot have instance fields",
  hints: ["State vs behavioral contract.", "Multiple inheritance of type vs single inheritance of class."],
  solution: "Abstract classes have constructors and instance state; interfaces define behavioral contracts.",
  explanation: "Java allows extending only one class (single inheritance) while implementing multiple interfaces.",
  tags: ["abstract-classes", "interfaces"]
});
addQ("Java", "Intermediate", "Comparable vs Comparator", "Coding", "Implement `Comparator<Student>` to sort students by grade descending, then by name alphabetically.", {
  code: "public class StudentComparator implements Comparator<Student> {\n    @Override\n    public int compare(Student s1, Student s2) {\n        int gradeComp = Integer.compare(s2.getGrade(), s1.getGrade());\n        if (gradeComp != 0) return gradeComp;\n        return s1.getName().compareTo(s2.getName());\n    }\n}",
  hints: ["Use `Integer.compare(b, a)` for descending order.", "Break ties with `String.compareTo()`."],
  solution: "Multi-level Comparator implementation.",
  explanation: "Comparator provides external sorting strategies that can be composed and chained.",
  tags: ["comparator", "sorting"]
});
addQ("Java", "Intermediate", "Threads", "Coding", "Create and start a thread using the `Runnable` functional interface and a lambda.", {
  code: "Thread thread = new Thread(() -> {\n    System.out.println(\"Running in thread: \" + Thread.currentThread().getName());\n});\nthread.start();",
  hints: ["Pass lambda `() -> { ... }` to `new Thread(...)`.", "Call `thread.start()`, not `thread.run()`."],
  solution: "Thread instantiation with Runnable lambda and start().",
  explanation: "`start()` spawns a new OS execution thread and invokes `run()` asynchronously.",
  tags: ["threads", "concurrency"]
});
addQ("Java", "Advanced", "JVM Memory", "Multiple-Choice", "Which JVM memory area stores object instances and is managed by the Garbage Collector?", {
  options: ["Heap Memory", "Stack Memory", "Metaspace", "Program Counter Register"],
  correctAnswer: "Heap Memory",
  hints: ["Stack holds local primitive variables and reference pointers.", "Heap holds actual objects."],
  solution: "Heap Memory.",
  explanation: "All Java objects and arrays are dynamically allocated on the Heap, which is monitored and collected by the GC.",
  tags: ["jvm", "memory-management"]
});
addQ("Java", "Advanced", "Volatile Keyword", "Multiple-Choice", "What guarantee does the `volatile` keyword provide in Java multi-threading?", {
  options: [
    "Visibility guarantee (reads and writes go directly to main memory) and prevents instruction reordering",
    "Mutual exclusion equivalent to `synchronized` blocks",
    "Prevents an object from being garbage collected",
    "Locks the CPU cache line exclusively forever"
  ],
  correctAnswer: "Visibility guarantee (reads and writes go directly to main memory) and prevents instruction reordering",
  hints: ["Memory visibility across CPU caches.", "Does NOT provide compound atomicity like i++."],
  solution: "Memory visibility and happens-before relationship without mutual exclusion.",
  explanation: "`volatile` ensures any thread reading the field immediately sees the latest write flushed to main memory.",
  tags: ["volatile", "concurrency"]
});
addQ("Java", "Advanced", "Deadlock", "Conceptual", "What are the four necessary conditions for a Deadlock to occur in Java, and how do you prevent it?", {
  hints: ["Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait."],
  solution: "Deadlock prevention typically enforces a strict, global lock acquisition ordering to eliminate circular wait.",
  explanation: "The 4 conditions are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Breaking Circular Wait by always acquiring locks in a consistent global order guarantees deadlock freedom.",
  tags: ["deadlock", "concurrency"]
});
addQ("Java", "Advanced", "CompletableFuture", "Coding", "Write an asynchronous pipeline using `CompletableFuture.supplyAsync` that fetches data, transforms it with `.thenApply`, and handles errors with `.exceptionally`.", {
  code: "CompletableFuture.supplyAsync(() -> {\n    // Simulate remote fetch\n    return \"User-101\";\n}).thenApply(userId -> {\n    return \"Processed data for: \" + userId;\n}).exceptionally(ex -> {\n    return \"Fallback default\";\n}).thenAccept(System.out::println);",
  hints: ["Use `supplyAsync` for async supplier.", "Chain `.thenApply` and `.exceptionally`."],
  solution: "Non-blocking asynchronous pipeline with CompletableFuture.",
  explanation: "CompletableFuture provides composable, event-driven asynchronous computation on the ForkJoinPool.",
  tags: ["completable-future", "async"]
});
addQ("Java", "Advanced", "Classloader", "Multiple-Choice", "What is the order of the classic Java ClassLoader hierarchy from top (parent) to bottom?", {
  options: [
    "Bootstrap ClassLoader -> Extension / Platform ClassLoader -> Application / System ClassLoader",
    "Application ClassLoader -> Bootstrap ClassLoader -> Extension ClassLoader",
    "System ClassLoader -> Network ClassLoader -> Kernel ClassLoader",
    "Runtime ClassLoader -> Compiler ClassLoader -> Bytecode ClassLoader"
  ],
  correctAnswer: "Bootstrap ClassLoader -> Extension / Platform ClassLoader -> Application / System ClassLoader",
  hints: ["Parent delegation model.", "Bootstrap loads core rt.jar / java.base."],
  solution: "Bootstrap -> Platform -> Application delegation model.",
  explanation: "Java employs the Parent Delegation Model: requests are delegated upwards before a ClassLoader attempts to load a class itself.",
  tags: ["classloader", "internals"]
});

console.log(`Added ${questions.length} JS+Python+Java questions.`);

// Let's write the remaining categories into this generator script cleanly!
