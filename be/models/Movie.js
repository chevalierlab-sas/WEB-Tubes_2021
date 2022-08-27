const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    Title: { type: String, required: true, unique: true },
    Year: { type: String },
    Rated: { type: String },
    Released: { type: String },
    Director: { type: String },
    Actors: { type: String },
    Language: { type: String },
    Images: { type: Array },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
