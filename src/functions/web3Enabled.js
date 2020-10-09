import Web3 from 'web3'

export const web3Enabled = async () => {
    // the mordern way, not injected web3
    var web3 = window.web3
    if(window.ethereum) {
        
        web3 = await new Web3(web3.currentProvider)
        try{
            await window.ethereum.enable()
            return web3
        }catch(error) {
            console.error(error);
        }   
    }
    //for legacy dapp browsers - inject web3//
    else if(window.web3){
        const web3 = window.web3
        console.log('Injected web3 detected')
        return web3
    }
    // else fallback to httpProvider (infura in this case) to work(just displays data) on non ethereum caompatibae browsers//
    else{
        const provider = new Web3.providers.HttpProvider(process.env.REACT_APP_INFURA_PROJECT_ID)
        web3 = new Web3(provider)
        return web3
    }
}