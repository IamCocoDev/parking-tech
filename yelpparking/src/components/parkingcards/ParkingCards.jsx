import React, {useContext, useEffect, useState} from 'react'
import ParkingContext from '../../context/ParkingContext'
import './ParkingCards.css'
import ParkingCard from '../parkingcard/ParkingCard'

function ParkingCards() {
  
  const {parkings} = useContext(ParkingContext)

  const [data, setData] = useState([])

  useEffect(() => {
    setData(parkings)
  }, [parkings, data])

  console.log(data)

  return (
    <div className='parkingCards'>
      {data.length === 0 ? <h1>Search one City in the bar</h1>:
      data.map((d) => (
      <ParkingCard
        name={d.name}
        image={d.image_url}
        adress={d.location.address1}
        rating={d.rating}
        review_count={d.review_count}
        url={d.url}
      />
      ))}
    </div>
  )
}

export default ParkingCards
