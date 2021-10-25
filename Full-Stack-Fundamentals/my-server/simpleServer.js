const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Server Created.");
  res.end();
});

server.listen(8080, () => {
  console.log("Server started at port 8080.");
});
