// import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './login.css'
import {json} from 'react-router-dom'
// import { useState } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Login = ({setToken}) => {

        const [email, setEmail]=useState("")
        const [password, setPassword]=useState("")

        const SubmitLogin =async (e) => {
            e.preventDefault()

        const response =await axios.post("http://localhost:5000/user/login",{email,password})
        
        if(response.data){
            localStorage.setItem("token",response.data.token)
            setToken(response.data.token)
            
        }

      }

      const logout =()=>{
        localStorage.removeItem('token')
        setToken(null)
      }

    return (
        <>

            <div className='sign-in'>
                <h2>LOGIN</h2>

                <form onSubmit={SubmitLogin}>
                    <div className='box'>
                        <label htmlFor='lab'>Email</label>
                        <input type='email' name='email'  value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='box'>
                        <label htmlFor='lab'>PASSWORD</label>
                        <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='flex'>
                        <div className='pas'>
                            <Link>Forgot Password</Link>
                        </div>
                        <div className='next-sigin'>
                            <ul>
                                <li><Link to={'/sigin'}>Create a new Account</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='btn2'>
                        <button type='submit'>Signin</button>
                    </div>
                </form>

            </div>

         <button onClick={logout}>Logout</button>

        </>
    )
}

export default Login
