import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar'
import './styles/style.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar brandTitle='DeFipedia + $BOOKS' brandLogo={process.env.PUBLIC_URL + 'logo_small.svg'}/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
