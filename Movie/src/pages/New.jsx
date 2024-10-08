import { useDispatch, useSelector } from "react-redux";
import "../CSS/movies.css";
import React, { useEffect } from "react";
import { clearNotification, fetchNewMovies } from "../slice/moviesSlice";
import NewMovie from "../components/NewMovie";

const New = () => {
  const { nowPlaying,notification } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewMovies());
  }, [dispatch]);

  useEffect(()=>{
    setTimeout(() => {
      dispatch(clearNotification())
    }, 1700);
  },[dispatch,notification])

  return (
    <div className="movies-wrapper">
      {nowPlaying.map((movie) => (
        <NewMovie movie={movie} key={movie.id} />
      ))}
      <div className={notification === "" ? "" : "message"}>{notification}</div>
    </div>
  );
};

export default New;
