import React from 'react'
import {Link} from "react-router-dom"
import "../styles/Filter.css"

export const Filter = () => {
    return (
    <div className='filter'>
     <label>Group by:</label>
     <Link to="/continent"><button>Continent</button></Link>
     <Link to="/language"><button>Language</button></Link>
     <Link to="/"><button>HomePage</button></Link>
    </div>
  )
}
