// import { MovieModel } from "../models/mysql/movie.js";
import { Router } from "express";
import { MovieController } from "../controllers/movies-controller.js";

export const createMovieRouter = ({ movieModel }) => {
  const moviesRouter = Router();

  const movieController = new MovieController({ movieModel });

  moviesRouter.get("/", movieController.getAll);

  moviesRouter.get("/:id", movieController.getById);

  moviesRouter.post("/", movieController.create);

  moviesRouter.delete("/", movieController.delete);

  moviesRouter.patch("/:id", movieController.update);

  return moviesRouter;
};
