const fs = require("fs");

//sync
// fs.writeFileSync("./test.txt", "hello dear");

// //Async
// fs.writeFile("./test.txt", "hello again", (err) => {});

const res = fs.readFileSync("./test.txt", "utf-8");
console.log(res);