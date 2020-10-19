import auctionABI from '../data/auctionABI.json'
import {convertWeiToETH} from './convertWeiToETH'
import {web3Enabled} from './web3Enabled'

const contractAddr = `${process.env.REACT_APP_CONTRACT_ADDRESS}`

export const commitEth = async (amount) => {
        let web3 = await web3Enabled()
        const auctionContract = new web3.eth.Contract(auctionABI, contractAddr)

        // this method will ask to connect wallet if not done before//
        let ethereum = window.ethereum
        let accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        let selectedAccount = accounts[0]

        const method = auctionContract.methods.commitEth()
        const value = convertWeiToETH(amount) 
        await sendTransaction(method, selectedAccount, value);

}

export const sendTransaction = async (method, from, value) => {
    let web3 = await web3Enabled()
    return new Promise(async (resolve, reject) => {
        try {
            const gasPriceInWei = await web3.eth.getGasPrice()

            let valueInWei = 0;
            if (value) {
                valueInWei = web3.utils.toWei(value, 'ether');
            }
            const options = {
                from: from,
                gasPrice: web3.utils.toHex(gasPriceInWei),
                value: valueInWei
            }
            method.send(options, (err, txHash) => {
                if (err) {
                    console.log('err:', err)
                    return resolve(false);
                }
                console.log('success msg here')
                return resolve(txHash);
            })
        } catch (error) {
            if (error.code !== 4001)
                console.log('can not commit eth', error)
            return resolve(false);
        }
    });
}
