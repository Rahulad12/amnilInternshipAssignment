//example of recursive function
/***
 * @description Demostration of Recursive Function and calculate the factor of the number using Recursive Function
 * @algorithm
 * Get the number that you wanna take factor
 * Check if divisor is greater then number or not , return factor
 * If the number is not equal to 1
 *   If the number is greater than 1 , then divide the number by the iterationnumber and call the function again
 *  */

function Factor(num, divisor = 1, factors = []) {
  console.log("Given Number", num);
  console.log("To top", divisor);
  console.log(`Check (${divisor} > ${num}) :`, divisor > num);
  if (divisor > num) {
    return factors; //base case
  }
  console.log(
    `Checking Factor Logic (${num} % ${divisor} === 0): `,
    num % divisor === 0
  );
  if (num % divisor === 0) {
    factors.push(divisor); // logic defin of factor
    console.log("Inside If Block", factors);
  }
  console.log("Outside the If Block, Factors: ", factors);
  console.log("*********************************");
  return Factor(num, divisor + 1, factors); //recursive case
}
console.log(Factor(10));

//alernative of this with our recursive function
function alterFactor(num) {
  let factors = [],
    divisor;
  for (divisor = 1; divisor <= num; divisor++) {
    num % divisor === 0 ? factors.push(divisor) : "";
  }
  return factors;
}
console.log(alterFactor(1));
