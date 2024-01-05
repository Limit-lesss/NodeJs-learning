const http = require("http");
const fs = require("fs");
const url = require("url");

function myHandler(req, res) {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: "${req.url}" New req received \n`;
  const myUrl = url.parse(req.url, true);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("you are at homepage");
        break;
      case "/about":
        const name = myUrl.query.im;
        res.end(`Hello ${name}`);
        break;
      default:
        res.end("404 error");
    }
  });
}

const myServer = http.createServer(myHandler);

myServer.listen(4000, () => console.log("server started!"));
