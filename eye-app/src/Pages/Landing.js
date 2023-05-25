import React from 'react'
import Products from '../Pages/Products'
import Buynow from '../Pages/Buynow'
import Services from '../Pages/Services'
import Aboutus from '../Pages/Aboutus'
import Contactus from '../Pages/Contactus'
import Home from './Home'

const Landing = () => {
  return (
    <div>
      <Home />
      <Products/>
      <Buynow/>
      <Services/>
      <Aboutus/>
      <Contactus/>
    </div>
  )
}

export default Landing
