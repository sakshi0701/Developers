import React from 'react';
import one from './1.webp'
export default function EmptyCart() {
  return (
    <div className="mt-5">
      <div className="row">
        <img style={{transform:"scale(0.25)",position:'relative',bottom:"10rem"}} src={one} alt=""/>
        <div style={{position:"relative",left:"20rem",bottom:"30rem",opacity:"0.76"}}>
          <h1>Your cart is currently empty</h1>
        </div>
      </div>
    </div>
  );
}