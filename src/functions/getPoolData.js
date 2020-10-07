import { ChainId, Token, Fetcher, WETH, Route } from '@uniswap/sdk'
import {web3Enabled} from './web3Enabled'
export const getPoolData = async () => {

    if(web3Enabled){
        const uniswapPoolData = {
            rate: '',
            tokensAvailable : ''
        }
        //token data//
        const chainId = ChainId.MAINNET
        const tokenAddress = '0x117c2aca45d87958ba054cb85af0fd57be00d624'
        const decimals = 18
        // fetch book data//
        const BOOKS = await Fetcher.fetchTokenData(chainId, tokenAddress)
        // fetch pair data //
        const pair = await Fetcher.fetchPairData(BOOKS, WETH[BOOKS.chainId])
        const route = new Route([pair], WETH[BOOKS.chainId])
        //get price from pool
        const uniswapPoolRate = route.midPrice.invert().toSignificant(6)
    
        //save things on object to return//
        uniswapPoolData.rate = uniswapPoolRate
    
        return uniswapPoolData
    }else{
        alert('Please install a Ethereum-compatible browser or extension like MetaMask to use this dApp')
    }

}

// 0xE108FDAB8B03f6bd4C35b8e7a2249b120bf91A87//