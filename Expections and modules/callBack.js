//A callback is a function passed as an argument to another function, and it's usually called later (sometimes after an async task or an event).

function greet(name, callback) {
    console.log("Hi " + name);
    callback();
}

function sayBye() {
    console.log("Bye!");
}

greet("Alice", sayBye); // here i am passing two argument and last one is the call back function

//illustration callback with setTimeout
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000); 

console.log("End");

//when to use call back 
// Handling asynchronous code (like fetching data or waiting for timeouts)

// Processing items in a reusable way

// Event listeners

