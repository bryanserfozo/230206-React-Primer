import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Header';
import Nav from './Components/nav/Nav';
import Home from './Components/home/Home';
import Footer from './Components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TTAAL from './Components/ttaal/TTAAL';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ttaal" element={<TTAAL />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
