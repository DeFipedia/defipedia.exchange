import Web3 from 'web3'
import auctionABI from '../data/auctionABI.json'

const provider = new Web3.providers.HttpProvider(`https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`)
const web3 = new Web3(provider)
const contractAddr = `${process.env.REACT_APP_CONTRACT_ADDRESS}`
const auctionContract = new web3.eth.Contract(auctionABI, contractAddr)

export const commitEth = async (amount) => {
    const account = await window.web3.eth.accounts[0]
    console.log(account)
    const method = auctionContract.methods.commitEth().send({
        from: account,
        gas: 470000,
        value: amount,
        gasPrice: 0
    })
    // await sendTransaction(method, account, amount);
}



// export const sendTransaction = (method, from, value) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             // const gasPriceInWei = await getGasPrice();
//             // const estimatedGas = await estimateGas(method, from, gasPriceInWei * 20);
//             let valueInWei = 0;
//             if (value) {
//                 valueInWei = toWei(value, 'ether');
//             }
//             const options = {
//                 from: from,
//                 gasPrice: toHex(estimatedGas),
//                 // gasLimit: estimatedGas,
//                 value: valueInWei
//             }
//             method.send(options, (err, txHash) => {
//                 if (err) {
//                     console.log('err:', err)
//                     return resolve(false);
//                 }
//                 // store.dispatch('notification/addTransaction', { transaction: newTransaction, coinbase: from });
//                 showTransactionSentModal(txHash);
//                 return resolve(txHash);
//             })
//         } catch (error) {
//             if (error.code !== 4001)
//                 showErrorModal(error.message);
//             return resolve(false);
//         }
//     });
// }