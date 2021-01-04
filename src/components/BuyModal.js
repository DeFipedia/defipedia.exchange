import React, {useState} from 'react';
import {Modal, Card, CardContent, Typography, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {Button} from './Button' 
import {buyTokensFromSale} from '../functions/buyTokensFromSale'
import ValueInput from './ValueInput';
import Web3SignIn from './Web3SignIn';

const BuyModal = (props) => {

    const {open, close, wallet, saleData} = props

    const [triggerWeb3SignIn, setTriggerWeb3SignIn] = useState(false) //state for buy mmodal//

    let displayPrice = 0
    if(saleData.price) {
        displayPrice = saleData.price.toString().substring(0,8)
    }

    const buyTokens = async () => {
        let inputValue = document.querySelector('.value-input input').value //this will be replaced with refs//
        await buyTokensFromSale(inputValue, wallet)
    }

    const showWeb3SignIn = () => {
        setTriggerWeb3SignIn(true)
    }

    const closeWeb3SignInModal = () => {
        setTriggerWeb3SignIn(false)
    }

    return(
        <React.Fragment>
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
                                    <h4>{displayPrice} ETH</h4>
                                </div>
                                <ValueInput />
                            </section>
                        </CardContent>
                    </Card>
                    <div className='actions'>
                        {  wallet.account !=null 
                            ? <Button label='Buy' variant='primary' onClick={buyTokens}/>
                            : <Button label='Connect Wallet' variant='primary' onClick={showWeb3SignIn} />
                        }
                    </div>
                </div>
            </Modal>
            <Web3SignIn 
                open={triggerWeb3SignIn}
                close={closeWeb3SignInModal}
                wallet={wallet}
                closeWeb3SignInModal={closeWeb3SignInModal}
            />
        </React.Fragment>
    )
}

export default BuyModal