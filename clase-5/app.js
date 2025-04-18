import express, { json } from "express"; // require -> commonJS
import { createMovieRouter } from "./routes/moviesRoutes.js";
import { corsMiddlewares } from "./middlewares/cors.js";
import { MovieModel } from "./models/mysql/movieModel.js";

export const createApp = ({ movieModel }) => {
  const app = express();
  app.use(json());
  app.use(corsMiddlewares());
  app.disable("x-powered-by"); // deshabilitar el header X-Powered-By: Express

  // Esta es la inyeccion de dependencias.
  app.use("/movies", createMovieRouter({ movieModel }));

  const PORT = process.env.PORT ?? 1234;

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
  });
};
