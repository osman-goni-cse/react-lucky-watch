import React from 'react';
import './FAQ.css'

const FAQ = () => {
  return (
    <div>

      <h4>Question-1: How React Works?</h4>
      <p>Answer: React is a Javascript library which is useful for creating user interfaces.React creates a virtual DOM to identify change in DOM tree.In React, Everything is component which known as React Component.Components are made of two main things: state and props.Each React component gives an output.The output is in JSX(Javascript XML) format. </p>

      <h4>Question-2: Difference between props and state.</h4>
      <p>Answer:
      <table class="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">props</th>
            <th scope="col">state</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </table>  
      </p>

    </div>
  );
};

export default FAQ;