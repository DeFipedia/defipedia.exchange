import React, {useState} from 'react'
import {Grid} from '@material-ui/core'
import SaleCard from '../components/SaleCard'
import {Button} from '../components/Button'
import {Footer} from '../components/Footer'
import BuyModal from '../components/BuyModal'
import {withdrawCommit} from '../functions/withdrawCommit'

const HomeDesktop = (props) => {

    const {uniswapData, saleData, wallet} = props

    // for handling modal triggers //
    const [triggerBuyModal, setTriggerBuyModal] = useState(false)

    // methods //
    const showBuyModal = () => {
        setTriggerBuyModal(true)
    }

    const closeBuyModal = () => {
        setTriggerBuyModal(false)
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
                        <Button label='Buy' variant='secondary' onClick={showBuyModal}/>
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
        </div>
    )
}

export default HomeDesktop