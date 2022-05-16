import React, { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { CardLenguaje } from './CardLenguaje';

export const LanguageView = () => {

  const {dataFilter} = useContext(CountriesContext)  
  
  return (
    <div>
     {
      dataFilter.map(countries=>(
        <CardLenguaje key={countries.code} {...countries}/>  
      ))
     }
    </div>
  )}
