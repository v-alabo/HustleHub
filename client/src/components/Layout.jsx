import React from 'react';
import Header from './Header';
import "../index.css"
import Home from '../Home';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header/>
      <main className='md:pt-20'>
      <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default Layout;
