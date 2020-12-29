import React, {useState} from 'react';
import {Modal, Card, CardContent, Typography, IconButton, useTheme} from '@material-ui/core'
import {commitEth} from '../functions/commitEth'
import {convertETHToWei} from '../functions/convertETHToWei'
import CloseIcon from '@material-ui/icons/Close';
import {Button} from './Button' 
import {buyTokensFromSale} from '../functions/buyTokensFromSale'
import ValueInput from './ValueInput';

const BuyModal = (props) => {

    let theme = useTheme()

    const {open, close, accountAddr, connectWallet} = props

    const [inputValue, setInputValue] = useState(0)

    const buyTokens = async () => {
        // let inputValidation = await validateInput()
        // if(inputValidation === true){
        //     const payableValue = await convertETHToWei(inputValue)
        //     commitEth(payableValue)
        // }else{
        //     alert('Please enter a valid number')
        // }
        await buyTokensFromSale()
    }

    const validateInput = () => {
        let maxValue = 15//(tokenDataETH.tokenPrice * tokenDataETH.tokensRemaining)
        if(inputValue > maxValue) {
            alert('You can not select more than 5')
            return false
            
        }else if (inputValue < 0.01) {
            alert('Sorry, you can not buy less than 0.01')
            return false
        }else if (onlyContainsDigits(inputValue) === false) {
            alert('Please insert a valid number')
            return false
        }
        return true
    }

    const onlyContainsDigits = (str) => {
        if((/\d/.test(str)) === true){
            console.log(true)
            return true
        }else{
            console.log(false)
            return false
        }
    }

    const handleValueInputChange =  (e) => {
        let value = e.target.value
        if(onlyContainsDigits(value) === false){
             alert('Please insert a valid number')
        }else {
            setInputValue(value)
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
                            {/* <div className='value-input'> 
                                <input
                                    value={inputValue}
                                    variant='outlined' 
                                    onChange={handleValueInputChange}
                                />             
                            </div> */}
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