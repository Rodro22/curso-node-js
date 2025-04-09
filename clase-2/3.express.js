/* eslint-disable semi */
/* eslint-disable quotes */
const ditto = require("./pokemon/ditto.json");
const express = require("express");
const app = express();
app.disable("x-powered-by");

const PORT = process.env.PORT ?? 1234;

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

app.get("/pokemon/ditto", (req, res) => {
  //   res.status(200).send("<h1>Mi pagina</h1>");
  res.json(ditto);
});

app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

// La ultima a la que va a llegar
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log("server listening");
});
