import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContinentView } from '../ContinentView/ContinentView';
import { CountriesList } from '../CountriesList';
import { Filter } from '../Filter';
import { LanguageView } from '../LanguageView/LanguageView';
import { NavBar } from '../NavBar';


export const AppRouter = () => {

  return (
      <BrowserRouter>
       <NavBar/>
       <Filter/>
       
       <Routes>
        <Route path="/" element={<CountriesList/>}/>
        <Route path="/continent" element={<ContinentView/>}/>
        <Route path="/language" element={<LanguageView/>}/>
  
      </Routes>
      </BrowserRouter>)
}
