import { ChainId, Fetcher, WETH, Route } from '@uniswap/sdk'

export const getPoolData = async () => {

    // let web3 = await web3Enabled()

    const uniswapPoolData = {
        rate: '',
        tokensAvailable : ''
    }
    //token data//
    const chainId = ChainId.MAINNET
    const tokenAddress = '0x117c2aca45d87958ba054cb85af0fd57be00d624'
    // fetch book data//
    const BOOKS = await Fetcher.fetchTokenData(chainId, tokenAddress)
    // fetch pair data //
    const pair = await Fetcher.fetchPairData(BOOKS, WETH[BOOKS.chainId])
    const route = new Route([pair], WETH[BOOKS.chainId])
    //get price from pool
    const uniswapPoolPrice = route.midPrice.invert().toSignificant(6)
    //save things on object to return//
    uniswapPoolData.rate = uniswapPoolPrice
        
    return uniswapPoolData
}