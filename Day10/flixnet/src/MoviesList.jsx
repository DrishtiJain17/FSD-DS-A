import React from 'react'
import "./MoviesList.css";
import movie from './Movies';
//rafce
const MoviesList = () => {
  return (
    <div className='movies-list'>
      {movie.map((movie)=>(
        <div key={movie.id} className='movie-card'>
          <img src={movie.image} className='movie-img'/>
          <h1>Title: {movie.title}</h1>
          <h1>language: {movie.language}</h1>
          <h1>cost: {movie.cost}</h1>
        </div>
      ))}
      </div>
  )
}

export default MoviesList