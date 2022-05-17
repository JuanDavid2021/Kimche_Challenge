import React, { useContext, useState } from 'react';
import { CountriesContext } from './context/CountriesContext'
import { Country } from './Country';
import "../styles/CountryList.css"


export const CountriesList = () => {

  const {dataFilter} = useContext(CountriesContext)

  const [inview, setInview] = useState(12);

  let arrCountries = dataFilter?.slice(0, inview);

  const showMoreItems = () => {
    setInview((value) => value + 12);
  };

  const showLessItems = () => {
    setInview((value) => value - 12);
  };

return(

<div className='list'>
    {arrCountries.length===0 ? <p>Por favor busca un pais </p> : arrCountries.map(countries=>(
            <Country key={countries.code} {...countries}/> ))}

    {dataFilter.length <= arrCountries.length ? (
       null) : (
      <div className='more'>   
      <button onClick={showMoreItems} className="boton">
        More
      </button>
      </div> 
       )}

    {arrCountries.length > 13 && (
      <div className='less'>
        <button onClick={showLessItems} className="boton">
          Less
        </button>
      </div>)}
</div>
)}