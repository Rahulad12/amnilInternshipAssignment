//illustrating the js numbers

let number = 10;
console.log(number, typeof number);

//decimal number
let decimal = 10.5;
console.log(decimal, typeof decimal);

//exponential number
let exponential = 2e3;
console.log(exponential, typeof exponential);

let res1 = number + "rahul";
console.log(res1, typeof res1);

let res2 = number - "rahul";
console.log(res2, typeof res2);

//js number method
/**
 * isNaN()
 * how this method works => it convert input into number and check whether the value is NaN or not
 */
let num = 10;
console.log(isNaN(num)); //false

let num3 = "10";
console.log(isNaN(num3)); //false

let num4 = "rahul";
console.log(isNaN(num4)); //true

/**
 * isFInite()
 * how this method works => it convert input into number  and check whether the passed value is finite or not
 */
let num1 = 10;
console.log(isFinite(num1)); //true

let num2 = 10 / 0;
console.log(isFinite(num2)); //false

console.log(isFinite(Infinity)); //false

console.log(isFinite(undefined)); //false

console.log(isFinite(NaN)); //false

console.log(isFinite(null)); //true
/**
 * why null is true here because of type corecion , null is converted to 0
 */

/**
 * parseInt()
 * how this method works => it convert string into number
 */

let num5 = "10";
let num5res = parseInt(num5);
console.log(num5res, typeof num5res); //10

let num7 = 10.5;
let num7res = parseInt(num7);
console.log(num7res, typeof num7res); //10
/**
 * parseFloat()
 */
let num6 = "10.5";
let num6res = parseFloat(num6); 
console.log(num6res, typeof num6res); //10.5

/**
 * toFixed()
 * how this method works => it convert number into string and round off the number to the given decimal places
 */
let num8 = 10.123456;
let fix = num8.toFixed(2);
console.log(fix, typeof fix); //10.12
