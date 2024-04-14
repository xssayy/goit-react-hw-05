import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../services/api";
import { FaUser } from "react-icons/fa";

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    const renderData = async () => {
      try {
        if (!movieId) return;
        const reviewsData = await fetchData(`movie/${movieId}/reviews`);
        setMovieReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    renderData();
  }, [movieId]);

  return (
    movieReviews &&
    movieReviews.results && (
      <ul>
        {movieReviews.results.map((review) => (
          <li key={review.id}>
            <FaUser />
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default MovieReviews;
