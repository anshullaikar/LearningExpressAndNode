const http = require("http");
const a = {};
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(a);
  res.write("Welcome");
  res.end();
});

server.listen(5000);
