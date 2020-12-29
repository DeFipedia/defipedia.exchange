import {web3Enabled} from './web3Enabled'
import saleABI from '../data/saleABI.json'
import {convertWeiToETH} from './convertWeiToETH'

export const getSalePrice = async () => {
    const web3 = await web3Enabled()

    const saleContractAddr = `${process.env.REACT_APP_SALE_CONTRACT_ADDRESS}`
    const saleContract =  new web3.eth.Contract(saleABI, saleContractAddr)
    
    let rate = await saleContract.methods.rate().call() //price is in wei and needs to be converted to be accurate
    console.log(rate)
    //this is logic to convert Openzeppelin's "rate" (calculated with TKBits) into price(WEI)
    let currentPrice = await ((1 * 1000000000000000000) / rate)
    console.log(currentPrice)
    //this coverts token's price into ETH and String format
    // let currentPriceInETH = convertWeiToETH(currentPrice.toString())
    return currentPrice
}   