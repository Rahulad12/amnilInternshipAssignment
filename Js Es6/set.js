//what is right 
const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(2); // Duplicate, will be ignored

console.log(numbers); // Set(3) { 1, 2, 3 }

console.log(numbers.has(2)); // true
console.log(numbers.size);   // 3

numbers.delete(1);
console.log(numbers); // Set(2) { 2, 3 }

numbers.clear();
console.log(numbers); // Set(0) {}

//what is wrong 
const names = new Set(["Alice", "Bob", "Alice", "Charlie"]);
console.log(names); 
// Set(3) { 'Alice', 'Bob', 'Charlie' } → "Alice" is only added once

names.add("Bob");
console.log(names.size); 
// Still 3 → Set ignores duplicate values


//set donot take a duplicate value so if we want to remove any duplicate value in array we can use set