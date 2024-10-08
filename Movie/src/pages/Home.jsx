import React from 'react'
import Hero from '../components/Hero'
import Movies from '../components/Movies'

const Home = ({searchTerm}) => {
  return (
    <div>
      <Movies searchTerm={searchTerm}  />
    </div>
  )
}

export default Home
