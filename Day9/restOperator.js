/**
 * This example illustrate a rest operator in javascript
 * Rest Operator in a javascript is a type of operator that is used to represent an indefinite number of arguments as an array.
 * It can contain any number of arguments and it will be converted into an array.
 * {a,...b}= {1,2,3,4,5,6,7,8,9}
 *  Rest Operator
    The rest operator is used to collect multiple values into a single variable, which is typically used in function parameters or object/array destructuring.

    Function Parameters: It collects the remaining arguments passed to the function into an array.
    Destructuring: It collects the remaining properties from an object or elements from an array into a new variable.
 *
 */

const Revenew = [
  {
    id: 1,
    property: "property1",
    amount: 100,
  },
  {
    id: 2,
    property: "property2",
    amount: 200,
  },
  {
    id: 3,
    property: "property3",
    amount: 300,
  },
  {
    id: 4,
    property: "property4",
    amount: 400,
  },
  {
    id: 5,
    property: "property5",
    amount: 500,
  },
];
console.log(Array.isArray(Revenew));
console.log(typeof Revenew);
console.log(...Revenew);

const totalRevenew = (...Revenew) => {
  return Revenew.reduce((acc, item) => acc + item.amount, 0);
};
console.log("The total Revenwe of the company is: ", totalRevenew(...Revenew));

//example 2
// Rest operator in onject destructing
const person = { name: "Alice", age: 25, country: "Wonderland" };
const { name, ...rest} = person;

console.log(name);
console.log(rest)
console.log(rest.country);
