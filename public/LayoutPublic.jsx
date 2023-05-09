import React from 'react'
import { Outlet } from "react-router-dom"
import NavBar from './UI/NavBar'

const LayoutPublic = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer>Footer</footer>
    </>
  )
}

export default LayoutPublic