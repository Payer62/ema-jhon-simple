import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
      <div className="cart-info">
        <h3 className="cart-title">Order Summary</h3>
        <div>
          <p>Selected Item: {cart.length}</p>
        </div>
      </div>
    );
};

export default Cart;