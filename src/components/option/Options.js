import React from 'react'
import './option.scss'
import black from '../../assests/black.jpg'
import darkbrown from '../../assests/darkbrown.jpg'
import cream from '../../assests/cream.jpg'
import orange from '../../assests/orange.webp'
import pink from '../../assests/pink.webp'

const Options = () => {
    return (
        <div className='option'>
            <div className='opt'>
                <span>Options :</span>
                Cream Cushion
            </div>
            <div className="products">
                <button className="items">
                    <img src={cream} alt="pant" />
                </button>
                <button className="items">
                    <img src={black} alt="pant" />
                </button>
                <button className="items">
                    <img src={darkbrown} alt="pant" />
                </button>
                <button className="items">
                    <img src={orange} alt="pant" />
                </button>
                <button className="items">
                    <img src={pink} alt="pant" />
                </button>
            </div>
        </div>
    )
}

export default Options