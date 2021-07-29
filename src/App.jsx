import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Layouts/Navbar';
import Content from './Components/Layouts/Content';
import { CartProvider } from './contexts/CartContext/CartContext';

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Content></Content>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
