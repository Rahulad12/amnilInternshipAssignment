//illustraing exmaple of string type in javascript
//String is a sequence of characters enclosed in single or double quotes

let firstName = "Rahul";
let secondName = "Adhikari";

let res = `My name is ${firstName} ${secondName}`;
console.log(res);

//String methods
//length
let len = firstName.length;
console.log(len);

//charAt
let char = firstName.charAt(0);
console.log(char);

//charCodeAt
let charCode = firstName.charCodeAt(0);
console.log(charCode);

//concat
let fullName = firstName.concat(" ", secondName);
console.log(fullName);

//indexOf
let index = firstName.indexOf("a");
console.log(index);

//lastIndexOf
let lastIndex = firstName.lastIndexOf("a");
console.log(lastIndex);

//replace
let replace = firstName.replace("R", "r");
console.log(replace);

//slice
let slice = firstName.slice(1, 4);
console.log(slice);

//split
let split = firstName.split("");
console.log(split);

//substr
let substr = firstName.substr(1, 3);
console.log(substr);

//substring
let substring = firstName.substring(1, 4);
console.log(substring);

//toLowerCase
let lowerCase = firstName.toLowerCase();
console.log(lowerCase);

//toUpperCase
let upperCase = firstName.toUpperCase();
console.log(upperCase);

//trim
let trim = "   hello   ";
console.log(trim.trim());

//valueOf
let value = firstName.valueOf();
console.log(value);

//includes
let include = firstName.includes("a");
console.log(include);

//repeat
let repeat = firstName.repeat(2);
console.log(repeat);

//search
let search = firstName.search("a");
console.log(search);

//match
let match = firstName.match("a");
console.log(match);
