import React from 'react'
import '../styles/PdtSection2.css'
import img from '../assets/toa-heftiba-MRvBKn_ZlMM-unsplash.jpg'
import leftimg from '../assets/imgbin-sunglasses-goggles-optician-eyewear-glasses-hRm8ntr26iCXGJnmhvpzRNVaZ-removebg-preview.png'
const PdtSection2 = () => {
  return (
    <div>
        <div className='grid-container'>
            <div className='left-grid'>
                <div className='grid-title'>
                    <h3>modern glasses <br/>true moden classic</h3>
                </div>
                <div className='grid-info'>
                One morning, when Gregor Samsa woke<br/>
                from troubled dreams, he found <br/>
                himself transformed in his bed into a <br/>
                horrible vermin. He lay on his armour-likes
                </div>
                <div className='grid-img'>
                    <img src={leftimg} className='left-img'></img>
                </div>
                <div className='button1'>
                <button className='grid-btns' id='shop-btn'>shop now</button>
            </div>
            <div className='button2'>
            <button className='grid-btns'>view all</button>
            </div>
            </div>
            <div className='right-grid'>
                <img src={img} className='right-img'></img>
            </div>
        </div>
    </div>
  )
}

export default PdtSection2
