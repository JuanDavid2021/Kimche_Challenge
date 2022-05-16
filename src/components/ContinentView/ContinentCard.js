import React from 'react';
import { Country } from '../Country';

export const ContinentCard = ({name,continent,code}) => {
  return (
    <div>
        <div>
         <h1>{continent.name}</h1>   
        </div>

        <div> 
         <Country name={name} code={code}/>
        </div>
    </div>
    )};
