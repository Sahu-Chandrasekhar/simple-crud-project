import React from 'react'
import './header.css'
import Person4Icon from '@mui/icons-material/Person4';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  function logout() {
    localStorage.removeItem('useremail')
    localStorage.removeItem('userpassword')
  }
  return (
    <div id='header'>
      <Person4Icon className='icon' />
      <button onClick={logout}><LogoutIcon />Logout</button>
    </div>
  )
}

export default Header