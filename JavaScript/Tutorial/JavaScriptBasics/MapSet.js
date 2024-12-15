

let map = new Map();

map.set( '1' ,  'Str1');
map.set(1 , 'num1');

let fieldname = "age";

let john = { 
    name: "John",
    [fieldname] : 5
};

map.set( john, 123);

console.log(" Map key value : " + map.get('1'));
console.log(" Object key value : " + john["name"]);
console.log(" Object key2 value : " + john["age"]);

