import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import axios from 'axios'


function Layout() {
    
  return (
    <>
    <Header/>
    <main>
      <Outlet></Outlet>
    </main>
    <Footer/>
    </>
  )
}

export default Layout