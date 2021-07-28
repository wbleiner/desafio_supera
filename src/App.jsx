import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Layouts/Navbar';
import Content from './Components/Layouts/Content';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Content></Content>
      </BrowserRouter>
    </div>
  );
}

export default App;
