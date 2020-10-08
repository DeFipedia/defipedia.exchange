// import { getAddress } from 'ethers/lib/utils'
import Web3 from 'web3'
import auctionABI from '../data/auctionABI.json'
import {convertWeiToETH} from './convertWeiToETH'
import {web3Enabled} from './web3Enabled'
import {ethers, utils} from 'ethers'

const web3 = new Web3(window.ethereum)
const contractAddr = `${process.env.REACT_APP_CONTRACT_ADDRESS}`
const auctionContract = new web3.eth.Contract(auctionABI, contractAddr)

export const commitEth = async (amount) => {

    if(web3Enabled) {
        let from = ''
        
        let getAccountAddr = await web3.eth.getAccounts().then(e => {
            from = e
            console.log('from i', from)
        }).catch(e => {console.log(e)})
        console.log('from t', typeof from[0])
        console.log('from 0', from)
        console.log(getAccountAddr)
        let userAddr = from[0]
        // const method = auctionContract.methods.commitEth()
        // const value = convertWeiToETH(amount) 
        // await sendTransaction(method, userAddr, value);
    }
}

export const sendTransaction = (method, from, value) => {
    return new Promise(async (resolve, reject) => {
        try {
            const gasPriceInWei = await web3.eth.getGasPrice()
            // const estimatedGas = await estimateGas(method, from, gasPriceInWei * 20);
            let valueInWei = 0;
            if (value) {
                valueInWei = web3.utils.toWei(value, 'ether');
            }
            const options = {
                from: from,
                gasPrice: web3.utils.toHex(gasPriceInWei),
                // gasLimit: estimatedGas,
                value: valueInWei
            }
            method.send(options, (err, txHash) => {
                if (err) {
                    console.log('err:', err)
                    return resolve(false);
                }
                // store.dispatch('notification/addTransaction', { transaction: newTransaction, coinbase: from });
                // showTransactionSentModal(txHash);
                console.log('success msg here')
                return resolve(txHash);
            })
        } catch (error) {
            if (error.code !== 4001)
                // showErrorModal(error.message);
                console.log('can not commit eth', error)
            return resolve(false);
        }
    });
}
