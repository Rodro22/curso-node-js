/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

import { readFile } from "node:fs/promises";

// Esto es en paralelo
Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, secondText]) => {
  console.log("Primer texto: ", text);
  console.log("Segundo texto: ", secondText);
});
