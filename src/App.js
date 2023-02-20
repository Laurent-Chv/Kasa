import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Lodging from './components/Lodging';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/scss/index.scss';

export default function App () {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/lodging/:id" element={<Lodging />}/>
            <Route path="*" element={<Error />}/>
         </Routes>
         <Footer />
   </BrowserRouter>
)
}