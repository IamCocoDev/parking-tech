import React, {useContext, useState} from 'react'
import ParkingContext from '../../context/ParkingContext'
import './Searchbar.css';


function Searchbar() {

  const {getParkings} = useContext(ParkingContext)

  const [state, setState] = useState("");

  function handleChange(e) {
    setState(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getParkings(state);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        placeholder='New York'
        className='searchbarInput' 
        type="text" 
        value={state.state}
        onChange={(e) => handleChange(e)}
      />
      <button className='searchbarButton' >Search</button>
    </form>
  )
}

export default Searchbar
