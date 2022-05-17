import React, { useContext} from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { Country } from '../Country';
import "../../styles/ContinentView.css"
import "../../styles/CountryList.css"
import { DataEnd } from '../DataEnd';


export const LanguageView = () => {

  const {arrCountries} = useContext(CountriesContext)

  return (
    <div className='list'>  
      {arrCountries.length===0 ? <p>no results were found with the name of the country entered </p> : arrCountries.map(countries=>(

      <div>
      <h2 style={{fontWeight:"bold", textAlign:"center", marginRight:"100px"}}>{countries.languages.map(l=>l.name +" ")}</h2>
      <Country key={countries.code} {...countries}/> 
      </div>))}
        <DataEnd/>

    </div>
    )};

