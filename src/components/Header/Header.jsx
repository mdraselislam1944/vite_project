import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div className='header'>
            <div className='nav-image'>
            <img src={logo} alt="" />
            </div>
            <div className='nav-anchor'>
                <a href="Order">Order</a>
                <a href="Order-review">Order Review</a>
                <a href="Manage-inventory">Manage Inventory</a>
                <a href="Login">Login</a>
            </div>
        </div>
    );
};

export default Header;