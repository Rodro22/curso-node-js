const http = require("node:http");
const { findAvailablePort } = require("./10.free-port.js");

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo");
});

findAvailablePort(1222).then((port) => {
  console.log(`server listening on port ${port}`);
});
