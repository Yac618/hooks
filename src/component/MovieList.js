import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies})  =>{
    return (
        <div className='movie-list'>
    {movies.map((film)=> <MovieCard movie={film}/>)}
    
           
    </div>
    )
}
export default MovieList