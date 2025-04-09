/* eslint-disable semi */
/* eslint-disable quotes */

// Libreria para acceder a los datos de la pc del usuario
const os = require("node:os");

// Informacion sobre la pc del usuario
console.log(os.platform());
console.log(os.release());
console.log(os.arch());
console.log(os.cpus());

console.log(globalThis); // Console, fetch, promise, todo esto y mas sale de esta variable.
