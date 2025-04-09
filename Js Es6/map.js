// to create Map 

const map = new Map();
console.log(map)

//to insert item to map

let map1 = new Map();

map1.set("key1", "value1");
map1.set("key2", "value2");

console.log(map1);

// we can also set obj in map 

const obj = {
    name: "samrat",
    age: 24
}

map1.set(obj, "samrat");

console.log(map1);

//accessing map element

console.log(map1.get("key1"));
console.log(map1.get(obj));

//removing the map element

map1.delete("key1");
console.log(map1);