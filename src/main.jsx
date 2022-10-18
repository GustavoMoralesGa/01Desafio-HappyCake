import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import Home from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/contact' element= {<Contact />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
