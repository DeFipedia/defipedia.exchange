import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar'
import './styles/style.css'
import Details from './pages/Details';
import { Connectors} from 'web3-react'
import Web3Provider from 'web3-react';
import {useWeb3Context} from 'web3-react';
import Web3 from 'web3'
import connectWeb3 from './functions/connectWeb3'
const App = () => {
  // web 3 integration//
  connectWeb3()

  // -----------------------//
  let navOptions = ['None Redeemed']
  return (
      <div className='App'>
      <Navbar 
        brandTitle={process.env.PUBLIC_URL + 'assets/brand-title.svg'}
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
