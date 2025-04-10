const z = require("zod");

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: "Movie title must be a string.",
    required_error: "Movie titled is required.",
  }),
  year: z.number().int().positive().min(1900).max(2026),
  director: z.string(),
  duration: z.number().min(0).max(10000).default(99),
  rate: z.number().min(0).max(10).default(5.5),
  poster: z.string().url({
    message: "Poster must be a valid URL.",
  }),
  genre: z.array(
    z.enum([
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Thriller",
      "Sci-Fi",
      "Crime",
    ]),
    {
      required_error: "Movie genre is required.",
      invalid_type_error: "Movie genre must be an array of enum Genre.",
    }
  ),
});

function validateMovie(input) {
  // Valida todos los campos
  return movieSchema.safeParse(input);
  // Existe tambien un safeParseAsync para evitar el bloqueo.
}

function validatePartialMovie(input) {
  // El partial hace que TODOS los atributos del objeto sean opcionales. Si estan los valida, sino no pasa nada.
  return movieSchema.partial().safeParse(input);
}

module.exports = {
  validateMovie,
  validatePartialMovie,
};
