import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const product = (props) => {
    const {product,handelAddToCart} = props
    const { name, img, price, seller, ratings } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price : $ {price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Rating : {ratings}</small></p>
            </div>
            <button onClick={()=>handelAddToCart(props.product)} className='btn-cart'>
                <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /> </p>
            </button>

        </div>
    );
};

export default product;