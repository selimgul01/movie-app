import "../CSS/movies.css";
import { useDispatch, useSelector } from "react-redux";
import FavoriteMovie from "../components/FavoriteMovie"
import { useEffect } from "react";
import { clearNotification } from "../slice/moviesSlice";
const Favorite = () => {

  const dispatch = useDispatch()
  const {favoriteMovies,notification} = useSelector(state => state.movies)

  useEffect(()=>{
    setTimeout(() => {
      dispatch(clearNotification())
    }, 1700);
  },[dispatch,notification])
  
  return(
    <div className="movies-wrapper">
      {
        favoriteMovies.map((movie)=>(
          <FavoriteMovie movie={movie} key={movie.id} />
        ))
      }
      <div className={notification === "" ? "" : "message"}>
          {notification}
        </div>
    </div>
  )
  
};

export default Favorite;
 