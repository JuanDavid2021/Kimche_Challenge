import React from 'react'

export const Country = ({name, code}) => {

  function flagURL(code) {
    return `https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${code}.svg`;
  } 

  return (
    <div>
     {
       name==="Bonaire"? <img src={`/assets/bonaire.png`} alt="Bonaire"/>
       :name==="Western Sahara"? <img src={`/assets/Western_Sahara.png`} /> : <img src={flagURL(code)} alt="Western Sahara" />
     }
      <h3>{name}</h3>
      <button>
        ver mas
      </button>
    </div>
  )
}
