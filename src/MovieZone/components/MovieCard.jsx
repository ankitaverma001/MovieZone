const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-card__poster hover_effect">
        <img src={movie.poster_path} alt={movie.title} />
      </div>
      <h5>{movie.title}</h5>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
