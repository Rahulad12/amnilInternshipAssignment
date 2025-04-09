//correct
console.log(greeting); // undefined (due to hoisting)
var greeting = "Hello!";

//wrong
console.log(nameee); // ReferenceError: Cannot access 'name' before initialization
let nameee = "John";


//in function
sayHi(); // TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};


// not in function
sayHi(); // TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};
