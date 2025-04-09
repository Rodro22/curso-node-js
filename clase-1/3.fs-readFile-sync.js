/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable quotes */

const fs = require("node:fs");

console.log("Leyendo el primer archivo...");

const text = fs.readFileSync("./archivo.txt", "utf-8");
console.log(text);

console.log("Hacer algo entre los llamados"); // hace esto 2

console.log("Leyendo el segundo archivo..."); // hace esto 3

const secondText = fs.readFileSync("./archivo2.txt", "utf-8");
console.log(secondText);
