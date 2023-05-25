import React from 'react'
import '../styles/Hero.css'
import specs1 from '../assets/imgbin-sunglasses-goggles-optician-eyewear-glasses-hRm8ntr26iCXGJnmhvpzRNVaZ-removebg-preview.png'
import Card1 from './Card1'
import Card2 from './Card2'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-img'></div>
        <div className='hero-text'>
            <p>Unbelievable low prices</p>
            <h1>Glasses for</h1>
            <h1> men and women </h1>
            <div>
                <Link to='/buynow'><button className='hero-btn'>Buy Now</button></Link>
            </div>
        </div>
        <section className='section-1'>
        <div className='left-section'>
        <div className='circle'> 
            </div> 
            <img className='specs1' src={specs1}></img>
        </div>
        <div className='right-section'>
            <p>what we're about</p>
            <div className='caption'>
            <h2> SEE THE WORLD </h2>
            <h2>DIFFERENTLY</h2>
            </div>
            <p className='para2'>We make everyday life look and feel ten times <br/>better.how?</p>
            <p className='para2'>Click on the links below to see for yourself.</p>
            <button className='hero-btn2'>Shop Now</button>
        </div>
            </section>
            
            <div className='section2'>
                <div className='cards'>
                    <div className='card1'>
                    <Card1/>
                    </div>
                    <Card2/>
                </div>
            </div>
        
    </div>
  )
}

export default Hero