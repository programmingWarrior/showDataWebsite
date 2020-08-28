import React from 'react';
import "./cart.css";

const Cart = (props) => {
    
    return (
        <div>
           <h3>Summary of Cart</h3>
    <h3>name:{props.cart}</h3>
        </div>
    );
};

export default Cart;