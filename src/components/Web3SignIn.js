import React from 'react'
import {Modal, Card, Button, IconButton} from '@material-ui/core'
import { useWallet, UseWalletProvider } from 'use-wallet'
import Web3 from "web3";
import CloseIcon from '@material-ui/icons/Close';

const Web3SignIn = (props) => {

    const {open} = props

    const wallet = useWallet()

    return(
        <>
        <Modal
            open={open}
        >
           <Card className='web3-modal'>
           <IconButton elevation={0} >
                <CloseIcon />
            </IconButton>
            <Button onClick={() => wallet.connect()}>MetaMask</Button>
            <Button onClick={() => wallet.connect('portis')}>Portis</Button>
           </Card>
        </Modal>
        </>
    )
}

export default Web3SignIn