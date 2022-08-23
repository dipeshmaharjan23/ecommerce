import React from 'react'
import './option.scss'
// import black from '../../assests/black.jpg'
// import darkbrown from '../../assests/darkbrown.jpg'
// import cream from '../../assests/cream.jpg'
// import orange from '../../assests/orange.webp'
// import pink from '../../assests/pink.webp'

// import images from '../service/Service.js'

const Options = ({images,setSelected}) => {


    return (
        <div className='option'>
            <div className='opt'>
                <span>Options :</span>
                Cream Cushion
            </div>
            <div className="products">
                {images.map((item, index) => {
                    return (

                        <div className="items" key={index}>
                            <img src={item} alt="cushions" onClick={()=>setSelected(item)}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Options