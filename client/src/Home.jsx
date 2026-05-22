import React from 'react';
import Hero from './pages/Hero';
import Category from './pages/Category';
import Tut from './pages/Tut';
import Vendor from './pages/Vendor';
import Review from './pages/Review';
import Info from './pages/Info';
import Dashboard from './pages/Dashboard';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <Tut/>
      <Vendor/>
      <Review/>
      <Info/>
      <Dashboard/>
    </div>
  );
}

export default Home;

