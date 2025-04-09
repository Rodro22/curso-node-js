/* eslint-disable semi */
/* eslint-disable quotes */

const path = require("node:path");

// barra separadora de carpetas
console.log(path.sep);

// unir rutas con path.join
const filePath = path.join("content", "subfolder", "archivo.txt");
console.log(filePath);

// Obtener una extension
const extension = path.extname("archivo.txt");
console.log(extension);
