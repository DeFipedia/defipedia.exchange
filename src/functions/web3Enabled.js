import Web3 from 'web3'

export const web3Enabled = async () => {
    var web3 = window.web3
    if(window.ethereum) {
        web3 = new Web3(web3.currentProvider)
        await window.ethereum.enable()
        return web3
    }else{
        return false
    }
}