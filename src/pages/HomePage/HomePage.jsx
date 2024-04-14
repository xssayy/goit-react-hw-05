import { fetchData } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const response = await fetchData("trending/movie/day", {
        language: "en-US",
      });

      setMovies(response.results);
    };
    getMovies();
  }, []);
  return (
    <div>
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
