import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import './styles/style.css'
import Details from './pages/Details';
import {web3Enabled} from './functions/web3Enabled'
import { useWallet, UseWalletProvider } from 'use-wallet'
import Home from './pages/Home'
import {getUniswapPoolData} from './functions/getUniswapPoolData'

function App () {  
  
  // const [tokenData, setTokenData] = useState({})
  const [uniswapPoolData, setuniswapPoolData] = useState({
    rate: 0
  })
  // const [accountAddr, setAccountAddr] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    if(web3Enabled) {
      // let currentTokenData = await connectAuction()
      // setTokenData(currentTokenData)
      let uniswapPoolData = await getUniswapPoolData()
      setuniswapPoolData(uniswapPoolData)
    }else{
      alert('Please install a Ethereum-compatible browser or extension like MetaMask to use this dApp')
    }
  }

  // -----------------------//
  return (
      <div className='App'>
        <Navbar 
          brandTitle={process.env.PUBLIC_URL + 'assets/brand-title.svg'}
          brandLogo={process.env.PUBLIC_URL + 'defipedia_logo.png'}
        />
        <Switch>
          <Route exact path='/'>
            <Home 
              uniswapData={uniswapPoolData}
            />
          </Route>
          <Route path='/details'>
            <Details 
              // tokenData={tokenData} 
              // uniswapData={uniswapPoolData} 
            />
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
