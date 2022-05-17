import React, { useContext} from 'react';
import { CountriesContext } from './context/CountriesContext';
import "../styles/CountryList.css";

export const DataEnd = () => {

const {dataFilter, arrCountries, setInview} = useContext(CountriesContext);

 const showMoreItems = () => {
    setInview((value) => value + 12);
  };

  const showLessItems = () => {
    setInview((value) => value - 12);
  };

  return (
    <div className='btn-end'>
      {dataFilter.length <= arrCountries.length ? (
        null) : (
        <div className='more'>   
        <button onClick={showMoreItems} className="boton">
          More
        </button>
        </div> 
        )}

      {arrCountries.length > 13 && (
        <div className='less'>
          <button onClick={showLessItems} className="boton">
            Less
          </button>
        </div>)}
    </div>
  )
}
