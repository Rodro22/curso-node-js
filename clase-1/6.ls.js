/* eslint-disable no-useless-return */
/* eslint-disable semi */
/* eslint-disable quotes */

const fs = require("node:fs/promises");

fs.readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((err) => {
    if (err) {
      console.error("Error al leer el directorio: ", err);
      return;
    }
  });
