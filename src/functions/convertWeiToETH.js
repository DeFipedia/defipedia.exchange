import Web3 from 'web3'
import {web3Enabled} from './web3Enabled'

export const convertWeiToETH = (valueInWei) => {
    if(web3Enabled) {
        const web3 = new Web3(window.ethereum)
        const valueInEth = web3.utils.fromWei(valueInWei, 'ether')

        return valueInEth
    }else{
        alert('Please install a Ethereum-compatible browser or extension like MetaMask to use this dApp')
    }
}