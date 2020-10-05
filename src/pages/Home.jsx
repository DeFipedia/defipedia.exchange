import React, {useState} from 'react'
import {Card, CardContent, Tooltip, Button, useTheme} from '@material-ui/core'
import Popup from '../components/Popup'
import CardModal from '../components/CardModal'
import BuyModal from '../components/BuyModal'

const Home = () => {
    // for theme//
    let theme = useTheme()
    // for state variables//
    const [open, setOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [triggerBuyModal, setTriggerBuyModal] = useState(false)
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
    //----------//
    return(
        <div className='home-page'>
            <CardModal open={modalOpen} handleClose={closeDynamicPricingModal}/>
            <div className='card-panel'>
                <Card>
                    <CardContent>
                        <span className='card-header'>
                            <div className='card-title'>
                                <h3>$BOOKS on </h3> <h3 style={{color: theme.palette.primary.main}}>Uniswap</h3>
                            </div>
                        </span>
                        <p>2020 DeFi Packs</p>  
                        <img alt='cover-art' src={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}/>  
                        <section className='card-data'>
                            <h4>$ 200.00 USD</h4> 
                            <span>
                                <p>50/50 available</p>
                                <div>
                                    <p>Dynamic Pricing Stats</p> 
                                    <img 
                                        alt='question-mark' 
                                        src={process.env.PUBLIC_URL + '/assets/question-mark.png'} 
                                        onClick={() => showDynamicPricingStatModal()}
                                    />
                                </div>
                            </span>
                        </section>                
                    </CardContent>                
                </Card>
                <section className='learn-more-section'>
                    <p>Buy and sell real books with digital currency. Delivered on demand. <a href='/details'>Learn More</a></p>
                </section>
            </div>
            <div className='actions'>
                <Button variant='contained' style={{backgroundColor: theme.palette.primary.main}} className='buy-btn'>Buy on Uniswap</Button>
                <span className='coming-soon-actions'>
                    <Tooltip title='Coming Soon'>
                        <Button onClick={showComingSoon} variant='contained' disableElevation>Sell</Button>
                    </Tooltip>
                    <Tooltip title='Coming Soon'>               
                        <Button variant='contained' disableElevation>Redeem</Button>
                    </Tooltip>
                </span>
            </div>

        {/* --------------------------------------------------------------------------------------------------------------------------------- */}
        {/* Rational:- usually card should be a seperate component to be reusable  but here it's being used just twice making the efforts redundant and there were time constarints  */}
        {/* TODO:- if updated and card is being used 4-5 or more times then make it a reusable component */}
        <div className='card-panel'>
                <Card>
                    <CardContent>
                        <span className='card-header'>
                            <div className='card-title'>
                                <h3>$BOOKS on</h3>  <h3 style={{color: theme.palette.primary.main}}>Auction</h3> 
                            </div>
                            <a href='https://www.dutchswap.com/' target='_blank' rel='noopener noreferrer'>
                                <img alt='dutch swap logo' src={process.env.PUBLIC_URL + 'assets/dutch_swap.svg'}/>
                            </a>
                        </span>
                        <p>2020 DeFi Packs</p>  
                        <img alt='cover-art' src={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}/> 
                        <section className='card-data'>
                            <h4>$ 1000.00 USD</h4> 
                            <span>
                                <p>950/950 available</p>
                                <div>
                                    <p>Dynamic Pricing Stats</p> 
                                    <img 
                                        alt='question-mark' 
                                        src={process.env.PUBLIC_URL + '/assets/question-mark.png'}
                                        onClick={() => showDynamicPricingStatModal()}
                                    />
                                </div>
                            </span>
                        </section>                 
                    </CardContent>                
                </Card>
                <section className='learn-more-section'>
                    <p>Buy and sell real books with digital currency. Delivered on demand. <a href='/details'>Learn More</a></p>
                </section>
            </div>
            <div className='actions'>
                <Button 
                    variant='contained' 
                    style={{backgroundColor: theme.palette.primary.main}} 
                    className='buy-btn'
                    onClick={showBuyModal}
                >
                    Buy at Auction
                </Button>
                <span className='coming-soon-actions'>
                    <Tooltip title='Coming Soon'>
                        <Button onClick={showComingSoon} variant='contained' disableElevation>Sell</Button>
                    </Tooltip>
                    <Tooltip title='Coming Soon'>               
                        <Button variant='contained' disableElevation>Redeem</Button>
                    </Tooltip>
                </span>
            </div>
        <Popup open={open}/>
        <BuyModal open={triggerBuyModal}/>
        </div>
    )
}

export default Home