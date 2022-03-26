import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Watch.css'

const Watch = (props) => {
  // console.log(props);
  // console.log(props.watch);
  const {name, img, price} = props.watch;
  const addToCartHandler = props.addToCartHandler;

  // console.log(addToCartHandler);
  // console.log(props.addToCartHandler);
  // console.log(name, img, price);
  
  return (
    <div>
      
    <div className="col product">
      <div className="card h-100">
        <img src={img} alt="Not Found" className='card-img-top'></img>
        
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: {price} Tk </p>
        </div>
        <div className="mt-5">
          <button onClick={() => addToCartHandler(props.watch)} className="cart-btn">
            <p className='cart-text'>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Watch;