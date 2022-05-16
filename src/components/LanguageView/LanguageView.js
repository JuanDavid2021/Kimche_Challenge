import React, { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { LanguageCard } from './LanguageCard';

export const LanguageView = () => {

  const {dataFilter} = useContext(CountriesContext)  
  
  return (
    <div>
     {
      dataFilter.map(countries=>(
        <LanguageCard key={countries.code} {...countries}/>  
      ))
     }
    </div>
  )}
