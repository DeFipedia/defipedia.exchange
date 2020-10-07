import Web3 from 'web3'

export const convertWeiToETH = (valueInWei) => {
    const web3 = new Web3(window.ethereum)
    const valueInEth = web3.utils.fromWei(valueInWei, 'ether')

    return valueInEth
}