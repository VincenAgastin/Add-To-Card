import './Cart.css';
import React, { useContext, useState, useEffect } from 'react';
import { addCard } from '../App';

const Cart = () => {
  const { cart } = useContext(addCard);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = cart.reduce((acc, product) => acc + product.amt, 0);
      setTotal(totalAmount);
    };
    calculateTotal();
  }, [cart]);

  return (
    <>
      <h1 className='cart-heading'>Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt={product.name} />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>Price ${product.amt}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className='cart-amount'>Total Amount ${total}</h2>
    </>
  );
};

export default Cart;
