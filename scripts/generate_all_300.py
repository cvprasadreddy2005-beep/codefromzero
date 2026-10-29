import json

questions = []
qid = 1

def q(cat, diff, topic, qtype, text, hints, solution, explanation, **kwargs):
    global qid
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

# ==================== 1. JAVASCRIPT (25) ====================
q("JavaScript", "Beginner", "Variables", "Coding",
  "Write a JavaScript program to swap two numbers using a temporary variable.",
  ["Declare a temporary variable `temp`.", "Assign the first value to `temp`, the second to the first, and `temp` to the second."],
  "let temp = a; a = b; b = temp;",
  "Using a temporary variable ensures the original value is preserved during assignment.",
  code="let a = 10;\nlet b = 20;\nlet temp = a;\na = b;\nb = temp;\nconsole.log(a, b);",
  examples=[{"input": "a = 10, b = 20", "output": "a = 20, b = 10"}],
  timeComplexity="O(1)", spaceComplexity="O(1)")

q("JavaScript", "Beginner", "Data Types", "Multiple-Choice",
  "What will `typeof NaN` return in JavaScript?",
  ["In IEEE-754 floating point arithmetic, NaN is technically a numeric status."],
  "'number'",
  "Although NaN stands for Not a Number, its typeof is primitive number in JavaScript engines.",
  options=["'number'", "'nan'", "'undefined'", "'object'"],
  correctAnswer="'number'")

q("JavaScript", "Beginner", "Conditionals", "Coding",
  "Write a function `isEven(num)` that returns `true` if a number is even, and `false` otherwise.",
  ["Use the modulus operator `%`.", "Even numbers leave 0 remainder when divided by 2."],
  "return num % 2 === 0;",
  "The `%` operator returns the remainder of integer division.",
  code="function isEven(num) {\n  return num % 2 === 0;\n}",
  examples=[{"input": "4", "output": "true"}, {"input": "7", "output": "false"}],
  timeComplexity="O(1)", spaceComplexity="O(1)")

q("JavaScript", "Beginner", "Loops", "Coding",
  "Write a loop to calculate the factorial of a positive integer `n`.",
  ["Start an accumulator at 1.", "Loop from 2 up to n multiplying the accumulator."],
  "Accumulate product of integers from 1 to n.",
  "Factorial n! is the product of all positive integers less than or equal to n.",
  code="function factorial(n) {\n  let res = 1;\n  for (let i = 2; i <= n; i++) res *= i;\n  return res;\n}",
  examples=[{"input": "5", "output": "120"}],
  timeComplexity="O(n)", spaceComplexity="O(1)")

q("JavaScript", "Beginner", "Scope", "Multiple-Choice",
  "What is the difference between `let` and `var` in terms of scoping?",
  ["Think about curly braces `{}` in an `if` statement.", "`let` was introduced in ES6."],
  "`let` is block-scoped, while `var` is function-scoped",
  "`let` adheres to the nearest curly brace block `{ ... }`, preventing accidental scope leakage.",
  options=[
    "`let` is block-scoped, while `var` is function-scoped",
    "`var` is block-scoped, while `let` is function-scoped",
    "Both are strictly block-scoped",
    "`let` can be redeclared in the same block, `var` cannot"
  ],
  correctAnswer="`let` is block-scoped, while `var` is function-scoped")

q("JavaScript", "Beginner", "Strings", "Coding",
  "Write a function `reverseString(str)` that reverses any given string.",
  ["Split into an array of characters.", "Reverse the array and join back to a string."],
  "str.split('').reverse().join('')",
  "Splitting converts to an array, reversing alters sequence, and join reconstructs the string.",
  code="function reverseString(str) {\n  return str.split('').reverse().join('');\n}",
  examples=[{"input": "'hello'", "output": "'olleh'"}],
  timeComplexity="O(n)", spaceComplexity="O(n)")

