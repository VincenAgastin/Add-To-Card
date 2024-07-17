import React, { useContext, useState } from 'react';
import './Product.css';
import { addCard } from '../App'; // Assuming addCard is the context from App

const Product = ({ product }) => {
  const { cart, setCart } = useContext(addCard);
  

  const name = product.name.length > 20 ? product.name.substring(0, 20) + "..." : product.name;

  const adCart = () => {
    setCart([...cart, product]);
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id))  };

  return (
    <div className='product'>
      <div className="img">
        <img src={product.pic} alt={product.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price ${product.amt} ${product.id}</p>
        {
          cart.includes((c) => c.id !== product.id)
          ? <button onClick={removeCart} className='btn-remove'>Remove from Cart</button>
          : <button onClick={adCart} className='btn-add'>Add to Cart</button>
        }
      </div>
    </div>
  );
};

export default Product;
