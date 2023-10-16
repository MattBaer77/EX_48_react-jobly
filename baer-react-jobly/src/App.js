import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar'
import Router from './Router'

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useState(null)

  const login = () => {




  }

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
