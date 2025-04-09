/* eslint-disable quotes */
/* eslint-disable semi */
import { platform, release, arch, cpus, freemem } from "node:os";

console.log("Nombre del sistema operativo: ", platform());
console.log("Version del sistema operativo: ", release());
console.log("Arquitectura: ", arch());
console.log("CPUs", cpus());
console.log("Memoria libre", freemem / 1024 / 1024);
