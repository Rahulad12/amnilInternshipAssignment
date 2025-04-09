//spread operator is the operator that is used to spread the elements of an array or object into another array or object.
const person = ["sagar", "Hari", "gopal"];
const newPerson = [...person, "rahul", "shyam"];
console.log("Person Before using spread operator: ", person);
console.log("Illustration of the spread operator: ", newPerson);

//in object
const obj1 = { name: "Alice", age: 25 };
const obj2 = { age: 30, country: "Wonderland" };
const mergedObj = { ...obj1, ...obj2 };

console.log("Mergig the operator using spread operator", mergedObj);

//example 2

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; 

const mergedArr = [...arr1, ...arr2];

console.log(mergedArr);