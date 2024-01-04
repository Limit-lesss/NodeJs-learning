const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: "${req.url}" New req received \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("you are at homepage");
        break;
      case "/about":
        res.end("i am genius");
        break;
      default:
        res.end("404 error");
    }
  });
});

myServer.listen(4000, () => console.log("server started!"));
