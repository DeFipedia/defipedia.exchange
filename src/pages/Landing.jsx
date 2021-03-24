import { Button, LinearProgress} from '@material-ui/core'
import React from 'react'

const LandingPage = (props) => {

    let {saleData} = props

    let availableBOOKS = ((100 * Number(saleData.availableBOOKS))/1000)

    const linkToDiscord = () => {
        window.open('https://discord.gg/u8K4TnQJ', '_blank')
    }

    const linkToBuy = () => {
        window.location.href='/home'
    }

    const linkToTelegram = () => {
        window.open('https://t.me/defiped', '_blank')
    }

    // @DEV: this is treated as stand-alone page, hence many components like button are just particular to this page and not a variant available to button//
    // Consistency is not a concept for this  as it  designed by  Sam  Ratnakar and sole purpose of this page is marketing.//
    return(
        <div className='landing-page'>
            {/* Section 1 */}
            <section>
                <div className='header'>
                    <Button variant='contained' onClick={linkToDiscord}>
                        <i className='fab fa-discord' />
                        Discord
                    </Button>
                    <Button variant='contained' onClick={linkToBuy}>Buy</Button>
                </div>
                <div className='hero'>
                    <p>$BOOKS</p>
                    <p>SNAP SHOT OF DEFI IN A BOOK</p>
                </div>
            </section>
            {/* Section 2 */}
            <section>
                <img src={process.env.PUBLIC_URL + 'assets/BOOKS_Render.png'} alt='books-render'/>
            </section>
            {/* Section 3 */}
            <section>
                <span>
                    <p>We documented the future of Finance.</p>
                    <p>Only 1,000 will exist.</p>
                </span>
                <span>
                    <LinearProgress variant='determinate' value={100 - availableBOOKS}/>
                    <button onClick={linkToBuy}>Buy</button>
                </span>
                <span>
                    <article>
                        <p>Redeem $Books, get a DeFiPack</p>
                        <p>What's included?</p>
                    </article>
                    <article>
                        <p>Exclusive NFTs, Stickers, Physical book in premium packaging</p>
                        <p>Free shipping worldwide.</p>
                    </article>
                    <article>
                        <img src={process.env.PUBLIC_URL + 'assets/card-picture.png'} alt='card-asset'></img>
                        <label>Limited to 1000</label>
                    </article>
                    </span>
            </section>
            {/* Section 4 */}
            <section>
                    <span>
                        <article>
                            <p>Support the DeFiPedia DAO</p>
                            <p>Funds go towards development of DeFiPedia.</p>
                        </article>
                        <article>
                            <p>We're building for the community, with the community</p>
                            <p>Creating tools such as a term database, chat bot, and a decentralized help desk.</p>
                            <p>We're going to revolutionize learning.</p>
                            <p>Funds go towards the development of decentralized educational tools.</p>
                            <p>Join us</p>
                        </article>
                        <article>
                            <p>"In order to change an existing paradigm you do not struggle to try and change the problematic model. You create a new model and make the old one obsolete."</p>
                            <p>- Buckminster Fuller</p>
                        </article>
                    </span>
            </section>
            {/* Section 5 */}
            <section>
                <span>
                    <button onClick={linkToDiscord}>
                        <i className='fab fa-discord' />
                        Discord
                    </button>
                    <button onClick={linkToTelegram}>
                        <i class="fab fa-telegram"></i>
                        Telegram
                    </button>
                </span>
            </section>
        </div>
    )
}

export default LandingPage