import React from 'react';
import './Luckywatch.css'

const Luckywatch = (props) => {
  const {name, price} = props.mywatch;

  return (
    <div>
      <h3 className='text-center'>Lucky Watch</h3>
      <p className='text-center'>{name}</p>
      <p className='text-center'>Price: {price} Tk.</p>
    </div>
  );
};

export default Luckywatch;