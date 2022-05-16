import {useQuery } from "@apollo/react-hooks";
import { gql} from "apollo-boost";
import React, { createContext, useState} from "react"; 


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

const [input, setInput] =useState("");

const {data, loading, error} = useQuery(LIST_COUNTRIES);

if(loading) return <p>loading...</p>;

else if(error) return <p>error</p>;

const dataFilter = data.countries.filter(countries=>countries.name.toLowerCase().includes(input.toLowerCase()));
 
    return (
        <CountriesContext.Provider
        value={{
        dataFilter,
        setInput
         }}
        >
        {props.children}    
        </CountriesContext.Provider>
    )
};