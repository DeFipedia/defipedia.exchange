import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar'
import './styles/style.css'
import Details from './pages/Details';
import {connectAuction} from './functions/connectAuction'
import {getPoolData} from './functions/getPoolData'
const App = () => {
  
  
  // state variables//
  const [tokenData, setTokenData] = useState({})
  const [poolData, setPoolData] = useState({})

  const fetchData = async () => {
    let currentTokenData = await connectAuction()
    setTokenData(currentTokenData)
    let currentPoolData = await getPoolData()
    setPoolData(currentPoolData)
  }
  //connecting to auction//
  useEffect(() => {
    fetchData()
  }, [])
  
  // -----------------------//
  let navOptions = ['None Redeemed']
  return (
      <div className='App'>
      <Navbar 
        brandTitle={process.env.PUBLIC_URL + 'assets/brand-title.svg'}
        brandLogo={process.env.PUBLIC_URL + 'defipedia_logo.png'}
        navOptions = {navOptions}
      />
      <Switch>
        <Route exact path='/'>
          <Home tokenData={tokenData} poolData={poolData} />
        </Route>
        <Route path='/details'>
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
