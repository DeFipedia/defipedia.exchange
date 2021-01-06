import React, {useState} from 'react';
import {Modal, Card, CardContent, Typography, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {Button} from './Button' 
import {buyTokensFromSale} from '../functions/buyTokensFromSale'
import ValueInput from './ValueInput';
import Web3SignIn from './Web3SignIn';
import { Label } from './Label';

const BuyModal = (props) => {

    const {open, close, wallet, saleData} = props

    const [triggerWeb3SignIn, setTriggerWeb3SignIn] = useState(false) //state for buy mmodal//

    let displayPrice = 0 //for displaying price in correcct format, only used in this component to display//

    const [purchaseAount, setPurchaseAmount] = useState(displayPrice)

    if(saleData.price) {
        displayPrice = saleData.price.toString().substring(0,8)
    }

    const handleInputValueChange = (value) => {
        setPurchaseAmount(displayPrice*value)
    }

    const buyTokens = async () => {
        let valueInput = document.querySelector('.value-input input').value //this will be replaced with refs//
        await buyTokensFromSale(valueInput, wallet)
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
                            <section className='token-data'>           
                                    <h4>{displayPrice} ETH</h4>
                                <span>
                                    <p>950 available</p>
                                    <ValueInput handleInputValueChange={handleInputValueChange} />
                                </span>   
                            </section>
                        </CardContent>
                    </Card>
                    <div className='actions'>
                        <Label>{purchaseAount}</Label>
                        {  wallet.account !=null 
                            ? 
                            <React.Fragment>
                                
                                <Button label='Buy' variant='primary' onClick={buyTokens}/>
                            </React.Fragment>
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