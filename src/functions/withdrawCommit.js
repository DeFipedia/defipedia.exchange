import auctionABI from '../data/auctionABI.json'
import {web3Enabled} from './web3Enabled'

// @dev this method is created to return user's commit as we were close to end date and far away from min requirement goal. Hence, named like it//
// @notice:- Contracts's "withdrawTokens" send token to users if auction goes successfull else returns eth to user//
export const withdrawCommit = async () => {
    let web3 = await web3Enabled()

    console.log('This is from withdraw commit func')
    const contractAddr = `${process.env.REACT_APP_CONTRACT_ADDRESS}`
    const auctionContract = new web3.eth.Contract(auctionABI, contractAddr)
    
    let returnFunds = await auctionContract.methods.withdrawTokens()
}