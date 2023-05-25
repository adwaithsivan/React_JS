import React from 'react'
import '../styles/Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='main-wrap'>
      <div className='footer-wrap'>
        <div className='footer-wrap1'>
            <div className='footer-section'>
                <h1>Contact us</h1>
                    <p>united arab emirates</p>
                    <p>+971 2569 78956,</p>
                    <p>+971 2569 78956,</p>
                    <p>info@eyenation.com</p>
            </div>
            <div className='footer-section'>
                <h1>My Account</h1>
                    <p>the board</p>
                    <p>accessories</p>
                    <p>faq</p>
                    <p>terms and conditions</p>
            </div>
            <div className='footer-section'>
                <h1>sign up to your news letter</h1>
                    <form action=''>
                        <input type='email' placeholder='enter your email'></input>
                        <button type='submit' className='sub-btn'>send</button>
                    </form>
                    <h1 className='follow'>Follow us</h1>
                    <AiFillFacebook className='social-icons'/>
                    <AiFillInstagram className='social-icons' id='insta'/>
            </div>
        </div>

        <div className='footer-wrap2'>
            <div className='footer-section'>
            <h1>HELP & SUPPORT</h1>
                    <p>FAQ</p>
                    <p>Contact us</p>
                    <p>returns</p>
                    <p>orders</p>
            </div>
            <div className='footer-section'>
                <h1>shopping</h1>
                    <p>sunglasses</p>
                    <p>eyeglasses</p>
                    <p>contact lenses</p>
                    <p>accessories</p>
            </div>
            <div className='footer-section'>
                <h1>information</h1>
                    <p>store locator</p>
                    <p>aboutus</p>
                    <p>carrers</p>
                    <p>information</p>
            </div>
            <div className='footer-section'>
                <h1>services</h1>
                    <p>frame size</p>
                    <p>buying guid</p>
                    <p>eye nation group</p>
                    <p>virtual try on</p>
                    
            </div>
        </div>
      </div>
      <div  className='bottom-footer'>
            <p>@ 2023 Eye Nation Group LLC. All Rights Reserved.
</p>
        </div>
    </div>
  )
}

export default Footer
