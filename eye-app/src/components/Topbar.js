import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io5'
import '../styles/Topbar.css'

const Topbar = () => {
  return (
    <div className='container'>
      <div className='left'>
        <p>free shipping for all orders </p>
      </div>
      <div className='right'>
        <div className='phone'>
          <BsFillTelephoneFill className='icon'/>
          <p>+971 123589685</p>
        </div>
        <div className='location'>
          <IoLocationSharp className='icon'/>
          <p>location</p>
        </div>

      </div>
    </div>
  )
}

export default Topbar