q("JavaScript", "Beginner", "Arrays", "Coding",
  "Write a function `findMax(arr)` that finds the largest number in an array.",
  ["Initialize max to the first element.", "Iterate through the array and update max whenever an element is greater."],
  "Math.max(...arr) or linear scan.",
  "A single linear scan through n elements guarantees finding the maximum in O(n) time.",
  code="function findMax(arr) {\n  if (!arr.length) return null;\n  let max = arr[0];\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] > max) max = arr[i];\n  }\n  return max;\n}",
  examples=[{"input": "[3, 7, 2, 9, 1]", "output": "9"}],
  timeComplexity="O(n)", spaceComplexity="O(1)")

q("JavaScript", "Beginner", "Arrays", "Multiple-Choice",
  "Which array method does NOT mutate the original array?",
  ["Methods like push, splice, and sort change the array in place."],
  "`.concat()`",
  "`.concat()` returns a new shallow copy array without modifying the original inputs.",
  options=["`.concat()`", "`.push()`", "`.splice()`", "`.sort()`"],
  correctAnswer="`.concat()`")

q("JavaScript", "Beginner", "Objects", "Coding",
  "Create an object `person` with properties `name`, `age`, and a method `greet()` returning 'Hello, my name is [name]'.",
  ["Use `this.name` inside the method.", "Use template literals."],
  "Object with properties and method referencing `this`.",
  "In regular object methods, `this` refers to the parent object calling the method.",
  code="const person = {\n  name: 'Alex',\n  age: 24,\n  greet() {\n    return `Hello, my name is ${this.name}`;\n  }\n};",
  timeComplexity="O(1)", spaceComplexity="O(1)")

q("JavaScript", "Beginner", "Type Coercion", "Output-Prediction",
  "What is logged to the console?\n`console.log(1 + '2' + 3);`",
  ["JavaScript evaluates left to right.", "Number + String coerces the number into a string."],
  "'123'",
  "1 + '2' results in '12' (string). Then '12' + 3 results in '123'.",
  options=["'123'", "6", "'15'", "NaN"],
  correctAnswer="'123'")

q("JavaScript", "Intermediate", "Closures", "Multiple-Choice",
  "What is a closure in JavaScript?",
  ["Lexical scoping retention.", "Inner function retaining access to outer variables."],
  "A function that retains access to variables from its outer lexical scope even after that outer function has returned",
  "Closures are created every time a function is created and bundled with its lexical references.",
  options=[
    "A function that retains access to variables from its outer lexical scope even after that outer function has returned",
    "A function that executes with no return value",
    "A method that closes a database or file stream",
    "A block of code inside a finally block"
  ],
  correctAnswer="A function that retains access to variables from its outer lexical scope even after that outer function has returned")

q("JavaScript", "Intermediate", "Closures", "Coding",
  "Create a function `createCounter()` that returns an object with `increment()` and `getValue()` methods keeping `count` private.",
  ["Declare `let count = 0` inside `createCounter`.", "Return an object with closures over `count`."],
  "Encapsulate state inside outer function scope.",
  "Variables in the outer function cannot be directly modified from outside, achieving true data privacy.",
  code="function createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getValue: () => count\n  };\n}",
  timeComplexity="O(1)", spaceComplexity="O(1)")

q("JavaScript", "Intermediate", "Event Loop", "Output-Prediction",
  "What is the output order of:\n`console.log('A'); setTimeout(() => console.log('B'), 0); Promise.resolve().then(() => console.log('C')); console.log('D');`",
  ["Synchronous code executes first.", "Microtasks (Promises) execute before macrotasks (setTimeout)."],
  "A, D, C, B",
  "Synchronous 'A' and 'D' log first. The Promise microtask 'C' is processed before macrotask queue 'B'.",
  options=["A, D, C, B", "A, B, C, D", "A, D, B, C", "A, C, D, B"],
  correctAnswer="A, D, C, B")

