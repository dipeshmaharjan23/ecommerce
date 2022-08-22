import React, { useState } from 'react'
import './top.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Options from '../option/Options.js';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import cream from '../../assests/cream.jpg'

const Top = () => {
    const INITIAL_PRICE = 1400;
    const [price, setPrice] = useState(INITIAL_PRICE)
    const [quantity, setQuantity] = useState(1)

    const increase = () => {
        setQuantity(quantity + 1)
        setPrice(price + INITIAL_PRICE)
    }

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            setPrice(price - INITIAL_PRICE)
        }

    }
    const discount = 0.10 * price;

    return (
        <div className='top'>
            <div className='top-part'>
                <div className='image'>

                    <div className="bigimage">
                        <img src={cream} alt="cushion" />
                    </div>

                    <div className="smallimage">
                        <div className="small">
                            <img src={cream} alt="cushion" />
                        </div>
                        <div className="small second">
                            <img src={cream} alt="cushion" style={{imageOrientation :"flip"}}/>
                        </div>
                        <div className="small third">
                            <img src={cream} alt="cushion" style={{imageOrientation :"flip"}}/>
                        </div>
                        <div className="small fourth">
                            <img src={cream} alt="cushion" style={{imageOrientation :"flip"}}/>
                        </div>
                        <div className="small fifth">
                            <img src={cream} alt="cushion" style={{imageOrientation :"flip"}}/>
                        </div>
                    </div>
                </div>
                <div className='text-part'>
                    <div className="first-text">

                        <h3>OSP Home Furnishings Wicker Papasan Chair with 360-Degree Swivel ,Brown Fame with Cream Cushion
                            <span>#1 in CHARTS</span>

                        </h3>
                        <div className='textt-right'>
                            <FavoriteBorderIcon className='love' />
                            <div>
                                Add to wishlist
                            </div>
                        </div>
                    </div>

                    <hr />

                    <Options />

                    <hr />
                    <div className="price">
                        <div className="price-left">
                            <h4 className='through'>NRs 1540</h4>
                            <h1>NRs. {price}</h1>
                            <div className="price-text">
                                <p>10% off</p>
                                <span>You save NRs {discount}</span>
                            </div>
                        </div>
                        <div className="price-right">

                            <div className="cart">
                                <h6>Quantity</h6>

                                <button className='btnn decrease' onClick={decrease}>-</button>
                                <h3>{quantity}</h3>
                                <button className='btnm increase' onClick={increase}>+</button>


                                <button className='btn-cart'><AddShoppingCartIcon /> Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className='description'>
                        <h1 className='title'>
                            About this item
                        </h1>
                        <ul>
                            <li>
                                Create a laid back vibe in your home with our twist on the classic papasan chair design
                            </li>
                            <li>
                                Nest into the generously large Dacron-filled cushion
                            </li>
                            <li>
                                Enjoy the boho styling of our durable resin wicker wrapped over a metal frame
                            </li>
                            <li>
                                Complete with a 360&deg; swivel to twist and turn to your heart's content
                            </li>
                            <li>
                                Add a bit of fun to your living room,family room or dorm with our easy ,casual Papasan Chair
                            </li>
                        </ul>
                    </div>

                    <div className="search">
                        <h3>Search your queries related to this product</h3>
                        <div className="search-item">
                            <SearchIcon className='searchIcon' />
                            <input type="text" placeholder='Your questions' className='inp' />
                        </div>
                    </div>

                </div>

            </div>
            <div className="middle">
                <div className="middle-title">
                    <h4>Description</h4>
                    <h4 className='seleted'>Specification</h4>
                    <h4>Questions/Answers</h4>
                    <h4>Ratings & Reviews</h4>
                </div>
                <hr />

                <div className="middle-text">

                    <div className="middle-left">
                        <h3>Technical Details</h3>

                        <div className="items">
                            <p>item Weight</p>
                            <p>29 pound</p>
                        </div>
                        <div className="items">
                            <p>Dimensions</p>
                            <p>38*40*31.5inches</p>
                        </div>
                        <div className="items">
                            <p>Item model number</p>
                            <p>BF29296BR-M52</p>
                        </div>
                    </div>
                    <div className="middle-right">

                        <h3>Other Details</h3>

                        <div className="items">
                            <p>item Weight</p>
                            <p>29 pound</p>
                        </div>
                        <div className="items">
                            <p>Dimensions</p>
                            <p>38*40*31.5inches</p>
                        </div>
                        <div className="items">
                            <p>Item model number</p>
                            <p>BF29296BR-M52</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top