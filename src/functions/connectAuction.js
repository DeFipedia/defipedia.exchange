import Web3 from 'web3'
import auctionABI from '../data/auctionABI.json'

// const provider = new Web3.providers.HttpProvider(`https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`)
const web3 = new Web3(window.ethereum)
const contractAddr = `${process.env.REACT_APP_CONTRACT_ADDRESS}`
const auctionContract = new web3.eth.Contract(auctionABI, contractAddr)

export const connectAuction = async () => {
    let tokenData = {
        tokenPrice: 0,
        tokensRemaining: 0,
        totalTokens: 950
    }

    web3.eth.net.isListening().then(() => {
        console.log('web 3 is connected')
    }).catch((e) => {
        console.log('Something went wrong', e)
    })
    // let startPrice = await auctionContract.methods.startPrice().call()
    // let totalTokens = await auctionContract.methods.totalTokens().call().then(console.log)
    // console.log(totalTokens)
    let tokensRemaining = await auctionContract.methods.tokensRemaining().call()
    tokenData.tokensRemaining = tokensRemaining
    // let commitmentsTotal = await auctionContract.methods.commitmentsTotal().call()
    let tokenPrice = await auctionContract.methods.priceFunction().call()
    tokenData.tokenPrice =  tokenPrice

    return tokenData
}   



