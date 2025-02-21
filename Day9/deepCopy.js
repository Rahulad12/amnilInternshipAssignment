/**
 * A deep copy creates a new object or array and also recursively copies all nested objects or arrays. Changes to the deep copy will not affect the original.
 */

const original = { name: "samrat", address: { city: "jhapa" } };

const deepCopy = JSON.parse(JSON.stringify(original));
console.log(deepCopy)

deepCopy.address.city = "koteshowr";

console.log(original.address.city); // 'Wonderland' (original remains unchanged)
console.log(deepCopy.address.city); // 'New City'
