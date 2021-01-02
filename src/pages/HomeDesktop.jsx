import React, {useState} from 'react'
import {Grid} from '@material-ui/core'
import SaleCard from '../components/SaleCard'
import {Button} from '../components/Button'
import {Footer} from '../components/Footer'
import BuyModal from '../components/BuyModal'

const HomeDesktop = (props) => {

    const {uniswapData, saleData, wallet} = props

    // for handling buy modal trigger //
    const [triggerBuyModal, setTriggerBuyModal] = useState(false)

    // methods //
    const showBuyModal = () => {
        setTriggerBuyModal(true)
    }

    const closeBuyModal = () => {
        setTriggerBuyModal(false)
    }

    return(
        <div className='home-page'>
            <Grid container justify='center' spacing={2}>
                <Grid item>
                    {/* This is UniSwap Card */}
                    <section>
                        <SaleCard 
                            title='Uniswap'
                            image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                            price={uniswapData.rate}
                            totalTokens='50'
                            learnMoreTag='Swap here!'
                        />
                        <Button label='Buy' variant='primary' />
                        <Button label='Sell on Uniswap' variant='disabled'/>
                    </section>
                </Grid>
                <Grid item>
                    {/* Sale Card */}
                    <section>
                        <SaleCard 
                            title='Pre-sale'
                            image={process.env.PUBLIC_URL + 'assets/books-presale.png'}
                            price={saleData.price}
                            totalTokens='950'
                            learnMoreTag='Buy direct!'
                        />
                        <Button label='Buy' variant='secondary' onClick={showBuyModal}/>
                        <Button label='Redeem (coming soon)' variant='disabled' className='subscribe-btn-desktop' />
                    </section>
                </Grid>
                <Grid item>
                    <section>
                        {/* this div is masking layer */}
                        <div className='auction-card-mask' />
                        <p className='auction-mask-text'>Auction Closed</p>
                        <SaleCard 
                            title='Auction'
                            image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                            totalTokens='950'
                        />
                        <Button label='Withdraw deposit' variant='default'/>
                    </section>
                </Grid>
            </Grid>    
            <Footer />
            <BuyModal 
            open={triggerBuyModal} 
            close={closeBuyModal} 
            wallet={wallet}
            />
        </div>
    )
}

export default HomeDesktop