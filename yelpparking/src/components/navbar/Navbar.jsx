import React from 'react'
import './Navbar.css'
import Searchbar from '../searchbar/Searchbar'

function Navbar() {
  return (
    <div className='navbarBackground'>
      <h1 className='navbarText'>Parking Searcher</h1>
      <div className='navbarSearch'>
        <Searchbar></Searchbar>
      </div>
    </div>
  )
}

export default Navbar
