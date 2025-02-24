let arr = [2, 1, 4, 3, 6, 7, 5];

arr[3] = 60

//using push method this will add the element in the end
arr.push(9);
console.log("Adding 9 using push", arr, typeof arr);
console.log("\n")

//Using pop method , It wills Removes last elements
let popElement = arr.pop();
console.log("poped",popElement)
console.log("Removing last element Using pop",arr, typeof arr);
console.log("\n")

//shift, Shift remove the first element
console.log("Before Shift...",arr , typeof arr)
let shifted = arr.shift()
console.log("Shifted",shifted)
console.log("After shift...",arr,typeof arr)
console.log("\n")

//Using unshift remove the first element
console.log("Before using unshift...",arr,typeof arr);
arr.unshift(2);
console.log("After Using Unshift.. adding 2",arr,typeof arr);
console.log("\n")

// The splice() method adds new elements to an array, and returns an array with the deleted elements (if any):
let removed = arr.splice(2, 1, "Lemon", "Kiwi");
console.log("Removed Item",removed)
console.log("Using splice method new array",arr);
console.log("\n")

//sort method is used to sort the element 
arr.sort();
console.log("The sorting array", arr);
console.log("\n")

//reversed number 
arr.reverse()
console.log("Reversed array is: ", arr)
console.log("\n")

console.log("****************Array Is String**********************")
console.log("\n")
//array is string

let name = ["rahul", "ram", "shyam", "hari", "gopal"];
console.log("original arary", name);
console.log("\n")

name[4] = "sagar";
console.log("Adding 'sager' at index 4 of array", name);
console.log("\n")

let popedElement = name.pop();
console.log("poped element", popedElement);
console.log("Array",name);
console.log("\n")

let shiftedElement = name.shift();
console.log("Extraced Element", shiftedElement);
console.log("Array",name);
console.log("\n")

name.unshift("amnil");
console.log("adding amnil using 'USHIFT' method", name);
console.log("\n")

//sort method - This is used to sort the arrary either descending or ascending order or alphabetic order
name.sort();
console.log("The sortinig name", name);
console.log("\n")

//reverse method => This is used to reversed the element
name.reverse();
console.log("Reversed name", name);
console.log("\n")

