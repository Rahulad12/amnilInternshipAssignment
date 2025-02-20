//basic object creation and Accessing Object
/**
 * const objname = {
 * key1:value1,
 * key2:value2,
 * key3:value3
 * nthkey:nthvalue
 *
 * }
 * ? = Optional Chaning
 * Optional Chaining (?.) helps avoid runtime errors but still returns undefined if the property doesn't exist.
 */

const Student = {
  name: "John",
  age: 20,
  gender: "male",
  rollno: 12,
  class: 10,
  section: "A",
  hobbies: ["reading", "games", "coding"],
  message: function () {
    console.log("My name is ", this.name);
  },
  subject: {
    sub1: "Maths",
    sub2: "Science",
    sub3: "English",
  },
};
//accessing object properties
console.log(Student);

// Accessing using Dot Notation"
console.log("The name of student is: ", Student.name);
console.log("All Subect That Studnet Enrolled: ", Student.subject);

//Accessing Each students and return them in array
console.log("Accessing All Subject in Array");
const sub = Object.values(Student.subject).map((element) => {
  console.log(element);
});
console.log("Checking Type return value is array or not: ", Array.isArray(sub));

// Accessing Using Bracket Notation where we use key as index
console.log("The gender of student is: ", Student["gender"]);
console.log("The Age of Student is : ", Student["age"]);
Student.message();
console.log("Student hobbies", Student.hobbies);
console.log("My hobbies is: ",Student.hobbies[2])
