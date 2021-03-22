import './App.css';
import  { dataArray } from './data' ;

import { useState } from 'react';
import MovieList from './component/MovieList';
import Search from './component/Search';
import AddMovie from './component/AddMovie';
function App() {
const [movies, setMovies] = useState(dataArray)
const [searchValue, setSearchValue] = useState("")
const [searchRating, setSearchRating] = useState(1)

const handleAdd = (newMovie) => setMovies([...movies,newMovie])
const handleSearch = (e) => setSearchValue(e.target.value)
const handleRating = (rate) => setSearchRating(rate)
  return (
    <div className="App">
      <Search searchValue={searchValue} searchRating={searchRating} handleSearch={handleSearch} handleRating={handleRating} />
     <MovieList movies={movies.filter((movie)=>
      movie.title.toLowerCase().includes(searchValue.toLowerCase().trim())
      && searchRating <= movie.rating
      )}/>
    <AddMovie handleAdd={handleAdd} />
    </div>
  );
}
export default App;







