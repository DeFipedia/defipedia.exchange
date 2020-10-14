import React, {useState} from 'react';
import {Modal, Card, CardContent, Typography, Button, TextField, useTheme} from '@material-ui/core'
import {commitEth} from '../functions/commitEth'
import {convertETHToWei} from '../functions/convertETHToWei'

const BuyModal = (props) => {

    let theme = useTheme()

    const {open, close, tokenDataETH, tokenData} = props

    const [inputValue, setInputValue] = useState()

    const buyToken = async () => {
        let inputValidation = await validateInput()
        if(inputValidation === true){
            const payableValue = await convertETHToWei(inputValue)
            commitEth(payableValue)
        }
    }
    
    const validateInput = () => {
        let maxValue = (tokenDataETH.tokenPrice * tokenDataETH.tokensRemaining)
        if(inputValue > maxValue) {
            alert('You can not select more than 5')
            return false
            
        }else if (inputValue < 0.01) {
            alert('Sorry, you can not buy less than 0.01')
            return false
        }else if (typeof inputValue != Number) {
            alert('Please insert a valid number')
            return false
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
                                <p>{tokenDataETH.tokenPrice} ETH / each</p>
                                <p>{tokenDataETH.tokensRemaining}/950 available</p>
                            </div>
                            <div className='value-input'> 
                                <input
                                    value={inputValue}
                                    placeholder='Enter amount (ETH)'
                                    variant='outlined' 
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