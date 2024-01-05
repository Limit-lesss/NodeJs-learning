const express = require("express");
const port = 4000;
const app = express();

app.get("/", (req, res) => res.send("Welcome to homepage"));
app.get("/about", (req, res) => res.send(`Hello ${req.query.name}`));

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log("server is running on port: " + port);
});
