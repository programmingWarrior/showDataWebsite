import React from 'react';
import './friend.css';
const Friend = (props) => {
    
    const title = props.name;
    return (
        <div className='address'>
            
            <h1>Name:  {title.name}</h1>
            <h2>Father Name: {title.father}</h2>
            <h2>Mother Name: {title.mother}</h2>
            <h2>Village Add:{title.village}</h2>
            <h2>Phone Num: {title.mob}</h2>
            <button onClick={()=> props.handle(title.name)}>Add me</button>
         </div>
    );
};

export default Friend;