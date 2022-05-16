import React from 'react'
import {Link} from "react-router-dom"

export const Filter = () => {
    return (
    <div>
     <label>Group by:</label>
     <button><Link to="/continente">Continent</Link></button>
     <button><Link to="/lenguaje">"Language</Link></button>
     <button><Link to="/">HomePage</Link></button>
    </div>
  )
}
