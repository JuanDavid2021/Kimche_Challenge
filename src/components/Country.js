import React from 'react'
import "../styles/Country.css"

export const Country = ({name, code, languages, continent,capital}) => {
  
  function flagURL(code) {
    return `https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${code}.svg`;
  } 

  return (
    <div className='country'>
     <div className='data'> 
     {
       name==="Bonaire"? <img src={`/assets/bonaire.png`} alt="Bonaire"/>
       :name==="Western Sahara"? <img src={`/assets/Western_Sahara.png`} /> : <img src={flagURL(code)} alt="Western Sahara" />
     }
      <h3>{name}</h3>
      </div> 
      <div className='countryInfo'>
      <h6>Capital: {capital}</h6>
      <h6>Languages: {languages.map(language=>language.name)}</h6>
      <h6>Continent: {continent.name}</h6>
      </div>
      <div className='btn'>
      <button >
        ver mas
      </button>
      </div>
    </div>
  )
}
