import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div>
             <p className='cart-heading'>Order summary</p>
                <div className='cart-info'>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: </p>
                    <p>Total Shipping Charge: </p>
                    <p>Tax: </p>
                    <p className='grand-total'>Grand Total: </p>
                </div>
                <button className='btn-clear'>Clear Cart <FontAwesomeIcon icon={faTrash} /></button>
                <button className='btn-review'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default Cart;