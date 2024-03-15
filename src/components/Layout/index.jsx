import React from 'react'
import "../../App.css"
import NavBar from '../navBar'
import Footer from '../footer'

const MainLayout = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}

export default MainLayout