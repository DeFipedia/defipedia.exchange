import React, {useState} from 'react'
import { useTheme, Tooltip } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {Link } from 'react-router-dom'
import BuyModal from '../components/BuyModal'
import {Button} from '../components/Button'

const Details = (props) => {
    //state//
    // const [open, setOpen] = useState(false)
    // const [modalOpen, setModalOpen] = useState(false)
    const [triggerBuyModal, setTriggerBuyModal] = useState(false)
    // for theme//
    let theme = useTheme()
    // token data eth is to use calue of token in ETH as smart contracts return value in Wei and to avoid mutating actual response from smart contracts//
    const tokenDataETH ={}
    //methods//
    const showBuyModal = () => {
        setTriggerBuyModal(true)
    }

    const closeBuyModal = () => {
        setTriggerBuyModal(false)
    }

    return(
        <div className='details-page'>
            <div className='details-card'>
                <span className='header'>
                    <h4>BOOKS Stats</h4>
                    {/* <IconButton elevation={0}> */}
                    <Link to='/'>
                    <CloseIcon style={{fill: '#FF6400'}}/>
                    </Link>
                </span>
                <section className='detail-card-data'>
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
                    <a href='https://medium.com/@DeFiPedia/defipedia-debuts-with-books-collectors-defi-pack-b5eaf570ae9' target='_blank' rel='noopener noreferrer'>Read More</a>
                </section>
            </div>
            {/* ------------ */}
            <div className='actions'>
                <a rel='noopener noreferrer' href='https://uniswap.info/pair/0xe108fdab8b03f6bd4c35b8e7a2249b120bf91a87' target='_blank'>
                    <Button label='Buy on Uniswap' variant='primary'/>
                </a>
                 <span className='coming-soon-actions'>
                    <Button label='Sell on Uniswap' variant='default' size='small'/>
                    <Button label='Redeem' variant='default' size='small'/>
                </span>
                <Button label='Buy on Sale' variant='primary'/>
                <span className='coming-soon-actions'>
                </span>
            </div>
            {/* <BuyModal 
                open={triggerBuyModal} 
                close={closeBuyModal} 
                tokenDataETH={tokenDataETH} 
                tokenData={tokenData}
            /> */}
        </div>
    )
}

export default Details