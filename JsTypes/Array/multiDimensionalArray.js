//illustrating the muiltidimensional array
/**
 * array can also be multidimensional
 * it can be 2D, 3D, 4D and so on
 */

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//array indexing
/**
 * arr[row][column]
 * arr[0] will give [1,2,3]
 * arr[1] will give [4,5,6]
 * arr[2] will give [7,8,9]
 */
console.log(arr[0][0]); //1
console.log(arr[0][1]); //2
console.log(arr[0][2]); //3
console.log(arr);

// declare three arrays
let person1 = ["Ram", 24];
let peroson2 = ["Gopal", 23];
let person3 = ["Hari", 24];

// create multidimensional array
// using person1, person2, and person3
let personData = [person1, peroson2, person3];

// print the multidimensional array
console.log(personData);

//adding element in multidimensional array
arr[0][0] = 10;
console.log(arr);

//using push method
personData.push(["Sita", 23]);
console.log(personData);


//removing element from multidimensional array
//using pop method
arr.pop();
console.log(arr);

//using splice method
let data = personData.splice(1, 1);
console.log(data);
console.log(personData);


