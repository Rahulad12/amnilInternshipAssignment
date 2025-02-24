/**
 * This function will search for a number in array and return "Found" if number is available or "Not Found" if number is not available
 * 
 * this also illustrate break statement
 */
// for loop
const searchNumber = (number, array) => {
  let result = "Not Found";
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) {
      result = `Found at index ${i}`;
      break;
    }
  }
  return result;
};
console.log("For Loop");
console.log(searchNumber(3, [1, 2, 3, 4, 5])); // Found
console.log(searchNumber(6, [1, 2, 3, 4, 5])); // Not Found

console.log("\n");



/**
 * This function will search for a number in array and return "Found" if number is available or "Not Found" if number is not available
 * It will use while loop to search for the number
 */
function searchNumberWhile(number, array) {
  let result = "Not Found";
  let i = 0;
  while (i < array.length) {
    if (number === array[i]) {
      result = `Found at index ${i}`;
      break;
    }
    i++;
  }
  return result;
}
console.log("For while Loop");
console.log(searchNumberWhile(4, [1, 2, 3, 4, 5])); // Found
console.log(searchNumberWhile(6, [1, 2, 3, 4, 5])); // Not Found 

console.log("\n");

/**
 * This function will search for a number in array and return "Found" if number is available or "Not Found" if number is not available
 * It will use do while loop to search for the number
 */
function searchNumberDoWhile(number, array) {
  let result = "Not Found";
  let i = 0;
  do {
    if (number === array[i]) {
      console.log(i);
      result = `Found at index ${i}`;
      break;
    }
    i++;
  } while (i < array.length);
  return result;
}
console.log("For Do while Loop");
console.log(searchNumberDoWhile(4, [1, 2, 3, 4, 5])); // Found
console.log(searchNumberDoWhile(6, [1, 2, 3, 4, 5])); // Not Found

console.log("\n");

// for nested loop

/**
 * This function compares two arrays to find a common element.
 * It returns the indices of the first occurrence of a matching element
 * in both arrays, or "Not Found" if no matching element exists..
 */

function nestedLoop(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return `Found at index ${i} and ${j}`;
      }
    }
  }
  return "Not Found";
}
console.log("For Nested Loop");
console.log(nestedLoop([1, 2, 3], [4, 5, 6]));  // Not Found 
console.log(nestedLoop([1, 2, 3, 4, 5], [2, 5, 1])); // Found 