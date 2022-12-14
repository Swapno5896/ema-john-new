import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    const handelAddToCart =(product) =>{
        const newCart = [...cart,product]
        setCart(newCart);
    }
 
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products)
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                  products.map(product=><Product
                    key={product.key}
                    product={product}
                    handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <p>Selected Item : {cart.length}</p>
                </div>
        </div>
    );
};

export default Shop;