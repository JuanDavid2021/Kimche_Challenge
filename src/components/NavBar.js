import React from 'react';
import "../styles/NavBar.css";
import { SearchBar } from './Searchbar';

export const NavBar = () => {

  return (
    <div className='fund'>
      <h1 className='letter'>Country Search</h1>
      <SearchBar/>
    </div>
  )
}
