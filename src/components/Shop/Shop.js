import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    
    useEffect(()=>{
          fetch(`products.json`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
    },[])

    // - ekhne handleAddToCart namer ekta function create kori 
    // ei function ta props hisebe Product.js file e pathai(map jekhne korsi oikh diye)
    // Product.js file e button er moddhe onClick e ei function tate parameter dei
    // oi parameter ta ekhne product hisebe catch kori and baki shob kaj kori
    const handleAddToCart=(product)=>{
        // ei line er mane hocche ager item jegula ase oigular sthe product er item gula add kore deya array er moddhe, array.push er mto but array.push eta ei jaygay kaj korbe na
        const newCart=[...cart, product]
        setCart(newCart)
    };
    return (
        <div className='shop'>
            <div className="products-container">{
                products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
            }</div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;