import React from 'react'
import '../styles/Testimonial.css'
import profileimg from '../assets/profile.jpg'
const Testimonial = () => {
  return (
    <div className='testimonial-container'>
        <div className='grid-container4'>
            <div className='left-grid4'>
                <div className='content'>
                    <h1>great customer service!</h1>
                    <div className='wrapper'>
                    <p>Conveniently visit any of our<br/> 
                            stores located near you. With <br/>
                            a state-of-the-art design that
                            </p>
                        <div className='profile-img'>
                            <img src={profileimg} className='profile'></img>
                            <p id='name'>James Edwards</p>
                            <p id='post' >Buisness owner</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-grid4'>
                <h3>Testimonials</h3>
                <h1>what customers are saying</h1>
                <p>Conveniently visit any of our stores <br/>
                located near you. With a state-of-the-art <br/>
                design that 
                </p>
                <button className='button'>view all</button>
            </div>
        </div>
    </div>
  )
}

export default Testimonial