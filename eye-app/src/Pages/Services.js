import React from 'react'
import '../styles/Services.css'
import service1 from '../assets/pexels-nataliya-vaitkevich-5843365.jpg'
import service2 from '../assets/pexels-cottonbro-studio-5427535.jpg'
import service3 from '../assets/pexels-ksenia-chernaya-5765827.jpg'
import banner from '../assets/pexels-kampus-production-7477725.jpg'

const Services = () => {
  return (
    <div>
    <div className='services-container'>
      <div className='services-heading'>
        <h3>Services</h3>
        <h1>Our Service </h1>
      </div>
      <div className='all-services'>
      <div className='service1'>
        <img src= {service1} className='service-img'></img>
        <div className='service-card-body'>
            <h1 className='service-card-title'>Contact Lense</h1>
            <p className='service-card-info' id='info2'>We're an independent <br/>
              eyewear brand committed </p>
            <h3>view details </h3>
        </div>
        </div>


        <div className='service1'>
        <img src= {service2} className='service-img'></img>
        <div className='service-card-body'>
            <h1 className='service-card-title'>eye glasses</h1>
            <p className='service-card-info' id='info2'>We're an independent <br/>
              eyewear brand committed </p>
            <h3>view details </h3>        </div>
        </div>


        <div className='service1'>
        <img src= {service3} className='service-img'></img>
        <div className='service-card-body'>
            <h1 className='service-card-title'>eye exams</h1>
            <p className='service-card-info' id='info2'>We're an independent <br/>
              eyewear brand committed </p>
            <h3>view details </h3>        </div>
        </div>
      </div>
    </div>
    <div></div>
    <section className='service-section'>
      <img src={banner} className='banner'></img>
      <div className='service-section-text'>
      <h3>Special offer</h3>
      <h1>Reading glasses</h1>
      <p>We're an independent eyewear brand committed to creating high quality, handmade eyewear.<br/>
          We're an independent eyewear to creating high quality, handmade eyewear We're an independent <br/>
          eyewear brand committed to creating high quality, handmade eyewear 
      </p>
      <div className='button-sec'>
                <div className='buttons2'>
                <button className='btns' id='shop-btn'>shop now</button>
                </div>
                <div className='button3'>
                <button className='btns'>view all</button>
                </div>
    </div>
    </div> 
  </section>
  </div>
  )
}

export default Services
