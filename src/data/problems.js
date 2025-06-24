// src/data/problems.js

const problems = [
  {
     // 1. Arrays problem 
    topic: "Array",
    problems: [
      {
        id: 1,
        title: "Find Maximum Element",
        description: "Given an array of integers, return the maximum element.",
        difficulty: "Easy",
        example: "Input: [1, 5, 3, 9, 2]\nOutput: 9\n\nInput: [-2, -5, -1]\nOutput: -1",
        starterCode: {
          javascript: "function findMax(arr) {\n  // your code here\n}",
          python: "def find_max(arr):\n    # your code here",
          java: "public int findMax(int[] arr) {\n  // your code here\n}"
        }
      },
      {
        id: 2,
        title: "Reverse Array",
        description: "Reverse the given array in-place.",
        difficulty: "Easy",
        example: "Input: [1, 2, 3, 4]\nOutput: [4, 3, 2, 1]\n\nInput: [10]\nOutput: [10]",
        starterCode: {
          javascript: "function reverseArray(arr) {\n  // your code here\n}",
          python: "def reverse_array(arr):\n    # your code here",
          java: "public int[] reverseArray(int[] arr) {\n  // your code here\n}"
        }
      },
      {
        id: 3,
        title: "Check Sorted",
        description: "Check if the array is sorted in non-decreasing order.",
        difficulty: "Easy",
        example: "Input: [1, 2, 3, 4]\nOutput: true\n\nInput: [4, 3, 2]\nOutput: false",
        starterCode: {
          javascript: "function isSorted(arr) {\n  // your code here\n}",
          python: "def is_sorted(arr):\n    # your code here",
          java: "public boolean isSorted(int[] arr) {\n  // your code here\n}"
        }
      },
      {
        id: 4,
        title: "Second Largest Element",
        description: "Return the second largest element in the array.",
        difficulty: "Medium",
        example: "Input: [1, 3, 5, 4, 2]\nOutput: 4\n\nInput: [9, 9, 9, 8]\nOutput: 8",
        starterCode: {
          javascript: "function secondLargest(arr) {\n  // your code here\n}",
          python: "def second_largest(arr):\n    # your code here",
          java: "public int secondLargest(int[] arr) {\n  // your code here\n}"
        }
      },
      {
        id: 5,
        title: "Left Rotate by One",
        description: "Rotate the array to the left by one position.",
        difficulty: "Medium",
        example: "Input: [1, 2, 3, 4]\nOutput: [2, 3, 4, 1]\n\nInput: [7]\nOutput: [7]",
        starterCode: {
          javascript: "function leftRotateOne(arr) {\n  // your code here\n}",
          python: "def left_rotate_one(arr):\n    # your code here",
          java: "public int[] leftRotateOne(int[] arr) {\n  // your code here\n}"
        }
      },
      {
        id: 6,
        title: "Move Zeros to End",
        description: "Move all zeros in the array to the end while maintaining order of non-zero elements.",
        difficulty: "Medium",
        example: "Input: [0, 1, 0, 3, 12]\nOutput: [1, 3, 12, 0, 0]\n\nInput: [0, 0, 0, 1]\nOutput: [1, 0, 0, 0]",
        starterCode: {
          javascript: "function moveZeros(arr) {\n  // your code here\n}",
          python: "def move_zeros(arr):\n    # your code here",
          java: "public int[] moveZeros(int[] arr) {\n  // your code here\n}"
        }
      },
      {
        id: 7,
        title: "Kadane's Algorithm",
        description: "Find the maximum sum of a contiguous subarray.",
        difficulty: "Hard",
        example: "Input: [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\n\nInput: [1]\nOutput: 1",
        starterCode: {
          javascript: "function maxSubArray(arr) {\n  // your code here\n}",
          python: "def max_sub_array(arr):\n    # your code here",
          java: "public int maxSubArray(int[] arr) {\n  // your code here\n}"
        }
      },
      {
        id: 8,
        title: "Majority Element",
        description: "Find the element that appears more than n/2 times.",
        difficulty: "Hard",
        example: "Input: [3,2,3]\nOutput: 3\n\nInput: [2,2,1,1,1,2,2]\nOutput: 2",
        starterCode: {
          javascript: "function majorityElement(arr) {\n  // your code here\n}",
          python: "def majority_element(arr):\n    # your code here",
          java: "public int majorityElement(int[] arr) {\n  // your code here\n}"
        }
      },
      {
        id: 9,
        title: "Two Sum",
        description: "Return indices of the two numbers such that they add up to a specific target.",
        difficulty: "Medium",
        example: "Input: [2,7,11,15], target=9\nOutput: [0,1]\n\nInput: [3,2,4], target=6\nOutput: [1,2]",
        starterCode: {
          javascript: "function twoSum(arr, target) {\n  // your code here\n}",
          python: "def two_sum(arr, target):\n    # your code here",
          java: "public int[] twoSum(int[] arr, int target) {\n  // your code here\n}"
        }
      },
      {
        id: 10,
        title: "Best Time to Buy and Sell Stock",
        description: "Find the max profit you can achieve from one transaction.",
        difficulty: "Hard",
        example: "Input: [7,1,5,3,6,4]\nOutput: 5\n\nInput: [7,6,4,3,1]\nOutput: 0",
        starterCode: {
          javascript: "function maxProfit(prices) {\n  // your code here\n}",
          python: "def max_profit(prices):\n    # your code here",
          java: "public int maxProfit(int[] prices) {\n  // your code here\n}"
        }
      }
    ]
  },

  // 2. strings problem 

 {
  topic: "String",
  problems: [
    {
      id: 101,
      title: "Reverse a String",
      description: "Given a string, return its reverse.",
      difficulty: "Easy",
      example: "Input: \"hello\"\nOutput: \"olleh\"\n\nInput: \"abc\"\nOutput: \"cba\"",
      starterCode: {
        javascript: "function reverseString(str) {\n  // your code here\n}",
        python: "def reverse_string(s):\n    # your code here",
        java: "public String reverseString(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 102,
      title: "Check Palindrome",
      description: "Check if a string is a palindrome.",
      difficulty: "Easy",
      example: "Input: \"racecar\"\nOutput: true\n\nInput: \"hello\"\nOutput: false",
      starterCode: {
        javascript: "function isPalindrome(str) {\n  // your code here\n}",
        python: "def is_palindrome(s):\n    # your code here",
        java: "public boolean isPalindrome(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 103,
      title: "First Non-Repeating Character",
      description: "Find the first non-repeating character in a string.",
      difficulty: "Medium",
      example: "Input: \"leetcode\"\nOutput: \"l\"\n\nInput: \"aabb\"\nOutput: \"_\" (or null)",
      starterCode: {
        javascript: "function firstUniqueChar(str) {\n  // your code here\n}",
        python: "def first_unique_char(s):\n    # your code here",
        java: "public char firstUniqueChar(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 104,
      title: "Anagram Check",
      description: "Check if two strings are anagrams of each other.",
      difficulty: "Easy",
      example: "Input: \"listen\", \"silent\"\nOutput: true\n\nInput: \"rat\", \"car\"\nOutput: false",
      starterCode: {
        javascript: "function isAnagram(str1, str2) {\n  // your code here\n}",
        python: "def is_anagram(s1, s2):\n    # your code here",
        java: "public boolean isAnagram(String s1, String s2) {\n  // your code here\n}"
      }
    },
    {
      id: 105,
      title: "Longest Common Prefix",
      description: "Find the longest common prefix among a list of strings.",
      difficulty: "Medium",
      example: "Input: [\"flower\", \"flow\", \"flight\"]\nOutput: \"fl\"",
      starterCode: {
        javascript: "function longestCommonPrefix(strs) {\n  // your code here\n}",
        python: "def longest_common_prefix(strs):\n    # your code here",
        java: "public String longestCommonPrefix(String[] strs) {\n  // your code here\n}"
      }
    },
    {
      id: 106,
      title: "Count Vowels",
      description: "Count the number of vowels in a string.",
      difficulty: "Easy",
      example: "Input: \"hello\"\nOutput: 2\n\nInput: \"xyz\"\nOutput: 0",
      starterCode: {
        javascript: "function countVowels(str) {\n  // your code here\n}",
        python: "def count_vowels(s):\n    # your code here",
        java: "public int countVowels(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 107,
      title: "Longest Palindromic Substring",
      description: "Find the longest palindromic substring in the given string.",
      difficulty: "Hard",
      example: "Input: \"babad\"\nOutput: \"bab\" or \"aba\"",
      starterCode: {
        javascript: "function longestPalindrome(s) {\n  // your code here\n}",
        python: "def longest_palindrome(s):\n    # your code here",
        java: "public String longestPalindrome(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 108,
      title: "Valid Parentheses",
      description: "Check if the input string has valid parentheses.",
      difficulty: "Medium",
      example: "Input: \"()[]{}\"\nOutput: true\n\nInput: \"(]\"\nOutput: false",
      starterCode: {
        javascript: "function isValid(s) {\n  // your code here\n}",
        python: "def is_valid(s):\n    # your code here",
        java: "public boolean isValid(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 109,
      title: "String Compression",
      description: "Compress the string such that repeated characters are replaced by character followed by count.",
      difficulty: "Medium",
      example: "Input: \"aabcccccaaa\"\nOutput: \"a2b1c5a3\"",
      starterCode: {
        javascript: "function compressString(str) {\n  // your code here\n}",
        python: "def compress_string(s):\n    # your code here",
        java: "public String compressString(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 110,
      title: "Check Isomorphic Strings",
      description: "Check if two strings are isomorphic.",
      difficulty: "Medium",
      example: "Input: \"egg\", \"add\"\nOutput: true\n\nInput: \"foo\", \"bar\"\nOutput: false",
      starterCode: {
        javascript: "function isIsomorphic(s, t) {\n  // your code here\n}",
        python: "def is_isomorphic(s, t):\n    # your code here",
        java: "public boolean isIsomorphic(String s, String t) {\n  // your code here\n}"
      }
    }
  ]
},

  // 3. Linked List
  {
    topic: "Linked List",
    problems: [
      {
        id: 201,
        title: "Reverse Linked List",
        description: "Reverse a singly linked list.",
        difficulty: "Easy",
        example: "Input: 1 -> 2 -> 3\nOutput: 3 -> 2 -> 1",
        starterCode: {
          javascript: "function reverseList(head) {\n  // your code here\n}",
          python: "def reverse_list(head):\n    # your code here",
          java: "public ListNode reverseList(ListNode head) {\n  // your code here\n}"
        }
      },
      {
        id: 202,
        title: "Detect Cycle in Linked List",
        description: "Check if a linked list has a cycle.",
        difficulty: "Medium",
        example: "Input: head with cycle\nOutput: true",
        starterCode: {
          javascript: "function hasCycle(head) {\n  // your code here\n}",
          python: "def has_cycle(head):\n    # your code here",
          java: "public boolean hasCycle(ListNode head) {\n  // your code here\n}"
        }
      },
      {
        id: 203,
        title: "Merge Two Sorted Lists",
        description: "Merge two sorted linked lists into one.",
        difficulty: "Easy",
        example: "Input: 1 -> 2, 1 -> 3\nOutput: 1 -> 1 -> 2 -> 3",
        starterCode: {
          javascript: "function mergeLists(l1, l2) {\n  // your code here\n}",
          python: "def merge_lists(l1, l2):\n    # your code here",
          java: "public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n  // your code here\n}"
        }
      },
      {
        id: 204,
        title: "Remove Nth Node From End",
        description: "Remove the Nth node from the end of the list.",
        difficulty: "Medium",
        example: "Input: 1 -> 2 -> 3 -> 4 -> 5, n=2\nOutput: 1 -> 2 -> 3 -> 5",
        starterCode: {
          javascript: "function removeNthFromEnd(head, n) {\n  // your code here\n}",
          python: "def remove_nth_from_end(head, n):\n    # your code here",
          java: "public ListNode removeNthFromEnd(ListNode head, int n) {\n  // your code here\n}"
        }
      },
      {
        id: 205,
        title: "Palindrome Linked List",
        description: "Check if a linked list is a palindrome.",
        difficulty: "Medium",
        example: "Input: 1 -> 2 -> 2 -> 1\nOutput: true",
        starterCode: {
          javascript: "function isPalindrome(head) {\n  // your code here\n}",
          python: "def is_palindrome(head):\n    # your code here",
          java: "public boolean isPalindrome(ListNode head) {\n  // your code here\n}"
        }
      },
      {
        id: 206,
        title: "Intersection of Two Linked Lists",
        description: "Return the node at which two linked lists intersect.",
        difficulty: "Medium",
        example: "Input: Two linked lists intersecting at node 4\nOutput: 4",
        starterCode: {
          javascript: "function getIntersectionNode(headA, headB) {\n  // your code here\n}",
          python: "def get_intersection_node(headA, headB):\n    # your code here",
          java: "public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n  // your code here\n}"
        }
      },
      {
        id: 207,
        title: "Flatten a Multilevel Doubly Linked List",
        description: "Flatten a multilevel doubly linked list.",
        difficulty: "Hard",
        example: "Input: 1 -> 2 -> (child 3 -> 4)\nOutput: 1 -> 2 -> 3 -> 4",
        starterCode: {
          javascript: "function flatten(head) {\n  // your code here\n}",
          python: "def flatten(head):\n    # your code here",
          java: "public Node flatten(Node head) {\n  // your code here\n}"
        }
      },
      {
        id: 208,
        title: "Copy List with Random Pointer",
        description: "Deep copy a linked list with random pointers.",
        difficulty: "Hard",
        example: "Input: A linked list with next and random pointers\nOutput: Deep copy of the list",
        starterCode: {
          javascript: "function copyRandomList(head) {\n  // your code here\n}",
          python: "def copy_random_list(head):\n    # your code here",
          java: "public Node copyRandomList(Node head) {\n  // your code here\n}"
        }
      },
      {
        id: 209,
        title: "Add Two Numbers (Linked List)",
        description: "Add two numbers represented by linked lists.",
        difficulty: "Medium",
        example: "Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)\nOutput: 7 -> 0 -> 8",
        starterCode: {
          javascript: "function addTwoNumbers(l1, l2) {\n  // your code here\n}",
          python: "def add_two_numbers(l1, l2):\n    # your code here",
          java: "public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n  // your code here\n}"
        }
      },
      {
        id: 210,
        title: "Reorder List",
        description: "Reorder list from L0 → Ln → L1 → Ln-1 ...",
        difficulty: "Medium",
        example: "Input: 1 -> 2 -> 3 -> 4 -> 5\nOutput: 1 -> 5 -> 2 -> 4 -> 3",
        starterCode: {
          javascript: "function reorderList(head) {\n  // your code here\n}",
          python: "def reorder_list(head):\n    # your code here",
          java: "public void reorderList(ListNode head) {\n  // your code here\n}"
        }
      }
    ]
  },

//  4. Stack & Queue
{
  topic: "Stack and Queue",
  problems: [
    {
      id: 301,
      title: "Valid Parentheses",
      description: "Check if the input string has valid open/close brackets using stack.",
      difficulty: "Easy",
      example: "Input: \"()[]{}\"\nOutput: true\n\nInput: \"(]\"\nOutput: false",
      starterCode: {
        javascript: "function isValid(s) {\n  // your code here\n}",
        python: "def is_valid(s):\n    # your code here",
        java: "public boolean isValid(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 302,
      title: "Implement Stack Using Queues",
      description: "Design a stack using one or two queues.",
      difficulty: "Medium",
      example: "Input: push(1), push(2), pop() → 2\nOutput: true",
      starterCode: {
        javascript: "class MyStack {\n  constructor() {}\n  push(x) {}\n  pop() {}\n  top() {}\n  empty() {}\n}",
        python: "class MyStack:\n    def __init__(self):\n        pass\n    def push(self, x):\n        pass\n    def pop(self):\n        pass\n    def top(self):\n        pass\n    def empty(self):\n        pass",
        java: "class MyStack {\n  public void push(int x) {}\n  public int pop() {}\n  public int top() {}\n  public boolean empty() {}\n}"
      }
    },
    {
      id: 303,
      title: "Implement Queue Using Stacks",
      description: "Design a queue using two stacks.",
      difficulty: "Medium",
      example: "Input: push(1), push(2), pop() → 1\nOutput: true",
      starterCode: {
        javascript: "class MyQueue {\n  constructor() {}\n  push(x) {}\n  pop() {}\n  peek() {}\n  empty() {}\n}",
        python: "class MyQueue:\n    def __init__(self):\n        pass\n    def push(self, x):\n        pass\n    def pop(self):\n        pass\n    def peek(self):\n        pass\n    def empty(self):\n        pass",
        java: "class MyQueue {\n  public void push(int x) {}\n  public int pop() {}\n  public int peek() {}\n  public boolean empty() {}\n}"
      }
    },
    {
      id: 304,
      title: "Min Stack",
      description: "Design a stack that supports push, pop, top, and retrieving the minimum in constant time.",
      difficulty: "Medium",
      example: "Input: push(1), push(2), getMin() → 1\nOutput: true",
      starterCode: {
        javascript: "class MinStack {\n  constructor() {}\n  push(val) {}\n  pop() {}\n  top() {}\n  getMin() {}\n}",
        python: "class MinStack:\n    def __init__(self):\n        pass\n    def push(self, val):\n        pass\n    def pop(self):\n        pass\n    def top(self):\n        pass\n    def getMin(self):\n        pass",
        java: "class MinStack {\n  public void push(int val) {}\n  public void pop() {}\n  public int top() {}\n  public int getMin() {}\n}"
      }
    },
    {
      id: 305,
      title: "Next Greater Element",
      description: "Find the next greater element for every element in the array using stack.",
      difficulty: "Medium",
      example: "Input: [2,1,2,4,3]\nOutput: [4,2,4,-1,-1]",
      starterCode: {
        javascript: "function nextGreaterElements(nums) {\n  // your code here\n}",
        python: "def next_greater_elements(nums):\n    # your code here",
        java: "public int[] nextGreaterElements(int[] nums) {\n  // your code here\n}"
      }
    },
    {
      id: 306,
      title: "Daily Temperatures",
      description: "Given temperatures, return how many days you’d have to wait for a warmer temperature.",
      difficulty: "Medium",
      example: "Input: [73,74,75,71,69,72,76,73]\nOutput: [1,1,4,2,1,1,0,0]",
      starterCode: {
        javascript: "function dailyTemperatures(temps) {\n  // your code here\n}",
        python: "def daily_temperatures(temps):\n    # your code here",
        java: "public int[] dailyTemperatures(int[] T) {\n  // your code here\n}"
      }
    },
    {
      id: 307,
      title: "Evaluate Reverse Polish Notation",
      description: "Evaluate the value of an arithmetic expression in Reverse Polish Notation.",
      difficulty: "Medium",
      example: "Input: [\"2\", \"1\", \"+\", \"3\", \"*\"]\nOutput: 9",
      starterCode: {
        javascript: "function evalRPN(tokens) {\n  // your code here\n}",
        python: "def eval_rpn(tokens):\n    # your code here",
        java: "public int evalRPN(String[] tokens) {\n  // your code here\n}"
      }
    },
    {
      id: 308,
      title: "Sliding Window Maximum",
      description: "Find the maximum value in each sliding window of size k.",
      difficulty: "Hard",
      example: "Input: [1,3,-1,-3,5,3,6,7], k=3\nOutput: [3,3,5,5,6,7]",
      starterCode: {
        javascript: "function maxSlidingWindow(nums, k) {\n  // your code here\n}",
        python: "def max_sliding_window(nums, k):\n    # your code here",
        java: "public int[] maxSlidingWindow(int[] nums, int k) {\n  // your code here\n}"
      }
    },
    {
      id: 309,
      title: "LRU Cache",
      description: "Design a data structure for Least Recently Used (LRU) cache.",
      difficulty: "Hard",
      example: "Input: put(1,1), put(2,2), get(1), put(3,3)\nOutput: 1, evicts 2",
      starterCode: {
        javascript: "class LRUCache {\n  constructor(capacity) {}\n  get(key) {}\n  put(key, value) {}\n}",
        python: "class LRUCache:\n    def __init__(self, capacity):\n        pass\n    def get(self, key):\n        pass\n    def put(self, key, value):\n        pass",
        java: "class LRUCache {\n  public LRUCache(int capacity) {}\n  public int get(int key) {}\n  public void put(int key, int value) {}\n}"
      }
    },
    {
      id: 310,
      title: "Circular Queue Implementation",
      description: "Design your own circular queue with fixed size.",
      difficulty: "Medium",
      example: "Input: enQueue(10), enQueue(20), deQueue(), Front() → 20",
      starterCode: {
        javascript: "class MyCircularQueue {\n  constructor(k) {}\n  enQueue(value) {}\n  deQueue() {}\n  Front() {}\n  Rear() {}\n  isEmpty() {}\n  isFull() {}\n}",
        python: "class MyCircularQueue:\n    def __init__(self, k):\n        pass\n    def enQueue(self, value):\n        pass\n    def deQueue(self):\n        pass\n    def Front(self):\n        pass\n    def Rear(self):\n        pass\n    def isEmpty(self):\n        pass\n    def isFull(self):\n        pass",
        java: "class MyCircularQueue {\n  public MyCircularQueue(int k) {}\n  public boolean enQueue(int value) {}\n  public boolean deQueue() {}\n  public int Front() {}\n  public int Rear() {}\n  public boolean isEmpty() {}\n  public boolean isFull() {}\n}"
      }
    }
  ]
},

//5. Sorting Problem

{
  topic: "Sorting",
  problems: [
    {
      id: 401,
      title: "Bubble Sort",
      description: "Implement Bubble Sort on the input array.",
      difficulty: "Easy",
      example: "Input: [5, 2, 9, 1, 5, 6]\nOutput: [1, 2, 5, 5, 6, 9]",
      starterCode: {
        javascript: "function bubbleSort(arr) {\n  // your code here\n  return arr;\n}",
        python: "def bubble_sort(arr):\n    # your code here\n    return arr",
        java: "public int[] bubbleSort(int[] arr) {\n  // your code here\n  return arr;\n}"
      }
    },
    {
      id: 402,
      title: "Selection Sort",
      description: "Implement Selection Sort on an unsorted array.",
      difficulty: "Easy",
      example: "Input: [29,10,14,37,14]\nOutput: [10,14,14,29,37]",
      starterCode: {
        javascript: "function selectionSort(arr) {\n  // your code here\n  return arr;\n}",
        python: "def selection_sort(arr):\n    # your code here\n    return arr",
        java: "public int[] selectionSort(int[] arr) {\n  // your code here\n  return arr;\n}"
      }
    },
    {
      id: 403,
      title: "Insertion Sort",
      description: "Sort an array using insertion sort algorithm.",
      difficulty: "Easy",
      example: "Input: [12, 11, 13, 5, 6]\nOutput: [5, 6, 11, 12, 13]",
      starterCode: {
        javascript: "function insertionSort(arr) {\n  // your code here\n  return arr;\n}",
        python: "def insertion_sort(arr):\n    # your code here\n    return arr",
        java: "public int[] insertionSort(int[] arr) {\n  // your code here\n  return arr;\n}"
      }
    },
    {
      id: 404,
      title: "Merge Sort",
      description: "Sort the input array using merge sort.",
      difficulty: "Medium",
      example: "Input: [3,1,4,1,5,9,2,6]\nOutput: [1,1,2,3,4,5,6,9]",
      starterCode: {
        javascript: "function mergeSort(arr) {\n  // your code here\n  return arr;\n}",
        python: "def merge_sort(arr):\n    # your code here\n    return arr",
        java: "public int[] mergeSort(int[] arr) {\n  // your code here\n  return arr;\n}"
      }
    },
    {
      id: 405,
      title: "Quick Sort",
      description: "Implement quick sort on the given array.",
      difficulty: "Medium",
      example: "Input: [8,4,7,3,10,2]\nOutput: [2,3,4,7,8,10]",
      starterCode: {
        javascript: "function quickSort(arr) {\n  // your code here\n  return arr;\n}",
        python: "def quick_sort(arr):\n    # your code here\n    return arr",
        java: "public int[] quickSort(int[] arr) {\n  // your code here\n  return arr;\n}"
      }
    },
    {
      id: 406,
      title: "Sort Colors (Dutch National Flag)",
      description: "Sort an array with 0s, 1s and 2s in-place.",
      difficulty: "Medium",
      example: "Input: [2,0,2,1,1,0]\nOutput: [0,0,1,1,2,2]",
      starterCode: {
        javascript: "function sortColors(nums) {\n  // your code here\n}",
        python: "def sort_colors(nums):\n    # your code here",
        java: "public void sortColors(int[] nums) {\n  // your code here\n}"
      }
    },
    {
      id: 407,
      title: "Kth Largest Element",
      description: "Find the kth largest element in an unsorted array.",
      difficulty: "Medium",
      example: "Input: [3,2,1,5,6,4], k=2\nOutput: 5",
      starterCode: {
        javascript: "function findKthLargest(nums, k) {\n  // your code here\n}",
        python: "def find_kth_largest(nums, k):\n    # your code here",
        java: "public int findKthLargest(int[] nums, int k) {\n  // your code here\n}"
      }
    },
    {
      id: 408,
      title: "Sort Characters by Frequency",
      description: "Sort characters in decreasing order based on frequency.",
      difficulty: "Medium",
      example: "Input: \"tree\"\nOutput: \"eert\" or \"eetr\"",
      starterCode: {
        javascript: "function frequencySort(s) {\n  // your code here\n}",
        python: "def frequency_sort(s):\n    # your code here",
        java: "public String frequencySort(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 409,
      title: "Count Inversions",
      description: "Count how many inversions (i < j and arr[i] > arr[j]) are in the array.",
      difficulty: "Hard",
      example: "Input: [2,4,1,3,5]\nOutput: 3",
      starterCode: {
        javascript: "function countInversions(arr) {\n  // your code here\n  return 0;\n}",
        python: "def count_inversions(arr):\n    # your code here\n    return 0",
        java: "public int countInversions(int[] arr) {\n  // your code here\n  return 0;\n}"
      }
    },
    {
      id: 410,
      title: "Minimum Number of Platforms",
      description: "Given arrival and departure times, find minimum platforms needed at the station.",
      difficulty: "Hard",
      example: "Input: arr=[9:00, 9:40, 9:50], dep=[9:10, 12:00, 11:20]\nOutput: 2",
      starterCode: {
        javascript: "function minPlatforms(arrivals, departures) {\n  // your code here\n}",
        python: "def min_platforms(arrivals, departures):\n    # your code here",
        java: "public int minPlatforms(int[] arr, int[] dep) {\n  // your code here\n}"
      }
    }
  ]
},

//6. Searching Problem 

{
  topic: "Searching",
  problems: [
    {
      id: 501,
      title: "Linear Search",
      description: "Implement linear search to find an element in an array.",
      difficulty: "Easy",
      example: "Input: arr = [10, 20, 30, 40], target = 30\nOutput: 2",
      starterCode: {
        javascript: "function linearSearch(arr, target) {\n  // your code\n  return -1;\n}",
        python: "def linear_search(arr, target):\n    # your code\n    return -1",
        java: "public int linearSearch(int[] arr, int target) {\n  // your code\n  return -1;\n}"
      }
    },
    {
      id: 502,
      title: "Binary Search",
      description: "Perform binary search on a sorted array to find an element.",
      difficulty: "Easy",
      example: "Input: arr = [1,2,3,4,5], target = 4\nOutput: 3",
      starterCode: {
        javascript: "function binarySearch(arr, target) {\n  // your code\n  return -1;\n}",
        python: "def binary_search(arr, target):\n    # your code\n    return -1",
        java: "public int binarySearch(int[] arr, int target) {\n  // your code\n  return -1;\n}"
      }
    },
    {
      id: 503,
      title: "First and Last Position in Sorted Array",
      description: "Find the first and last position of a target in a sorted array.",
      difficulty: "Medium",
      example: "Input: [5,7,7,8,8,10], target = 8\nOutput: [3,4]",
      starterCode: {
        javascript: "function searchRange(nums, target) {\n  // your code\n  return [-1, -1];\n}",
        python: "def search_range(nums, target):\n    # your code\n    return [-1, -1]",
        java: "public int[] searchRange(int[] nums, int target) {\n  // your code\n  return new int[]{-1, -1};\n}"
      }
    },
    {
      id: 504,
      title: "Square Root (Binary Search)",
      description: "Return the floor of the square root of a non-negative integer.",
      difficulty: "Medium",
      example: "Input: 10\nOutput: 3",
      starterCode: {
        javascript: "function sqrt(n) {\n  // your code\n  return 0;\n}",
        python: "def sqrt(n):\n    # your code\n    return 0",
        java: "public int sqrt(int n) {\n  // your code\n  return 0;\n}"
      }
    },
    {
      id: 505,
      title: "Search in Rotated Sorted Array",
      description: "Search a target in rotated sorted array using modified binary search.",
      difficulty: "Medium",
      example: "Input: [4,5,6,7,0,1,2], target = 0\nOutput: 4",
      starterCode: {
        javascript: "function search(nums, target) {\n  // your code\n  return -1;\n}",
        python: "def search(nums, target):\n    # your code\n    return -1",
        java: "public int search(int[] nums, int target) {\n  // your code\n  return -1;\n}"
      }
    },
    {
      id: 506,
      title: "Peak Element",
      description: "Find a peak element (greater than neighbors) in the array.",
      difficulty: "Medium",
      example: "Input: [1,2,3,1]\nOutput: 2",
      starterCode: {
        javascript: "function findPeakElement(nums) {\n  // your code\n  return -1;\n}",
        python: "def find_peak_element(nums):\n    # your code\n    return -1",
        java: "public int findPeakElement(int[] nums) {\n  // your code\n  return -1;\n}"
      }
    },
    {
      id: 507,
      title: "Find Minimum in Rotated Sorted Array",
      description: "Find the minimum element in a rotated sorted array.",
      difficulty: "Medium",
      example: "Input: [3,4,5,1,2]\nOutput: 1",
      starterCode: {
        javascript: "function findMin(nums) {\n  // your code\n  return -1;\n}",
        python: "def find_min(nums):\n    # your code\n    return -1",
        java: "public int findMin(int[] nums) {\n  // your code\n  return -1;\n}"
      }
    },
    {
      id: 508,
      title: "Median of Two Sorted Arrays",
      description: "Find the median of two sorted arrays.",
      difficulty: "Hard",
      example: "Input: [1,3], [2]\nOutput: 2.0",
      starterCode: {
        javascript: "function findMedianSortedArrays(nums1, nums2) {\n  // your code\n  return 0.0;\n}",
        python: "def find_median_sorted_arrays(nums1, nums2):\n    # your code\n    return 0.0",
        java: "public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n  // your code\n  return 0.0;\n}"
      }
    },
    {
      id: 509,
      title: "Aggressive Cows Problem",
      description: "Place cows in stalls so that minimum distance between any two is maximized.",
      difficulty: "Hard",
      example: "Input: stalls = [1, 2, 4, 8, 9], cows = 3\nOutput: 3",
      starterCode: {
        javascript: "function aggressiveCows(stalls, cows) {\n  // your code\n  return 0;\n}",
        python: "def aggressive_cows(stalls, cows):\n    # your code\n    return 0",
        java: "public int aggressiveCows(int[] stalls, int cows) {\n  // your code\n  return 0;\n}"
      }
    },
    {
      id: 510,
      title: "Book Allocation Problem",
      description: "Minimize the maximum pages allocated to a student.",
      difficulty: "Hard",
      example: "Input: books = [12,34,67,90], students = 2\nOutput: 113",
      starterCode: {
        javascript: "function allocateBooks(books, students) {\n  // your code\n  return 0;\n}",
        python: "def allocate_books(books, students):\n    # your code\n    return 0",
        java: "public int allocateBooks(int[] books, int students) {\n  // your code\n  return 0;\n}"
      }
    }
  ]
},



// 7. Matrix

{
  topic: "Matrix",
  problems: [
    {
      id: 601,
      title: "Matrix Search",
      description: "Search for a target value in a 2D matrix. Matrix has rows sorted and first element of each row > last of previous.",
      difficulty: "Easy",
      example: "Input: matrix = [[1,3,5],[7,9,11],[13,15,17]], target = 9\nOutput: true",
      starterCode: {
        javascript: "function searchMatrix(matrix, target) {\n  // your code\n  return false;\n}",
        python: "def search_matrix(matrix, target):\n    # your code\n    return False",
        java: "public boolean searchMatrix(int[][] matrix, int target) {\n  // your code\n  return false;\n}"
      }
    },
    {
      id: 602,
      title: "Spiral Matrix",
      description: "Return all elements of a matrix in spiral order.",
      difficulty: "Medium",
      example: "Input: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [1,2,3,6,9,8,7,4,5]",
      starterCode: {
        javascript: "function spiralOrder(matrix) {\n  // your code\n  return [];\n}",
        python: "def spiral_order(matrix):\n    # your code\n    return []",
        java: "public List<Integer> spiralOrder(int[][] matrix) {\n  // your code\n  return new ArrayList<>();\n}"
      }
    },
    {
      id: 603,
      title: "Transpose Matrix",
      description: "Return the transpose of the given matrix.",
      difficulty: "Easy",
      example: "Input: [[1,2,3],[4,5,6]]\nOutput: [[1,4],[2,5],[3,6]]",
      starterCode: {
        javascript: "function transpose(matrix) {\n  // your code\n  return [];\n}",
        python: "def transpose(matrix):\n    # your code\n    return []",
        java: "public int[][] transpose(int[][] matrix) {\n  // your code\n  return new int[0][0];\n}"
      }
    },
    {
      id: 604,
      title: "Matrix Rotation by 90 Degrees",
      description: "Rotate a square matrix by 90 degrees clockwise in-place.",
      difficulty: "Medium",
      example: "Input: [[1,2],[3,4]]\nOutput: [[3,1],[4,2]]",
      starterCode: {
        javascript: "function rotate(matrix) {\n  // your code\n}",
        python: "def rotate(matrix):\n    # your code\n    return matrix",
        java: "public void rotate(int[][] matrix) {\n  // your code\n}"
      }
    },
    {
      id: 605,
      title: "Set Matrix Zeroes",
      description: "If an element is 0, set its entire row and column to 0 in-place.",
      difficulty: "Medium",
      example: "Input: [[1,1,1],[1,0,1],[1,1,1]]\nOutput: [[1,0,1],[0,0,0],[1,0,1]]",
      starterCode: {
        javascript: "function setZeroes(matrix) {\n  // your code\n}",
        python: "def set_zeroes(matrix):\n    # your code\n    return matrix",
        java: "public void setZeroes(int[][] matrix) {\n  // your code\n}"
      }
    },
    {
      id: 606,
      title: "Search in Row-wise and Column-wise Sorted Matrix",
      description: "Each row and column of matrix is sorted. Search a value efficiently.",
      difficulty: "Medium",
      example: "Input: matrix = [[1,4,7],[2,5,8],[3,6,9]], target = 6\nOutput: true",
      starterCode: {
        javascript: "function searchSortedMatrix(matrix, target) {\n  // your code\n  return false;\n}",
        python: "def search_sorted_matrix(matrix, target):\n    # your code\n    return False",
        java: "public boolean searchSortedMatrix(int[][] matrix, int target) {\n  // your code\n  return false;\n}"
      }
    },
    {
      id: 607,
      title: "Diagonal Traversal",
      description: "Return the diagonal order traversal of the matrix.",
      difficulty: "Medium",
      example: "Input: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [1,2,4,7,5,3,6,8,9]",
      starterCode: {
        javascript: "function diagonalOrder(matrix) {\n  // your code\n  return [];\n}",
        python: "def diagonal_order(matrix):\n    # your code\n    return []",
        java: "public List<Integer> diagonalOrder(int[][] matrix) {\n  // your code\n  return new ArrayList<>();\n}"
      }
    },
    {
      id: 608,
      title: "Rotate Matrix Layers (Ring Rotate)",
      description: "Rotate the outer ring of a matrix clockwise.",
      difficulty: "Hard",
      example: "Input: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [[4,1,2],[7,5,3],[8,9,6]]",
      starterCode: {
        javascript: "function rotateRing(matrix) {\n  // your code\n  return matrix;\n}",
        python: "def rotate_ring(matrix):\n    # your code\n    return matrix",
        java: "public int[][] rotateRing(int[][] matrix) {\n  // your code\n  return matrix;\n}"
      }
    },
    {
      id: 609,
      title: "Word Search in Matrix",
      description: "Check if a word exists in the grid moving in 4 directions.",
      difficulty: "Hard",
      example: "Input: board = [['A','B','C'],['D','E','F'],['G','H','I']], word = 'BED'\nOutput: true",
      starterCode: {
        javascript: "function exist(board, word) {\n  // your code\n  return false;\n}",
        python: "def exist(board, word):\n    # your code\n    return False",
        java: "public boolean exist(char[][] board, String word) {\n  // your code\n  return false;\n}"
      }
    },
    {
      id: 610,
      title: "Flood Fill Algorithm",
      description: "Fill connected area in a matrix from starting point with a new color.",
      difficulty: "Hard",
      example: "Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2\nOutput: [[2,2,2],[2,2,0],[2,0,1]]",
      starterCode: {
        javascript: "function floodFill(image, sr, sc, color) {\n  // your code\n  return image;\n}",
        python: "def flood_fill(image, sr, sc, color):\n    # your code\n    return image",
        java: "public int[][] floodFill(int[][] image, int sr, int sc, int color) {\n  // your code\n  return image;\n}"
      }
    }
  ]
},

// 8. Hashing Problem

{
  topic: "Hashing",
  problems: [
    {
      id: 701,
      title: "Check for Duplicates",
      description: "Given an array of integers, determine if it contains any duplicates.",
      difficulty: "Easy",
      example: "Input: [1,2,3,1] → Output: true",
      starterCode: {
        javascript: "function containsDuplicate(nums) {\n  // your code here\n  return false;\n}",
        python: "def contains_duplicate(nums):\n    # your code here\n    return False",
        java: "public boolean containsDuplicate(int[] nums) {\n  // your code here\n  return false;\n}"
      }
    },
    {
      id: 702,
      title: "First Unique Character in a String",
      description: "Return the index of the first non-repeating character in a string.",
      difficulty: "Easy",
      example: "Input: 'leetcode' → Output: 0",
      starterCode: {
        javascript: "function firstUniqChar(s) {\n  // your code\n  return -1;\n}",
        python: "def first_uniq_char(s):\n    # your code\n    return -1",
        java: "public int firstUniqChar(String s) {\n  // your code\n  return -1;\n}"
      }
    },
    {
      id: 703,
      title: "Valid Anagram",
      description: "Check if two strings are anagrams of each other.",
      difficulty: "Easy",
      example: "Input: s = 'anagram', t = 'nagaram' → Output: true",
      starterCode: {
        javascript: "function isAnagram(s, t) {\n  // your code\n  return false;\n}",
        python: "def is_anagram(s, t):\n    # your code\n    return False",
        java: "public boolean isAnagram(String s, String t) {\n  // your code\n  return false;\n}"
      }
    },
    {
      id: 704,
      title: "Group Anagrams",
      description: "Group all anagrams from the list of strings.",
      difficulty: "Medium",
      example: "Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'] → Output: [['eat','tea','ate'],['tan','nat'],['bat']]",
      starterCode: {
        javascript: "function groupAnagrams(strs) {\n  // your code\n  return [];\n}",
        python: "def group_anagrams(strs):\n    # your code\n    return []",
        java: "public List<List<String>> groupAnagrams(String[] strs) {\n  // your code\n  return new ArrayList<>();\n}"
      }
    },
    {
      id: 705,
      title: "Top K Frequent Elements",
      description: "Return the k most frequent elements in the array.",
      difficulty: "Medium",
      example: "Input: nums = [1,1,1,2,2,3], k = 2 → Output: [1,2]",
      starterCode: {
        javascript: "function topKFrequent(nums, k) {\n  // your code\n  return [];\n}",
        python: "def top_k_frequent(nums, k):\n    # your code\n    return []",
        java: "public int[] topKFrequent(int[] nums, int k) {\n  // your code\n  return new int[0];\n}"
      }
    },
    {
      id: 706,
      title: "Subarray Sum Equals K",
      description: "Return the total number of continuous subarrays whose sum equals to k.",
      difficulty: "Medium",
      example: "Input: nums = [1,1,1], k = 2 → Output: 2",
      starterCode: {
        javascript: "function subarraySum(nums, k) {\n  // your code\n  return 0;\n}",
        python: "def subarray_sum(nums, k):\n    # your code\n    return 0",
        java: "public int subarraySum(int[] nums, int k) {\n  // your code\n  return 0;\n}"
      }
    },
    {
      id: 707,
      title: "Longest Consecutive Sequence",
      description: "Given an unsorted array, return the length of the longest consecutive elements sequence.",
      difficulty: "Hard",
      example: "Input: [100, 4, 200, 1, 3, 2] → Output: 4",
      starterCode: {
        javascript: "function longestConsecutive(nums) {\n  // your code\n  return 0;\n}",
        python: "def longest_consecutive(nums):\n    # your code\n    return 0",
        java: "public int longestConsecutive(int[] nums) {\n  // your code\n  return 0;\n}"
      }
    },
    {
      id: 708,
      title: "Two Sum",
      description: "Return indices of the two numbers such that they add up to a specific target.",
      difficulty: "Easy",
      example: "Input: nums = [2,7,11,15], target = 9 → Output: [0,1]",
      starterCode: {
        javascript: "function twoSum(nums, target) {\n  // your code\n  return [];\n}",
        python: "def two_sum(nums, target):\n    # your code\n    return []",
        java: "public int[] twoSum(int[] nums, int target) {\n  // your code\n  return new int[2];\n}"
      }
    },
    {
      id: 709,
      title: "Isomorphic Strings",
      description: "Given two strings s and t, determine if they are isomorphic.",
      difficulty: "Medium",
      example: "Input: s = 'egg', t = 'add' → Output: true",
      starterCode: {
        javascript: "function isIsomorphic(s, t) {\n  // your code\n  return false;\n}",
        python: "def is_isomorphic(s, t):\n    # your code\n    return False",
        java: "public boolean isIsomorphic(String s, String t) {\n  // your code\n  return false;\n}"
      }
    },
    {
      id: 710,
      title: "Find All Anagrams in a String",
      description: "Find all the start indices of p's anagrams in s.",
      difficulty: "Hard",
      example: "Input: s = 'cbaebabacd', p = 'abc' → Output: [0, 6]",
      starterCode: {
        javascript: "function findAnagrams(s, p) {\n  // your code\n  return [];\n}",
        python: "def find_anagrams(s, p):\n    # your code\n    return []",
        java: "public List<Integer> findAnagrams(String s, String p) {\n  // your code\n  return new ArrayList<>();\n}"
      }
    }
  ]
},

// 9. Two Pointer

{
  topic: "Two Pointer",
  problems: [
    {
      id: 801,
      title: "Reverse String",
      description: "Reverse the characters in the array in-place using two pointers.",
      difficulty: "Easy",
      example: "Input: ['h','e','l','l','o'] → Output: ['o','l','l','e','h']",
      starterCode: {
        javascript: "function reverseString(s) {\n  // your code\n}",
        python: "def reverse_string(s):\n    # your code\n    return s",
        java: "public void reverseString(char[] s) {\n  // your code\n}"
      }
    },
    {
      id: 802,
      title: "Two Sum II – Input Array Is Sorted",
      description: "Find two numbers that sum up to target in a sorted array using two pointers.",
      difficulty: "Easy",
      example: "Input: [2,7,11,15], target = 9 → Output: [1,2]",
      starterCode: {
        javascript: "function twoSum(numbers, target) {\n  // your code\n  return [];\n}",
        python: "def two_sum(numbers, target):\n    # your code\n    return []",
        java: "public int[] twoSum(int[] numbers, int target) {\n  // your code\n  return new int[2];\n}"
      }
    },
    {
      id: 803,
      title: "Move Zeroes",
      description: "Move all 0's to the end of the array while maintaining the relative order of the non-zero elements.",
      difficulty: "Easy",
      example: "Input: [0,1,0,3,12] → Output: [1,3,12,0,0]",
      starterCode: {
        javascript: "function moveZeroes(nums) {\n  // your code\n}",
        python: "def move_zeroes(nums):\n    # your code\n    return nums",
        java: "public void moveZeroes(int[] nums) {\n  // your code\n}"
      }
    },
    {
      id: 804,
      title: "3Sum",
      description: "Find all unique triplets in the array which gives the sum of zero.",
      difficulty: "Medium",
      example: "Input: [-1,0,1,2,-1,-4] → Output: [[-1,-1,2],[-1,0,1]]",
      starterCode: {
        javascript: "function threeSum(nums) {\n  // your code\n  return [];\n}",
        python: "def three_sum(nums):\n    # your code\n    return []",
        java: "public List<List<Integer>> threeSum(int[] nums) {\n  // your code\n  return new ArrayList<>();\n}"
      }
    },
    {
      id: 805,
      title: "Container With Most Water",
      description: "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
      difficulty: "Medium",
      example: "Input: [1,8,6,2,5,4,8,3,7] → Output: 49",
      starterCode: {
        javascript: "function maxArea(height) {\n  // your code\n  return 0;\n}",
        python: "def max_area(height):\n    # your code\n    return 0",
        java: "public int maxArea(int[] height) {\n  // your code\n  return 0;\n}"
      }
    },
    {
      id: 806,
      title: "Sort Colors",
      description: "Sort an array with 0s, 1s and 2s in-place (Dutch National Flag algorithm).",
      difficulty: "Medium",
      example: "Input: [2,0,2,1,1,0] → Output: [0,0,1,1,2,2]",
      starterCode: {
        javascript: "function sortColors(nums) {\n  // your code\n}",
        python: "def sort_colors(nums):\n    # your code\n    return nums",
        java: "public void sortColors(int[] nums) {\n  // your code\n}"
      }
    },
    {
      id: 807,
      title: "Remove Duplicates from Sorted Array",
      description: "Remove the duplicates in-place such that each element appears only once and return the new length.",
      difficulty: "Easy",
      example: "Input: [1,1,2] → Output: 2, nums = [1,2,_]",
      starterCode: {
        javascript: "function removeDuplicates(nums) {\n  // your code\n  return 0;\n}",
        python: "def remove_duplicates(nums):\n    # your code\n    return 0",
        java: "public int removeDuplicates(int[] nums) {\n  // your code\n  return 0;\n}"
      }
    },
    {
      id: 808,
      title: "Valid Palindrome",
      description: "Check if the given string is a valid palindrome, considering only alphanumeric characters and ignoring cases.",
      difficulty: "Easy",
      example: "Input: 'A man, a plan, a canal: Panama' → Output: true",
      starterCode: {
        javascript: "function isPalindrome(s) {\n  // your code\n  return false;\n}",
        python: "def is_palindrome(s):\n    # your code\n    return False",
        java: "public boolean isPalindrome(String s) {\n  // your code\n  return false;\n}"
      }
    },
    {
      id: 809,
      title: "Remove Nth Node From End of List",
      description: "Remove the nth node from the end of a singly linked list.",
      difficulty: "Medium",
      example: "Input: [1,2,3,4,5], n = 2 → Output: [1,2,3,5]",
      starterCode: {
        javascript: "function removeNthFromEnd(head, n) {\n  // your code\n  return head;\n}",
        python: "def remove_nth_from_end(head, n):\n    # your code\n    return head",
        java: "public ListNode removeNthFromEnd(ListNode head, int n) {\n  // your code\n  return head;\n}"
      }
    },
    {
      id: 810,
      title: "Trapping Rain Water",
      description: "Calculate how much water can be trapped after raining.",
      difficulty: "Hard",
      example: "Input: [0,1,0,2,1,0,1,3,2,1,2,1] → Output: 6",
      starterCode: {
        javascript: "function trap(height) {\n  // your code\n  return 0;\n}",
        python: "def trap(height):\n    # your code\n    return 0",
        java: "public int trap(int[] height) {\n  // your code\n  return 0;\n}"
      }
    }
  ]
},

// 10. Recursion Problems

{
  topic: "Recursion",
  problems: [
    {
      id: 1001,
      title: "Factorial of a Number",
      description: "Given a number n, return the factorial of n using recursion.",
      difficulty: "Easy",
      example: "Input: 5 → Output: 120",
      starterCode: {
        javascript: "function factorial(n) {\n  // your code here\n  return 1;\n}",
        python: "def factorial(n):\n    # your code here\n    return 1",
        java: "int factorial(int n) {\n  // your code here\n  return 1;\n}"
      }
    },
    {
      id: 1002,
      title: "Fibonacci Number",
      description: "Return the n-th Fibonacci number using recursion.",
      difficulty: "Easy",
      example: "Input: 6 → Output: 8",
      starterCode: {
        javascript: "function fibonacci(n) {\n  // your code here\n  return 0;\n}",
        python: "def fibonacci(n):\n    # your code here\n    return 0",
        java: "int fibonacci(int n) {\n  // your code here\n  return 0;\n}"
      }
    },
    {
      id: 1003,
      title: "Sum of N Natural Numbers",
      description: "Write a recursive function to return the sum of the first n natural numbers.",
      difficulty: "Easy",
      example: "Input: 4 → Output: 10",
      starterCode: {
        javascript: "function sum(n) {\n  // your code here\n  return 0;\n}",
        python: "def sum(n):\n    # your code here\n    return 0",
        java: "int sum(int n) {\n  // your code here\n  return 0;\n}"
      }
    },
    {
      id: 1004,
      title: "Power of a Number",
      description: "Calculate x raised to the power n using recursion.",
      difficulty: "Medium",
      example: "Input: x = 2, n = 3 → Output: 8",
      starterCode: {
        javascript: "function power(x, n) {\n  // your code here\n  return 1;\n}",
        python: "def power(x, n):\n    # your code here\n    return 1",
        java: "int power(int x, int n) {\n  // your code here\n  return 1;\n}"
      }
    },
    {
      id: 1005,
      title: "Reverse a String",
      description: "Reverse a given string using recursion.",
      difficulty: "Medium",
      example: "Input: 'hello' → Output: 'olleh'",
      starterCode: {
        javascript: "function reverse(str) {\n  // your code here\n  return '';\n}",
        python: "def reverse(str):\n    # your code here\n    return ''",
        java: "String reverse(String str) {\n  // your code here\n  return \"\";\n}"
      }
    },
    {
      id: 1006,
      title: "Check Palindrome Recursively",
      description: "Check if a string is a palindrome using recursion.",
      difficulty: "Medium",
      example: "Input: 'madam' → Output: true",
      starterCode: {
        javascript: "function isPalindrome(str) {\n  // your code here\n  return true;\n}",
        python: "def is_palindrome(str):\n    # your code here\n    return True",
        java: "boolean isPalindrome(String str) {\n  // your code here\n  return true;\n}"
      }
    },
    {
      id: 1007,
      title: "Generate All Subsets",
      description: "Generate all subsets of a given string using recursion.",
      difficulty: "Medium",
      example: "Input: 'abc' → Output: ['', 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']",
      starterCode: {
        javascript: "function generateSubsets(str) {\n  // your code here\n  return [];\n}",
        python: "def generate_subsets(str):\n    # your code here\n    return []",
        java: "List<String> generateSubsets(String str) {\n  // your code here\n  return new ArrayList<>();\n}"
      }
    },
    {
      id: 1008,
      title: "Tower of Hanoi",
      description: "Solve the Tower of Hanoi puzzle for n disks.",
      difficulty: "Hard",
      example: "Input: 3 disks → Output: Steps to move from A to C",
      starterCode: {
        javascript: "function towerOfHanoi(n, from, to, aux) {\n  // your code here\n}",
        python: "def tower_of_hanoi(n, from_peg, to_peg, aux_peg):\n    # your code here",
        java: "void towerOfHanoi(int n, char from, char to, char aux) {\n  // your code here\n}"
      }
    },
    {
      id: 1009,
      title: "Permutations of a String",
      description: "Print all permutations of a string using recursion.",
      difficulty: "Hard",
      example: "Input: 'abc' → Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']",
      starterCode: {
        javascript: "function permute(str) {\n  // your code here\n}",
        python: "def permute(str):\n    # your code here",
        java: "void permute(String str) {\n  // your code here\n}"
      }
    },
    {
      id: 1010,
      title: "Nth Catalan Number",
      description: "Find the nth Catalan number using recursion.",
      difficulty: "Hard",
      example: "Input: 4 → Output: 14",
      starterCode: {
        javascript: "function catalan(n) {\n  // your code here\n  return 0;\n}",
        python: "def catalan(n):\n    # your code here\n    return 0",
        java: "int catalan(int n) {\n  // your code here\n  return 0;\n}"
      }
    }
  ]
},

// 11. Window Slinding Problems

{
  topic: "Window Sliding",
  problems: [
    {
      id: 1011,
      title: "Maximum Sum Subarray of Size K",
      description: "Given an array of integers and a number k, find the maximum sum of a subarray of size k.",
      difficulty: "Easy",
      example: "Input: arr = [1, 2, 3, 4, 5], k = 3 → Output: 12",
      starterCode: {
        javascript: "function maxSum(arr, k) {\n  // your code here\n}",
        python: "def max_sum(arr, k):\n    # your code here",
        java: "int maxSum(int[] arr, int k) {\n  // your code here\n}"
      }
    },
    {
      id: 1012,
      title: "Minimum Size Subarray Sum",
      description: "Given an array and a target sum, return the minimum length of a subarray whose sum is at least target.",
      difficulty: "Medium",
      example: "Input: [2,3,1,2,4,3], target=7 → Output: 2",
      starterCode: {
        javascript: "function minSubarrayLen(target, arr) {\n  // your code here\n}",
        python: "def min_subarray_len(target, arr):\n    # your code here",
        java: "int minSubarrayLen(int target, int[] arr) {\n  // your code here\n}"
      }
    },
    {
      id: 1013,
      title: "Longest Substring with K Distinct Characters",
      description: "Given a string and an integer k, return the length of the longest substring with at most k distinct characters.",
      difficulty: "Medium",
      example: "Input: s='eceba', k=2 → Output: 3",
      starterCode: {
        javascript: "function longestSubstringKDistinct(s, k) {\n  // your code here\n}",
        python: "def longest_substring_k_distinct(s, k):\n    # your code here",
        java: "int longestSubstringKDistinct(String s, int k) {\n  // your code here\n}"
      }
    },
    {
      id: 1014,
      title: "Max Consecutive Ones (Sliding Window)",
      description: "Given a binary array, find the maximum number of consecutive 1s.",
      difficulty: "Easy",
      example: "Input: [1,1,0,1,1,1] → Output: 3",
      starterCode: {
        javascript: "function findMaxConsecutiveOnes(nums) {\n  // your code here\n}",
        python: "def find_max_consecutive_ones(nums):\n    # your code here",
        java: "int findMaxConsecutiveOnes(int[] nums) {\n  // your code here\n}"
      }
    },
    {
      id: 1015,
      title: "Longest Substring Without Repeating Characters",
      description: "Given a string, find the length of the longest substring without repeating characters.",
      difficulty: "Medium",
      example: "Input: 'abcabcbb' → Output: 3",
      starterCode: {
        javascript: "function lengthOfLongestSubstring(s) {\n  // your code here\n}",
        python: "def length_of_longest_substring(s):\n    # your code here",
        java: "int lengthOfLongestSubstring(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 1016,
      title: "Count Occurrences of Anagrams",
      description: "Given a text and a pattern, count all the anagrams of the pattern in the text.",
      difficulty: "Hard",
      example: "Input: txt='forxxorfxdofr', pat='for' → Output: 3",
      starterCode: {
        javascript: "function countAnagrams(txt, pat) {\n  // your code here\n}",
        python: "def count_anagrams(txt, pat):\n    # your code here",
        java: "int countAnagrams(String txt, String pat) {\n  // your code here\n}"
      }
    },
    {
      id: 1017,
      title: "Maximum Average Subarray",
      description: "Find the contiguous subarray of given length k that has the maximum average value.",
      difficulty: "Easy",
      example: "Input: [1,12,-5,-6,50,3], k=4 → Output: 12.75",
      starterCode: {
        javascript: "function findMaxAverage(nums, k) {\n  // your code here\n}",
        python: "def find_max_average(nums, k):\n    # your code here",
        java: "double findMaxAverage(int[] nums, int k) {\n  // your code here\n}"
      }
    },
    {
      id: 1018,
      title: "Longest Subarray with Sum ≤ K",
      description: "Find the longest subarray with sum less than or equal to K.",
      difficulty: "Hard",
      example: "Input: arr=[1,2,3,4,5], K=8 → Output: 3",
      starterCode: {
        javascript: "function longestSubarrayWithSumK(arr, k) {\n  // your code here\n}",
        python: "def longest_subarray_with_sum_k(arr, k):\n    # your code here",
        java: "int longestSubarrayWithSumK(int[] arr, int k) {\n  // your code here\n}"
      }
    },
    {
      id: 1019,
      title: "First Negative Number in Every Window of Size K",
      description: "Print the first negative number in every window of size k.",
      difficulty: "Medium",
      example: "Input: arr=[12,-1,-7,8,-15,30,16,28], k=3 → Output: [-1, -1, -7, -15, -15, 0]",
      starterCode: {
        javascript: "function firstNegativeInWindow(arr, k) {\n  // your code here\n}",
        python: "def first_negative_in_window(arr, k):\n    # your code here",
        java: "List<Integer> firstNegativeInWindow(int[] arr, int k) {\n  // your code here\n}"
      }
    },
    {
      id: 1020,
      title: "Count Distinct Elements in Every Window",
      description: "Count the number of distinct elements in every window of size k.",
      difficulty: "Hard",
      example: "Input: arr=[1,2,1,3,4,2,3], k=4 → Output: [3,4,4,3]",
      starterCode: {
        javascript: "function countDistinctInWindow(arr, k) {\n  // your code here\n}",
        python: "def count_distinct_in_window(arr, k):\n    # your code here",
        java: "List<Integer> countDistinctInWindow(int[] arr, int k) {\n  // your code here\n}"
      }
    }
  ]
},

// Tree and Graph Problems

{
  topic: "Tree and Graph",
  problems: [
    {
      id: 1021,
      title: "Inorder Traversal",
      description: "Perform inorder traversal of a binary tree.",
      difficulty: "Easy",
      example: "Input: [1,null,2,3] → Output: [1,3,2]",
      starterCode: {
        javascript: "function inorderTraversal(root) {\n  // your code here\n}",
        python: "def inorder_traversal(root):\n    # your code here",
        java: "List<Integer> inorderTraversal(TreeNode root) {\n  // your code here\n}"
      }
    },
    {
      id: 1022,
      title: "Level Order Traversal",
      description: "Return the level order traversal of a binary tree.",
      difficulty: "Easy",
      example: "Input: [3,9,20,null,null,15,7] → Output: [[3],[9,20],[15,7]]",
      starterCode: {
        javascript: "function levelOrder(root) {\n  // your code here\n}",
        python: "def level_order(root):\n    # your code here",
        java: "List<List<Integer>> levelOrder(TreeNode root) {\n  // your code here\n}"
      }
    },
    {
      id: 1023,
      title: "Maximum Depth of Binary Tree",
      description: "Find the maximum depth of a binary tree.",
      difficulty: "Easy",
      example: "Input: [3,9,20,null,null,15,7] → Output: 3",
      starterCode: {
        javascript: "function maxDepth(root) {\n  // your code here\n}",
        python: "def max_depth(root):\n    # your code here",
        java: "int maxDepth(TreeNode root) {\n  // your code here\n}"
      }
    },
    {
      id: 1024,
      title: "Check if Tree is Symmetric",
      description: "Check whether a binary tree is symmetric.",
      difficulty: "Medium",
      example: "Input: [1,2,2,3,4,4,3] → Output: true",
      starterCode: {
        javascript: "function isSymmetric(root) {\n  // your code here\n}",
        python: "def is_symmetric(root):\n    # your code here",
        java: "boolean isSymmetric(TreeNode root) {\n  // your code here\n}"
      }
    },
    {
      id: 1025,
      title: "Lowest Common Ancestor (LCA)",
      description: "Find the LCA of two nodes in a binary tree.",
      difficulty: "Medium",
      example: "Input: [3,5,1,6,2,0,8,null,null,7,4], p=5, q=1 → Output: 3",
      starterCode: {
        javascript: "function lowestCommonAncestor(root, p, q) {\n  // your code here\n}",
        python: "def lowest_common_ancestor(root, p, q):\n    # your code here",
        java: "TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n  // your code here\n}"
      }
    },
    {
      id: 1026,
      title: "Detect Cycle in Undirected Graph",
      description: "Check if a cycle exists in an undirected graph.",
      difficulty: "Medium",
      example: "Input: edges = [[0,1],[1,2],[2,0]] → Output: true",
      starterCode: {
        javascript: "function hasCycle(graph) {\n  // your code here\n}",
        python: "def has_cycle(graph):\n    # your code here",
        java: "boolean hasCycle(List<List<Integer>> graph) {\n  // your code here\n}"
      }
    },
    {
      id: 1027,
      title: "Topological Sort",
      description: "Return topological ordering of a directed graph using DFS.",
      difficulty: "Hard",
      example: "Input: [[0,1],[1,2],[2,3]] → Output: [0,1,2,3]",
      starterCode: {
        javascript: "function topologicalSort(graph) {\n  // your code here\n}",
        python: "def topological_sort(graph):\n    # your code here",
        java: "List<Integer> topologicalSort(List<List<Integer>> graph) {\n  // your code here\n}"
      }
    },
    {
      id: 1028,
      title: "Clone Graph",
      description: "Clone an undirected graph using DFS.",
      difficulty: "Medium",
      example: "Input: [[2,4],[1,3],[2,4],[1,3]] → Output: deep copy of graph",
      starterCode: {
        javascript: "function cloneGraph(node) {\n  // your code here\n}",
        python: "def clone_graph(node):\n    # your code here",
        java: "GraphNode cloneGraph(GraphNode node) {\n  // your code here\n}"
      }
    },
    {
      id: 1029,
      title: "Number of Islands",
      description: "Given a 2D grid of '1's (land) and '0's (water), count the number of islands.",
      difficulty: "Medium",
      example: "Input: grid = [['1','1','0'],['0','1','0'],['0','0','1']] → Output: 2",
      starterCode: {
        javascript: "function numIslands(grid) {\n  // your code here\n}",
        python: "def num_islands(grid):\n    # your code here",
        java: "int numIslands(char[][] grid) {\n  // your code here\n}"
      }
    },
    {
      id: 1030,
      title: "Word Ladder",
      description: "Given beginWord and endWord, return the number of steps in shortest transformation sequence.",
      difficulty: "Hard",
      example: "Input: begin='hit', end='cog', wordList=['hot','dot','dog','lot','log','cog'] → Output: 5",
      starterCode: {
        javascript: "function ladderLength(beginWord, endWord, wordList) {\n  // your code here\n}",
        python: "def ladder_length(beginWord, endWord, wordList):\n    # your code here",
        java: "int ladderLength(String beginWord, String endWord, List<String> wordList) {\n  // your code here\n}"
      }
    }
  ]
},

// Heap Problems

{
  topic: "Heap",
  problems: [
    {
      id: 1031,
      title: "Kth Largest Element",
      description: "Find the kth largest element in an unsorted array.",
      difficulty: "Medium",
      example: "Input: [3,2,1,5,6,4], k=2 → Output: 5",
      starterCode: {
        javascript: "function findKthLargest(nums, k) {\n  // your code here\n}",
        python: "def find_kth_largest(nums, k):\n    # your code here",
        java: "int findKthLargest(int[] nums, int k) {\n  // your code here\n}"
      }
    },
    {
      id: 1032,
      title: "K Closest Points to Origin",
      description: "Find k closest points to the origin (0, 0).",
      difficulty: "Medium",
      example: "Input: [[1,3],[-2,2]], k=1 → Output: [[-2,2]]",
      starterCode: {
        javascript: "function kClosest(points, k) {\n  // your code here\n}",
        python: "def k_closest(points, k):\n    # your code here",
        java: "int[][] kClosest(int[][] points, int k) {\n  // your code here\n}"
      }
    },
    {
      id: 1033,
      title: "Top K Frequent Elements",
      description: "Return the k most frequent elements from an array.",
      difficulty: "Medium",
      example: "Input: [1,1,1,2,2,3], k=2 → Output: [1,2]",
      starterCode: {
        javascript: "function topKFrequent(nums, k) {\n  // your code here\n}",
        python: "def top_k_frequent(nums, k):\n    # your code here",
        java: "int[] topKFrequent(int[] nums, int k) {\n  // your code here\n}"
      }
    },
    {
      id: 1034,
      title: "Sort Characters By Frequency",
      description: "Sort characters in decreasing order based on frequency.",
      difficulty: "Medium",
      example: "Input: 'tree' → Output: 'eert'",
      starterCode: {
        javascript: "function frequencySort(s) {\n  // your code here\n}",
        python: "def frequency_sort(s):\n    # your code here",
        java: "String frequencySort(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 1035,
      title: "Merge K Sorted Lists",
      description: "Merge k sorted linked lists into one sorted list.",
      difficulty: "Hard",
      example: "Input: [[1,4,5],[1,3,4],[2,6]] → Output: [1,1,2,3,4,4,5,6]",
      starterCode: {
        javascript: "function mergeKLists(lists) {\n  // your code here\n}",
        python: "def merge_k_lists(lists):\n    # your code here",
        java: "ListNode mergeKLists(ListNode[] lists) {\n  // your code here\n}"
      }
    },
    {
      id: 1036,
      title: "Find Median from Data Stream",
      description: "Design a data structure that supports adding numbers and finding median.",
      difficulty: "Hard",
      example: "Input: [1, 2, 3] → Output: median = 2",
      starterCode: {
        javascript: "class MedianFinder {\n  addNum(num) {\n    // your code\n  }\n  findMedian() {\n    // your code\n  }\n}",
        python: "class MedianFinder:\n    def add_num(self, num):\n        # your code\n    def find_median(self):\n        # your code",
        java: "class MedianFinder {\n  void addNum(int num) {}\n  double findMedian() {}\n}"
      }
    },
    {
      id: 1037,
      title: "Kth Smallest Element in Matrix",
      description: "Find the kth smallest element in a sorted matrix.",
      difficulty: "Medium",
      example: "Input: [[1,5,9],[10,11,13],[12,13,15]], k=8 → Output: 13",
      starterCode: {
        javascript: "function kthSmallest(matrix, k) {\n  // your code here\n}",
        python: "def kth_smallest(matrix, k):\n    # your code here",
        java: "int kthSmallest(int[][] matrix, int k) {\n  // your code here\n}"
      }
    },
    {
      id: 1038,
      title: "Reorganize String",
      description: "Rearrange string so no two adjacent chars are same.",
      difficulty: "Hard",
      example: "Input: 'aab' → Output: 'aba'",
      starterCode: {
        javascript: "function reorganizeString(s) {\n  // your code here\n}",
        python: "def reorganize_string(s):\n    # your code here",
        java: "String reorganizeString(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 1039,
      title: "Last Stone Weight",
      description: "Smash stones by weight until one or none remains.",
      difficulty: "Easy",
      example: "Input: [2,7,4,1,8,1] → Output: 1",
      starterCode: {
        javascript: "function lastStoneWeight(stones) {\n  // your code here\n}",
        python: "def last_stone_weight(stones):\n    # your code here",
        java: "int lastStoneWeight(int[] stones) {\n  // your code here\n}"
      }
    },
    {
      id: 1040,
      title: "Find K Pairs with Smallest Sums",
      description: "Find k pairs (u,v) with smallest sums from two arrays.",
      difficulty: "Hard",
      example: "Input: nums1=[1,7,11], nums2=[2,4,6], k=3 → Output: [[1,2],[1,4],[1,6]]",
      starterCode: {
        javascript: "function kSmallestPairs(nums1, nums2, k) {\n  // your code here\n}",
        python: "def k_smallest_pairs(nums1, nums2, k):\n    # your code here",
        java: "List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {\n  // your code here\n}"
      }
    }
  ]
},

// Dynamic Programming Problems

{
  topic: "Dynamic Programming",
  problems: [
    {
      id: 1041,
      title: "Fibonacci Number",
      description: "Find the nth Fibonacci number using dynamic programming.",
      difficulty: "Easy",
      example: "Input: n = 5 → Output: 5",
      starterCode: {
        javascript: "function fib(n) {\n  // your code here\n}",
        python: "def fib(n):\n    # your code here",
        java: "int fib(int n) {\n  // your code here\n}"
      }
    },
    {
      id: 1042,
      title: "Climbing Stairs",
      description: "You can climb 1 or 2 steps. How many ways to reach the top?",
      difficulty: "Easy",
      example: "Input: n = 3 → Output: 3",
      starterCode: {
        javascript: "function climbStairs(n) {\n  // your code here\n}",
        python: "def climb_stairs(n):\n    # your code here",
        java: "int climbStairs(int n) {\n  // your code here\n}"
      }
    },
    {
      id: 1043,
      title: "House Robber",
      description: "Find the maximum amount you can rob without alerting police.",
      difficulty: "Medium",
      example: "Input: [2,7,9,3,1] → Output: 12",
      starterCode: {
        javascript: "function rob(nums) {\n  // your code here\n}",
        python: "def rob(nums):\n    # your code here",
        java: "int rob(int[] nums) {\n  // your code here\n}"
      }
    },
    {
      id: 1044,
      title: "Maximum Subarray",
      description: "Find the contiguous subarray with the largest sum.",
      difficulty: "Medium",
      example: "Input: [-2,1,-3,4,-1,2,1,-5,4] → Output: 6",
      starterCode: {
        javascript: "function maxSubArray(nums) {\n  // your code here\n}",
        python: "def max_subarray(nums):\n    # your code here",
        java: "int maxSubArray(int[] nums) {\n  // your code here\n}"
      }
    },
    {
      id: 1045,
      title: "Longest Increasing Subsequence",
      description: "Find the length of the longest increasing subsequence.",
      difficulty: "Medium",
      example: "Input: [10,9,2,5,3,7,101,18] → Output: 4",
      starterCode: {
        javascript: "function lengthOfLIS(nums) {\n  // your code here\n}",
        python: "def length_of_lis(nums):\n    # your code here",
        java: "int lengthOfLIS(int[] nums) {\n  // your code here\n}"
      }
    },
    {
      id: 1046,
      title: "Partition Equal Subset Sum",
      description: "Can the array be partitioned into two subsets with equal sum?",
      difficulty: "Medium",
      example: "Input: [1,5,11,5] → Output: true",
      starterCode: {
        javascript: "function canPartition(nums) {\n  // your code here\n}",
        python: "def can_partition(nums):\n    # your code here",
        java: "boolean canPartition(int[] nums) {\n  // your code here\n}"
      }
    },
    {
      id: 1047,
      title: "Coin Change",
      description: "Find the minimum number of coins to make up a given amount.",
      difficulty: "Medium",
      example: "Input: coins = [1,2,5], amount = 11 → Output: 3",
      starterCode: {
        javascript: "function coinChange(coins, amount) {\n  // your code here\n}",
        python: "def coin_change(coins, amount):\n    # your code here",
        java: "int coinChange(int[] coins, int amount) {\n  // your code here\n}"
      }
    },
    {
      id: 1048,
      title: "0/1 Knapsack",
      description: "You have to choose items with weights and values under a capacity limit.",
      difficulty: "Medium",
      example: "Input: W = 50, val = [60,100,120], wt = [10,20,30] → Output: 220",
      starterCode: {
        javascript: "function knapsack(W, wt, val, n) {\n  // your code here\n}",
        python: "def knapsack(W, wt, val, n):\n    # your code here",
        java: "int knapsack(int W, int[] wt, int[] val, int n) {\n  // your code here\n}"
      }
    },
    {
      id: 1049,
      title: "Edit Distance",
      description: "Find the minimum operations to convert one string to another.",
      difficulty: "Hard",
      example: "Input: word1 = 'horse', word2 = 'ros' → Output: 3",
      starterCode: {
        javascript: "function minDistance(word1, word2) {\n  // your code here\n}",
        python: "def min_distance(word1, word2):\n    # your code here",
        java: "int minDistance(String word1, String word2) {\n  // your code here\n}"
      }
    },
    {
      id: 1050,
      title: "Longest Palindromic Subsequence",
      description: "Find the length of longest palindromic subsequence in a string.",
      difficulty: "Hard",
      example: "Input: 'bbbab' → Output: 4",
      starterCode: {
        javascript: "function longestPalindromeSubseq(s) {\n  // your code here\n}",
        python: "def longest_palindrome_subseq(s):\n    # your code here",
        java: "int longestPalindromeSubseq(String s) {\n  // your code here\n}"
      }
    }
  ]
},

// greedy Algoritham Problems

{
  topic: "Greedy Algorithm",
  problems: [
    {
      id: 1051,
      title: "Assign Cookies",
      description: "Assign cookies to children in a way to maximize the number of content children.",
      difficulty: "Easy",
      example: "Input: g = [1,2], s = [1,2,3] → Output: 2",
      starterCode: {
        javascript: "function findContentChildren(g, s) {\n  // your code here\n}",
        python: "def find_content_children(g, s):\n    # your code here",
        java: "int findContentChildren(int[] g, int[] s) {\n  // your code here\n}"
      }
    },
    {
      id: 1052,
      title: "Lemonade Change",
      description: "Each customer pays with $5, $10, or $20. Return true if change can be given to every customer.",
      difficulty: "Easy",
      example: "Input: [5,5,10] → Output: true",
      starterCode: {
        javascript: "function lemonadeChange(bills) {\n  // your code here\n}",
        python: "def lemonade_change(bills):\n    # your code here",
        java: "boolean lemonadeChange(int[] bills) {\n  // your code here\n}"
      }
    },
    {
      id: 1053,
      title: "Jump Game",
      description: "Determine if you can reach the last index in the array.",
      difficulty: "Medium",
      example: "Input: [2,3,1,1,4] → Output: true",
      starterCode: {
        javascript: "function canJump(nums) {\n  // your code here\n}",
        python: "def can_jump(nums):\n    # your code here",
        java: "boolean canJump(int[] nums) {\n  // your code here\n}"
      }
    },
    {
      id: 1054,
      title: "Minimum Number of Arrows to Burst Balloons",
      description: "Find the minimum number of arrows needed to burst all balloons.",
      difficulty: "Medium",
      example: "Input: [[10,16],[2,8],[1,6],[7,12]] → Output: 2",
      starterCode: {
        javascript: "function findMinArrowShots(points) {\n  // your code here\n}",
        python: "def find_min_arrow_shots(points):\n    # your code here",
        java: "int findMinArrowShots(int[][] points) {\n  // your code here\n}"
      }
    },
    {
      id: 1055,
      title: "Non-overlapping Intervals",
      description: "Remove the minimum number of intervals to make the rest non-overlapping.",
      difficulty: "Medium",
      example: "Input: [[1,2],[2,3],[3,4],[1,3]] → Output: 1",
      starterCode: {
        javascript: "function eraseOverlapIntervals(intervals) {\n  // your code here\n}",
        python: "def erase_overlap_intervals(intervals):\n    # your code here",
        java: "int eraseOverlapIntervals(int[][] intervals) {\n  // your code here\n}"
      }
    },
    {
      id: 1056,
      title: "Gas Station",
      description: "Find the starting gas station index to complete the circuit.",
      difficulty: "Medium",
      example: "Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2] → Output: 3",
      starterCode: {
        javascript: "function canCompleteCircuit(gas, cost) {\n  // your code here\n}",
        python: "def can_complete_circuit(gas, cost):\n    # your code here",
        java: "int canCompleteCircuit(int[] gas, int[] cost) {\n  // your code here\n}"
      }
    },
    {
      id: 1057,
      title: "Queue Reconstruction by Height",
      description: "Reconstruct queue based on people’s height and position.",
      difficulty: "Medium",
      example: "Input: [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]] → Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]",
      starterCode: {
        javascript: "function reconstructQueue(people) {\n  // your code here\n}",
        python: "def reconstruct_queue(people):\n    # your code here",
        java: "int[][] reconstructQueue(int[][] people) {\n  // your code here\n}"
      }
    },
    {
      id: 1058,
      title: "Candy Distribution",
      description: "Distribute candies to children according to their ratings.",
      difficulty: "Hard",
      example: "Input: [1,0,2] → Output: 5",
      starterCode: {
        javascript: "function candy(ratings) {\n  // your code here\n}",
        python: "def candy(ratings):\n    # your code here",
        java: "int candy(int[] ratings) {\n  // your code here\n}"
      }
    },
    {
      id: 1059,
      title: "Task Scheduler",
      description: "Find the least interval the CPU will take to finish all tasks.",
      difficulty: "Hard",
      example: "Input: tasks = ['A','A','A','B','B','B'], n = 2 → Output: 8",
      starterCode: {
        javascript: "function leastInterval(tasks, n) {\n  // your code here\n}",
        python: "def least_interval(tasks, n):\n    # your code here",
        java: "int leastInterval(char[] tasks, int n) {\n  // your code here\n}"
      }
    },
    {
      id: 1060,
      title: "Minimum Cost to Hire K Workers",
      description: "Hire exactly k workers with the minimum cost under given conditions.",
      difficulty: "Hard",
      example: "Input: quality = [10,20,5], wage = [70,50,30], k = 2 → Output: 105.0",
      starterCode: {
        javascript: "function mincostToHireWorkers(quality, wage, k) {\n  // your code here\n}",
        python: "def mincost_to_hire_workers(quality, wage, k):\n    # your code here",
        java: "double mincostToHireWorkers(int[] quality, int[] wage, int k) {\n  // your code here\n}"
      }
    }
  ]
},

// all rest important topic 

{
  topic: "All Rest Topics",
  problems: [
    {
      id: 1061,
      title: "Single Number",
      description: "Every element appears twice except one. Find that single number.",
      difficulty: "Easy",
      example: "Input: [2,2,1] → Output: 1",
      starterCode: {
        javascript: "function singleNumber(nums) {\n  // your code here\n}",
        python: "def single_number(nums):\n    # your code here",
        java: "int singleNumber(int[] nums) {\n  // your code here\n}"
      }
    },
    {
      id: 1062,
      title: "Hamming Weight",
      description: "Return the number of '1' bits in the binary representation.",
      difficulty: "Easy",
      example: "Input: 00000000000000000000000000001011 → Output: 3",
      starterCode: {
        javascript: "function hammingWeight(n) {\n  // your code here\n}",
        python: "def hamming_weight(n):\n    # your code here",
        java: "int hammingWeight(int n) {\n  // your code here\n}"
      }
    },
    {
      id: 1063,
      title: "Power of Two",
      description: "Check if a number is a power of two.",
      difficulty: "Easy",
      example: "Input: 16 → Output: true",
      starterCode: {
        javascript: "function isPowerOfTwo(n) {\n  // your code here\n}",
        python: "def is_power_of_two(n):\n    # your code here",
        java: "boolean isPowerOfTwo(int n) {\n  // your code here\n}"
      }
    },
    {
      id: 1064,
      title: "Backtracking: Subsets",
      description: "Return all possible subsets (the power set) of the array.",
      difficulty: "Medium",
      example: "Input: [1,2,3] → Output: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]",
      starterCode: {
        javascript: "function subsets(nums) {\n  // your code here\n}",
        python: "def subsets(nums):\n    # your code here",
        java: "List<List<Integer>> subsets(int[] nums) {\n  // your code here\n}"
      }
    },
    {
      id: 1065,
      title: "Permutations",
      description: "Return all permutations of the input array.",
      difficulty: "Medium",
      example: "Input: [1,2,3] → Output: [[1,2,3],[1,3,2],[2,1,3]...]",
      starterCode: {
        javascript: "function permute(nums) {\n  // your code here\n}",
        python: "def permute(nums):\n    # your code here",
        java: "List<List<Integer>> permute(int[] nums) {\n  // your code here\n}"
      }
    },
    {
      id: 1066,
      title: "Sudoku Solver",
      description: "Write a program to solve a Sudoku puzzle by filling empty cells.",
      difficulty: "Hard",
      example: "Input: Board with '.' → Output: Solved board",
      starterCode: {
        javascript: "function solveSudoku(board) {\n  // your code here\n}",
        python: "def solve_sudoku(board):\n    # your code here",
        java: "void solveSudoku(char[][] board) {\n  // your code here\n}"
      }
    },
    {
      id: 1067,
      title: "N-Queens",
      description: "Return all distinct solutions to the n-queens puzzle.",
      difficulty: "Hard",
      example: "Input: n = 4 → Output: All valid 4-queen arrangements",
      starterCode: {
        javascript: "function solveNQueens(n) {\n  // your code here\n}",
        python: "def solve_n_queens(n):\n    # your code here",
        java: "List<List<String>> solveNQueens(int n) {\n  // your code here\n}"
      }
    },
    {
      id: 1068,
      title: "Valid Parentheses",
      description: "Check if the input string has valid parentheses.",
      difficulty: "Easy",
      example: "Input: '()[]{}' → Output: true",
      starterCode: {
        javascript: "function isValid(s) {\n  // your code here\n}",
        python: "def is_valid(s):\n    # your code here",
        java: "boolean isValid(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 1069,
      title: "Roman to Integer",
      description: "Convert a Roman numeral to an integer.",
      difficulty: "Medium",
      example: "Input: 'MCMXCIV' → Output: 1994",
      starterCode: {
        javascript: "function romanToInt(s) {\n  // your code here\n}",
        python: "def roman_to_int(s):\n    # your code here",
        java: "int romanToInt(String s) {\n  // your code here\n}"
      }
    },
    {
      id: 1070,
      title: "Integer to English Words",
      description: "Convert a non-negative integer to its English words representation.",
      difficulty: "Hard",
      example: "Input: 123 → Output: 'One Hundred Twenty Three'",
      starterCode: {
        javascript: "function numberToWords(num) {\n  // your code here\n}",
        python: "def number_to_words(num):\n    # your code here",
        java: "String numberToWords(int num) {\n  // your code here\n}"
      }
    }
  ]
}















];

export default problems;
