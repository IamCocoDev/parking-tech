import React from 'react'
import './ParkingCard.css'
import StarRatings from 'react-star-ratings';

function ParkingCard({adress,image,rating,review_count,url,name}) {

  let score = Math.round((review_count * rating) / (review_count+1))
  
  return (
    <div className='parkingCardBox'>
      <h1 className='parkingCardName'>{name}</h1>
      <img className='parkingCardImage' src={image} alt="" />
      <div className='parkingCardData'>
        <p>Reviews: {review_count}</p>
        <p>Score: {score}</p>
        <a href={url}>See More</a>
      </div>
      <h3 className='parkingCardAdress'>{adress}</h3>
      <div className='parkingCardStars'>
        <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={5}
            name='rating'
            starDimension="2rem"
            starSpacing="0.5rem"
          />
      </div>
    </div>
  )
}

export default ParkingCard
