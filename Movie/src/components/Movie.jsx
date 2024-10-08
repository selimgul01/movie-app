import { useDispatch, useSelector } from "react-redux";
import "../CSS/movies.css";
import { GoPlay, GoHeartFill } from "react-icons/go";
import { addToFavorite } from "../slice/moviesSlice";

const Movie = ({ movie }) => {
  const {} = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const addFavoriteHandler = (movie) => {
    dispatch(addToFavorite(movie));
  };
  
  return (
    <div className="movie-wrapper">
      <div className="movie-img">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </div>
      <div className="movie-title">
        <p>{movie.title}</p>
        <div className="movie-icon">
          <GoHeartFill onClick={() => addFavoriteHandler(movie)} />
          <GoPlay />
        </div>
      </div>

      <div className="movie-info">
        <div className="movie-rating">{movie.vote_average}</div>
        <div className="movie-date">{movie.release_date}</div>
      </div>
    </div>
  );
};

export default Movie;
