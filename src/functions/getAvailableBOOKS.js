// @Dev:  this function is meant to return number of available tokens ($BOOKS) from DeFipedia's wallet //
import {web3Enabled} from './web3Enabled'
import booksABI from '../data/booksABI.json'

const getAvailableBOOKS = async() => {

    let web3 = await web3Enabled()

    const BOOKSTokenContractAddr =  process.env.REACT_APP_BOOKS_TOKEN_ADDRESS
    const BOOKSContract = new web3.eth.Contract(booksABI, BOOKSTokenContractAddr)
    const DFP_Wallet_Addr = process.env.REACT_APP_DFP_ADDR

    let availableBOOKS = await BOOKSContract.methods.balanceOf(DFP_Wallet_Addr).call()

    //this is just to show precise number//
    let result = availableBOOKS.substring(0,3)

    return result
}

export default getAvailableBOOKS