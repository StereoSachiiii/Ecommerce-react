import React from 'react'
import Footer from '../components/footer/Footer.jsx'
import Header from '../components/header/Header.jsx'
import { Outlet } from 'react-router-dom'



const MainLayout = () => {
  return (
    <div className='w-screen h-screen overflow-hidden'>

    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>

    </div>
  )
}

export default MainLayout