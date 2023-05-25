import React from 'react'
import '../styles/PdtSection4.css'
import gridimg1 from '../assets/pexels-andrea-piacquadio-3812723.jpg'
import gridimg2 from '../assets/pexels--3839200.jpg'
import gridimg3 from '../assets/pexels-ali-pazani-2811088.jpg'

const PdtSection4 = () => {
  return (
    <div className='grid-container2'>
      <div class="grid-system">
  <div class="item1">
  <div className='text'>new opticals
  <button className='btn'>shop now</button>
  </div>
    <img src= {gridimg1} className='grid-img'></img>
  </div>

  <div class="item1">
  <div className='text'>looking good
  <button className='btn'>shop now</button>
  </div>
    <img src= {gridimg2} className='grid-img'></img>
  </div>
    </div>
    <div className='item3'>
    <div className='text2'> extensive collections
  </div>
  <button className='btn2'>shop now</button>
        <img src={gridimg3} className='grid-img'></img>
    </div>
    </div>
  )
}

export default PdtSection4
