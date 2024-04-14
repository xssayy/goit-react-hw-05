import { NavLink, Outlet, useParams, useLocation } from "react-router-dom";
import { fetchData } from "../../services/api";
import { useEffect, useState } from "react";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [MovieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const renderData = async () => {
      try {
        if (!movieId) return;
        const data = await fetchData(`movie/${movieId}`);
        const defaultImg =
          "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
        data.movieImage = data?.poster_path || defaultImg;
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    renderData();
  }, [movieId]);

  const goBackLink = location.state?.from || "/";
  return (
    <div>
      <NavLink to={`${goBackLink}`}>
        <button> Go back</button>
      </NavLink>
      <div className={style.container}>
        <img
          className={style.image}
          src={`https://image.tmdb.org/t/p/w500${MovieDetails.movieImage}`}
          alt="Movie Poster"
        />
        <div>
          <h2>{MovieDetails.title}</h2>
          <p>User Score: {Math.round(MovieDetails.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{MovieDetails.overview}</p>
          <h3>Genres</h3>
          <ul className={style.genres}>
            {MovieDetails.genres &&
              MovieDetails.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
        </div>
      </div>
      <div className={style.additionalInfoCont}>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/cast`} className={style.listItem}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/movies/${movieId}/reviews`}
              className={style.listItem}
            >
              Reviews
            </NavLink>
            {/* )} */}
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
