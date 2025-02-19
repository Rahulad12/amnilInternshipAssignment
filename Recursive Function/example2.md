# Recursive Linear Search in JavaScript

## Introduction
This repository contains an implementation of the **Linear Search Algorithm** using **Recursion** in JavaScript. Linear search is a simple searching technique that checks each element in an array sequentially to find a target value.

## Algorithm Explanation
### **What is Linear Search?**
Linear Search is a **sequential search algorithm** that starts from the first element of the array and goes through each element until it finds the desired element or reaches the end of the array.

### **Recursive Approach**
In this implementation, we use **recursion** to search for the element:
- Base Case: If the index is `0` (end of recursion), return `-1` (element not found).
- If the current element matches the target, return its index.
- Otherwise, call the function recursively with `index - 1`.

## Code Implementation
```javascript
/**
 * Recursive Linear Search Algorithm
 * @param {Array} array - The array to search in
 * @param {Number} index - The current index to check
 * @param {Number} key - The value to search for
 * @returns {Number} - The index of the key if found, otherwise -1
 */
function linerSearch(array, index, key) {
  console.log("In Top");
  console.log("Index:", index);
  console.log("Value of index in array:", array[index - 1]);
  console.log("Key:", key);
  console.log(`Check (${index} <= 0) :`, index <= 0);
  console.log(`Check (${array[index - 1]} == ${key}) :`, array[index - 1] == key);
  
  if (index <= 0) {
    return -1;
  } else if (array[index - 1] == key) {
    return index - 1;
  }
  console.log("In Bottom");
  console.log("Index:", index);
  console.log("Key:", key);
  console.log("Calling Function Recursively");
  console.log("******************************************");
  return linerSearch(array, index - 1, key);
}

// Calling function
let array = [10, 80, 96, 40];
let index = array.length;
let key = 80;

let res = linerSearch(array, index, key);
if (res === -1) {
  console.log(`No element found with value ${key}`);
} else {
  console.log(`The ${key} is Found at index ${res}`);
}
```

## Execution Steps
1. The function starts from the last index of the array.
2. It checks if the current element matches the key.
3. If a match is found, the function returns the index.
4. If not, the function calls itself recursively with `index - 1`.
5. If the function reaches index `0`, it returns `-1` (not found).

## Sample Output
```
[ 10, 80, 96, 40 ]
In Top
Index:  4
Value of index in array:  40
Key:  80
Check (4 <= 0) : false
Check (40 == 80) : false
In Bottom
Index:  4
Key:  80
Calling Function Recursively
******************************************
[ 10, 80, 96, 40 ]
In Top
Index:  3
Value of index in array:  96
Key:  80
Check (3 <= 0) : false
Check (96 == 80) : false
In Bottom
Index:  3
Key:  80
Calling Function Recursively
******************************************
[ 10, 80, 96, 40 ]
In Top
Index:  2
Value of index in array:  80
Key:  80
Check (2 <= 0) : false
Check (80 == 80) : true
The 80 is Found at index 1

=== Code Execution Successful ===
```

## Complexity Analysis
- **Time Complexity:** `O(n)`, where `n` is the number of elements in the array.
- **Space Complexity:** `O(n)`, because of recursive function calls (stack memory usage).

## Advantages & Disadvantages
### ✅ Advantages:
- Simple and easy to implement.
- Works for both sorted and unsorted arrays.
- Useful when the array is small.

### ❌ Disadvantages:
- Inefficient for large datasets compared to binary search (`O(n)` vs. `O(log n)`).
- Uses additional space due to recursion.
