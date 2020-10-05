import Web3 from 'web3'
import auctionABI from '../data/auctionABI.json'

const connectWeb3 = async () => {
    // const web3 = new Web3(Web3.givenProvider)
    // const  accounts = await web3.eth.getAccounts()
    const provider = new Web3.providers.HttpProvider(`https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`)
    const web3 = new Web3(provider)
    web3.eth.net.isListening().then(() => {
        console.log('web 3 is connected')
    }).catch((e) => {
        console.log('Something went wrong', e)
    })
    const contractAddr = `${process.env.REACT_APP_CONTRACT_ADDRESS}`
    const auctionContract = new web3.eth.Contract(auctionABI, contractAddr)
    auctionContract.methods.startPrice().call().then(console.log)
    auctionContract.methods.totalTokens().call().then(console.log)
    auctionContract.methods.tokensRemaining().call().then(console.log)
    auctionContract.methods.tokenPrice().call().then(console.log)
//     let startPrice = await auctionContract.methods.startPrice().call()
// console.log('start price', startPrice)
// let totalTokens = await auctionContract.methods.totalTokens().call()
// console.log('total tokens', totalTokens)
// let tokensRemaining = await auctionContract.methods.tokensRemaining().call()
// console.log('tokens remaining', tokensRemaining)
}   

export default connectWeb3