q("JavaScript", "Intermediate", "Promises", "Coding",
  "Write a function `fetchDataWithTimeout(promise, timeoutMs)` that rejects if the promise does not resolve within `timeoutMs`.",
  ["Use `Promise.race`.", "Create a second promise that calls `reject` via `setTimeout`."],
  "Promise.race([promise, timeoutPromise])",
  "`Promise.race` settles as soon as the first promise in the array settles.",
  code="function fetchDataWithTimeout(promise, timeoutMs) {\n  const timeout = new Promise((_, reject) => \n    setTimeout(() => reject(new Error('Operation timed out')), timeoutMs)\n  );\n  return Promise.race([promise, timeout]);\n}",
  timeComplexity="O(1)", spaceComplexity="O(1)")

q("JavaScript", "Intermediate", "DOM", "Coding",
  "Write JavaScript to select all buttons with class `.tab-btn` and toggle an `.active` class when clicked.",
  ["Use `document.querySelectorAll('.tab-btn')`.", "Iterate with `forEach` and attach event listeners."],
  "Clear active class from all buttons, then add active class to clicked button.",
  "Managing class states provides clean reactive UI tabs without page reload.",
  code="document.querySelectorAll('.tab-btn').forEach(btn => {\n  btn.addEventListener('click', () => {\n    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));\n    btn.classList.add('active');\n  });\n});")

q("JavaScript", "Intermediate", "Prototypes", "Multiple-Choice",
  "How does prototypical inheritance work when accessing a property on an object?",
  ["Think about the `__proto__` link.", "Lookup proceeds until reaching `null`."],
  "JavaScript searches the object itself; if missing, it traverses the `__proto__` chain until `null`",
  "When a property is requested, the engine inspects the object, then its prototype, ascending until found or null is reached.",
  options=[
    "JavaScript searches the object itself; if missing, it traverses the `__proto__` chain until `null`",
    "JavaScript checks the window object first, then the local object",
    "Properties are cloned into child instances at instantiation time",
    "Inheritance is only supported in ES6 using classes"
  ],
  correctAnswer="JavaScript searches the object itself; if missing, it traverses the `__proto__` chain until `null`")

q("JavaScript", "Intermediate", "Array Methods", "Coding",
  "Implement a custom `myFilter(arr, callback)` function that behaves like `Array.prototype.filter`.",
  ["Loop through the array with a for loop.", "Invoke `callback(arr[i], i, arr)` and push elements if truthy."],
  "Iterate and conditionally append to an output array.",
  "Demonstrates how higher-order array methods filter inputs by evaluating predicates.",
  code="function myFilter(arr, callback) {\n  const res = [];\n  for (let i = 0; i < arr.length; i++) {\n    if (callback(arr[i], i, arr)) res.push(arr[i]);\n  }\n  return res;\n}",
  examples=[{"input": "[1, 2, 3, 4], x => x % 2 === 0", "output": "[2, 4]"}],
  timeComplexity="O(n)", spaceComplexity="O(n)")

q("JavaScript", "Intermediate", "Destructuring", "Multiple-Choice",
  "What will `const { a = 10, b = 20 } = { a: null };` produce for `a` and `b`?",
  ["Default parameters only trigger when the value is strictly `undefined`.", "`null` is a valid primitive."],
  "a = null, b = 20",
  "Because `a` is defined as `null`, the default fallback `10` is NOT invoked.",
  options=["a = null, b = 20", "a = 10, b = 20", "a = undefined, b = 20", "Throws TypeError"],
  correctAnswer="a = null, b = 20")

q("JavaScript", "Intermediate", "Events", "Multiple-Choice",
  "What method stops an event from bubbling up the DOM tree?",
  ["`preventDefault` stops default action; propagation refers to bubbling."],
  "`e.stopPropagation()`",
  "`e.stopPropagation()` prevents further propagation of the current event in the capturing and bubbling phases.",
  options=["`e.stopPropagation()`", "`e.preventDefault()`", "`e.stopImmediateBubbling()`", "`e.cancelBubble()`"],
  correctAnswer="`e.stopPropagation()`")

