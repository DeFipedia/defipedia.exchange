import Web3 from 'web3'
import auctionABI from '../data/auctionABI.json'

// const provider = new Web3.providers.HttpProvider(`https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`)
const web3 = new Web3(window.ethereum)
const contractAddr = `${process.env.REACT_APP_CONTRACT_ADDRESS}`
const auctionContract = new web3.eth.Contract(auctionABI, contractAddr)

export const commitEth = async (contractAddress, amount) => {

    const from = window.web3.eth.accounts[0]
    console.log(from)
    const method = auctionContract.methods.commitEth()
    // await sendTransaction(method, from, amount)
    // const method = auctionContract.methods.commitEth().send({
    //     from: account,
    //     gas: 470000,
    //     value: amount,
    //     gasPrice: 0
    // })
    await sendTransaction(method, from, amount);
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
                console.log('error message here')
            return resolve(false);
        }
    });
}

// export const estimateGas = () => {

//     const gasEstimate = web3.eth.estimateGas {
//         from: from,
//         to: to,

//     }
// }