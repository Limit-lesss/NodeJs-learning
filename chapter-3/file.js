const fs = require("fs");

// fs.writeFileSync("./test.txt" , "hello")

// console.log("1");
// //! blocking operation
// const res = fs.readFileSync("./test.txt", "utf-8");
// console.log(res);

// console.log("2");

console.log("1");

//! non blocking operation
fs.readFile("./test.txt", "utf-8", (err, res) => {
  if (err) console.log(err);
  else console.log(res);
});
fs.appendFile("./test.txt", "two",(err) => {});
fs.readFile("./test.txt", "utf-8", (err, res) => {
    if (err) console.log(err);
    else console.log(res);
  });
console.log("2");
console.log("3");
