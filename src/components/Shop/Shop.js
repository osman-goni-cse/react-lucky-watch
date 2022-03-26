import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Watch from '../Watch/Watch';
import './Shop.css'

const Shop = () => {

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  }, []);

  // const selectedItem = [];

  const [cart, setCart] = useState([]);

  const addToCartHandler = (selectedWatch) => {
    // console.log(selectedWatch);
    const exists = cart.find(item => item.id === selectedWatch.id)
    let newCart = [];

    if(!exists) {
      // selectedItem.push(selectedWatch);
      if(cart.length > 3) {
        alert('You already selected 4 items')
        newCart = [...cart]
      }
      else {
        newCart = [...cart, selectedWatch]
      }
    }
    else {
      newCart = [...cart];
    }
    setCart(newCart);

  }

  const chooseAgain = (setluckyWatch) => {
    setCart([]);
    setluckyWatch([]);
  }

  // console.log(cart);

  return (
    <div className='shop container'>
      <div className="watches row row-cols-1 row-cols-md-3 g-4">
        
        {
          watches.map(watch => <Watch
            key={watch.id}
            watch={watch}
            addToCartHandler={addToCartHandler}
          ></Watch>)
        }

      </div>

      <div className="selected-items">
      <Cart
        cart={cart}
        chooseAgain={chooseAgain}
      ></Cart>
      </div>
    </div>
  );
};

export default Shop;