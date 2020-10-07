import Web3 from 'web3'

export const web3Enabled = async () => {
    var web3 = window.web3
    if(typeof web3 !== 'undefined' || window.ethereum) {
        web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
        return true
    }else{
        return false
    }
}