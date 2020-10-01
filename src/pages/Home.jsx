import React, {useState} from 'react'
import {Card, CardContent, Tooltip, Button, useTheme} from '@material-ui/core'
import Popup from '../components/Popup'

const Home = () => {
    let theme = useTheme()

    const [open, setOpen] = useState(false)

    const showComingSoon = () => {
        setOpen(true) 
    }
    //----------//
    return(
        <div className='home-page'>
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
                                <img alt='question-mark' src={process.env.PUBLIC_URL + '/assets/question-mark.png'}/>
                            </div>
                        </span>                
                    </CardContent>                
                </Card>
                {/* ------------------------- */}
                <section className='learn-more-section'>
                    <p>Buy and sell real books with digital currency. Delivered on demand. Learn more</p>
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