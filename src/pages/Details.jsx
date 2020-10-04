import React from 'react'
import { useTheme, Button, Tooltip } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {Link } from 'react-router-dom'
const Details = () => {
    // for theme//
    let theme = useTheme()

    return(
        <div className='details-page'>
            <div className='detail-card'>
                <span className='header'>
                    <h4>BOOKS Stats</h4>
                    {/* <IconButton elevation={0}> */}
                    <Link to='/'>
                    <CloseIcon style={{fill: '#FF6400'}}/>
                    </Link>

                        
                    {/* </IconButton> */}
                </span>
                <section className='detail-card-section'>
                        <div>
                            <p><span role='img' aria-label='book emoji'>📓</span> Initial BOOKS on UniSwap</p>
                            <p>50</p>
                        </div>
                        <div>
                            <p><span role='img' aria-label='book emoji'>📓</span> Initial BOOKS on Auction</p>
                            <p>950</p>
                        </div>
                        <div>
                            <p><span role='img' aria-label='fire emoji'>🔥</span> Redeemed BOOKS</p>
                            <p>0</p>
                        </div>
                        <div>
                            <p><span role='img' aria-label='liquid emoji'>💦</span> BOOKS Pool</p>
                            <p>1000</p>
                        </div>

                    </section>
                <section className='detail-card-description'>
                    <p>The price of BOOKS changes when tokens are bought and sold</p>
                    <a href='https://uniswap.exchange/' target='_blank' rel='noopener noreferrer'>Read More</a>
                </section>
            </div>

            {/* ------------ */}
            <div className='actions'>
                <Button variant='contained' style={{backgroundColor: theme.palette.primary.main}} className='buy-btn'>Buy on UniSwap</Button>
                <span className='coming-soon-actions'>
                    <Tooltip title='Coming Soon'>
                        <Button variant='contained' disableElevation>Sell on UniSwap</Button>
                    </Tooltip>
                    <Tooltip title='Coming Soon'>               
                        <Button variant='contained' disableElevation>Redeem</Button>
                    </Tooltip>
                </span>
                <Button variant='contained' style={{backgroundColor: theme.palette.primary.main}} className='buy-btn'>Buy at Auction</Button>
                <span className='coming-soon-actions'>
                    <Tooltip title='Coming Soon'>
                        <Button variant='contained' disableElevation>Sell on Auction</Button>
                    </Tooltip>
                    <Tooltip title='Coming Soon'>               
                        <Button variant='contained' disableElevation>Redeem</Button>
                    </Tooltip>
                </span>
            </div>
        </div>
    )
}

export default Details