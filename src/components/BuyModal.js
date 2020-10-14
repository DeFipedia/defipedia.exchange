import React, {useState} from 'react';
import {Modal, Card, CardContent, Typography, Button, TextField} from '@material-ui/core'
import ValueInput from './ValueInput';
import {commitEth} from '../functions/commitEth'

const BuyModal = (props) => {

    const {open, close, tokenDataETH, tokenData} = props

    const [inputValue, setInputValue] = useState(0)

    const buyToken = async () => {
        let inputValidation = await validateInput()
        if(inputValidation === true){
            const payableValue  = (tokenData.tokenPrice * inputValue).toString()
            commitEth(payableValue)
        }
    }
    
    // const increaseValue = () => {
    //     setValue(prevValue => prevValue + 1)
    // }

    // const decreaseValue = () => {
    //     setValue(prevValue => prevValue - 1)
    // }

    const validateInput = () => {
        if(inputValue > 5) {
            // give a alert//
            alert('You can not select more than 5')
            //set back to 5//
            // setValue(5)
            return false
            
        }else if (inputValue < 0.01) {
            alert('Sorry, you can not buy less than 0.01')
            // setValue(1)
            return false
        }else if (inputValue === NaN) {
            alert('Please insert a valid number')
        }
        return true
    }

    const handleValueInputChange = (e) => {
        setInputValue(e.target.value)
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
                                <p>{tokenDataETH.tokenPrice} ETH </p>
                                <p>{tokenDataETH.tokensRemaining}/950 available</p>
                            </div>
                            <div className='value-input'> 
                                <TextField 
                                    id='filled-basic' 
                                    label='Filled' 
                                    variant='filled' 
                                    onChange={handleValueInputChange}
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
                        Close
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default BuyModal