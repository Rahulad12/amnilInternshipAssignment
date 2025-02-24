/**
 * continue statement
 * used to skip the current iteration and continue with the next iteration.
 * So the scenerio is if the statement is there having a condition that is true then it will skip the current iteration and continue with the next iteration.
 */
function continueStatement() {

  const users = ["rahul", "john", "gopal", "Hari"];
  for (let i = 0; i < users.length; i++) {
    if (users[i] === "rahul") { //if user is rahul it will find true and skip and iterrate other
      continue;
    }
    console.log(users[i]);
  }
}

continueStatement();
