import React from 'react'

const MovieRating = ({rating,handleRating}) => {
    const stars = (rate) => {
        let star = [];
        for (let i = 1; i <= 5; i++) {
            if(i<= rate) {
                star.push(<span onClick={()=> handleRating(i)} style={{color:'gold',fontSize:"20px",cursor:'pointer'}}>★</span>)
            }
            else star.push(<span onClick={()=> handleRating(i)} style={{color:'black',fontSize:"20px",cursor:'pointer'}}>★</span>)
        }
        return star
    }
    return (
        <div>
            {stars(rating)}
        </div>
    )
}

export default MovieRating
