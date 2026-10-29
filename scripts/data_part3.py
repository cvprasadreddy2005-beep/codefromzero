# scripts/data_part3.py
# Categories: AI and Machine Learning (20), Data Analysis (15), Data Structures (20), Algorithms (20) = 75 questions

items_p3 = []

# --- AI AND MACHINE LEARNING (20) ---
aiml_questions = [
    ("Beginner", "Concepts", "Multiple-Choice", "What is the primary difference between Supervised and Unsupervised Learning?",
     ["Supervised uses labeled training data; unsupervised learns patterns without ground truth labels."],
     "Supervised learning trains on labeled data (inputs with known outputs); Unsupervised learning discovers patterns in unlabeled data",
     "Supervised algorithms predict targets (classification/regression); unsupervised algorithms cluster or reduce dimensions.",
     {"options": ["Supervised learning trains on labeled data (inputs with known outputs); Unsupervised learning discovers patterns in unlabeled data", "Supervised uses human operators live during inference", "Unsupervised runs on quantum computers", "Supervised only works with images"], "correctAnswer": "Supervised learning trains on labeled data (inputs with known outputs); Unsupervised learning discovers patterns in unlabeled data"}),

    ("Beginner", "Regression vs Classification", "Multiple-Choice", "Which machine learning task involves predicting a continuous numerical value (such as house prices or temperature)?",
     ["Continuous output value."],
     "Regression",
     "Regression predicts continuous quantitative quantities, whereas classification predicts discrete class categories.",
     {"options": ["Regression", "Classification", "Clustering", "Reinforcement Learning"], "correctAnswer": "Regression"}),

    ("Beginner", "Overfitting", "Multiple-Choice", "What does it mean when a machine learning model is 'overfitting'?",
     ["Performs exceptionally well on training data but fails to generalize to unseen test data."],
     "The model memorizes training noise and performs poorly on unseen test data",
     "Overfitting occurs when high model capacity captures idiosyncratic training quirks instead of generalizable patterns.",
     {"options": ["The model memorizes training noise and performs poorly on unseen test data", "The model trains too slowly", "The dataset is too large for RAM", "The model underperforms on both training and test data"], "correctAnswer": "The model memorizes training noise and performs poorly on unseen test data"}),

    ("Beginner", "Metrics", "Multiple-Choice", "Why is Accuracy often a misleading evaluation metric for highly imbalanced classification datasets (e.g., 99% negative cases)?",
     ["A naive model predicting negative every time achieves 99% accuracy while failing entirely on positive cases."],
     "A naive model predicting only the majority class achieves 99% accuracy despite catching zero positive cases",
     "Precision, Recall, F1-score, and PR-AUC are far more informative for skewed distributions.",
     {"options": ["A naive model predicting only the majority class achieves 99% accuracy despite catching zero positive cases", "Accuracy calculation takes too long", "Accuracy cannot be computed for binary tasks", "Accuracy is only used in regression"], "correctAnswer": "A naive model predicting only the majority class achieves 99% accuracy despite catching zero positive cases"}),

    ("Beginner", "Linear Regression", "Coding", "Write a Python snippet using scikit-learn to train a LinearRegression model on training data X_train, y_train and predict on X_test.",
     ["Import LinearRegression, instantiate, call `.fit()`, then `.predict()`."],
     "LinearRegression pipeline.",
     "Standard scikit-learn estimator interface.",
     {"code": "from sklearn.linear_model import LinearRegression\n\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)"}),

    ("Beginner", "Activation Functions", "Multiple-Choice", "What is the formula and output range of the Sigmoid activation function?",
     ["Maps any real number into the probability interval (0, 1)."],
     "`1 / (1 + e^(-x))` with output range between 0 and 1",
     "Useful for binary classification probability outputs.",
     {"options": ["`1 / (1 + e^(-x))` with output range between 0 and 1", "`max(0, x)` with range [0, inf)", "`tanh(x)` with range [-1, 1]", "`e^x` with range [0, inf)"], "correctAnswer": "`1 / (1 + e^(-x))` with output range between 0 and 1"}),

    ("Intermediate", "Train-Test Split", "Coding", "Split dataset features `X` and targets `y` into 80% train and 20% test sets with a fixed random state using scikit-learn.",
     ["Use `train_test_split(X, y, test_size=0.2, random_state=42)`."],
     "train_test_split call.",
     "Prevents data snooping by isolating testing data from training.",
     {"code": "from sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)"}),

    ("Intermediate", "Gradient Descent", "Multiple-Choice", "What role does the 'learning rate' parameter play in Gradient Descent optimization?",
     ["Determines step size taken in direction of negative gradient."],
     "Controls the step size taken along the negative gradient towards the loss function minimum",
     "Too large a learning rate causes divergence; too small causes exceedingly slow convergence.",
     {"options": ["Controls the step size taken along the negative gradient towards the loss function minimum", "Sets the number of training epochs", "Normalizes feature standard deviation", "Determines batch size"], "correctAnswer": "Controls the step size taken along the negative gradient towards the loss function minimum"}),

    ("Intermediate", "Confusion Matrix", "Multiple-Choice", "In a medical diagnosis test, what does a 'False Negative' represent?",
     ["Patient has the condition, but test incorrectly predicts negative."],
     "A sick patient who is incorrectly classified as healthy (negative)",
     "In healthcare, False Negatives often carry severe consequences due to missed treatments.",
     {"options": ["A sick patient who is incorrectly classified as healthy (negative)", "A healthy patient diagnosed as sick", "A test that produces invalid results", "A correct positive diagnosis"], "correctAnswer": "A sick patient who is incorrectly classified as healthy (negative)"}),

    ("Intermediate", "K-Means", "Coding", "Use scikit-learn to cluster unlabeled dataset `X` into 3 distinct clusters using K-Means.",
     ["Use `KMeans(n_clusters=3, random_state=42).fit_predict(X)`."],
     "K-Means clustering.",
     "Iteratively computes centroid centers minimizing inertia.",
     {"code": "from sklearn.cluster import KMeans\n\nkmeans = KMeans(n_clusters=3, random_state=42)\ncluster_labels = kmeans.fit_predict(X)"}),

    ("Intermediate", "Decision Trees", "Multiple-Choice", "What criteria do Decision Trees commonly use to split nodes during classification?",
     ["Gini Impurity and Information Gain (Entropy)."],
     "Gini Impurity or Information Gain (Entropy)",
     "Measures how homogeneous classes are within subsets resulting from a split.",
     {"options": ["Gini Impurity or Information Gain (Entropy)", "Mean Squared Error only", "Cosine Similarity", "R-squared coefficient"], "correctAnswer": "Gini Impurity or Information Gain (Entropy)"}),

    ("Intermediate", "Cross Validation", "Coding", "Evaluate a RandomForestClassifier using 5-fold cross-validation and compute average accuracy.",
     ["Use `cross_val_score(model, X, y, cv=5)`."],
     "5-fold cross-validation.",
     "Provides robust out-of-sample performance estimate across folds.",
     {"code": "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import cross_val_score\n\nclf = RandomForestClassifier(random_state=42)\nscores = cross_val_score(clf, X, y, cv=5)\nprint(f'Mean Accuracy: {scores.mean():.4f}')"}),

    ("Intermediate", "Feature Scaling", "Multiple-Choice", "Why is feature standardization (`StandardScaler`) critical for algorithms like KNN and SVM?",
     ["Distance-based algorithms are distorted if one feature has a vastly larger scale."],
     "Features with larger numerical magnitudes dominate Euclidean distance calculations",
     "Normalizing features to zero mean and unit variance ensures equal contribution to distance metrics.",
     {"options": ["Features with larger numerical magnitudes dominate Euclidean distance calculations", "StandardScaler eliminates missing values", "Required for tree-based algorithms", "Compresses data on disk"], "correctAnswer": "Features with larger numerical magnitudes dominate Euclidean distance calculations"}),

    ("Advanced", "Transformers", "Multiple-Choice", "What core innovation allows Transformer architectures to process entire sequences in parallel unlike RNNs?",
     ["Self-Attention mechanism."],
     "Multi-Head Self-Attention mechanisms without sequential recurrence",
     "Computes attention weights between all token pairs simultaneously.",
     {"options": ["Multi-Head Self-Attention mechanisms without sequential recurrence", "Recurrent hidden loops", "Convolutional pooling layers", "Reinforcement feedback"], "correctAnswer": "Multi-Head Self-Attention mechanisms without sequential recurrence"}),

    ("Advanced", "Regularization", "Multiple-Choice", "What is the defining distinction between L1 (Lasso) and L2 (Ridge) regularization?",
     ["L1 produces sparse models by driving coefficients exactly to zero."],
     "L1 penalty encourages sparsity by driving unimportant feature weights to zero; L2 shrinks weights smoothly without zeroing them",
     "L1 performs implicit feature selection.",
     {"options": ["L1 penalty encourages sparsity by driving unimportant feature weights to zero; L2 shrinks weights smoothly without zeroing them", "L2 sets weights to zero, L1 does not", "L1 is for neural networks, L2 is for regression", "L1 increases model parameters"], "correctAnswer": "L1 penalty encourages sparsity by driving unimportant feature weights to zero; L2 shrinks weights smoothly without zeroing them"}),

    ("Advanced", "CNNs", "Multiple-Choice", "Why are Convolutional Neural Networks (CNNs) preferred over Fully Connected Networks for computer vision?",
     ["Parameter sharing and spatial translation invariance."],
     "Parameter sharing via convolution kernels preserves spatial hierarchies while drastically reducing parameter count",
     "Enables detecting local edge/texture features regardless of pixel location.",
     {"options": ["Parameter sharing via convolution kernels preserves spatial hierarchies while drastically reducing parameter count", "CNNs do not require backpropagation", "They require zero training data", "They only accept 1D arrays"], "correctAnswer": "Parameter sharing via convolution kernels preserves spatial hierarchies while drastically reducing parameter count"}),

    ("Advanced", "Embeddings", "Coding", "Explain how text embeddings represent semantic similarity and write pseudo-code computing cosine similarity between two vector embeddings.",
     ["Cosine similarity computes `dot(A, B) / (norm(A) * norm(B))`."],
     "Cosine similarity between normalized embedding vectors.",
     "Measures directional alignment in high-dimensional semantic space.",
     {"code": "import numpy as np\n\ndef cosine_similarity(v1, v2):\n    dot_product = np.dot(v1, v2)\n    norm = np.linalg.norm(v1) * np.linalg.norm(v2)\n    return dot_product / norm if norm > 0 else 0.0"}),

    ("Advanced", "RAG", "Multiple-Choice", "What problem does Retrieval-Augmented Generation (RAG) primarily solve for Large Language Models?",
     ["Grounding LLMs with private, up-to-date domain data and mitigating hallucinations."],
     "Supplements LLMs with external retrieved factual documents to ground responses and eliminate hallucinations",
     "Combines vector database retrieval with generative LLM synthesis.",
     {"options": ["Supplements LLMs with external retrieved factual documents to ground responses and eliminate hallucinations", "Speeds up token generation GPU bandwidth", "Reduces model parameter size to 1MB", "Encrypts prompt strings"], "correctAnswer": "Supplements LLMs with external retrieved factual documents to ground responses and eliminate hallucinations"}),

    ("Advanced", "Fine-Tuning / LoRA", "Multiple-Choice", "How does Low-Rank Adaptation (LoRA) enable parameter-efficient fine-tuning of large foundation models?",
     ["Decomposes weight updates into low-rank matrix pairs `B x A`."],
     "Freezes pretrained base weights and injects trainable low-rank decomposition matrices, reducing trainable parameters by over 90%",
     "Allows fine-tuning multi-billion parameter models on consumer GPUs.",
     {"options": ["Freezes pretrained base weights and injects trainable low-rank decomposition matrices, reducing trainable parameters by over 90%", "Removes 50% of the layers permanently", "Converts floats to single bits", "Runs training on CPU only"], "correctAnswer": "Freezes pretrained base weights and injects trainable low-rank decomposition matrices, reducing trainable parameters by over 90%"}),

    ("Advanced", "Vanishing Gradients", "Conceptual", "Explain the Vanishing Gradient problem in deep networks and how Residual Connections (ResNets) solve it.",
     ["Chain rule multiplication of fractions < 1 shrinks gradients toward zero in early layers."],
     "In deep networks, backpropagating gradients repeatedly multiply small derivatives, diminishing updates in early layers.",
     "Residual skip connections `F(x) + x` allow gradients to flow directly backwards uninterrupted through identity shortcuts.",
     {})
]

