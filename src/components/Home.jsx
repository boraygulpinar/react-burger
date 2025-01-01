import React from 'react'
import '../styles/Home.css'
import BannerImage from '../assets/banneryeni.jpg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='mainPage' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='order'>
                <Link to='/menu'>
                    <button>SİPARİŞ VER</button>
                </Link>
            </div>
        </div>
    )
}

export default Home