import React from 'react'
import '../styles/PdtSection1.css'
import spec1 from '../assets/spec1.webp'
import spec2 from '../assets/spec2.webp'
import spec3 from '../assets/spec3.webp'
import spec4 from '../assets/spec4.webp'

const PdtSection1 = () => {
  return (
    <div>
        <div className='product-container'>
        <div className='pdt-heading'>
          <h1>Products</h1>
        </div>
        <div className='pdt-title'>
          <p id='title'>featured products</p>
        </div>
        <p id='info'>For our ten-year anniversary, we're re-envisioning our best-selling styles.</p>
      </div>
      <div className='pdts'>
        <div className='pdt-imgs'>
        <ul>
            <li>
                <h1 className='model'>bayamo</h1>
                <img src={spec1}></img>
                <h3 className='pdt-name'>aed 450 </h3>
                <button className='pdt-btn'> buy now</button>
            </li>

            <li>
            <h1 className='model'>akalio</h1>
                <img src={spec2}></img>
                <h3 className='pdt-name'>aed 296 </h3>
                <button className='pdt-btn'> buy now</button>
            </li>

            <li>
            <h1 className='model'>nefriyon</h1>
                <img src={spec3}></img>
                <h3 className='pdt-name'>aed 890 </h3>
                <button className='pdt-btn'> buy now</button>
            </li>

            <li>
            <h1 className='model'>trion</h1>
                <img src={spec4}></img>
                <h3 className='pdt-name'>aed 750 </h3>
                <button className='pdt-btn'> buy now</button>
            </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default PdtSection1