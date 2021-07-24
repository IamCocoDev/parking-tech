import React, { useReducer } from 'react'
import axios from 'axios'
import ParkingReducer from './ParkingReducer.jsx' 
import ParkingContext from './ParkingContext.jsx'
axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';


export default function ParkingState(props) {
  
    const initialState = {
      parkings: []
    }

    const [state, dispatch] = useReducer(ParkingReducer, initialState)

    const getParkings  = async (location) => {
      console.log(location)
      const res = await axios.get(`https://parking-tech.herokuapp.com/parkings?location=${location}&status=open`)
      dispatch({
        type: 'GET_PARKINGS',
        payload: res.data
      })
      console.log(res.data)
    }

    return(
      <ParkingContext.Provider value={{
        parkings: state.parkings,
        getParkings,
      }}>
        {props.children}
      </ParkingContext.Provider>
    )

}
