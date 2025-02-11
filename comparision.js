//comparision operator function

/**
 * comparisionOperator function
 *
 * This function will compare two values using the six comparison operators
 * and log the results to the console.
 * so let us make one scenario where there will be two values to compare one is
 * a login token and another is previous browser login token saved in database
 * token_1 = 12323123123123
 * token_2 = 12323123123123
 *
 * The comparison operators that are valid are:
 *  - '==='
 *  - '!=='
 *  - '=='
 *  - '!='
 *  - '<'
 *  - '>'
 *  - '<='
 *  - '>='
 *
 * @throws {Error} If the operator is not one of the
 *    valid comparison operators.
 */
function comparisionOperator(token_1, token_2) {
  console.log("Strictly Equal To", token_1 === token_2);
  console.log("Strictly Not Equal To", token_1 !== token_2);
  console.log("Equal To", token_1 == token_2);
  console.log("Not Equal To", token_1 != token_2);
  console.log("Less Than", token_1 < token_2);
  console.log("Greater Than", token_1 > token_2);
  console.log("Less Than Or Equal To", token_1 <= token_2);
  console.log("Greater Than Or Equal To", token_1 >= token_2);
}
comparisionOperator("12323123123123", "12323123123123"); // same reference
console.log("\n");
comparisionOperator("12323123123123", "12323123123124"); // different reference
