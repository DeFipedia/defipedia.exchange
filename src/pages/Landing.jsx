import React from 'react'

const LandingPage = (props) => {

    // const {saleData} = props

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
                <li>DEFIPEDIA.IO</li>
               <li>Discord</li>
               <li>Telegram</li>
            </nav> 
            <section className='hero'>
                <p>$BOOKS</p>
                <img src={process.env.PUBLIC_URL + 'assets/book.svg'} alt='$books-render'/> 
                {/* <p>902 Left</p> */}
            </section>
        </div>
    )
}

export default LandingPage