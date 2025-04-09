/* eslint-disable n/handle-callback-err */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable spaced-comment */

const fs = require("node:fs");

console.log("Leyendo el primer archivo..."); //hace esto 1

//Esta es una callback
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log("Leyendo el primer archivo: ", text); //hace esto 4
  //console.log(err) // esto solo lo muestra si hay un error
});

console.log("Hacer algo entre los llamados"); //hace esto 2

console.log("Leyendo el segundo archivo..."); //hace esto 3

//Esta es otra callback
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log("Leyendo el segundo archivo: ", text); //hace esto 5
});
