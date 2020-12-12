import React, {useState} from 'react'
import {useTheme, Grid} from '@material-ui/core'
import SaleCard from '../components/SaleCard'
import {Button} from '../components/Button'
import {Footer} from '../components/Footer'
import {convertWeiToETH} from '../functions/convertWeiToETH'

const HomeDesktop = (props) => {

    const {uniswapData} = props
    console.log(uniswapData)

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