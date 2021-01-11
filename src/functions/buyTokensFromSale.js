import {web3Enabled} from './web3Enabled'
import saleABI from '../data/saleABI.json'
import {getSalePrice} from './getSalePrice'

const saleContractAddress = process.env.REACT_APP_SALE_CONTRACT_ADDRESS

export const buyTokensFromSale =  async (tokenAmount, wallet) => {
    //extracting provider from wallet object//
    let walletProvider = await wallet.ethereum
    //setting wallet as web3 provider//
    let web3 = await web3Enabled()
    web3.setProvider(walletProvider)
    const saleContract = new web3.eth.Contract(saleABI, saleContractAddress)
    let selectedAccount = wallet.account
    const method = saleContract.methods.buyTokens(selectedAccount)
    const price = await getSalePrice()
    const value = (price * tokenAmount).toString() 
    await sendTransaction(method, selectedAccount, value);
}

export const sendTransaction = async (method, from, value) => {
    const web3 = await web3Enabled()
    return new Promise(async (resolve, reject) => {
        try {
            let gasPriceInWei = await web3.eth.getGasPrice()
            let valueInWei = 0;

            if (value) {
                valueInWei = web3.utils.toWei(value, 'ether');
            }
            const options = {
                from: from,
                gasLimit: 1000000,
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
                console.log('can not send eth', error)
            return resolve(false);
        }
    });
}