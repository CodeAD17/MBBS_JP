import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Link, Routes, NavLink } from 'react-router-dom';
import Appoint from './pages/appoint';
import Home from './pages/home';


export class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <div>
          <header1>
            <nav className="container">
              <div className="nav-links">
                
                <a href="/">Home</a>
                <a href="/#gallery">Gallery</a>
                <a href="/#services">Services</a>
                <a href="/#booking">Book Now</a>
              </div>
            </nav>
          </header1>
          <Routes>
            <Route path='/appoint' element={<Appoint/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
        </BrowserRouter>
      )
    }
}

export default App
