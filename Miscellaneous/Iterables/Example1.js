// An iterable object (Array is iterable by default)
/**n iterable in JavaScript is any object that implements the Symbol.iterator method, allowing it to be iterated over using loops like for...of or methods like Array.from().**/
const numbers = [1, 2, 3];

// Using for...of loop
for (const number of numbers) {
  console.log(number);
}
// Output:
// 1
// 2
// 3
