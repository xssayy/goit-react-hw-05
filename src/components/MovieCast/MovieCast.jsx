import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../../services/api";

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    const renderData = async () => {
      try {
        if (!movieId) return;
        const castData = await fetchData(`movie/${movieId}/credits`);
        setMovieCast(castData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    renderData();
  }, [movieId]);
  return (
    movieCast &&
    movieCast.cast && (
      <ul>
        {movieCast.cast.map((character) => (
          <li key={character.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${character.profile_path}`}
              alt=""
            />
            <p>{character.name}</p>
            <p>{character.character}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default MovieCast;
