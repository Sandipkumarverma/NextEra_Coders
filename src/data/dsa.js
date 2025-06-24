
const dsaTopics = [
{
  id: "arrays",
  title: "Arrays",
  concept: "An array is a linear data structure that holds elements of the same type in contiguous memory locations. Arrays allow fast random access and efficient traversal. Common operations include traversal, insertion, deletion, and searching..",

  example: {
    description: "Example 1: Find the maximum element in an array.",
    code: {
      python: `def find_max(arr):\n  return max(arr)\n\nprint(find_max([3, 5, 2, 9, 1]))`,
      javascript: `function findMax(arr) {\n  return Math.max(...arr);\n}\n\nconsole.log(findMax([3, 5, 2, 9, 1]));`,
      java: `public class Main {\n  public static void main(String[] args) {\n    int[] arr = {3, 5, 2, 9, 1};\n    int max = arr[0];\n    for (int i : arr) {\n      if (i > max) max = i;\n    }\n    System.out.println(max);\n  }\n}`
    }
  }
},

  {
    id: "strings",
    title: "Strings",
    concept:
      "A string is a sequence of characters. Strings are immutable in most languages, meaning their values can't be changed after creation. They are commonly used for storing and manipulating text.",
    example: {
      description: "Check if a string is a palindrome.",
      code: {
        python: `def is_palindrome(s):\n    return s == s[::-1]\n\nprint(is_palindrome("madam"))`,
        javascript: `function isPalindrome(s) {\n  return s === s.split('').reverse().join('');\n}\n\nconsole.log(isPalindrome("madam"));`,
        java: `public class Main {\n  public static void main(String[] args) {\n    String s = "madam";\n    String reversed = new StringBuilder(s).reverse().toString();\n    System.out.println(s.equals(reversed));\n  }\n}`
      }
    }
  },
  {
  id: "linkedlist",
  title: "Linked List",
  concept: `A Linked List is a linear data structure where elements are stored as nodes.
Each node contains two parts:
1️⃣ Data – the actual value stored
2️⃣ Pointer (next) – a reference to the next node in the list

💡 Key Characteristics:
- Memory is not contiguous (unlike arrays)
- Dynamic size (no need to predefine size)
- Efficient insertions and deletions (especially at head/tail)
- Can be singly, doubly, or circular linked

Use Cases:
- Browser history (Back/Forward)
- Undo functionality
- Memory management (garbage collection)`,

  example: {
    description: "Create a singly linked list and print its elements in order.",
    input: `List: 10 → 20 → 30`,
    expectedOutput: `10 20 30`,
    code: {
      python: `# Create and traverse a linked list in Python
class Node:
  def __init__(self, data):
    self.data = data
    self.next = None

head = Node(10)
head.next = Node(20)
head.next.next = Node(30)

temp = head
while temp:
  print(temp.data, end=" ")
  temp = temp.next`,
      
      javascript: `// Create and traverse a linked list in JavaScript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

let temp = head;
while (temp) {
  console.log(temp.data);
  temp = temp.next;
}`,
      
      java: `// Create and traverse a linked list in Java
class Node {
  int data;
  Node next;
  Node(int data) { this.data = data; next = null; }
}

public class Main {
  public static void main(String[] args) {
    Node head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);

    Node temp = head;
    while (temp != null) {
      System.out.print(temp.data + " ");
      temp = temp.next;
    }
  }
}`
    }
  }
},
  {
    id: "stack",
    title: "Stack",
    concept:
      "A stack is a linear data structure that follows the LIFO (Last In First Out) principle. The last inserted element is the first to be removed. Common operations: push, pop, peek.",
    example: {
      description: "Push and pop elements in a stack.",
      code: {
        python: `stack = []\nstack.append(10)\nstack.append(20)\nprint(stack.pop())`,
        javascript: `let stack = [];\nstack.push(10);\nstack.push(20);\nconsole.log(stack.pop());`,
        java: `import java.util.Stack;\n\npublic class Main {\n  public static void main(String[] args) {\n    Stack<Integer> stack = new Stack<>();\n    stack.push(10);\n    stack.push(20);\n    System.out.println(stack.pop());\n  }\n}`
      }
    }
  },
  {
    id: "queue",
    title: "Queue",
    concept:
      "A queue is a linear data structure that follows the FIFO (First In First Out) principle. Elements are inserted at the rear and removed from the front.",
    example: {
      description: "Enqueue and dequeue elements in a queue.",
      code: {
        python: `from collections import deque\n\nq = deque()\nq.append(10)\nq.append(20)\nprint(q.popleft())`,
        javascript: `let queue = [];\nqueue.push(10);\nqueue.push(20);\nconsole.log(queue.shift());`,
        java: `import java.util.*;\n\npublic class Main {\n  public static void main(String[] args) {\n    Queue<Integer> q = new LinkedList<>();\n    q.add(10);\n    q.add(20);\n    System.out.println(q.remove());\n  }\n}`
      }
    }
  },
  {
  id: "recursion",
  title: "Recursion",
  concept:
    "Recursion is a method where the solution to a problem depends on solving smaller instances of the same problem. A recursive function calls itself until a base condition is met.\n\n🧠 It's useful for problems like factorial, Fibonacci, tree traversal, etc.\n\n✅ Base Case: The condition that stops recursion.\n✅ Recursive Case: Function calls itself with a smaller input.",
  example: {
    description: "Calculate the factorial of a number using recursion. Factorial of n (n!) is the product of all positive integers less than or equal to n. For example, 5! = 5×4×3×2×1 = 120",
    code: {
      python: `def factorial(n):\n  if n == 0:\n    return 1\n  return n * factorial(n - 1)\n\nprint("Factorial of 5 is:", factorial(5))`,

      javascript: `function factorial(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}\n\nconsole.log("Factorial of 5 is:", factorial(5));`,

      java: `public class Main {\n  public static int factorial(int n) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n  }\n\n  public static void main(String[] args) {\n    System.out.println("Factorial of 5 is: " + factorial(5));\n  }\n}`
    }
  }
},
{
  id: "binarysearch",
  title: "Binary Search",
  concept:
    "Binary Search is a fast and efficient algorithm to find a target element in a **sorted array**. Instead of checking each element one by one (like Linear Search), it repeatedly divides the array into halves and compares the middle value with the target.\n\n📌 It only works when the array is sorted!\n\n✅ Time Complexity: O(log n)\n✅ Space Complexity: O(1)",
  example: {
    description: "Suppose you're looking for the book 'DSA Handbook' in a shelf sorted alphabetically. Instead of going book by book, you go to the middle, check if it's the one, or decide to go left/right — this is how binary search works.",
    code: {
      python: `def binary_search(arr, target):\n  left, right = 0, len(arr) - 1\n  while left <= right:\n    mid = (left + right) // 2\n    if arr[mid] == target:\n      return mid\n    elif arr[mid] < target:\n      left = mid + 1\n    else:\n      right = mid - 1\n  return -1\n\n# Example\narr = [10, 20, 30, 40, 50]\ntarget = 30\nprint("Index of target:", binary_search(arr, target))`,
      
      javascript: `function binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    let mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    else if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}\n\n// Example\nconst arr = [10, 20, 30, 40, 50];\nconst target = 30;\nconsole.log("Index of target:", binarySearch(arr, target));`,
      
      java: `public class Main {\n  public static int binarySearch(int[] arr, int target) {\n    int left = 0, right = arr.length - 1;\n    while (left <= right) {\n      int mid = (left + right) / 2;\n      if (arr[mid] == target) return mid;\n      else if (arr[mid] < target) left = mid + 1;\n      else right = mid - 1;\n    }\n    return -1;\n  }\n\n  public static void main(String[] args) {\n    int[] arr = {10, 20, 30, 40, 50};\n    int target = 30;\n    System.out.println("Index of target: " + binarySearch(arr, target));\n  }\n}`
    }
  }
},
{
  id: "sorting",
  title: "Sorting",
  concept:
    "Sorting is the process of arranging data in a particular format — typically ascending or descending order. Efficient sorting is important for optimizing the performance of other algorithms such as search and merge operations.\n\nThere are many sorting algorithms: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, etc.\n\n📌 Today we will cover Bubble Sort as a simple example.",
  example: {
    description: "Sort an array using Bubble Sort. Bubble Sort works by repeatedly swapping adjacent elements if they are in the wrong order. It's simple but not efficient for large data sets.",
    code: {
      python: `def bubble_sort(arr):\n  n = len(arr)\n  for i in range(n):\n    for j in range(0, n-i-1):\n      if arr[j] > arr[j+1]:\n        arr[j], arr[j+1] = arr[j+1], arr[j]\n  return arr\n\nprint("Sorted array:", bubble_sort([64, 34, 25, 12, 22, 11, 90]))`,

      javascript: `function bubbleSort(arr) {\n  let n = arr.length;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n      }\n    }\n  }\n  return arr;\n}\n\nconsole.log("Sorted array:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));`,

      java: `public class Main {\n  public static void bubbleSort(int[] arr) {\n    int n = arr.length;\n    for (int i = 0; i < n; i++) {\n      for (int j = 0; j < n - i - 1; j++) {\n        if (arr[j] > arr[j + 1]) {\n          int temp = arr[j];\n          arr[j] = arr[j + 1];\n          arr[j + 1] = temp;\n        }\n      }\n    }\n  }\n\n  public static void main(String[] args) {\n    int[] arr = {64, 34, 25, 12, 22, 11, 90};\n    bubbleSort(arr);\n    System.out.print("Sorted array: ");\n    for (int i : arr) System.out.print(i + " ");\n  }\n}`
    }
  }
},
{
  id: "bubble-sort",
  title: "Bubble Sort",
  concept: `Bubble Sort is the simplest sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. It continues until the array is sorted.
  
Key Points:
1. Repeatedly compares adjacent pairs.
2. Pushes the largest unsorted element to the end in each pass.
3. Time Complexity: O(n²)
4. Best used for small datasets or for educational purposes.`,
  example: {
    description: "Sort an array using bubble sort technique.",
    code: {
      python: `def bubble_sort(arr):\n  n = len(arr)\n  for i in range(n):\n    for j in range(0, n - i - 1):\n      if arr[j] > arr[j + 1]:\n        arr[j], arr[j + 1] = arr[j + 1], arr[j]\n  return arr\n\nprint(bubble_sort([5, 1, 4, 2, 8]))`,
      javascript: `function bubbleSort(arr) {\n  let n = arr.length;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n      }\n    }\n  }\n  return arr;\n}\n\nconsole.log(bubbleSort([5, 1, 4, 2, 8]));`,
      java: `public class Main {\n  public static void bubbleSort(int[] arr) {\n    int n = arr.length;\n    for (int i = 0; i < n; i++) {\n      for (int j = 0; j < n - i - 1; j++) {\n        if (arr[j] > arr[j + 1]) {\n          int temp = arr[j];\n          arr[j] = arr[j + 1];\n          arr[j + 1] = temp;\n        }\n      }\n    }\n  }\n  public static void main(String[] args) {\n    int[] arr = {5, 1, 4, 2, 8};\n    bubbleSort(arr);\n    for (int num : arr) System.out.print(num + " ");\n  }\n}`
    }
  }
},
{
  id: "insertion-sort",
  title: "Insertion Sort",
  concept: `Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It takes elements from the unsorted part and inserts them into the correct position in the sorted part.

Key Points:
1. Works similarly to sorting playing cards by hand.
2. Efficient for small or nearly sorted datasets.
3. Stable sort and done in-place.
4. Time Complexity: O(n²) average and worst-case.
5. Best-case Time: O(n) when the array is already sorted.`,
  example: {
    description: "Sort an array using insertion sort.",
    code: {
      python: `def insertion_sort(arr):\n  for i in range(1, len(arr)):\n    key = arr[i]\n    j = i - 1\n    while j >= 0 and key < arr[j]:\n      arr[j + 1] = arr[j]\n      j -= 1\n    arr[j + 1] = key\n  return arr\n\nprint(insertion_sort([9, 5, 1, 4, 3]))`,
      javascript: `function insertionSort(arr) {\n  for (let i = 1; i < arr.length; i++) {\n    let key = arr[i];\n    let j = i - 1;\n    while (j >= 0 && arr[j] > key) {\n      arr[j + 1] = arr[j];\n      j--;\n    }\n    arr[j + 1] = key;\n  }\n  return arr;\n}\n\nconsole.log(insertionSort([9, 5, 1, 4, 3]));`,
      java: `public class Main {\n  public static void insertionSort(int[] arr) {\n    for (int i = 1; i < arr.length; i++) {\n      int key = arr[i];\n      int j = i - 1;\n      while (j >= 0 && arr[j] > key) {\n        arr[j + 1] = arr[j];\n        j--;\n      }\n      arr[j + 1] = key;\n    }\n  }\n  public static void main(String[] args) {\n    int[] arr = {9, 5, 1, 4, 3};\n    insertionSort(arr);\n    for (int num : arr) System.out.print(num + " ");\n  }\n}`
    }
  }
},
{
  id: "merge-sort",
  title: "Merge Sort",
  concept: `Merge Sort is a divide-and-conquer algorithm that splits the input array into two halves, recursively sorts them, and then merges the sorted halves.

Key Points:
1. Divides array until single element arrays remain.
2. Then merges sorted halves step-by-step.
3. Very efficient for large datasets.
4. Stable sort with guaranteed time complexity.
5. Time Complexity: O(n log n) in all cases.
6. Space Complexity: O(n) due to extra space for merging.`,
  example: {
    description: "Sort an array using merge sort.",
    code: {
      python: `def merge_sort(arr):\n  if len(arr) <= 1:\n    return arr\n  mid = len(arr) // 2\n  left = merge_sort(arr[:mid])\n  right = merge_sort(arr[mid:])\n  return merge(left, right)\n\ndef merge(left, right):\n  result = []\n  i = j = 0\n  while i < len(left) and j < len(right):\n    if left[i] < right[j]:\n      result.append(left[i])\n      i += 1\n    else:\n      result.append(right[j])\n      j += 1\n  result.extend(left[i:])\n  result.extend(right[j:])\n  return result\n\nprint(merge_sort([38, 27, 43, 3, 9, 82, 10]))`,
      javascript: `function mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  return merge(left, right);\n}\n\nfunction merge(left, right) {\n  const result = [];\n  let i = 0, j = 0;\n  while (i < left.length && j < right.length) {\n    if (left[i] < right[j]) {\n      result.push(left[i++]);\n    } else {\n      result.push(right[j++]);\n    }\n  }\n  return result.concat(left.slice(i)).concat(right.slice(j));\n}\n\nconsole.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));`,
      java: `import java.util.*;\npublic class Main {\n  public static void mergeSort(int[] arr, int l, int r) {\n    if (l < r) {\n      int m = (l + r) / 2;\n      mergeSort(arr, l, m);\n      mergeSort(arr, m + 1, r);\n      merge(arr, l, m, r);\n    }\n  }\n\n  public static void merge(int[] arr, int l, int m, int r) {\n    int n1 = m - l + 1;\n    int n2 = r - m;\n    int[] L = new int[n1];\n    int[] R = new int[n2];\n    for (int i = 0; i < n1; i++) L[i] = arr[l + i];\n    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];\n    int i = 0, j = 0, k = l;\n    while (i < n1 && j < n2) {\n      if (L[i] <= R[j]) arr[k++] = L[i++];\n      else arr[k++] = R[j++];\n    }\n    while (i < n1) arr[k++] = L[i++];\n    while (j < n2) arr[k++] = R[j++];\n  }\n\n  public static void main(String[] args) {\n    int[] arr = {38, 27, 43, 3, 9, 82, 10};\n    mergeSort(arr, 0, arr.length - 1);\n    for (int num : arr) System.out.print(num + " ");\n  }\n}`
    }
  }
},
{
  id: "quick-sort",
  title: "Quick Sort",
  concept: `Quick Sort is a divide-and-conquer algorithm that picks a pivot element, partitions the array around it, and recursively sorts the partitions.

Key Points:
1. Select a pivot (commonly last element).
2. Rearrange elements: left < pivot, right > pivot.
3. Recursively apply the process to subarrays.
4. Efficient and widely used in practice.
5. Average & Best Case: O(n log n), Worst Case: O(n²).
6. In-place sorting (no extra array).`,
  example: {
    description: "Sort an array using quick sort.",
    code: {
      python: `def quick_sort(arr):\n  if len(arr) <= 1:\n    return arr\n  pivot = arr[-1]\n  left = [x for x in arr[:-1] if x < pivot]\n  right = [x for x in arr[:-1] if x >= pivot]\n  return quick_sort(left) + [pivot] + quick_sort(right)\n\nprint(quick_sort([10, 7, 8, 9, 1, 5]))`,
      javascript: `function quickSort(arr) {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[arr.length - 1];\n  const left = arr.slice(0, -1).filter(x => x < pivot);\n  const right = arr.slice(0, -1).filter(x => x >= pivot);\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}\n\nconsole.log(quickSort([10, 7, 8, 9, 1, 5]));`,
      java: `import java.util.*;\npublic class Main {\n  public static void quickSort(int[] arr, int low, int high) {\n    if (low < high) {\n      int pi = partition(arr, low, high);\n      quickSort(arr, low, pi - 1);\n      quickSort(arr, pi + 1, high);\n    }\n  }\n\n  public static int partition(int[] arr, int low, int high) {\n    int pivot = arr[high];\n    int i = (low - 1);\n    for (int j = low; j < high; j++) {\n      if (arr[j] < pivot) {\n        i++;\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n      }\n    }\n    int temp = arr[i + 1];\n    arr[i + 1] = arr[high];\n    arr[high] = temp;\n    return i + 1;\n  }\n\n  public static void main(String[] args) {\n    int[] arr = {10, 7, 8, 9, 1, 5};\n    quickSort(arr, 0, arr.length - 1);\n    for (int num : arr) System.out.print(num + " ");\n  }\n}`
    }
  }
},
{
  id: "selection-sort",
  title: "Selection Sort",
  concept: `Selection Sort works by repeatedly selecting the minimum element from the unsorted part and putting it at the beginning.

Key Points:
1. Divides array into sorted and unsorted parts.
2. Finds minimum in unsorted and swaps it with the first unsorted.
3. Simple but inefficient on large datasets.
4. Time Complexity: Always O(n²), Space: O(1) (in-place).
5. Not stable by default.`,
  example: {
    description: "Sort an array using selection sort.",
    code: {
      python: `def selection_sort(arr):\n  n = len(arr)\n  for i in range(n):\n    min_idx = i\n    for j in range(i + 1, n):\n      if arr[j] < arr[min_idx]:\n        min_idx = j\n    arr[i], arr[min_idx] = arr[min_idx], arr[i]\n  return arr\n\nprint(selection_sort([64, 25, 12, 22, 11]))`,
      javascript: `function selectionSort(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    let minIndex = i;\n    for (let j = i + 1; j < arr.length; j++) {\n      if (arr[j] < arr[minIndex]) minIndex = j;\n    }\n    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];\n  }\n  return arr;\n}\n\nconsole.log(selectionSort([64, 25, 12, 22, 11]));`,
      java: `public class Main {\n  public static void selectionSort(int[] arr) {\n    for (int i = 0; i < arr.length - 1; i++) {\n      int minIdx = i;\n      for (int j = i + 1; j < arr.length; j++) {\n        if (arr[j] < arr[minIdx]) minIdx = j;\n      }\n      int temp = arr[minIdx];\n      arr[minIdx] = arr[i];\n      arr[i] = temp;\n    }\n  }\n\n  public static void main(String[] args) {\n    int[] arr = {64, 25, 12, 22, 11};\n    selectionSort(arr);\n    for (int num : arr) System.out.print(num + " ");\n  }\n}`
    }
  }
},
{
  id: "heap-sort",
  title: "Heap Sort",
  concept: `Heap Sort is a comparison-based sorting technique based on a Binary Heap data structure.

Key Points:
1. Builds a max heap from the array.
2. Repeatedly extracts the maximum and places it at the end.
3. Time Complexity: O(n log n) for all cases.
4. Space Complexity: O(1) — in-place.
5. Not stable sort (does not preserve order of equal elements).`,
  example: {
    description: "Sort an array using Heap Sort algorithm.",
    code: {
      python: `def heapify(arr, n, i):\n  largest = i\n  l = 2 * i + 1\n  r = 2 * i + 2\n  if l < n and arr[l] > arr[largest]:\n    largest = l\n  if r < n and arr[r] > arr[largest]:\n    largest = r\n  if largest != i:\n    arr[i], arr[largest] = arr[largest], arr[i]\n    heapify(arr, n, largest)\n\ndef heap_sort(arr):\n  n = len(arr)\n  for i in range(n // 2 - 1, -1, -1):\n    heapify(arr, n, i)\n  for i in range(n - 1, 0, -1):\n    arr[0], arr[i] = arr[i], arr[0]\n    heapify(arr, i, 0)\n  return arr\n\nprint(heap_sort([4, 10, 3, 5, 1]))`,
      javascript: `function heapify(arr, n, i) {\n  let largest = i;\n  let left = 2 * i + 1;\n  let right = 2 * i + 2;\n  if (left < n && arr[left] > arr[largest]) largest = left;\n  if (right < n && arr[right] > arr[largest]) largest = right;\n  if (largest !== i) {\n    [arr[i], arr[largest]] = [arr[largest], arr[i]];\n    heapify(arr, n, largest);\n  }\n}\n\nfunction heapSort(arr) {\n  let n = arr.length;\n  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);\n  for (let i = n - 1; i >= 0; i--) {\n    [arr[0], arr[i]] = [arr[i], arr[0]];\n    heapify(arr, i, 0);\n  }\n  return arr;\n}\n\nconsole.log(heapSort([4, 10, 3, 5, 1]));`,
      java: `public class Main {\n  public static void heapify(int[] arr, int n, int i) {\n    int largest = i;\n    int l = 2 * i + 1;\n    int r = 2 * i + 2;\n    if (l < n && arr[l] > arr[largest]) largest = l;\n    if (r < n && arr[r] > arr[largest]) largest = r;\n    if (largest != i) {\n      int swap = arr[i];\n      arr[i] = arr[largest];\n      arr[largest] = swap;\n      heapify(arr, n, largest);\n    }\n  }\n\n  public static void heapSort(int[] arr) {\n    int n = arr.length;\n    for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);\n    for (int i = n - 1; i >= 0; i--) {\n      int temp = arr[0];\n      arr[0] = arr[i];\n      arr[i] = temp;\n      heapify(arr, i, 0);\n    }\n  }\n\n  public static void main(String[] args) {\n    int[] arr = {4, 10, 3, 5, 1};\n    heapSort(arr);\n    for (int i : arr) System.out.print(i + " ");\n  }\n}`
    }
  }
},
{
  id: "counting-sort",
  title: "Counting Sort",
  concept: `Counting Sort is a non-comparison-based sorting algorithm used for sorting integers within a known range.

Key Points:
1. Works best when elements are non-negative integers and range is not too large.
2. Counts frequency of each element and calculates positions.
3. Time Complexity: O(n + k), where k = range of input.
4. Space Complexity: O(k) for the count array.
5. Stable sort (maintains relative order of equal elements).`,
  example: {
    description: "Sort an array using Counting Sort algorithm.",
    code: {
      python: `def counting_sort(arr):\n  max_val = max(arr)\n  count = [0] * (max_val + 1)\n  for num in arr:\n    count[num] += 1\n  index = 0\n  for i in range(len(count)):\n    while count[i] > 0:\n      arr[index] = i\n      index += 1\n      count[i] -= 1\n  return arr\n\nprint(counting_sort([4, 2, 2, 8, 3, 3, 1]))`,
      javascript: `function countingSort(arr) {\n  const max = Math.max(...arr);\n  const count = new Array(max + 1).fill(0);\n  arr.forEach(num => count[num]++);\n  let i = 0;\n  for (let j = 0; j < count.length; j++) {\n    while (count[j] > 0) {\n      arr[i++] = j;\n      count[j]--;\n    }\n  }\n  return arr;\n}\n\nconsole.log(countingSort([4, 2, 2, 8, 3, 3, 1]));`,
      java: `import java.util.*;\n\npublic class Main {\n  public static void countingSort(int[] arr) {\n    int max = Arrays.stream(arr).max().getAsInt();\n    int[] count = new int[max + 1];\n    for (int num : arr) count[num]++;\n    int index = 0;\n    for (int i = 0; i < count.length; i++) {\n      while (count[i]-- > 0) arr[index++] = i;\n    }\n  }\n\n  public static void main(String[] args) {\n    int[] arr = {4, 2, 2, 8, 3, 3, 1};\n    countingSort(arr);\n    for (int i : arr) System.out.print(i + " ");\n  }\n}`
    }
  }
},

{
  id: "searching",
  title: "Searching",
  concept:
    "Searching is the process of finding the position of an element in a data structure such as an array or list.\n\nThere are two main types:\n1. Linear Search – checks each element one by one.\n2. Binary Search – works only on sorted arrays and is much faster.\n\n📌 Here, we focus on Linear Search for its simplicity and beginner-friendliness.",
  example: {
    description: "Search for an element in an array using Linear Search. This algorithm checks each element one by one until the desired element is found or the end is reached.",
    code: {
      python: `def linear_search(arr, target):\n  for i in range(len(arr)):\n    if arr[i] == target:\n      return i\n  return -1\n\nprint("Index of 22:", linear_search([10, 15, 22, 30], 22))`,

      javascript: `function linearSearch(arr, target) {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === target) return i;\n  }\n  return -1;\n}\n\nconsole.log("Index of 22:", linearSearch([10, 15, 22, 30], 22));`,

      java: `public class Main {\n  public static int linearSearch(int[] arr, int target) {\n    for (int i = 0; i < arr.length; i++) {\n      if (arr[i] == target) return i;\n    }\n    return -1;\n  }\n\n  public static void main(String[] args) {\n    int[] arr = {10, 15, 22, 30};\n    int index = linearSearch(arr, 22);\n    System.out.println("Index of 22: " + index);\n  }\n}`
    }
  }
},
{
  id: "hashing",
  title: "Hashing",
  concept:
    "Hashing is a technique used to map data of arbitrary size to a fixed-size value (called hash code). It's commonly used for fast data access, like in hash tables or dictionaries.\n\n✅ Key Points:\n1. Hash functions convert input into a unique hash code.\n2. Ideal for constant time lookup (O(1)).\n3. Used in maps, sets, password storage, etc.\n\n📌 Let's implement a frequency counter using a hash map.",
  example: {
    description: "Count the frequency of each element in an array using a hash map.",
    code: {
      python: `def count_frequencies(arr):\n  freq = {}\n  for num in arr:\n    freq[num] = freq.get(num, 0) + 1\n  return freq\n\nprint(count_frequencies([1, 2, 2, 3, 1, 4]))`,

      javascript: `function countFrequencies(arr) {\n  const freq = {};\n  for (let num of arr) {\n    freq[num] = (freq[num] || 0) + 1;\n  }\n  return freq;\n}\n\nconsole.log(countFrequencies([1, 2, 2, 3, 1, 4]));`,

      java: `import java.util.*;\n\npublic class Main {\n  public static void main(String[] args) {\n    int[] arr = {1, 2, 2, 3, 1, 4};\n    Map<Integer, Integer> freq = new HashMap<>();\n    for (int num : arr) {\n      freq.put(num, freq.getOrDefault(num, 0) + 1);\n    }\n    System.out.println(freq);\n  }\n}`
    }
  }
},
{
  id: "two-pointers",
  title: "Two Pointers",
  concept:
    "The Two Pointers technique involves using two indices to traverse data structures (usually arrays or strings) from different directions or at different speeds. It's particularly useful in solving problems related to searching, sorting, or subarray sums efficiently.",
  example: {
    description: "Check if an array has two numbers that sum to a target using two pointers (on a sorted array).",
    code: {
      python: `def has_pair_with_sum(arr, target):\n  arr.sort()\n  left, right = 0, len(arr) - 1\n  while left < right:\n    current_sum = arr[left] + arr[right]\n    if current_sum == target:\n      return True\n    elif current_sum < target:\n      left += 1\n    else:\n      right -= 1\n  return False\n\nprint(has_pair_with_sum([1, 4, 6, 8], 10))  # True`,
      javascript: `function hasPairWithSum(arr, target) {\n  arr.sort((a, b) => a - b);\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const sum = arr[left] + arr[right];\n    if (sum === target) return true;\n    else if (sum < target) left++;\n    else right--;\n  }\n  return false;\n}\n\nconsole.log(hasPairWithSum([1, 4, 6, 8], 10)); // true`,
      java: `import java.util.*;\n\npublic class Main {\n  public static boolean hasPairWithSum(int[] arr, int target) {\n    Arrays.sort(arr);\n    int left = 0, right = arr.length - 1;\n    while (left < right) {\n      int sum = arr[left] + arr[right];\n      if (sum == target) return true;\n      else if (sum < target) left++;\n      else right--;\n    }\n    return false;\n  }\n\n  public static void main(String[] args) {\n    System.out.println(hasPairWithSum(new int[]{1, 4, 6, 8}, 10)); // true\n  }\n}`
    }
  }
},
{
  id: "sliding-window",
  title: "Sliding Window",
  concept:
    "The Sliding Window technique is used to reduce the time complexity of algorithms that examine all contiguous subarrays of a given size. It involves maintaining a window that moves across the array and updates the result efficiently without re-computation.",
  example: {
    description: "Find the maximum sum of a subarray of size k using sliding window.",
    code: {
      python: `def max_sum_subarray(arr, k):\n  window_sum = sum(arr[:k])\n  max_sum = window_sum\n  for i in range(k, len(arr)):\n    window_sum += arr[i] - arr[i - k]\n    max_sum = max(max_sum, window_sum)\n  return max_sum\n\nprint(max_sum_subarray([2, 1, 5, 1, 3, 2], 3))  # Output: 9`,
      javascript: `function maxSumSubarray(arr, k) {\n  let windowSum = 0;\n  for (let i = 0; i < k; i++) windowSum += arr[i];\n  let maxSum = windowSum;\n  for (let i = k; i < arr.length; i++) {\n    windowSum += arr[i] - arr[i - k];\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  return maxSum;\n}\n\nconsole.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9`,
      java: `public class Main {\n  public static int maxSumSubarray(int[] arr, int k) {\n    int windowSum = 0;\n    for (int i = 0; i < k; i++) windowSum += arr[i];\n    int maxSum = windowSum;\n    for (int i = k; i < arr.length; i++) {\n      windowSum += arr[i] - arr[i - k];\n      maxSum = Math.max(maxSum, windowSum);\n    }\n    return maxSum;\n  }\n\n  public static void main(String[] args) {\n    System.out.println(maxSumSubarray(new int[]{2, 1, 5, 1, 3, 2}, 3)); // Output: 9\n  }\n}`
    }
  }
},
{
  id: "prefix-sum",
  title: "Prefix Sum",
  concept:
    "Prefix Sum is a powerful technique used to calculate the sum of elements in a range efficiently. It preprocesses the array to build a prefix array, where each element stores the cumulative sum up to that index. This helps in reducing the time complexity of range sum queries from O(n) to O(1).",

  example: {
    description: "Find the sum of elements from index 2 to 5 using the prefix sum array.",
    code: {
      python: `def prefix_sum(arr):\n  prefix = [0] * (len(arr) + 1)\n  for i in range(len(arr)):\n    prefix[i+1] = prefix[i] + arr[i]\n  return prefix\n\narr = [1, 2, 3, 4, 5, 6]\nprefix = prefix_sum(arr)\nprint(prefix[6] - prefix[2])  # Output: 18 (3+4+5+6)`,
      
      javascript: `function getPrefixSum(arr) {\n  const prefix = [0];\n  for (let i = 0; i < arr.length; i++) {\n    prefix.push(prefix[i] + arr[i]);\n  }\n  return prefix;\n}\n\nconst arr = [1, 2, 3, 4, 5, 6];\nconst prefix = getPrefixSum(arr);\nconsole.log(prefix[6] - prefix[2]); // Output: 18`,
      
      java: `public class Main {\n  public static int[] getPrefixSum(int[] arr) {\n    int[] prefix = new int[arr.length + 1];\n    for (int i = 0; i < arr.length; i++) {\n      prefix[i + 1] = prefix[i] + arr[i];\n    }\n    return prefix;\n  }\n\n  public static void main(String[] args) {\n    int[] arr = {1, 2, 3, 4, 5, 6};\n    int[] prefix = getPrefixSum(arr);\n    System.out.println(prefix[6] - prefix[2]); // Output: 18\n  }\n}`
    }
  }
},
{
  id: "greedy",
  title: "Greedy Algorithms",
  concept: `Greedy algorithms build up a solution piece by piece, always choosing the next piece that offers the most immediate benefit. 
They do not always produce the globally optimal solution, but for many problems, they do provide a correct and efficient solution.
Greedy is most effective when the local optimum leads to a global optimum.`,

  example: {
    description: "Activity Selection Problem - Select the maximum number of non-overlapping activities based on start and end time.",
    code: {
      python: `def activity_selection(activities):\n  activities.sort(key=lambda x: x[1])  # Sort by end time\n  selected = [activities[0]]\n  last_end = activities[0][1]\n  for start, end in activities[1:]:\n    if start >= last_end:\n      selected.append((start, end))\n      last_end = end\n  return selected\n\nprint(activity_selection([(1, 2), (3, 4), (0, 6), (5, 7), (8, 9), (5, 9)]))`,

      javascript: `function activitySelection(activities) {\n  activities.sort((a, b) => a[1] - b[1]); // Sort by end time\n  const selected = [activities[0]];\n  let lastEnd = activities[0][1];\n  for (let i = 1; i < activities.length; i++) {\n    const [start, end] = activities[i];\n    if (start >= lastEnd) {\n      selected.push(activities[i]);\n      lastEnd = end;\n    }\n  }\n  return selected;\n}\n\nconsole.log(activitySelection([[1, 2], [3, 4], [0, 6], [5, 7], [8, 9], [5, 9]]));`,

      java: `import java.util.*;\n\npublic class Main {\n  public static List<int[]> activitySelection(int[][] activities) {\n    Arrays.sort(activities, Comparator.comparingInt(a -> a[1]));\n    List<int[]> result = new ArrayList<>();\n    result.add(activities[0]);\n    int lastEnd = activities[0][1];\n    for (int i = 1; i < activities.length; i++) {\n      if (activities[i][0] >= lastEnd) {\n        result.add(activities[i]);\n        lastEnd = activities[i][1];\n      }\n    }\n    return result;\n  }\n\n  public static void main(String[] args) {\n    int[][] activities = {{1, 2}, {3, 4}, {0, 6}, {5, 7}, {8, 9}, {5, 9}};\n    List<int[]> selected = activitySelection(activities);\n    for (int[] act : selected) System.out.println(Arrays.toString(act));\n  }\n}`
    }
  }
},
{
  id: "dynamic-programming",
  title: "Dynamic Programming (DP)",
  concept: `Dynamic Programming is an optimization technique used to solve complex problems by breaking them into simpler subproblems.
It stores the results of subproblems to avoid redundant calculations (known as memoization or tabulation).
DP is useful in problems involving **overlapping subproblems** and **optimal substructure**.

🧠 Common types:
1. Top-Down (Recursion + Memoization)
2. Bottom-Up (Iterative Tabulation)
3. Space Optimized DP
`,

  example: {
    description: "Fibonacci Series using Bottom-Up Dynamic Programming",
    code: {
      python: `def fibonacci(n):\n  if n <= 1:\n    return n\n  dp = [0] * (n + 1)\n  dp[1] = 1\n  for i in range(2, n + 1):\n    dp[i] = dp[i - 1] + dp[i - 2]\n  return dp[n]\n\nprint(fibonacci(10))  # Output: 55`,

      javascript: `function fibonacci(n) {\n  if (n <= 1) return n;\n  const dp = Array(n + 1).fill(0);\n  dp[1] = 1;\n  for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n  return dp[n];\n}\n\nconsole.log(fibonacci(10)); // Output: 55`,

      java: `public class Main {\n  public static int fibonacci(int n) {\n    if (n <= 1) return n;\n    int[] dp = new int[n + 1];\n    dp[1] = 1;\n    for (int i = 2; i <= n; i++) {\n      dp[i] = dp[i - 1] + dp[i - 2];\n    }\n    return dp[n];\n  }\n  public static void main(String[] args) {\n    System.out.println(fibonacci(10)); // Output: 55\n  }\n}`
    }
  }
},
{
  id: "backtracking",
  title: "Backtracking",
  concept: `Backtracking is a general algorithmic technique for solving problems recursively by trying to build a solution incrementally and removing those solutions that fail to satisfy the problem constraints at any point.

💡 It's commonly used in:
1. Combinatorial problems like permutations, combinations
2. Puzzles (Sudoku, N-Queens)
3. Path-finding problems

🔁 Key Idea: Explore → Check → Backtrack (undo) → Explore next option`,
  
  example: {
    description: "Find all subsets of a set using backtracking",
    code: {
      python: `def subsets(nums):\n  result = []\n  def backtrack(start, path):\n    result.append(path[:])\n    for i in range(start, len(nums)):\n      path.append(nums[i])\n      backtrack(i + 1, path)\n      path.pop()\n  backtrack(0, [])\n  return result\n\nprint(subsets([1, 2]))  # Output: [[], [1], [1, 2], [2]]`,

      javascript: `function subsets(nums) {\n  const result = [];\n  function backtrack(start, path) {\n    result.push([...path]);\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i]);\n      backtrack(i + 1, path);\n      path.pop();\n    }\n  }\n  backtrack(0, []);\n  return result;\n}\n\nconsole.log(subsets([1, 2])); // Output: [[], [1], [1,2], [2]]`,

      java: `import java.util.*;\n\npublic class Main {\n  public static List<List<Integer>> subsets(int[] nums) {\n    List<List<Integer>> result = new ArrayList<>();\n    backtrack(0, nums, new ArrayList<>(), result);\n    return result;\n  }\n  private static void backtrack(int start, int[] nums, List<Integer> path, List<List<Integer>> result) {\n    result.add(new ArrayList<>(path));\n    for (int i = start; i < nums.length; i++) {\n      path.add(nums[i]);\n      backtrack(i + 1, nums, path, result);\n      path.remove(path.size() - 1);\n    }\n  }\n  public static void main(String[] args) {\n    System.out.println(subsets(new int[]{1, 2}));\n  }\n}`
    }
  }
},
{
  id: "bit-manipulation",
  title: "Bit Manipulation",
  concept: `Bit Manipulation refers to the technique of performing operations on integers at the bit level. It's used for efficient computations in low-level programming, competitive coding, and optimization problems.

🔧 Common Operations:
1. AND (&), OR (|), XOR (^), NOT (~)
2. Left Shift (<<), Right Shift (>>)
3. Checking, setting, clearing, or toggling a specific bit

💡 Used in:
- Finding unique numbers
- Power of 2 check
- Subsets generation`,
  
  example: {
    description: "Check if a number is a power of two using bit manipulation",
    code: {
      python: `def is_power_of_two(n):\n  return n > 0 and (n & (n - 1)) == 0\n\nprint(is_power_of_two(16))  # Output: True\nprint(is_power_of_two(18))  # Output: False`,

      javascript: `function isPowerOfTwo(n) {\n  return n > 0 && (n & (n - 1)) === 0;\n}\n\nconsole.log(isPowerOfTwo(16)); // Output: true\nconsole.log(isPowerOfTwo(18)); // Output: false`,

      java: `public class Main {\n  public static boolean isPowerOfTwo(int n) {\n    return n > 0 && (n & (n - 1)) == 0;\n  }\n  public static void main(String[] args) {\n    System.out.println(isPowerOfTwo(16)); // true\n    System.out.println(isPowerOfTwo(18)); // false\n  }\n}`
    }
  }
},
{
  id: "kadane",
  title: "Kadane’s Algorithm",
  concept:
    "Kadane’s Algorithm is used to find the maximum sum of a contiguous subarray within a one-dimensional array. It runs in linear time using dynamic programming by keeping track of the current sum and updating the global maximum when needed.",
  example: {
    description: "Find the maximum sum of a contiguous subarray.",
    code: {
      python: `def kadane(arr):\n  max_sum = float('-inf')\n  curr_sum = 0\n  for num in arr:\n    curr_sum = max(num, curr_sum + num)\n    max_sum = max(max_sum, curr_sum)\n  return max_sum\n\nprint(kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # Output: 6`,
      javascript: `function kadane(arr) {\n  let maxSum = -Infinity;\n  let currSum = 0;\n  for (let num of arr) {\n    currSum = Math.max(num, currSum + num);\n    maxSum = Math.max(maxSum, currSum);\n  }\n  return maxSum;\n}\n\nconsole.log(kadane([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6`,
      java: `public class Main {\n  public static int kadane(int[] arr) {\n    int maxSum = Integer.MIN_VALUE;\n    int currSum = 0;\n    for (int num : arr) {\n      currSum = Math.max(num, currSum + num);\n      maxSum = Math.max(maxSum, currSum);\n    }\n    return maxSum;\n  }\n  public static void main(String[] args) {\n    int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n    System.out.println(kadane(arr)); // Output: 6\n  }\n}`
    }
  }
},
{
  id: "trees",
  title: "Trees",
  concept:
    "A tree is a hierarchical data structure made up of nodes, where each node has a value and references to child nodes. Unlike linear structures, trees branch out. The top node is called the root, and nodes without children are called leaves.",

  example: {
    description: "Create a binary tree and perform an in-order traversal.",
    code: {
      python: `class Node:\n  def __init__(self, data):\n    self.data = data\n    self.left = None\n    self.right = None\n\ndef inorder(node):\n  if node:\n    inorder(node.left)\n    print(node.data, end=' ')\n    inorder(node.right)\n\nroot = Node(1)\nroot.left = Node(2)\nroot.right = Node(3)\nroot.left.left = Node(4)\nroot.left.right = Node(5)\n\ninorder(root)  # Output: 4 2 5 1 3`,

      javascript: `class Node {\n  constructor(data) {\n    this.data = data;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nfunction inorder(node) {\n  if (node) {\n    inorder(node.left);\n    console.log(node.data);\n    inorder(node.right);\n  }\n}\n\nconst root = new Node(1);\nroot.left = new Node(2);\nroot.right = new Node(3);\nroot.left.left = new Node(4);\nroot.left.right = new Node(5);\n\ninorder(root); // Output: 4 2 5 1 3`,

      java: `class Node {\n  int data;\n  Node left, right;\n  Node(int data) {\n    this.data = data;\n    left = right = null;\n  }\n}\n\npublic class Main {\n  public static void inorder(Node node) {\n    if (node != null) {\n      inorder(node.left);\n      System.out.print(node.data + " ");\n      inorder(node.right);\n    }\n  }\n\n  public static void main(String[] args) {\n    Node root = new Node(1);\n    root.left = new Node(2);\n    root.right = new Node(3);\n    root.left.left = new Node(4);\n    root.left.right = new Node(5);\n\n    inorder(root); // Output: 4 2 5 1 3\n  }\n}`
    }
  }
},
{
  id: "binarytree",
  title: "Binary Tree",
  concept:
    "A Binary Tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child.",

  example: {
    description:
      "Create a binary tree and perform an in-order traversal (Left → Root → Right).",

    code: {
      python: `# Define a node class\nclass Node:\n  def __init__(self, data):\n    self.data = data\n    self.left = None\n    self.right = None\n\n# In-order traversal\ndef inorder(root):\n  if root:\n    inorder(root.left)\n    print(root.data, end=' ')\n    inorder(root.right)\n\n# Build tree and test\nroot = Node(1)\nroot.left = Node(2)\nroot.right = Node(3)\nroot.left.left = Node(4)\nroot.left.right = Node(5)\ninorder(root)  # Output: 4 2 5 1 3`,

      javascript: `// Define Node class\nclass Node {\n  constructor(data) {\n    this.data = data;\n    this.left = null;\n    this.right = null;\n  }\n}\n\n// In-order traversal\nfunction inorder(root) {\n  if (root) {\n    inorder(root.left);\n    console.log(root.data);\n    inorder(root.right);\n  }\n}\n\n// Build tree and test\nconst root = new Node(1);\nroot.left = new Node(2);\nroot.right = new Node(3);\nroot.left.left = new Node(4);\nroot.left.right = new Node(5);\ninorder(root); // Output: 4 2 5 1 3`,

      java: `class Node {\n  int data;\n  Node left, right;\n  Node(int d) {\n    data = d;\n    left = right = null;\n  }\n}\n\npublic class Main {\n  static void inorder(Node root) {\n    if (root != null) {\n      inorder(root.left);\n      System.out.print(root.data + " ");\n      inorder(root.right);\n    }\n  }\n\n  public static void main(String[] args) {\n    Node root = new Node(1);\n    root.left = new Node(2);\n    root.right = new Node(3);\n    root.left.left = new Node(4);\n    root.left.right = new Node(5);\n    inorder(root); // Output: 4 2 5 1 3\n  }\n}`
    }
  }
},
{
  id: "binarytree-traversals",
  title: "Binary Tree Traversals",
  concept:
    "Binary Tree Traversal means visiting each node in a specific order. The three main types are: In-order (Left ➝ Root ➝ Right), Pre-order (Root ➝ Left ➝ Right), and Post-order (Left ➝ Right ➝ Root).",

  example: {
    description:
      "Perform in-order, pre-order, and post-order traversals of a binary tree.",

    code: {
      python: `class Node:\n  def __init__(self, data):\n    self.data = data\n    self.left = None\n    self.right = None\n\ndef inorder(root):\n  if root:\n    inorder(root.left)\n    print(root.data, end=' ')\n    inorder(root.right)\n\ndef preorder(root):\n  if root:\n    print(root.data, end=' ')\n    preorder(root.left)\n    preorder(root.right)\n\ndef postorder(root):\n  if root:\n    postorder(root.left)\n    postorder(root.right)\n    print(root.data, end=' ')\n\n# Build binary tree\nroot = Node(1)\nroot.left = Node(2)\nroot.right = Node(3)\nroot.left.left = Node(4)\nroot.left.right = Node(5)\n\nprint("In-order: ", end='')\ninorder(root)\nprint("\\nPre-order: ", end='')\npreorder(root)\nprint("\\nPost-order: ", end='')\npostorder(root)`,

      javascript: `class Node {\n  constructor(data) {\n    this.data = data;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nfunction inorder(root) {\n  if (root) {\n    inorder(root.left);\n    console.log(root.data);\n    inorder(root.right);\n  }\n}\n\nfunction preorder(root) {\n  if (root) {\n    console.log(root.data);\n    preorder(root.left);\n    preorder(root.right);\n  }\n}\n\nfunction postorder(root) {\n  if (root) {\n    postorder(root.left);\n    postorder(root.right);\n    console.log(root.data);\n  }\n}\n\nconst root = new Node(1);\nroot.left = new Node(2);\nroot.right = new Node(3);\nroot.left.left = new Node(4);\nroot.left.right = new Node(5);\n\nconsole.log("In-order:"); inorder(root);\nconsole.log("Pre-order:"); preorder(root);\nconsole.log("Post-order:"); postorder(root);`,

      java: `class Node {\n  int data;\n  Node left, right;\n  Node(int data) {\n    this.data = data;\n    left = right = null;\n  }\n}\n\npublic class Main {\n  static void inorder(Node root) {\n    if (root != null) {\n      inorder(root.left);\n      System.out.print(root.data + " ");\n      inorder(root.right);\n    }\n  }\n\n  static void preorder(Node root) {\n    if (root != null) {\n      System.out.print(root.data + " ");\n      preorder(root.left);\n      preorder(root.right);\n    }\n  }\n\n  static void postorder(Node root) {\n    if (root != null) {\n      postorder(root.left);\n      postorder(root.right);\n      System.out.print(root.data + " ");\n    }\n  }\n\n  public static void main(String[] args) {\n    Node root = new Node(1);\n    root.left = new Node(2);\n    root.right = new Node(3);\n    root.left.left = new Node(4);\n    root.left.right = new Node(5);\n\n    System.out.print("In-order: "); inorder(root);\n    System.out.print("\\nPre-order: "); preorder(root);\n    System.out.print("\\nPost-order: "); postorder(root);\n  }\n}`
    }
  }
},
{
  id: "bst",
  title: "Binary Search Tree (BST)",
  concept:
    "A Binary Search Tree is a binary tree where each node's left subtree contains only values less than the node, and the right subtree contains only values greater. It allows efficient searching, insertion, and deletion.",

  example: {
    description: "Insert values into a BST and perform in-order traversal to get sorted order.",

    code: {
      python: `class Node:\n  def __init__(self, key):\n    self.key = key\n    self.left = None\n    self.right = None\n\ndef insert(root, key):\n  if root is None:\n    return Node(key)\n  if key < root.key:\n    root.left = insert(root.left, key)\n  else:\n    root.right = insert(root.right, key)\n  return root\n\ndef inorder(root):\n  if root:\n    inorder(root.left)\n    print(root.key, end=' ')\n    inorder(root.right)\n\n# Build BST\nroot = None\nfor val in [50, 30, 70, 20, 40, 60, 80]:\n  root = insert(root, val)\n\ninorder(root)  # Output: 20 30 40 50 60 70 80`,

      javascript: `class Node {\n  constructor(key) {\n    this.key = key;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nfunction insert(root, key) {\n  if (!root) return new Node(key);\n  if (key < root.key) root.left = insert(root.left, key);\n  else root.right = insert(root.right, key);\n  return root;\n}\n\nfunction inorder(root) {\n  if (root) {\n    inorder(root.left);\n    console.log(root.key);\n    inorder(root.right);\n  }\n}\n\nlet root = null;\n[50, 30, 70, 20, 40, 60, 80].forEach(val => root = insert(root, val));\ninorder(root);  // Output: 20 30 40 50 60 70 80`,

      java: `class Node {\n  int key;\n  Node left, right;\n  Node(int item) {\n    key = item;\n    left = right = null;\n  }\n}\n\npublic class Main {\n  static Node insert(Node root, int key) {\n    if (root == null) return new Node(key);\n    if (key < root.key) root.left = insert(root.left, key);\n    else root.right = insert(root.right, key);\n    return root;\n  }\n\n  static void inorder(Node root) {\n    if (root != null) {\n      inorder(root.left);\n      System.out.print(root.key + " ");\n      inorder(root.right);\n    }\n  }\n\n  public static void main(String[] args) {\n    Node root = null;\n    int[] keys = {50, 30, 70, 20, 40, 60, 80};\n    for (int key : keys) root = insert(root, key);\n    inorder(root);  // Output: 20 30 40 50 60 70 80\n  }\n}`
    }
  }
},
{
  id: "avl-tree",
  title: "Balanced Binary Search Tree (AVL Tree)",
  concept: 
    "An AVL Tree is a type of self-balancing binary search tree. After each insertion or deletion, it checks the balance factor of each node and performs rotations to keep the tree balanced. This ensures O(log n) time complexity for insertion, deletion, and search.",

  example: {
    description: "Insert elements into an AVL Tree and keep it balanced using rotations.",

    code: {
      python: `class Node:\n  def __init__(self, key):\n    self.key = key\n    self.left = None\n    self.right = None\n    self.height = 1\n\ndef getHeight(root):\n  return root.height if root else 0\n\ndef getBalance(root):\n  return getHeight(root.left) - getHeight(root.right) if root else 0\n\ndef rightRotate(y):\n  x = y.left\n  T2 = x.right\n  x.right = y\n  y.left = T2\n  y.height = 1 + max(getHeight(y.left), getHeight(y.right))\n  x.height = 1 + max(getHeight(x.left), getHeight(x.right))\n  return x\n\ndef leftRotate(x):\n  y = x.right\n  T2 = y.left\n  y.left = x\n  x.right = T2\n  x.height = 1 + max(getHeight(x.left), getHeight(x.right))\n  y.height = 1 + max(getHeight(y.left), getHeight(y.right))\n  return y\n\ndef insert(root, key):\n  if not root:\n    return Node(key)\n  if key < root.key:\n    root.left = insert(root.left, key)\n  else:\n    root.right = insert(root.right, key)\n\n  root.height = 1 + max(getHeight(root.left), getHeight(root.right))\n  balance = getBalance(root)\n\n  if balance > 1 and key < root.left.key:\n    return rightRotate(root)\n  if balance < -1 and key > root.right.key:\n    return leftRotate(root)\n  if balance > 1 and key > root.left.key:\n    root.left = leftRotate(root.left)\n    return rightRotate(root)\n  if balance < -1 and key < root.right.key:\n    root.right = rightRotate(root.right)\n    return leftRotate(root)\n\n  return root\n\ndef preOrder(root):\n  if root:\n    print(root.key, end=' ')\n    preOrder(root.left)\n    preOrder(root.right)\n\nroot = None\nfor val in [10, 20, 30, 40, 50, 25]:\n  root = insert(root, val)\npreOrder(root)  # Output: 30 20 10 25 40 50`,

      javascript: `// AVL Tree is not built-in in JS, but basic rotation logic can be created similarly\n// Example provided in Python as AVL in JS/Java is more complex and rare in interviews.`,

      java: `class Node {\n  int key, height;\n  Node left, right;\n  Node(int d) {\n    key = d; height = 1;\n  }\n}\n\nclass AVLTree {\n  int height(Node N) {\n    return N == null ? 0 : N.height;\n  }\n\n  int getBalance(Node N) {\n    return N == null ? 0 : height(N.left) - height(N.right);\n  }\n\n  Node rightRotate(Node y) {\n    Node x = y.left;\n    Node T2 = x.right;\n    x.right = y;\n    y.left = T2;\n    y.height = Math.max(height(y.left), height(y.right)) + 1;\n    x.height = Math.max(height(x.left), height(x.right)) + 1;\n    return x;\n  }\n\n  Node leftRotate(Node x) {\n    Node y = x.right;\n    Node T2 = y.left;\n    y.left = x;\n    x.right = T2;\n    x.height = Math.max(height(x.left), height(x.right)) + 1;\n    y.height = Math.max(height(y.left), height(y.right)) + 1;\n    return y;\n  }\n\n  Node insert(Node node, int key) {\n    if (node == null) return new Node(key);\n    if (key < node.key) node.left = insert(node.left, key);\n    else node.right = insert(node.right, key);\n\n    node.height = 1 + Math.max(height(node.left), height(node.right));\n    int balance = getBalance(node);\n\n    if (balance > 1 && key < node.left.key) return rightRotate(node);\n    if (balance < -1 && key > node.right.key) return leftRotate(node);\n    if (balance > 1 && key > node.left.key) {\n      node.left = leftRotate(node.left);\n      return rightRotate(node);\n    }\n    if (balance < -1 && key < node.right.key) {\n      node.right = rightRotate(node.right);\n      return leftRotate(node);\n    }\n\n    return node;\n  }\n\n  void preOrder(Node node) {\n    if (node != null) {\n      System.out.print(node.key + " ");\n      preOrder(node.left);\n      preOrder(node.right);\n    }\n  }\n\n  public static void main(String[] args) {\n    AVLTree tree = new AVLTree();\n    Node root = null;\n    int[] keys = {10, 20, 30, 40, 50, 25};\n    for (int key : keys) root = tree.insert(root, key);\n    tree.preOrder(root);  // Output: 30 20 10 25 40 50\n  }\n}`
    }
  }
},
{
  id: "heap",
  title: "Heap (Min-Heap / Max-Heap)",
  concept: 
    "A Heap is a complete binary tree used to implement priority queues. In a Min-Heap, the parent node is always smaller than its children. In a Max-Heap, the parent node is always larger. Heaps are useful in algorithms like Heap Sort and Dijkstra’s Algorithm.",

  example: {
    description: "Insert elements and extract the minimum from a Min-Heap.",

    code: {
      python: `import heapq\n\n# Min-Heap Example\nheap = []\nheapq.heappush(heap, 10)\nheapq.heappush(heap, 5)\nheapq.heappush(heap, 20)\nprint(heapq.heappop(heap))  # Output: 5`,

      javascript: `// JavaScript has no built-in heap, so we simulate with custom class\nclass MinHeap {\n  constructor() {\n    this.heap = [];\n  }\n  insert(val) {\n    this.heap.push(val);\n    this._bubbleUp();\n  }\n  extractMin() {\n    const min = this.heap[0];\n    const end = this.heap.pop();\n    if (this.heap.length) {\n      this.heap[0] = end;\n      this._sinkDown();\n    }\n    return min;\n  }\n  _bubbleUp() {\n    let idx = this.heap.length - 1;\n    const el = this.heap[idx];\n    while (idx > 0) {\n      let parentIdx = Math.floor((idx - 1) / 2);\n      let parent = this.heap[parentIdx];\n      if (el >= parent) break;\n      this.heap[parentIdx] = el;\n      this.heap[idx] = parent;\n      idx = parentIdx;\n    }\n  }\n  _sinkDown() {\n    let idx = 0;\n    const length = this.heap.length;\n    const el = this.heap[0];\n    while (true) {\n      let left = 2 * idx + 1, right = 2 * idx + 2;\n      let swap = null;\n      if (left < length && this.heap[left] < el) swap = left;\n      if (right < length && this.heap[right] < (swap === null ? el : this.heap[left])) swap = right;\n      if (swap === null) break;\n      this.heap[idx] = this.heap[swap];\n      this.heap[swap] = el;\n      idx = swap;\n    }\n  }\n}\n\nconst minHeap = new MinHeap();\nminHeap.insert(10);\nminHeap.insert(5);\nminHeap.insert(20);\nconsole.log(minHeap.extractMin()); // Output: 5`,

      java: `import java.util.PriorityQueue;\n\npublic class Main {\n  public static void main(String[] args) {\n    PriorityQueue<Integer> minHeap = new PriorityQueue<>();\n    minHeap.add(10);\n    minHeap.add(5);\n    minHeap.add(20);\n    System.out.println(minHeap.poll()); // Output: 5\n  }\n}`
    }
  }
},
{
  id: "trie",
  title: "Trie (Prefix Tree)",
  concept:
    "A Trie is a tree-like data structure used to store a dynamic set of strings, where each node represents a character of a word. It is extremely efficient for prefix-based searching like auto-complete, spell-checkers, and word games.",

  example: {
    description: "Insert and search words in a Trie.",

    code: {
      python: `class TrieNode:\n  def __init__(self):\n    self.children = {}\n    self.end_of_word = False\n\nclass Trie:\n  def __init__(self):\n    self.root = TrieNode()\n\n  def insert(self, word):\n    node = self.root\n    for char in word:\n      if char not in node.children:\n        node.children[char] = TrieNode()\n      node = node.children[char]\n    node.end_of_word = True\n\n  def search(self, word):\n    node = self.root\n    for char in word:\n      if char not in node.children:\n        return False\n      node = node.children[char]\n    return node.end_of_word\n\ntrie = Trie()\ntrie.insert("apple")\nprint(trie.search("apple"))  # True\nprint(trie.search("app"))    # False`,

      javascript: `class TrieNode {\n  constructor() {\n    this.children = {};\n    this.endOfWord = false;\n  }\n}\n\nclass Trie {\n  constructor() {\n    this.root = new TrieNode();\n  }\n\n  insert(word) {\n    let node = this.root;\n    for (let ch of word) {\n      if (!node.children[ch]) node.children[ch] = new TrieNode();\n      node = node.children[ch];\n    }\n    node.endOfWord = true;\n  }\n\n  search(word) {\n    let node = this.root;\n    for (let ch of word) {\n      if (!node.children[ch]) return false;\n      node = node.children[ch];\n    }\n    return node.endOfWord;\n  }\n}\n\nconst trie = new Trie();\ntrie.insert("apple");\nconsole.log(trie.search("apple")); // true\nconsole.log(trie.search("app"));   // false`,

      java: `import java.util.*;\n\nclass TrieNode {\n  Map<Character, TrieNode> children = new HashMap<>();\n  boolean isEndOfWord = false;\n}\n\nclass Trie {\n  private TrieNode root;\n\n  public Trie() {\n    root = new TrieNode();\n  }\n\n  public void insert(String word) {\n    TrieNode node = root;\n    for (char ch : word.toCharArray()) {\n      node.children.putIfAbsent(ch, new TrieNode());\n      node = node.children.get(ch);\n    }\n    node.isEndOfWord = true;\n  }\n\n  public boolean search(String word) {\n    TrieNode node = root;\n    for (char ch : word.toCharArray()) {\n      node = node.children.get(ch);\n      if (node == null) return false;\n    }\n    return node.isEndOfWord;\n  }\n\n  public static void main(String[] args) {\n    Trie trie = new Trie();\n    trie.insert("apple");\n    System.out.println(trie.search("apple")); // true\n    System.out.println(trie.search("app"));   // false\n  }\n}`
    }
  }
},
{
  id: "graph",
  title: "Graph",
  concept:
    "A graph is a non-linear data structure consisting of nodes (vertices) and edges connecting them. Graphs can be directed or undirected, weighted or unweighted, and are widely used in real-world modeling like maps, networks, and social media connections.",

  example: {
    description: "Use Depth-First Search (DFS) to traverse a graph.",
    code: {
      python: `from collections import defaultdict\n\ngraph = defaultdict(list)\ngraph[0].extend([1, 2])\ngraph[1].extend([0, 3])\ngraph[2].extend([0, 3])\ngraph[3].extend([1, 2])\n\nvisited = set()\n\ndef dfs(node):\n  if node in visited:\n    return\n  print(node, end=" ")\n  visited.add(node)\n  for neighbor in graph[node]:\n    dfs(neighbor)\n\ndfs(0)  # Output: 0 1 3 2`,

      javascript: `const graph = {\n  0: [1, 2],\n  1: [0, 3],\n  2: [0, 3],\n  3: [1, 2]\n};\n\nconst visited = new Set();\n\nfunction dfs(node) {\n  if (visited.has(node)) return;\n  console.log(node);\n  visited.add(node);\n  for (let neighbor of graph[node]) {\n    dfs(neighbor);\n  }\n}\n\ndfs(0); // Output: 0 1 3 2`,

      java: `import java.util.*;\n\npublic class Main {\n  static Map<Integer, List<Integer>> graph = new HashMap<>();\n  static Set<Integer> visited = new HashSet<>();\n\n  public static void dfs(int node) {\n    if (visited.contains(node)) return;\n    System.out.print(node + " ");\n    visited.add(node);\n    for (int neighbor : graph.get(node)) {\n      dfs(neighbor);\n    }\n  }\n\n  public static void main(String[] args) {\n    graph.put(0, Arrays.asList(1, 2));\n    graph.put(1, Arrays.asList(0, 3));\n    graph.put(2, Arrays.asList(0, 3));\n    graph.put(3, Arrays.asList(1, 2));\n    dfs(0); // Output: 0 1 3 2\n  }\n}`
    }
  }
},







];

export default dsaTopics;
