import React from 'react'
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Home = ({handleAuthor,handleRandom,quotes}) => {
  return (
    <div>
        <div className="random">
            <button onClick={handleRandom} className="btn-random">Random
            <GiPerspectiveDiceSixFacesRandom className="icon"/>
            </button>
        </div>
        <div className="content">
            <div className="text">{quotes.text}</div>
            <NavLink to={"/author"} className="author" onClick={()=>handleAuthor(quotes.author)}>
                <div className="title">{quotes.author}</div>
                <div><BsFillArrowRightSquareFill/></div>
            </NavLink>
        </div> 
        </div>
  )
}

export default Home