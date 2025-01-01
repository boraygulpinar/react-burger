import React from 'react'
import '../styles/About.css'
import BannerYeni from '../assets/banneryeni.jpg'

function About() {
    return (
        <div className='about'>

            <div className='about-top' style={{ backgroundImage: `url(${BannerYeni})` }}>

            </div>

            <div className='about-bottom'>
                <h1>Hakkımızda</h1>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde aut voluptatum magni eveniet dignissimos harum quibusdam minima praesentium id necessitatibus, possimus dolor vero quasi error corporis ipsum sint. Rem quasi possimus iusto sed, quaerat quos dolorum vero! Voluptatibus assumenda vero, obcaecati quo ullam dignissimos consequatur esse in iste iusto odio asperiores aperiam cumque labore explicabo nulla minus. Fuga sit veniam ea voluptates asperiores non laborum, aperiam, sed, eveniet atque nesciunt! Dolorem aperiam optio totam, exercitationem veritatis sapiente commodi, mollitia maiores voluptas quasi nam corporis libero quo dolorum laudantium autem, numquam necessitatibus sed id? Aperiam ipsum quisquam rem quos sint a?</p>
            </div>

        </div>

    )
}

export default About