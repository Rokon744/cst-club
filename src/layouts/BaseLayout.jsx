import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/layouts/NavBar'
import Footer from '../components/layouts/Footer'

const BaseLayout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default BaseLayout