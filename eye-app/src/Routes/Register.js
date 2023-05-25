import React, { useState } from 'react'
import loginimg from '../assets/pexels-ali-pazani-2811088.jpg'
import Axios from 'axios'
const Register = () => {

const[email , setEmail] = useState('')
const[userName , setUserName] = useState('')
const[password , setPassword ] = useState('')

const createUser = () => {
  Axios.post("http://localhost:3001/register",{

  email : email,
  username : userName,
  password : password,

  }).then((response) => {
    console.log(response)
  })
}

  return (
    <div>
        <div className='login-container'>
            <div className='left-signup'>
                <img src={loginimg} className='login-img'></img>
                <div className='signup-container'>
                    <p>Already have an account? 
                        <span>
                        <a href='/'><button id='signup-button'>login</button></a>
                        </span></p>
                </div>
            </div>
            
            <div className='right-login-form'>
                <h1>Let us know you</h1>
                <div className='form'>

                <form action='' >
                <label>Email</label><br/>
                    <input type='email'  onChange={(event) => {
                      setEmail(event.target.value)
                    }} ></input><br/><br/>

                    <label>Username</label><br/>
                    <input type='text'  onChange={(event) => {
                      setUserName(event.target.value)
                    }} ></input><br/><br/>

                    <label>Password</label><br/>
                    <input type='password'  onChange={(event) => {
                      setPassword(event.target.value)
                    }} ></input><br/><br/>    
                    <button type='submit' id='login-button' onClick={createUser}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
