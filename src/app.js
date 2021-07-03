const express = require("express");
const app = express();

const movies = require("./routes/moviesRoutes")
app.use("/filmes", movies)

const series = require("./routes/seriesRoutes")
app.use("/series", series)

module.exports = app;
