import { fetchData } from "../../services/api";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    const query = params.query;
    if (!query) {
      return;
    }

    const onInit = async () => {
      try {
        const response = await fetchData("search/movie", {
          language: "en-US",
          query,
          include_adult: false,
          page: 1,
        });
        setMovies(response.results);
      } catch (error) {
        console.log("Server error: ", error);
      }
    };
    onInit();
  }, [params]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.search.value.toLowerCase().trim();
    setSearchParams({ query });
    form.reset();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} movieParams={params} />
    </div>
  );
};

export default MoviesPage;
