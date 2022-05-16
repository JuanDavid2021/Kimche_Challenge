import React, { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { ContinentCard } from './ContinentCard';


export const ContinentView = () => {

 const {dataFilter} = useContext(CountriesContext);

  return (
    <div>  
    {dataFilter.map(countries=>(
      <div>
      <h1>{countries.continent.name}</h1>
      <ContinentCard key={countries.code} {...countries}/>  
      </div>
    ))
    }
    </div>
    )};
