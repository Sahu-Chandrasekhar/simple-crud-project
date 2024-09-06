import React from 'react'
import Header from './header'
import './dashboard.css'
import Outlet from './outlet'

const Dashboard = () => {
  return (
    <div id='dashboard'>
      <Header />
      <Outlet/>
    </div>
  )
}

export default Dashboard
