import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import {FiSearch} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const navigate = useNavigate()
  const logoutUser = () => {
    navigate('/')
  }

  return (
    <div className='nav-container'>
      <div className='logo'>
        <a href='/'><img src={logo} width={150}></img></a>
      </div>
      <div className='nav-links'>
        <ul>
          <li>
            <a href='products'>Products</a>
          </li>
          <li>
            <a href='/buynow'>buy now</a>
          </li>
          <li>
            <a href='/services'>services</a>
          </li>
          <li>
            <a href='/aboutus'>about us</a>
          </li>
          <li>
            <a href='/contact'>contact us</a>
          </li>
        </ul>
      </div>
      <div className='log-control'>
        <div className='login-logout'>
      
          <button className='btn' onClick={logoutUser}>Logout </button>
          
          </div>
        
        <div className='profile'>
          <FiSearch className='icons' />
          <CgProfile className='icons' />
          <AiOutlineHeart className='icons' />
          <BsBag className='icons' />
        </div>
      </div>
    </div>
  )
}

export default Navbar