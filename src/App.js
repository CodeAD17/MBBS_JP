import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Link, Routes, NavLink } from 'react-router-dom';

import Main from './pages/main';

import Submit from './page/submit';


export class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <div>
         
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
