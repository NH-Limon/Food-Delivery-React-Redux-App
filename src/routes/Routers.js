import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import AllFoods from '../pages/AllFoods';
import FoodDetails from '../pages/FoodDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/foods' element={<AllFoods />} />
      <Route path='/foods/:id' element={<FoodDetails />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
};

export default Routers;
