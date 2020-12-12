import React, {useState} from 'react'
import {useTheme, Grid} from '@material-ui/core'
import SaleCard from '../components/SaleCard'
import {Button} from '../components/Button'
import {Footer} from '../components/Footer'
import {convertWeiToETH} from '../functions/convertWeiToETH'

const HomeDesktop = (props) => {
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

    // const convertToETH = () => {
    //     if(tokenData.tokenPrice) {
    //         let tokenPrice = convertWeiToETH(tokenData.tokenPrice)
    //         tokenDataETH.tokenPrice = tokenPrice.substring(0,3)
    //         let tokensRemaining = convertWeiToETH(tokenData.tokensRemaining)
    //         tokenDataETH.tokensRemaining = tokensRemaining.substring(0,3)
    //     }
    // }    

    // convertToETH()

    return(
        <div className='home-page'>
            <Grid container justify='center' spacing={2}>
                <Grid item>
                    {/* This is UniSwap Card */}
                    <section>
                        <SaleCard 
                            title='Uniswap'
                            image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                            price='200'
                            totalTokens='50'
                            learnMoreTag='Swap here!'
                        />
                        <Button label='Buy' />
                        <Button label='Sell on Uniswap' />
                    </section>
                </Grid>
                <Grid item>
                    {/* Sale Card */}
                    <section>
                        <SaleCard 
                            title='Pre-sale'
                            image={process.env.PUBLIC_URL + 'assets/books-presale.png'}
                            price='200'
                            totalTokens='950'
                            learnMoreTag='Buy direct!'
                        />
                        <Button label='Buy' />
                        <Button label='Redeem (coming soon)' />
                    </section>
                </Grid>
                {/*@DEV: The auction-card element is used as masking layer*/}
                <div className='auction-card-mask'>
                </div>
                <p className='auction-mask-text'>Auction Closed</p>
                {/* This blob until here from last comment is used as masking layer for Auction card(old dutch aution card) */}
                <Grid item>
                    <section>
                        <SaleCard 
                            title='Auction'
                            image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                            totalTokens='950'
                        />
                        <Button label='Withdraw deposit' />
                    </section>
                </Grid>
            </Grid>    
            <Footer />
        </div>
    )
}

export default HomeDesktop