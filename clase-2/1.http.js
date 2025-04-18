/* eslint-disable semi */
/* eslint-disable quotes */

const http = require("node:http");
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/") {
    res.end("<h1>Bienvenido a mi pagina de inicio</h1>");
  } else if (req.url === "/imagen.png") {
    fs.readFile("./imagen.png", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("<h1>Internal server error</h1>");
      } else {
        res.setHeader("Content-Type", "image/png");
        res.end(data);
      }
    });
  } else if (req.url === "/contacto") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>Contacto</h1>");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>404</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost/${desiredPort}`);
});
