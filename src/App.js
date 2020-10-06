import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar'
import './styles/style.css'
import Details from './pages/Details';
import {connectAuction} from './functions/connectAuction'

const App = () => {

  // states variables//
  const [tokenData, setTokenData] = useState({})

  const connectToAuction = async () => {
    let currentTokenData = await connectAuction()
    setTokenData(currentTokenData)
  }
  //connecting to auction//
  useEffect(() => {
    connectToAuction()
  }, [])
  
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
          <Home tokenData={tokenData}/>
        </Route>
        <Route path='/details'>
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
