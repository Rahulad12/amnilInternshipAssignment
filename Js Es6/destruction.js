//object destruction

const user = {
    name: "Alice",
    age: 25,
    location: "New York"
};

const { name, age } = user;

console.log(name); // Alice
console.log(age);  // 25


//what we should not do while destruction the object

const { username } = user;
console.log(username); // undefined (user has no `username` property)

// how we can fix this
// const {username = "rahul"} = user;
// console.log(username);

// **************************************************************************

//Array destruction
const colors = ["red", "green", "blue"];

const [first, second] = colors;

console.log(first);  // red
console.log(second); // green


// what is wrong in array destruction 
const [one, two, three, four] = colors;
console.log(four); // undefined  (only 3 elements in the array)

//how we can tackel
// const [one, two, three, four = "defaultColor"] = colors;
// console.log(four); // defaultColor 
