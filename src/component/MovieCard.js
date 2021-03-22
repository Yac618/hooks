import React from 'react'
import MovieRating from './MovieRating'
const MovieCard = ({movie})=> {
    return (
        <div className='movie-card'>
            <MovieRating rating={movie.rating} />
            <img src={movie.image} alt="dsq"/>
            <h1> {movie.title}</h1>
            <h3 className='date'>{movie.date}</h3>
        </div>
    )
}
export default MovieCard