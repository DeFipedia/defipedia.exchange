import React, {useState} from 'react'
import {Card, CardContent, Tooltip, Button, useTheme, Grid, TextField} from '@material-ui/core'
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
            <Grid container justify='center' spacing={2}>
                <Grid item>
                    {/* This is UniSwap Card */}
                    <AuctionCard 
                        title='Uniswap'
                        image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                        price={poolData.rate}
                        totalTokens='50'
                        learnMoreTag='Swap here!'
                    />
                </Grid>
                <Grid item>
                    {/* Sale Card */}
                    <AuctionCard 
                        title='Pre-sale'
                        image={process.env.PUBLIC_URL + 'assets/books-presale.png'}
                        price='dummy price'
                        totalTokens='950'
                        learnMoreTag='Buy direct!'
                    />
                </Grid>
                {/*@DEV: The auction-card element is used as masking layer*/}
                {/* <div className='auction-card-mask'>
                    </div>
                    <p className='auction-text'>Auction Closed</p> */}
                {/* This blob until here from last comment is used as masking layer for Auction card(old dutch aution car) */}
                <Grid item>
                    <AuctionCard 
                        title='Auction'
                        image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                        totalTokens='950'
                    />
                </Grid>
            </Grid>
            {/* @DEV: This is for rendering footer */}
            <footer>
                <p>Don't miss out, keep pace with all the latest</p>
                <span>
                    <input placeholder='Add an email address' />
                    <Button variant='comtained'>Subscribe</Button>
                </span>
                <section>
                    <i class="fab fa-discord"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-github-square"></i>
                    <i class="fab fa-telegram"></i>
                    <i class="fab fa-medium"></i>
                </section>
            </footer>
        </div>
    )
}

export default Home