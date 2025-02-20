//basic object creation and Manipulating Objects
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
    subject: {
      sub1: "Maths",
      sub2: "Science",
      sub3: "English",
    },
  };

  // manipulating object properties
Student.age = 30;
console.log(Student);
console.log("After Changing the value of age ", Student.age);

//adding new properties in objects
Student.faculty = "engineering";

Student.address = {
  country: "Nepal",
  district: "Kathmandu",
  city: "Koteshowr",
};
console.log("Student Ater Adding New Properties Faculty and Address ", Student);

// Acessing All element in an array
console.log("Accessing all element is Array");
Object.values(Student).forEach((s) => {
  //   console.log(s?.sub1);
  console.log(s);
});