import "../css/Favorites.css";
import { useMovieContext } from "../context/Moviecontext";
import MovieCard from "../components/MovieCard";
function Favorite({ movie }) {
  const { favorites } = useMovieContext();
  // const favorite = isFavorite(movie.id);
  if (favorites) {
    return (
      <div className="favorite">
        <h2>Your favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No favorite Movies yet</h2>
        <p>start adding movies to your favoirtes and they will appear here.</p>
      </div>
    );
  }
}

export default Favorite;
