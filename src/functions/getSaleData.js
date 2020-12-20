import {web3Enabled} from './web3Enabled'
import saleABI from '../data/saleABI.json'

export const getSaleData = async () => {
    const web3 = await web3Enabled()

    const saleContractAddr = `${process.env.REACT_APP_SALE_CONTRACT_ADDRESS}`

    const saleContract =  new web3.eth.Contract(saleABI, saleContractAddr)

    let currentRate = await saleContract.methods.rate().call()
    console.log('this', currentRate)
}   