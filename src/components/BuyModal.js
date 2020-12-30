import React from 'react';
import {Modal, Card, CardContent, Typography, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {Button} from './Button' 
import {buyTokensFromSale} from '../functions/buyTokensFromSale'
import ValueInput from './ValueInput';

const BuyModal = (props) => {

    const {open, close} = props

    const buyTokens = async () => {
        let inputValue = document.querySelector('.value-input input').value //this will be replaced with refs//
        await buyTokensFromSale(inputValue)
    }

    return(
        <Modal
            open={open}
            // onClose={handleClose}
            aria-labelledby='$BOOKS Buy Modal'
            aria-describedby='$BOOKS Buy Modal'
        >
            <div className='buy-modal'>
                <Card>
                    <CardContent>
                        <span className='header'>
                            <Typography variant='h4'>Buy</Typography>
                            <IconButton elevation={0} onClick={close}>
                                <CloseIcon style={{fill: '#FF6400'}} />
                            </IconButton>
                        </span>
                        <img alt='$BOOK cover art' src={process.env.PUBLIC_URL +  'assets/books-presale.png'}/>
                        <section className='data-indicator'>
                            <div className='token-data'>            
                                <h4>$ 200 USD</h4> {/* This is dummy value*/}
                            </div>
                            <ValueInput />
                        </section>
                    </CardContent>
                </Card>
                <div className='actions'>
                    <Button label='Buy' variant='primary' onClick={buyTokens}/>
                {/* {accountAddr != null 
                    ? <Button className='buy-button' onClick={() => buyToken()}>Buy Now</Button>
                    : <Button className='buy-button'onClick={() => connectWallet()}>Connect Wallet</Button>
                } */}
                </div>
            </div>
        </Modal>
    )
}

export default BuyModal