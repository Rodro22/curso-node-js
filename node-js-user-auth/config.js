/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable semi */
export const {
  PORT = 3000,
  SALT_ROUNDS = 10,
  SECRET_JWT_KEY = "this-is-my-secret-$$$$", // Esto siempre debe ser una cadena con muchas cosas complicadas
  // se debe inyectar con variables de entorno una vez en produccion
} = process.env;
