import React from 'react';
import './FAQ.css'

const FAQ = () => {
  return (
    <div className='my-5'>

      <h4>Question-1: How React Works?</h4>
      <p><b>Answer:</b> React is a Javascript library which is useful for creating user interfaces.React creates a virtual DOM to identify change in DOM tree.In React, Everything is component which known as React Component.Components are made of two main things: state and props.Each React component gives an output.The output is in JSX(Javascript XML) format. </p>

      <h4>Question-2: Difference between props and state.</h4>
      <div>
      <b>Answer:</b>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" className='text-center'>Props</th>
            <th scope="col" className='text-center'>State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Props are used to communicate between components.</td>
            <td>States are used for rendering dynamic changes in component.</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Props can be accessed by the child component.</td>
            <td>States cannot be accessed by child component. </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Props make components reusable.</td>
            <td>State cannot make components reusable.</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Props are immutable.</td>
            <td>State is mutable.</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Props are read-only.</td>
            <td>States are asynchronous.</td>
          </tr>
        </tbody>
      </table>  
      </div>

    </div>
  );
};

export default FAQ;