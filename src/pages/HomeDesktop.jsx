import React, {useState} from 'react'
import {Grid} from '@material-ui/core'
import SaleCard from '../components/SaleCard'
import {Button} from '../components/Button'
import {Footer} from '../components/Footer'
import BuyModal from '../components/BuyModal'
import {withdrawCommit} from '../functions/withdrawCommit'
import Web3SignIn from '../components/Web3SignIn'

const HomeDesktop = (props) => {

    const {uniswapData, saleData, wallet} = props

    // for handling modal triggers //
    const [triggerBuyModal, setTriggerBuyModal] = useState(false)

    //for handling state of Web3SignIn - wallet connection modal//
    const [triggerWeb3SignIn, setTriggerWeb3SignIn] = useState(false)

    // methods //
    const showBuyModal = () => {
        setTriggerBuyModal(true)
    }

    const closeBuyModal = () => {
        setTriggerBuyModal(false)
    }

    const showWeb3SignIn = () => {
        setTriggerWeb3SignIn(true)
    }

    const closeWeb3SignInModal = () => {
        setTriggerWeb3SignIn(false)
    }

    const withdrawFromDutchSwap = () => {
        withdrawCommit(wallet.account)
    }

    const redirectToUniswap = () => {
        window.open(`${process.env.REACT_APP_UNISWAP_LINK}`, '_blank')
    }
    return(
        <div className='home-page'>
            <Grid container justify='center' spacing={2}>
                <Grid item>
                    {/* This is UniSwap Card */}
                    <section className='uniswap-card'>
                        <SaleCard 
                            title='Uniswap'
                            image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                            price={uniswapData.rate}
                            totalTokens='50'
                            desc='Support the free market'
                            learnMoreTag='Swap here!'
                        />
                        <Button label='Buy' variant='primary' onClick={redirectToUniswap} />
                        <Button label='Sell on Uniswap' variant='disabled'/>
                    </section>
                </Grid>
                <Grid item>
                    {/* Sale Card */}
                    <section className='pre-sale-card'>
                        <SaleCard 
                            title='Pre-sale'
                            image={process.env.PUBLIC_URL + 'assets/books-presale.png'}
                            price={saleData.price}
                            totalTokens='950'
                            desc='Support DeFiPedia development'
                            learnMoreTag='Buy direct!'
                        />
                        {   wallet.account != null
                            ?
                            <Button label='Buy' variant='secondary' onClick={showBuyModal}/>
                            :
                            <Button label='Connect Wallet' variant='secondary' onClick={showWeb3SignIn}/>
                        }
                        {/* <Button label='Buy' variant='secondary' onClick={showBuyModal}/> */}
                        <Button label='Redeem (coming soon)' variant='disabled' className='subscribe-btn-desktop' />
                    </section>
                </Grid>
                <Grid item>
                    <section className='dutch-auction-card'>
                        {/* this div is masking layer */}
                        <div className='dutch-auction-mask' />
                        <SaleCard 
                            title='Auction'
                            image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                            totalTokens='950'
                            desc='The pre-sale has moved. Early participants can reclaim their pre-sale deposits here.'
                        />
                        <Button label='Withdraw deposit' variant='default' onClick={withdrawFromDutchSwap} />
                    </section>
                </Grid>
            </Grid>    
            <Footer />
            <BuyModal 
                open={triggerBuyModal} 
                close={closeBuyModal} 
                wallet={wallet}
                saleData={saleData}
            />
            {/* to trigger if wallet isn't connected */}
            <Web3SignIn 
                open={triggerWeb3SignIn}
                close={closeWeb3SignInModal}
                wallet={wallet}
                closeWeb3SignInModal={closeWeb3SignInModal}
            />
        </div>
    )
}

export default HomeDesktop