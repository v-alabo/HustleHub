import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Layout from './components/Layout';
import Home from './Home';
import Add from './pages/Add';
import Services from './pages/Services';
import Dashboard from './pages/Dashboard';
import ScrollToTop from "./components/ScrollTop.jsx";

function App() {

  return (
    <>
    <ScrollToTop />
      <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='/list-business' element={<Add/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/dashboard/:id' element={<Dashboard/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
