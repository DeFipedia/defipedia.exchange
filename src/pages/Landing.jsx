import { Button} from '@material-ui/core'
import React from 'react'

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
        </div>
    )
}

export default LandingPage