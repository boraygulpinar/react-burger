import React from 'react'
import '../styles/Menu.css'
import { Data } from '../helpers/Data'
import MenuItem from './MenuItem'

function Menu() {
    return (
        <div className='menu'>
            <h1 className='menu-title'>Burgerlerimiz</h1>
            <div className='menu-list'>
                {
                    Data.map((burger, index) => {
                        return (
                            <MenuItem
                                image={burger.image}
                                name={burger.name}
                                content={burger.content}
                                price={burger.price}
                                key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menu