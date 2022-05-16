import React from 'react';
import { Country } from '../Country';

export const LanguageCard = ({name, languages,code}) => {
 
  return (
    <div>
       <div>
       <h1>     
       {languages.map(l=>l.name +" ")}
       </h1>
       </div>
       <div>
        <Country name={name} code={code}/>
       </div>
    </div>
  )};
