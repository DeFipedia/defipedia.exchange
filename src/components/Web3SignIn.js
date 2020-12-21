import React from 'react'
import {Modal, Card, IconButton, CardContent} from '@material-ui/core'
import { useWallet, UseWalletProvider } from 'use-wallet'
import Web3 from "web3";
import CloseIcon from '@material-ui/icons/Close';
import {Button} from './Button'

const Web3SignIn = (props) => {

    const {open, close, wallet} = props

    return(
        <>
        <Modal
            open={open}
            className='web3-signIn'
        >
           <Card>
                <CardContent>
                    {/* @DEV: this is the header */}
                    <span>
                        <p>Select a wallet to connect</p>
                        <IconButton elevation={0} >
                            <CloseIcon style={{fill: '#FF6400'}} onClick={close} />
                        </IconButton>
                    </span>
                    {/* Buttons for all the wallets */}
                    <section className='wallet-connectors'>
                        <Button variant='primary' onClick={() => wallet.connect()}>MetaMask</Button>
                        <Button variant='primary' onClick={() => wallet.connect('portis')}>Portis</Button>
                        <Button variant='primary' onClick={() => {wallet.connect('fortmatic')}}>Fortmatic</Button>
                        <Button variant='primary' onClick={() => {wallet.connect('walletconnect')}}>Wallet Connect</Button>
                        <Button variant='primary' onClick={() => {wallet.connect('authereum')}}>Authereum</Button>
                        <Button variant='primary' onClick={() => {wallet.connect('frame')}}>Frame</Button>
                        <Button variant='primary' onClick={() => {wallet.connect('walletlink')}}>Wallet Link</Button>
                    </section>
                </CardContent>
           </Card>
        </Modal>
        </>
    )
}

export default Web3SignIn