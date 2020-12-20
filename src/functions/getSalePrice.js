import {web3Enabled} from './web3Enabled'
import saleABI from '../data/saleABI.json'
import {convertWeiToETH} from './convertWeiToETH'

export const getSalePrice = async () => {
    const web3 = await web3Enabled()

    const saleContractAddr = `${process.env.REACT_APP_SALE_CONTRACT_ADDRESS}`

    const saleContract =  new web3.eth.Contract(saleABI, saleContractAddr)

    let rate = await saleContract.methods.rate().call()
    let currentPrice = ((1 * 1000000000000000000) / rate)
    let currentPriceInETH = convertWeiToETH(currentPrice.toString())
    console.log('current price in ETH', currentPriceInETH)
    return currentPriceInETH
}   