import auctionABI from '../data/auctionABI.json'
import {web3Enabled} from './web3Enabled'

export const connectAuction = async () => {

        let web3 = await web3Enabled()
        console.log(web3)
        const contractAddr = `${process.env.REACT_APP_CONTRACT_ADDRESS}`
        const auctionContract = new web3.eth.Contract(auctionABI, contractAddr)
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

        let tokensRemaining = await auctionContract.methods.tokensRemaining().call()
        tokenData.tokensRemaining = tokensRemaining

        let tokenPrice = await auctionContract.methods.priceFunction().call()
        tokenData.tokenPrice =  tokenPrice
    
        console.log(tokenData)
        return tokenData

}   



