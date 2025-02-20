# JavaScript Object Creation, Access, and Manipulation

This README covers the basics of creating, accessing, and manipulating objects in JavaScript, along with examples using object literals and constructor functions.

## Table of Contents
1. [Basic Object Creation](#basic-object-creation)
2. [Accessing Object Properties](#accessing-object-properties)
3. [Manipulating Object Properties](#manipulating-object-properties)
4. [Creating Objects Using Constructor Functions](#creating-objects-using-constructor-functions)

---

## Basic Object Creation

In JavaScript, objects are key-value pairs that can store data and methods.

```javascript
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
```

### Optional Chaining

The **Optional Chaining (`?.`)** operator helps avoid runtime errors when trying to access properties that may not exist.

```javascript
console.log(Student?.address?.city); // undefined (no error thrown)
```

---

## Accessing Object Properties

You can access object properties using **Dot Notation** or **Bracket Notation**.

### Dot Notation

```javascript
console.log("The name of the student is: ", Student.name);
console.log("All Subjects the Student Enrolled In: ", Student.subject);
```

### Bracket Notation

```javascript
console.log("The gender of the student is: ", Student["gender"]);
console.log("The Age of the Student is: ", Student["age"]);
```

### Accessing Nested Properties & Arrays

```javascript
console.log("Student hobbies: ", Student.hobbies);
console.log("My favorite hobby is: ", Student.hobbies[2]);

// Accessing all subjects
const sub = Object.values(Student.subject).map((element) => console.log(element));
console.log("Is the returned value an array?: ", Array.isArray(sub));
```

### Using Methods Inside Objects

```javascript
Student.message(); // Outputs: My name is John
```

---

## Manipulating Object Properties

You can dynamically update, add, or remove properties from an object.

### Updating Properties

```javascript
Student.age = 30;
console.log("After changing age: ", Student.age);
```

### Adding New Properties

```javascript
Student.faculty = "engineering";
Student.address = {
  country: "Nepal",
  district: "Kathmandu",
  city: "Koteshowr",
};

console.log("Student After Adding New Properties: ", Student);
```

### Accessing All Object Values

```javascript
Object.values(Student).forEach((value) => {
  console.log(value);
});
```

---

## Creating Objects Using Constructor Functions

Constructor functions allow for creating multiple instances of similar objects.

### Example: Profile Constructor

```javascript
function Profile() {
  this.name = "Rahul Adhikari";
  this.email = "adrahul2014@gmail.com";
  this.mobile = "9817977025";
  this.address = {
    country: "Nepal",
    district: "Jhapa",
    state: "Koshi",
    city: "Kamal-2",
  };
  this.education = {
    Higher: "BscCsit",
    University: "Thribhuvan University",
    PassingYear: 2025,
  };
}

const profile = new Profile();
console.log(profile);
console.log("Accessing Education: ", profile.education);
```

### Output:

```bash
Profile {
  name: 'Rahul Adhikari',
  email: 'adrahul2014@gmail.com',
  mobile: '9817977025',
  address: {
    country: 'Nepal',
    district: 'Jhapa',
    state: 'Koshi',
    city: 'Kamal-2'
  },
  education: {
    Higher: 'BscCsit',
    University: 'Thribhuvan University',
    PassingYear: 2025
  }
}
Accessing Education:  {
  Higher: 'BscCsit',
  University: 'Thribhuvan University',
  PassingYear: 2025
}
```

---

## Key Takeaways

1. Objects in JavaScript are versatile and can store complex data structures.
2. Dot and Bracket Notations are key for accessing object properties.
3. Optional chaining (`?.`) helps prevent errors when accessing nested properties.
4. Constructor functions allow for creating reusable object templates.


