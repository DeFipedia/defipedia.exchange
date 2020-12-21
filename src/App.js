import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import './styles/style.css'
import Details from './pages/Details';
import {web3Enabled} from './functions/web3Enabled'
import { useWallet, UseWalletProvider } from 'use-wallet'
import Home from './pages/Home'
import {getUniswapPoolData} from './functions/getUniswapPoolData'
import {getSalePrice} from './functions/getSalePrice'

function App () {  
  
  // const [tokenData, setTokenData] = useState({})
  const [uniswapPoolData, setuniswapPoolData] = useState({
    rate: 0
  })

  const [saleData, setSaleData] = useState({
    price: 0
  })
  //this variable is to handle wallet connection (by usinng aragon's use-wallet), and pass onto other components when required//
  const wallet = useWallet()


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    if(web3Enabled) {
      let currentSalePrice = await getSalePrice()
      setSaleData({price: currentSalePrice})
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
          wallet={wallet}
        />
        <Switch>
          <Route exact path='/'>
            <Home 
              uniswapData={uniswapPoolData}
              saleData={saleData}
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
        chainId={42} //chain Id should '1' for mainnet, 42 is for kovan testnet//
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
