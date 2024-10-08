import "../CSS/movies.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearNotification,
  fetchAllMovies,
  searchMovies,
} from "../slice/moviesSlice";
import Movie from "./Movie";

const Movies = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const { homePageMovies, notification, search } = useSelector(
    (state) => state.movies
  );
  useEffect(() => {
    if (search?.length>0) {
      dispatch(searchMovies(searchTerm))
    }
    else{
      dispatch(fetchAllMovies());
    }
  }, [dispatch,searchTerm]);

  console.log(search);

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearNotification());
    }, 1500);
  }, [dispatch, notification]);

  return (
    <>
      <div className="movies-wrapper">
        { (searchTerm ? search : homePageMovies).map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
        <div className={notification === "" ? "" : "message"}>
          {notification}
        </div>
      </div>
    </>
  );
};

export default Movies;
