import { useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const MovieReviews = () => {
  const {
    state: { data },
  } = useLocation();

  return (
    data &&
    data.results && (
      <ul>
        {data.results.map((review) => (
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
