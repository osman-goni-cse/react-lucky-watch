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
  }, [])


  return (
    <div className='shop container'>
      <div className="watches row row-cols-1 row-cols-md-3 g-4">
        
        {
          watches.map(watch => <Watch
            key={watch.id}
            watch={watch}
          ></Watch>)
        }

      </div>

      <div className="selected-items">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;