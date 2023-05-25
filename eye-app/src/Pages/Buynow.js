import React from 'react'
import '../styles/Buynow.css'
const Buynow = () => {
  return (
    <div className='main'>
            <div className='buynow-container'>
        <div className='buynow-heading'>
          <h1>Easy buy</h1>
        </div>
        <div className='buynow-title'>
          <p id='title'>buy easy steps</p>
        </div>
        <p id='info'>There are many variations of passages of Lorem Ipsum available,<br/>
but the majority in some form, by injected of passages ofeven slightly believable.</p>
      </div>
      <div class="flex-container">
        <div className='flex-boxes'id="odd">
        <div>1
        <h1 id='flex-heading'> Search Frame</h1>
        <p id='flex-info'> There are many<br/>
                            variations of of<br/>
                            available</p>
        </div>
        </div>
        <div className='flex-boxes'>
        <div>2
        <h1 id='flex-heading'> Virtual Try-On</h1>
        <p id='flex-info'> There are many<br/>
                            variations of of<br/>
                            available</p>
        </div>
        </div>
        <div className='flex-boxes'id="odd">
        <div>3
        <h1 id='flex-heading'>Easily checkout</h1>
        <p id='flex-info'> There are many<br/>
                            variations of of<br/>
                            available</p>
        </div>
        </div>
        <div className='flex-boxes'>
        <div>4
        <h1 id='flex-heading'>Reacive glasses</h1>
        <p id='flex-info'> There are many<br/>
                            variations of of<br/>
                            available</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Buynow
