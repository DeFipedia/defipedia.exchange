import Web3 from 'web3'
import abi from '../data/abi.json'
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
    const smartContractAddr = `${process.env.REACT_APP_SMART_CONTRACT_ADDRESS}`
    const contract = new web3.eth.Contract(abi, smartContractAddr)
    contract.methods.name().call().then(console.log)
    contract.methods.totalSupply().call().then(console.log)

}

export default connectWeb3

