//conditionalOperator

/**
 * if and else statement
 * Compares two tokens and logs whether they are equal or not.
 *
 * so let us make a real scenerio where there will be two values to compare one is
 * a password given by the user and another password saved in database and if the password is match user can login otherwise not
 */

function conditionalOperator(password) {
  const databasePassword = "Rahul@adhikari"; // password saved in database
  if (password === databasePassword) {
    return "SuccessFully Logined";
  } else {
    return "Invalid password";
  }
}
//valid password
console.log(conditionalOperator("Rahul@adhikari"));
//invalid password
console.log(conditionalOperator("Rahul@123"));

console.log("\n");
// if and else if and else

/**
 * conditionalOperator function
 * and return either "SuccessFully Logined" or "Invalid password". *
 * so the condition is
 * age < 10 is child age < 18 is teenager age > 18 is adult
 * @returns {string} - Either "SuccessFully Logined" or "Invalid password"
 */
function CheckAge(age) {
  if (age < 10) {
    return "child";
  } else if (age < 18) {
    return "teenager";
  } else {
    return "adult";
  }
}

console.log(CheckAge(15));

console.log("\n");

/**
 * nestedElse function
 *
 * This function will use nested if and else statements to compare two values
so theri a user and and user details in users we will return user details by checking if user is valid or not
 */
function nestedElse(userId, userName) {
  const _id = "1234567User";
  if (userId === _id) {
    if (userName === "Rahul") {
      return "Rahul Adhikari";
    } else {
      return "Invalid User";
    }
  } else {
    return "Server Error";
  }
}
console.log(nestedElse("1234567User", "Rahul"));
console.log(nestedElse("1234567User", "Rahul Adhikari"));
console.log(nestedElse());

