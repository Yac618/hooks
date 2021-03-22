import React from 'react'
import MovieRating from './MovieRating'

const Search = ({searchValue,searchRating,handleSearch,handleRating}) => {
    return (
        <div className="header-container">
           <h1>Movie app</h1> 
           <div className="search-container">
               <input className="inp" type="text" value={searchValue} onChange={handleSearch}/>
               <MovieRating  rating={searchRating} handleRating={handleRating} />
           </div>
        </div>
    )
}

export default Search
