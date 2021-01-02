import React from 'react'
import {Modal, Card, IconButton, CardContent} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {Button} from './Button'

const Web3SignIn = (props) => {
    //to do: create web instance here with conected wallet provider//
    //-------------------------------------------------------------//
    const {open, close, wallet} = props //this is just state for modal//

    const connectWallet = async (connector) => {
        //this is a trick for metamask as useWallet doesn't take an argument for metamask while it requires one for every other wallet//
        if(connector === 'metamask') {
            wallet.connect()
        }else{
            wallet.connect(connector)
        }
    }

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
                        <IconButton elevation={0} onClick={close}>
                            <CloseIcon style={{fill: '#FF6400'}} />
                        </IconButton>
                    </span>
                    {/* Buttons for all the wallets */}
                    <section className='wallet-connectors'>
                        <Button variant='primary' onClick={() => connectWallet('metamask')}>MetaMask</Button>
                        <Button variant='primary' onClick={() => connectWallet('portis')}>Portis</Button>
                        <Button variant='primary' onClick={() => connectWallet('fortmatic')}>Fortmatic</Button>
                        <Button variant='primary' onClick={() => connectWallet('walletconnect')}>Wallet Connect</Button>
                        <Button variant='primary' onClick={() => connectWallet('authereum')}>Authereum</Button>
                        <Button variant='primary' onClick={() => connectWallet('frame')}>Frame</Button>
                        <Button variant='primary' onClick={() => connectWallet('walletlink')}>Wallet Link</Button>
                    </section>
                </CardContent>
           </Card>
        </Modal>
        </>
    )
}

export default Web3SignIn