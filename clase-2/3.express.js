/* eslint-disable semi */
/* eslint-disable quotes */

const ditto = require("./pokemon/ditto.json");
const pikachu = require("./pokemon/pikachu.json");

const express = require("express");
const app = express();

app.disable("x-powered-by");

const PORT = process.env.PORT ?? 1234;

// Este es el middleare, trata el POST antes de hacerlo
app.use((req, res, next) => {
  if (req.method !== "POST") return next();
  if (req.headers["content-type"] !== "aplication/json") return next();

  // solo llegan request que son POST y que tienen el header Content-Type: application/json
  let body = "";

  // escuchar el evento data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = JSON.parse(body);
    data.timestamp = Date.now();
    // mutar la request y meter la info en el req.body
    req.body = data;
    next();
  });
});

app.get("/", (req, res) => {
  res.status(200).send("<h1>Pagina Principal</h1>");
});

app.get("/pokemon/ditto", (req, res) => {
  //   res.status(200).send("<h1>Mi pagina</h1>");
  res.json(ditto);
});

app.get("/pokemon/pikachu", (req, res) => {
  //   res.status(200).send("<h1>Mi pagina</h1>");
  res.json(pikachu);
});

app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

// La ultima ruta a la que va a llegar, es por defecto, siempre va al final
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
