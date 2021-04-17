import React from 'react'
import {Grid} from '@material-ui/core'

const LandingPage = (props) => {

    // const {saleData} = props

    const uniswapLink = 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x117c2aca45d87958ba054cb85af0fd57be00d624'
    // //this returns percentage of available BOOKS//
    // let availableBOOKS = ((100 * Number(saleData.availableBOOKS))/1000)

    // const linkToDiscord = () => {
    //     window.open('https://discord.gg/u8K4TnQJ', '_blank')
    // }

    // const linkToBuy = () => {
    //     window.location.href='/home'
    // }

    // const linkToTelegram = () => {
    //     window.open('https://t.me/defiped', '_blank')
    // }

    // @DEV: this is treated as stand-alone page, hence many components like button are just particular to this page and not a variant available to button//
    // Consistency is not a concept for this  as it  designed by  Sam  Ratnakar and sole purpose of this page is marketing.//
    return(
        <div className='landing-page'>
            {/* this is the opaque container for all the elements, all to the other elements need to be outside to avoid opacity */}
            <section className='opaque-wrapper' />
            <nav>
                <a href='https://www.defipedia.io/' target='_blank' rel='noreferrer'>
                    <li>DEFIPEDIA.IO</li>
                </a>
                <a href='https://discord.defipedia.io/' target='_blank' rel='noreferrer'>
                    <li>Discord</li>
                </a>
                <a href='https://t.me/defiped' target='_blank' rel='noreferrer'>
                    <li>Telegram</li>
                </a>
            </nav> 
            <section className='hero'>
                <p>$BOOKS</p>
                <img src={process.env.PUBLIC_URL + 'assets/book.svg'} alt='$books-render'/> 
                <p>902 Left</p>
            </section>
            <Grid container className='data'>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <p>$1002.33<sup>+23%</sup></p>
                    <span>
                    <a href={uniswapLink} target='_blank' rel='noreferrer'>
                        <button> 
                            <img src={process.env.PUBLIC_URL + 'assets/uni-logo.svg'} alt='uniswap-logo'/>
                            Uniswap 
                        </button>
                        </a>
                        <a href='https://defipedia.exchange/home' target='_blank' rel='noreferrer'>
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