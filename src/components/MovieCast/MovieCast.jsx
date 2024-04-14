import { useLocation } from "react-router-dom";

const MovieCast = () => {
  const {
    state: { data },
  } = useLocation();

  return (
    data &&
    data.cast && (
      <ul>
        {data.cast.map((character) => (
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
