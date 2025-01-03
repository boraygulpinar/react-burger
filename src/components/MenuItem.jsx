import React from 'react'

function MenuItem({ image, name, content, price }) {
    return (
        <div className='menu-item'>
            <div style={{ backgroundImage: `url(${image})` }}>

            </div>
            <h1>{name}</h1>
            <h6>{content}</h6>
            <p>
                <i>{price} ₺</i>
            </p>
        </div>
    )
}

export default MenuItem