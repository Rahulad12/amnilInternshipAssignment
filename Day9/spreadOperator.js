/**
 *  Spread Operator
The spread operator is used to "spread" or unpack elements from an array or object. It's typically used to copy or merge arrays/objects or pass arguments to a function.

Arrays: It spreads the elements of an array into another array.
Objects: It spreads the properties of an object into another object.
 */
const person = ["sagar", "Hari", "gopal"];
const newPerson = [...person, "rahul", "shyam"];
console.log("Person Before using spread operator: ", person);
console.log("Illustration of the spread operator: ", newPerson);

//in object
const obj1 = { name: "Alice", age: 25 };
const obj2 = { age: 30, country: "Wonderland" };
const mergedObj = { ...obj1, ...obj2 };

console.log("Mergig the operator using spread operator", mergedObj);
