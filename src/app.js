const express = require("express");

const app = express();
app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");


app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.put("/api/movies/:id", movieControllers.updateMovie);
app.post("/api/movies", movieControllers.postMovie);
app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);
app.put("/api/users/:id", userControllers.updateUser);
app.post("/api/users", userControllers.postUser);

module.exports = app;
