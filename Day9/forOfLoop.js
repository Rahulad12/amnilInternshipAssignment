/**
 *  Iterates over: Iterable values like arrays, strings, maps, sets, etc.
 * syntax 
 * for (let value of iterable) {
  console.log(value);
}
  when to use?
  when looping over iterable values (arrays,string,etc).

 */

const numbers = [10, 20, 30, 40];

for (let num of numbers) {
  console.log(num);
}

//example 2
const arr = ["a", "b", "c"];
console.log("Using for...of:");
for (let value of arr) {
  console.log(value);
}
