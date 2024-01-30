import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../../Component/ShopContent/shop-context'; 

 export const ProductProps = (props) => {

    const{id, Name ,price, productImage} = props.data;
    const { addToCart} =useContext(ShopContext)

  return (
    <div >
        <button className='bottn'>
            <img src={productImage}/>
        </button>

        <div className='description'>
            <p>
                <b>
                    {Name}
                </b>
            </p>
            <p>
                <b>
                   ₦{price}
                </b>
            </p>
            <button className='button' onClick={() => addToCart(id)}>Add To Cart</button>
        </div>
    </div>
  )
}

