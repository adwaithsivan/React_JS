import React from 'react'
import '../styles/Card1.css'
import card1 from '../assets/pexels-dejan-krstevski-1578997.jpg'

const Card1 = () => {
  return (
    <>
        <div className='card-1'>
        <img src= {card1} className='card-img'></img>
        <div className='card-body'>
            <h1 className='card-title'>10 year vision</h1>
            <p className='card-info'>Remenicse with us </p>
        </div>
    </div>
    </>
  )
}

export default Card1