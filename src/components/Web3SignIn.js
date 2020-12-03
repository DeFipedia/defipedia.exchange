import React from 'react'
import {Modal, Card, IconButton, CardContent, Button} from '@material-ui/core'
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
                        <Button onClick={() => wallet.connect()}>MetaMask</Button>
                        <Button onClick={() => wallet.connect('portis')}>Portis</Button>
                        <Button onClick={() => {wallet.connect('fortmatic')}}>Fortmatic</Button>
                        <Button onClick={() => {wallet.connect('walletconnect')}}>Wallet Connect</Button>
                        <Button onClick={() => {wallet.connect('authereum')}}>Authereum</Button>
                        <Button onClick={() => {wallet.connect('frame')}}>Frame</Button>
                        <Button onClick={() => {wallet.connect('walletlink')}}>Wallet Link</Button>
                    </section>
                </CardContent>
           </Card>
        </Modal>
        </>
    )
}

export default Web3SignIn