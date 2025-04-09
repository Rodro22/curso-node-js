/* eslint-disable semi */
/* eslint-disable quotes */

const fs = require("node:fs");

// Eso es sincrono
const stats = fs.statSync("./archivo.txt");

// Recuperamos informacion del sistema de archivos

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
);
