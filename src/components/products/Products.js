

import React from 'react'
import './products.scss'

const Products = ({images,setSelectedImage}) => {


    return (
        <div className='image-item'>
            <div className='opt'>
                <span>Options :</span>
                Cream Cushion
            </div>
            <div className="product">
                {images.map((item) => {
                    return (
                        <div key={item.id} className="image-product">
                            <img src={item.image} alt={item.title} onClick={()=>setSelectedImage(item)}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products