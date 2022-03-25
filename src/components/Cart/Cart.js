import React from 'react';
import './Cart.css'

const Cart = () => {
  return (
    <div className='cart'>
      <h3 className='text-center'>Selected Watch</h3>

      <div className="d-grid gap-2">
        <button className="btn btn-outline-success fw-bold" type="button">Choose One For me</button>
        <button className="btn btn-outline-info fw-bold" type="button">Choose Again</button>
      </div>
    </div>
  );
};

export default Cart;