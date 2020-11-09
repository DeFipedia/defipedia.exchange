import auctionABI from '../data/auctionABI.json'
import {web3Enabled} from './web3Enabled'

export const withdrawCommit = async () => {
    let web3 = await web3Enabled()

    console.log('This is from withdraw commit func')
    const contractAddr = `${process.env.REACT_APP_CONTRACT_ADDRESS}`
    const auctionContract = new web3.eth.Contract(auctionABI, contractAddr)
}