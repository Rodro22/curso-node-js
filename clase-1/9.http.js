/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable quotes */

const http = require("node:http");
const { findAvailablePort } = require("./10.free-port.js");

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Fin de la comunicacion");
});

findAvailablePort(desiredPort).then((port) => {
  console.log(`server listening on port ${port}`);
});
