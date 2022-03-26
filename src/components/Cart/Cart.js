import React, { useState } from 'react';
import Luckywatch from '../Luckywatch/Luckywatch';
import './Cart.css'

const Cart = (props) => {

  let cart = props.cart;
  // const {name} = cart; 
  // console.log(props.cart);

  const [luckyWatch, setluckyWatch] = useState([]);

  const chooseOne = () => {
    let myWatch = [];
    const idx = Math.floor(Math.random()*cart.length);
    
    if(cart.length > 0) {
      myWatch.push(cart[idx]);
    }

    setluckyWatch(myWatch);
  }
  
  return (
    <div className='cart'>
      <h3 className='text-center'>Selected Watch</h3>
      {
        cart.map(item => <p key={item.id} className='text-center'>{item.name}</p>)
      }
      <div className="d-grid gap-2">
        <button onClick={chooseOne} className="btn btn-outline-success fw-bold" type="button" >Choose One For me</button>

        <button onClick={() => props.chooseAgain(setluckyWatch)} className="btn btn-outline-info fw-bold" type="button">Choose Again</button>
      </div>
      {
        luckyWatch.map(luck => <Luckywatch
          key={luck.id}
          mywatch={luck}
        ></Luckywatch>)
      }
    </div>
  );
};

export default Cart;