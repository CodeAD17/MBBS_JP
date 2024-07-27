import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Link, Routes, NavLink } from 'react-router-dom';

import Main from './pages/main';

import Submit from './page/submit';


export class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <div>
          <header>
            <nav className="container">
              <div className="nav-links">
                
                <a href="/">Home</a>
                <a href="/#gallery">Gallery</a>
                <a href="/#services">Services</a>
                <a href="/#booking">Book Now</a>
              </div>
            </nav>
          </header>
          <Routes>
            
          <Route path='/' element={<Main/>}/>
            <Route path='/appoint' element={<Submit/>}/>
          </Routes>
        </div>
        </BrowserRouter>
      )
    }
}

export default App
