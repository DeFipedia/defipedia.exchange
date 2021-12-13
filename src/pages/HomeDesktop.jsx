import { Button, SimpleGrid, Box } from '@chakra-ui/react'
import React from 'react'
import SaleCard from '../components/SaleCard'
import Web3SignIn from '../components/Web3SignIn'

import {withdrawCommit} from '../functions/withdrawCommit'
// import Web3SignIn from '../components/Web3SignIn'
function HomeDesktop(props) {
    const {uniswapData, saleData, wallet} = props

    const withdrawFromDutchSwap = () => {
        withdrawCommit(wallet.account)
    }

    const buyOnUniswap = () => {
        window.open('https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x117c2aca45d87958ba054cb85af0fd57be00d624', '_blank')
    }

    const sellOnUniswap = () => {
        window.open('https://app.uniswap.org/#/swap?inputCurrency=0x117c2aca45d87958ba054cb85af0fd57be00d624&outputCurrency=ETH', '_blank')
    }

    return(
            <SimpleGrid columns={3} spacing='40px' justifyContent='center' >
                {/* This is UniSwap Card  */}
                <Box>
                    <SaleCard 
                        title='Uniswap'
                        image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                        price={uniswapData.rate}
                        numberOfTokens='50'
                        desc='Support the free market'
                        learnMoreTag='Swap here!'
                        />
                        <Button size='md' variant='solid' colorScheme='primary' onClick={buyOnUniswap}>Buy</Button>
                        <Button size='md' variant='bland' onClick={sellOnUniswap}>Sell on Uniswap</Button>
                </Box>
                    {/* Sale Card */}
                    <Box>
                        <SaleCard 
                             title='Pre-sale'
                             image={process.env.PUBLIC_URL + 'assets/books-presale.png'}
                             price={saleData.price}
                             numberOfTokens={saleData.availableBOOKS}
                             desc='Support DeFiPedia development'
                             learnMoreTag='Buy direct!'
                         />
                         {
                             wallet.account == null ? <Web3SignIn size='md'/> :
                        <Button size='md' variant='solid' colorScheme='secondary'>Buy</Button>
                         }
                        <Button size='md' variant='disabled'>Redeem (coming soon)</Button>
                    </Box>
                <Box>
                    <SaleCard 
                             title='Auction'
                             image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                             totalTokens='950'
                            desc='The pre-sale has moved. Early participants can reclaim their pre-sale deposits here.'
                         />
                         <Button size='md' variant='bland'>Withdraw deposit</Button>
                </Box>
            </SimpleGrid>
    )
}
export default HomeDesktop
// import React, {useState} from 'react'
// import {Grid} from '@material-ui/core'
// import SaleCard from '../components/SaleCard'
// import {Button} from '../components/Button'
// import {Footer} from '../components/Footer'
// import BuyModal from '../components/BuyModal'
// import Web3SignIn from '../components/Web3SignIn'

// const HomeDesktop = (props) => {

//     const {uniswapData, saleData, wallet} = props

//     // for handling modal triggers //
//     const [triggerBuyModal, setTriggerBuyModal] = useState(false)

//     //for handling state of Web3SignIn - wallet connection modal//
//     const [triggerWeb3SignIn, setTriggerWeb3SignIn] = useState(false)

//     // methods //
//     const showBuyModal = () => {
//         setTriggerBuyModal(true)
//     }

//     const closeBuyModal = () => {
//         setTriggerBuyModal(false)
//     }

//     const showWeb3SignIn = () => {
//         setTriggerWeb3SignIn(true)
//     }

//     const closeWeb3SignInModal = () => {
//         setTriggerWeb3SignIn(false)
//     }

//     return(
//         <div className='home-page'>
//             <Grid container justify='center' spacing={2}>
//                 <Grid item>
//                     {/* This is UniSwap Card */}
//                     <section className='uniswap-card'>
//                         <SaleCard 
//                             title='Uniswap'
//                             image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
//                             price={uniswapData.rate}
//                             numberOfTokens='50'
//                             desc='Support the free market'
//                             learnMoreTag='Swap here!'
//                         />
//                         <Button label='Buy' variant='primary' onClick={redirectToUniswap} />
//                         <Button label='Sell on Uniswap' variant='disabled'/>
//                     </section>
//                 </Grid>
//                 <Grid item>
//                     {/* Sale Card */}
//                     <section className='pre-sale-card'>
//                         <SaleCard 
//                             title='Pre-sale'
//                             image={process.env.PUBLIC_URL + 'assets/books-presale.png'}
//                             price={saleData.price}
//                             numberOfTokens={saleData.availableBOOKS}
//                             desc='Support DeFiPedia development'
//                             learnMoreTag='Buy direct!'
//                         />
//                         {   wallet.account != null
//                             ?
//                             <Button label='Buy' variant='secondary' onClick={showBuyModal}/>
//                             :
//                             <Button label='Connect Wallet' variant='secondary' onClick={showWeb3SignIn}/>
//                         }
//                         {/* <Button label='Buy' variant='secondary' onClick={showBuyModal}/> */}
//                         <Button label='Redeem (coming soon)' variant='disabled' className='subscribe-btn-desktop' />
//                     </section>
//                 </Grid>
//                 <Grid item>
//                     <section className='dutch-auction-card'>
//                         {/* this div is masking layer */}
//                         <div className='dutch-auction-mask' />
//                         <SaleCard 
//                             title='Auction'
//                             image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
//                             totalTokens='950'
//                             desc='The pre-sale has moved. Early participants can reclaim their pre-sale deposits here.'
//                         />
//                         <Button label='Withdraw deposit' variant='default' onClick={withdrawFromDutchSwap} />
//                     </section>
//                 </Grid>
//             </Grid>    
//             <Footer />
//             <BuyModal 
//                 open={triggerBuyModal} 
//                 close={closeBuyModal} 
//                 wallet={wallet}
//                 saleData={saleData}
//             />
//             {/* to trigger if wallet isn't connected */}
//             <Web3SignIn 
//                 open={triggerWeb3SignIn}
//                 close={closeWeb3SignInModal}
//                 wallet={wallet}
//                 closeWeb3SignInModal={closeWeb3SignInModal}
//             />
//         </div>
//     )
// }

// export default HomeDesktop