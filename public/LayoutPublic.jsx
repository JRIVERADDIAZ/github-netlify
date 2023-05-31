import React from 'react'

import { Outlet } from "react-router-dom"

import NavBar from './UI/NavBar'
import Footer from './components/footer/Footer'

import Loading from  './routes/Loading'

import './UI/styles/global-layout.css'

const LayoutPublic = () => {
  return (
    <>
      <div className='global-layout'>
        <div className='navbar-global-layout' >
          <NavBar />
        </div>
        <div className='contain-global-layout'>
          <Outlet />
        </div>
        <footer className='footer-global-layout' >
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default LayoutPublic