q("JavaScript", "Intermediate", "Debouncing", "Coding",
  "Write a simple `debounce(fn, delay)` utility function in JavaScript.",
  ["Use `setTimeout` and `clearTimeout`.", "Keep a `timer` reference in the outer closure."],
  "Clear timer on each call and schedule a fresh timeout.",
  "Debouncing bunches multiple rapid calls into a single invocation after the delay has passed.",
  code="function debounce(fn, delay) {\n  let timer = null;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}")

q("JavaScript", "Advanced", "Event Loop", "Conceptual",
  "Explain the difference between Macrotasks and Microtasks in the Node.js / browser Event Loop.",
  ["Microtasks include `Promise.then` and `MutationObserver`.", "Macrotasks include `setTimeout`, `setInterval`, I/O."],
  "Microtasks execute immediately after the current synchronous script and before the next macrotask.",
  "The event loop drains all pending microtasks after every macrotask before picking up the next macrotask.",
  tags=["event-loop", "advanced"])

q("JavaScript", "Advanced", "Deep Clone", "Coding",
  "Write a function `deepClone(obj)` that deeply clones an object handling nested objects and arrays without losing nested structures.",
  ["Check for non-objects/primitives.", "Use a `WeakMap` to store visited objects to avoid circular reference loops."],
  "Recursive traversal with WeakMap memoization.",
  "Deep clone duplicates all nested structures recursively, and WeakMap resolves circular references safely.",
  code="function deepClone(obj, hash = new WeakMap()) {\n  if (Object(obj) !== obj) return obj;\n  if (hash.has(obj)) return hash.get(obj);\n  const res = Array.isArray(obj) ? [] : {};\n  hash.set(obj, res);\n  for (const k of Object.keys(obj)) {\n    res[k] = deepClone(obj[k], hash);\n  }\n  return res;\n}",
  timeComplexity="O(n)", spaceComplexity="O(n)")

q("JavaScript", "Advanced", "Currying", "Coding",
  "Implement a generic `curry(fn)` function that transforms `fn(a, b, c)` into `curried(a)(b)(c)`.",
  ["Compare `args.length` with `fn.length`.", "Return a function collecting more arguments if arity is not yet met."],
  "Accumulate arguments until count equals `fn.length`.",
  "Currying decomposes an n-ary function into a sequence of unary functions.",
  code="function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) return fn.apply(this, args);\n    return (...next) => curried.apply(this, args.concat(next));\n  };\n}")

q("JavaScript", "Advanced", "Memory", "Multiple-Choice",
  "Which of the following causes a common memory leak in single-page JavaScript applications?",
  ["Garbage collector cannot free objects that are still referenced by closures or listeners."],
  "Uncleared event listeners or timers referencing detached DOM elements",
  "Detached DOM nodes kept in memory by active event callbacks cannot be garbage-collected.",
  options=[
    "Uncleared event listeners or timers referencing detached DOM elements",
    "Using `const` instead of `let`",
    "Freezing objects with `Object.freeze()`",
    "Using Promises instead of async/await"
  ],
  correctAnswer="Uncleared event listeners or timers referencing detached DOM elements")

q("JavaScript", "Advanced", "Generators", "Coding",
  "Write a generator function `idGenerator()` that yields infinite incremental integers starting from 1.",
  ["Use `function*` syntax.", "Use an infinite `while (true)` loop with `yield`."],
  "function* idGenerator() { let id = 1; while(true) yield id++; }",
  "Generators maintain internal execution state lazily without infinite memory allocation.",
  code="function* idGenerator() {\n  let id = 1;\n  while (true) {\n    yield id++;\n  }\n}")

print("JavaScript finished:", len(questions))

# Let's save the first batch to disk to verify everything is working smoothly.
with open("scripts/generated_q.json", "w") as f:
    json.dump(questions, f, indent=2)
print("Saved partial questions json")
