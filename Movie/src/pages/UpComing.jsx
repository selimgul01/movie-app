import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUpComing } from '../slice/moviesSlice'
import UpComingMovie from '../components/UpComingMovie'
import "../CSS/movies.css"


const UpComing = () => {
    const {upComing} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUpComing())
    },[dispatch])

    
  return (
    <div className='movies-wrapper'>
      {
        upComing.map((movie)=>(
            <UpComingMovie movie={movie} key={movie.id}  />
        ))
      }
    </div>
  )
}

export default UpComing
 