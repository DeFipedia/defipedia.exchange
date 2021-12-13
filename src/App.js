import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import './styles/style.css'
import { useWallet, UseWalletProvider } from 'use-wallet'
import Home from './pages/Home'
import {getUniswapPoolData} from './functions/getUniswapPoolData'
import {getSalePrice} from './functions/getSalePrice'
import LandingPage from './pages/Landing.jsx'
import getAvailableBOOKS from './functions/getAvailableBOOKS'
import Footer from './components/Footer';
function App () {  

  const [uniswapPoolData, setuniswapPoolData] = useState({
    rate: 0
  })

  //@DEV: data in here is coming from two different methods//
  //look at "fetchData" for more info//
  const [saleData, setSaleData] = useState({
    price: 0,
    availableBOOKS: 0
  })


  // //this variable is to handle wallet connection (by using aragon's use-wallet), and pass onto other components when required//
  const wallet = useWallet()

  const fetchData = async () => {
      let currentSalePrice = await getSalePrice()
      setSaleData({price: currentSalePrice})
      let availableBOOKS = await getAvailableBOOKS()
      setSaleData(prevState => {
        //@DEV: "prevState"is necessary to keep existing data and only update this field// 
        return {...prevState, availableBOOKS: availableBOOKS}
      })
      let uniswapPoolData = await getUniswapPoolData()
      setuniswapPoolData(uniswapPoolData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  // -----------------------//
  return (
       
     <div className='App'>
       <Navbar />
        <Switch>
          <Route exact path='/'>
            <LandingPage saleData={saleData} />
          </Route>
          <Route exact path='/home'>
            <Home 
              uniswapData={uniswapPoolData}
              saleData={saleData}
              wallet={wallet}
              />
          </Route>
        </Switch>
        <Footer />
      </div>
  );
}

export default () => (
  <UseWalletProvider
        chainId={1} //chain Id should '1' for mainnet, 42 is for kovan testnet//
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
