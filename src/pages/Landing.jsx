import { Button, LinearProgress} from '@material-ui/core'
import React from 'react'
import {IMG} from '../assets/bg.png'

const LandingPage = () => {
    // @DEV: this is treated as stand-alone page, hence many components like button are just particular to this page and not a variant available to button//
    // Consistency is not a concept for this  as it  designed by  Sam  Ratnakar and sole purpose of this page is marketing.//
    return(
        <div className='landing-page'>
            {/* Section 1 */}
            <section>
                <div className='header'>
                    <Button variant='contained'>
                        <i className='fab fa-discord' />
                        Discord
                    </Button>
                    <Button variant='contained'>Buy</Button>
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
                    <LinearProgress variant='determinate' value={30}/>
                    <button>Buy</button>
                </span>
                <span>
                    <article>
                        <p>$BOOKS includes a DeFiPack</p>
                        <p>What's included?</p>
                    </article>
                    <article>
                        <p>Stickers, exclusive NFTs,</p>
                        <p>POAPs, free shipping.</p>
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
                            <p>Funds go towards funding the development of DeFiPedia.</p>
                        </article>
                        <article>
                            <p>We're building a project for the community, with the community, without VC funding.</p>
                            <p>Tools such as educational resources, chat bot and a decentralized help desk.</p>
                            <p>These are all the things  we're working on to push DeFi forward to a billion users.</p>
                            <p>Join us</p>
                        </article>
                        <article>
                            <p>"In order to change an existing paradigm you do not struggle to try and change the problematic model. You create a new model and make the old one obsolete."</p>
                            <p>- Buckminster Fuller</p>
                        </article>
                    </span>
            </section>
        </div>
    )
}

export default LandingPage