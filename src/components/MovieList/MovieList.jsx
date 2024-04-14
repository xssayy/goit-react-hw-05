import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={style.list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <NavLink
              to={`/movies/${movie.id}`}
              className={style.listItem}
              state={{ from: location }}
            >
              {movie.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
