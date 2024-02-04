// url : Uniform resource locator
// https://wwww.google.com/search?search_query
// protocol    domain       path  query

// http: hypertext transfer protocol
// https: hypertext transfer protocol secure

const http = require("http");
const url = require("url");

const myserver = http.createServer((req, res) => {
  const myurlquery = url.parse(req.url, true).query;
  const user = myurlquery.user;
  console.log(user);
  res.end("done");
});

myserver.listen(1000, (err, data) => {
  if (!err) console.log("Server Start");
});
