import React, { useState } from 'react'
import './Login.css'
import Axios from 'axios'
import loginimg from '../assets/pexels-ali-pazani-2811088.jpg'
import { useNavigate } from 'react-router'

const Login = () => {

    const[loginUserName, setLoginUserName] = useState("")
    const[loginPassword, setLoginPassword] = useState("")
    const navigateTo = useNavigate()

    const loginUser = () => {
        Axios.post("http://localhost:3001/login",{

        username : loginUserName,
        password : loginPassword,
      
        }).then((response) => {
          console.log(response)
          if(response.data.message){
            navigateTo('/login')
          }else{
            navigateTo('/landing')
          }
        })
      }

  return (
    <div>
        <div className='login-container'>
            <div className='left-signup'>
                <img src={loginimg} className='login-img'></img>
                <div className='signup-container'>
                    <p>Don't have an account? 
                        <span>
                            <a href='/register'><button id='signup-button'>Sign Up</button></a>
                        </span></p>
                </div>
            </div>
            <div className='right-login-form'>
                <h1>Welcome back</h1>
                <div className='form'>
                    <label>Username</label><br/>
                    <input type='text'onChange={(event) => {
                        setLoginUserName(event.target.value)
                    }}
                    ></input><br/><br/>

                    <label>Password</label><br/>
                    <input type='password' onChange={(event) => {
                        setLoginPassword(event.target.value)
                    }}
                    ></input><br/><br/>

                    <button id='login-button' onClick={loginUser} 
                    >login </button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Login