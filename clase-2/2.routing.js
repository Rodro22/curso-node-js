/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */

const http = require("node:http");

// commonJS -> modulos clásicos de node
const dittoJSON = require("./pokemon/ditto.json");
const pikachuJSON = require("./pokemon/pikachu.json");

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(dittoJSON)); // Primero se transforma el JSON en string antes de enviarlo
        case "/pokemon/pikachu":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(pikachuJSON)); // Primero se transforma el JSON en string antes de enviarlo
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
      }

    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";

          // Escuchar el evento data
          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          // Termina de llegar la informacion
          req.on("end", () => {
            const data = JSON.parse(body);
            // llamar a una base de datos para guardar la info
            res.writeHead(201, {
              "Content-Type": "application/json; charset=utf-8",
            });

            data.timestamp = Date.now();
            res.end(JSON.stringify(data));
          });

          break;
        }

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          return res.end("404 Not Found");
      }
  }
};

const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.log("server listening on port http://localhost:1234");
});
