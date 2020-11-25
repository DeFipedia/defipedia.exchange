import React, {useState} from 'react'
import {Card, CardContent, Tooltip, Button, useTheme} from '@material-ui/core'
import Popup from '../components/Popup'
import CardModal from '../components/CardModal'
import BuyModal from '../components/BuyModal'
import {convertWeiToETH} from '../functions/convertWeiToETH'
import {withdrawCommit} from '../functions/withdrawCommit'
import AuctionCard from '../components/AuctionCard'

const Home = (props) => {
    const {tokenData, poolData, accountAddr, connectWallet}  = props
    // for theme//
    const theme = useTheme()
    // for state //
    const [open, setOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [triggerBuyModal, setTriggerBuyModal] = useState(false)
    // token data eth is to use calue of token in ETH as smart contracts return value in Wei and to avoid mutating actual response from smart contracts//
    const tokenDataETH ={}
    // methods //
    const showComingSoon = () => {
        setOpen(true) 
    }
    const showDynamicPricingStatModal = () => {
        setModalOpen(true)
    }
    const closeDynamicPricingModal = () => {
        setModalOpen(false)
    }
    const showBuyModal = () => {
        setTriggerBuyModal(true)
    }

    const closeBuyModal = () => {
        setTriggerBuyModal(false)
    }

    const convertToETH = () => {
        if(tokenData.tokenPrice) {
            let tokenPrice = convertWeiToETH(tokenData.tokenPrice)
            tokenDataETH.tokenPrice = tokenPrice.substring(0,3)
            let tokensRemaining = convertWeiToETH(tokenData.tokensRemaining)
            tokenDataETH.tokensRemaining = tokensRemaining.substring(0,3)
        }
    }    

    convertToETH()

    return(
        <div className='home-page'>
            <AuctionCard 
                title='Uniswap'
                image={process.env.PUBLIC_URLassets + '/cover-art.jpg'}
                price={poolData.rate}
            />
            {/*@DEV: The auction-card element is used as masking layer*/}
            <div className='auction-card-mask'>
            </div>
            <p className='auction-text'>Auction Closed</p>
            <AuctionCard 
                title='Auction'
            />
        </div>
    )
}

export default Home