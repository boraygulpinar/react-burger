import React from 'react'
import '../styles/Navbar.css'
import BurgerLogo from '../assets/burgerlogo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='main'>
                <img src={BurgerLogo} alt="" />
                <div className='main-link'>
                    <Link to="/">Anasayfa</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">Hakkımızda</Link>
                    <Link to="/contact">İletişim</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar