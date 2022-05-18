import React, { useState } from 'react';
import "../styles/Country.css";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


export const Country = ({name, code, languages, continent,capital, native, phone, currency}) => {
  
  function flagURL(code) {
    return `https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${code}.svg`;
  } 

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className='country'>

      <div className='data'> 
      {
        name==="Bonaire"? <img src={`/assets/bonaire.png`} alt="Bonaire" style={{width:"40px", height:"30px", marginTop:"28px"}}/>
        :name==="Western Sahara"? <img src={`/assets/Western_Sahara.png`} alt="Western_Sahara"style={{width:"40px", height:"30px", marginTop:"28px"}}/> : <img src={flagURL(code)} alt="Western Sahara" style={{width:"30px", height:"20px", marginTop:"38px", marginLeft:"10px"}}/>
      }
        <h3 style={{fontWeight:"bold"}}>{name}</h3>
        </div> 

        <div className='countryInfo'>
          <h6>Capital: {capital}</h6>
          <h6>Languages: {languages.map(language=>language.name + " ")}</h6>
          <h6>Continent: {continent.name}</h6>
          </div>

          <div className="btn">
          <button onClick={onOpenModal}>
          ver mas
          </button>
        </div>
        
        <Modal open={open} onClose={onCloseModal} center classNames={{ modal: 'customModal'}}>

        <div style={{textAlign:"center"}} >
            <p>{<img src={flagURL(code)} alt="Country" style={{width:"100px"}} />}</p>
            <h1>Name: {name}</h1>
            <hr/>
            <p>Native: {native}</p>
            <p>Continent: {continent.name}</p>
            <p>Capital: {capital}</p>
            <p>Languages: {languages.map(language=>language.name + " ")}</p>
            <p>Currency: {currency}</p>
            <p>Phone: {phone}</p>
        </div>

        </Modal>
    </div>
  )
}
