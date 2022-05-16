import React, { useContext, useState } from 'react';
import { CountryContext } from './CountryContext';

export const SearchBar = () => {

 const [search, setSearch] = useState("");

 const {setInput} = useContext(CountryContext);

  const handleChange =(e)=>{
  e.preventDefault()
  setSearch(e.target.value)
  setInput(e.target.value)
 } 
  return (
    <form>
       <input type="text" value={search} onChange={(e)=>handleChange(e)} ></input>
    </form>
  )
}
