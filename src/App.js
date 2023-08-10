import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const initialProducts = [
    { id: 1, name: 'Levis', price: 10, image: 'https://images.meesho.com/images/products/128668571/o00bi_512.webp' },
    { id: 2, name: 'Pepe jeans', price: 20, image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg' },
    { id: 3, name: 'spyker', price: 20, image: 'https://lowpricesaree.in/wp-content/uploads/2021/08/roadster-men-charcoal-grey-cotton-solid-casual-shirt.jpg' },
    { id: 4, name: 'Armani', price: 20, image: 'https://assets.ajio.com/medias/sys_master/root/20230728/A6XT/64c3a7cbeebac147fc919f21/-1117Wx1400H-410294420-1100-MODEL.jpg' },
    { id: 5, name: 'Roadster', price: 20, image: 'https://5.imimg.com/data5/XO/AE/MY-39077357/mens-check-shirts-500x500.jpg' },
    { id: 6, name: 'Balmain', price: 20, image: 'https://www.theelocalstore.com/wp-content/uploads/2022/04/balmain-paris-t-shirt-available-at-low-price-.jpg' }
  ];

  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = itemToRemove => {
    const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
  };

  return (
    <div className="app">
      <header>
        <h1>E-Commerce Website</h1>
      </header>
      <ProductList products={initialProducts} onAddToCart={addToCart} />
      <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
    </div>
  );
};

export default App;
