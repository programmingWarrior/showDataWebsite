import React from 'react';
import Friend from '../Friend/Friend';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import './shop.css';

const Shop = () => {
    const friend = fakeData;
    const [singleFriend, setSingleFriend] = useState(friend);
    const [handler, setHandler] = useState([]);

    const handleButton = (course)=>{
        const newHandler = [...handler,course];
        setHandler(newHandler);
    } ;
    
    return (
        <div className="item-container">
            <div className="item">
            
            {singleFriend.map((item)=><Friend name={item} handle={handleButton}></Friend>)} ;
                
            </div>

            <div className="cart">
                <Cart cart={handler}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;