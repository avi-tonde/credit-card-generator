import React from 'react';
import './toast.css';


function Toast() {
    return (
        <div className="toast">
            <img src="resources/success.png" alt='Success Icon'></img>
            <h4>Card Generated Successfully !</h4>
        </div>
    )
}

export default Toast