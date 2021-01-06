import auctionABI from '../data/auctionABI.json'
import {web3Enabled} from './web3Enabled'

// @dev this method is created to return user's commit as we were close to end date and far away from min requirement goal. Hence, named like it//
// @notice:- Contracts's "withdrawTokens" send token to users if auction goes successfull else returns eth to user//
export const withdrawCommit = async (accountAddress) => {
    let web3 = await web3Enabled()
    let accountAddr = accountAddress
    console.log('This is from withdraw commit func')
    const contractAddr = `${process.env.REACT_APP_CONTRACT_ADDRESS}`
    const auctionContract = new web3.eth.Contract(auctionABI, contractAddr)
    
    let method = await auctionContract.methods.withdrawTokens()

    await sendTransaction(method, accountAddr)
}

export const sendTransaction = async (method, from) => {
    let web3 = await web3Enabled()
    return new Promise(async (resolve, reject) => {
        try {
            const gasPriceInWei = await web3.eth.getGasPrice()
            // const estimatedGas = await estimateGas(method, from, gasPriceInWei * 20);
            const estimatedGas = 82395
            const options = {
                from: from,
                gasPrice: web3.utils.toHex(gasPriceInWei),
                gasLimit: estimatedGas,
            }
            method.send(options, (err, txHash) => {
                if (err) {
                    console.log('err:', err)
                    return resolve(false);
                }
                console.log('success')
                return resolve(txHash);
            })
        } catch (error) {
            if (error.code !== 4001)
                console.log('failed')
            return resolve(false);
        }
    });
}