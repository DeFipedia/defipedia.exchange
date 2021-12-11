import React from 'react'
import { useWallet } from 'use-wallet';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack, useDisclosure, Image } from "@chakra-ui/react";


function WalletOption(props) {
    const {label, option, logo} = props
    const wallet = useWallet()
    const connectWallet = async (connector) => {
        console.log(connector)
    //this is a trick for metamask as useWallet doesn't take an argument for metamask while it requires one for every other wallet//
        if(connector === 'metamask') {
            await wallet.connect()
        }else{
            await wallet.connect(connector)
        }
    }

    return(
        <>
        <Button variant='bland' size='md' onClick={() => connectWallet(option)}>
            <Image src={process.env.PUBLIC_URL + `/wallet/${logo}`} alt={logo} h='25px' w='25px' mr='5px'/>     
        {label}</Button>
        </>

    )
}


function Web3SignIn () {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return(
        <>
            <Button colorScheme='secondary' variant='solid' onClick={onOpen}>Connect Wallet</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Select a Wallet to Connect</ModalHeader>
                    <ModalCloseButton mt={2}/>
                    <ModalBody>
                        <VStack spacing={4} mt={8} mb={8}>
                            <WalletOption label='Metamask' option='metamask' logo='metamask.svg' />
                            <WalletOption label='Portis' option='portis' logo='portis.png' />
                            <WalletOption label='Fortmatic' option='fortmatic' logo='fortmatic.png' />
                            <WalletOption label='Wallet Connect' option='walletconnect' logo='walletconnect.png' />
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default Web3SignIn