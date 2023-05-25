import React from 'react'
import store from '../assets/pexels-sharath-g-2251247.jpg'
import '../styles/Aboutus.css'
import Testimonial from '../components/Testimonial'

const Aboutus = () => {
  return (
    
    <div className='aboutus-container'>
  <div className='grid-container3'>
            
            <div className='left-grid3'>
                <img src={store} className='left-img3'></img>
            </div>
            
            <div className='right-grid3'>
                <div className='grid-heading3'>
                    <p>find store</p>
                    <h3>find our nearest store</h3>
                </div>
                <div className='grid-info3'>
                Conveniently visit any of our stores <br/>
                located near you.<br/>
                With a state-of-the-art design that<br/>
                includes the latest equipment and an <br/>
                endless selection of optical products to <br/>
                choose from.
                </div>
        
                <div className='button-sec'>
                <div className='buttons2'>
                <button className='btns3' id='findstore'>find a store</button>
                </div>
                <div className='button3'>
                <button className='btns3'>book an eye test</button>
                </div>
                </div>
            </div>
            </div>
            <Testimonial/>
    </div>
  )
}

export default Aboutus