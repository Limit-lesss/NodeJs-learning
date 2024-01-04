// So, using module.exports and exports in the same file overrides the value of exports. And should not use both of them in the same file or module.
const { add, sub, multiply, name } = require("./operations");
const { name: names } = require("./experiment");

console.log(add(4, 3), sub(5, 2), multiply(5, 2));
console.log(name, names);


