import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  }, [])


  return (
    <div className='shop'>
      <div className="watches">
        <h2>Watch me</h2>
        <h4>Watches: {watches.length} </h4>
      </div>

      <div className="selected-items">

      </div>
    </div>
  );
};

export default Shop;