import React from 'react'
import '../styles/PdtSection3.css'
import img5 from '../assets/pexels-helena-lopes-1464565.jpg'

const PdtSection3 = () => {
  return (
    <div className='pdt-section3-container'>
        <div className='lists'>
        <div className='list-items'>
        <ul>
            <li>
                <h1>best materials</h1>
                <p>we make everyday life</p>
            </li>

            <li>
            <h1>carl lenses</h1>
            <p>we make everyday life</p>
            </li>

            <li>
            <h1>mordern design</h1>
            <p>we make everyday life</p>
            </li>

            <li>
            <h1>all sizes</h1>
            <p>we make everyday life</p>
            </li>
        </ul>
        </div>
      </div>
      <div className='grid-container'>
            
            <div className='left-grid2'>
                <img src={img5} className='left-img'></img>
            </div>
            <div className='right-grid2'>
                <div className='grid-heading'>
                    <p>Why buy</p>
                    <h3>why buy us ? <br/>collections of 2023</h3>
                </div>
                <div className='grid-info2'>
                We're an independent eyewear brand committed<br/>
                to creating high quality, handmade eyewear <br/>
                inspired by the people, places, and stories of <br/>
                Dubai.
                </div>
        
                <div className='button1'>
                <button className='grid-btns' id='shop-btn'>view all products</button>
            </div>
            </div>
        </div>
        <section className='offer-section'>
            <div className='ad-section'>
            <h3> half price eyes test and 10% off
            <p id='para'>Save 20% upto presentation of your valid Eye Nation Extra Card and Vision <br/>Express voucher.</p></h3>   
            <div className='ad-button'>
                <button id='shop-btn2'>shop now </button>
            </div>
            </div>
           
        </section>
    </div>
  )
}

export default PdtSection3