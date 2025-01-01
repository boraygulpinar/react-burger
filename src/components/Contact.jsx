import React from 'react'
import '../styles/Contact.css'
import BannerImage from '../assets/banner.png'

function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${BannerImage})` }}></div>
            <div className='rightSide'>
                <h1>Bizimle İletişime Geçin</h1>
                <form>
                    <label>Ad Soyad</label>
                    <input type="text" placeholder='Lütfen adınızı soyadınızı giriniz...' />

                    <label>Email</label>
                    <input type="email" placeholder='Lütfen mailinizi giriniz...' />

                    <label>Mesaj</label>
                    <textarea rows="6" placeholder='Lütfen mesajınızı giriniz...'></textarea>

                    <button>Gönder</button>
                </form>
            </div>
        </div>
    )
}

export default Contact