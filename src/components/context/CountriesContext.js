import {useQuery } from "@apollo/react-hooks";
import { gql} from "apollo-boost";
import React, { createContext, useState} from "react"; 
import { BeatLoader } from "react-spinners";

export const CountriesContext = createContext();

const LIST_COUNTRIES = gql`
query countriesAll{
  countries{
    code
    name
    native
    phone
    continent{
      name
    }
    capital
    currency
    languages{
      name
    }
    emoji
  }
  }
`;
export const CountriesProvider = (props)=>{

  const [inview, setInview] = useState(12);
    
  const [input, setInput] = useState("");

  const {data, loading, error} = useQuery(LIST_COUNTRIES);

  if(loading) return <div style={{textAlign:"center", marginTop:"200px"}}><BeatLoader/></div>;

  else if(error) return <p >error</p>;

  const dataFilter = data.countries.filter(countries=>countries.name.toLowerCase().includes(input.toLowerCase()));

  let arrCountries = dataFilter?.slice(0,inview);  

  return (
    <CountriesContext.Provider
      value={{
      dataFilter,
      setInput,
      setInview,
      arrCountries,
      }}
      >
      {props.children}    
    </CountriesContext.Provider>
  )};