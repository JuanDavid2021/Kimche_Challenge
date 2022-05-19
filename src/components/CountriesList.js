import React, { useContext } from 'react';
import { CountriesContext } from './context/CountriesContext';
import { Country } from './Country';
import { DataEnd } from './DataEnd';
import "../styles/CountryList.css";

export const CountriesList = () => {

const {arrCountries} = useContext(CountriesContext);

return(

  <div className='list'>
    {arrCountries.length===0 ? <p>no results were found with the name of the country entered </p> : arrCountries.map(countries=>(
    
    
    <Country key={countries.code} {...countries}/> 
    
    ))}

    <DataEnd/>
  </div> 
)};