for q in aiml_questions: items_p3.append(("AI and Machine Learning", *q))
assert len(aiml_questions) == 20

# --- DATA ANALYSIS (15) ---
data_analysis_questions = [
    ("Beginner", "Pandas Basics", "Coding", "Load a CSV file named `'sales.csv'` into a Pandas DataFrame and display the first 5 rows.",
     ["Use `pd.read_csv()` and `.head()`."],
     "df = pd.read_csv('sales.csv'); print(df.head())",
     "Standard pandas data ingestion.",
     {"code": "import pandas as pd\n\ndf = pd.read_csv('sales.csv')\nprint(df.head())"}),

    ("Beginner", "Filtering", "Coding", "Filter a DataFrame `df` to select rows where `'age'` is greater than 25.",
     ["Use boolean indexing `df[df['age'] > 25]`."],
     "df[df['age'] > 25]",
     "Boolean masking extracts matching records.",
     {"code": "filtered_df = df[df['age'] > 25]"}),

    ("Beginner", "Missing Values", "Coding", "Check the total count of null values in each column of DataFrame `df`.",
     ["Chain `.isnull().sum()`."],
     "df.isnull().sum()",
     "Summarizes missing data frequency per column.",
     {"code": "print(df.isnull().sum())"}),

    ("Beginner", "Descriptive Stats", "Multiple-Choice", "Which Pandas method generates summary statistics (mean, std, min, percentiles, max) for numeric columns?",
     ["Summary statistics method."],
     "`df.describe()`",
     "Outputs five-number summary and central tendency metrics.",
     {"options": ["`df.describe()`", "`df.summary()`", "`df.stats()`", "`df.info()`"], "correctAnswer": "`df.describe()`"}),

    ("Beginner", "Column Drop", "Coding", "Drop column `'unwanted_col'` from DataFrame `df` permanently.",
     ["Use `df.drop(columns=['unwanted_col'], inplace=True)`."],
     "df.drop(columns=['unwanted_col'], inplace=True)",
     "Removes specified attribute column.",
     {"code": "df.drop(columns=['unwanted_col'], inplace=True)"}),

    ("Intermediate", "GroupBy", "Coding", "Calculate the total revenue by `'country'` from DataFrame `df` having columns `'country'` and `'revenue'`.",
     ["Use `df.groupby('country')['revenue'].sum()`."],
     "df.groupby('country')['revenue'].sum()",
     "Aggregates numeric revenue per distinct country.",
     {"code": "revenue_by_country = df.groupby('country')['revenue'].sum()"}),

    ("Intermediate", "Imputation", "Coding", "Fill missing values in column `'salary'` with the column median.",
     ["Use `df['salary'].fillna(df['salary'].median(), inplace=True)`."],
     "Median imputation.",
     "Median imputation is robust against extreme outliers.",
     {"code": "median_salary = df['salary'].median()\ndf['salary'].fillna(median_salary, inplace=True)"}),

    ("Intermediate", "Merging", "Coding", "Merge DataFrames `users` and `transactions` on `'user_id'` using an inner join.",
     ["Use `pd.merge(users, transactions, on='user_id', how='inner')`."],
     "pd.merge inner join.",
     "Combines two datasets on a shared identifier.",
     {"code": "merged_df = pd.merge(users, transactions, on='user_id', how='inner')"}),

    ("Intermediate", "Visualization", "Coding", "Create a histogram of the `'age'` column with 20 bins using Matplotlib.",
     ["Use `plt.hist(df['age'], bins=20)` and `plt.show()`."],
     "Matplotlib histogram.",
     "Visualizes frequency distribution of continuous variables.",
     {"code": "import matplotlib.pyplot as plt\n\nplt.hist(df['age'], bins=20, edgecolor='black')\nplt.title('Age Distribution')\nplt.show()"}),

    ("Intermediate", "Correlation", "Multiple-Choice", "What does a Pearson correlation coefficient of `-0.85` between two variables indicate?",
     ["Strong negative linear relationship."],
     "A strong inverse (negative) linear relationship: as one variable increases, the other decreases",
     "Pearson correlation values range from -1 to +1.",
     {"options": ["A strong inverse (negative) linear relationship: as one variable increases, the other decreases", "A weak correlation", "85% of data is erroneous", "No relationship whatsoever"], "correctAnswer": "A strong inverse (negative) linear relationship: as one variable increases, the other decreases"}),

    ("Intermediate", "Pivot Tables", "Coding", "Create a pivot table showing average `'score'` grouped by `'grade'` (rows) and `'gender'` (columns).",
     ["Use `pd.pivot_table(df, values='score', index='grade', columns='gender', aggfunc='mean')`."],
     "pd.pivot_table generation.",
     "Reshapes and summarizes multi-dimensional categorical data.",
     {"code": "pivot = pd.pivot_table(df, values='score', index='grade', columns='gender', aggfunc='mean')"}),

    ("Advanced", "Outlier Detection", "Multiple-Choice", "How does the Interquartile Range (IQR) rule identify statistical outliers?",
     ["Points falling below `Q1 - 1.5 * IQR` or above `Q3 + 1.5 * IQR`."],
     "Values smaller than `Q1 - 1.5 * IQR` or greater than `Q3 + 1.5 * IQR` where `IQR = Q3 - Q1`",
     "Tukey's standard fence rule for robust outlier identification.",
     {"options": ["Values smaller than `Q1 - 1.5 * IQR` or greater than `Q3 + 1.5 * IQR` where `IQR = Q3 - Q1`", "Values more than 1 standard deviation from mean", "Negative values only", "Values equal to zero"], "correctAnswer": "Values smaller than `Q1 - 1.5 * IQR` or greater than `Q3 + 1.5 * IQR` where `IQR = Q3 - Q1`"}),

    ("Advanced", "Time Series", "Coding", "Convert `'timestamp'` column to datetime and resample total sales by month `'M'`.",
     ["Convert with `pd.to_datetime` then `.set_index().resample('M').sum()`."],
     "Time series monthly resampling.",
     "Aggregates temporal records into regular monthly intervals.",
     {"code": "df['timestamp'] = pd.to_datetime(df['timestamp'])\nmonthly_sales = df.set_index('timestamp')['sales'].resample('ME').sum()"}),

    ("Advanced", "Vectorization", "Multiple-Choice", "Why is NumPy/Pandas vectorized computation significantly faster than iterating with Python for-loops?",
     ["Underlying C implementation and SIMD hardware parallelism."],
     "Operations execute in compiled C loops with contiguous memory and SIMD processor vectorization",
     "Eliminates dynamic type checking and interpreter bytecode overhead on every item.",
     {"options": ["Operations execute in compiled C loops with contiguous memory and SIMD processor vectorization", "It compresses RAM automatically", "It uses multi-threading by default", "It caches calculations in browser"], "correctAnswer": "Operations execute in compiled C loops with contiguous memory and SIMD processor vectorization"}),

    ("Advanced", "One-Hot Encoding", "Coding", "Encode categorical column `'city'` in DataFrame `df` using `pd.get_dummies()`.",
     ["Use `pd.get_dummies(df, columns=['city'])`."],
     "One-hot binary dummy variables.",
     "Converts nominal categorical data into numeric binary indicators for modeling.",
     {"code": "df_encoded = pd.get_dummies(df, columns=['city'], drop_first=True)"})
]

