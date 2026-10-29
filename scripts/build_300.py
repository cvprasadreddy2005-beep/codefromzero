import json
import os

questions = []
qid = 1

def add(cat, diff, topic, qtype, text, hints, solution, explanation, **kw):
    global qid
    questions.append({
        "id": qid,
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
    qid += 1

# ==================== 1. JAVASCRIPT (25) ====================
add("JavaScript", "Beginner", "Variables", "Coding",
    "Write a JavaScript program to swap two numbers using a temporary variable.",
    ["Declare a temporary variable `temp`.", "Exchange the values step by step."],
    "let temp = a; a = b; b = temp;",
    "Using a temporary variable preserves the first value while exchanging the two variables.",
    code="let a = 10;\nlet b = 20;\nlet temp = a;\na = b;\nb = temp;\nconsole.log(a, b);",
    examples=[{"input": "a = 10, b = 20", "output": "a = 20, b = 10"}],
    timeComplexity="O(1)", spaceComplexity="O(1)")

add("JavaScript", "Beginner", "Data Types", "Multiple-Choice",
    "What will `typeof NaN` return in JavaScript?",
    ["In IEEE-754 floating point arithmetic, NaN is technically a numeric value."],
    "'number'",
    "Although NaN stands for 'Not a Number', its typeof is primitive number.",
    options=["'number'", "'nan'", "'undefined'", "'object'"],
    correctAnswer="'number'")

add("JavaScript", "Beginner", "Conditionals", "Coding",
    "Write a function `isEven(num)` that returns `true` if a number is even, and `false` otherwise.",
    ["Use the modulus operator `%`.", "Even numbers leave 0 remainder when divided by 2."],
    "return num % 2 === 0;",
    "The modulo operator calculates remainder. When num % 2 equals 0, the number is even.",
    code="function isEven(num) {\n  return num % 2 === 0;\n}",
    examples=[{"input": "4", "output": "true"}, {"input": "7", "output": "false"}],
    timeComplexity="O(1)", spaceComplexity="O(1)")

add("JavaScript", "Beginner", "Loops", "Coding",
    "Write a loop to calculate the factorial of a positive integer `n`.",
    ["Start accumulator at 1.", "Loop from 2 to n multiplying the accumulator."],
    "Accumulate product from 1 to n.",
    "Factorial of n is the product of all positive integers less than or equal to n.",
    code="function factorial(n) {\n  let res = 1;\n  for (let i = 2; i <= n; i++) res *= i;\n  return res;\n}",
    examples=[{"input": "5", "output": "120"}],
    timeComplexity="O(n)", spaceComplexity="O(1)")

add("JavaScript", "Beginner", "Scope", "Multiple-Choice",
    "What is the difference between `let` and `var` in terms of scoping?",
    ["Think about curly braces in if blocks.", "`let` was introduced in ES6."],
    "`let` is block-scoped, while `var` is function-scoped",
    "`let` adheres to the nearest curly brace block, preventing accidental scope leakage.",
    options=[
        "`let` is block-scoped, while `var` is function-scoped",
        "`var` is block-scoped, while `let` is function-scoped",
        "Both are strictly block-scoped",
        "`let` can be redeclared in the same block, `var` cannot"
    ],
    correctAnswer="`let` is block-scoped, while `var` is function-scoped")

add("JavaScript", "Beginner", "Strings", "Coding",
    "Write a function `reverseString(str)` that reverses any given string.",
    ["Convert string to array with `.split('')`.", "Reverse the array and join back to a string."],
    "str.split('').reverse().join('')",
    "Splitting converts to array, reversing flips order, and joining restores string form.",
    code="function reverseString(str) {\n  return str.split('').reverse().join('');\n}",
    examples=[{"input": "'hello'", "output": "'olleh'"}],
    timeComplexity="O(n)", spaceComplexity="O(n)")

add("JavaScript", "Beginner", "Arrays", "Coding",
    "Write a function `findMax(arr)` that finds the largest number in an array.",
    ["Initialize max to the first element.", "Iterate through elements and update max."],
    "Math.max(...arr) or linear scan.",
    "A single linear scan through n elements guarantees finding the maximum in O(n) time.",
    code="function findMax(arr) {\n  if (!arr.length) return null;\n  let max = arr[0];\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] > max) max = arr[i];\n  }\n  return max;\n}",
    examples=[{"input": "[3, 7, 2, 9, 1]", "output": "9"}],
    timeComplexity="O(n)", spaceComplexity="O(1)")

add("JavaScript", "Beginner", "Arrays", "Multiple-Choice",
    "Which array method does NOT mutate the original array?",
    ["Push, splice, and sort alter the array in place."],
    "`.concat()`",
    "`.concat()` creates a new array without mutating either input array.",
    options=["`.concat()`", "`.push()`", "`.splice()`", "`.sort()`"],
    correctAnswer="`.concat()`")

add("JavaScript", "Beginner", "Objects", "Coding",
    "Create an object `person` with properties `name`, `age`, and a method `greet()` returning 'Hello, my name is [name]'.",
    ["Use `this.name` inside method.", "Use template literals."],
    "Object with properties and method referencing `this`.",
    "In object methods, `this` refers to the object calling the method.",
    code="const person = {\n  name: 'Alex',\n  age: 24,\n  greet() {\n    return `Hello, my name is ${this.name}`;\n  }\n};")

add("JavaScript", "Beginner", "Type Coercion", "Output-Prediction",
    "What is logged to the console?\n`console.log(1 + '2' + 3);`",
    ["Evaluated left to right.", "Number + String triggers string concatenation."],
    "'123'",
    "1 + '2' results in '12', then '12' + 3 results in '123'.",
    options=["'123'", "6", "'15'", "NaN"],
    correctAnswer="'123'")

add("JavaScript", "Intermediate", "Closures", "Multiple-Choice",
    "What is a closure in JavaScript?",
    ["Lexical scope preservation.", "Inner function accessing outer variables."],
    "A function that retains access to variables from its outer lexical scope even after that outer function has returned",
    "Closures bundle an inner function with references to its surrounding state.",
    options=[
        "A function that retains access to variables from its outer lexical scope even after that outer function has returned",
        "A function that executes with no return value",
        "A method that closes network connections automatically",
        "A block of code inside a finally statement"
    ],
    correctAnswer="A function that retains access to variables from its outer lexical scope even after that outer function has returned")

add("JavaScript", "Intermediate", "Closures", "Coding",
    "Create a function `createCounter()` that returns an object with `increment()` and `getValue()` methods keeping `count` private.",
    ["Declare `let count = 0` inside outer function.", "Return an object with methods referencing count."],
    "Encapsulate count inside closure.",
    "Count is not directly accessible from outside, ensuring data privacy.",
    code="function createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getValue: () => count\n  };\n}")

add("JavaScript", "Intermediate", "Event Loop", "Output-Prediction",
    "What is the output order of:\n`console.log('A'); setTimeout(() => console.log('B'), 0); Promise.resolve().then(() => console.log('C')); console.log('D');`",
    ["Synchronous first.", "Microtasks run before macrotasks."],
    "A, D, C, B",
    "Synchronous A and D log first, then microtask C, then timer macrotask B.",
    options=["A, D, C, B", "A, B, C, D", "A, D, B, C", "A, C, D, B"],
    correctAnswer="A, D, C, B")

add("JavaScript", "Intermediate", "Promises", "Coding",
    "Write a function `fetchDataWithTimeout(promise, timeoutMs)` that rejects if the promise does not resolve within `timeoutMs`.",
    ["Use `Promise.race`.", "Create a timeout promise that rejects after timeoutMs."],
    "Promise.race([promise, timeoutPromise])",
    "Promise.race settles as soon as the first input promise resolves or rejects.",
    code="function fetchDataWithTimeout(promise, timeoutMs) {\n  const timeout = new Promise((_, reject) => \n    setTimeout(() => reject(new Error('Operation timed out')), timeoutMs)\n  );\n  return Promise.race([promise, timeout]);\n}")

add("JavaScript", "Intermediate", "DOM", "Coding",
    "Write JavaScript to select all buttons with class `.tab-btn` and toggle an `.active` class when clicked.",
    ["Use `document.querySelectorAll('.tab-btn')`.", "Iterate with forEach and addEventListener."],
    "Clear active class from all buttons, then add active to clicked button.",
    "Managing CSS active classes provides responsive tab interactions.",
    code="document.querySelectorAll('.tab-btn').forEach(btn => {\n  btn.addEventListener('click', () => {\n    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));\n    btn.classList.add('active');\n  });\n});")

add("JavaScript", "Intermediate", "Prototypes", "Multiple-Choice",
    "How does prototypical inheritance work when accessing a property on an object?",
    ["Traversing `__proto__` chain.", "Stops when property is found or null is reached."],
    "JavaScript searches the object itself; if missing, it traverses the `__proto__` chain until `null`",
    "Property lookups delegate up the prototype chain until found or reaching null.",
    options=[
        "JavaScript searches the object itself; if missing, it traverses the `__proto__` chain until `null`",
        "JavaScript checks the window object first, then the local object",
        "Properties are cloned into child instances at instantiation time",
        "Inheritance is only supported in ES6 using classes"
    ],
    correctAnswer="JavaScript searches the object itself; if missing, it traverses the `__proto__` chain until `null`")

add("JavaScript", "Intermediate", "Array Methods", "Coding",
    "Implement a custom `myFilter(arr, callback)` function that behaves like `Array.prototype.filter`.",
    ["Iterate with a standard for loop.", "Push items if `callback(arr[i], i, arr)` is truthy."],
    "Iterate and conditionally append elements.",
    "Higher-order filtering functions test each element against a predicate.",
    code="function myFilter(arr, callback) {\n  const res = [];\n  for (let i = 0; i < arr.length; i++) {\n    if (callback(arr[i], i, arr)) res.push(arr[i]);\n  }\n  return res;\n}",
    examples=[{"input": "[1, 2, 3, 4], x => x % 2 === 0", "output": "[2, 4]"}],
    timeComplexity="O(n)", spaceComplexity="O(n)")

add("JavaScript", "Intermediate", "Destructuring", "Multiple-Choice",
    "What will `const { a = 10, b = 20 } = { a: null };` produce for `a` and `b`?",
    ["Default values only trigger on strictly `undefined`.", "`null` is a defined primitive."],
    "a = null, b = 20",
    "Because `a` is explicitly `null`, the default fallback 10 is not used.",
    options=["a = null, b = 20", "a = 10, b = 20", "a = undefined, b = 20", "Throws TypeError"],
    correctAnswer="a = null, b = 20")

add("JavaScript", "Intermediate", "Events", "Multiple-Choice",
    "What method stops an event from bubbling up the DOM tree?",
    ["Propagation refers to bubbling and capturing phases."],
    "`e.stopPropagation()`",
    "`e.stopPropagation()` stops the event from propagating to ancestor elements.",
    options=["`e.stopPropagation()`", "`e.preventDefault()`", "`e.stopImmediateBubbling()`", "`e.cancelBubble()`"],
    correctAnswer="`e.stopPropagation()`")

add("JavaScript", "Intermediate", "Debouncing", "Coding",
    "Write a simple `debounce(fn, delay)` utility function in JavaScript.",
    ["Use `setTimeout` and `clearTimeout`.", "Keep timer variable in closure."],
    "Clear previous timer and set new timeout on each invocation.",
    "Debouncing restricts function execution until a delay of inactivity occurs.",
    code="function debounce(fn, delay) {\n  let timer = null;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}")

add("JavaScript", "Advanced", "Event Loop", "Conceptual",
  "Explain the difference between Macrotasks and Microtasks in the Node.js / browser Event Loop.",
  ["Microtasks include `Promise.then` and `process.nextTick`.", "Macrotasks include `setTimeout`, `setInterval`."],
  "Microtasks execute immediately after the current synchronous script and before the next macrotask.",
  "The event loop drains the microtask queue completely after each macrotask before pulling the next macrotask.")

add("JavaScript", "Advanced", "Deep Clone", "Coding",
    "Write a function `deepClone(obj)` that deeply clones an object handling nested objects and arrays without losing nested structures.",
    ["Check if primitive.", "Use WeakMap to cache visited objects to avoid circular recursion."],
    "Recursive cloning with WeakMap cache.",
    "Deep cloning recursively copies nested structures and WeakMap protects against cyclic loops.",
    code="function deepClone(obj, hash = new WeakMap()) {\n  if (Object(obj) !== obj) return obj;\n  if (hash.has(obj)) return hash.get(obj);\n  const res = Array.isArray(obj) ? [] : {};\n  hash.set(obj, res);\n  for (const k of Object.keys(obj)) {\n    res[k] = deepClone(obj[k], hash);\n  }\n  return res;\n}",
    timeComplexity="O(n)", spaceComplexity="O(n)")

add("JavaScript", "Advanced", "Currying", "Coding",
    "Implement a generic `curry(fn)` function that transforms `fn(a, b, c)` into `curried(a)(b)(c)`.",
    ["Compare `args.length` with `fn.length`.", "Return partially applied function until enough arguments are gathered."],
    "Curry via recursion on arity.",
    "Currying allows partial application of arguments one at a time.",
    code="function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) return fn.apply(this, args);\n    return (...next) => curried.apply(this, args.concat(next));\n  };\n}")

add("JavaScript", "Advanced", "Memory", "Multiple-Choice",
    "Which of the following causes a common memory leak in single-page JavaScript applications?",
    ["Garbage collector cannot collect objects referenced in ongoing callbacks."],
    "Uncleared event listeners or timers referencing detached DOM elements",
    "References held in closures or event handlers prevent detached DOM trees from being reclaimed.",
    options=[
        "Uncleared event listeners or timers referencing detached DOM elements",
        "Using `const` instead of `let`",
        "Freezing objects with `Object.freeze()`",
        "Using Promises instead of async/await"
    ],
    correctAnswer="Uncleared event listeners or timers referencing detached DOM elements")

add("JavaScript", "Advanced", "Generators", "Coding",
    "Write a generator function `idGenerator()` that yields infinite incremental integers starting from 1.",
    ["Use `function*` syntax.", "Use an infinite `while (true)` loop with `yield`."],
    "function* idGenerator() { let id = 1; while(true) yield id++; }",
    "Generators pause at each yield, lazily generating infinite sequences on demand.",
    code="function* idGenerator() {\n  let id = 1;\n  while (true) {\n    yield id++;\n  }\n}")

# Print count so far
print(f"Javascript done. Total questions: {len(questions)}")

with open("scripts/q_progress.txt", "w") as f:
    f.write(f"Total: {len(questions)}")
