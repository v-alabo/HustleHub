import React from 'react';
import Header from './Header';
import "../index.css"
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header/>
      <main className='md:pt-20 min-h-screen'>
      <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default Layout;
