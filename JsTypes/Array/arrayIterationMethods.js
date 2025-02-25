let arr1 = ["champaklal", "jethalal", "popatlal"];
let arr2 = ["Bhide", "Tarak", "abdul", "Dr.Hansraj hati"];
let newarr = arr2.concat(arr1);

/**
 * forEach()
 * It excecutes a function for each element
 */
console.log("Illustration Foreach method");
newarr.forEach((e, index) => {
  console.log(`At ${index} we have ${e}`);
});
console.log("\n");

/**
 * map()
 * Returns new array by applying a function
 */

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Array", num);
let squaredeven = num.map((e) => (e % 2 === 0 ? e * e : e));
console.log(squaredeven);

/**
 * filter()
 * Return element that pass the test
 */
let odds = num.filter((e) => e % 2 !== 0);
console.log(odds);

/**
 * reduce()
 * It reduce the array to single value basically it works like a +=b
 */

let mul = num.reduce((acc, curr) => acc * curr, 1);
console.log(mul);

/**
 * some()
 * Checks if at least one element is passes a test or not
 */
console.log(num.some((e) => e > 3));

/**
 * find()
 * Returns first matching element
 */
console.log("First element less then 6",num.find((e) => e < 6));
console.log("First element greater then 6",num.find((e) => e > 6));

/**
 * findIndex()
 *  Returns the index of the first matching element.
 */
console.log("Index of first matching condition from element",num.findIndex((e)=>e > 3))