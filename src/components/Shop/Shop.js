import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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
    useEffect(()=>{
        const storedCart=getStoredCart()
        const savedCart=[]
        console.log(storedCart);
        for (const id in storedCart) {
                const addedProducts = products.find(product=>product.id===id)
                if(addedProducts){
                    const quantity=storedCart[id]
                    addedProducts.quantity=quantity
                    savedCart.push(addedProducts)
                }
            }
            setCart(savedCart)
        },[products])
    
    // - ekhne handleAddToCart namer ekta function create kori 
    // ei function ta props hisebe Product.js file e pathai(map jekhne korsi oikh diye)
    // Product.js file e button er moddhe onClick e ei function tate parameter dei
    // oi parameter ta ekhne product hisebe catch kori and baki shob kaj kori
    const handleAddToCart=(selectedProduct)=>{
        let newCart=[]
        const exist = cart.find(product=>product.id===selectedProduct.id)
        if (!exist) {
            selectedProduct.quantity=1
            newCart=[...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product=>product.id!==selectedProduct.id)
            exist.quantity=exist.quantity+1
            newCart=[...rest,exist]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
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