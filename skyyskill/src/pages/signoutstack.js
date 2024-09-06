import React, { useState } from 'react'
import './signout.css'
// import PersonIcon from '@mui/icons-material/Person';
//import KeyIcon from '@mui/icons-material/Key';

const Signoutstack = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function login() {
    localStorage.setItem('useremail', email)
    localStorage.setItem('userpassword', password)
  }

  return (
    <div className='login'>
 
      <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter valid Email'/>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter valid password'/>
      
      <button onClick={login}>LOGIN</button>

    </div>
  )
}

export default Signoutstack;
