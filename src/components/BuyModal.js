import React, {useState} from 'react';
import {Modal, Card, CardContent, Typography, Button} from '@material-ui/core'
import ValueInput from './ValueInput';
import {commitEth} from '../functions/commitEth'
import Web3 from 'web3'
import auctionABI from '../data/auctionABI.json'


const BuyModal = (props) => {

    const {open, close, tokenDataETH} = props

    const buyToken = async () => {
        // const numberOfTokens  = tokenData.tokenPrice
        // commitEth(numberOfTokens)
    }
    
    const [value, setValue] = useState(1)

    const increaseValue = () => {
        setValue(prevValue => prevValue + 1)
    }

    const decreaseValue = () => {
        setValue(prevValue => prevValue - 1)
    }

    const validateInput = () => {
        if(value > 5) {
            // give a alert//
            alert('You can not select more than 5')
            //set back to 5//
            setValue(5)
            
        }else if (value <= 0) {
            alert('Value can not be negative or zero')
            setValue(1)
        }
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
                        <Typography variant='h4'>Buy</Typography>
                        <img alt='$BOOK cover art' src={process.env.PUBLIC_URL +  'assets/cover-art.jpg'}/>
                        <section className='data-indicator'>
                            <div className='token-data'>
                                <p>{tokenDataETH.tokenPrice} ETH</p>
                                <p>{tokenDataETH.tokensRemaining}/950 available</p>
                            </div>
                            <div className='unit-indicator'>
                                <ValueInput 
                                    increaseValue={increaseValue}
                                    decreaseValue={decreaseValue}
                                    value={value}
                                    validateInput={validateInput}
                                />
                            </div>
                        </section>
                    </CardContent>
                </Card>
                <div className='actions'>
                    <Button className='buy-button' onClick={() => buyToken()}>
                        Buy Now
                    </Button>
                    <Button className='cancel-button' onClick={close}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default BuyModal