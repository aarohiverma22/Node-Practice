const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.header);
  console.log(res);
  console.log("Server ended");
});
server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
  process.exit();
});
