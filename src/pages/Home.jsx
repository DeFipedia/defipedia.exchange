import React, {useState} from 'react'
import {Card, CardContent, Tooltip, Button, useTheme} from '@material-ui/core'
import Popup from '../components/Popup'
import CardModal from '../components/CardModal'

const Home = () => {
    // for theme//
    let theme = useTheme()
    // for state variables//
    const [open, setOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
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
    //----------//
    return(
        <div className='home-page'>
            <CardModal open={modalOpen} handleClose={closeDynamicPricingModal}/>
            <div className='card-panel'>
                <Card>
                    <CardContent>
                        <h3>$BOOKS on Uniswap</h3> 
                        <p>2020 DeFi Packs</p>  
                        <img alt='cover-art' src={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}/>  
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
                    </CardContent>                
                </Card>
                <section className='learn-more-section'>
                    <p>Buy and sell real books with digital currency. Delivered on demand. <a href='/details'>Learn More</a></p>
                </section>
            </div>
            <div className='actions'>
                <Button variant='contained' style={{backgroundColor: theme.palette.primary.main}} className='buy-btn'>Buy</Button>
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
                        <h3>$BOOKS on Auction</h3> 
                        <p>2020 DeFi Packs</p>  
                        <img alt='cover-art' src={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}/>  
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
                    </CardContent>                
                </Card>
                <section className='learn-more-section'>
                    <p>Buy and sell real books with digital currency. Delivered on demand. <a href='/details'>Learn More</a></p>
                </section>
            </div>
            <div className='actions'>
                <Button variant='contained' style={{backgroundColor: theme.palette.primary.main}} className='buy-btn'>Buy</Button>
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
        </div>
    )
}

export default Home