for q in data_analysis_questions: items_p3.append(("Data Analysis", *q))
assert len(data_analysis_questions) == 15

# --- DATA STRUCTURES (20) ---
ds_questions = [
    ("Beginner", "Arrays", "Multiple-Choice", "What is the time complexity to access an element by index in a contiguous array?",
     ["Direct pointer arithmetic offset calculation."],
     "O(1) constant time",
     "Array index memory address = `base_address + index * element_size`.",
     {"options": ["O(1) constant time", "O(n) linear time", "O(log n) logarithmic time", "O(n^2) quadratic time"], "correctAnswer": "O(1) constant time"}),

    ("Beginner", "Stacks", "Multiple-Choice", "What principle governs the behavior of a Stack data structure?",
     ["Last In, First Out."],
     "LIFO (Last-In, First-Out)",
     "The most recently pushed item is the first one popped (like a stack of plates).",
     {"options": ["LIFO (Last-In, First-Out)", "FIFO (First-In, First-Out)", "Random Access", "Priority Based"], "correctAnswer": "LIFO (Last-In, First-Out)"}),

    ("Beginner", "Queues", "Multiple-Choice", "What principle governs the behavior of a standard Queue?",
     ["First In, First Out."],
     "FIFO (First-In, First-Out)",
     "Elements are enqueued at rear and dequeued from front in arrival order.",
     {"options": ["FIFO (First-In, First-Out)", "LIFO (Last-In, First-Out)", "Sorted Order", "Tree traversal"], "correctAnswer": "FIFO (First-In, First-Out)"}),

    ("Beginner", "Stack Implementation", "Coding", "Implement a simple Stack class with `push`, `pop`, `peek`, and `is_empty` methods.",
     ["Use an underlying list/array."],
     "Stack implementation.",
     "Basic LIFO container.",
     {"code": "class Stack:\n    def __init__(self):\n        self.items = []\n    def push(self, val): self.items.append(val)\n    def pop(self): return self.items.pop() if not self.is_empty() else None\n    def peek(self): return self.items[-1] if not self.is_empty() else None\n    def is_empty(self): return len(self.items) == 0"}),

    ("Beginner", "Singly Linked List", "Coding", "Define a `ListNode` class for a singly linked list in Python.",
     ["Node stores value and `next` pointer."],
     "ListNode definition.",
     "Fundamental building block of linked data structures.",
     {"code": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next"}),

    ("Intermediate", "Reverse Linked List", "Coding", "Reverse a singly linked list iteratively in O(n) time and O(1) space.",
     ["Maintain `prev`, `curr`, and `nxt` pointers."],
     "Iterative linked list reversal.",
     "Flips next pointers backwards while traversing.",
     {"code": "def reverseList(head):\n    prev = None\n    curr = head\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev = curr\n        curr = nxt\n    return prev", "timeComplexity": "O(n)", "spaceComplexity": "O(1)"}),

    ("Intermediate", "Cycle Detection", "Coding", "Detect if a linked list contains a cycle using Floyd's Cycle Detection (Tortoise and Hare).",
     ["Move slow by 1 step and fast by 2 steps."],
     "Floyd's Tortoise and Hare algorithm.",
     "If a cycle exists, fast pointer will inevitably meet slow pointer.",
     {"code": "def hasCycle(head):\n    slow, fast = head, head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast: return True\n    return False", "timeComplexity": "O(n)", "spaceComplexity": "O(1)"}),

    ("Intermediate", "Valid Parentheses", "Coding", "Given a string containing `'()[]{}'`, determine if the brackets are valid using a Stack.",
     ["Push opening brackets; pop matching on closing brackets."],
     "Stack-based parentheses matcher.",
     "Ensures brackets close in correct reverse order.",
     {"code": "def isValid(s):\n    stack = []\n    match = {')': '(', ']': '[', '}': '{'}\n    for c in s:\n        if c in match.values(): stack.append(c)\n        elif c in match:\n            if not stack or stack.pop() != match[c]: return False\n    return len(stack) == 0", "timeComplexity": "O(n)", "spaceComplexity": "O(n)"}),

    ("Intermediate", "Binary Search Tree", "Multiple-Choice", "What property characterizes a valid Binary Search Tree (BST)?",
     ["Left child < root < right child for all subtrees."],
     "Every node in the left subtree has a value less than the root, and every node in the right subtree has a value greater",
     "Enables O(log n) average search and insertion.",
     {"options": ["Every node in the left subtree has a value less than the root, and every node in the right subtree has a value greater", "All leaves must be at the same depth", "Every node has exactly two children", "Nodes are stored in sequential heap array"], "correctAnswer": "Every node in the left subtree has a value less than the root, and every node in the right subtree has a value greater"}),

    ("Intermediate", "Tree Traversals", "Multiple-Choice", "Which depth-first traversal of a Binary Search Tree produces values in strictly sorted ascending order?",
     ["In-order traversal: Left -> Root -> Right."],
     "In-order Traversal",
     "Visiting left subtree, current root, then right subtree yields sorted order.",
     {"options": ["In-order Traversal", "Pre-order Traversal", "Post-order Traversal", "Level-order Traversal"], "correctAnswer": "In-order Traversal"}),

    ("Intermediate", "Min Heap", "Multiple-Choice", "In a Min-Heap binary tree, where is the minimum element always located?",
     ["At the root."],
     "At the root node (index 0)",
     "The parent is always smaller than or equal to its children.",
     {"options": ["At the root node (index 0)", "At the leftmost leaf", "At the rightmost leaf", "At the median index"], "correctAnswer": "At the root node (index 0)"}),

    ("Intermediate", "Hash Collision", "Multiple-Choice", "What is 'Chaining' in the context of Hash Table collision resolution?",
     ["Storing colliding keys in a linked list at the same bucket index."],
     "Storing multiple key-value pairs that hash to the same bucket in a linked list or tree at that index",
     "Maintains separate lists per bucket array index.",
     {"options": ["Storing multiple key-value pairs that hash to the same bucket in a linked list or tree at that index", "Re-hashing with double keys", "Shifting elements to next open bucket", "Dropping old elements"], "correctAnswer": "Storing multiple key-value pairs that hash to the same bucket in a linked list or tree at that index"}),

    ("Intermediate", "Doubly Linked List", "Conceptual", "What is the primary trade-off of a Doubly Linked List compared to a Singly Linked List?",
     ["O(1) backwards traversal and deletions at cost of extra pointer memory."],
     "Doubly linked lists allow O(1) backward traversal and node deletion given node reference, but each node requires an extra pointer (memory overhead) and more pointer updates per insertion.",
     "Standard memory vs speed trade-off.",
     {}),

    ("Intermediate", "Circular Queue", "Coding", "Explain why modulo arithmetic `(tail + 1) % capacity` is used in a fixed-size circular queue.",
     ["Wraps index around to beginning when reaching buffer end."],
     "Index wrapping via modulo.",
     "Enables reusing emptied slots at the front of the array without shifting elements.",
     {"code": "def enqueue(self, val):\n    if (self.tail + 1) % self.capacity == self.head:\n        raise OverflowError('Queue is full')\n    self.queue[self.tail] = val\n    self.tail = (self.tail + 1) % self.capacity"}),

    ("Advanced", "Trie (Prefix Tree)", "Coding", "Implement a Trie node supporting `insert` and `search` for lowercase English words.",
     ["Each node has `children = {}` and `is_end = False`."],
     "Trie data structure implementation.",
     "Prefix trees allow O(L) prefix searches where L is word length.",
     {"code": "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\nclass Trie:\n    def __init__(self): self.root = TrieNode()\n    def insert(self, word):\n        node = self.root\n        for c in word:\n            if c not in node.children: node.children[c] = TrieNode()\n            node = node.children[c]\n        node.is_end = True\n    def search(self, word):\n        node = self.root\n        for c in word:\n            if c not in node.children: return False\n            node = node.children[c]\n        return node.is_end"}),

    ("Advanced", "LRU Cache", "Conceptual", "Which two data structures are combined to implement an LRU (Least Recently Used) Cache with O(1) `get` and `put` operations?",
     ["Hash Map and Doubly Linked List."],
     "A Hash Map (for O(1) key-to-node lookups) combined with a Doubly Linked List (for O(1) removal and insertion at head/tail).",
     "The Hash Map provides direct access while the Doubly Linked List maintains temporal usage order.",
     {}),

    ("Advanced", "AVL / Red-Black Trees", "Multiple-Choice", "What is the key advantage of a self-balancing binary search tree (like Red-Black or AVL) over an unbalanced BST?",
     ["Guarantees O(log n) worst-case time by preventing tree degradation into linked list."],
     "Guarantees O(log n) search, insertion, and deletion by keeping tree height balanced",
     "Standard BST can degrade to O(n) if items are inserted in sorted order.",
     {"options": ["Guarantees O(log n) search, insertion, and deletion by keeping tree height balanced", "Consumes zero memory pointers", "Eliminates duplicate keys automatically", "Sorts items in O(1) time"], "correctAnswer": "Guarantees O(log n) search, insertion, and deletion by keeping tree height balanced"}),

    ("Advanced", "Graph Representation", "Multiple-Choice", "For a sparse graph with V vertices and E edges, which representation is more memory-efficient?",
     ["Adjacency List O(V + E) vs Adjacency Matrix O(V^2)."],
     "Adjacency List, requiring O(V + E) space compared to O(V^2) for an Adjacency Matrix",
     "Avoids allocating space for non-existent edges.",
     {"options": ["Adjacency List, requiring O(V + E) space compared to O(V^2) for an Adjacency Matrix", "Adjacency Matrix", "Complete edge enumeration table", "Depth tree"], "correctAnswer": "Adjacency List, requiring O(V + E) space compared to O(V^2) for an Adjacency Matrix"}),

    ("Advanced", "Disjoint Set (Union-Find)", "Coding", "Implement Union-Find with Path Compression and Union by Rank.",
     ["Flatten tree on find, attach smaller tree to larger."],
     "Disjoint Set Union.",
     "Yields nearly constant alpha(n) amortized operation time.",
     {"code": "class UnionFind:\n    def __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [0] * n\n    def find(self, i):\n        if self.parent[i] != i:\n            self.parent[i] = self.find(self.parent[i])\n        return self.parent[i]\n    def union(self, x, y):\n        rx, ry = self.find(x), self.find(y)\n        if rx == ry: return False\n        if self.rank[rx] < self.rank[ry]: self.parent[rx] = ry\n        elif self.rank[rx] > self.rank[ry]: self.parent[ry] = rx\n        else:\n            self.parent[ry] = rx\n            self.rank[rx] += 1\n        return True"}),

    ("Advanced", "Segment Tree", "Conceptual", "What primary query and update problem do Segment Trees solve efficiently in O(log n) time?",
     ["Range queries (sum, min, max) and point updates over dynamic arrays."],
     "Efficiently performs Range Queries (such as range sum, minimum, or maximum) and point updates in O(log n) time.",
     "Overcomes O(n) range query scans or O(n) array prefix update overheads.",
     {})
]

for q in ds_questions: items_p3.append(("Data Structures", *q))
assert len(ds_questions) == 20

# --- ALGORITHMS (20) ---
algo_questions = [
    ("Beginner", "Linear Search", "Coding", "Write a function `linear_search(arr, target)` returning the index of target or -1 if not found.",
     ["Loop through array and compare each element."],
     "Linear search.",
     "Checks elements sequentially in O(n) time.",
     {"code": "def linear_search(arr, target):\n    for i, val in enumerate(arr):\n        if val == target: return i\n    return -1", "timeComplexity": "O(n)", "spaceComplexity": "O(1)"}),

    ("Beginner", "Binary Search", "Coding", "Implement iterative Binary Search on a sorted array returning index of target or -1.",
     ["Set `low = 0`, `high = len(arr) - 1`, divide in half."],
     "Iterative binary search.",
     "Halves the search space each step achieving O(log n) time.",
     {"code": "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1", "timeComplexity": "O(log n)", "spaceComplexity": "O(1)"}),

    ("Beginner", "Bubble Sort", "Multiple-Choice", "What is the worst-case and average time complexity of Bubble Sort on an array of n elements?",
     ["Compares adjacent elements repeatedly in nested loops."],
     "O(n^2) quadratic time",
     "Nested comparisons lead to n*(n-1)/2 operations in the worst case.",
     {"options": ["O(n^2) quadratic time", "O(n log n)", "O(n) linear time", "O(log n)"], "correctAnswer": "O(n^2) quadratic time"}),

    ("Beginner", "Two Sum", "Coding", "Given an array of integers `nums` and integer `target`, return indices of the two numbers that add up to `target` in O(n) time.",
     ["Use a hash map to store `target - num` compliments."],
     "Hash map complement lookup.",
     "Finds pair in single pass with O(n) time and O(n) auxiliary space.",
     {"code": "def two_sum(nums, target):\n    seen = {}\n    for i, n in enumerate(nums):\n        diff = target - n\n        if diff in seen: return [seen[diff], i]\n        seen[n] = i\n    return []", "timeComplexity": "O(n)", "spaceComplexity": "O(n)"}),

    ("Beginner", "Recursion", "Coding", "Write a recursive function to compute the n-th Fibonacci number with base cases for n=0 and n=1.",
     ["Base cases: `if n <= 1: return n`."],
     "Recursive Fibonacci.",
     "Simple recursive formulation branching into two recursive calls.",
     {"code": "def fib(n):\n    if n <= 1: return n\n    return fib(n - 1) + fib(n - 2)"}),

    ("Intermediate", "Merge Sort", "Coding", "Explain the divide-and-conquer steps of Merge Sort and implement the `merge(left, right)` helper function.",
     ["Divide array into two halves, sort recursively, merge two sorted arrays."],
     "Merge step of Merge Sort.",
     "Guarantees O(n log n) sorting time across all cases.",
     {"code": "def merge(left, right):\n    res = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            res.append(left[i]); i += 1\n        else:\n            res.append(right[j]); j += 1\n    res.extend(left[i:])\n    res.extend(right[j:])\n    return res", "timeComplexity": "O(n log n)", "spaceComplexity": "O(n)"}),

    ("Intermediate", "Quick Sort", "Multiple-Choice", "What is the worst-case time complexity of QuickSort, and when does it occur?",
     ["Occurs when chosen pivot is always the extreme minimum or maximum element."],
     "O(n^2), occurring when an unbalanced pivot is chosen on an already sorted or reverse-sorted array",
     "Randomized pivot selection avoids this pitfall.",
     {"options": ["O(n^2), occurring when an unbalanced pivot is chosen on an already sorted or reverse-sorted array", "O(n log n) in all cases", "O(n) on random arrays", "O(log n)"], "correctAnswer": "O(n^2), occurring when an unbalanced pivot is chosen on an already sorted or reverse-sorted array"}),

    ("Intermediate", "BFS", "Coding", "Implement Breadth-First Search (BFS) to traverse a graph using an adjacency list and a Queue.",
     ["Use `collections.deque` and a `visited` set."],
     "BFS graph traversal.",
     "Explores graph level-by-level.",
     {"code": "from collections import deque\n\ndef bfs(graph, start):\n    visited = {start}\n    queue = deque([start])\n    order = []\n    while queue:\n        node = queue.popleft()\n        order.append(node)\n        for neighbor in graph.get(node, []):\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)\n    return order", "timeComplexity": "O(V + E)", "spaceComplexity": "O(V)"}),

    ("Intermediate", "DFS", "Coding", "Implement Depth-First Search (DFS) on a graph recursively.",
     ["Use a visited set to avoid cycles."],
     "DFS recursive traversal.",
     "Explores as deep as possible along each branch before backtracking.",
     {"code": "def dfs(graph, node, visited=None):\n    if visited is None: visited = set()\n    visited.add(node)\n    for neighbor in graph.get(node, []):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    return visited", "timeComplexity": "O(V + E)", "spaceComplexity": "O(V)"}),

    ("Intermediate", "Sliding Window", "Coding", "Find the maximum sum of any contiguous subarray of size `k` using the Sliding Window technique.",
     ["Compute initial window sum, then slide adding incoming and subtracting outgoing element."],
     "Sliding window maximum sum.",
     "Reduces naive O(n*k) to optimal O(n) single pass.",
     {"code": "def max_sub_array_of_size_k(k, arr):\n    if len(arr) < k: return 0\n    window_sum = sum(arr[:k])\n    max_sum = window_sum\n    for i in range(k, len(arr)):\n        window_sum += arr[i] - arr[i - k]\n        max_sum = max(max_sum, window_sum)\n    return max_sum", "timeComplexity": "O(n)", "spaceComplexity": "O(1)"}),

    ("Intermediate", "Two Pointers", "Coding", "Remove duplicates from a sorted array in-place returning the new length.",
     ["Maintain write pointer `slow` and scan with `fast`."],
     "Two-pointer in-place duplicate removal.",
     "Modifies array in-place in O(n) time.",
     {"code": "def removeDuplicates(nums):\n    if not nums: return 0\n    slow = 0\n    for fast in range(1, len(nums)):\n        if nums[fast] != nums[slow]:\n            slow += 1\n            nums[slow] = nums[fast]\n    return slow + 1", "timeComplexity": "O(n)", "spaceComplexity": "O(1)"}),

    ("Intermediate", "Dynamic Programming Memoization", "Coding", "Compute Fibonacci numbers using top-down Dynamic Programming with memoization.",
     ["Store results in a cache dictionary."],
     "Top-down memoized Fibonacci.",
     "Eliminates repeated subproblem computation from O(2^n) to O(n).",
     {"code": "def fib_memo(n, memo={0: 0, 1: 1}):\n    if n not in memo:\n        memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)\n    return memo[n]", "timeComplexity": "O(n)", "spaceComplexity": "O(n)"}),

    ("Intermediate", "Bottom-Up DP", "Coding", "Compute the minimum coin change problem: fewest coins to make up amount given coin denominations.",
     ["Initialize DP array of size `amount + 1` filled with infinity, `dp[0] = 0`."],
     "Bottom-up coin change DP.",
     "Solves subproblems iteratively from 1 to amount.",
     {"code": "def coinChange(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for c in coins:\n        for x in range(c, amount + 1):\n            dp[x] = min(dp[x], dp[x - c] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1", "timeComplexity": "O(amount * coins)", "spaceComplexity": "O(amount)"}),

    ("Intermediate", "Binary Search Application", "Coding", "Find the peak element in an array where `nums[i] > nums[i-1]` and `nums[i] > nums[i+1]` in O(log n) time.",
     ["If `nums[mid] < nums[mid + 1]`, a peak must exist to the right."],
     "Binary search on answer.",
     "Follows positive slope towards local maximum.",
     {"code": "def findPeakElement(nums):\n    l, r = 0, len(nums) - 1\n    while l < r:\n        mid = (l + r) // 2\n        if nums[mid] > nums[mid + 1]: r = mid\n        else: l = mid + 1\n    return l", "timeComplexity": "O(log n)", "spaceComplexity": "O(1)"}),

    ("Advanced", "Dijkstra's Algorithm", "Coding", "Implement Dijkstra's Single Source Shortest Path using a min-heap priority queue.",
     ["Use `heapq.heappush(heap, (distance, node))`."],
     "Dijkstra algorithm with min-heap.",
     "Finds shortest paths from source in non-negative weighted graphs in O((V + E) log V).",
     {"code": "import heapq\n\ndef dijkstra(graph, start):\n    distances = {node: float('inf') for node in graph}\n    distances[start] = 0\n    pq = [(0, start)]\n    while pq:\n        curr_d, u = heapq.heappop(pq)\n        if curr_d > distances[u]: continue\n        for v, weight in graph[u]:\n            dist = curr_d + weight\n            if dist < distances[v]:\n                distances[v] = dist\n                heapq.heappush(pq, (dist, v))\n    return distances", "timeComplexity": "O((V + E) log V)", "spaceComplexity": "O(V)"}),

    ("Advanced", "Topological Sort", "Coding", "Implement Kahn's Algorithm for Topological Sort using in-degree counts and a queue.",
     ["Compute in-degrees for all vertices; queue vertices with in-degree 0."],
     "Kahn's Topological Sort.",
     "Produces valid linear task ordering for Directed Acyclic Graphs (DAGs).",
     {"code": "from collections import deque\n\ndef topological_sort(num_courses, prerequisites):\n    in_degree = [0] * num_courses\n    adj = {i: [] for i in range(num_courses)}\n    for dest, src in prerequisites:\n        adj[src].append(dest)\n        in_degree[dest] += 1\n    q = deque([i for i in range(num_courses) if in_degree[i] == 0])\n    order = []\n    while q:\n        node = q.popleft()\n        order.append(node)\n        for neighbor in adj[node]:\n            in_degree[neighbor] -= 1\n            if in_degree[neighbor] == 0: q.append(neighbor)\n    return order if len(order) == num_courses else []", "timeComplexity": "O(V + E)", "spaceComplexity": "O(V + E)"}),

    ("Advanced", "Longest Common Subsequence", "Coding", "Find the length of the Longest Common Subsequence (LCS) between two strings using 2D DP.",
     ["If chars match, `1 + dp[i-1][j-1]`; else `max(dp[i-1][j], dp[i][j-1])`."],
     "LCS 2D dynamic programming.",
     "Computes optimal alignment subsequence length.",
     {"code": "def longestCommonSubsequence(text1, text2):\n    m, n = len(text1), len(text2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if text1[i - 1] == text2[j - 1]: dp[i][j] = 1 + dp[i - 1][j - 1]\n            else: dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\n    return dp[m][n]", "timeComplexity": "O(m * n)", "spaceComplexity": "O(m * n)"}),

    ("Advanced", "A* Search", "Multiple-Choice", "What distinguishes A* Search from Dijkstra's Algorithm?",
     ["A* adds an admissible heuristic estimation `h(n)` to guide exploration toward goal."],
     "A* uses an evaluation function `f(n) = g(n) + h(n)` where `h(n)` is a heuristic estimate to target goal exploration",
     "Dijkstra explores radially in all directions (`h(n) = 0`), while A* prioritizes paths heading toward goal.",
     {"options": ["A* uses an evaluation function `f(n) = g(n) + h(n)` where `h(n)` is a heuristic estimate to target goal exploration", "A* does not work with weighted graphs", "A* only works on trees", "A* does not use a priority queue"], "correctAnswer": "A* uses an evaluation function `f(n) = g(n) + h(n)` where `h(n)` is a heuristic estimate to target goal exploration"}),

    ("Advanced", "Bit Manipulation", "Coding", "Write a function to count the number of set bits (1s) in an integer in O(number of set bits) using Brian Kernighan's Algorithm.",
     ["Repeatedly clear the lowest set bit using `n &= (n - 1)`."],
     "Brian Kernighan algorithm.",
     "Clears lowest set bit in each iteration.",
     {"code": "def countSetBits(n):\n    count = 0\n    while n:\n        n &= (n - 1)\n        count += 1\n    return count", "timeComplexity": "O(k)", "spaceComplexity": "O(1)"}),

    ("Advanced", "NP-Completeness", "Conceptual", "Explain the difference between P, NP, and NP-Complete problem classes.",
     ["P = solvable in polynomial time; NP = verifiable in polynomial time; NP-Complete = hardest problems in NP."],
     "P: problems solvable in polynomial time O(n^k). NP: decision problems whose solutions can be verified in polynomial time. NP-Complete: the hardest problems in NP; if any NP-Complete problem is solvable in P, then P = NP.",
     "Foundational computational complexity theory.",
     {})
]

for q in algo_questions: items_p3.append(("Algorithms", *q))
assert len(algo_questions) == 20
assert len(items_p3) == 75
print("Part 3 complete: 75 questions.")
