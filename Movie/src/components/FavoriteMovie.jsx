import "../CSS/movies.css";
import { GoPlay } from "react-icons/go";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeToFavorite } from "../slice/moviesSlice";

const FavoriteMovie = ({ movie }) => {
  const dispatch = useDispatch();

  const removeMovieHandler = (movie) => {
    dispatch(removeToFavorite(movie));
    console.log(movie);
  };

  return (
    <div className="movie-wrapper">
      <div className="movie-img">
        <img src={`https://image.tmdb.org/t/p/w500${movie.image}`} />
      </div>
      <div className="movie-title">
        <p>{movie.title}</p>
        <div className="movie-icon">
          <IoRemoveCircleOutline onClick={() => removeMovieHandler(movie)} />
          <GoPlay />
        </div>
      </div>

      <div className="movie-info">
        <div className="movie-rating">{movie.average}</div>
        <div className="movie-date">{movie.date}</div>
      </div>
    </div>
  );
};

export default FavoriteMovie;
