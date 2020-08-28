import React from 'react';
import './header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header-img">
                <img src={logo} alt=""/>

            </div>

            <div className="nav">
                <a href="/shop/">Shop</a>
                <a href="/Order">Manage Order</a>
                <a href="/count">Sell</a>
                <a href="/About">About Us</a>
            </div>
        </div>
    );
};

export default Header;