import { GoPlay,GoHeartFill   } from "react-icons/go";
import "../CSS/movies.css"

const UpComingMovie = ({movie}) => {
  return (
    <div className='movie-wrapper'>
      <div className="movie-img">
        <img src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
      </div>
      <div className="movie-title">
        <p>{movie.title}</p>
        <div className="movie-icon">
          <GoHeartFill />
          <GoPlay/>
          </div> 
      </div>
      <div className="movie-info">
          <div className="movie-rating">{movie.vote_average}</div>
          <div className="movie-date">{movie.release_date}</div>
      </div>
    </div>
  )
}

export default UpComingMovie
