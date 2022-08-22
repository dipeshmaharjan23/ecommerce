import React from 'react'
import './bottom.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';


const Bottom = () => {
    return (
        <div className='bottom'>
            <div className="text">
                <div className="contents">
                    <h3>COSTOMER CARE</h3>
                    <Link to="/">Account</Link>
                    <Link to="/">My Orders</Link>
                    <Link to="/">Wishlist</Link>
                    <Link to="/">FAQS</Link>
                    <Link to="/">Account</Link>
                </div>

                <div className="contents">
                    <h3>ABOUT</h3>
                    <Link to="/">Company Info</Link>
                    <Link to="/">Interior Works</Link>
                </div>

                <div className="contents">
                    <h3>USERS POLICY</h3>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Terms and Conditions</Link>
                    <Link to="/">Data Policy</Link>
                    <Link to="/">Cookies Policy</Link>
                    <Link to="/">Refund Policy</Link>
                    <Link to="/">Return Policy</Link>
                </div>

                <div className="contents">
                    <h3>CONNECT WITH US</h3>

                    <div className="icons">
                        <InstagramIcon className='icon' />
                        <TwitterIcon className='icon' />
                        <FacebookIcon className='icon' />
                        <GoogleIcon className='icon' />
                    </div>

                    <div className="link">
                        <h3>SOON ON:</h3>
                        <Link to="https://play.google.com/store/games">
                            <img src="https://pilot-rc.com/wp-content/uploads/2019/07/Google-Play-Icon.png" alt=" googleplay" className='image' />
                        </Link>
                        <Link to="https://www.apple.com/store">
                            <img src="https://icon-library.com/images/apple-store-icon/apple-store-icon-4.jpg" alt=" googleplay" className='image' />
                        </Link>

                    </div>
                </div>
                <div className="contents">
                    <h3>STAY CONNECTED</h3>
                    <div className='icon-connect'>
                        <LocationOnOutlinedIcon />
                        <p>Banseshwor,Kathmandu,Nepal</p>
                    </div>
                    <div className='icon-connect'>
                        <PersonAddOutlinedIcon />
                        <p>+977-91000000000</p>
                    </div>
                    <div className='icon-connect'>
                        <EmailOutlinedIcon />
                        <p>test@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="search">
                <h3>Subscribe to get amaming offers</h3>
                <input type="text" placeholder='Enter your email' />
            </div>
        </div>
    )
}

export default Bottom