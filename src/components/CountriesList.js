import React, { useContext } from 'react';
import { CountriesContext } from './context/CountriesContext'
import { Country } from './Country';


export const CountriesList = () => {

 const {dataFilter} = useContext(CountriesContext) 

  return (
    <div>
        {dataFilter.length===0 ? <p>Por favor busca un pais </p> : dataFilter.map(countries=>(
          <Country key={countries.code} {...countries}/>  
        )) }
    </div>
  )
}
