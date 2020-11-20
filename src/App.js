import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar'
import './styles/style.css'
import Details from './pages/Details';
import {connectAuction} from './functions/connectAuction'
import {getPoolData} from './functions/getPoolData'
import {web3Enabled} from './functions/web3Enabled'
import { useWallet, UseWalletProvider } from 'use-wallet'
import Web3 from "web3";

function App () {  
  // state variables//
  const [tokenData, setTokenData] = useState({})
  const [poolData, setPoolData] = useState({})
  const [accountAddr, setAccountAddr] = useState(null)

  // -----------------------//
  return (
      <div className='App'>
        <Navbar 
          brandTitle={process.env.PUBLIC_URL + 'assets/brand-title.svg'}
          brandLogo={process.env.PUBLIC_URL + 'defipedia_logo.png'}
          accountAddr={accountAddr}
          // connectWallet={connectWallet} 
        />
        <Switch>
          <Route exact path='/'>
            <Home 
              tokenData={tokenData} 
              poolData={poolData} 
              accountAddr={accountAddr}
              // connectWallet={connectWallet}
            />
          </Route>
          <Route path='/details'>
            <Details tokenData={tokenData} poolData={poolData} />
          </Route>
        </Switch>
      </div>
  );
}

export default () => (
  <UseWalletProvider
        chainId={1}
        connectors={{
        // This is how connectors get configured
            portis: { 
              dAppId: process.env.REACT_APP_PORTIS_KEY 
            },
            fortmatic: {
              apiKey: process.env.REACT_APP_FORTMATIC_KEY
            },
            walletconnect: {
              rpcUrl: 'https://bridge.walletconnect.org'
            },
            walletlink: {
              appName: 'DeFipedia Exchange',
              url: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`
            }
        }}
    >
      <App />
    </UseWalletProvider>
)
