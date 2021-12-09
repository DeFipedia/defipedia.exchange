import React from 'react'

import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack, useDisclosure } from "@chakra-ui/react";
import { useWallet } from 'use-wallet';

function Web3SignIn () {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const wallet = useWallet()
    const connectWallet = async (connector) => {
    //this is a trick for metamask as useWallet doesn't take an argument for metamask while it requires one for every other wallet//
        if(connector === 'metamask') {
            await wallet.connect()
        }else{
            await wallet.connect(connector)
        }
    }

    return(
        <>
            <Button colorScheme='secondary' onClick={onOpen}>Connect Wallet</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Select a Wallet to Connect</ModalHeader>
                    <ModalCloseButton mt={2}/>
                    <ModalBody>
                        <VStack spacing={4} mt={8} mb={8}>
                        <Button size='md' onClick={() => connectWallet('metamask')}>Metamask</Button>
                        <Button size='md' onClick={() => connectWallet('portis')}>Portis</Button>
                        <Button  size='md' onClick={() => connectWallet('fortmatic')}>Fortmatic</Button>
                        <Button  size='md' onClick={() => connectWallet('walletconnect')}>Wallet Connect</Button>
                        <Button size='md'  onClick={() => connectWallet('walletlink')}>Wallet Link</Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default Web3SignIn
// import {Modal, Card, IconButton, CardContent} from '@material-ui/core'
// import CloseIcon from '@material-ui/icons/Close';
// import {Button} from './Button'

// const Web3SignIn = (props) => {
//     //to do: create web instance here with conected wallet provider//
//     //-------------------------------------------------------------//
//     const {open, close, wallet, closeWeb3SignInModal} = props //this is just state for modal//

//     const connectWallet = async (connector) => {
//         //this is a trick for metamask as useWallet doesn't take an argument for metamask while it requires one for every other wallet//
//         if(connector === 'metamask') {
//             await wallet.connect()
//             closeWeb3SignInModal()
//         }else{
//             await wallet.connect(connector)
//             closeWeb3SignInModal()
//         }
//     }

//     return(
//         <>
//         <Modal
//             open={open}
//             className='web3-signIn'
//         >
//            <Card>
//                 <CardContent>
//                     {/* @DEV: this is the header */}
//                     <span>
//                         <p>Select a wallet to connect</p>
//                         <IconButton elevation={0} onClick={close}>
//                             <CloseIcon style={{fill: '#FF6400'}} />
//                         </IconButton>
//                     </span>
//                     {/* Buttons for all the wallets */}
//                     <section className='wallet-connectors'>
//                         <Button variant='primary' onClick={() => connectWallet('metamask')}>MetaMask</Button>
//                         <Button variant='primary' onClick={() => connectWallet('portis')}>Portis</Button>
//                         <Button variant='primary' onClick={() => connectWallet('fortmatic')}>Fortmatic</Button>
//                         <Button variant='primary' onClick={() => connectWallet('walletconnect')}>Wallet Connect</Button>
//                         <Button variant='primary' onClick={() => connectWallet('authereum')}>Authereum</Button>
//                         <Button variant='primary' onClick={() => connectWallet('frame')}>Frame</Button>
//                         <Button variant='primary' onClick={() => connectWallet('walletlink')}>Wallet Link</Button>
//                     </section>
//                 </CardContent>
//            </Card>
//         </Modal>
//         </>
//     )
// }

// export default Web3SignIn