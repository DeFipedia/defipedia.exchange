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
            <Button colorScheme='secondary' variant='solid' onClick={onOpen}>Connect Wallet</Button>

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