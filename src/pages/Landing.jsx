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
            {/* <section>
                <img src={process.env.PUBLIC_URL + 'assets/BOOKS_Render.png'} alt='books-render'/>
            </section> */}
            {/* Section 3 */}
            {/* <section>
                <span>
                    <p>We documented the future of Finance.</p>
                    <p>Only 1,000 will exist.</p>
                    <LinearProgress variant='determinate' value={30}/>
                    <Button variant='contained'>Buy</Button>
                </span>
            </section> */}
            {/* Section 4 */}
            {/* <section>
                    <span>
                        <p>$BOOKS includes a DeFiPack</p>
                        <p>What's included?</p>
                        <p>Stickers, exclusive NFTs,</p>
                        <p>POAPs, free shipping.</p>
                    </span>
            </section> */}
        </div>
    )
}

export default LandingPage