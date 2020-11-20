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

  // const checkWalletConnection = async () => {
  //   let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
  //   let selectedAccount = accounts[0]        
  //   setAccountAddr(selectedAccount)
  // }

  // const fetchData = async () => {
  //   if(web3Enabled) {
  //     let currentTokenData = await connectAuction()
  //     setTokenData(currentTokenData)
  //     let currentPoolData = await getPoolData()
  //     setPoolData(currentPoolData)
  //   }else{
  //     alert('Please install a Ethereum-compatible browser or extension like MetaMask to use this dApp')
  //   }
  // }

  // const connectWallet = async () => {
  //     if(web3Enabled) {
  //       let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
  //       let selectedAccount = accounts[0]        
  //       setAccountAddr(selectedAccount)
  //     }
  // }
  //connecting to auction, checking for wallet connection //
  // useEffect(() => {
  //   fetchData()
  //   checkWalletConnection()
  // }, [])


  //attempt to aragon connect use-wallet//
  const wallet = useWallet()

  const connectWallet = async () =>  {
    await wallet.connect()
    console.log(wallet.account)
  }

  // -----------------------//
  return (
      <div className='App'>
        <Navbar 
          brandTitle={process.env.PUBLIC_URL + 'assets/brand-title.svg'}
          brandLogo={process.env.PUBLIC_URL + 'defipedia_logo.png'}
          accountAddr={accountAddr}
          connectWallet={connectWallet} 
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
      portis: { dAppId: '47c91e55-8ecf-45f6-937d-9015bcf65b36' },
    }}
  >
  <App />
  </UseWalletProvider> 
) 
