import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    let total=0;
    let totalShip=0;
    for(const product of cart){
        total=total+product.price;
        totalShip=totalShip+product.shipping;
    }
    const tax=(total*7)/100;
    const grandTotal=total+tax+totalShip;
    return (
        <div className='cart'>
             <h3>Order summary</h3>
            <h4>selected Item : {cart.length}</h4>
            <p>Selected Items : </p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: {totalShip}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h2>Grand Total: {grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;