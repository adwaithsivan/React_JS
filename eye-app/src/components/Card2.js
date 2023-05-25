import React from 'react'
import card2 from '../assets/pexels-elle-hughes-1680178.jpg'
import '../styles/Card2.css'

const Card2 = () => {
  return (
    <div>
      <div className='card-2'>
        <img src= {card2} className='card2-img'></img>
        <div className='card2-body'>
            <h1 className='card2-title'>Find the best fit for your face </h1>
            <p className='card2-info'> Take me to the guide </p>
        </div>
    </div>
    </div>
  )
}

export default Card2
