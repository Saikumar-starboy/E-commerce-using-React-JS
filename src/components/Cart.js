import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
