import { useState } from "react";
import { movies } from "./data/movies.js";
import FilterBar from "./components/FilterBar.jsx";
import MovieCard from "./components/MovieCard.jsx";
import "./MovieZone.css";

const Movies = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMovies =
    activeCategory === "All"
      ? movies
      : movies.filter((movie) => movie.category === activeCategory);

  return (
    <>
      <div className="my-3 movie-zone__filters">
        <FilterBar activeCategory={activeCategory} onSelect={setActiveCategory} />
      </div>

      <div className="movie-zone__grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Movies;
