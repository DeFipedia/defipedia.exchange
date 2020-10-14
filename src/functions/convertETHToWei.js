import Web3 from 'web3'
import {web3Enabled} from './web3Enabled'

export const convertETHToWei = (valueInEth) => {
    if(web3Enabled) {
        const web3 = new Web3(window.ethereum)
        const valueInETH = web3.utils.toWei(valueInEth, 'ether')

        return valueInETH
    }else{
        alert('Please install a Ethereum-compatible browser or extension like MetaMask to use this dApp')
    }
}