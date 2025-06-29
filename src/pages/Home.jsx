import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [movies, setmovies] = useState([]);

  const [searchquery, setsearchquery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  //   setmovies(getPopularMovies);
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setmovies(popularMovies);
      } catch (err) {
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
    console.log(getPopularMovies);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchquery.trim()) {
      const loadPopularMovies = async () => {
        try {
          const popularMovies = await getPopularMovies();
          setmovies(popularMovies);
        } catch (err) {
          setError("Failed to load movies");
        } finally {
          setLoading(false);
        }
      };
      loadPopularMovies();
      return;
    }
    if (loading) return;
    setLoading(true);
    try {
      const searchResult = await searchMovies(searchquery);
      setmovies(searchResult);
      setError(null);
    } catch (err) {
      setError("Failed to load movie");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movie ..."
          className="search-input"
          value={searchquery}
          onChange={(e) => setsearchquery(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          search
        </button>
      </form>
      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
