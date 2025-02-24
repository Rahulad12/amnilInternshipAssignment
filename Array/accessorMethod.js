//this will return new arrya or value

//concat =>This will merge the array and return new array
let arr1 = ["champaklal", "jethalal", "popatlal"];
let arr2 = ['Bhide','Tarak','abdul','Dr.Hansraj hati']
console.log("Original Array1",arr1);
console.log("Original Array2",arr2)
let newarr = arr2.concat(arr1);
console.log("Array after Merging",newarr)
console.log("\n")

//slice method => this method is used to extraced partiular element using array index in slice function and return array
let part = newarr.slice(1,4)
console.log("Slicing the array from index 1 to 4",part)
/**console.log("Things to be consider here that when slicing first index will get extraced but not last one, remember like this that when we say less then 10 mean 1 to 9 not 10")**/
console.log("\n")

/**includes method => this will check wheter the comming value include in that particular array or not let us take a example let us check does rahul present in array or not using include**/

let check = newarr.includes("Rahul")
console.log("Checking rahul include in newarray or not: ",check)
console.log("\n")

/** indexof method => It will return the index of the given element */
let index = newarr.indexOf("jethalal")
console.log("Index of jethala: ",index)
console.log("\n");

/**
 * lastIndexof => Return the last index of an element
 */
let num =[1,4,5,3,99,34,78,3,99]
console.log("Array",num)
// console.log(num.indexOf(3))
console.log("The last index of three: ",num.lastIndexOf(3))
console.log("\n")

console.log("Illustrating Join Method")
console.log(newarr.join())
console.log(newarr.join(" "))
console.log(newarr.join("+"))

