/**
 * A shallow copy creates a new object or array, but the nested objects or arrays inside it are still referenced from the original. This means that if you modify the nested objects, it will also affect the original object.
 */
const original = { name: "samrat", address: { city: "jhapa" } };

const shallowCopy2 = { ...original };

shallowCopy2.address.city = "Koteshowr";

console.log(original.address.city); // 'New City' (changes are reflected in the original)
console.log(shallowCopy2.address.city); // 'New City'

/**
 * In the above example, even though shallowCopy is a new object, the address object is still shared between original and shallowCopy, so changing shallowCopy.address.city also affects original.
 */
