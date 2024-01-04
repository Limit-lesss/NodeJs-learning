const fs = require("fs");

//sync
// fs.writeFileSync("./test.txt", "hello dear");

// //Async
// fs.writeFile("./test.txt", "hello again", (err) => {});

// const res = fs.readFileSync("./test.txt", "utf-8");
// console.log(res);

// fs.appendFileSync("./test.txt", `\n${Date.now()}`); //! add file

// fs.readFile("./test.txt", "utf-8", (error, res) => {
//   console.log(res);
// }); //! read file

// fs.cpSync("./test.txt", "./copy.txt") //! copy file
// fs.unlinkSync("./copy.txt"); //! delete file

console.log(fs.statSync("./test.txt"));
