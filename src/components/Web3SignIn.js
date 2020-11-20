import React from 'react'
import {Modal, Card, Button, IconButton, CardContent, Typography, ButtonBase} from '@material-ui/core'
import { useWallet, UseWalletProvider } from 'use-wallet'
import Web3 from "web3";
import CloseIcon from '@material-ui/icons/Close';

const Web3SignIn = (props) => {

    const {open, close} = props

    const wallet = useWallet()

    return(
        <>
        <Modal
            open={open}
        >
           <Card className='web3-modal'>
                <CardContent>
                    <span className='header'>
                        <Typography variant='h4'>Select a wallet</Typography>
                        <IconButton elevation={0} >
                            <CloseIcon style={{fill: '#FF6400'}} onClick={close} />
                        </IconButton>
                    </span>
                </CardContent>
            <Button onClick={() => wallet.connect()}>MetaMask</Button>
            <Button onClick={() => wallet.connect('portis')}>Portis</Button>
            <Button onClick={() => {wallet.connect('fortmatic')}}>fortmatic</Button>
            <Button onClick={() => {wallet.connect('walletconnect')}}>Wallet Connect</Button>
            <Button onClick={() => {wallet.connect('authereum')}}>Authereum</Button>
            <Button onClick={() => {wallet.connect('frame')}}>Frame</Button>
            <Button onClick={() => {wallet.connect('walletlink')}}>Wallet Link</Button>
           </Card>
        </Modal>
        </>
    )
}

export default Web3SignIn