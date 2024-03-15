import "./style.css"
import { Link } from "react-router-dom"

import React, { useEffect, useState } from 'react'

const NavBar = () => {
  const [classShow, setClassShow] = useState(true)

  useEffect(()=>{
    if(window.innerWidth <= 480){
      setClassShow(false)
    }else{
      setClassShow(true)
    }
  },[])

  const showNav = ()=>{
    setClassShow(!classShow)
  }
  return (
    <nav className="nav-main">
        <div className="logo">
            <h1>Car Space</h1>
        </div>

        <ul className={`list-nav`} style={{visibility: `${classShow ? "visible": "hidden"}`}}>
            <li><Link to={"/carros"}>Carros</Link></li>
            <li>Lojas</li>
            <li><Link to={"/acessorios"}>Acessórios</Link></li>
            <li>contato</li>
            <li className="login">Login <div></div></li>
            <li className="fechar" onClick={showNav}>X</li>
        </ul>
        <span className="open-close" style={{visibility: `${ classShow ? "visible" : "hidden"} }`}} onClick={showNav}>X</span>
    </nav>
  )
}

export default NavBar