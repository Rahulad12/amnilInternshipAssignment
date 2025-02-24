/**
 * javascript can store multiple datatype in array
 */
let mixedArray = [42, 'hello', true, { name: 'John' }, [1, 2, 3], function() { return 'Hi'; }];

console.log(mixedArray[0]); // 42 (Number)
console.log(mixedArray[1]); // 'hello' (String)
console.log(mixedArray[2]); // true (Boolean)
console.log(mixedArray[3].name); // 'John' (Object property)
console.log(mixedArray[4][1]); // 2 (Nested Array element)
console.log(mixedArray[5]()); // 'Hi' (Calling the function)
