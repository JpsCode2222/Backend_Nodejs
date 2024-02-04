// require http
const http = require("http");
const fs = require("fs");

// createServer
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} new req recieved`;
  fs.appendFile("log.txt", log, (err, dat) => {
    switch (req.url) {
      case "/":
        res.end("home page");
        break;
      case "/about":
        res.end("about page");
        break;
      default:
        res.end("404 NOT FOUND");
        break;
    }
  });
});

// port init using listen
myServer.listen(1000, () => {
  console.log("server start on port 1000");
});
