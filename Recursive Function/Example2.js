/**
 * Liner Search of Recursive ALgorithm
 * @description Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.
 * @algorithm or @pseudocode
 * LinearSearch (array, index, key):
    if index < 0:
        return -1;
    if item = key:
        return index
    return LinearSearch (array, index-1, key)
    [1,2,3,4,5,6,10,49,500]
 */
function linerSearch(array, index, key) {
  console.log(array);
  console.log("In Top");
  console.log("Index: ", index);
  console.log("Value of index in arrary: ", array[index - 1]);

  console.log("Key: ", key);
  console.log(`Check (${index} <= 0) :`, index <= 0);
  console.log(
    `Check (${array[index - 1]} == ${key}) :`,
    array[index - 1] == key
  );

  if (index <= 0) {
    return -1;
  } else if (array[index - 1] == key) {
    return index - 1;
  }
  console.log("In Bottom");
  console.log("Index: ", index);
  console.log("Key: ", key);
  console.log("Calling Function Recursively");
  console.log("******************************************");
  return linerSearch(array, index - 1, key);
}
//calling function
let array = [10, 80, 96, 40];
let index = array.length;
let key = 80;

let res = linerSearch(array, index, key);
if (res === -1) {
  console.log(`No any element found of ${key}`);
} else {
  console.log(`The ${key} is Found in ${res} index`);
}
