/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import {Grid} from '@material-ui/core'
import axios from 'axios'

const LandingPage = (props) => {

    const {saleData} = props

    const [ethPrice, setEthPrice] = useState(null)

    const uniswapLink = 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x117c2aca45d87958ba054cb85af0fd57be00d624'


    useEffect(async() => {
        let price = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
        let ethPrice = price.data.ethereum.usd.toString()
        setEthPrice(ethPrice)
        })

    return(
        <div className='landing-page'>
            {/* this is the opaque container for all the elements, all to the other elements need to be outside to avoid opacity */}
            <section className='opaque-wrapper' />
            <nav>
                <ul>
                    <li>
                        <a href='https://discord.defipedia.io/' target='_blank' rel='noreferrer'>
                            DEFIPEDIA.IO
                        </a>
                    </li>
                    <li>
                        <a href='https://discord.defipedia.io/' target='_blank' rel='noreferrer'>
                            Discord
                        </a>
                    </li>
                    <li>
                        <a href='https://t.me/defiped' target='_blank' rel='noreferrer'>
                            Telegram
                        </a>
                    </li>
                </ul>
            </nav> 
            <section className='hero'>
                <p>$BOOKS</p>
                <img src={process.env.PUBLIC_URL + 'assets/book.svg'} alt='$books-render'/> 
                <p>{saleData ? saleData.availableBOOKS : 1000} LEFT</p>
            </section>
            <Grid container className='data'>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <p>${ethPrice ? (ethPrice * saleData.price).toString().substring(0, 7) : 0.5}<sup>+23%</sup></p>
                    <span>
                    <a href={uniswapLink} target='_blank' rel='noreferrer'>
                        <button> 
                            <img src={process.env.PUBLIC_URL + 'assets/uni-logo.svg'} alt='uniswap-logo'/>
                            Uniswap 
                        </button>
                        </a>
                        <a href='/home' rel='noreferrer'>
                        <button>
                            <img src={process.env.PUBLIC_URL + 'assets/dfp-logo.svg'} alt='defipedia-logo'/>
                            Buy Direct
                        </button>
                        </a>
                    </span>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <p>Support DeFiPedia</p>
                    <article>
                        We're building a project for the community, with the community, without VC funding. Tools such as a wiki for the web3 space, an educational chat bot and a decentralized help desk. These are all the things we're working on to push DeFi forward to a billion users. 
                    </article>
                    <p>Join US</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingPage