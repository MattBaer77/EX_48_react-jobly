import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar'
import Router from './Router'

function App() {

  return (

    <div className='App'>

      <BrowserRouter>

        <NavBar />

        <Router />

      </BrowserRouter>

    </div>

  );
}

export default App;
