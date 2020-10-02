import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar'
import './styles/style.css'
import Details from './pages/Details';

const App = () => {
  let navOptions = ['None Redeemed']
  return (
    <div className='App'>
      <Navbar 
        brandTitle='DeFipedia' 
        brandLogo={process.env.PUBLIC_URL + 'logo_small.svg'}
        navOptions = {navOptions}
      />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/details'>
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
