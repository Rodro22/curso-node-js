/* eslint-disable semi */
/* eslint-disable quotes */
// Esto es solo en los modulos nativos que no tienen promesas nativas
// const {promisify} = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const fs = require("node:fs/promises");

fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("Primer texto: ", text);
});

console.log("Hacer algo entre los llamados");

fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("Segundo texto: ", text);
});
