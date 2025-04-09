// 1. using regulare exp 

const reg = new RegExp("hello");
console.log(reg, typeof reg);

// 2. using literal

const reg1 = /hello/;
console.log(reg1, typeof reg1);

// 3. using constructor

const reg2 = RegExp("hello");
console.log(reg2, typeof reg2);