import React, { useContext, useState } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { Country } from '../Country';
import "../../styles/ContinentView.css"


export const LanguageView = () => {

  const {dataFilter} = useContext(CountriesContext)

  const [inview, setInview] = useState(12);

  let arrCountries = dataFilter?.slice(0, inview);

  const showMoreItems = () => {
    setInview((value) => value + 12);
  };

  const showLessItems = () => {
    setInview((value) => value - 12);
  };


  return (
    <div className='continent'>  
   {arrCountries.length===0 ? <p>no results were found with the name of the country entered </p> : arrCountries.map(countries=>(

   <div>
   <h2 style={{fontWeight:"bold"}}>{countries.languages.map(l=>l.name +" ")}</h2>
   <Country key={countries.code} {...countries}/> 
   </div>))}

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
    )};

