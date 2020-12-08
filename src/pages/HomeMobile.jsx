import React from 'react';
// @DEV: these were import as we are using a react port of slick carousel and it doesn't come with CSS bundled//
//So, we have also installd slick-carousel and imported css as mentioned in docs//
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import SaleCard from '../components/SaleCard'
import {Button} from '../components/Button'

const HomeMobile = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    }
    return(
        <div className='home-page-mobile'>
            <Slider>
                {/* This is UniSwap Card */}
                <section>
                    <SaleCard 
                        title='Uniswap'
                        image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                        price='15'
                        totalTokens='50'
                        learnMoreTag='Swap here!'
                    />
                    <Button label='Buy' />
                    <Button label='Sell on Uniswap' />
                </section>
                {/* Sale Card */}
                <section>
                    <SaleCard 
                        title='Pre-sale'
                        image={process.env.PUBLIC_URL + 'assets/books-presale.png'}
                        price='dummy price'
                        totalTokens='950'
                        learnMoreTag='Buy direct!'
                    />
                    <Button label='Buy' />
                    <Button label='Redeem (coming soon)' />
                </section>
                {/* Ducth auction card */}
                <section>
                    <SaleCard 
                        title='Auction'
                        image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                        totalTokens='950'
                    />
                    <Button label='Withdraw deposit' />
                </section>
            </Slider>
        </div>

    )
}

export default HomeMobile