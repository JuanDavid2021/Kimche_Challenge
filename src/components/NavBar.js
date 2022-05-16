import React from 'react'
import { SearchBar } from './SearchBar'
import "../styles/NavBar.css"

export const NavBar = () => {

  return (
    <div className='fund'>
     <h1 className='letter'>Country Search</h1>
     <SearchBar/>
    </div>
  )
}
