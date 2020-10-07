import Web3 from 'web3'

export const web3Enabled = () => {
    if(window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        window.ethereum.enable()
        return true
    }else{
        return false
    }
}