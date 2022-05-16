import React, { useContext, useState } from 'react';
import { CountriesContext } from './context/CountriesContext';
import "../styles/SearchBar.css"


export const SearchBar = () => {

 const [search, setSearch] = useState("");

 const {setInput} = useContext(CountriesContext);

  const handleChange =(e)=>{
  e.preventDefault()
  setSearch(e.target.value)
  setInput(e.target.value)
 } 
  return (
    <form>
      
       <input className="search" type="text" value={search} onChange={(e)=>handleChange(e)} placeholder="  Escribe el nombre de un pais..."></input>
      
    </form>
  )
}
