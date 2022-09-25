import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='menu'>
           <img src={logo} alt="" />
           <div className='menu-links'>
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About</a>
           </div>
        </nav>
    );
};

export default Header;