/**
 * Iterates over: Enumerable property keys (names) of an object.
 * syntax
 * for (let key in object) {
  console.log(key, object[key]);
}
 * when to use
 * when looping over object properties
 */
const Student = {
  name: "John",
  age: 20,
  gender: "male",
  rollno: 12,
  class: 10,
  section: "A",
  subject: {
    sub1: "Maths",
    sub2: "Science",
    sub3: "English",
  },
};

for (keys in Student) {
  //   console.log(`The keys are ${keys}`);
  console.log(keys, Student[keys]);
}

//example2
const arr = ["a", "b", "c"];

console.log("Using for...in:");
for (let index in arr) {
  console.log(index); // Outputs: 0, 1, 2
}
